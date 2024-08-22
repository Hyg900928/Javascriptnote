

const path = require("path");

const fs = require('fs');
const xml2js = require('xml2js');
const svgPath = path.resolve(__dirname, 'test.svg');
const svgString = fs.readFileSync(svgPath, 'utf-8');

xml2js.parseString(svgString, (err, result) => {
  console.log('result', result);
})

const convertSvg = (childArray, canvas) => {
  // console.log('childArray', childArray);
  childArray.forEach(child => {
    const { tagName, properties = {}, metaData,  } = child;
    const {width, height} = properties;
    if(child.children && child.children.length > 0){
      convertSvg(child.children, canvas);
    }
    if(tagName === 'defs') {
      const defs = canvas.defs();
      console.log('defs', defs)
    }
    if(tagName === 'style') {
    }

    if(tagName === 'rect') {
      console.log('rect=====>')
      canvas.rect(width, height).attr({...properties});
    }
  })
}
const main = async () => {
  try {
    const { createSVGWindow } = await import('svgdom');
    const { SVG, registerWindow } = await import('@svgdotjs/svg.js');
    const { parse } = await import('svg-parser');
    const parsed = parse(svgString);
    // console.log('parsed', JSON.stringify(parsed, null, 2));
    // returns a window with a document and an svg root node
    const window = createSVGWindow();
    const document = window.document;

    // register window and document
    registerWindow(window, document);

    // create canvas
    const canvas = SVG(document.documentElement)

    const childArray = parsed.children;

    convertSvg(childArray, canvas);
    // use svg.js as normal
    // canvas.rect(100, 100).fill('yellow').move(50,50)

// get your svg as string
//     console.log(canvas.svg())
// or
    console.log(canvas.node.outerHTML)
    fs.writeFileSync('generate.svg', canvas.node.outerHTML);

  }catch (e) {


    console.log('err', e)
  }

}
// main()
