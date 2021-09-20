import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#greenrabbit',
		vite: {
			mode: process.env.MODE || 'production',
			resolve: {
				alias: {
					components: resolve('./src/components'),
					src: resolve('./src'),
					utils: resolve('./src/utils')
				}
			},
			optimizeDeps: {
				include: ['ual-anchor', 'ual-plainjs-renderer', '@eosdacio/ual-wax', 'eosjs', 'lodash']
			}
		},
		adapter: vercel()
	}
};

export default config;
