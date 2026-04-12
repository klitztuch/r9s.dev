import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://r9s.dev',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
