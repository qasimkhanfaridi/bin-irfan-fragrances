import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SITE_URL,
  formatPageTitle,
  getPrerenderPages,
  type PrerenderPage
} from '../src/config/prerenderMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

const setTagContent = (html: string, pattern: RegExp, replacement: string): string =>
  html.replace(pattern, replacement);

const applyPageToHtml = (template: string, page: PrerenderPage, siteUrl: string): string => {
  const canonicalUrl = page.path ? `${siteUrl}/${page.path}` : `${siteUrl}/`;
  const title = formatPageTitle(page.title);
  const robots = page.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  const imagePath = page.image ?? '/brand/logo.jpg';
  const fullImage = imagePath.startsWith('http') ? imagePath : `${siteUrl}${imagePath}`;
  const ogType = page.ogType ?? 'website';

  let html = template;

  html = setTagContent(html, /<title>[^<]*<\/title>/, `<title>${title.replace(/&/g, '&amp;')}</title>`);
  html = setTagContent(
    html,
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${page.description.replace(/"/g, '&quot;')}"`
  );
  html = setTagContent(
    html,
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${(page.keywords ?? '').replace(/"/g, '&quot;')}"`
  );
  html = setTagContent(html, /<meta name="robots" content="[^"]*"/, `<meta name="robots" content="${robots}"`);
  html = setTagContent(
    html,
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );
  html = setTagContent(
    html,
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}"`
  );
  html = setTagContent(
    html,
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${page.description.replace(/"/g, '&quot;')}"`
  );
  html = setTagContent(html, /<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${fullImage}"`);
  html = setTagContent(html, /<meta property="og:type" content="[^"]*"/, `<meta property="og:type" content="${ogType}"`);

  if (html.includes('property="og:url"')) {
    html = setTagContent(
      html,
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${canonicalUrl}"`
    );
  } else {
    html = html.replace(
      /<meta property="og:type"/,
      `<meta property="og:url" content="${canonicalUrl}" />\n    <meta property="og:type"`
    );
  }

  html = setTagContent(
    html,
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}"`
  );
  html = setTagContent(
    html,
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${page.description.replace(/"/g, '&quot;')}"`
  );
  html = setTagContent(
    html,
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${fullImage}"`
  );

  const schemaPayload = page.schema ?? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: page.description,
    url: canonicalUrl
  };

  html = setTagContent(
    html,
    /<script id="schema-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="schema-jsonld" type="application/ld+json">\n    ${JSON.stringify(schemaPayload, null, 2).replace(/<\//g, '<\\/')}\n    </script>`
  );

  html = setTagContent(
    html,
    /<div id="root">[\s\S]*?<\/div>\s*<script type="module"/,
    `<div id="root">${page.bodyHtml}\n    </div>\n    <script type="module"`
  );

  return html;
};

const main = () => {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(indexPath, 'utf8');
  const pages = getPrerenderPages(SITE_URL);

  for (const page of pages) {
    const html = applyPageToHtml(template, page, SITE_URL);
    if (!page.path) {
      fs.writeFileSync(indexPath, html, 'utf8');
      continue;
    }
    const outDir = path.join(distDir, ...page.path.split('/'));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  }

  console.log(`[seo] Generated ${pages.length} prerendered HTML documents in dist/`);
};

main();
