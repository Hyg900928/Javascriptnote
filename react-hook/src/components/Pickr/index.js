import React, { useEffect, useRef } from 'react';
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import '@simonwep/pickr/dist/themes/classic.min.css';


class ColorPicker extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        if(this.pickerRef) {
            console.log('pickeRef===>', this.pickerRef);
            const pickr = Pickr.create({
                el: '.color-picker',
                theme: 'classic',
                // 根据需要进行选项配置
            });
            this.picker = pickr;

            // 将选中的颜色值传递给React组件
            pickr.on('change', (color) => {
                const { r, g, b, a } = color.toRGBA();
                const rgbaValue = `rgba(${r},${g},${b},${a})`;
                // 处理颜色值，可以将其存储到状态或传递给父组件
            });
        }


    }

    componentWillUnmount() {
        if(this.picker) {
            this.picker.destroy();
        }
    }

    render() {
        return (
            <div ref={node => this.pickerRef = node}></div>
        )
    }
}

export default ColorPicker;
