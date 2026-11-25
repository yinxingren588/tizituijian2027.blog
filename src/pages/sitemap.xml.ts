import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../data/site';
import { LADDERS_DATA } from '../data/ladders';
import { ALL_FAQS } from '../data/faqs';
import { CORE_SITEMAP_PAGES, getSitemapMeta } from '../utils/sitemapMeta.mjs';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const nowIso = new Date().toISOString();

  const urlEntries: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [];
  const seen = new Set<string>();

  const pushUrl = (path: string, customLastmod?: string) => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    const fullUrl = new URL(normalized, SITE_CONFIG.url).href;
    if (seen.has(fullUrl)) return;
    seen.add(fullUrl);
    const meta = getSitemapMeta(normalized);
    urlEntries.push({
      loc: fullUrl,
      lastmod: customLastmod || nowIso,
      changefreq: meta.changefreq,
      priority: meta.priority.toFixed(2),
    });
  };

  // 1. 核心栏目页面
  for (const page of CORE_SITEMAP_PAGES) {
    pushUrl(page.path);
  }

  // 2. 全站 35 个品牌详评与套餐价格页
  for (const ladder of LADDERS_DATA) {
    pushUrl(ladder.reviewSlug);
  }

  // 3. 博客专栏文章页
  for (const post of posts) {
    const modDate = (post.data.updatedDate || post.data.pubDate).toISOString();
    pushUrl(`/posts/${post.slug}/`, modDate);
  }

  // 4. 全站 58 个独立 FAQ 百科问答页
  for (const faq of ALL_FAQS) {
    pushUrl(`/faq/${faq.slug}/`);
  }

  const xmlBody = urlEntries
    .map(
      (entry) =>
        `  <url>\n` +
        `    <loc>${escapeXml(entry.loc)}</loc>\n` +
        `    <lastmod>${entry.lastmod}</lastmod>\n` +
        `    <changefreq>${entry.changefreq}</changefreq>\n` +
        `    <priority>${entry.priority}</priority>\n` +
        `  </url>`
    )
    .join('\n');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${xmlBody}\n` +
    `</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
