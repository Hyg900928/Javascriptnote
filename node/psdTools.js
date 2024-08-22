require('ag-psd/initialize-canvas');
const { createCanvas } = require('canvas');
const { readFileSync, writeFileSync } = require('fs');
const { readPsd, writePsdBuffer } = require('ag-psd');

function getPsdData(inputPsd) {
    const buffer = readFileSync(inputPsd);
    // return readPsd(buffer, {useImageData: true});
  return buffer
}

function rotatePoint(point, centerPoint, rotation) {
    const radian = rotation * Math.PI / 180;
    const { x: cx, y: cy } = centerPoint;
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);

    const dx = point.x - cx;
    const dy = point.y - cy;

    const nx = dx * cos - dy * sin + cx;
    const ny = dx * sin + dy * cos + cy;

    return {
        x: nx,
        y: ny,
    };
}

function getRotateImageData(imageData, orientation) {
    const { width, height } = imageData;
    const oriCanvas = createCanvas(width, height);
    oriCanvas.getContext('2d').putImageData(imageData, 0, 0);
    const direction = ((orientation + 360) % 360) / 90;
    switch (direction) {
        case 1: {
            const canvas = createCanvas(height, width);
            const ctx = canvas.getContext('2d');
            ctx.rotate(90 * Math.PI / 180);
            ctx.drawImage(oriCanvas, 0, -height);
            return ctx.getImageData(0, 0, height, width);
        }
        case 2: {
            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');
            ctx.rotate(180 * Math.PI / 180);
            ctx.drawImage(oriCanvas, -width, -height);
            return ctx.getImageData(0, 0, width, height);
        }
        case 3: {
            const canvas = createCanvas(height, width);
            const ctx = canvas.getContext('2d');
            ctx.rotate(270 * Math.PI / 180);
            ctx.drawImage(oriCanvas, -width, 0);
            return ctx.getImageData(0, 0, height, width);
        }
        case 0:
        case 4:
        default: {
            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');
            ctx.rotate(0);
            ctx.drawImage(oriCanvas, 0, 0);
            return ctx.getImageData(0, 0, width, height);
        }
    }
}

function rotate({ input, output, rotation }) {
    const psdData = getPsdData(input);
    console.log('psdData', psdData.width)
    const { width: psdWidth, height: psdHeight, children, imageData } = psdData;
    const isSwitched = (Math.abs(rotation) / 90) % 2 === 1;
    const newData = psdData;

    // 旋转画布宽高及预览图
    newData.width = isSwitched ? psdHeight : psdWidth;
    newData.height = isSwitched ? psdWidth : psdHeight;
    newData.imageData = getRotateImageData(imageData, rotation);

    const diffX = isSwitched ? (psdHeight - psdWidth) / 2 : 0;
    const diffY = isSwitched ? (psdWidth - psdHeight) / 2 : 0;

    // 循环旋转每一个图层的数据及图片素材
    newData.children = children.map((item) => {
        const { top, left, bottom, right, imageData } = item;
        const width = Math.ceil(right - left);
        const height = Math.ceil(bottom - top);
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const { x: cx, y: cy } = rotatePoint({
            x: left + halfWidth,
            y: top + halfHeight,
        }, {
            x: psdWidth / 2,
            y: psdHeight / 2,
        }, rotation);
        const x = cx - (isSwitched ? halfHeight : halfWidth) + diffX;
        const y = cy - (isSwitched ? halfWidth : halfHeight) + diffY;
        const updateParams = {
            left: x,
            top: y,
            right: x + (isSwitched ? halfHeight : halfWidth),
            bottom: y + (isSwitched ? halfWidth : halfHeight),
        };
        if (imageData) {
            updateParams.imageData = getRotateImageData(imageData, rotation);
        }
        return Object.assign({}, item, updateParams);
    });
    const buffer = writePsdBuffer(newData);
    writeFileSync(output, buffer);

    return output;
}

// rotate({
//   input: './sources/foo3.png',
//   output: './test2.svg',
//   rotation: 90
// })


