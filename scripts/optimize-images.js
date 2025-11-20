// Image optimization script using sharp
// Usage: node scripts/optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const publicDir = path.join(__dirname, '../public');

// Recursively get all .jpg and .png files in a directory
function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (/(\.jpe?g|\.png)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

// Set default resize options
const defaultOptions = {
  jpg: { width: 1200, height: 800, quality: 80 },
  png: { width: 800, height: 800, quality: 80 },
};

(async () => {
  const images = getAllImages(publicDir);
  for (const imgPath of images) {
    const ext = path.extname(imgPath).toLowerCase();
    const isPng = ext === '.png';
    const options = isPng ? defaultOptions.png : defaultOptions.jpg;
    const outputOptions =
      isPng
        ? { compressionLevel: 9, quality: options.quality }
        : { quality: options.quality };
    try {
      await sharp(imgPath)
        .resize(options.width, options.height, { fit: 'inside' })
        [isPng ? 'png' : 'jpeg'](outputOptions)
        .toFile(imgPath + '.optimized');
      fs.renameSync(imgPath + '.optimized', imgPath);
      console.log(`Optimized: ${path.relative(publicDir, imgPath)}`);
    } catch (err) {
      console.error(`Error optimizing ${imgPath}:`, err);
    }
  }
})();
