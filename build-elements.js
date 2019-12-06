
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/element/runtime-es2015.js',
    './dist/element/polyfills-es2015.js',
    './dist/element/scripts.js',
    './dist/element/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/test-element.js');
})();
