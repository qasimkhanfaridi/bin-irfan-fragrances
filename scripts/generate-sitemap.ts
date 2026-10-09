import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getPrerenderPages, SITE_URL } from '../src/config/prerenderMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

const today = new Date().toISOString().slice(0, 10);

const pages = getPrerenderPages(SITE_URL).filter(p => !p.robots?.includes('noindex'));

const priorityFor = (pathSeg: string): string => {
  if (!pathSeg) return '1.0';
  if (pathSeg === 'shop') return '0.95';
  if (pathSeg.startsWith('product/')) return '0.9';
  if (pathSeg === 'perfume-shop-rawalpindi') return '0.95';
  if (pathSeg.startsWith('guides')) return '0.85';
  if (pathSeg.startsWith('policies/')) return '0.5';
  return '0.8';
};

const urls = pages
  .map(page => {
    const loc = page.path ? `${SITE_URL}/${page.path}` : `${SITE_URL}/`;
    const priority = priorityFor(page.path);
    const changefreq = page.path.startsWith('product/') ? 'weekly' : page.path.startsWith('guides') ? 'monthly' : 'weekly';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(outPath, xml, 'utf8');
console.log(`[sitemap] Wrote ${pages.length} URLs to public/sitemap.xml`);
