/**
 * Pings Bing/Yandex IndexNow after deploy so new/updated URLs get crawled faster.
 * Run: npm run indexnow
 * Requires the key file to be live at https://www.binirfanfragrances.com/binirfanfragrances2026index.txt
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOST = 'www.binirfanfragrances.com';
const KEY = 'binirfanfragrances2026index';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

const extractUrls = (xml: string): string[] =>
  [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

const main = async () => {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('[indexnow] public/sitemap.xml missing — run npm run build first.');
    process.exit(1);
  }

  const urlList = extractUrls(fs.readFileSync(SITEMAP_PATH, 'utf8'));
  if (urlList.length === 0) {
    console.error('[indexnow] No URLs in sitemap.');
    process.exit(1);
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body)
      });
      console.log(`[indexnow] ${endpoint} → ${res.status} ${res.statusText}`);
    } catch (err) {
      console.warn(`[indexnow] ${endpoint} failed:`, err);
    }
  }

  console.log(`[indexnow] Submitted ${urlList.length} URL(s).`);
};

main();
