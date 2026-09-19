# 🌐 How to Make the "Coming Soon" Page Live on Your Domain

You have the complete, luxury "Coming Soon" website ready in this folder:
`C:\Users\qasim.faridi.LT-LE-126\.gemini\antigravity\scratch\bin-irfan-fragrance`

Here are the 2 simplest ways to connect it to your newly purchased domain:

---

## Method 1: If You Have cPanel / Shared Hosting (Hostinger, Namecheap, GoDaddy)
*Time required: 2 minutes*

1. Log into your hosting cPanel or Hostinger hPanel.
2. Open **File Manager**.
3. Navigate into the **`public_html`** directory (or your domain's root folder).
4. Delete any default `index.html` or `default.php` file in that folder.
5. Upload the following from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - The entire `assets` folder (containing `hero-bottle.jpg` and `story-mist.jpg`).
6. Visit your domain in any browser — your luxury Coming Soon page is now LIVE! 🎉

---

## Method 2: 100% Free Hosting with Free SSL via Netlify or Vercel (Recommended)
*No paid hosting needed — just your domain name!*

1. Go to **[Netlify.com](https://www.netlify.com)** and sign up for a free account.
2. Go to **Sites** -> **Add new site** -> **Deploy manually**.
3. Drag and drop the `bin-irfan-fragrance` folder directly into your browser window.
4. Netlify will deploy it instantly in 5 seconds.
5. Click **Domain management** -> **Add a custom domain**.
6. Enter your purchased domain name (e.g. `binirfanfragrance.com`).
7. In your domain registrar (where you bought the domain), update your DNS:
   - Point the **A record** (`@`) to Netlify's IP: `75.2.60.5`
   - Or point the **CNAME** (`www`) to your netlify subdomain.
8. Netlify automatically provides a **free SSL certificate (https://)**!

---

## Need to Test It Locally First?
Simply double-click `index.html` in your Windows File Explorer to preview the live countdown and luxury design in Google Chrome or Edge.
