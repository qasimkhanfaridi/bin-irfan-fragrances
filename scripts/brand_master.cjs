const sharp = require('sharp');
const fs = require('fs');

async function brandMaster() {
  const logoMedallionPath = 'public/brand/logo_medallion.png';

  // 1. paradise_sapphire.jpg (1024x1024) - already perfect
  console.log('Processing paradise_sapphire.jpg...');
  const medParadise = await sharp(logoMedallionPath).resize(195, 195).toBuffer();
  await sharp('public/products_orig/paradise_sapphire.jpg')
    .composite([
      { input: medParadise, top: 445, left: 442 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/products/paradise_sapphire.jpg');

  // 2. box_packaging.jpg (1024x1024)
  // Box: "BI" is at center x=674, y=418 -> size 145x145, top=345, left=602
  // Bottle: "BI" is at center x=338, y=605 -> size 106x106, top=552, left=285
  console.log('Processing box_packaging.jpg...');
  const medBox = await sharp(logoMedallionPath).resize(145, 145).toBuffer();
  const medBottle = await sharp(logoMedallionPath).resize(106, 106).toBuffer();
  await sharp('public/products_orig/box_packaging.jpg')
    .composite([
      { input: medBox, top: 345, left: 602 },
      { input: medBottle, top: 552, left: 285 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/products/box_packaging.jpg');

  // 3. royal_trio_bundle.jpg (1024x1024)
  // Box "BI" center: x=662, y=268 -> size 125x125, top=206, left=600
  console.log('Processing royal_trio_bundle.jpg...');
  const medTrioLid = await sharp(logoMedallionPath).resize(125, 125).toBuffer();
  const medTrioBottle1 = await sharp(logoMedallionPath).resize(58, 58).toBuffer();
  const medTrioBottle2 = await sharp(logoMedallionPath).resize(58, 58).toBuffer();
  const medTrioBottle3 = await sharp(logoMedallionPath).resize(58, 58).toBuffer();
  await sharp('public/products_orig/royal_trio_bundle.jpg')
    .composite([
      { input: medTrioLid, top: 206, left: 586 },
      { input: medTrioBottle1, top: 575, left: 205 },
      { input: medTrioBottle2, top: 575, left: 483 },
      { input: medTrioBottle3, top: 575, left: 761 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/products/royal_trio_bundle.jpg');

  // 4. discovery_explorer_kit.jpg (1024x1024)
  console.log('Processing discovery_explorer_kit.jpg...');
  const medKit = await sharp(logoMedallionPath).resize(125, 125).toBuffer();
  await sharp('public/products_orig/discovery_explorer_kit.jpg')
    .composite([
      { input: medKit, top: 130, left: 285 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/products/discovery_explorer_kit.jpg');

  // 5. hero_banner.jpg (1376x768)
  // Bottle center x=690, "BI" mark at y=364 -> size 74x74, top=326, left=653
  console.log('Processing hero_banner.jpg...');
  const medHero = await sharp(logoMedallionPath).resize(74, 74).toBuffer();
  await sharp('public/banners_orig/hero_banner.jpg')
    .composite([
      { input: medHero, top: 326, left: 653 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/banners/hero_banner.jpg');

  // 6. lifestyle_spritz.jpg (1024x1024)
  console.log('Processing lifestyle_spritz.jpg...');
  const medSpritz = await sharp(logoMedallionPath).resize(105, 105).toBuffer();
  await sharp('public/products_orig/lifestyle_spritz.jpg')
    .composite([
      { input: medSpritz, top: 470, left: 410 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/products/lifestyle_spritz.jpg');

  // 7. royal_amber.jpg (1024x1024)
  console.log('Processing royal_amber.jpg...');
  const medAmber1 = await sharp(logoMedallionPath).resize(140, 140).toBuffer();
  const medAmber2 = await sharp(logoMedallionPath).resize(140, 140).toBuffer();
  await sharp('public/products_orig/royal_amber.jpg')
    .composite([
      { input: medAmber1, top: 490, left: 250 },
      { input: medAmber2, top: 490, left: 620 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/products/royal_amber.jpg');

  // 8. blue_night.jpg (1024x1024)
  console.log('Processing blue_night.jpg...');
  const medBlue = await sharp(logoMedallionPath).resize(205, 205).toBuffer();
  await sharp('public/products_orig/blue_night.jpg')
    .composite([
      { input: medBlue, top: 418, left: 270 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/products/blue_night.jpg');

  // 9. black_oud.jpg (1024x1024) - luxury obsidian & gold plaque
  console.log('Processing black_oud.jpg & related flacon images...');
  const plaqueSvg = Buffer.from(`
    <svg width="324" height="392" viewBox="0 0 324 392" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffd97d" />
          <stop offset="25%" stop-color="#d4af37" />
          <stop offset="50%" stop-color="#aa7c11" />
          <stop offset="75%" stop-color="#eec567" />
          <stop offset="100%" stop-color="#996515" />
        </linearGradient>
        <linearGradient id="goldInner" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#aa7c11" />
          <stop offset="50%" stop-color="#ffd97d" />
          <stop offset="100%" stop-color="#996515" />
        </linearGradient>
        <radialGradient id="blackGlass" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#181516" />
          <stop offset="60%" stop-color="#0c0a0b" />
          <stop offset="100%" stop-color="#050404" />
        </radialGradient>
        <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.7"/>
        </filter>
      </defs>
      <rect x="6" y="6" width="312" height="380" rx="8" fill="url(#blackGlass)" stroke="url(#goldOuter)" stroke-width="2.5" filter="url(#subtleShadow)" />
      <rect x="14" y="14" width="296" height="364" rx="4" fill="none" stroke="url(#goldInner)" stroke-width="1" stroke-opacity="0.85" />
      <line x1="14" y1="26" x2="26" y2="14" stroke="url(#goldInner)" stroke-width="1.5" />
      <line x1="310" y1="26" x2="298" y2="14" stroke="url(#goldInner)" stroke-width="1.5" />
      <line x1="14" y1="366" x2="26" y2="378" stroke="url(#goldInner)" stroke-width="1.5" />
      <line x1="310" y1="366" x2="298" y2="378" stroke="url(#goldInner)" stroke-width="1.5" />
      <text x="162" y="338" font-family="'Cinzel', 'Trajan Pro', Georgia, serif" font-size="13" letter-spacing="4" fill="#ffd97d" text-anchor="middle" font-weight="600">PARFUM EXTRAIT</text>
      <text x="162" y="358" font-family="'Cinzel', 'Trajan Pro', Georgia, serif" font-size="9" letter-spacing="2.5" fill="#aa8540" text-anchor="middle" font-weight="400">50ML e 1.7 FL. OZ.</text>
    </svg>
  `);
  const medallionOud = await sharp(logoMedallionPath).resize(225, 225).toBuffer();
  const plaqueOud = await sharp(plaqueSvg).png().toBuffer();
  const combinedLabelOud = await sharp(plaqueOud)
    .composite([{ input: medallionOud, top: 50, left: 49 }])
    .toBuffer();

  const blackOudBuffer = await sharp('public/products_orig/black_oud.jpg')
    .composite([
      { input: combinedLabelOud, top: 366, left: 350 }
    ])
    .jpeg({ quality: 96 })
    .toBuffer();

  fs.writeFileSync('public/products/black_oud.jpg', blackOudBuffer);
  fs.writeFileSync('public/products/hero-bottle.jpg', blackOudBuffer);
  fs.writeFileSync('public/products/luxury_perfume_bottle_1789845205480.jpg', blackOudBuffer);

  // 10. story-mist.jpg & oud_al_sultan.jpg if present
  if (fs.existsSync('public/products_orig/story-mist.jpg')) {
    console.log('Processing story-mist.jpg...');
    const medMist = await sharp(logoMedallionPath).resize(130, 130).toBuffer();
    await sharp('public/products_orig/story-mist.jpg')
      .composite([
        { input: medMist, top: 530, left: 435 }
      ])
      .jpeg({ quality: 95 })
      .toFile('public/products/story-mist.jpg');
  }

  if (fs.existsSync('public/products_orig/oud_al_sultan.jpg')) {
    console.log('Processing oud_al_sultan.jpg...');
    const medSultan = await sharp(logoMedallionPath).resize(130, 130).toBuffer();
    await sharp('public/products_orig/oud_al_sultan.jpg')
      .composite([
        { input: medSultan, top: 530, left: 435 }
      ])
      .jpeg({ quality: 95 })
      .toFile('public/products/oud_al_sultan.jpg');
  }

  console.log('All images branded with 100% perfection!');
}

brandMaster().catch(console.error);
