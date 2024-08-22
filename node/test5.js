const potrace = require('potrace');
const svg2img = require('svg2img');
const fs = require('fs');
const path = require('path');
const images = require('images');
const parseSVG = require('svg-parser')

potrace.Potrace.prototype.getSVG = function() {
  const width = this._params.width || this._luminanceData.width;
  const height = this._params.height || this._luminanceData.height;
  console.log('width', width, 'height', height)
  const scale = {
    x: this._params.width ? this._params.width / this._luminanceData.width : 1,
    y: this._params.height ? this._params.height / this._luminanceData.height : 1,
  };
  const svgWidth = '100%';
  const svgHeight = '100%';
  return '<svg xmlns="http://www.w3.org/2000/svg" ' +
    'width="' + svgWidth + '" ' +
    'height="' + svgHeight + '" ' +
    'viewBox="0 0 ' + width + ' ' + height + '" ' +
    'version="1.1">\n'+
    (this._params.background !== 'transparent'
      ? '\t<rect x="0" y="0" width="100%" height="100%" fill="' + this._params.background + '" />\n'
      : '') +
    '\t' + this.getPathTag(this._params.color, scale) + '\n' +
    '</svg>';
}
const svgPath = path.resolve(__dirname, 'test.svg');
const svgString = fs.readFileSync(svgPath, 'utf-8');

const outPutImagePath = path.resolve(__dirname, 'sources/foo3.png');
const rotatedImagePath = path.resolve(__dirname, 'compose-rotate-90.png');
svg2img(svgPath, {
  resvg: {
    fitTo: {
      mode: 'original'
    }
  }
}, function(error, buffer) {
  if (error) {
    console.log('error', error);
  }
  // fs.writeFileSync('./sources/foo3.png', buffer);
  fs.writeFile(outPutImagePath, buffer, (err) => {

    if (err) {
      console.log('error', err);
    }
    // 顺时针旋转90度
    images(outPutImagePath).rotate(90).save(rotatedImagePath, {
      quality: 100, //保存图片到文件,图片质量为100
    });
    potrace.trace(rotatedImagePath, function(err, svg) {
      if (err) throw err;
      fs.writeFileSync('./output.svg', svg);
    });
  })
});


