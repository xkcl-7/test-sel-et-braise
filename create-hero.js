const sharp = require('sharp');

async function createMissingHeroImage() {
  try {
    await sharp('public/images/_originals/hero-woodfire.jpg')
      .resize(2400, 1600, { 
        fit: 'cover', 
        position: 'center' 
      })
      .jpeg({ 
        quality: 78, 
        progressive: true 
      })
      .toFile('public/images/hero/hero-woodfire-2400x1600.jpg');
    
    console.log('✅ Created hero-woodfire-2400x1600.jpg');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

createMissingHeroImage();
