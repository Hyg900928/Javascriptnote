
// 默认的back的白边参数
const defaultPaddingsForBack = {
  top: 50,
  left: 50,
  right: 0,
  bottom: 50
};

// 默认的spain的白边参数
const defaultPaddingsForSpain = {
  top: 50,
  left: 0,
  right: 0,
  bottom: 50
};

// 默认的cover的白边参数
const defaultPaddingsForCover = {
  top: 50,
  left: 0,
  right: 50,
  bottom: 50
};

/**
 * 对参数的合法性检测.
 */
function checkParams(imgObj) {
  let isPassed = true;
  const verify = function(obj) {
    let valid = true;

    if (
      !obj ||
      !obj.size ||
      !obj.size.width ||
      !obj.size.height ||
      !obj.images ||
      obj.images.length !== 9
    ) {
      valid = false;
    }

    return valid;
  };

  if (!verify(imgObj)) {
    isPassed = false;
  }

  return isPassed;
}

/**
 * 加载图片
 * @param  {string} url 待加载图片的地址
 * @param  {Function} cb 加载完成后的回调
 */
function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    if (!url) {
      reject();
    }

    const img = new Image();
    img.onload = function() {
      resolve(img);
    };

    img.onerror = function() {
      reject(img);
    };

    img.src = url;
  });

  return promise;
}

/**
 * 新建一个指定宽高的canvas容器
 * @param  {number} width 待创建的canvas的宽
 * @param  {number} height 待创建的canvas的高
 */
function createCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  return canvas;
}

/**
 * 绘制图片到canvas
 * @param  {blob} img    待绘制的图片数据
 * @param  {number} x     起始点的x轴
 * @param  {number} y      起始点的y轴
 */
function drawImage(canvas, img, dx, dy, dWidth = 0, dHeight = 0) {
  const promise = new Promise((resolve, reject) => {
    if (canvas && img) {
      const cxt = canvas.getContext('2d');

      loadImage(img).then(data => {
        if (dWidth) {
          cxt.drawImage(data, dx, dy, dWidth, dHeight);
        } else {
          cxt.drawImage(data, dx, dy);
        }

        resolve(canvas);
      }, reject);
    } else {
      reject();
    }
  });

  return promise;
}

function drawMarks(canvas, externalImages, paddings, outPaddings) {
  const { top, left } = paddings;
  const pools = [];
  let newCanvas = canvas;

  const isSeparate = !!externalImages.find(item => item.options.isSeparate);
  if (isSeparate) {
    // 新建一个用于绘制大图的canvas容器.
    newCanvas = createCanvas(canvas.width, canvas.height);
  }

  externalImages.forEach(item => {
    const { url, options, position } = item;
    const { isIncludePadding, isOverlay } = options;
    const { px, py, pw, ph } = position;

    const containerWidth = isIncludePadding ? canvas.width : canvas.width - left * 2;
    const containerHeight = isIncludePadding ? canvas.height : canvas.height - top * 2;
    const x = isIncludePadding ? containerWidth * px : left;
    const y = isIncludePadding ? containerHeight * py : top;
    const width = containerWidth * pw;
    const height = containerHeight * ph;

    pools.push(drawImage(newCanvas, url, x, y, width, height));
  });

  return Promise.all(pools).then(() => {
    return toObjectUrl(newCanvas).then(blob => {
      return { blob, isSeparate };
    });
  });
}

/**
 * 把3张大图合并成一张封面图.
 * @param  {object}   back  back图的对象, 结构为: {0: {img, paddings}}
 * @param  {number}  count 把多少张图片合并成一张大图.
 * @param  {array}  externalImages 外部图片的地址. 将外部的图片一起绘制到canvas中.
 * @param  {Function} done  合并完成后的回调.
 */
function toOne({ imgObj, count, externalImages, paddings, outPaddings, done }) {
  let iNow = 0;
  let canvasWidth = 0;
  let canvasHeight = 0;
  const drawCompleted = function(canvas) {
    if (++iNow === count) {
      const hasOverlay = externalImages && !!externalImages.find(item => item.options.isOverlay);
      const hasSeparate = externalImages && !!externalImages.find(item => item.options.isSeparate);

      // 获取绘制好的图片.
      if (hasOverlay || hasSeparate) {
        // 外部图片的地址. 将外部的图片一起绘制到canvas中.
        drawMarks(canvas, externalImages, paddings, outPaddings).then(({ blob, isSeparate }) => {
          toObjectUrl(canvas).then(url => {
            done &&
              done({
                img: url,
                base64: canvas.toDataURL(),
                size: {
                  width: canvasWidth,
                  height: canvasHeight
                },
                separate: isSeparate ? blob : ''
              });
          });
        });
      } else {
        toObjectUrl(canvas).then(url => {
          done &&
            done({
              img: url,
              base64: canvas.toDataURL(),
              size: {
                width: canvasWidth,
                height: canvasHeight
              }
            });
        });
      }
    }
  };

  const startDraw = () => {
    // 绘制所有图片.
    let tempX = 0;
    let baseY = 0;
    for (let i = 0; i < count; i++) {
      const obj = imgObj[i];
      if (i === 0) {
        baseY = obj.paddings.top;
      }
      if (i !== 0) {
        tempX += Math.ceil(imgObj[i - 1].size.width);
      }

      drawImage(canvas, obj.img, tempX, baseY - obj.paddings.top).then(drawCompleted);
    }
  };

  // 计算canvas的宽和高.
  for (let i = 0; i < count; i++) {
    canvasWidth += Math.ceil(imgObj[i].size.width);

    // 高就以第一张图片为基准.
    canvasHeight = Math.ceil(imgObj[0].size.height);
  }

  // 新建一个用于绘制大图的canvas容器.
  var canvas = createCanvas(canvasWidth, canvasHeight);

  // 判断是否有蒙层需要绘制到canvas的最底层.
  const hasUnderMask =
    externalImages &&
    !!externalImages.find(item => !item.options.isOverlay && !item.options.isSeparate);

  // 获取绘制好的图片.
  if (hasUnderMask) {
    // 外部图片的地址. 将外部的图片一起绘制到canvas中.
    drawMarks(canvas, externalImages, paddings, outPaddings).then(startDraw);
  } else {
    startDraw();
  }
}

/**
 * 调用9p-scale.js的scale方法, 分别生成back, spain和cover上的图片, 然后合并成一张后输出.
 * @param  {array} imgObjArray 生成背面图片的9张小图, 其数据结构为: [{paddings, size, images}]
 * @param  {array} externalImages 需要单独绘制到canvas上的图片集合.: ['/xxxx/xxx.jpg']
 * @param  {function} done 大图合成以后的回调, 参数里包含了新合成的大图的数据.
 */
function run(imgObjArray, externalImages, done) {
  if (!imgObjArray || !imgObjArray.length) {
    log('合并渲染图片时, 参数imgObjArray不能为空.');
    return;
  }

  // 用于存放合成后的所有图片.
  const imgObj = {};
  let iNow = 0;

  const callback = () => {
    if (++iNow === imgObjArray.length) {
      // 把多张张小图合成一张大图
      toOne({
        imgObj,
        count: imgObjArray.length,
        externalImages,
        paddings: imgObj[0].paddings,
        outPaddings: imgObj[0].outPaddings,
        done: opt => {
          opt.paddings = imgObj[0].paddings;
          opt.outPaddings = imgObj[0].outPaddings;
          done && done(opt);
        }
      });
    }
  };

  // 参数检查.
  imgObjArray.forEach(item => {
    if (!checkParams(item)) {
    }
  });

  // 合成
  imgObjArray.forEach((item, i) => {
    combine(
      item.images,
      Math.ceil(item.size.width),
      Math.ceil(item.size.height),
      item.paddings,
      item.outPaddings,
      opt => {
        imgObj[i] = opt;
        callback();
      }
    );
  });
}

/*
 使用实例:

 <img alt="" id="box">
 <script>
 window.onload = function() {
 var oBox = document.getElementById('box');
 var targetWidth = 800;
 var targetHeight = 600;
 var spainW = 75;
 var backImages = [
 './img/back/Back-01.png',
 './img/back/Back-02.png',
 './img/back/Back-03.png',
 './img/back/Back-04.png',
 './img/back/Back-05.png',
 './img/back/Back-06.png',
 './img/back/Back-07.png',
 './img/back/Back-08.png',
 './img/back/Back-09.png'
 ];
 var spainImages = [
 './img/spain/Spain-01.png',
 './img/spain/Spain-02.png',
 './img/spain/Spain-03.png',
 './img/spain/Spain-04.png',
 './img/spain/Spain-05.png',
 './img/spain/Spain-06.png',
 './img/spain/Spain-07.png',
 './img/spain/Spain-08.png',
 './img/spain/Spain-09.png'
 ];
 var coverImages = [
 './img/cover/Cover-01.png',
 './img/cover/Cover-02.png',
 './img/cover/Cover-03.png',
 './img/cover/Cover-04.png',
 './img/cover/Cover-05.png',
 './img/cover/Cover-06.png',
 './img/cover/Cover-07.png',
 './img/cover/Cover-08.png',
 './img/cover/Cover-09.png'
 ];


 bookRender.run({
 images: backImages,
 size: {
 width: targetWidth,
 height: targetHeight
 }
 }, {
 images: spainImages,
 size: {
 width: spainW,
 height: targetHeight
 }
 }, {
 images: coverImages,
 size: {
 width: targetWidth,
 height: targetHeight
 }
 }, function(opt) {
 oBox.src = opt.data;
 });

 };
 </script>

 */
