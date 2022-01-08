import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),

		// disable ssr, because we're using this as a JAMStack
		ssr: false,

		// enable router for all pages to prevent need to whole page refresh
		router: true,

		// enable hydrate in dev mode by default so hmr can work everywhere
		hydrate: process.env.NODE_ENV === 'development', 

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
