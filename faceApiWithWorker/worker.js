// worker.js（worker线程）

importScripts('./faceEnvWorkerPatch.js', './face-api.js');

// faceapi.env.setEnv(faceapi.env.createNodejsEnv()); // 设置环境
//
// faceapi.env.monkeyPatch({
//   Canvas: OffscreenCanvas, // 使 OffscreenCanvas 代替 Canvas
//   createCanvasElement: () => {
//     return new OffscreenCanvas(480, 270);
//   }
// });

function createXHR() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
  if (window.ActiveXObject) {
    const versions = ['MSXML2.XMLHttp', 'Microsoft.XMLHTTP'];
    for (let i = 0, len = versions.length; i < len; i++) {
      try {
        // eslint-disable-next-line no-undef
        return new ActiveXObject(version[i]);
        break;
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  } else {
    throw new Error('xhr not support');
  }
};
var fetchImage = url => {
  return new Promise((resolve, reject) => {
    if (RegExp(`${location.host}|base64,`).test(url)) {
      const im = new window.Image();
      im.onload = () => {
        resolve(im);
      };
      im.onerror = () => {
        reject();
      };
      im.src = url;
    } else {
      const xhr = createXHR();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        const im = new window.Image();

        im.onload = () => {
          resolve(im);
        };

        im.onerror = () => {
          reject();
        };
        im.src = window.URL.createObjectURL(xhr.response);
      };

      xhr.onerror = () => {
        reject();
      };

      xhr.send();
    }
  });
};

console.log('faceapi', faceapi)
class SmartCrop {
  constructor(opt) {
    const { src, imageData, targetWidth, targetHeight } = opt;
    this.src = src;
    this.imageData = imageData;
    this.targetWidth = targetWidth;
    this.targetHeight = targetHeight;
    this.isModelsLoaded = false;
    if (!SmartCrop.instance) {
      SmartCrop.instance = this;
    }
    return SmartCrop.instance;
  }

  async loadModels() {
    if (!this.isModelsLoaded) {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('./models');
      await faceapi.loadFaceLandmarkModel('./models');
      await faceapi.nets.ageGenderNet.load('./models');
      this.isModelsLoaded = true;
    }
  }

  getFaceDetectorOptions() {
    const minConfidence = 0.5;
    return new faceapi.SsdMobilenetv1Options({ minConfidence });
  }

  async loadImage() {
    // 将 ImageData 的像素数据复制到图像对象中
    const canvas = new OffscreenCanvas(this.imageData.width, this.imageData.height);
    const context = canvas.getContext('2d');
    context.putImageData(this.imageData, 0, 0);

    return canvas;
  }
  async getCrop() {

    // await this.loadModels();
    const faceOptions = this.getFaceDetectorOptions();
    console.log('faceOptions===>', faceOptions)
    const faces = await faceapi
      .detectAllFaces(this.imageData, faceOptions)
      .withFaceLandmarks()
      .withAgeAndGender();

    console.log('faces===>', faces)


  }
}

// 从 Blob 创建 ImageData
function blobToImageData(blob) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    console.log('img', img)
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);

      const imageData = context.getImageData(0, 0, img.width, img.height);
      resolve(imageData);
    };

    img.onerror = reject;
    img.src = URL.createObjectURL(blob);
  });
}

self.addEventListener('message', async (e) => { // 接收到消息
  fetch('./test.jpg')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(async (blob) => {
      console.log('blob===>', blob)
      const image = await blobToImageData(blob);
      console.log('image===>', image)
      // 处理下载的图片数据（这里可以将 blob 转换为图像或其他操作）
      self.postMessage('Image downloaded successfully!');
    })
    .catch((error) => {
      console.error('Error downloading image:', error);
      self.postMessage('Image download failed.');
    });

  // const smartCrop = new SmartCrop({imageData: canvas});
  // await smartCrop.loadModels()
  // await smartCrop.getCrop()
});
