/*
 drawLine('canvas', 'red', 0, 0, 200, 200, 20);画线
 drawText('canvas', 'woeqtwqoe', 0, 0, 'red', '50px', 'Georgia');画文字
 drawRect('canvas', 'orange', 0, 0, 200, 200, true, 2);画矩形
 drawCircular('canvas', 'gray', 100, 100, 100, true, 5);画圆形
 drawDashLine('canvas', 'black', 0, 0, 200, 200, 1, 3);画虚线
 */

/**
 * drawImage('canvas', 'a.jpg', 0, 0,loaded,500,500);画图片
 * @param canvasId 画布的id
 * @param url 图片的地址
 * @param dx 目标画布的左上角在目标canvas上 X 轴的位置
 * @param dy 目标画布的左上角在目标canvas上 Y 轴的位置
 * @param {function} loadedImageFunction 图片加载完成后的回调函数
 * @param dWidth 在目标画布上绘制图像的宽度。 允许对绘制的图像进行缩放。 如果不说明， 在绘制时图片宽度不会缩放
 * @param dHeight 在目标画布上绘制图像的高度。 允许对绘制的图像进行缩放。 如果不说明， 在绘制时图片高度不会缩放
 * @param sx 需要绘制到目标上下文中的，源图像的矩形选择框的左上角 X 坐标
 * @param sy 需要绘制到目标上下文中的，源图像的矩形选择框的左上角 Y 坐标
 * @param sWidth 需要绘制到目标上下文中的，源图像的矩形选择框的宽度。如果不说明，整个矩形从坐标的sx和sy开始，到图像的右下角结束
 * @param sHeight 需要绘制到目标上下文中的，源图像的矩形选择框的高度
 */
 const drawImage = (
  canvasId,
  url,
  dx,
  dy,
  loadedImageFunction,
  dWidth,
  dHeight,
  sx,
  sy,
  sWidth,
  sHeight
) => {
  const c = document.getElementById(canvasId);
  const cxt = c.getContext('2d');
  const img = new Image();
  img.onload = function() {
    c.width = c.width;
    if (dWidth && dHeight) {
      if (sx) {
        cxt.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      } else {
        cxt.drawImage(img, dx, dy, dWidth, dHeight);
      }
    } else {
      cxt.drawImage(img, dx, dy);
    }
    if (loadedImageFunction) {
      loadedImageFunction(canvasId);
    }
  };
  img.src = url;
};

/**
 *
 * @param tarCanvasId
 * @param sourceCanvasId
 * @param x
 * @param y
 * @param width
 * @param height
 * @param sx
 * @param sy
 * @param sw
 * @param sh
 */
 const drawCanvas = (
  tarCanvasId,
  sourceCanvasId,
  x = 0,
  y = 0,
  width,
  height,
  sx = 0,
  sy = 0,
  sw,
  sh
) => {
  const tarCanvas = document.getElementById(tarCanvasId);
  const tarCtx = tarCanvas.getContext('2d');
  const sourceCanvas = document.getElementById(sourceCanvasId);

  if (sourceCanvas) {
    const sourceCtx = sourceCanvas.getContext('2d');
    const isw = sw || sourceCanvas.width;
    const ish = sh || sourceCanvas.height;
    const iw = width || sourceCanvas.width;
    const ih = height || sourceCanvas.height;

    if (sw > 0 && sh > 0) {
      tarCtx.drawImage(sourceCanvas, sx, sy, isw, ish, x, y, iw, ih);
    }
  }
};

/**
 * 在画布种添加文字
 * @param canvasId 画布的id
 * @param text 待添加的文字
 * @param x 文字的x坐标
 * @param y 文字的y坐标
 * @param color 文字的颜色
 * @param fontSize 文字大小
 * @param fontFamily 文字的字体
 */
 const drawText = (canvasId, text, x, y, color, fontSize, fontFamily) => {
  const c = document.getElementById(canvasId);
  const cxt = c.getContext('2d');

  cxt.textBaseline = 'top';
  const oldColor = cxt.fillStyle;
  cxt.fillStyle = color;
  cxt.font = `${fontSize}px ${fontFamily}`;

  cxt.fillText(text, x, y);
  cxt.fillStyle = oldColor;
};

/**
 * 在画布种添加文字
 * @param canvasId 画布的id
 * @param text 待添加的文字
 * @param color 文字的颜色
 * @param fontSize 文字大小
 * @param fontFamily 文字的字体
 */
 const drawTextInCenter = (
  canvasId,
  text,
  color,
  fontSize,
  fontFamily
) => {
  const c = document.getElementById(canvasId);
  const cxt = c.getContext('2d');

  cxt.textBaseline = 'top';
  const oldColor = cxt.fillStyle;
  cxt.fillStyle = color;
  cxt.font = `${fontSize}px ${fontFamily}`;

  const w = cxt.measureText(text).width;
  const x = (c.width - w) / 2;
  const y = (c.height - fontSize) / 2;

  cxt.fillText(text, x, y);
  cxt.fillStyle = oldColor;
};

/**
 * 在画布中画一条线
 * @param canvasId 画布的id
 * @param color 线的颜色
 * @param fromX 线的起始点的x坐标
 * @param fromY 线的起始点的y坐标
 * @param toX 线的结束点的x坐标
 * @param toY 线的结束点的y坐标
 * @param lineWidth 线的宽度
 */
 const drawLine = (
  canvasId,
  color,
  fromX,
  fromY,
  toX,
  toY,
  lineWidth = 1
) => {
  const c = document.getElementById(canvasId);
  const cxt = c.getContext('2d');
  const oldColor = cxt.strokeStyle;
  cxt.strokeStyle = color;

  const oldLineWidth = cxt.lineWidth;
  cxt.beginPath();
  cxt.lineWidth = lineWidth;
  cxt.moveTo(fromX, fromY);
  cxt.lineTo(toX, toY);
  cxt.closePath();
  cxt.stroke();
  cxt.strokeStyle = oldColor;
  cxt.lineWidth = oldLineWidth;
};

/**
 * 获取斜边的长度
 * @param x
 * @param y
 */
 const getBeveling = (x, y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

/**
 * 在画布种画一条虚线
 * @param canvasId 画布的id
 * @param color 虚线的颜色
 * @param fromX 虚线的起始点的x坐标
 * @param fromY 虚线的起始点的y坐标
 * @param toX 虚线的结束点的x坐标
 * @param toY 虚线的结束点的y坐标
 * @param lineWidth 虚线的宽度
 * @param dashLen
 */
 const drawDashedLine = (
  canvasId,
  color,
  fromX,
  fromY,
  toX,
  toY,
  lineWidth,
  dashLen
) => {
  const c = document.getElementById(canvasId);
  const cxt = c.getContext('2d');
  const oldColor = cxt.strokeStyle;
  cxt.strokeStyle = color;
  const oldLineWidth = cxt.lineWidth;
  if (lineWidth) {
    cxt.lineWidth = lineWidth;
  } else {
    cxt.lineWidth = 1;
  }

  const _dashLen = dashLen || 5;
  cxt.beginPath();
  const beveling = getBeveling(toX - fromX, toY - fromY);
  const num = Math.floor(beveling / _dashLen);

  let x1;
  let y1;
  let x2;
  let y2;

  for (let i = 0; i < num; i++) {
    x1 = fromX + ((toX - fromX) / num) * i;
    y1 = fromY + ((toY - fromY) / num) * i;
    x2 = fromX + ((toX - fromX) / num) * (i + 1);
    y2 = fromY + ((toY - fromY) / num) * (i + 1);
    cxt[i % 2 === 0 ? 'moveTo' : 'lineTo'](
      fromX + ((toX - fromX) / num) * i,
      fromY + ((toY - fromY) / num) * i
    );
  }
  if (num % 2 !== 0) {
    cxt.lineTo(x2, y2);
  }

  cxt.closePath();
  cxt.stroke();
  cxt.strokeStyle = oldColor;
  cxt.lineWidth = oldLineWidth;
};

/**
 * 在画布上画一个长方形
 * @param canvasId 画布的id
 * @param color 长方形的填充颜色或边的颜色
 * @param x x轴的坐标
 * @param y y轴的坐标
 * @param width 长方形的宽
 * @param height 长方形的高
 * @param isStroke 填充还是描边
 * @param lineWidth 边的宽度
 */
 const drawRect = (
  canvasId,
  color,
  x,
  y,
  width,
  height,
  isStroke,
  lineWidth
) => {
  const c = document.getElementById(canvasId);
  const cxt = c.getContext('2d');
  cxt.globalCompositeOperation = 'source-over';
  if (isStroke) {
    const oldLineWidth = cxt.lineWidth;
    if (lineWidth) {
      cxt.lineWidth = lineWidth;
    } else {
      cxt.lineWidth = 1;
    }
    const oldColor = cxt.strokeStyle;
    cxt.strokeStyle = color;
    cxt.beginPath();
    cxt.moveTo(x, y);
    cxt.strokeRect(x, y, width, height);
    cxt.closePath();
    cxt.stroke();
    cxt.strokeStyle = oldColor;
    cxt.lineWidth = oldLineWidth;
  } else {
    const oldColor = cxt.fillStyle;
    cxt.fillStyle = color;
    cxt.beginPath();
    cxt.moveTo(x, y);
    cxt.globalCompositeOperation = 'source-over';
    cxt.fillRect(x, y, width, height);
    cxt.closePath();
    cxt.fillStyle = oldColor;
  }
};

/**
 * 在画布上画一个长方形
 * @param canvasId canvasId 画布的id
 * @param color 圆的填充颜色或边的颜色
 * @param x 圆中心点的x轴坐标
 * @param y 圆中心点的y轴坐标
 * @param r 圆的半径
 * @param isStroke 填充还是描边
 * @param lineWidth 边的宽度
 */
 const drawCircular = (canvasId, color, x, y, r, isStroke, lineWidth) => {
  const c = document.getElementById(canvasId);
  const cxt = c.getContext('2d');
  if (isStroke) {
    const oldLineWidth = cxt.lineWidth;
    if (lineWidth) {
      cxt.lineWidth = lineWidth;
    } else {
      cxt.lineWidth = 1;
    }
    const oldColor = cxt.strokeStyle;
    cxt.strokeStyle = color;
    cxt.moveTo(x, y);
    cxt.beginPath();
    cxt.arc(x, y, r, 0, Math.PI * 2);
    cxt.closePath();
    cxt.stroke();
    cxt.strokeStyle = oldColor;
    cxt.lineWidth = oldLineWidth;
  } else {
    const oldColor = cxt.fillStyle;
    cxt.fillStyle = color;

    cxt.moveTo(x, y);
    cxt.beginPath();
    cxt.arc(x, y, r, 0, Math.PI * 2);
    cxt.closePath();
    cxt.fill();
    cxt.fillStyle = oldColor;
  }
};

/**
 * 清楚画布指定区域的内容
 * @param canvasId 画布的id
 * @param x 清除起始点的x轴坐标
 * @param y 清除起始点的y轴坐标
 * @param w 清除的宽度
 * @param h 清除的高度
 */
 const clear = (canvasId, x = 0, y = 0, w, h) => {
  const c = document.getElementById(canvasId);

  if (c) {
    const ctx = c.getContext('2d');
    const iw = w || c.width;
    const ih = h || c.height;

    ctx.clearRect(x, y, iw, ih);
  }
};

/**
 * 获取画布上指定区域的像素值
 * @param canvasId 画布的id
 * @param w 获取像素值的宽度值
 * @param h 获取像素值的高度值
 * @param x 获取像素值得起始点的x轴坐标
 * @param y 获取像素值得起始点的y轴坐标
 */
 const getImageData = (canvasId, w, h, x = 0, y = 0) => {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext('2d');
  const iw = w || c.width;
  const ih = h || c.height;
  return ctx.getImageData(x, y, iw, ih);
};

/**
 * 通过base64数据获取像素点数据
 * @param base64Data base64字符串
 */
 const getImageDataByBase64 = base64Data => {
  return new Promise((resolve, reject) => {
    const im = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    im.src = base64Data;
    im.onload = () => {
      canvas.width = im.width;
      canvas.height = im.height;
      ctx.drawImage(im, 0, 0);
      const imgData = ctx.getImageData(0, 0, im.width, im.height);
      resolve(imgData);
    };
    im.onerror = () => {
      reject();
    };
  });
};

/**
 * 通过imagedata获取base64字符串
 * @param imageData 像素点数据
 */
 const getBase64ByImageData = imageData => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};

// ImageDataToBloburl通过imagedata获取bloburl
 const toObjectUrl = canvas => {
  const promise = new Promise((resolve, reject) => {
    if (!canvas) {
      reject();
    } else {
      // chrome等现代浏览器
      if (canvas.toBlob) {
        canvas.toBlob(blob => {
          resolve(URL.createObjectURL(blob));
        });
      } else if (canvas.msToBlob) {
        // IE.
        const blob = canvas.msToBlob();
        resolve(URL.createObjectURL(blob));
      } else {
        const data = canvas.toDataURL();
        resolve(data);
      }
    }
  });

  return promise;
};

/**
 * 把像素值填充到画布上.
 * @param canvasId 画布的id
 * @param imgData 像素值数组
 * @param w
 * @param h
 * @param x
 * @param y
 */
 const fillImageData = (canvasId, imgData, w, h, x = 0, y = 0) => {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext('2d');
  const iw = w || c.width;
  const ih = h || c.height;

  ctx.putImageData(imgData, x, y, 0, 0, iw, ih);
};

 const createImageData = (canvasId, w, h) => {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext('2d');
  const iw = w || c.width;
  const ih = h || c.height;
  return ctx.createImageData(iw, ih);
};

 const getClient = canvasId => {
  const c = document.getElementById(canvasId);
  return {
    width: c.width,
    height: c.height,
    context: c.getContext('2d')
  };
};

 const imageDataVRevert = (sourceData, newData) => {
  // pixel vertical revert
  const iNewData = newData;
  for (let i = 0, h = sourceData.height; i < h; i++) {
    for (let j = 0, w = sourceData.width; j < w; j++) {
      iNewData.data[i * w * 4 + j * 4 + 0] =
        sourceData.data[(h - i) * w * 4 + j * 4 + 0];
      iNewData.data[i * w * 4 + j * 4 + 1] =
        sourceData.data[(h - i) * w * 4 + j * 4 + 1];
      iNewData.data[i * w * 4 + j * 4 + 2] =
        sourceData.data[(h - i) * w * 4 + j * 4 + 2];
      iNewData.data[i * w * 4 + j * 4 + 3] =
        sourceData.data[(h - i) * w * 4 + j * 4 + 3];
    }
  }
  return iNewData;
};

// pixel horizontal revert
 const imageDataHRevert = (sourceData, newData) => {
  // 在IE上, 不支持直接使用new ImageData的方式创建数据.
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const iNewData = ctx.createImageData(sourceData.width, sourceData.height);

  for (let i = 0, h = sourceData.height; i < h; i++) {
    for (let j = 0, w = sourceData.width; j < w; j++) {
      iNewData.data[i * w * 4 + j * 4 + 0] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 0];
      iNewData.data[i * w * 4 + j * 4 + 1] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 1];
      iNewData.data[i * w * 4 + j * 4 + 2] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 2];
      iNewData.data[i * w * 4 + j * 4 + 3] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 3];
    }
  }
  return iNewData;
};

 const canvasToBase64 = canvasId => {
  const canvas = document.getElementById(canvasId);
  return canvas.toDataURL('image/jpeg');
};

 const wrapBorder = (canvasId, direction = 'right', length = 0.5) => {
  // pixel beveling
  const canvas = document.getElementById(canvasId);
  const tmpCanvas = document.createElement('canvas');
  const tctx = tmpCanvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const params = {
    top: [1, 0, -length, length, 0, H / 2],
    right: [-length, length, 0, 1, W / 2, -W / 2]
  };

  if (W > H) {
    tmpCanvas.width = W + H / 2;
    tmpCanvas.height = H;
  } else {
    tmpCanvas.width = W;
    tmpCanvas.height = H + W / 2;
  }
  CanvasRenderingContext2D.prototype.transform.apply(tctx, params[direction]);
  if (W > H) {
    tctx.drawImage(canvas, H / 2, 0);
  } else {
    tctx.drawImage(canvas, 0, W / 2);
  }
  return tctx.getImageData(0, 0, tmpCanvas.width, tmpCanvas.height);
};

 const setSize = (canvasId, setting) => {
  const canvas = document.getElementById(canvasId);
  setting.width && (canvas.width = setting.width);
  setting.height && (canvas.height = setting.height);
};

 const fillEmptyDataWithColor = (imgData, rgb, width, height) => {
  const newImageData = imgData;

  for (let i = 0; i < imgData.width * imgData.height; i++) {
    if (newImageData.data[4 * i + 3] === 0) {
      newImageData.data[4 * i] = rgb.r;
      newImageData.data[4 * i + 1] = rgb.g;
      newImageData.data[4 * i + 2] = rgb.b;
      newImageData.data[4 * i + 3] = 255;
    }
  }
  return newImageData;
};

/**
 * replace or delete color in area
 * @param imageData
 * @param x
 * @param y
 * @param sourceColor
 * @param w
 * @param h
 * @param replaceColor
 * @returns {*}
 */
 const replaceColor = (
  imageData,
  x,
  y,
  sourceColor,
  w,
  h,
  replaceColor
) => {
  const ix = ~~(x || 0);
  const iy = ~~(y || 0);
  const iw = x + w || imageData.width;
  const ih = y + h || imageData.height;
  const newImageData = imageData;

  if (ix < 0 || iy < 0 || iw > imageData.width || ih > imageData.height) {
    throw new Error('error params!');
  }
  for (let j = iy; j < ih; j++) {
    for (let i = ix; i < iw; i++) {
      const index = j * newImageData.width + i;
      const r = newImageData.data[4 * index];
      const g = newImageData.data[4 * index + 1];
      const b = newImageData.data[4 * index + 2];

      if (r === sourceColor.r && g === sourceColor.g && b === sourceColor.b) {
        if (replaceColor) {
          newImageData.data[4 * index] = replaceColor.r;
          newImageData.data[4 * index + 1] = replaceColor.g;
          newImageData.data[4 * index + 2] = replaceColor.b;
          newImageData.data[4 * index + 3] = 255;
        } else {
          newImageData.data[4 * index + 3] = 0;
        }
      }
    }
  }
  return newImageData;
};

 const resizeImage = (canvasId, w, h) => {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const tmpCanvas = document.createElement('canvas');
  const tctx = tmpCanvas.getContext('2d');

  let iw = w || canvas.width;
  let ih = h || canvas.height;

  if (iw !== canvas.width || ih !== canvas.height) {
    let ratio;
    if (iw > ih) {
      ratio = canvas.width / iw;
      ih = canvas.height / ratio;
    } else if (iw === ih) {
      if (canvas.width > canvas.height) {
        ratio = canvas.width / iw;
        ih = canvas.height / ratio;
      } else {
        ratio = canvas.height / ih;
        iw = canvas.width / ratio;
      }
    } else {
      ratio = canvas.height / ih;
      iw = canvas.width / ratio;
    }
  }
  tmpCanvas.width = iw;
  tmpCanvas.height = ih;
  tctx.drawImage(canvas, 0, 0, iw, ih);

  return tmpCanvas.toDataURL('image/jpeg');
};

/**
 * 根据画布的大小, 出血区域以及包边的大小, 计算包边的上下左右4个区域的位置和宽高信息.
 * @param canvasW
 * @param canvasH
 * @param color
 * @param bleedTop
 * @param bleedBottom
 * @param bleedLeft
 * @param bleedRight
 * @param wrapSize
 * @param lineWidth
 */
/*  const getWrapBoxes = (canvasW, canvasH, color, bleedTop, bleedBottom, bleedLeft, bleedRight, wrapSize, lineWidth = 1) => {
 const boxes = [];

 if (!canvasW || !canvasH) {
 return boxes;
 }

 // 顶部区域
 boxes.push({
 x: bleedLeft + lineWidth,
 y: bleedTop + lineWidth,
 width: canvasW - (bleedLeft + bleedRight + (lineWidth * 2)),
 height: wrapSize,
 color
 });

 // 底部区域
 boxes.push({
 x: bleedLeft + lineWidth,
 y: canvasH - (wrapSize + lineWidth + bleedBottom),
 width: canvasW - (bleedLeft + bleedRight + (lineWidth * 2)),
 height: wrapSize - lineWidth,
 color
 });

 // 左侧区域
 boxes.push({
 x: bleedLeft + lineWidth,
 y: bleedTop + lineWidth + wrapSize,
 width: wrapSize,
 height: canvasH - (bleedTop + bleedBottom + ((lineWidth + wrapSize) * 2)),
 color
 });

 // 右侧区域
 boxes.push({
 x: canvasW - (wrapSize + lineWidth + bleedRight),
 y: bleedTop + lineWidth + wrapSize,
 width: wrapSize - lineWidth,
 height: canvasH - (bleedTop + bleedBottom + ((lineWidth + wrapSize) * 2)),
 color
 });

 return boxes;
 }; */
 const drawBox = (
  canvasId,
  width,
  height,
  color,
  bleedTop,
  bleedBottom,
  bleedLeft,
  bleedRight,
  wrapSize,
  lineWidth
) => {
  const c = document.getElementById(canvasId);
  const context = c.getContext('2d');

  context.moveTo(0, 0);
  context.lineTo(width, 0);
  context.lineTo(width, height);
  context.lineTo(width - wrapSize, height - wrapSize);
  context.lineTo(width - wrapSize, wrapSize);
  context.lineTo(wrapSize, wrapSize);
  context.lineTo(wrapSize, height - wrapSize);
  context.lineTo(width - wrapSize, height - wrapSize);
  context.lineTo(width, height);
  context.lineTo(0, height);
  context.lineTo(wrapSize, height - wrapSize);
  context.lineTo(0, height);
  context.lineTo(0, 0);

  context.fillStyle = color;
  context.fill();
};
