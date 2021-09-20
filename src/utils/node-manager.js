import pRetry from 'p-retry';

const HTTP_REQUEST_TIMEOUT = 10000; // 5 seconds
const THIRTY_SECONDS = 30 * 1000;

const UNHEALTHY_CODES = [403, 502, 503, 504];

class NodeManager {
	#nodes = [];

	constructor(nodes = []) {
		this.#nodes = nodes.map((node) => {
			return {
				lastUsed: Date.now(),
				url: node,
				healthy: true // assume node is healthy to begin with
			};
		});
	}

	async #makeCall(url, options) {
		// Handle request timeout
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), HTTP_REQUEST_TIMEOUT);

		const nodeUrl = this.#getNodeUrl();
		const endpoint = `${nodeUrl}${url}`;
		let response;
		let error;

		// Make request to node
		try {
			response = await fetch(endpoint, {
				signal: controller.signal,
				...options
			});
		} catch (err) {
			error = err;
		}

		// clear the http req timeout
		clearTimeout(timeoutId);

		// Handle Response Errors
		if ((response && !response.ok) || error) {
			if (response && !response.ok) {
				this.#handleResponseError(response, nodeUrl);
				throw new Error(response.statusText);
			}
			if (error) {
				throw error;
			}
			throw new Error('Unhandled error');
		}

		return response;
	}

	async fetch(url, options = {}) {
		const response = await pRetry(() => this.#makeCall(url, options), {
			onFailedAttempt: (error) => {},
			retries: this.#nodes.length,
			// we don't really want exponential backoff
			// as they are seperate nodes, so factor of 1
			factor: 1,
			minTimeout: 100,
			maxTimeout: 500
		});

		return response;
	}

	#getNodeUrl() {
		this.#sortNodes();
		// first nodes should be the last used nodes
		const node = this.#nodes.find((n) => n.healthy);
		this.#tagNodeUsed(node);
		return node.url;
	}

	#tagNodeUsed(node) {
		this.#nodes = this.#nodes.map((n) => {
			if (n.url === node.url) {
				return {
					...n,
					lastUsed: Date.now()
				};
			}
			return n;
		});
	}

	#handleResponseError(response, nodeUrl) {
		if (response.status === 429) {
			this.#markRateLimited(nodeUrl);
			return;
		}

		if (UNHEALTHY_CODES.includes(response.status)) {
			this.#markUnhealthy(nodeUrl);
			return;
		}

		// Do nothing?

		return;
	}

	#markUnhealthy(url) {
		this.#nodes = this.#nodes.map((node) => {
			if (node.url === url) {
				return {
					...node,
					healthy: false
				};
			}
			return node;
		});
	}

	#markRateLimited(url) {
		this.#nodes = this.#nodes.map((node) => {
			if (node.url === url) {
				return {
					...node,
					lastUsed: Date.now() + THIRTY_SECONDS
				};
			}
			return node;
		});
	}

	#sortNodes() {
		this.#nodes = this.#nodes.sort((a, b) => {
			return a.lastUsed - b.lastUsed;
		});
	}
}

export default NodeManager;
