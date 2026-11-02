const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = 'C:/Users/qasim.faridi.LT-LE-126/.gemini/antigravity/brain/d7e03256-96df-4abe-96d3-fde32b1145c1';
const cleanMasterPath = path.join(ARTIFACT_DIR, 'authentic_clean_flacon_master.jpg');
const originalSingleMaster = path.join(ARTIFACT_DIR, 'black_noir_AUTHENTIC_PHYSICAL_MASTER_8K.jpg');
const duoMaster = path.join(ARTIFACT_DIR, 'duo_AUTHENTIC_PHYSICAL_MASTER_8K.jpg');

const width = 1400;
const height = 1400;
const centerX = 750;

// Configuration for each fragrance: exact name typography + bespoke luxury ambient background palette
const PRODUCTS_CONFIG = [
  {
    filename: 'black_oud.jpg',
    line1: 'BLACK',
    line2: 'OUD',
    fontSize: 36,
    spacing: 7.0,
    // Deep Charcoal Noir & Molten Amber Gold
    topColor: '#B45309',
    bottomColor: '#451A03',
    outerColor: '#170B04',
    multiplyOpacity: 0.35,
    vignetteOpacity: 0.65
  },
  {
    filename: 'creed_aventus.jpg',
    line1: 'CREED',
    line2: 'AVENTUS',
    fontSize: 35,
    spacing: 7.0,
    // Regal Royal Navy & Slate Blue
    topColor: '#1E3A8A',
    bottomColor: '#172554',
    outerColor: '#050C1A',
    multiplyOpacity: 0.45,
    vignetteOpacity: 0.75
  },
  {
    filename: 'dunhill_desire.jpg',
    line1: 'DUNHILL',
    line2: 'DESIRE',
    fontSize: 35,
    spacing: 7.0,
    // Deep Passionate Ruby Red & Warm Amber
    topColor: '#7A0C1E',
    bottomColor: '#4A0512',
    outerColor: '#1A0206',
    multiplyOpacity: 0.48,
    vignetteOpacity: 0.75
  },
  {
    filename: 'baccarat_rouge.jpg',
    line1: 'BACCARAT',
    line2: 'ROUGE 540',
    fontSize: 32,
    spacing: 6.0,
    // Luminous Amber-Gold & Radiant Scarlet
    topColor: '#991B1B',
    bottomColor: '#78350F',
    outerColor: '#1F0606',
    multiplyOpacity: 0.42,
    vignetteOpacity: 0.70
  },
  {
    filename: 'sauvage.jpg',
    line1: 'SAUVAGE',
    line2: '',
    fontSize: 38,
    spacing: 8.5,
    // Deep Twilight Midnight Indigo
    topColor: '#1E293B',
    bottomColor: '#0F172A',
    outerColor: '#020617',
    multiplyOpacity: 0.50,
    vignetteOpacity: 0.80
  },
  {
    filename: 'tobacco_vanille.jpg',
    line1: 'TOBACCO',
    line2: 'VANILLE',
    fontSize: 33,
    spacing: 6.5,
    // Warm Cognac Amber & Dark Spiced Mahogany
    topColor: '#854D0E',
    bottomColor: '#3F1D0B',
    outerColor: '#140803',
    multiplyOpacity: 0.40,
    vignetteOpacity: 0.70
  },
  {
    filename: 'paradise_sapphire.jpg',
    line1: 'PARADISE',
    line2: '',
    fontSize: 38,
    spacing: 8.5,
    // Radiant Aquamarine Turquoise & Sky Breeze
    topColor: '#0284C7',
    bottomColor: '#0369A1',
    outerColor: '#082F49',
    multiplyOpacity: 0.45,
    vignetteOpacity: 0.70
  },
  {
    filename: 'blue_night.jpg',
    line1: 'BLUE',
    line2: 'NIGHT',
    fontSize: 36,
    spacing: 7.5,
    // Sleek Electric Midnight Sapphire
    topColor: '#2563EB',
    bottomColor: '#1D4ED8',
    outerColor: '#0B132B',
    multiplyOpacity: 0.45,
    vignetteOpacity: 0.75
  },
  {
    filename: 'imperial_musk.jpg',
    line1: 'IMPERIAL',
    line2: 'MUSK',
    fontSize: 34,
    spacing: 7.0,
    // Pure Platinum Pearl White & Silver Grey
    topColor: '#64748B',
    bottomColor: '#334155',
    outerColor: '#0F172A',
    multiplyOpacity: 0.38,
    vignetteOpacity: 0.65
  },
  {
    filename: 'velvet_rose.jpg',
    line1: 'VELVET',
    line2: 'ROSE',
    fontSize: 35,
    spacing: 7.0,
    // Rich Nocturnal Burgundy & Damask Crimson
    topColor: '#831843',
    bottomColor: '#500724',
    outerColor: '#1C020B',
    multiplyOpacity: 0.46,
    vignetteOpacity: 0.75
  }
];

async function generateCatalog() {
  console.log('--- Generating Authentic Flacons with Custom Product Names & Distinct Backgrounds ---');

  for (const item of PRODUCTS_CONFIG) {
    const y1 = item.line2 ? 968 : 988;
    const y2 = 1014;

    // 1. Factory Authentic Metallic Gold Lettering matching the Circular Medallion
    const svgTypo = Buffer.from(`
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="realGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F7E2AC" />
            <stop offset="35%" stop-color="#D9B76A" />
            <stop offset="70%" stop-color="#E8CA83" />
            <stop offset="100%" stop-color="#C2984D" />
          </linearGradient>
          <filter id="bottleShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="1.0" flood-color="#080604" flood-opacity="0.95" />
          </filter>
        </defs>
        <g filter="url(#bottleShadow)">
          <text x="${centerX}" y="${y1}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${item.fontSize}" letter-spacing="${item.spacing}" fill="url(#realGold)" text-anchor="middle" font-weight="bold">${item.line1}</text>
          ${item.line2 ? `<text x="${centerX}" y="${y2}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${item.fontSize}" letter-spacing="${item.spacing}" fill="url(#realGold)" text-anchor="middle" font-weight="bold">${item.line2}</text>` : ''}
        </g>
      </svg>
    `);

    const typoPng = await sharp(svgTypo).resize(width, height).png().toBuffer();

    // Composite name onto clean authentic flacon
    const flaconWithText = await sharp(cleanMasterPath)
      .composite([{ input: typoPng, top: 0, left: 0 }])
      .toBuffer();

    // 2. Bespoke Luxury Background Ambient Overlay
    // Perfectly protects the center bottle, crystal cap, and gold medallion while smoothly tinting the background
    const bgOverlay = Buffer.from(`
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="centerProtection" cx="54%" cy="50%" r="42%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0" />
            <stop offset="60%" stop-color="#000000" stop-opacity="0" />
            <stop offset="85%" stop-color="${item.outerColor}" stop-opacity="${item.vignetteOpacity * 0.7}" />
            <stop offset="100%" stop-color="${item.outerColor}" stop-opacity="${item.vignetteOpacity}" />
          </radialGradient>
          <linearGradient id="ambientTint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${item.topColor}" stop-opacity="${item.multiplyOpacity}" />
            <stop offset="50%" stop-color="#000000" stop-opacity="0.15" />
            <stop offset="100%" stop-color="${item.bottomColor}" stop-opacity="${item.multiplyOpacity * 1.1}" />
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="url(#ambientTint)" style="mix-blend-mode: multiply;" />
        <rect width="${width}" height="${height}" fill="url(#centerProtection)" />
      </svg>
    `);

    const bgOverlayPng = await sharp(bgOverlay).resize(width, height).png().toBuffer();
    const finalComp = await sharp(flaconWithText)
      .composite([{ input: bgOverlayPng, top: 0, left: 0 }])
      .toBuffer();

    const outPath = path.join('public/products', item.filename);
    await sharp(finalComp)
      .resize(1024, 1024, { fit: 'cover' })
      .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
      .toFile(outPath);

    console.log(`[Created] ${outPath} (${item.line1} ${item.line2})`);
  }

  // hero-bottle.jpg
  await sharp(path.join('public/products', 'black_oud.jpg'))
    .toFile('public/products/hero-bottle.jpg');
  console.log('[Created] public/products/hero-bottle.jpg');

  // Duos
  await sharp(duoMaster)
    .resize(1024, 1024, { fit: 'cover' })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile('public/products/prestige_couples_duo.jpg');
  console.log('[Created] public/products/prestige_couples_duo.jpg');

  await sharp(duoMaster)
    .resize(1024, 1024, { fit: 'cover' })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile('public/products/summer_fresh_duo.jpg');
  console.log('[Created] public/products/summer_fresh_duo.jpg');

  await sharp(duoMaster)
    .resize(1024, 1024, { fit: 'cover' })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile('public/banners/hero_banner.jpg');
  console.log('[Created] public/banners/hero_banner.jpg');

  console.log('--- All images generated successfully! ---');
}

generateCatalog().catch(console.error);
