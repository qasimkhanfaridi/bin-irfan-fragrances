export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  published: string;
  readMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
  relatedProductSlugs?: string[];
  relatedGuideSlugs?: string[];
};

export const GUIDES: GuideArticle[] = [
  {
    slug: 'extrait-de-parfum-vs-edt-pakistan',
    title: 'Extrait de Parfum vs EDT & EDP in Pakistan’s Climate',
    description:
      'Why 30–35% Extrait de Parfum lasts longer in Rawalpindi, Islamabad, and humid summers — and how to choose concentration when buying perfume online in Pakistan.',
    keywords:
      'extrait de parfum Pakistan, long lasting perfume Rawalpindi, EDP vs extrait, perfume concentration guide',
    published: '2026-10-09',
    readMinutes: 6,
    relatedProductSlugs: ['black-oud', 'creed-aventus', 'explorer-discovery-kit'],
    relatedGuideSlugs: ['same-day-perfume-delivery-rawalpindi-islamabad'],
    sections: [
      {
        heading: 'What concentration means for your skin',
        paragraphs: [
          'Eau de Toilette (EDT) typically contains 5–10% perfume oil. Eau de Parfum (EDP) sits around 15–20%. Extrait de Parfum — what Bin Irfan Fragrances specializes in — uses roughly 30–35% oil, which means fewer sprays and longer wear on skin and fabric.',
          'In Pakistan’s heat, lighter formats can fade by midday. Higher oil concentration slows evaporation of base notes like oud, amber, and musk, so your sillage stays present through office hours, evening plans, or wedding functions.'
        ]
      },
      {
        heading: 'When Extrait is worth it',
        paragraphs: [
          'Choose Extrait if you want one or two sprays for 12–16+ hours, prefer richer oud or oriental profiles, or order less often but expect stronger performance per bottle.',
          'If you are new to a scent, start with our Explorer Discovery Set (5×10ml) to test families before committing to a 50ml or 100ml flacon.'
        ]
      },
      {
        heading: 'How to apply for maximum longevity',
        paragraphs: [
          'Apply to pulse points on moisturized skin. Do not rub wrists together — it breaks top notes. For office-friendly projection, one spray on neck and one on chest is often enough with Extrait strength.'
        ]
      }
    ]
  },
  {
    slug: 'same-day-perfume-delivery-rawalpindi-islamabad',
    title: 'Same-Day Perfume Delivery in Rawalpindi & Islamabad',
    description:
      'How Bin Irfan Fragrances same-day express delivery works in Rawalpindi and Islamabad: cut-off times, advance payment, and nationwide courier for other cities.',
    keywords:
      'same day perfume delivery Rawalpindi, perfume delivery Islamabad, express perfume delivery Pakistan, Dhoke Chiragh Deen perfume shop',
    published: '2026-10-09',
    readMinutes: 5,
    relatedProductSlugs: ['royal-trio-bundle', 'prestige-his-hers-duo'],
    relatedGuideSlugs: ['how-to-order-perfume-whatsapp-advance-payment'],
    sections: [
      {
        heading: 'Twin cities express delivery',
        paragraphs: [
          'Orders confirmed before 5:00 PM with verified advance payment qualify for same-day express rider delivery across Rawalpindi and Islamabad. Our studio is in Dhoke Chiragh Deen (Plus Code H3X9+8X4), so local dispatch is fast once payment is confirmed on WhatsApp (+92 321 5186400).',
          'We do not offer Cash on Delivery (COD). Advance payment (Bank Transfer, EasyPaisa, JazzCash, or Raast) reserves your flacon and triggers dispatch.'
        ]
      },
      {
        heading: 'Nationwide courier (Karachi, Lahore, Peshawar & more)',
        paragraphs: [
          'Outside Rawalpindi–Islamabad, parcels ship via tracked couriers and usually arrive in 2–3 business days. Free nationwide shipping applies on orders over Rs. 5,000.',
          'You can track status via our track-order page or message WhatsApp with your order reference.'
        ]
      },
      {
        heading: 'Visit the Rawalpindi studio',
        paragraphs: [
          'Prefer to smell before you buy? Visit our perfume shop in Rawalpindi or message ahead on WhatsApp to confirm stock. See our local studio page for directions and hours.'
        ]
      }
    ]
  },
  {
    slug: 'best-long-lasting-oud-perfumes-men',
    title: 'Best Long-Lasting Oud Perfumes for Men (35% Extrait)',
    description:
      'Guide to woody and oud Extrait de Parfum for men in Pakistan — Black Oud and signature impressions with 14+ hour performance from Bin Irfan Fragrances Rawalpindi.',
    keywords:
      'oud perfume Pakistan, best oud for men Rawalpindi, long lasting oud fragrance, Black Oud perfume',
    published: '2026-10-09',
    readMinutes: 7,
    relatedProductSlugs: ['black-oud', 'dunhill-desire', 'sauvage-dior'],
    relatedGuideSlugs: ['extrait-de-parfum-vs-edt-pakistan'],
    sections: [
      {
        heading: 'Why oud works in formal and evening wear',
        paragraphs: [
          'Oud-forward compositions anchor with agarwood, leather, and spice — ideal for cooler evenings, weddings, and Eid gatherings. Our Black Oud Extrait layers Cambodian oud character with rose and smoked birch for heavy projection without feeling synthetic.',
          'For daily office wear with woody freshness, lighter oud blends or aromatic fougère styles may feel easier — explore the full shop catalogue by “Woody & Oud” family.'
        ]
      },
      {
        heading: 'Top picks from our catalogue',
        paragraphs: [
          'Black Oud — signature dark oud for statement nights. Dunhill Desire Impression — warm apple and teakwood for versatile day-to-night wear. Sauvage Impression — bright bergamot and ambroxan for hot weather.',
          'All are blended at ~35% Extrait concentration for extended wear in Punjab and KPK climates.'
        ]
      },
      {
        heading: 'Ordering and sizing',
        paragraphs: [
          'Available in 50ml and 100ml flacons. Unsure? Start with the Explorer Discovery Set to compare oud against fresh and oriental styles before upgrading to full bottles.'
        ]
      }
    ]
  },
  {
    slug: 'best-perfume-shops-in-rawalpindi',
    title: 'Best Perfume Shops in Rawalpindi: Top Fragrance Stores & Local Buying Guide',
    description:
      'Looking for the best perfume shops in Rawalpindi? Complete guide comparing Saddar markets, commercial outlets, and luxury ateliers like Bin Irfan Fragrances for 35% Extrait longevity.',
    keywords:
      'best perfume shops in rawalpindi, best perfume in rawalpindi, perfume shops rawalpindi saddar, buy perfumes in rawalpindi, perfume store rawalpindi, long lasting perfume rawalpindi, Bin Irfan Fragrances rawalpindi',
    published: '2026-11-03',
    readMinutes: 6,
    relatedProductSlugs: ['black-oud', 'creed-aventus', 'baccarat-rouge-540', 'royal-trio-bundle'],
    relatedGuideSlugs: ['same-day-perfume-delivery-rawalpindi-islamabad', 'extrait-de-parfum-vs-edt-pakistan'],
    sections: [
      {
        heading: 'The Search for Quality Perfume in Rawalpindi',
        paragraphs: [
          'Rawalpindi is home to a bustling fragrance culture, from the historic perfume lanes of Saddar and Bank Road to modern boutiques in Bahria Town and Satellite Town. However, many buyers struggle to find genuine, long-lasting fragrances that survive the Twin Cities warm climate without fading within two hours.',
          'When looking for the best perfume shops in Rawalpindi, you must look at concentration, oil sourcing, and bottle craftsmanship rather than flashy marketing.'
        ]
      },
      {
        heading: 'Why Concentration Matters: 35% Extrait vs. Retail EDTs',
        paragraphs: [
          'Most commercial retail counters in Rawalpindi stock mass-produced Eau de Toilette (5�10% oil) or standard Eau de Parfum (15�20% oil). In summer heat and monsoon humidity, alcohol-heavy formulations evaporate within 2�3 hours.',
          'At Bin Irfan Fragrances (located in Dhoke Chiragh Deen, Rawalpindi), every creation is blended at a commanding 35% pure Extrait De Parfum concentration. This delivers 14 to 18+ hours of projection, ensuring your sillage remains powerful through evening gatherings and full working days.'
        ]
      },
      {
        heading: 'Comparing Rawalpindi Perfume Locations: Saddar vs. Niche Ateliers',
        paragraphs: [
          'Rawalpindi Saddar offers numerous stalls and attar shops, but authenticity and consistency vary wildly, with many synthetic clones producing harsh chemical openings.',
          'Niche artisanal ateliers like Bin Irfan Fragrances formulate master olfactory impressions with smooth top-to-base transitions. Each flacon is an architectural octagonal glass masterpiece topped with a cut-crystal decanter cap and circular gold medallion seal, offering the prestige of luxury niche houses at accessible local pricing (PKR 3,250 � PKR 5,950).'
        ]
      },
      {
        heading: 'Same-Day Delivery Across Rawalpindi & Islamabad',
        paragraphs: [
          'A key advantage of buying from a local Rawalpindi atelier is immediacy. Bin Irfan Fragrances offers same-day express rider delivery across all Rawalpindi sectors (Saddar, Bahria Town, Chaklala Scheme 3, DHA, Westridge, Satellite Town) and Islamabad for orders confirmed before 5:00 PM on 100% advance payment.',
          'Browse our online catalog, order via WhatsApp (+92 321 5186400), and experience the top-rated local perfume house in Rawalpindi today.'
        ]
      }
    ]
  },
  {
    slug: 'how-to-order-perfume-whatsapp-advance-payment',
    title: 'How to Order Perfume on WhatsApp (Advance Payment Guide)',
    description:
      'Step-by-step: add to bag, checkout on Bin Irfan Fragrances, pay in advance via EasyPaisa/JazzCash/Bank, and confirm on WhatsApp for same-day Rawalpindi delivery.',
    keywords:
      'order perfume WhatsApp Pakistan, advance payment perfume, EasyPaisa perfume order, Bin Irfan order process',
    published: '2026-10-09',
    readMinutes: 4,
    relatedProductSlugs: ['explorer-discovery-kit'],
    relatedGuideSlugs: ['same-day-perfume-delivery-rawalpindi-islamabad'],
    sections: [
      {
        heading: 'Step 1 — Choose your fragrance',
        paragraphs: [
          'Browse the shop, open a product page, select size (50ml / 100ml), and add to bag. Use filters for men, women, oud, or gift bundles.'
        ]
      },
      {
        heading: 'Step 2 — Checkout & WhatsApp',
        paragraphs: [
          'Open checkout, enter name, phone, city, and full delivery address. Submit to open a pre-filled WhatsApp message to our official line +92 321 5186400 with your order summary and reference.'
        ]
      },
      {
        heading: 'Step 3 — Advance payment & dispatch',
        paragraphs: [
          'Transfer 100% of the order total via EasyPaisa, JazzCash, Bank Transfer, or Raast. Send the payment screenshot on WhatsApp. Once verified, we dispatch — same-day in Rawalpindi/Islamabad when confirmed before 5:00 PM.',
          'Questions? Contact the atelier or read our shipping and FAQ pages.'
        ]
      }
    ]
  }
];

export const getGuideBySlug = (slug: string): GuideArticle | undefined =>
  GUIDES.find(g => g.slug === slug);
