#!/usr/bin/env node
/* build-check.js — validates all required files are present and JS is parseable */
const fs = require('fs');
const path = require('path');

const required = [
  'index.html',
  'css/styles.css',
  'js/app.js',
  'js/scenarios.js',
  'images/favicon.svg',
  'netlify.toml',
];

let ok = true;

required.forEach(f => {
  if (!fs.existsSync(path.join(__dirname, f))) {
    console.error(`MISSING: ${f}`);
    ok = false;
  } else {
    console.log(`OK: ${f}`);
  }
});

// Syntax check JS files
['js/app.js', 'js/scenarios.js'].forEach(f => {
  try {
    const src = fs.readFileSync(path.join(__dirname, f), 'utf8');
    new Function(src);
    console.log(`SYNTAX OK: ${f}`);
  } catch (e) {
    console.error(`SYNTAX ERROR in ${f}: ${e.message}`);
    ok = false;
  }
});

if (!ok) {
  console.error('\nBuild check FAILED.');
  process.exit(1);
}
console.log('\nBuild check PASSED. Site is ready to deploy.');
