const createXHR = () => {
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

 const fetchImage = url => {
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
const getImageDataByImage = (image, length) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const ratio = image.width / image.height;

  if (ratio > 1) {
    canvas.width = length;
    canvas.height = Math.round(canvas.width / ratio);
  } else {
    canvas.height = length;
    canvas.width = Math.round(canvas.height * ratio);
  }
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
};

const chekIsTransparent = image => {
  const imageData = getImageDataByImage(image, 500);
  for (let i = 0; i < imageData.data.length; i += 4) {
    if (imageData.data[i + 3] < 255) {
      return true;
    }
  }
  return false;
};

const url = '/sticker-image/6ab43273-74f6-4baa-8ad4-a7d2c4f5a126/original.png';
const run = async () => {
  const image = await fetchImage('./original.png');
  console.log('image==>', image)
  const res = chekIsTransparent(image)
  console.log('res===>', res)
}

run()
