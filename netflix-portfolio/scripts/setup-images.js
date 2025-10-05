const fs = require('fs');
const path = require('path');

// Create placeholder images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../content/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Placeholder image URLs from Unsplash
const imageUrls = {
  // Avatar
  'avatar.png': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  
  // Island Exterior Fabricators
  'ief-poster.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=400&fit=crop',
  'ief-backdrop.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop',
  'ief-logo.png': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=200&fit=crop',
  'ewa-thumb.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=225&fit=crop',
  'heat-thumb.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=225&fit=crop',
  'vendor-thumb.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=225&fit=crop',
  
  // Tech Consulting
  'tech-poster.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop',
  'tech-backdrop.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop',
  'tech-logo.png': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop',
  'migration-thumb.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
  'ai-thumb.jpg': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop',
  
  // Startup
  'startup-poster.jpg': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=400&fit=crop',
  'startup-backdrop.jpg': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop',
  'startup-logo.png': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop',
  'mvp-thumb.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
  'fundraising-thumb.jpg': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=225&fit=crop',
  'growth-thumb.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
};

console.log('Setting up placeholder images...');
console.log('Note: In production, you should download these images and store them locally.');
console.log('For now, the app will use the Unsplash URLs directly.');

// Create a simple HTML file to display the image URLs for manual download
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Portfolio Images</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .image-item { text-align: center; }
        .image-item img { max-width: 100%; height: auto; border: 1px solid #ddd; }
        .image-item p { margin: 10px 0; font-size: 12px; }
    </style>
</head>
<body>
    <h1>Portfolio Images</h1>
    <p>Right-click and save these images to the <code>content/images/</code> directory:</p>
    <div class="image-grid">
        ${Object.entries(imageUrls).map(([filename, url]) => `
            <div class="image-item">
                <img src="${url}" alt="${filename}">
                <p><strong>${filename}</strong><br>
                <a href="${url}" target="_blank">Download</a></p>
            </div>
        `).join('')}
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(imagesDir, 'image-preview.html'), htmlContent);
console.log(`Created image preview at: ${path.join(imagesDir, 'image-preview.html')}`);
console.log('Open this file in a browser to see all the images and download them manually.');
