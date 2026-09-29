const sharp = require('sharp');

async function main() {
  const width = 1024;
  const height = 1024;
  const cx = 512;
  const cy = 512;
  const r = 445; // exact radius matching the outer gold glow circle

  const circleSvg = Buffer.from(
    `<svg width="${width}" height="${height}"><circle cx="${cx}" cy="${cy}" r="${r}" fill="white"/></svg>`
  );

  await sharp('public/brand/logo.jpg')
    .composite([{
      input: circleSvg,
      blend: 'dest-in'
    }])
    .png()
    .toFile('public/brand/logo_medallion.png');

  console.log('Successfully created public/brand/logo_medallion.png');
}

main().catch(console.error);
