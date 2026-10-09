import { PRODUCTS } from '../data/products';
import { DEFAULT_SEO, getProductSchema, getStoreSchema } from './seo';

export const SITE_URL = 'https://www.binirfanfragrances.com';

export type PrerenderPage = {
  /** Path without leading slash; empty string = homepage */
  path: string;
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
  ogType?: 'website' | 'product' | 'article';
  image?: string;
  schema?: Record<string, unknown>;
  bodyHtml: string;
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const formatPageTitle = (title: string): string =>
  title.includes('Bin Irfan Fragrance') ? title : `${title} | Bin Irfan Fragrances`;

const shell = (heading: string, subheading: string, mainHtml: string): string => `
      <header style="padding: 24px; text-align: center; border-bottom: 1px solid #e2e8f0; background: #ffffff;">
        <p style="margin: 0 0 8px;"><a href="/" style="color: #132742; font-weight: 600;">Bin Irfan Fragrances</a></p>
        <h1 style="font-size: 26px; margin: 0; color: #132742;">${escapeHtml(heading)}</h1>
        <p style="color: #64748b; font-size: 14px; margin-top: 8px;">${escapeHtml(subheading)}</p>
      </header>
      <main style="max-width: 900px; margin: 32px auto; padding: 0 16px; font-family: sans-serif; line-height: 1.6; color: #0f172a;">
        ${mainHtml}
        <nav style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 14px;">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/perfume-shop-rawalpindi">Rawalpindi Studio</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
        </nav>
      </main>`;

const FAQ_ITEMS = [
  {
    q: 'What is the concentration of Bin Irfan Fragrances?',
    a: 'All Bin Irfan fragrances are Extrait de Parfum at approximately 30–35% perfume oil concentration.'
  },
  {
    q: 'Do you offer Cash on Delivery (COD)?',
    a: 'No. Orders require 100% advance payment via Bank Transfer, EasyPaisa, JazzCash, or Raast.'
  },
  {
    q: 'Is same-day delivery available in Rawalpindi and Islamabad?',
    a: 'Yes, for orders confirmed before 5:00 PM via local express rider.'
  }
];

export const getFaqSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a
    }
  }))
});

export function getPrerenderPages(siteUrl = SITE_URL): PrerenderPage[] {
  const pages: PrerenderPage[] = [];

  const productListHtml = PRODUCTS.map(p => {
    const minPrice = Math.min(...p.variants.map(v => v.pricePKR));
    return `<li><a href="/product/${p.slug}"><strong>${escapeHtml(p.name)}</strong></a> — ${escapeHtml(
      p.shortDescription
    )} From PKR ${minPrice.toLocaleString('en-PK')}.</li>`;
  }).join('\n            ');

  pages.push({
    path: '',
    title: 'Bin Irfan Fragrances | Luxury Extrait De Parfum & Perfumes Rawalpindi, Pakistan',
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
    ogType: 'website',
    image: DEFAULT_SEO.defaultImage,
    schema: getStoreSchema(siteUrl),
    bodyHtml: shell(
      'Luxury Extrait De Parfum in Rawalpindi',
      'Handcrafted 35% concentration — same-day delivery Rawalpindi & Islamabad',
      `<section>
          <p>Bin Irfan Fragrances is an artisanal Pakistani fragrance house in Dhoke Chiragh Deen, Rawalpindi. Browse our complete catalogue of 35% Extrait De Parfum flacons and gift sets with nationwide delivery on advance payment.</p>
          <h2>Featured perfumes</h2>
          <ul>${productListHtml}</ul>
        </section>`
    )
  });

  pages.push({
    path: 'shop',
    title: 'Shop All Luxury Fragrances & Extrait De Parfum',
    description:
      'Browse the complete Bin Irfan Fragrances collection. Handcrafted 35% Extrait de Parfum with same-day delivery in Rawalpindi & Islamabad on 100% advance payment.',
    keywords:
      'shop perfumes online Pakistan, Bin Irfan Fragrances collection, buy Extrait de parfum Rawalpindi, fragrance catalogue Pakistan',
    bodyHtml: shell(
      'Shop all fragrances',
      'Complete 35% Extrait De Parfum catalogue',
      `<section>
          <p>Filter by gender, fragrance family, oud, or gift bundles. Every flacon is blended for long wear in warm climates.</p>
          <h2>All products</h2>
          <ul>${productListHtml}</ul>
        </section>`
    )
  });

  for (const product of PRODUCTS) {
    const minPrice = Math.min(...product.variants.map(v => v.pricePKR));
    const imageUrl = product.image.startsWith('http') ? product.image : product.image;
    pages.push({
      path: `product/${product.slug}`,
      title: `${product.name} — 35% Extrait De Parfum`,
      description: `Buy ${product.name} by Bin Irfan Fragrances. ${product.shortDescription} Handcrafted 35% Extrait with long-lasting projection. Same-day delivery Rawalpindi & Islamabad on advance payment.`,
      keywords: `${product.name}, buy ${product.name} Pakistan, ${product.fragranceFamily}, perfume Rawalpindi`,
      ogType: 'product',
      image: imageUrl,
      schema: getProductSchema(product, siteUrl),
      bodyHtml: shell(
        product.name,
        product.tagline,
        `<section>
            <p>${escapeHtml(product.description)}</p>
            <p><strong>Fragrance family:</strong> ${escapeHtml(product.fragranceFamily)} · <strong>From PKR ${minPrice.toLocaleString(
              'en-PK'
            )}</strong></p>
            <p><img src="${escapeHtml(product.image)}" alt="${escapeHtml(
              product.name
            )} Extrait De Parfum by Bin Irfan Fragrances" width="480" loading="lazy" /></p>
            <p><a href="/shop">← Back to shop</a></p>
          </section>`
      )
    });
  }

  type StaticPageMeta = Omit<PrerenderPage, 'bodyHtml'> & {
    heading: string;
    intro: string;
    extra?: string;
  };

  const staticPages: StaticPageMeta[] = [
    {
      path: 'collections',
      title: 'Curated Fragrance Collections',
      description:
        'Explore curated Bin Irfan collections: Oud, Signature, Luxury Extrait, and Fresh aquatic lines.',
      heading: 'Curated collections',
      intro: 'Shop by olfactory theme — oud, fresh citrus, oriental amber, and luxury bundles.'
    },
    {
      path: 'perfume-shop-rawalpindi',
      title: 'Perfume Shop in Rawalpindi | Same-Day Delivery Rawalpindi & Islamabad',
      description:
        'Visit Bin Irfan Fragrances studio at Dhoke Chiragh Deen, Rawalpindi (H3X9+8X4). 35% Extrait De Parfum with same-day express delivery across Rawalpindi & Islamabad.',
      keywords:
        'perfume shop Rawalpindi, perfumes in Rawalpindi, same day perfume delivery Rawalpindi, Dhoke Chiragh Deen perfume',
      heading: 'Perfume shop in Rawalpindi',
      intro:
        'Physical studio: H3X9+8X4, Dhoke Chiragh Deen, Rawalpindi 46000. WhatsApp orders +92 321 5186400. Not affiliated with Bin Irfan Clothing on 5th Road Satellite Town.'
    },
    {
      path: 'about',
      title: 'Our Heritage & Artisanal Perfumery',
      description:
        'Learn about Bin Irfan Fragrances — 35% Extrait De Parfum craftsmanship, Rawalpindi atelier, and royal-grade ingredients.',
      heading: 'Our story',
      intro: 'Artisanal perfumery rooted in Rawalpindi with nationwide delivery across Pakistan.'
    },
    {
      path: 'contact',
      title: 'Contact Atelier & Client Relations',
      description:
        'Contact Bin Irfan Fragrances in Rawalpindi or WhatsApp +92 321 5186400 for orders and fragrance consultations.',
      schema: getStoreSchema(siteUrl),
      heading: 'Contact the atelier',
      intro: 'Email sulaiman234p@gmail.com · WhatsApp +92 321 5186400 · Studio Dhoke Chiragh Deen, Rawalpindi.'
    },
    {
      path: 'faq',
      title: 'Frequently Asked Questions',
      description:
        'Answers about Extrait concentration, advance payment, same-day Rawalpindi delivery, and WhatsApp ordering at Bin Irfan Fragrances.',
      schema: getFaqSchema(),
      heading: 'Frequently asked questions',
      intro: 'Delivery, payment, concentration, and ordering help.',
      extra: `<dl>${FAQ_ITEMS.map(
        i => `<dt><strong>${escapeHtml(i.q)}</strong></dt><dd>${escapeHtml(i.a)}</dd>`
      ).join('')}</dl>`
    },
    {
      path: 'packaging',
      title: 'Packaging & Craftsmanship',
      description:
        'Luxury presentation boxes and protective packaging for Bin Irfan Extrait De Parfum flacons and gift sets.',
      heading: 'Packaging & presentation',
      intro: 'Protective cushioning and boutique-grade presentation for every order.'
    },
    {
      path: 'policies/shipping',
      title: 'Shipping & Delivery Policy',
      description:
        'Same-day delivery Rawalpindi & Islamabad. Nationwide courier 2–3 days. Free shipping over ₨5,000. Advance payment only.',
      heading: 'Shipping & delivery',
      intro: 'Delivery timelines, courier partners, and advance payment policy.'
    },
    {
      path: 'policies/returns',
      title: 'Returns & Exchange Policy',
      description: 'Exchange within 7 days for damaged or incorrect Bin Irfan Fragrances orders.',
      heading: 'Returns & exchanges',
      intro: 'Quality guarantee and exchange process for damaged shipments.'
    },
    {
      path: 'policies/privacy',
      title: 'Privacy Policy',
      description: 'How Bin Irfan Fragrances collects and uses customer contact and order information.',
      heading: 'Privacy policy',
      intro: 'Your data is used only to fulfil orders and customer support.'
    },
    {
      path: 'policies/terms',
      title: 'Terms of Service',
      description: 'Terms for ordering handcrafted perfumes from Bin Irfan Fragrances Pakistan.',
      heading: 'Terms of service',
      intro: 'Website usage and purchase terms.'
    },
    {
      path: 'track-order',
      title: 'Track Your Order',
      description: 'Track Bin Irfan Fragrances courier status. WhatsApp support for delivery updates.',
      robots: 'noindex, follow',
      heading: 'Track your order',
      intro: 'Enter your order reference or contact WhatsApp for live courier updates.'
    },
    {
      path: 'checkout',
      title: 'Checkout',
      description: 'Complete your Bin Irfan Fragrances order with advance payment via WhatsApp.',
      robots: 'noindex, follow',
      heading: 'Checkout',
      intro: 'Secure checkout — advance payment verification on WhatsApp.'
    },
    {
      path: 'cart',
      title: 'Shopping bag',
      description: 'Review items in your Bin Irfan Fragrances shopping bag.',
      robots: 'noindex, follow',
      heading: 'Shopping bag',
      intro: 'Review cart items before checkout.'
    }
  ];

  for (const page of staticPages) {
    pages.push({
      path: page.path,
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      robots: page.robots,
      ogType: 'website',
      image: DEFAULT_SEO.defaultImage,
      schema: page.schema,
      bodyHtml: shell(page.heading, page.intro, `<section>${page.extra ?? `<p>${escapeHtml(page.intro)}</p>`}</section>`)
    });
  }

  return pages;
}
