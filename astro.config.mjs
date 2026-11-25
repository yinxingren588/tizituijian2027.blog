import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { getSitemapMeta } from './src/utils/sitemapMeta.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://tizituijian2027.blog',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'daily',
      priority: 0.85,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const meta = getSitemapMeta(item.url);
        return {
          ...item,
          changefreq: /** @type {any} */ (meta.changefreq),
          priority: meta.priority,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
