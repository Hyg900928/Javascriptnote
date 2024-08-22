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

function decode({ type, imageData }) {
  if (self.document !== undefined) {
    switch (type) {
      case 'canvas': {
        const canvas = document.createElement('canvas');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const context = canvas.getContext('2d');

        const realImageData = imageDataToRealImageData(imageData);

        context.putImageData(realImageData, 0, 0);

        return canvas;
      }
      case 'image': {
        canvasDOM.width = imageData.width;
        canvasDOM.height = imageData.height;

        const realImageData = imageDataToRealImageData(imageData);

        contextDOM.putImageData(realImageData, 0, 0);

        const image = new Image();
        image.src = canvasDOM.toDataURL();

        return image;
      }
      case 'imageData': {
        return imageDataToRealImageData(imageData);
      }
    }
  } else {
    switch (type) {
      case 'canvas': {
        const canvas = new HTMLCanvasElementWorker(
          imageData.width,
          imageData.height
        );

        const length = imageData.width * imageData.height;

        for (let imageDataIndex = 0, index = 0; index < length; index++) {
          canvas.imageData.r[index] = imageData.data[imageDataIndex++];
          canvas.imageData.g[index] = imageData.data[imageDataIndex++];
          canvas.imageData.b[index] = imageData.data[imageDataIndex++];
          canvas.imageData.a[index] = imageData.data[imageDataIndex++] / 255;
        }

        return canvas;
      }
      case 'image': {
        const image = new ImageWorker();
        image.width = imageData.width;
        image.height = imageData.height;

        const length = imageData.width * imageData.height;

        for (let imageDataIndex = 0, index = 0; index < length; index++) {
          image.imageData.r[index] = imageData.data[imageDataIndex++];
          image.imageData.g[index] = imageData.data[imageDataIndex++];
          image.imageData.b[index] = imageData.data[imageDataIndex++];
          image.imageData.a[index] = imageData.data[imageDataIndex++] / 255;
        }

        return image;
      }
      case 'imageData': {
        return new ImageWorker(
          imageData.width,
          imageData.height,
          imageData.data
        );
      }
    }
  }
}

function encode(element) {
  let type;
  let imageData;

  if (element instanceof HTMLCanvasElementWorker) {
    const context = element.getContext('2d');

    imageData = context.getImageData(0, 0, element.width, element.height);
    type = 'canvas';
  } else if (element instanceof ImageDataWorker) {
    canvasWorker.width = element.width;
    canvasWorker.height = element.height;

    contextWorker.putImageData(element, 0, 0);

    imageData = contextWorker.getImageData(0, 0, element.width, element.height);
    type = 'imageData';
  } else if (element instanceof ImageWorker) {
    canvasWorker.width = element.width;
    canvasWorker.height = element.height;

    contextWorker.drawImage(element, 0, 0);

    imageData = contextWorker.getImageData(0, 0, element.width, element.height);
    type = 'image';
  } else if (element instanceof HTMLCanvasElement) {
    canvasDOM.width = element.width;
    canvasDOM.height = element.height;

    contextDOM.drawImage(element, 0, 0);

    imageData = contextDOM.getImageData(0, 0, element.width, element.height);
    type = 'canvas';
  } else if (element instanceof ImageData) {
    canvasDOM.width = element.width;
    canvasDOM.height = element.height;

    contextDOM.putImageData(element, 0, 0);

    imageData = contextDOM.getImageData(0, 0, element.width, element.height);
    type = 'imageData';
  } else if (element instanceof Image) {
    canvasDOM.width = element.width;
    canvasDOM.height = element.height;

    contextDOM.drawImage(element, 0, 0);

    imageData = contextDOM.getImageData(0, 0, element.width, element.height);
    type = 'image';
  }

  return {
    data: { type, imageData },
    buffer:
      imageData && imageData.data && imageData.data.buffer
        ? imageData.data.buffer
        : new ArrayBuffer(0)
  };
}

function imageDataToRealImageData({ width, height, data }) {
  const imageData = contextDOM.createImageData(width, height);

  for (let i = 0; i < data.length; i++) {
    imageData.data[i] = data[i];
  }

  return imageData;
}
