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
    relatedGuideSlugs: ['how-to-make-perfume-last-14-hours-pakistan', 'same-day-perfume-delivery-rawalpindi-islamabad'],
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
          'Choose Extrait if you want one or two sprays for all-day performance, prefer richer oud or oriental profiles, or order less often but expect stronger presence per bottle.',
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
          'Orders confirmed before 5:00 PM with verified advance payment qualify for same-day express rider delivery across Rawalpindi and Islamabad. Our studio is in Dhoke Chiragh Deen, so local dispatch is fast once payment is confirmed on WhatsApp (+92 321 5186400).',
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
      'Guide to woody and oud Extrait de Parfum for men in Pakistan — Black Oud and signature impressions with long-lasting all-day performance from Bin Irfan Fragrances Rawalpindi.',
    keywords:
      'oud perfume Pakistan, best oud for men Rawalpindi, long lasting oud fragrance, Black Oud perfume',
    published: '2026-10-09',
    readMinutes: 7,
    relatedProductSlugs: ['black-oud', 'dunhill-desire', 'sauvage-dior'],
    relatedGuideSlugs: ['best-wedding-perfumes-pakistan'],
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
          'Most commercial retail counters in Rawalpindi stock mass-produced Eau de Toilette (5–10% oil) or standard Eau de Parfum (15–20% oil). In summer heat and monsoon humidity, alcohol-heavy formulations evaporate within 2–3 hours.',
          'At Bin Irfan Fragrances (located in Dhoke Chiragh Deen, Rawalpindi), every creation is blended at a commanding 35% pure Extrait De Parfum concentration. This delivers rich, long-lasting projection, ensuring your sillage remains noticeable through evening gatherings and full working days.'
        ]
      },
      {
        heading: 'Comparing Rawalpindi Perfume Locations: Saddar vs. Niche Ateliers',
        paragraphs: [
          'While commercial street markets and bazaars offer broad varieties of casual attars, oil concentrations and olfactory transitions vary widely.',
          'Niche artisanal ateliers like Bin Irfan Fragrances formulate master olfactory impressions with smooth top-to-base transitions. Each flacon is an architectural octagonal glass masterpiece topped with a cut-crystal decanter cap and circular gold medallion seal, offering the prestige of luxury niche houses at accessible local pricing (PKR 3,250 – PKR 5,950).'
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
  },

  // 6. How to Make Perfume Last 14+ Hours in Pakistan's Heat
  {
    slug: 'how-to-make-perfume-last-14-hours-pakistan',
    title: 'How to Make Perfume Last All Day in Pakistan’s Climate',
    description:
      'Expert techniques to maximize perfume longevity in extreme heat and humidity. Why moisturizing, pulse points, and 35% Extrait concentration deliver all-day projection.',
    keywords:
      'how to make perfume last longer Pakistan, long lasting perfume tips, fragrance longevity hacks, perfume longevity Pakistan heat',
    published: '2026-11-04',
    readMinutes: 6,
    relatedProductSlugs: ['creed-aventus', 'black-oud', 'sauvage-dior'],
    relatedGuideSlugs: ['extrait-de-parfum-vs-edt-pakistan', 'how-to-store-perfume-pakistan-climate'],
    sections: [
      {
        heading: 'The Science of Perfume Evaporation in Subcontinental Weather',
        paragraphs: [
          'In temperatures exceeding 35°C, volatile aromatic molecules evaporate up to three times faster than in temperate European climates. Dry skin also absorbs perfume oils rapidly, leaving behind only faint traces.',
          'To achieve rich, all-day sillage, you need both a concentrated oil formulation (such as Bin Irfan’s 35% Extrait) and proper skin preparation techniques.'
        ]
      },
      {
        heading: 'Step 1: Always Moisturize Before Spraying',
        paragraphs: [
          'Perfume adheres to lipids, not parched skin. Apply an unscented lotion, petroleum jelly, or argan oil to your collarbones and wrists right after stepping out of the shower. This creates an anchor barrier that traps fragrance molecules for hours of slow diffusion.'
        ]
      },
      {
        heading: 'Step 2: Spray Strategic Heat Zones',
        paragraphs: [
          'Focus on your pulse points: the sides of the carotid artery on your neck, the hollow behind your ears, and inside your elbows. For office or outdoor projection, spray the nape of your neck—this projects an irresistible scent trail whenever you walk.'
        ]
      },
      {
        heading: 'Step 3: Spray Cotton & Linen Fabrics',
        paragraphs: [
          'While skin warmth diffuses top and heart notes, natural fabrics like cotton kurtas, linen shirts, and wool waistcoats hold base notes indefinitely without fading. One spritz onto your collar or chest ensures your fragrance lingers until laundered.'
        ]
      }
    ]
  },

  // 7. How to Store Luxury Perfumes in Pakistan
  {
    slug: 'how-to-store-perfume-pakistan-climate',
    title: 'How to Store Perfumes in Pakistan: Preventing Heat & UV Degradation',
    description:
      'Protect your luxury fragrances from temperature swings, direct sunlight, and bathroom humidity. Practical storage rules to preserve delicate top notes for years.',
    keywords:
      'how to store perfume Pakistan, perfume shelf life, perfume storage tips, keeping fragrance fresh',
    published: '2026-11-04',
    readMinutes: 5,
    relatedProductSlugs: ['black-oud', 'royal-trio-bundle'],
    relatedGuideSlugs: ['how-to-make-perfume-last-14-hours-pakistan'],
    sections: [
      {
        heading: 'The Three Enemies of Perfume Oil',
        paragraphs: [
          'Fragrance oils are delicate chemical matrices of natural absolutes, aldehydes, and aromatic esters. In Pakistan, three factors accelerate degradation: direct ultraviolet sunlight, rapid temperature spikes during summer loadshedding, and bathroom steam.',
          'Exposing your flacon to bright sunlight can oxidize top notes within weeks, turning sparkling citrus into sharp vinegar accords.'
        ]
      },
      {
        heading: 'Never Store Perfume in the Bathroom',
        paragraphs: [
          'While a bathroom counter seems convenient, daily hot showers cause drastic humidity and temperature fluctuations. The moist air seeps under atomizer seals and breaks down the balance between heart and base notes.'
        ]
      },
      {
        heading: 'The Ideal Sanctuary: Dark Wardrobes & Original Boxes',
        paragraphs: [
          'Keep your Bin Irfan flacons inside your bedroom wardrobe, drawer, or dedicated fragrance cabinet away from exterior walls. Bin Irfan’s rigid cylinder flacon boxes provide ideal thermal buffering against ambient climate shifts.'
        ]
      }
    ]
  },

  // 8. Understanding Fragrance Notes: Top, Heart, and Base Accords
  {
    slug: 'understanding-fragrance-notes-guide',
    title: 'Understanding Fragrance Notes: Top, Heart & Base Accords Explained',
    description:
      'Learn how perfumes evolve from initial spray to late drydown. Demystifying olfactive pyramids, projection vs sillage, and note compositions in Pakistan.',
    keywords:
      'fragrance notes explained, top notes heart notes base notes, how perfume works, perfume guide Pakistan',
    published: '2026-11-04',
    readMinutes: 7,
    relatedProductSlugs: ['baccarat-rouge-540', 'creed-aventus', 'explorer-discovery-kit'],
    relatedGuideSlugs: ['extrait-de-parfum-vs-edt-pakistan'],
    sections: [
      {
        heading: 'The Olfactory Pyramid: A Fragrance Symphony in Three Acts',
        paragraphs: [
          'A fine fragrance is not static; it is a time-release olfactory composition. When you first spray a perfume, you experience the volatile top notes. As your skin warms the liquid, deeper heart and base accords gradually emerge over the subsequent hours.'
        ]
      },
      {
        heading: 'Top Notes (The First 15–30 Minutes)',
        paragraphs: [
          'Top notes are the crisp, bright opening of the fragrance. Composed of low-molecular-weight ingredients like bergamot, crisp apple, aquatic aldehydes, and pink pepper, they deliver the initial burst of character before gently subsiding.'
        ]
      },
      {
        heading: 'Heart Notes (Hours 1 to 4)',
        paragraphs: [
          'The heart or middle accords form the true personality of the scent. Rich florals like Damask rose, jasmine grandiflorum, lavender, birch wood, and saffron blossom during this phase, smoothing the transition between fresh top notes and heavy base resins.'
        ]
      },
      {
        heading: 'Base Notes (Hour 4 Through End of Day)',
        paragraphs: [
          'Base notes are heavy, dense fixatives that bind the fragrance to your skin. Composed of Assam agarwood, ambergris crystals, oakmoss, tonka bean, and Madagascar vanilla, these are the notes that people remember and smell on your coat the following morning.'
        ]
      }
    ]
  },

  // 9. Best Office & Executive Perfumes for Men in Pakistan
  {
    slug: 'best-office-perfumes-pakistan-men',
    title: 'Best Office & Executive Perfumes for Men in Pakistan (Corporate Scent Guide)',
    description:
      'Top professional fragrance choices for corporate settings in Islamabad, Lahore, and Karachi. How to project authority without overpowering boardroom air-conditioning.',
    keywords:
      'best office perfume Pakistan, executive mens perfume Islamabad, corporate fragrance men, professional perfume Pakistan',
    published: '2026-11-04',
    readMinutes: 6,
    relatedProductSlugs: ['creed-aventus', 'sauvage-dior', 'blue-night'],
    relatedGuideSlugs: ['best-long-lasting-oud-perfumes-men'],
    sections: [
      {
        heading: 'Corporate Fragrance Etiquette in Pakistan',
        paragraphs: [
          'In corporate boardrooms across Islamabad’s Blue Area or Karachi’s I.I. Chundrigar Road, an executive perfume must walk a precise balance: it must project confidence, competence, and immaculate grooming without overpowering colleagues in enclosed air-conditioned conference rooms.',
          'Overly heavy barnyard oud or cloying sweetness can cause olfactory fatigue. Instead, seek clean woods, aromatic freshness, and smoky fruit notes.'
        ]
      },
      {
        heading: 'Top Office Pick: Creed Aventus Impression',
        paragraphs: [
          'With its dynamic blend of blackcurrant, smoky birch, crisp French apple, and ambergris, our 35% Extrait interpretation of Creed Aventus is the gold standard for executive meetings. It commands attention without sharpness.'
        ]
      },
      {
        heading: 'Hot Weather Pick: Sauvage Impression',
        paragraphs: [
          'During Pakistan’s humid summers, crisp Calabrian bergamot, Sichuan pepper, and ambroxan keep you smelling impeccably fresh and focused from morning client calls to evening commute.'
        ]
      }
    ]
  },

  // 10. Best Wedding and Bridal Perfumes in Pakistan (Barat & Walima Guide)
  {
    slug: 'best-wedding-perfumes-pakistan',
    title: 'Best Wedding & Bridal Perfumes in Pakistan: Barat, Mehndi & Walima Guide',
    description:
      'Grand fragrances for Pakistani weddings. Royal ouds, intoxicating ambers, and Damask rose extraits designed to cut through banquet hall crowds and last through dawn.',
    keywords:
      'wedding perfumes Pakistan, bridal perfume Rawalpindi, best perfume for barat walima, royal wedding fragrance Pakistan',
    published: '2026-11-04',
    readMinutes: 7,
    relatedProductSlugs: ['black-oud', 'baccarat-rouge-540', 'velvet-rose', 'royal-trio-bundle'],
    relatedGuideSlugs: ['best-long-lasting-oud-perfumes-men', 'how-to-make-perfume-last-14-hours-pakistan'],
    sections: [
      {
        heading: 'The Grandeur of Pakistani Weddings Requires Uncompromising Sillage',
        paragraphs: [
          'Pakistani weddings are opulent, multi-day celebrations filled with rich cuisine, heavy zari sherwanis, and crowded festive halls. Standard retail perfumes are easily swallowed up by ambient aromas and banquet heat within thirty minutes.',
          'To make a lasting impression as a groom, bride, or distinguished guest, you need a regal fragrance with substantial projection, radiant amber, and noble agarwood.'
        ]
      },
      {
        heading: 'For the Groom: Black Oud & The Royal Trio',
        paragraphs: [
          'Black Oud combines smoky Assam agarwood with midnight rose and birch smoke, pairing perfectly with a bespoke black or maroon sherwani. It radiates majesty, warmth, and traditional subcontinental nobility throughout the Barat and Walima.'
        ]
      },
      {
        heading: 'For the Bride: Baccarat Rouge 540 & Velvet Rose',
        paragraphs: [
          'For bridal lehengas, Baccarat Rouge 540 delivers a luminous, radiant halo of spun golden sugar, ambergris, and cedarwood that enchants everyone who embraces you. Velvet Rose provides a deeper gothic romantic aura with dark Damask roses dipped in smoked praline.'
        ]
      }
    ]
  }
];

export const getGuideBySlug = (slug: string): GuideArticle | undefined =>
  GUIDES.find(g => g.slug === slug);
