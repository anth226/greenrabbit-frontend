import { TESTNET, ATOMIC_NODES } from './config';
import NodeManager from './node-manager';

const nodeManager = new NodeManager(ATOMIC_NODES);

const getAssets = async (accountName, collection, schema, page) => {
	let extraCollection = '';
	if (TESTNET) extraCollection = 'docproftest1,';
	if (!page) page = 1;
	var endpoint = `/v1/assets?owner=${accountName}&collection_name=${extraCollection}${collection}&page=${page}&limit=1500&order=desc&sort=asset_id`;
	if (schema)
		endpoint = `/v1/assets?owner=${accountName}&collection_name=${collection}&schema_name=${schema}&page=${page}&limit=1500&order=desc&sort=asset_id`;

	const response = await nodeManager.fetch(endpoint);
	return response.json();
};
const getTemplatesOfUser = async (accountName, templateId) => {
	const endpoint = `/v1/accounts?match=${accountName}&template_id=${templateId}&limit=1500&order=desc&sort=asset_id`;

	const response = await nodeManager.fetch(endpoint);
	return response.json();
};
const getTemplates = async (collection, template) => {
	const endpoint = `/v1/templates/${collection}/${template}`;

	const response = await nodeManager.fetch(endpoint);
	return response.json();
};
const getAssetsByTemplate = async (accountName, templateIds, collection = 'greenrabbit') => {
	const endpoint = `/v1/assets?owner=${accountName}&collection_name=${collection}&template_id=${templateIds.join()}&last_update_refresh=0&page=1`;

	const response = await nodeManager.fetch(endpoint);
	return response.json();
};
const getAssetsByTemplateID = async (accountName, collection, templateIds) => {
	const endpoint = `/v1/assets?limit=1&page=1&order=desc&sort=created&burned=false&collection_name=${collection}&template_id=${templateIds.join()}&owner=${accountName}`;

	const response = await nodeManager.fetch(endpoint);
	return response.json();
};
const getAssetsById = async (ids) => {
	const endpoint = `/v1/assets?ids=${ids.join()},-100`;

	const response = await nodeManager.fetch(endpoint);
	return response.json();
};
const getTemplatesById = async (ids) => {
	const endpoint = `/v1/templates?ids=${ids.join()}`;

	const response = await nodeManager.fetch(endpoint);
	return response.json();
};
const getTimestamp = async () => {
	const endpoint = 'https://wax.api.atomicassets.io/eosio-contract-api/timestamp';
	const response = await fetch(endpoint);
	return response.json();
};
export const atomicAssetsApi = {
	getAssets,
	getTemplates,
	getTemplatesOfUser,
	getAssetsByTemplate,
	getAssetsById,
	getTimestamp,
	getAssetsByTemplateID,
	getTemplatesById
};
