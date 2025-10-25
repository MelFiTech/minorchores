const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dz9dmfrvr',
  api_key: '919541363747224',
  api_secret: 'NKU34iCbMSkwZ9M4f4OY6laU5Sg',
});

// Compression function
async function compressImage(inputPath, outputPath, maxWidth = 1920, quality = 80) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    
    await sharp(inputPath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality })
      .toFile(outputPath);
    
    const compressedStats = fs.statSync(outputPath);
    const compressedSize = (compressedStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - compressedStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`📦 Compressed: ${path.basename(inputPath)} ${originalSize}MB → ${compressedSize}MB (${reduction}% reduction)`);
    return true;
  } catch (error) {
    console.error(`❌ Compression failed for ${inputPath}:`, error.message);
    return false;
  }
}

// Upload function
async function uploadFile(filePath, publicId) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: 'landing',
      resource_type: 'auto'
    });
    console.log(`✅ Uploaded: ${path.basename(filePath)} -> ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`❌ Failed to upload ${filePath}:`, error.message);
    return null;
  }
}

// Main function
async function compressAndUpload() {
  const landingDir = path.join(__dirname, 'public', 'landing');
  const tempDir = path.join(__dirname, 'temp');
  
  // Create temp directory
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }
  
  console.log('🚀 Starting compression and upload to Cloudinary...');
  
  const files = fs.readdirSync(landingDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });
  
  console.log(`📁 Found ${imageFiles.length} image files`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(landingDir, file);
    const fileName = path.parse(file).name;
    const tempPath = path.join(tempDir, `${fileName}_compressed.jpg`);
    
    console.log(`\n🔄 Processing: ${file}`);
    
    // Compress the image
    const compressed = await compressImage(inputPath, tempPath, 1920, 75);
    
    if (compressed) {
      // Upload compressed image
      await uploadFile(tempPath, fileName);
      
      // Clean up temp file
      fs.unlinkSync(tempPath);
    }
  }
  
  // Clean up temp directory
  fs.rmdirSync(tempDir);
  
  console.log('\n🎉 Compression and upload complete!');
}

// Run the script
compressAndUpload().catch(console.error);
