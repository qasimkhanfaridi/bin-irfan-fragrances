const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = 'C:/Users/qasim.faridi.LT-LE-126/.gemini/antigravity/brain/d7e03256-96df-4abe-96d3-fde32b1145c1';
const cleanMasterPath = path.join(ARTIFACT_DIR, 'authentic_clean_flacon_master.jpg');
const originalSingleMasterPath = path.join(ARTIFACT_DIR, 'black_noir_AUTHENTIC_PHYSICAL_MASTER_8K.jpg');
const duoMasterPath = path.join(ARTIFACT_DIR, 'duo_AUTHENTIC_PHYSICAL_MASTER_8K.jpg');

// Fragrance label configurations
const FRAGRANCES = [
  {
    filename: 'black_oud.jpg',
    line1: 'BLACK',
    line2: 'OUD',
    useOriginalNoir: true // Use the original authentic physical shot directly
  },
  {
    filename: 'creed_aventus.jpg',
    line1: 'CREED',
    line2: 'AVENTUS',
    fontSize: 34,
    spacing: 6.5
  },
  {
    filename: 'dunhill_desire.jpg',
    line1: 'DUNHILL',
    line2: 'DESIRE',
    fontSize: 34,
    spacing: 6.5
  },
  {
    filename: 'baccarat_rouge.jpg',
    line1: 'BACCARAT',
    line2: 'ROUGE',
    fontSize: 32,
    spacing: 6.0
  },
  {
    filename: 'sauvage.jpg',
    line1: 'SAUVAGE',
    line2: '',
    fontSize: 36,
    spacing: 7.5
  },
  {
    filename: 'tobacco_vanille.jpg',
    line1: 'TOBACCO',
    line2: 'VANILLE',
    fontSize: 32,
    spacing: 6.0
  },
  {
    filename: 'blue_night.jpg',
    line1: 'BLUE',
    line2: 'NIGHT',
    fontSize: 36,
    spacing: 7.0
  },
  {
    filename: 'imperial_musk.jpg',
    line1: 'IMPERIAL',
    line2: 'MUSK',
    fontSize: 33,
    spacing: 6.5
  },
  {
    filename: 'velvet_rose.jpg',
    line1: 'VELVET',
    line2: 'ROSE',
    fontSize: 35,
    spacing: 7.0
  },
  {
    filename: 'paradise_sapphire.jpg',
    line1: 'PARADISE',
    line2: '',
    fontSize: 36,
    spacing: 7.5
  }
];

async function generateFlaconImages() {
  console.log('--- Generating Authentic Physical Flacon Imagery Suite ---');

  const width = 1400;
  const height = 1400;
  const centerX = 750;

  for (const item of FRAGRANCES) {
    const outPath = path.join('public/products', item.filename);

    if (item.useOriginalNoir) {
      // The authentic physical bottle from the camera
      await sharp(originalSingleMasterPath)
        .resize(1024, 1024, { fit: 'cover' })
        .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
        .toFile(outPath);
      console.log(`[Created] ${item.filename} (Original Master)`);
      continue;
    }

    const fontSize = item.fontSize || 34;
    const spacing = item.spacing || 6.5;
    const y1 = item.line2 ? 965 : 985;
    const y2 = 1010;

    const svg = Buffer.from(`
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F2D89C" />
            <stop offset="35%" stop-color="#D9B76A" />
            <stop offset="70%" stop-color="#E8CA83" />
            <stop offset="100%" stop-color="#C2984D" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="1.2" flood-color="#080604" flood-opacity="0.9" />
          </filter>
        </defs>
        <g filter="url(#softShadow)">
          <text x="${centerX}" y="${y1}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${fontSize}" letter-spacing="${spacing}" fill="url(#goldFoil)" text-anchor="middle" font-weight="bold">${item.line1.toUpperCase()}</text>
          ${item.line2 ? `<text x="${centerX}" y="${y2}" font-family="'Cinzel', 'Times New Roman', Georgia, serif" font-size="${fontSize}" letter-spacing="${spacing}" fill="url(#goldFoil)" text-anchor="middle" font-weight="bold">${item.line2.toUpperCase()}</text>` : ''}
        </g>
      </svg>
    `);

    const overlayPng = await sharp(svg)
      .resize(width, height)
      .png()
      .toBuffer();

    const compositedBuf = await sharp(cleanMasterPath)
      .composite([{ input: overlayPng, top: 0, left: 0 }])
      .toBuffer();

    await sharp(compositedBuf)
      .resize(1024, 1024, { fit: 'cover' })
      .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
      .toFile(outPath);

    console.log(`[Created] ${item.filename} with typography: ${item.line1} ${item.line2}`);
  }

  // 11. hero-bottle.jpg
  await sharp(originalSingleMasterPath)
    .resize(1024, 1024, { fit: 'cover' })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile('public/products/hero-bottle.jpg');
  console.log('[Created] hero-bottle.jpg');

  // 12. prestige_couples_duo.jpg (Authentic Black Noir & Royal Oud Duo)
  await sharp(duoMasterPath)
    .resize(1024, 1024, { fit: 'cover' })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile('public/products/prestige_couples_duo.jpg');
  console.log('[Created] prestige_couples_duo.jpg');

  // 13. summer_fresh_duo.jpg
  await sharp(duoMasterPath)
    .resize(1024, 1024, { fit: 'cover' })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile('public/products/summer_fresh_duo.jpg');
  console.log('[Created] summer_fresh_duo.jpg');

  // 14. hero_banner.jpg (1024x1024 for 1:1 aspect-square Hero card)
  await sharp(duoMasterPath)
    .resize(1024, 1024, { fit: 'cover' })
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toFile('public/banners/hero_banner.jpg');
  console.log('[Created] banners/hero_banner.jpg');

  console.log('--- All authentic physical flacon imagery generated successfully! ---');
}

generateFlaconImages().catch(err => {
  console.error(err);
  process.exit(1);
});
