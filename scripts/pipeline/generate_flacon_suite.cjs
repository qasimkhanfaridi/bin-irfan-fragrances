/**
 * BIN IRFAN FRAGRANCES - AUTOMATED FLACON & BOTANICALS PRODUCTION SUITE
 * 
 * Future-Proof Scalable Generation Pipeline:
 * Whenever a new perfume / article is added in the future:
 * 1. Simply add an entry to CATALOG_ITEMS below, OR
 * 2. Run from CLI: node scripts/pipeline/generate_flacon_suite.cjs --name "SANTAL ROYAL" --bottle black --bg sandalwood.jpg
 * 
 * Features:
 * - 100% Faithful to Physical Inventory: Composites exact physical cutouts (Light Black & Liquid Chrome).
 * - Scents'n Stories Aesthetic: High-key infinity pure white background with raw botanical scent ingredients ("jari botia").
 * - Dynamic Precision Typography: Embossed metallic gold or laser-etched platinum branding directly on flacon glass.
 * - Realistic Studio Grounding: Dual-layer radial contact and ambient shadows.
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ROOT_DIR = path.resolve(__dirname, '../../');
const ASSETS_DIR = path.join(ROOT_DIR, 'scripts/assets');
const BOTANICALS_DIR = path.join(ASSETS_DIR, 'botanicals');
const PRODUCTS_OUT_DIR = path.join(ROOT_DIR, 'public/products');
const BANNERS_OUT_DIR = path.join(ROOT_DIR, 'public/banners');

const BLACK_FLACON_CLEAN = path.join(ASSETS_DIR, 'light_black_flacon_clean.png');
const SILVER_FLACON_CLEAN = path.join(ASSETS_DIR, 'silver_flacon_clean.png');

// Catalog Configuration for All Fragrances
const CATALOG_ITEMS = [
  // 1. Black Oud (Assam Agarwood, Amber Resin, Rose Petals)
  {
    id: 'black-oud',
    filename: 'black_oud.jpg',
    bottle: 'black',
    line1: 'BLACK',
    line2: 'OUD',
    fontSize: 16,
    letterSpacing: 3.5,
    botanical: 'black_oud.jpg',
    description: 'Assam agarwood chips, glowing amber resin, and dried rose petals'
  },
  // 2. Creed Aventus (Crisp Apples, Birchwood Bark, Blackcurrant Leaves)
  {
    id: 'creed-aventus',
    filename: 'creed_aventus.jpg',
    bottle: 'black',
    line1: 'CREED',
    line2: 'AVENTUS',
    fontSize: 15,
    letterSpacing: 3.2,
    botanical: 'creed_aventus.jpg',
    description: 'Crisp green apple slices, natural birchwood bark, and blackcurrant leaves'
  },
  // 3. Dunhill Desire (Red Apples, Teakwood Bark, Madagascar Vanilla)
  {
    id: 'dunhill-desire',
    filename: 'dunhill_desire.jpg',
    bottle: 'black',
    line1: 'DUNHILL',
    line2: 'DESIRE',
    fontSize: 15,
    letterSpacing: 3.2,
    botanical: 'dunhill_desire.jpg',
    description: 'Sliced red apples with dew drops, natural teakwood bark, and vanilla pods'
  },
  // 4. Baccarat Rouge 540 (Crimson Saffron, Amber Crystals, Jasmine)
  {
    id: 'baccarat-rouge-540',
    filename: 'baccarat_rouge.jpg',
    bottle: 'black',
    line1: 'BACCARAT',
    line2: 'ROUGE 540',
    fontSize: 14,
    letterSpacing: 2.8,
    botanical: 'baccarat_rouge.jpg',
    description: 'Crimson saffron threads, multifaceted glowing amber prisms, and white jasmine'
  },
  // 5. Tobacco Vanille (Cured Tobacco Leaves, Star Anise, Vanilla, Cinnamon)
  {
    id: 'tobacco-vanille',
    filename: 'tobacco_vanille.jpg',
    bottle: 'black',
    line1: 'TOBACCO',
    line2: 'VANILLE',
    fontSize: 14.5,
    letterSpacing: 3.0,
    botanical: 'tobacco_vanille.jpg',
    description: 'Cured Virginia tobacco leaves, Madagascar vanilla beans, and cinnamon quills'
  },
  // 6. Velvet Rose (Damask Rose Petals, Assam Agarwood, Clove Buds)
  {
    id: 'velvet-rose',
    filename: 'velvet_rose.jpg',
    bottle: 'black',
    line1: 'VELVET',
    line2: 'ROSE',
    fontSize: 15.5,
    letterSpacing: 3.4,
    botanical: 'velvet_rose.jpg',
    description: 'Velvet Damask rose petals, smoldering agarwood chips, and clove buds'
  },
  // 7. Sauvage (Calabrian Bergamot, Sichuan Peppercorns, Lavender)
  {
    id: 'sauvage-dior',
    filename: 'sauvage.jpg',
    bottle: 'silver',
    line1: 'SAUVAGE',
    line2: '',
    fontSize: 16.5,
    letterSpacing: 3.8,
    botanical: 'sauvage.jpg',
    description: 'Calabrian bergamot slices, raw Sichuan peppercorns, and French lavender'
  },
  // 8. Paradise (White Water Lily, Sea Salt Minerals, Green Lime)
  {
    id: 'paradise',
    filename: 'paradise_sapphire.jpg',
    bottle: 'silver',
    line1: 'PARADISE',
    line2: '',
    fontSize: 16.5,
    letterSpacing: 3.8,
    botanical: 'paradise.jpg',
    description: 'Pristine white water lily lotus, raw sea salt crystals, and sliced green lime'
  },
  // 9. Blue Night (Frosted Peppermint, Mineral Crystals, Oceanic Breeze)
  {
    id: 'blue-night',
    filename: 'blue_night.jpg',
    bottle: 'silver',
    line1: 'BLUE',
    line2: 'NIGHT',
    fontSize: 16,
    letterSpacing: 3.5,
    botanical: 'blue_night.jpg',
    description: 'Frosted peppermint sprigs, cool sea minerals, and frankincense smoke'
  },
  // 10. Imperial Musk (Florentine Orris, White Jasmine, Cashmere Musk)
  {
    id: 'imperial-musk',
    filename: 'imperial_musk.jpg',
    bottle: 'silver',
    line1: 'IMPERIAL',
    line2: 'MUSK',
    fontSize: 14.5,
    letterSpacing: 3.2,
    botanical: 'imperial_musk.jpg',
    description: 'Pure white jasmine blossoms, Florentine orris root, and clean cashmere musk'
  }
];

/**
 * Creates metallic lettering SVG buffer matching factory medallion styling
 */
function createTypographySvg(line1, line2, fontSize, letterSpacing, isBlackBottle) {
  const width = 330;
  const height = 630;
  const centerX = 165;
  const y1 = line2 ? 445 : 455;
  const y2 = 468;

  if (isBlackBottle) {
    // Rich Embossed Metallic Gold Foil matching the Gold Medallion
    return Buffer.from(`
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF2CE" />
            <stop offset="30%" stop-color="#E2C172" />
            <stop offset="65%" stop-color="#EED596" />
            <stop offset="100%" stop-color="#B88A3A" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.5" dy="1.2" stdDeviation="0.8" flood-color="#050505" flood-opacity="0.95" />
          </filter>
        </defs>
        <g filter="url(#goldGlow)">
          <text x="${centerX}" y="${y1}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${fontSize}" letter-spacing="${letterSpacing}" fill="url(#goldMetallic)" text-anchor="middle" font-weight="bold">${line1}</text>
          ${line2 ? `<text x="${centerX}" y="${y2}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${fontSize}" letter-spacing="${letterSpacing}" fill="url(#goldMetallic)" text-anchor="middle" font-weight="bold">${line2}</text>` : ''}
        </g>
      </svg>
    `);
  } else {
    // Laser-Etched Deep Graphite / Chrome Slate matching the Silver Flacon
    return Buffer.from(`
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="silverEtch" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.4" dy="1.0" stdDeviation="0.7" flood-color="#111827" flood-opacity="0.80" />
          </filter>
        </defs>
        <g filter="url(#silverEtch)">
          <text x="${centerX}" y="${y1}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${fontSize}" letter-spacing="${letterSpacing}" fill="#262D36" text-anchor="middle" font-weight="bold">${line1}</text>
          ${line2 ? `<text x="${centerX}" y="${y2}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${fontSize}" letter-spacing="${letterSpacing}" fill="#262D36" text-anchor="middle" font-weight="bold">${line2}</text>` : ''}
        </g>
      </svg>
    `);
  }
}

/**
 * Creates studio floor contact and ambient shadows for optical grounding
 */
function createContactShadowSvg(bottomY, width = 1024, height = 1024, centerX = 512) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="contactGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#14100D" stop-opacity="0.55" />
          <stop offset="35%" stop-color="#2B241E" stop-opacity="0.30" />
          <stop offset="70%" stop-color="#73675E" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="ambientGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#241E1A" stop-opacity="0.22" />
          <stop offset="55%" stop-color="#544B43" stop-opacity="0.06" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </radialGradient>
      </defs>
      <!-- Wide soft ambient floor shadow -->
      <ellipse cx="${centerX}" cy="${bottomY - 4}" rx="180" ry="22" fill="url(#ambientGrad)" />
      <!-- Sharp contact shadow directly under flacon base -->
      <ellipse cx="${centerX}" cy="${bottomY - 8}" rx="145" ry="12" fill="url(#contactGrad)" />
    </svg>
  `);
}

/**
 * Generates a single high-resolution product shot
 */
async function generateSingleFlacon(item, outputPath) {
  const isBlack = item.bottle === 'black';
  const masterFlacon = isBlack ? BLACK_FLACON_CLEAN : SILVER_FLACON_CLEAN;
  const botanicalBg = path.join(BOTANICALS_DIR, item.botanical);

  if (!fs.existsSync(botanicalBg)) {
    throw new Error(`Botanical background not found: ${botanicalBg}`);
  }

  // 1. Stamp Typography onto Flacon
  const typoSvg = createTypographySvg(item.line1, item.line2, item.fontSize, item.letterSpacing, isBlack);
  const typoPng = await sharp(typoSvg).png().toBuffer();
  const brandedFlaconBuffer = await sharp(masterFlacon)
    .composite([{ input: typoPng, top: 0, left: 0 }])
    .png()
    .toBuffer();

  // 2. Scale & Position Flacon for 1024x1024 Canvas
  const targetH = 680;
  const targetW = Math.round(330 * (targetH / 630)); // 356px
  const left = Math.round((1024 - targetW) / 2); // 334px
  const top = 175; // Sits naturally inside the botanical stage
  const bottomY = top + targetH; // 855px

  const resizedFlacon = await sharp(brandedFlaconBuffer)
    .resize(targetW, targetH, { fit: 'contain' })
    .toBuffer();

  // Ground Flacon with Soft Contact Shadows
  const shadowSvg = createContactShadowSvg(bottomY, 1024, 1024, 512);
  const shadowPng = await sharp(shadowSvg).png().toBuffer();

  // 4. Resize background first, then composite onto Botanical Stage
  const baseBg = await sharp(botanicalBg)
    .resize(1024, 1024, { fit: 'cover' })
    .toBuffer();

  await sharp(baseBg)
    .composite([
      { input: shadowPng, top: 0, left: 0 },
      { input: resizedFlacon, top, left }
    ])
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  console.log(`[Generated] ${path.basename(outputPath)} (${item.bottle.toUpperCase()} flacon | ${item.line1} ${item.line2})`);
}

/**
 * Generates Duo Collections (Summer Fresh Duo & Prestige Couples Duo)
 */
async function generateDuos() {
  console.log('\n--- Generating Curated Flacon Duo Collections ---');

  // 1. Summer Fresh Aquatic Duo (Paradise & Blue Night Silver Flacons)
  const aquaticBg = path.join(BOTANICALS_DIR, 'paradise.jpg');
  const targetH = 620;
  const targetW = Math.round(330 * (targetH / 630)); // ~325px
  const bottomY = 220 + targetH; // 840px

  // Paradise Silver Flacon
  const typoParadise = createTypographySvg('PARADISE', '', 16.5, 3.8, false);
  const typoParadisePng = await sharp(typoParadise).png().toBuffer();
  const paradiseBrandedRaw = await sharp(SILVER_FLACON_CLEAN)
    .composite([{ input: typoParadisePng, top: 0, left: 0 }])
    .png()
    .toBuffer();
  const paradiseBranded = await sharp(paradiseBrandedRaw)
    .resize(targetW, targetH, { fit: 'contain' })
    .toBuffer();

  // Blue Night Silver Flacon
  const typoBlue = createTypographySvg('BLUE', 'NIGHT', 16, 3.5, false);
  const typoBluePng = await sharp(typoBlue).png().toBuffer();
  const blueBrandedRaw = await sharp(SILVER_FLACON_CLEAN)
    .composite([{ input: typoBluePng, top: 0, left: 0 }])
    .png()
    .toBuffer();
  const blueBranded = await sharp(blueBrandedRaw)
    .resize(targetW, targetH, { fit: 'contain' })
    .toBuffer();

  const duoShadow1 = createContactShadowSvg(bottomY, 1024, 1024, 370);
  const duoShadow2 = createContactShadowSvg(bottomY, 1024, 1024, 654);

  const baseAquatic = await sharp(aquaticBg)
    .resize(1024, 1024, { fit: 'cover' })
    .toBuffer();

  await sharp(baseAquatic)
    .composite([
      { input: await sharp(duoShadow1).png().toBuffer(), top: 0, left: 0 },
      { input: await sharp(duoShadow2).png().toBuffer(), top: 0, left: 0 },
      { input: paradiseBranded, top: 220, left: 207 },
      { input: blueBranded, top: 220, left: 491 }
    ])
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(PRODUCTS_OUT_DIR, 'summer_fresh_duo.jpg'));
  console.log('[Generated] summer_fresh_duo.jpg');

  // 2. Prestige Couples Duo (Black Oud + Baccarat Rouge or Duo Master)
  const couplesBg = path.join(BOTANICALS_DIR, 'black_oud.jpg');
  const typoBlackOud = createTypographySvg('BLACK', 'OUD', 16, 3.5, true);
  const typoBlackOudPng = await sharp(typoBlackOud).png().toBuffer();
  const blackOudBrandedRaw = await sharp(BLACK_FLACON_CLEAN)
    .composite([{ input: typoBlackOudPng, top: 0, left: 0 }])
    .png()
    .toBuffer();
  const blackOudBranded = await sharp(blackOudBrandedRaw)
    .resize(targetW, targetH, { fit: 'contain' })
    .toBuffer();

  const typoBaccarat = createTypographySvg('BACCARAT', 'ROUGE', 14, 2.8, true);
  const typoBaccaratPng = await sharp(typoBaccarat).png().toBuffer();
  const baccaratBrandedRaw = await sharp(BLACK_FLACON_CLEAN)
    .composite([{ input: typoBaccaratPng, top: 0, left: 0 }])
    .png()
    .toBuffer();
  const baccaratBranded = await sharp(baccaratBrandedRaw)
    .resize(targetW, targetH, { fit: 'contain' })
    .toBuffer();

  const baseCouples = await sharp(couplesBg)
    .resize(1024, 1024, { fit: 'cover' })
    .toBuffer();

  await sharp(baseCouples)
    .composite([
      { input: await sharp(duoShadow1).png().toBuffer(), top: 0, left: 0 },
      { input: await sharp(duoShadow2).png().toBuffer(), top: 0, left: 0 },
      { input: blackOudBranded, top: 220, left: 207 },
      { input: baccaratBranded, top: 220, left: 491 }
    ])
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile(path.join(PRODUCTS_OUT_DIR, 'prestige_couples_duo.jpg'));
  console.log('[Generated] prestige_couples_duo.jpg');
}

/**
 * Generates Hero Showcase Bottle & Banners
 */
async function generateHeroAssets() {
  console.log('\n--- Generating Hero Showcase & Banners ---');

  // Hero bottle: Black Oud Master Flacon
  const heroSrc = path.join(PRODUCTS_OUT_DIR, 'black_oud.jpg');
  if (fs.existsSync(heroSrc)) {
    fs.copyFileSync(heroSrc, path.join(PRODUCTS_OUT_DIR, 'hero-bottle.jpg'));
    console.log('[Copied] hero-bottle.jpg from black_oud.jpg');
  }

  // Hero Banner: Panoramic Master (1376x768)
  // Check if we have bin_irfan_outdoor_mountain_duo_png or authentic duo master
  const mountainDuo = path.join(ROOT_DIR, '../../brain/d7e03256-96df-4abe-96d3-fde32b1145c1/bin_irfan_outdoor_mountain_duo_png_1793697803435.jpg');
  const bannerDest = path.join(BANNERS_OUT_DIR, 'hero_banner.jpg');
  if (fs.existsSync(mountainDuo)) {
    await sharp(mountainDuo)
      .resize(1376, 768, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
      .toFile(bannerDest);
    console.log('[Generated] hero_banner.jpg (Alpine Sunrise Mountain Slate Duo)');
  }
}

/**
 * Main Execution Function
 */
async function runFullPipeline() {
  console.log('===============================================================');
  console.log(' BIN IRFAN FRAGRANCES - COMMERCIAL FLACON CATALOG PIPELINE   ');
  console.log('===============================================================\n');

  // Ensure output directories exist
  fs.mkdirSync(PRODUCTS_OUT_DIR, { recursive: true });
  fs.mkdirSync(BANNERS_OUT_DIR, { recursive: true });

  // Generate All 10 Fragrance Flacons
  for (const item of CATALOG_ITEMS) {
    const outPath = path.join(PRODUCTS_OUT_DIR, item.filename);
    await generateSingleFlacon(item, outPath);
  }

  // Generate Duos
  await generateDuos();

  // Generate Hero Assets
  await generateHeroAssets();

  console.log('\n===============================================================');
  console.log(' SUCCESS: All product photography regenerated flawlessly!     ');
  console.log('===============================================================');
}

// Support CLI invocation for future single perfume addition:
// node scripts/pipeline/generate_flacon_suite.cjs --name "SANTAL ROYAL" --bottle black --bg sandalwood.jpg --out public/products/santal_royal.jpg
const args = process.argv.slice(2);
if (args.includes('--name')) {
  const nameIdx = args.indexOf('--name');
  const fullName = args[nameIdx + 1] || 'NEW SCENT';
  const parts = fullName.split(' ');
  const line1 = parts[0] || 'NEW';
  const line2 = parts.slice(1).join(' ') || '';

  const bottleIdx = args.indexOf('--bottle');
  const bottle = bottleIdx !== -1 ? args[bottleIdx + 1] : 'black';

  const bgIdx = args.indexOf('--bg');
  const bg = bgIdx !== -1 ? args[bgIdx + 1] : 'black_oud.jpg';

  const outIdx = args.indexOf('--out');
  const outPath = outIdx !== -1 ? args[outIdx + 1] : path.join(PRODUCTS_OUT_DIR, `${line1.toLowerCase()}.jpg`);

  const item = {
    id: line1.toLowerCase(),
    bottle,
    line1: line1.toUpperCase(),
    line2: line2.toUpperCase(),
    fontSize: line2 ? 15 : 16.5,
    letterSpacing: 3.2,
    botanical: bg
  };

  generateSingleFlacon(item, outPath)
    .then(() => console.log(`Custom perfume flacon generated at: ${outPath}`))
    .catch(console.error);
} else {
  runFullPipeline().catch(console.error);
}
