import { Product } from '../types/product';

export interface CategoryFAQ {
  question: string;
  answer: string;
}

export interface CategoryData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  tagline: string;
  introParagraphs: string[];
  buyingGuideHeading: string;
  buyingGuideParagraphs: string[];
  faqs: CategoryFAQ[];
  relatedCategorySlugs: string[];
  filterFn: (product: Product) => boolean;
}

export const CATEGORIES: CategoryData[] = [
  // 1. Men's Perfumes
  {
    slug: 'mens-perfumes',
    name: "Men's Perfumes",
    metaTitle: "Best Men's Perfumes in Pakistan | 35% Extrait De Parfum — Bin Irfan",
    metaDescription: "Discover handcrafted men's perfumes in Pakistan with 35% Extrait concentration. Featuring Black Oud, Creed Aventus, Sauvage, and Dunhill Desire with 14+ hour longevity. Same-day delivery in Rawalpindi & Islamabad.",
    keywords: "mens perfumes Pakistan, best perfumes for men in Pakistan, long lasting mens perfume Rawalpindi, buy mens perfume online Pakistan, male fragrance Islamabad",
    h1: "Handcrafted Men's Extrait De Parfum in Pakistan",
    tagline: "Commanding, long-lasting fragrances engineered for executive presence and social evenings",
    introParagraphs: [
      "Bin Irfan Fragrances formulates concentrated Extrait de Parfum flacons specifically tailored for men navigating Pakistan's demanding subcontinental climate. While standard retail Eau de Toilette (EDT) formulations evaporate within three to four hours, our 35% perfume oil concentration anchors rich base notes like Assam agarwood, birch smoke, Tuscan leather, and French oakmoss for 14 to 18 hours of continuous presence.",
      "Whether you are heading to an executive boardroom meeting in Islamabad, a formal evening dinner in Rawalpindi, or an upscale weekend gathering, our masculine fragrance portfolio delivers authoritative sillage without sharp synthetic alcohol harshness."
    ],
    buyingGuideHeading: "How to Choose the Right Men's Perfume for Your Lifestyle",
    buyingGuideParagraphs: [
      "For everyday office and corporate wear, opt for balanced aromatic or fruity-smoky profiles like Creed Aventus or Sauvage. They project clean confidence without overwhelming indoor air-conditioned spaces.",
      "For winter evenings, formal weddings, and festive occasions, choose deep oriental and woody profiles like Black Oud or Tobacco Vanille. Their dark base accords bloom beautifully in cool air and provide undeniable magnetic warmth."
    ],
    faqs: [
      {
        question: "How long do Bin Irfan men's perfumes last on skin and clothes?",
        answer: "Because we formulate at 35% Extrait De Parfum concentration (compared to 15% in standard Eau de Parfum), our men's fragrances typically project for 6 to 8 hours and remain clearly noticeable on skin for 14 to 18+ hours, lasting on fabrics until laundered."
      },
      {
        question: "Can I get same-day delivery of men's perfumes in Rawalpindi or Islamabad?",
        answer: "Yes. Orders placed before 5:00 PM with verified advance payment (Bank Transfer, EasyPaisa, JazzCash, or Raast) qualify for same-day express rider dispatch across Rawalpindi and Islamabad from our Dhoke Chiragh Deen studio."
      },
      {
        question: "What is your best-selling men's perfume?",
        answer: "Our top-rated men's fragrance is Black Oud (35% Extrait), followed closely by Creed Aventus and Sauvage."
      }
    ],
    relatedCategorySlugs: ['oud-perfumes', 'extrait-de-parfum', 'long-lasting-perfumes', 'perfume-gift-sets'],
    filterFn: p => p.gender === 'men' || p.category === 'bundle'
  },

  // 2. Women's Perfumes
  {
    slug: 'womens-perfumes',
    name: "Women's Perfumes",
    metaTitle: "Best Women's Perfumes in Pakistan | Luxury Extrait De Parfum — Bin Irfan",
    metaDescription: "Shop luxury women's perfumes in Pakistan. Handcrafted 35% Extrait de Parfum featuring Baccarat Rouge 540, Velvet Rose, and celestial florals with intoxicating sillage. Express delivery across Pakistan.",
    keywords: "womens perfumes Pakistan, ladies perfume Rawalpindi, best perfume for women Islamabad, long lasting female perfume Pakistan, buy ladies fragrance online",
    h1: "Opulent Women's Extrait De Parfum Collection",
    tagline: "Sensual floral bouquets, radiant amber crystals, and hypnotic sillage crafted for discerning women",
    introParagraphs: [
      "A woman's signature scent should be memorable, poetic, and effortlessly luxurious. Bin Irfan Fragrances crafts ultra-concentrated women's perfumes that open with luminous florals and dry down into buttery Madagascar vanilla, golden amberwood, and delicate cashmere musk.",
      "Our artisan extraits are blended with natural absolutes—including Damask rose, grandiflorum jasmine, and precious saffron—ensuring your fragrance trail lingers delicately throughout soirees, weddings, and memorable occasions."
    ],
    buyingGuideHeading: "Selecting Your Signature Feminine Fragrance",
    buyingGuideParagraphs: [
      "If you adore ethereal, sweet amber radiance that garners endless compliments, Baccarat Rouge 540 is unmatched with its spun sugar, cedarwood, and crystal ambergris accords.",
      "If you prefer a gothic, nocturnal floral with deep sophistication, Velvet Rose delivers rich Damask petals enveloped in smoked praline and smoldering agarwood."
    ],
    faqs: [
      {
        question: "Are Bin Irfan women's perfumes sweet or floral?",
        answer: "Our collection features both: Baccarat Rouge 540 offers luminous amber sweetness with jasmine and burnt sugar notes, while Velvet Rose offers deep floral richness balanced with dark agarwood and roasted praline."
      },
      {
        question: "Are these fragrances suitable for bridal and wedding wear?",
        answer: "Yes, both Baccarat Rouge 540 and Velvet Rose are among the most requested bridal choices across Rawalpindi and Islamabad due to their 16+ hour longevity and regal sillage."
      }
    ],
    relatedCategorySlugs: ['luxury-perfumes', 'extrait-de-parfum', 'perfume-gift-sets'],
    filterFn: p => p.gender === 'women' || p.gender === 'unisex'
  },

  // 3. Unisex Perfumes
  {
    slug: 'unisex-perfumes',
    name: "Unisex Perfumes",
    metaTitle: "Best Unisex Perfumes in Pakistan | Shared Luxury Extraits — Bin Irfan",
    metaDescription: "Discover Pakistan's finest unisex Extrait de Parfum creations. Handcrafted gender-neutral perfumes from aquatic lotus to creamy vanilla and white musk. Fast nationwide delivery.",
    keywords: "unisex perfumes Pakistan, gender neutral fragrance Pakistan, shared perfume Rawalpindi, best unisex scent Islamabad",
    h1: "Artisanal Unisex Extrait De Parfum Collection",
    tagline: "Boundless olfactory art designed to transcend conventional gender boundaries",
    introParagraphs: [
      "True haute perfumery celebrates aromatic beauty without rigid labels. Bin Irfan Fragrances' unisex collection is designed for perfume aficionados who appreciate the raw harmony of crisp aquatic florals, opulent tobacco leaves, and pristine white musk.",
      "Each unisex formulation reacts uniquely with your individual skin chemistry, creating a truly personal second-skin aura that is impossible to replicate."
    ],
    buyingGuideHeading: "Finding Your Ideal Shared Fragrance",
    buyingGuideParagraphs: [
      "For hot subcontinental summers, Paradise combines dewy water lily lotus blossoms with coarse sea salt minerals and fresh lime for pure invigorating freshness.",
      "For cool autumn and winter evenings, Tobacco Vanille offers an aristocratic blend of cured Virginia tobacco leaves, Madagascar vanilla pods, star anise, and warm spices."
    ],
    faqs: [
      {
        question: "What makes a fragrance unisex?",
        answer: "Unisex fragrances balance fresh, aromatic, woody, and gourmand accords without leaning heavily into sweet candy or sharp barbershop fougère notes, allowing them to smell distinct and stunning on anyone."
      },
      {
        question: "What is your most versatile unisex perfume?",
        answer: "Imperial Musk (pure white musk with Florentine orris) and Paradise (oceanic water lily and lime) are our two most universally loved gender-neutral creations."
      }
    ],
    relatedCategorySlugs: ['fresh-fragrances', 'woody-fragrances', 'perfume-gift-sets'],
    filterFn: p => p.gender === 'unisex'
  },

  // 4. Oud Perfumes
  {
    slug: 'oud-perfumes',
    name: "Oud Perfumes",
    metaTitle: "Best Oud Perfumes in Pakistan | Pure Assam & Cambodian Agarwood — Bin Irfan",
    metaDescription: "Experience authentic artisanal Oud perfumes in Pakistan. Formulated with pure Assam agarwood, aged amber, and smoky birch at 35% Extrait strength. Same-day delivery Rawalpindi & Islamabad.",
    keywords: "oud perfume Pakistan, best oud in Rawalpindi, authentic agarwood perfume Islamabad, Black Oud price Pakistan, buy oud fragrance online",
    h1: "Royal Artisanal Oud & Agarwood Collection",
    tagline: "Centuries of royal oriental heritage distilled into 35% Extrait De Parfum flacons",
    introParagraphs: [
      "Agarwood (Oud) is known as the liquid gold of perfumery. Sourced from the resinous heartwood of mature Aquilaria trees, oud has represented quiet wealth, spiritual contemplation, and royal majesty across the Islamic world for over a thousand years.",
      "Bin Irfan Fragrances specializes in brewing high-potency agarwood extracts from Assam and Cambodia, balancing the smoldering dark woods with Turkish rose absolute, Kashmiri saffron, and rich amber resins."
    ],
    buyingGuideHeading: "The Art of Wearing Oud in Pakistan",
    buyingGuideParagraphs: [
      "Oud is an authoritative, room-filling fragrance family. In cooler months or evening galas, apply one or two sprays of Black Oud directly to the collarbone or pulse points.",
      "For a softer, contemporary twist on agarwood, explore Velvet Rose, where dark Assam oud is wrapped in velvet Damask petals and roasted sweet praline."
    ],
    faqs: [
      {
        question: "Does your oud smell synthetic or medicinal?",
        answer: "No. Unlike mass-market chemical replicas, our Black Oud uses genuine aged agarwood distillates softened with Turkish rose and amber, yielding a warm, balsamic, aristocratic smoky profile."
      },
      {
        question: "Is oud suitable for Jummah and Eid gatherings?",
        answer: "Oud is the traditional fragrance of choice for Friday prayers (Jummah), Eid festivities, and Islamic celebrations throughout Pakistan."
      }
    ],
    relatedCategorySlugs: ['mens-perfumes', 'long-lasting-perfumes', 'woody-fragrances'],
    filterFn: p => p.fragranceFamily === 'Woody & Oud' || p.name.toLowerCase().includes('oud') || p.baseNotes.some(n => /oud|agarwood/i.test(n))
  },

  // 5. Extrait De Parfum
  {
    slug: 'extrait-de-parfum',
    name: "Extrait De Parfum",
    metaTitle: "35% Extrait De Parfum in Pakistan | Pure Perfume Oil Flacons — Bin Irfan",
    metaDescription: "Shop authentic 35% Extrait De Parfum in Pakistan. Handcrafted with maximum perfume oil concentration for 14-18 hour beast longevity and sillage. Discover our complete collection.",
    keywords: "extrait de parfum Pakistan, 35 percent perfume concentration Pakistan, pure perfume oil Rawalpindi, longest lasting perfume Pakistan, extrait de parfum price",
    h1: "Handcrafted 35% Extrait De Parfum Collection",
    tagline: "The highest concentration in perfumery — maximum oil potency with all-day sillage",
    introParagraphs: [
      "In the hierarchy of fragrance classifications, Extrait de Parfum represents the ultimate zenith of concentration and longevity. While commercial Eau de Toilette contains only 5–10% fragrance oils and standard Eau de Parfum sits at 15–20%, every flacon crafted by Bin Irfan Fragrances is formulated at an extraordinary 30–35% pure oil concentration.",
      "This intense concentration allows the fragrance to cling to the skin's lipid barrier, slowly releasing multi-dimensional scent notes across an entire day without evaporating in subcontinental summer heat."
    ],
    buyingGuideHeading: "Why 35% Extrait Outperforms Standard Eau De Parfum",
    buyingGuideParagraphs: [
      "Higher oil concentration requires fewer sprays per application. A single 50ml bottle of 35% Extrait typically lasts as long as a 100ml or 150ml bottle of standard commercial spray.",
      "Additionally, the higher base oil ratio creates a richer, more rounded dry-down with zero alcoholic burn on first spray."
    ],
    faqs: [
      {
        question: "What is the difference between Eau de Parfum (EDP) and Extrait de Parfum?",
        answer: "Eau de Parfum contains 15–20% perfume oil, whereas Extrait de Parfum contains 30–40% oil. This doubles the active fragrance compounds, resulting in significantly richer sillage and double the longevity."
      },
      {
        question: "How many sprays of 35% Extrait should I apply?",
        answer: "Because our concentration is exceptionally potent, 2 to 3 sprays are more than enough for 14+ hours of noticeable projection."
      }
    ],
    relatedCategorySlugs: ['luxury-perfumes', 'long-lasting-perfumes', 'mens-perfumes'],
    filterFn: () => true
  },

  // 6. Luxury Perfumes
  {
    slug: 'luxury-perfumes',
    name: "Luxury Perfumes",
    metaTitle: "Luxury Perfumes Online in Pakistan | Artisanal Fragrance Atelier — Bin Irfan",
    metaDescription: "Experience accessible luxury perfumery in Pakistan. Handcrafted crystal flacons, French and oriental master impressions, and premium presentation boxes. Fast courier delivery.",
    keywords: "luxury perfumes Pakistan, designer impressions Rawalpindi, best luxury perfume Islamabad, imported perfumes Pakistan, high end fragrance atelier",
    h1: "Artisanal Luxury Perfumes in Pakistan",
    tagline: "Couture fragrance craftsmanship without retail markups or compromise",
    introParagraphs: [
      "True luxury is defined by the quality of raw extracts, the architectural precision of the flacon, and the emotional resonance of the scent trail. Bin Irfan Fragrances was founded to deliver couture-grade perfumery directly to fragrance lovers across Pakistan at accessible prices.",
      "Every perfume is housed in an octagonal beveled glass flacon crowned with a diamond-faceted crystal decanter cap and our circular seal of craftsmanship."
    ],
    buyingGuideHeading: "The Pillars of Bin Irfan Luxury Craftsmanship",
    buyingGuideParagraphs: [
      "We source verified raw botanicals from world-renowned growing regions: Assam agarwood, Kashmir saffron, Florentine orris, and French oakmoss.",
      "Each batch undergoes meticulous maceration to ensure harmonious integration between sparkling top notes and deep resinous bases."
    ],
    faqs: [
      {
        question: "Are your luxury perfumes copies of designer brands?",
        answer: "No. Bin Irfan Fragrances crafts independent artisanal master impressions inspired by classic French and oriental olfactory families, utilizing our own 35% Extrait De Parfum formulations."
      },
      {
        question: "How are your perfumes packaged?",
        answer: "Our perfumes are packaged in custom-engineered presentation boxes featuring soft-touch lining, protective internal molding, and gold foil typography—ideal for gifting."
      }
    ],
    relatedCategorySlugs: ['extrait-de-parfum', 'perfume-gift-sets', 'oud-perfumes'],
    filterFn: p => p.isBestSeller === true || p.isFeatured === true
  },

  // 7. Long-Lasting Perfumes
  {
    slug: 'long-lasting-perfumes',
    name: "Long-Lasting Perfumes",
    metaTitle: "Best Long-Lasting Perfumes in Pakistan (14-18 Hours) — Bin Irfan",
    metaDescription: "Looking for beast-mode longevity? Shop long-lasting perfumes in Pakistan tested for 14-18 hour projection in subcontinental heat. 35% Extrait concentration.",
    keywords: "long lasting perfumes Pakistan, beast mode perfume Rawalpindi, 24 hour perfume Islamabad, permanent fragrance Pakistan, best projection perfume",
    h1: "Beast-Mode Longevity & Heavy Projection Perfumes",
    tagline: "Formulated with 35% oil concentration to outlast subcontinental humidity and long days",
    introParagraphs: [
      "Pakistan's extreme temperatures and humidity represent the ultimate torture test for fine fragrances. Standard commercial perfumes often dissipate within hours due to high alcohol evaporation rates.",
      "Bin Irfan Fragrances formulates every flacon with dense, non-volatile base accords—including aged ambergris, cured tobacco sap, dark leather, and agarwood—guaranteeing 14 to 18+ hours of continuous performance on skin and days on clothing."
    ],
    buyingGuideHeading: "Our Top Beast-Mode Performers Ranked",
    buyingGuideParagraphs: [
      "1. Black Oud (16–18+ Hours): Dense Assam agarwood, cistus labdanum, and smoked birch.",
      "2. Baccarat Rouge 540 (16–18+ Hours): Mineral ambergris resin and spun caramelized amberwood with nuclear scent trail.",
      "3. Tobacco Vanille (14–18 Hours): Cured Virginia tobacco leaves and creamy Madagascar vanilla."
    ],
    faqs: [
      {
        question: "Why do some perfumes fade quickly while others last all day?",
        answer: "Longevity depends on oil concentration and molecular weight. Fragrances built on heavy base molecules (like oud, amber, and vanilla) evaporate much slower than citrus-heavy colognes."
      },
      {
        question: "How can I make my perfume last even longer?",
        answer: "Apply to moisturized pulse points (wrists, sides of neck, inner elbows) and mist onto your cotton or linen clothes. Do not rub wrists together after spraying."
      }
    ],
    relatedCategorySlugs: ['oud-perfumes', 'extrait-de-parfum', 'mens-perfumes'],
    filterFn: p => p.longevity.includes('14') || p.longevity.includes('15') || p.longevity.includes('18') || p.projection.toLowerCase().includes('heavy')
  },

  // 8. Perfume Gift Sets & Bundles
  {
    slug: 'perfume-gift-sets',
    name: "Perfume Gift Sets",
    metaTitle: "Perfume Gift Sets & Discovery Kits Pakistan — Bin Irfan Fragrances",
    metaDescription: "Shop luxury perfume gift sets, couples duos, and 5x10ml discovery kits in Pakistan. Packaged in premium presentation boxes. Same-day delivery Rawalpindi & Islamabad.",
    keywords: "perfume gift sets Pakistan, perfume discovery kit Rawalpindi, his and hers perfume duo Islamabad, luxury perfume box Pakistan, wedding gift perfume",
    h1: "Luxury Perfume Gift Sets & Discovery Kits",
    tagline: "Exquisitely curated bundles and travel atomizers presented in luxury slide-drawer boxes",
    introParagraphs: [
      "Finding the perfect luxury gift is effortless with Bin Irfan Fragrances' curated bundles. Whether celebrating a wedding, an anniversary, Eid, or corporate milestones, our gift sets combine our most celebrated Extrait flacons in rigid presentation gift boxes.",
      "For those who wish to experience our complete olfactory library before committing to a full-size flacon, our Explorer Discovery Kit features 5 travel-ready 10ml atomizers in a velvet slide drawer."
    ],
    buyingGuideHeading: "Choosing the Right Fragrance Gift",
    buyingGuideParagraphs: [
      "The Royal Trio (3 × 100ml): Our ultimate flagship collector's pack containing Black Oud, Creed Aventus, and Dunhill Desire with 20% bundle savings.",
      "Prestige Couples Duo (2 × 50ml): The harmonious balance of Black Oud for him and Baccarat Rouge 540 for her in one luxury pairing.",
      "Explorer Discovery Kit (5 × 10ml): The risk-free exploration set covering fresh, woody, and oriental families."
    ],
    faqs: [
      {
        question: "Do the 10ml discovery atomizers have the same concentration as the full bottles?",
        answer: "Yes, exactly the same 35% Extrait De Parfum concentration. Nothing is diluted."
      },
      {
        question: "Can I add a personalized gift message to my order?",
        answer: "Yes. When confirming your order on WhatsApp (+92 321 5186400), simply share your customized message and our team will include a handwritten gold-embossed card inside the box."
      }
    ],
    relatedCategorySlugs: ['luxury-perfumes', 'mens-perfumes', 'womens-perfumes'],
    filterFn: p => p.category === 'bundle' || p.category === 'discovery-set'
  },

  // 9. Fresh Fragrances
  {
    slug: 'fresh-fragrances',
    name: "Fresh & Aquatic Fragrances",
    metaTitle: "Best Fresh & Aquatic Perfumes for Summer in Pakistan — Bin Irfan",
    metaDescription: "Beat the subcontinental summer heat with fresh, aquatic, and citrus perfumes from Bin Irfan Fragrances. Oceanic water lily, sea salt breeze, and Calabrian bergamot with 10+ hour radiance.",
    keywords: "fresh perfumes Pakistan, summer perfumes Rawalpindi, aquatic fragrance Islamabad, best citrus perfume Pakistan, gym perfume men Pakistan",
    h1: "Refreshing Aquatic & Citrus Summer Perfumes",
    tagline: "Clean oceanic chords, sparkling bergamot, and dewy water lilies engineered for hot subcontinental summers",
    introParagraphs: [
      "During peak summer in Pakistan, heavy gourmand or dense spicy scents can feel suffocating. Our Fresh Collection is designed to provide an instant blast of revitalizing energy that keeps you smelling clean, crisp, and elevated from morning until night.",
      "By utilizing high-grade ambergris and white cashmere musk fixatives, our fresh fragrances avoid the common pitfall of disappearing within hours, radiating vibrant citrus and aquatic chords for 10+ hours."
    ],
    buyingGuideHeading: "The Ideal Summer Scent Wardrobe",
    buyingGuideParagraphs: [
      "Paradise: Evokes an untouched island sunrise with sea salt minerals, Calabrian lemon, and dewy lotus blossoms.",
      "Sauvage: Raw masculine vitality driven by sun-drenched bergamot, Sichuan pepper, and noble lavender.",
      "Blue Night: Crystalline spearmint with pink pepper and smoky frankincense for humid summer evenings."
    ],
    faqs: [
      {
        question: "Do fresh and citrus perfumes last in Pakistan's 40°C+ summer heat?",
        answer: "Because we formulate at 35% Extrait strength and anchor our top citrus notes with white cashmere musk and ambergris, our fresh perfumes deliver 9 to 11+ hours of genuine radiance even in high heat."
      },
      {
        question: "What is your best perfume for daily gym and outdoor use?",
        answer: "Paradise and Sauvage are our two most popular choices for athletic, outdoor, and high-heat wear."
      }
    ],
    relatedCategorySlugs: ['unisex-perfumes', 'mens-perfumes', 'perfume-gift-sets'],
    filterFn: p => p.fragranceFamily === 'Fresh & Citrus' || p.fragranceFamily === 'Aromatic Fougere' || p.slug === 'paradise' || p.slug === 'blue-night' || p.slug === 'sauvage-dior'
  },

  // 10. Woody Fragrances
  {
    slug: 'woody-fragrances',
    name: "Woody & Amber Fragrances",
    metaTitle: "Best Woody & Amber Perfumes in Pakistan | Teakwood & Smoked Birch — Bin Irfan",
    metaDescription: "Shop sophisticated woody, smoky, and amber perfumes by Bin Irfan Fragrances. Handcrafted with aged cedarwood, smoked birch, teakwood, and warm spices for all-day elegance.",
    keywords: "woody perfume Pakistan, amber fragrance Rawalpindi, smoked birch perfume Islamabad, teakwood perfume men, winter fragrance Pakistan",
    h1: "Sophisticated Woody & Amber Extrait Collection",
    tagline: "Smoky birch, aged cedarwood, and golden amber resins crafted for quiet confidence",
    introParagraphs: [
      "Woody fragrances form the foundational bedrock of refined masculine and unisex perfumery. Evoking deep forests, bespoke leather armchairs, and warm library hearths, our Woody & Amber collection balances rich aromatic woods with crisp top notes and golden resins.",
      "Every formulation is handcrafted with authentic natural wood distillates—including Assam teakwood, smoked white birch, Indonesian patchouli, and Virginia cedar."
    ],
    buyingGuideHeading: "Exploring Distinct Woody Profiles",
    buyingGuideParagraphs: [
      "Creed Aventus: Crisp French blackcurrant and apple transitioning into smoky birch and dry oakmoss.",
      "Dunhill Desire: Fresh neroli and green apple grounded in warm teakwood, vanilla, and golden amber.",
      "Tobacco Vanille: Cured tobacco leaves steeped in rich cacao, tonka bean, and sweet wood sap."
    ],
    faqs: [
      {
        question: "When is the best time to wear woody perfumes?",
        answer: "Woody and amber perfumes are versatile year-round staples, particularly excelling in evening hours, office environments, and autumn or winter months."
      },
      {
        question: "How do woody notes differ from oud?",
        answer: "While oud is a very dark, balsamic, animalic resin from infected Aquilaria trees, woody accords (like cedar, birch, and teakwood) are drier, crisper, and more versatile for daytime office wear."
      }
    ],
    relatedCategorySlugs: ['oud-perfumes', 'mens-perfumes', 'long-lasting-perfumes'],
    filterFn: p => p.fragranceFamily === 'Woody & Oud' || p.fragranceFamily === 'Oriental & Amber' || p.fragranceFamily === 'Chypre & Smoky' || p.slug === 'dunhill-desire' || p.slug === 'creed-aventus' || p.slug === 'tobacco-vanille'
  }
];

export const getCategoryBySlug = (slug: string): CategoryData | undefined => {
  return CATEGORIES.find(c => c.slug === slug);
};
