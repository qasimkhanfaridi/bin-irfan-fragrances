const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = 'C:/Users/qasim.faridi.LT-LE-126/.gemini/antigravity/brain/d7e03256-96df-4abe-96d3-fde32b1145c1';
const OFFICIAL_MEDALLION = 'public/brand/logo_medallion.png';

// Generate plaque label overlay tailored to exact plaque dimensions
async function renderPlaqueContent({
  width,
  height,
  logoSize,
  name,
  subtitle = 'EXTRAIT DE PARFUM',
  volume = '50ML e 1.7 FL. OZ.',
  logoTop = 8,
  nameFontSize = 13.5,
  nameY,
  subY,
  volY
}) {
  const logo = await sharp(OFFICIAL_MEDALLION)
    .resize(logoSize, logoSize)
    .toBuffer();

  const calcNameY = nameY || (logoTop + logoSize + 18);
  const calcDividerY = calcNameY + 8;
  const calcSubY = subY || (calcDividerY + 14);
  const calcVolY = volY || (calcSubY + 14);

  const textColor = '#2A060C';
  const subColor = '#4A1C12';
  const dividerColor = '#7A481C';

  const svgText = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Perfume Name -->
      <text x="${width / 2}" y="${calcNameY}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${nameFontSize}" letter-spacing="2.6" fill="${textColor}" text-anchor="middle" font-weight="bold">${name.toUpperCase()}</text>
      
      <!-- Hairline Divider -->
      <line x1="${width * 0.16}" y1="${calcDividerY}" x2="${width * 0.84}" y2="${calcDividerY}" stroke="${dividerColor}" stroke-width="0.7" opacity="0.8" />
      
      <!-- Subtitle -->
      <text x="${width / 2}" y="${calcSubY}" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="${Math.max(6.8, nameFontSize * 0.54)}" letter-spacing="2.2" fill="${subColor}" text-anchor="middle" font-weight="bold">${subtitle}</text>
      
      <!-- Volume -->
      ${volume ? `<text x="${width / 2}" y="${calcVolY}" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="${Math.max(6, nameFontSize * 0.46)}" letter-spacing="1.4" fill="${subColor}" text-anchor="middle" font-weight="600">${volume}</text>` : ''}
    </svg>
  `);

  const textPng = await sharp(svgText).png().toBuffer();

  const combined = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: logo, top: logoTop, left: Math.round((width - logoSize) / 2) },
    { input: textPng, top: 0, left: 0 }
  ])
  .png()
  .toBuffer();

  return combined;
}

// Minimal text plaque for small horizontal bottle plaques
async function renderHorizontalBottlePlaque({
  width,
  height,
  name,
  subtitle = 'EXTRAIT DE PARFUM',
  volume = '50ML',
  nameFontSize = 11.5
}) {
  const textColor = '#2A060C';
  const subColor = '#4A1C12';
  const dividerColor = '#7A481C';

  const svg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <text x="${width / 2}" y="${height * 0.38}" font-family="'Cinzel', 'Times New Roman', serif" font-size="${nameFontSize}" letter-spacing="2.2" fill="${textColor}" text-anchor="middle" font-weight="bold">${name.toUpperCase()}</text>
      <line x1="${width * 0.18}" y1="${height * 0.52}" x2="${width * 0.82}" y2="${height * 0.52}" stroke="${dividerColor}" stroke-width="0.7" opacity="0.8" />
      <text x="${width / 2}" y="${height * 0.72}" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="7.2" letter-spacing="1.8" fill="${subColor}" text-anchor="middle" font-weight="bold">${subtitle}</text>
      <text x="${width / 2}" y="${height * 0.88}" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="6.5" letter-spacing="1.2" fill="${subColor}" text-anchor="middle" font-weight="600">${volume}</text>
    </svg>
  `);

  return sharp(svg).png().toBuffer();
}

// Generate the Corner Official Brand Seal Watermark for all pictures
async function createCornerSeal(sealSize = 92) {
  const seal = await sharp(OFFICIAL_MEDALLION)
    .resize(sealSize, sealSize)
    .toBuffer();

  const svgGlow = Buffer.from(`
    <svg width="${sealSize + 16}" height="${sealSize + 16}" viewBox="0 0 ${sealSize + 16} ${sealSize + 16}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="sealShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.38" />
        </filter>
      </defs>
      <circle cx="${(sealSize + 16) / 2}" cy="${(sealSize + 16) / 2}" r="${sealSize / 2}" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6" filter="url(#sealShadow)" />
    </svg>
  `);

  const glowPng = await sharp(svgGlow).png().toBuffer();

  return sharp(glowPng)
    .composite([{ input: seal, top: 8, left: 8 }])
    .png()
    .toBuffer();
}

async function buildAllFlawless() {
  console.log('=== STARTING FLAWLESS LUXURY PHOTOGRAPHY ENGINE ===');
  const cornerSeal = await createCornerSeal(88);
  const cornerRight = 1024 - 88 - 36;
  const cornerTop = 32;

  // 1. BLACK OUD (Obsidian Flacon)
  console.log('1. Black Oud...');
  const blackPlaque = await renderPlaqueContent({
    width: 171,
    height: 180,
    logoSize: 92,
    logoTop: 10,
    name: 'Black Oud',
    nameFontSize: 15,
    nameY: 126,
    subY: 148,
    volY: 165
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_rose_bottle_1790744935853.jpg'))
    .composite([
      { input: blackPlaque, top: 456, left: 473 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/black_oud.jpg');
  fs.copyFileSync('public/products/black_oud.jpg', 'public/products/hero-bottle.jpg');

  // 2. DUNHILL DESIRE (Ruby Red Flacon)
  console.log('2. Dunhill Desire...');
  const dunhillPlaque = await renderPlaqueContent({
    width: 142,
    height: 238,
    logoSize: 90,
    logoTop: 32,
    name: 'Dunhill Desire',
    nameFontSize: 13.5,
    nameY: 152,
    subY: 178,
    volY: 198
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_ruby_bottle_1790744790529.jpg'))
    .composite([
      { input: dunhillPlaque, top: 420, left: 440 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/dunhill_desire.jpg');

  // 3. PARADISE (Aqua Turquoise Flacon)
  console.log('3. Paradise...');
  const paradisePlaque = await renderPlaqueContent({
    width: 186,
    height: 164,
    logoSize: 90,
    logoTop: 8,
    name: 'Paradise',
    nameFontSize: 15.5,
    nameY: 120,
    subY: 142,
    volY: 156
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_cyan_bottle_1790744661657.jpg'))
    .composite([
      { input: paradisePlaque, top: 427, left: 467 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/paradise_sapphire.jpg');

  // 4. CREED AVENTUS (Crystal Diamond Flacon)
  console.log('4. Creed Aventus...');
  const aventusPlaque = await renderPlaqueContent({
    width: 194,
    height: 137,
    logoSize: 78,
    logoTop: 6,
    name: 'Creed Aventus',
    nameFontSize: 14,
    nameY: 100,
    subY: 118,
    volY: 130
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_crystal_bottle_1790744860854.jpg'))
    .composite([
      { input: aventusPlaque, top: 441, left: 400 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/creed_aventus.jpg');

  // 5. BACCARAT ROUGE 540 (Crimson Ruby Flacon)
  console.log('5. Baccarat Rouge 540...');
  const baccaratPlaque = await renderPlaqueContent({
    width: 142,
    height: 238,
    logoSize: 88,
    logoTop: 32,
    name: 'Baccarat Rouge 540',
    nameFontSize: 11.2,
    nameY: 152,
    subY: 178,
    volY: 198
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_ruby_bottle_1790744790529.jpg'))
    .composite([
      { input: baccaratPlaque, top: 420, left: 440 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/baccarat_rouge.jpg');

  // 6. SAUVAGE (Midnight Cobalt Flacon)
  console.log('6. Sauvage...');
  const sauvagePlaque = await renderPlaqueContent({
    width: 152,
    height: 110,
    logoSize: 66,
    logoTop: 4,
    name: 'Sauvage',
    nameFontSize: 14,
    nameY: 82,
    subY: 98,
    volume: ''
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_navy_bottle_1790744724606.jpg'))
    .composite([
      { input: sauvagePlaque, top: 454, left: 476 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/sauvage.jpg');

  // 7. BLUE NIGHT (Midnight Cobalt Flacon)
  console.log('7. Blue Night...');
  const blueNightPlaque = await renderPlaqueContent({
    width: 152,
    height: 110,
    logoSize: 66,
    logoTop: 4,
    name: 'Blue Night',
    nameFontSize: 13.5,
    nameY: 82,
    subY: 98,
    volume: ''
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_navy_bottle_1790744724606.jpg'))
    .composite([
      { input: blueNightPlaque, top: 454, left: 476 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/blue_night.jpg');

  // 8. TOBACCO VANILLE (Amber Flacon)
  console.log('8. Tobacco Vanille...');
  const tvPlaque = await renderPlaqueContent({
    width: 196,
    height: 203,
    logoSize: 96,
    logoTop: 12,
    name: 'Tobacco Vanille',
    nameFontSize: 13.5,
    nameY: 132,
    subY: 154,
    volY: 172
  });
  await sharp(path.join(ARTIFACT_DIR, 'bottle_test_1790744058921.jpg'))
    .composite([
      { input: tvPlaque, top: 435, left: 464 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/tobacco_vanille.jpg');

  // 9. ROYAL AMBER (Amber Flacon)
  console.log('9. Royal Amber...');
  const amberPlaque = await renderPlaqueContent({
    width: 196,
    height: 203,
    logoSize: 96,
    logoTop: 12,
    name: 'Royal Amber',
    nameFontSize: 14.5,
    nameY: 132,
    subY: 154,
    volY: 172
  });
  await sharp(path.join(ARTIFACT_DIR, 'bottle_test_1790744058921.jpg'))
    .composite([
      { input: amberPlaque, top: 435, left: 464 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/royal_amber.jpg');

  // 10. IMPERIAL MUSK (Crystal Diamond Flacon)
  console.log('10. Imperial Musk...');
  const muskPlaque = await renderPlaqueContent({
    width: 194,
    height: 137,
    logoSize: 78,
    logoTop: 6,
    name: 'Imperial Musk',
    nameFontSize: 13.5,
    nameY: 100,
    subY: 118,
    volY: 130
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_crystal_bottle_1790744860854.jpg'))
    .composite([
      { input: muskPlaque, top: 441, left: 400 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/imperial_musk.jpg');

  // 11. VELVET ROSE (Damask Rose-Wine Flacon)
  console.log('11. Velvet Rose...');
  const rosePlaque = await renderPlaqueContent({
    width: 171,
    height: 180,
    logoSize: 92,
    logoTop: 10,
    name: 'Velvet Rose',
    nameFontSize: 14.5,
    nameY: 126,
    subY: 148,
    volY: 165
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_rose_bottle_1790744935853.jpg'))
    .composite([
      { input: rosePlaque, top: 456, left: 473 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/velvet_rose.jpg');

  // 12. HERO BANNER (1376 x 768)
  console.log('12. Hero Banner...');
  const heroCornerSeal = await createCornerSeal(78);
  const heroPlaque = await renderPlaqueContent({
    width: 128,
    height: 162,
    logoSize: 76,
    logoTop: 8,
    name: 'Bin Irfan',
    nameFontSize: 12,
    subtitle: 'EXTRAIT DE PARFUM',
    volume: '100ML e 3.4 FL. OZ.',
    nameY: 104,
    subY: 124,
    volY: 138
  });
  await sharp(path.join(ARTIFACT_DIR, 'base_hero_banner_1790745014900.jpg'))
    .composite([
      { input: heroPlaque, top: 423, left: 624 },
      { input: heroCornerSeal, top: 28, left: 1376 - 78 - 36 }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/banners/hero_banner.jpg');

  // 13. BOX PACKAGING SHOWCASE
  console.log('13. Box Packaging Showcase...');
  const boxBottlePlaque = await renderPlaqueContent({
    width: 128,
    height: 180,
    logoSize: 80,
    logoTop: 8,
    name: 'Bin Irfan',
    nameFontSize: 12.5,
    volume: '100ML e 3.4 FL. OZ.',
    nameY: 108,
    subY: 128,
    volY: 144
  });
  const boxLidSeal = await sharp(OFFICIAL_MEDALLION)
    .resize(120, 120)
    .toBuffer();
  await sharp(path.join(ARTIFACT_DIR, 'base_packaging_box_1790745091844.jpg'))
    .composite([
      { input: boxBottlePlaque, top: 546, left: 654 },
      { input: boxLidSeal, top: 310, left: 200 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/box_packaging.jpg');

  // 14. ROYAL TRIO BUNDLE
  console.log('14. Royal Trio Bundle...');
  // The AI mark (L) LUXE is centered at X: 672, Y: 320.
  // A 155px medallion directly centered at X: 672, Y: 320 completely covers it naturally!
  const trioBoxSeal = await sharp(OFFICIAL_MEDALLION)
    .resize(155, 155)
    .toBuffer();
  const trioText = Buffer.from(`
    <svg width="280" height="36" viewBox="0 0 280 36" xmlns="http://www.w3.org/2000/svg">
      <text x="140" y="24" font-family="'Cinzel', Georgia, serif" font-size="12.5" letter-spacing="3.2" fill="#8C5C1B" font-weight="bold" text-anchor="middle">BIN IRFAN FRAGRANCE</text>
    </svg>
  `);
  const trioTextPng = await sharp(trioText).png().toBuffer();

  const b1 = await renderHorizontalBottlePlaque({ width: 138, height: 95, name: 'Black Oud', volume: '100ML' });
  const b2 = await renderHorizontalBottlePlaque({ width: 140, height: 98, name: 'Creed Aventus', volume: '100ML' });
  const b3 = await renderHorizontalBottlePlaque({ width: 146, height: 98, name: 'Dunhill Desire', volume: '100ML' });

  await sharp(path.join(ARTIFACT_DIR, 'base_royal_trio_1790745171617.jpg'))
    .composite([
      { input: trioBoxSeal, top: 242, left: 595 },
      { input: trioTextPng, top: 405, left: 532 },
      { input: b1, top: 597, left: 154 },
      { input: b2, top: 615, left: 418 },
      { input: b3, top: 622, left: 695 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/royal_trio_bundle.jpg');

  // 15. DISCOVERY EXPLORER KIT
  console.log('15. Discovery Explorer Kit...');
  const discoverySeal = await sharp(OFFICIAL_MEDALLION)
    .resize(118, 118)
    .toBuffer();
  const discoveryText = Buffer.from(`
    <svg width="340" height="56" viewBox="0 0 340 56" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="24" font-family="'Cinzel', Georgia, serif" font-size="14" letter-spacing="3.2" fill="#8C5C1B" font-weight="bold" text-anchor="middle">BIN IRFAN FRAGRANCE</text>
      <text x="170" y="44" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="8.5" letter-spacing="2.2" fill="#6B4515" font-weight="600" text-anchor="middle">DISCOVERY EXPLORER KIT • 5 × 10ML</text>
    </svg>
  `);
  const discoveryTextPng = await sharp(discoveryText).png().toBuffer();
  await sharp(path.join(ARTIFACT_DIR, 'base_discovery_kit_1790745255992.jpg'))
    .composite([
      { input: discoverySeal, top: 215, left: 518 },
      { input: discoveryTextPng, top: 340, left: 407 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/discovery_explorer_kit.jpg');

  // 16. PRESTIGE COUPLES DUO
  console.log('16. Prestige Couples Duo...');
  const couple1 = await renderHorizontalBottlePlaque({ width: 165, height: 104, name: 'Black Oud', volume: '50ML', nameFontSize: 13 });
  const couple2 = await renderHorizontalBottlePlaque({ width: 164, height: 106, name: 'Baccarat Rouge 540', volume: '50ML', nameFontSize: 11 });
  await sharp(path.join(ARTIFACT_DIR, 'base_couples_duo_1790745341569.jpg'))
    .composite([
      { input: couple1, top: 512, left: 275 },
      { input: couple2, top: 512, left: 574 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/prestige_couples_duo.jpg');

  // 17. SUMMER FRESH AQUATIC DUO
  console.log('17. Summer Fresh Aquatic Duo...');
  const summer1 = await renderHorizontalBottlePlaque({ width: 102, height: 125, name: 'Paradise', volume: '50ML', nameFontSize: 12 });
  const summer2 = await renderHorizontalBottlePlaque({ width: 110, height: 132, name: 'Blue Night', volume: '50ML', nameFontSize: 12 });
  await sharp(path.join(ARTIFACT_DIR, 'base_summer_duo_1790745436759.jpg'))
    .composite([
      { input: summer1, top: 564, left: 218 },
      { input: summer2, top: 584, left: 554 },
      { input: cornerSeal, top: cornerTop, left: cornerRight }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/summer_fresh_duo.jpg');

  console.log('=== ALL 17 IMAGES RENDERED FLAWLESSLY ===');
}

buildAllFlawless().catch(console.error);
