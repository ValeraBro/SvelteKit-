import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html' // Для SPA-роутинга
    }),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Игнорируем ошибки, связанные с отсутствием БД
        if (path.startsWith('/api') || message.includes('DATABASE_URL')) {
          return;
        }
        throw new Error(message);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;