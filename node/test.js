const images = require('images');
// 顺时针旋转90度
images('./sources/foo3.png').rotate(90).save('./compose-rotate-90.png', {
  quality: 100, //保存图片到文件,图片质量为100
});
