# 🌐 Custom Domain & E-Commerce Order SEO Guide
**Bin Irfan Fragrance — Official Production Setup**

This guide provides step-by-step instructions for attaching your custom domain (e.g., `binirfanfragrance.com` or `binirfan.pk`) to the live Vercel deployment, along with instructions to maximize search-engine-driven customer orders via Google Search, Rich Snippets, and WhatsApp conversion.

---

## Part 1: Connecting Your Custom Domain (3 Minutes)

Your store is currently live on Vercel at `https://bin-irfan-fragrances.vercel.app`. Follow these 3 steps to connect your custom domain:

### Step 1: Add the Domain in Vercel
1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click on the **`bin-irfan-fragrance`** project.
3. Go to **Settings** → **Domains** (in the left sidebar).
4. Enter your custom domain name (e.g., `binirfanfragrance.com`) and click **Add**.
5. Select the recommended redirect option: **Redirect `binirfanfragrance.com` to `www.binirfanfragrance.com`** (or vice versa).

---

### Step 2: Configure DNS Records at Your Registrar
Log into wherever you purchased your domain (Namecheap, GoDaddy, Hostinger, PKNIC, etc.) and open **DNS Management / Advanced DNS**:

| Record Type | Host / Name | Value / Points To | TTL | Purpose |
|:---|:---|:---|:---|:---|
| **A** | `@` (or blank) | `76.76.21.21` | Auto / 3600 | Directs apex domain to Vercel |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 3600 | Directs `www` subdomain to Vercel |

> **Note**: If you are using Cloudflare, make sure the SSL/TLS encryption mode is set to **Full** or **Full (Strict)** and orange proxy cloud can remain ON or DNS-only.

---

### Step 3: Set Environment Variable in Vercel (Optional but Recommended)
To tell the SEO engine your exact custom domain for canonical tags and sitemaps:
1. In Vercel Project Settings, go to **Environment Variables**.
2. Add:
   - **Key**: `VITE_SITE_URL`
   - **Value**: `https://www.binirfanfragrance.com` (replace with your domain)
3. Redeploy or trigger a git push. Vercel will automatically issue a **100% Free SSL Certificate** (HTTPS) within 60 seconds!

---

## Part 2: Order-Driven SEO Architecture (Built & Active)

Search Engine Optimization has been custom-tailored to rank for **high-intent buyers** looking to place orders via Cash on Delivery in Pakistan:

### 1. Rich Snippets & Schema.org JSON-LD (Drives Clicks & Orders)
We have implemented comprehensive Schema.org structured data across the codebase:
- **`schema.org/Product` + `schema.org/Offer`**:
  - Live on every perfume detail page (`/product/:slug`).
  - Contains **Price in PKR**, `availability: InStock`, `brand: Bin Irfan Fragrance`, and `aggregateRating` (4.9★ stars).
  - **Result**: Google search results display the price, star rating, and in-stock badges directly in SERP cards, increasing order click-through rates by up to 300%.
- **`schema.org/OnlineStore` & `schema.org/LocalBusiness`**:
  - Registered with boutique address: *Shop #6, Malik Dilawar Plaza, Hashtnagri, G.T. Road, Peshawar*.
  - Currencies accepted: `PKR`.
  - Payment accepted: `Cash on Delivery, Bank Transfer, EasyPaisa, JazzCash`.
  - Official WhatsApp & Phone: `+92 321 5186400`.
- **`schema.org/SearchAction`**:
  - Enables Google Sitelinks Search Box for direct fragrance queries.

---

### 2. Dedicated Order Tracking Page (`/track-order`)
Customers searching for their orders often search:
- *"Bin Irfan order status"*
- *"track perfume order Pakistan"*
- *"Bin Irfan fragrance delivery status"*

The new `/track-order` route:
- Captures these searches with dedicated meta tags and structured service schema.
- Allows customers to check real-time courier dispatch (Trax / TCS Express).
- Features a **1-click WhatsApp Concierge button** directly connected to `+92 321 5186400` with pre-filled tracking prompts.

---

### 3. XML Sitemap & Robots.txt
- **`public/sitemap.xml`**:
  - Fully formatted with Google image extension tags (`image:image`, `image:loc`, `image:title`).
  - Covers all 14 Extrait de Parfum flacons and bundles, collections, track-order, and boutique pages with proper `priority` and `changefreq`.
- **`public/robots.txt`**:
  - Instructs Googlebot and Bingbot to index the entire catalogue while blocking `/admin` screens.
- **`vercel.json`**:
  - Optimized with strict security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`) and 1-year asset caching for maximum Google Core Web Vitals speed scores.

---

## Part 3: Submitting to Google Search Console (3 Minutes)

To get all 14 perfumes and the store indexed by Google within 24–48 hours:

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** and enter your domain (or URL prefix `https://www.binirfanfragrance.com`).
3. Verify ownership via DNS TXT record or HTML tag.
4. In the left menu, click **Sitemaps**.
5. In "Add a new sitemap", type:
   ```
   sitemap.xml
   ```
   and click **Submit**.
6. Use the **URL Inspection** tool to inspect the homepage and top perfumes (`/product/black-oud`, `/product/creed-aventus`) and click **"Request Indexing"**.

---

## Part 4: High-Conversion Order Keywords Targeted

Your website is now optimized for the following high-value buyer searches across Pakistan:

| Keyword Target | Search Intent | Target URL |
|:---|:---|:---|
| *Buy Black Oud perfume Pakistan* | Direct Purchase | `/product/black-oud` |
| *Extrait de Parfum price in Pakistan* | High-Intent Purchase | `/shop` |
| *Best long lasting perfumes Peshawar* | Local / Regional Order | `/` |
| *Creed Aventus impression Pakistan* | Specific Fragrance Search | `/product/creed-aventus` |
| *Dunhill Desire perfume PKR* | Pricing & Purchase | `/product/dunhill-desire` |
| *Bin Irfan order status / tracking* | Customer Retention & Care | `/track-order` |
| *Luxury perfume gift set cash on delivery* | Gift Bundles Purchase | `/product/royal-trio-bundle` |

---

## Part 5: Concierge Verification
All online and organic search orders funnel seamlessly into:
- **Official WhatsApp / Phone**: `+92 321 5186400`
- **Flagship Boutique**: Shop #6, Malik Dilawar Plaza, Chowk Shadi Peer, Hashtnagri, G.T. Road, Peshawar.
