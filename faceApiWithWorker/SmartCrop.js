importScripts('./face-api.js');

faceapi.env.setEnv(faceapi.env.createNodejsEnv()); // 设置环境

faceapi.env.monkeyPatch({
  Canvas: OffscreenCanvas, // 使 OffscreenCanvas 代替 Canvas
  createCanvasElement: () => {
    return new OffscreenCanvas(480, 270);
  }
});


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
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/clientassets/models');
      await faceapi.loadFaceLandmarkModel('/clientassets/models');
      await faceapi.nets.ageGenderNet.load('/clientassets/models');
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
    const image = await this.loadImage();
    // await this.loadModels();
    const faceOptions = this.getFaceDetectorOptions();
    const faces = await faceapi
      .detectAllFaces(image, faceOptions)
      .withFaceLandmarks()
      .withAgeAndGender();

    const params = {
      image,
      faces,
      target: {
        width: this.targetWidth,
        height: this.targetHeight
      }
    };

    return getCropByFaces(params);
  }
}
