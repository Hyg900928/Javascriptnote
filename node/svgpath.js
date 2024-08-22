const svgpath = require('svgpath');
const path = require('path');
const fs = require('fs');
const svgPath = path.resolve(__dirname, 'test.svg');
const transformed = svgpath(svgPath)
  .scale(0.5)
  .translate(100,200)
  .rel()
  .round(1)
  .toString();
fs.writeFileSync('testsvgpath.svg', transformed)
console.log('transformered', transformed)
