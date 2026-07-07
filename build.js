const fs = require('fs-extra');
const path = require('path');

const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');

async function build() {
  await fs.ensureDir(distDir);
  await fs.copy(path.join(srcDir, 'index.template.html'), path.join(distDir, 'index.html'));
  await fs.copy(path.join(srcDir, 'styles.css'), path.join(distDir, 'styles.css'));
  await fs.copy(path.join(srcDir, 'script.js'), path.join(distDir, 'script.js'));
  console.log('Build complete. Output written to dist/index.html');
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
