const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dz9dmfrvr',
  api_key: '919541363747224',
  api_secret: 'NKU34iCbMSkwZ9M4f4OY6laU5Sg',
});

// Upload function
async function uploadFile(filePath, publicId) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: 'landing',
      resource_type: 'auto',
      quality: 'auto:low',
      fetch_format: 'auto',
      transformation: [
        { quality: 'auto:low' },
        { fetch_format: 'auto' }
      ]
    });
    console.log(`✅ Uploaded: ${filePath} -> ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`❌ Failed to upload ${filePath}:`, error.message);
    return null;
  }
}

// Main upload function
async function uploadAllFiles() {
  const landingDir = path.join(__dirname, 'public', 'landing');
  const files = fs.readdirSync(landingDir);
  
  console.log('🚀 Starting upload to Cloudinary...');
  console.log(`📁 Found ${files.length} files in ${landingDir}`);
  
  for (const file of files) {
    const filePath = path.join(landingDir, file);
    const fileName = path.parse(file).name;
    
    // Skip if not a file
    if (!fs.statSync(filePath).isFile()) continue;
    
    await uploadFile(filePath, fileName);
  }
  
  console.log('🎉 Upload complete!');
}

// Run the upload
uploadAllFiles().catch(console.error);
