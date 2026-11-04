import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRODUCTS } from '../src/data/products';
import { SITE_URL } from '../src/config/prerenderMeta';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'public', 'google-merchant-feed.xml');

const escapeXml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const items: string[] = [];

for (const product of PRODUCTS) {
  for (const variant of product.variants) {
    const id = `${product.id}-${variant.size.toLowerCase()}`;
    const title = `${product.name} — 35% Extrait De Parfum (${variant.size})`;
    const description = `${product.shortDescription} Handcrafted luxury 35% Extrait De Parfum formulation by Bin Irfan Fragrances. 14 to 18 hours longevity in Pakistan climate. Same-day delivery in Rawalpindi & Islamabad; tracked courier nationwide across Pakistan. 100% advance payment via Bank Transfer, JazzCash, EasyPaisa, or Raast.`;
    const link = `${SITE_URL}/product/${product.slug}`;
    const imageLink = product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}`;
    const price = `${variant.pricePKR} PKR`;

    const genderVal = product.gender === 'men' ? 'male' : product.gender === 'women' ? 'female' : 'unisex';

    const additionalImages = (product.gallery || [])
      .filter(img => img !== product.image)
      .map(img => `      <g:additional_image_link>${img.startsWith('http') ? escapeXml(img) : `${SITE_URL}${escapeXml(img)}`}</g:additional_image_link>`)
      .join('\n');

    items.push(`    <item>
      <g:id>${escapeXml(id)}</g:id>
      <g:item_group_id>${escapeXml(product.id)}</g:item_group_id>
      <g:title>${escapeXml(title)}</g:title>
      <g:description>${escapeXml(description)}</g:description>
      <g:link>${escapeXml(link)}</g:link>
      <g:image_link>${escapeXml(imageLink)}</g:image_link>
${additionalImages ? additionalImages + '\n' : ''}      <g:availability>${product.inStock ? 'in_stock' : 'out_of_stock'}</g:availability>
      <g:price>${price}</g:price>
      <g:brand>Bin Irfan Fragrances</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Health &amp; Beauty &gt; Personal Care &gt; Cosmetics &gt; Perfumes &amp; Colognes</g:google_product_category>
      <g:product_type>Fragrance &gt; Extrait De Parfum &gt; ${escapeXml(product.fragranceFamily)}</g:product_type>
      <g:gender>${genderVal}</g:gender>
      <g:age_group>adult</g:age_group>
      <g:identifier_exists>no</g:identifier_exists>
      <g:shipping>
        <g:country>PK</g:country>
        <g:service>Same-Day Twin Cities / Tracked Courier Pakistan</g:service>
        <g:price>0 PKR</g:price>
      </g:shipping>
    </item>`);
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Bin Irfan Fragrances Product Feed</title>
    <link>${SITE_URL}</link>
    <description>Official Google Merchant Center Product Feed for Bin Irfan Fragrances — Handcrafted 35% Extrait De Parfum collections in Rawalpindi, Islamabad, and nationwide Pakistan.</description>
${items.join('\n')}
  </channel>
</rss>
`;

fs.writeFileSync(outPath, xml, 'utf8');
console.log(`[merchant-feed] Wrote ${items.length} product variants to public/google-merchant-feed.xml`);
