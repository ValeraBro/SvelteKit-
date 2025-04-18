import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static'; // Изменено с adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex()],
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html' // Важно для SPA-роутинга
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH // Для GitHub Pages
    }
  },

  extensions: ['.svelte', '.svx']
};

export default config;
