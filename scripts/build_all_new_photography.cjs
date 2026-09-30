const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/qasim.faridi.LT-LE-126/.gemini/antigravity/brain/d7e03256-96df-4abe-96d3-fde32b1145c1';
const LOGO_MEDALLION = 'public/brand/logo_medallion.png';

// Helper to create an engraved luxury perfume label overlay
async function createLabelOverlay({
  name,
  arabicName = '',
  volume = '50ML e 1.7 FL. OZ.',
  width = 200,
  height = 200,
  logoSize = 90,
  fontSize = 14,
  theme = 'gold' // 'gold' or 'dark'
}) {
  const logo = await sharp(LOGO_MEDALLION).resize(logoSize, logoSize).toBuffer();
  
  const textColor = theme === 'dark' ? '#f5d07a' : '#4a1111';
  const subColor = theme === 'dark' ? '#d4af37' : '#5c2a12';
  const dividerColor = theme === 'dark' ? '#c59b27' : '#7c3f15';
  
  const textSvg = Buffer.from(`
    <svg width="${width}" height="${height - logoSize - 10}" viewBox="0 0 ${width} ${height - logoSize - 10}" xmlns="http://www.w3.org/2000/svg">
      <text x="${width / 2}" y="24" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${fontSize}" letter-spacing="2.5" fill="${textColor}" text-anchor="middle" font-weight="bold">${name.toUpperCase()}</text>
      <line x1="${width * 0.18}" y1="34" x2="${width * 0.82}" y2="34" stroke="${dividerColor}" stroke-width="0.8" opacity="0.8"/>
      <text x="${width / 2}" y="48" font-family="Arial, sans-serif" font-size="${Math.max(7, fontSize * 0.52)}" letter-spacing="2.5" fill="${subColor}" text-anchor="middle" font-weight="bold">EXTRAIT DE PARFUM</text>
      <text x="${width / 2}" y="62" font-family="Arial, sans-serif" font-size="${Math.max(6.5, fontSize * 0.46)}" letter-spacing="1.5" fill="${subColor}" text-anchor="middle" font-weight="600">${volume}</text>
    </svg>
  `);
  const textPng = await sharp(textSvg).png().toBuffer();

  const logoLeft = Math.round((width - logoSize) / 2);
  const textTop = logoSize + 8;

  const combined = await sharp({
    create: {
      width: Math.round(width),
      height: Math.round(height),
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: logo, top: 4, left: logoLeft },
    { input: textPng, top: textTop, left: 0 }
  ])
  .png()
  .toBuffer();

  return combined;
}

async function buildAll() {
  console.log('--- STARTING COMPLETE LUXURY PHOTOGRAPHY ENGINE ---');

  // 1. BLACK OUD (Obsidian Flacon)
  console.log('1. Rendering Black Oud...');
  const blackBase = path.join(ARTIFACT_DIR, 'base_black_oud_1790745599164.jpg');
  // Check exact filename in artifacts
  const blackFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_black_oud'));
  const blackPath = path.join(ARTIFACT_DIR, blackFile);
  
  // Plaque center on black bottle: left 475, top 428, width 180, height 180
  const blackLabel = await createLabelOverlay({
    name: 'Black Oud',
    volume: '50ML e 1.7 FL. OZ.',
    width: 175,
    height: 180,
    logoSize: 85,
    fontSize: 13.5
  });
  await sharp(blackPath)
    .composite([{ input: blackLabel, top: 430, left: 478 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/black_oud.jpg');
  fs.copyFileSync('public/products/black_oud.jpg', 'public/products/hero-bottle.jpg');

  // 2. ROYAL AMBER (Amber Flacon)
  console.log('2. Rendering Royal Amber...');
  const amberFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('bottle_test'));
  const amberPath = path.join(ARTIFACT_DIR, amberFile);
  const amberLabel = await createLabelOverlay({
    name: 'Royal Amber',
    volume: '50ML e 1.7 FL. OZ.',
    width: 195,
    height: 195,
    logoSize: 92,
    fontSize: 14.5
  });
  await sharp(amberPath)
    .composite([{ input: amberLabel, top: 430, left: 460 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/royal_amber.jpg');

  // 3. TOBACCO VANILLE (Amber Flacon variant)
  console.log('3. Rendering Tobacco Vanille...');
  const tvLabel = await createLabelOverlay({
    name: 'Tobacco Vanille',
    volume: '50ML e 1.7 FL. OZ.',
    width: 195,
    height: 195,
    logoSize: 90,
    fontSize: 12.5
  });
  await sharp(amberPath)
    .composite([{ input: tvLabel, top: 430, left: 460 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/tobacco_vanille.jpg');

  // 4. PARADISE SAPPHIRE (Aqua Turquoise Flacon)
  console.log('4. Rendering Paradise...');
  const cyanFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_cyan_bottle'));
  const cyanPath = path.join(ARTIFACT_DIR, cyanFile);
  const paradiseLabel = await createLabelOverlay({
    name: 'Paradise',
    volume: '50ML e 1.7 FL. OZ.',
    width: 185,
    height: 165,
    logoSize: 82,
    fontSize: 14
  });
  await sharp(cyanPath)
    .composite([{ input: paradiseLabel, top: 432, left: 468 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/paradise_sapphire.jpg');

  // 5. BLUE NIGHT (Midnight Cobalt Flacon)
  console.log('5. Rendering Blue Night...');
  const navyFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_navy_bottle'));
  const navyPath = path.join(ARTIFACT_DIR, navyFile);
  const blueNightLabel = await createLabelOverlay({
    name: 'Blue Night',
    volume: '50ML e 1.7 FL. OZ.',
    width: 170,
    height: 125,
    logoSize: 62,
    fontSize: 12.5
  });
  await sharp(navyPath)
    .composite([{ input: blueNightLabel, top: 438, left: 455 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/blue_night.jpg');

  // 6. SAUVAGE (Midnight Cobalt Flacon variant)
  console.log('6. Rendering Sauvage...');
  const sauvageLabel = await createLabelOverlay({
    name: 'Sauvage',
    volume: '50ML e 1.7 FL. OZ.',
    width: 170,
    height: 125,
    logoSize: 62,
    fontSize: 13
  });
  await sharp(navyPath)
    .composite([{ input: sauvageLabel, top: 438, left: 455 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/sauvage.jpg');

  // 7. DUNHILL DESIRE (Ruby Red Flacon)
  console.log('7. Rendering Dunhill Desire...');
  const rubyFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_ruby_bottle'));
  const rubyPath = path.join(ARTIFACT_DIR, rubyFile);
  const dunhillLabel = await createLabelOverlay({
    name: 'Dunhill Desire',
    volume: '50ML e 1.7 FL. OZ.',
    width: 145,
    height: 230,
    logoSize: 85,
    fontSize: 11.2
  });
  await sharp(rubyPath)
    .composite([{ input: dunhillLabel, top: 412, left: 428 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/dunhill_desire.jpg');

  // 8. VELVET ROSE (Deep Rose Wine Flacon)
  console.log('8. Rendering Velvet Rose...');
  const roseFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_rose_bottle'));
  const rosePath = path.join(ARTIFACT_DIR, roseFile);
  const velvetLabel = await createLabelOverlay({
    name: 'Velvet Rose',
    volume: '50ML e 1.7 FL. OZ.',
    width: 180,
    height: 225,
    logoSize: 92,
    fontSize: 14
  });
  await sharp(rosePath)
    .composite([{ input: velvetLabel, top: 450, left: 452 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/velvet_rose.jpg');

  // 9. IMPERIAL MUSK (Crystal Clear Flacon)
  console.log('9. Rendering Imperial Musk...');
  const crystalFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_crystal_bottle'));
  const crystalPath = path.join(ARTIFACT_DIR, crystalFile);
  const muskLabel = await createLabelOverlay({
    name: 'Imperial Musk',
    volume: '50ML e 1.7 FL. OZ.',
    width: 190,
    height: 140,
    logoSize: 74,
    fontSize: 13
  });
  await sharp(crystalPath)
    .composite([{ input: muskLabel, top: 432, left: 388 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/imperial_musk.jpg');

  // 10. CREED AVENTUS (Crystal Clear Flacon variant)
  console.log('10. Rendering Creed Aventus...');
  const aventusLabel = await createLabelOverlay({
    name: 'Creed Aventus',
    volume: '50ML e 1.7 FL. OZ.',
    width: 190,
    height: 140,
    logoSize: 74,
    fontSize: 12.5
  });
  await sharp(crystalPath)
    .composite([{ input: aventusLabel, top: 432, left: 388 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/creed_aventus.jpg');

  // 11. BACCARAT ROUGE 540 (Luminous Amber Crystal)
  console.log('11. Rendering Baccarat Rouge 540...');
  const baccaratLabel = await createLabelOverlay({
    name: 'Baccarat Rouge 540',
    volume: '50ML e 1.7 FL. OZ.',
    width: 195,
    height: 195,
    logoSize: 90,
    fontSize: 11.5
  });
  await sharp(amberPath)
    .composite([{ input: baccaratLabel, top: 430, left: 460 }])
    .jpeg({ quality: 96 })
    .toFile('public/products/baccarat_rouge.jpg');

  // 12. HERO BANNER (1376x768 16:9)
  console.log('12. Rendering Hero Banner...');
  const heroFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_hero_banner'));
  const heroPath = path.join(ARTIFACT_DIR, heroFile);
  const heroLabel = await createLabelOverlay({
    name: 'Bin Irfan',
    volume: '100ML e 3.4 FL. OZ.',
    width: 145,
    height: 165,
    logoSize: 78,
    fontSize: 13.5
  });
  await sharp(heroPath)
    .composite([{ input: heroLabel, top: 340, left: 615 }])
    .jpeg({ quality: 96 })
    .toFile('public/banners/hero_banner.jpg');

  // 13. SIGNATURE BOX PACKAGING (1024x1024)
  console.log('13. Rendering Signature Box Packaging...');
  const boxFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_packaging_box'));
  const boxPath = path.join(ARTIFACT_DIR, boxFile);
  
  // Box Medallion & Title
  const boxLidLogo = await sharp(LOGO_MEDALLION).resize(150, 150).toBuffer();
  const boxLidSvg = Buffer.from(`
    <svg width="280" height="100" viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg">
      <text x="140" y="38" font-family="'Cinzel', Georgia, serif" font-size="22" letter-spacing="4" fill="#a87c1e" text-anchor="middle" font-weight="bold">BIN IRFAN</text>
      <text x="140" y="62" font-family="Arial, sans-serif" font-size="11" letter-spacing="4" fill="#8c6414" text-anchor="middle" font-weight="bold">FRAGRANCE</text>
      <line x1="70" y1="76" x2="210" y2="76" stroke="#c49e38" stroke-width="1" opacity="0.6"/>
      <text x="140" y="92" font-family="'Cinzel', Georgia, serif" font-size="10" letter-spacing="3" fill="#a87c1e" text-anchor="middle" font-weight="600">PARFUM EXTRAIT</text>
    </svg>
  `);
  const boxLidPng = await sharp(boxLidSvg).png().toBuffer();

  // Bottle label on box image
  const boxBottleLabel = await createLabelOverlay({
    name: 'Bin Irfan',
    volume: '100ML e 3.4 FL. OZ.',
    width: 175,
    height: 175,
    logoSize: 85,
    fontSize: 14
  });

  await sharp(boxPath)
    .composite([
      { input: boxLidLogo, top: 310, left: 195 },
      { input: boxLidPng, top: 470, left: 130 },
      { input: boxBottleLabel, top: 570, left: 660 }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/box_packaging.jpg');

  // 14. THE ROYAL TRIO BUNDLE (1024x1024)
  console.log('14. Rendering Royal Trio Bundle...');
  const trioFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_royal_trio'));
  const trioPath = path.join(ARTIFACT_DIR, trioFile);
  
  // Box lid medallion covering 'LUXE' naturally
  const trioBoxLogo = await sharp(LOGO_MEDALLION).resize(145, 145).toBuffer();
  const trioBoxTextSvg = Buffer.from(`
    <svg width="280" height="35" viewBox="0 0 280 35" xmlns="http://www.w3.org/2000/svg">
      <text x="140" y="24" font-family="'Cinzel', Georgia, serif" font-size="16" letter-spacing="4" fill="#a87c1e" text-anchor="middle" font-weight="bold">BIN IRFAN FRAGRANCE</text>
    </svg>
  `);
  const trioBoxTextPng = await sharp(trioBoxTextSvg).png().toBuffer();

  // 3 bottles: Left (Black Oud), Middle (Creed Aventus), Right (Dunhill Desire)
  const b1Label = await createLabelOverlay({ name: 'Black Oud', volume: '100ML', width: 140, height: 95, logoSize: 50, fontSize: 10 });
  const b2Label = await createLabelOverlay({ name: 'Creed Aventus', volume: '100ML', width: 145, height: 95, logoSize: 50, fontSize: 9.5 });
  const b3Label = await createLabelOverlay({ name: 'Dunhill Desire', volume: '100ML', width: 145, height: 95, logoSize: 50, fontSize: 9.5 });

  await sharp(trioPath)
    .composite([
      { input: trioBoxLogo, top: 250, left: 622 },
      { input: trioBoxTextPng, top: 395, left: 555 },
      { input: b1Label, top: 610, left: 160 },
      { input: b2Label, top: 625, left: 425 },
      { input: b3Label, top: 630, left: 700 }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/royal_trio_bundle.jpg');

  // 15. DISCOVERY EXPLORER KIT (1024x1024)
  console.log('15. Rendering Discovery Explorer Kit...');
  const kitFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_discovery_kit'));
  const kitPath = path.join(ARTIFACT_DIR, kitFile);
  
  const kitBoxLogo = await sharp(LOGO_MEDALLION).resize(150, 150).toBuffer();
  const kitTextSvg = Buffer.from(`
    <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
      <text x="200" y="35" font-family="'Cinzel', Georgia, serif" font-size="24" letter-spacing="4" fill="#a87c1e" text-anchor="middle" font-weight="bold">BIN IRFAN</text>
      <text x="200" y="60" font-family="Arial, sans-serif" font-size="11.5" letter-spacing="4" fill="#8c6414" text-anchor="middle" font-weight="bold">FRAGRANCE DISCOVERY KIT</text>
      <line x1="80" y1="75" x2="320" y2="75" stroke="#c49e38" stroke-width="1" opacity="0.6"/>
      <text x="200" y="96" font-family="'Cinzel', Georgia, serif" font-size="11" letter-spacing="3" fill="#a87c1e" text-anchor="middle" font-weight="600">5 x 10ML EXTRAIT DE PARFUM</text>
    </svg>
  `);
  const kitTextPng = await sharp(kitTextSvg).png().toBuffer();

  await sharp(kitPath)
    .composite([
      { input: kitBoxLogo, top: 220, left: 540 },
      { input: kitTextPng, top: 380, left: 415 }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/discovery_explorer_kit.jpg');

  // 16. PRESTIGE COUPLES DUO (1024x1024)
  console.log('16. Rendering Couples Duo...');
  const couplesFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_couples_duo'));
  const couplesPath = path.join(ARTIFACT_DIR, couplesFile);
  
  const duoB1 = await createLabelOverlay({ name: 'Black Oud', volume: '50ML', width: 170, height: 110, logoSize: 55, fontSize: 11 });
  const duoB2 = await createLabelOverlay({ name: 'Baccarat Rouge', volume: '50ML', width: 170, height: 110, logoSize: 55, fontSize: 10 });

  await sharp(couplesPath)
    .composite([
      { input: duoB1, top: 515, left: 275 },
      { input: duoB2, top: 515, left: 575 }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/prestige_couples_duo.jpg');

  // 17. SUMMER FRESH AQUATIC DUO (1024x1024)
  console.log('17. Rendering Summer Fresh Duo...');
  const summerFile = fs.readdirSync(ARTIFACT_DIR).find(f => f.startsWith('base_summer_duo'));
  const summerPath = path.join(ARTIFACT_DIR, summerFile);

  const sumB1 = await createLabelOverlay({ name: 'Paradise', volume: '50ML', width: 110, height: 120, logoSize: 52, fontSize: 10 });
  const sumB2 = await createLabelOverlay({ name: 'Blue Night', volume: '50ML', width: 115, height: 130, logoSize: 56, fontSize: 10 });

  // In summer duo, cover the wave logo inside the lid with the Bin Irfan logo
  const sumLidLogo = await sharp(LOGO_MEDALLION).resize(76, 76).toBuffer();

  await sharp(summerPath)
    .composite([
      { input: sumLidLogo, top: 324, left: 667 },
      { input: sumB1, top: 565, left: 218 },
      { input: sumB2, top: 585, left: 552 }
    ])
    .jpeg({ quality: 96 })
    .toFile('public/products/summer_fresh_duo.jpg');

  console.log('--- ALL PRODUCTS & BANNERS RENDERED SUCCESSFULLY ---');
}

buildAll().catch(console.error);
