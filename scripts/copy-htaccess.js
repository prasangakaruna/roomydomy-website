const fs = require('fs');
const path = require('path');

// Copy .htaccess to out directory after build
const sourceFile = path.join(__dirname, '..', '.htaccess');
const destFile = path.join(__dirname, '..', 'out', '.htaccess');

try {
  // Check if .htaccess exists
  if (fs.existsSync(sourceFile)) {
    // Check if out directory exists
    const outDir = path.join(__dirname, '..', 'out');
    if (fs.existsSync(outDir)) {
      // Copy .htaccess to out directory
      fs.copyFileSync(sourceFile, destFile);
      console.log('✓ .htaccess copied to out directory');
    } else {
      console.log('⚠ out directory not found. Run "npm run build" first.');
    }
  } else {
    console.log('⚠ .htaccess file not found in project root.');
  }
} catch (error) {
  console.error('Error copying .htaccess:', error.message);
  process.exit(1);
}
