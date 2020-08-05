/* ---------------images的相关方法--------------------------*/
/**
 * 加载图片
 * @param  {string} url 待加载图片的地址
 * @param  {Function} cb 加载完成后的回调
 */
function loadImage(url, cb) {
  const promise = new Promise((resolve, reject) => {
    if (!url) {
      reject();
    } else {
      const img = new Image();
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function() {
        reject();
      };

      img.src = url;
    }
  });

  return promise;
}

/**
 * 计算图片的宽和高
 * @param  {string} url 待加载图片的地址
 * @param  {Function} cb 加载完成后的回调
 */
function getImageSize(url, cb) {
  const size = {
    width: 0,
    height: 0
  };

  if (!url) {
    cb && cb(size);
  } else {
    loadImage(url).then(img => {
      size.width = img.width;
      size.height = img.height;

      cb && cb(size);
    });
  }
}
/* ---------------end images的相关方法------------------------*/

/* ---------------计算的相关方法------------------------*/
/**
 * 根据9张小图, 计算使用这9张小图拼接(不缩放)后的图片的基础宽高.
 * @param  {array} images 包含待拼接的9张小图的数组
 */
function getBaseImageSize(images) {
  const size = {
    width: 0,
    height: 0
  };

  if (images && images.length === 3) {
    size.width = images[0].width;
    size.height = images[0].height + images[1].height + images[2].height;
  }

  if (images && images.length === 9) {
    size.width = images[0].width + images[1].width + images[2].width;
    size.height = images[0].height + images[3].height + images[6].height;
  }

  return size;
}

/**
 * 获取4个角上的缩放比.
 * @param  {object} baseSize   包含width和height两个属性的对象
 * @param  {object} targetSize  包含width和height两个属性的对象
 */
function getRatio(baseSize, targetSize) {
  const ratio = {
    width: 1,
    height: 1
  };
  if (baseSize && targetSize) {
    const wRatio = baseSize.width / targetSize.width;
    const hRatio = baseSize.height / targetSize.height;

    ratio.width = wRatio;
    ratio.height = hRatio;
  }

  return ratio;
}

/**
 * 计算白边占用整个宽高的比例.
 * @param  {number} padding  白边的像素值
 * @param  {[type]} baseSize 包含width和height两个属性的对象
 */
function getPaddingRatio(paddings, baseSize) {
  return {
    top: paddings.top / baseSize.height,
    right: paddings.right / baseSize.width,
    bottom: paddings.bottom / baseSize.height,
    left: paddings.left / baseSize.width
  };
}

function getPaddingsInContainer(
  targetWidth,
  targetHeight,
  padingTopRatio,
  padingBottomRatio,
  padingLeftRatio,
  padingRightRatio
) {
  const [w, h, tr, br, lr, rr] = [
    targetWidth,
    targetHeight,
    padingTopRatio,
    padingBottomRatio,
    padingLeftRatio,
    padingRightRatio
  ];

  const left =
    (lr * w * (1 - lr) + lr * rr * w) / ((1 - lr) * (1 - lr) + lr * rr);
  const right =
    (rr * w * (1 - rr) + lr * rr * w) / ((1 - rr) * (1 - rr) + lr * rr);
  const top =
    (tr * h * (1 - tr) + tr * br * h) / ((1 - tr) * (1 - tr) + tr * br);
  const bottom =
    (br * h * (1 - br) + tr * br * h) / ((1 - br) * (1 - br) + tr * br);

  return { left, right, top, bottom };
}

/**
 * 计算每张图片在canvas上的坐标和实际要绘制的大小.
 * @param  {array} images 基于Stream的图片数组, 每一对象包含图片的实际数据和图片的各个属性如width, height
 * @param  {number} targetWidth 合成后的图片的宽
 * @param  {number} targetHeight 合成后的图片的高
 * @param  {number} padding 白边的大小.
 */
function computedImageParamsInCanvas(
  images,
  targetWidth,
  targetHeight,
  paddings,
  outPaddings
) {
  const baseSize = getBaseImageSize(images);
  const paddingRatios = getPaddingRatio(paddings, baseSize);
  const outPaddingRatios = getPaddingRatio(outPaddings, baseSize);

  // 期望的宽加上左侧白边的宽
  const paddingsInContainer = getPaddingsInContainer(
    targetWidth,
    targetHeight,
    paddingRatios.top,
    paddingRatios.bottom,
    paddingRatios.left,
    paddingRatios.right
  );

  const outPaddingsInContainer = getPaddingsInContainer(
    targetWidth,
    targetHeight,
    outPaddingRatios.top,
    outPaddingRatios.bottom,
    outPaddingRatios.left,
    outPaddingRatios.right
  );

  const containerWidth = Math.ceil(
    targetWidth + paddingsInContainer.left + paddingsInContainer.right
  );

  // 期望的高加上下宽白边的高.
  const containerHeight = Math.ceil(
    targetHeight + paddingsInContainer.top + paddingsInContainer.bottom
  );
  const containerSize = { width: containerWidth, height: containerHeight };
  const ratio = getRatio(baseSize, containerSize);

  const imagesOptionsInCanvas = {
    container: {
      paddings: paddingsInContainer,
      outPaddings: outPaddingsInContainer,
      width: containerWidth,
      height: containerHeight
    },
    images: []
  };

  if (images.length === 3) {
    /* 计算小图缩放后的大小 */
    // 左上角
    const image1Size = {
      width: Math.ceil(images[0].width / ratio.width),
      height: Math.ceil(images[0].height / ratio.height)
    };
    const image2Size = {
      width: Math.ceil(images[1].width / ratio.width),
      height: Math.ceil(images[1].height / ratio.height)
    };
    const image3Size = {
      width: Math.ceil(images[2].width / ratio.width),
      height: Math.ceil(images[2].height / ratio.height)
    };    
    // 计算左上角小图的坐标和缩放后的大小.
    const Img1 = {
      x: 0,
      y: 0,
      dWidth: image1Size.width,
      dHeight: image1Size.height,
      img: images[0]
    };
    const Img2 = {
      x: 0,
      y: image1Size.height,
      dWidth: image2Size.width,
      dHeight: containerHeight - (image1Size.height + image3Size.height),
      img: images[1]
    };
    const Img3 = {
      x: 0,
      y: containerHeight - image3Size.height,
      dWidth: image3Size.width,
      dHeight: image3Size.height,
      img: images[2]
    };

    // 计算后的添加到数组中并返回
    imagesOptionsInCanvas.images.push(Img1);
    imagesOptionsInCanvas.images.push(Img2);
    imagesOptionsInCanvas.images.push(Img3);
    return imagesOptionsInCanvas;
  }

  /* 计算小图缩放后的大小 */
  // 左上角
  const topLeftImgSize = {
    width: Math.ceil(images[0].width / ratio.width),
    height: Math.ceil(images[0].height / ratio.height)
  };

  // 右上角
  const topRightImgSize = {
    width: Math.ceil(images[2].width / ratio.width),
    height: topLeftImgSize.height
  };

  // 左下角
  const bottomLeftImgSize = {
    width: topLeftImgSize.width,
    height: Math.ceil(images[6].height / ratio.height)
  };

  // 右下角
  const bottomRightImgSize = {
    width: topRightImgSize.width,
    height: bottomLeftImgSize.height
  };

  // 顶部中间区域
  const topMiddleImgSize = {
    width: containerWidth - (topLeftImgSize.width + topRightImgSize.width),
    height: topLeftImgSize.height
  };

  // 左侧中间区域
  const leftMiddleImgSize = {
    width: topLeftImgSize.width,
    height: containerHeight - (topLeftImgSize.height + bottomLeftImgSize.height)
  };

  // 中间区域
  const middleImgSize = {
    width: topMiddleImgSize.width,
    height: leftMiddleImgSize.height
  };

  // 右侧中间区域
  const rightMiddleImgSize = {
    width: topRightImgSize.width,
    height:
      containerHeight - (topRightImgSize.height + bottomRightImgSize.height)
  };

  // 底部中间区域
  const bottomMiddleImgSize = {
    width: topMiddleImgSize.width,
    height: bottomLeftImgSize.height
  };
  /*--------------------------------------------*/

  // 计算左上角小图的坐标和缩放后的大小.
  const topLeftImg = {
    x: 0,
    y: 0,
    dWidth: topLeftImgSize.width,
    dHeight: topLeftImgSize.height,
    img: images[0]
  };

  // 计算顶部中间小图的坐标和缩放后的大小.
  const topMiddleImg = {
    x: topLeftImg.dWidth,
    y: 0,
    dWidth: topMiddleImgSize.width,
    dHeight: topMiddleImgSize.height,
    img: images[1]
  };

  // 计算右上角张小图的坐标和缩放后的大小.
  const topRightImg = {
    x: topLeftImgSize.width + topMiddleImgSize.width,
    y: 0,
    dWidth: topRightImgSize.width,
    dHeight: topRightImgSize.height,
    img: images[2]
  };

  // 计算左侧中间区域小图的坐标和缩放后的大小.
  const leftMiddleImg = {
    x: 0,
    y: topLeftImgSize.height,
    dWidth: rightMiddleImgSize.width,
    dHeight: rightMiddleImgSize.height,
    img: images[3]
  };

  // 计算中间区域小图的坐标和缩放后的大小.
  const middleImg = {
    x: topLeftImgSize.width,
    y: topLeftImgSize.height,
    dWidth: middleImgSize.width,
    dHeight: middleImgSize.height,
    img: images[4]
  };

  // 计算右侧中间区域小图的坐标和缩放后的大小.
  const rightMiddleImg = {
    x: topLeftImgSize.width + middleImgSize.width,
    y: topLeftImgSize.height,
    dWidth: rightMiddleImgSize.width,
    dHeight: rightMiddleImgSize.height,
    img: images[5]
  };

  // 计算左下角张小图的坐标和缩放后的大小.
  const bottomLeftImg = {
    x: 0,
    y: topRightImgSize.height + leftMiddleImgSize.height,
    dWidth: bottomLeftImgSize.width,
    dHeight: bottomLeftImgSize.height,
    img: images[6]
  };

  // 计算底部中间区域小图的坐标和缩放后的大小.
  const bottomMiddleImg = {
    x: bottomLeftImgSize.width,
    y: topRightImgSize.height + leftMiddleImgSize.height,
    dWidth: bottomMiddleImgSize.width,
    dHeight: bottomMiddleImgSize.height,
    img: images[7]
  };

  // 计算底部右侧区域小图的坐标和缩放后的大小.
  const bottomRightImg = {
    x: bottomLeftImgSize.width + bottomMiddleImgSize.width,
    y: topRightImgSize.height + leftMiddleImgSize.height,
    dWidth: bottomRightImgSize.width,
    dHeight: bottomRightImgSize.height,
    img: images[8]
  };
  // 计算后的添加到数组中并返回
  imagesOptionsInCanvas.images.push(topLeftImg);
  imagesOptionsInCanvas.images.push(topMiddleImg);
  imagesOptionsInCanvas.images.push(topRightImg);
  imagesOptionsInCanvas.images.push(leftMiddleImg);
  imagesOptionsInCanvas.images.push(middleImg);
  imagesOptionsInCanvas.images.push(rightMiddleImg);
  imagesOptionsInCanvas.images.push(bottomLeftImg);
  imagesOptionsInCanvas.images.push(bottomMiddleImg);
  imagesOptionsInCanvas.images.push(bottomRightImg);

  return imagesOptionsInCanvas;
}

/* ---------------end 计算的相关方法------------------------*/

/* ---------------DOM的相关方法------------------------*/
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
 * 在canvas上绘制图片.
 * @param  {HTMLElement} canvas canvas节点
 * @param  {blob} img 待绘制的图片
 * @param  {number} x 目标画布的左上角在目标canvas上 X 轴的位置
 * @param  {number} y 目标画布的左上角在目标canvas上 Y 轴的位置
 * @param  {number} width 需要绘制到目标上下文中的，源图像的矩形选择框的宽度
 * @param  {number} height 需要绘制到目标上下文中的，源图像的矩形选择框的高度
 * @param  {number} dWidth 在目标画布上绘制图像的宽度。 允许对绘制的图像进行缩放
 * @param  {number} dHeight 在目标画布上绘制图像的高度。 允许对绘制的图像进行缩放
 */
function drawImage(canvas, img, x, y, width, height, dWidth, dHeight) {
  if (!canvas || !img) {
    return;
  }

  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(img, 0, 0, width, height, x, y, dWidth, dHeight);
  }
}

/**
 * 把canvas数据转换成base64.
 * @param  {HTMLElement} canvas canvas节点
 */
function canvasToBase64(canvas) {
  return canvas.toDataURL();
}

/* ---------------end DOM的相关方法------------------------*/

/**
 * 做初始化工作, 获取所有图片的的信息, 包括宽和高.
 * @param  {array} images 所有小图的地址的数组
 * @param  {function} 所有图片的宽高都获取成功后的回调.
 */
function init(images, cb) {
  const getNameFromUrl = function(url) {
    const arr = url.split('/');

    return arr[arr.length - 1];
  };

  if (!images || !images.length) {
    return;
  }

  const allPromises = [];
  images.forEach(url => {
    allPromises.push(loadImage(url));
  });

  if (allPromises && allPromises.length) {
    Promise.all(allPromises).then(imagesArray => {
      cb && cb(imagesArray);
    });
  }
}

/**
 * 根据9张小图片, 拼接成一张指定宽高的大图.
 * @param  {array} images 所有小图的地址的数组
 * @param  {number} targetWidth 拼接后的图片的宽
 * @param  {number} targetHeight 拼接后的图片的高
 * @param  {object} paddings 图片白边：包括top, right, bottom, left四个方向的值.
 * @param  {function} 拼接完成后的回调, 参数里包含了拼接后的大图.
 */
 const combine = (
  images,
  targetWidth,
  targetHeight,
  paddings,
  outPaddings,
  cb
) => {
  targetWidth = parseInt(targetWidth) || 0;
  targetHeight = parseInt(targetHeight) || 0;

  paddings.top = parseInt(paddings.top) || 0;
  paddings.right = parseInt(paddings.right) || 0;
  paddings.bottom = parseInt(paddings.bottom) || 0;
  paddings.left = parseInt(paddings.left) || 0;

  const oPaddings = outPaddings || {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  // 参数检查.
  if (!images || (images.length !== 9 && images.length !== 3) || !targetWidth || !targetHeight) {
    return;
  }

  // 获取所有图片的信息, 包括宽和高.
  init(images, allImages => {
    // 计算每一张小图在canvas绘制时的坐标和宽高
    const imagesOptionsInCanvas = computedImageParamsInCanvas(
      allImages,
      targetWidth,
      targetHeight, 
      paddings,
      oPaddings
    );

    // 新建一个新的canvas作为绘图容器
    const { container } = imagesOptionsInCanvas;
    const canvas = createCanvas(container.width, container.height);

    // 把图片绘制到canvas上.
    imagesOptionsInCanvas.images.forEach(imgOption => {
      drawImage(
        canvas,
        imgOption.img,
        imgOption.x,
        imgOption.y,
        imgOption.img.width,
        imgOption.img.height,
        imgOption.dWidth,
        imgOption.dHeight
      );
    });

    const base64Data = canvasToBase64(canvas);

    cb &&
      cb({
        paddings: container.paddings,
        outPaddings: container.outPaddings,
        size: {
          width: container.width,
          height: container.height
        },
        img: base64Data
      });
  });
};
