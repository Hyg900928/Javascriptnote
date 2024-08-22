import React, { useState } from 'react';
import Konva from "konva";
import { Stage, Layer, Rect, Line } from 'react-konva';
import {guid} from "../../utils/math";

const GuideLine = () => {
  const stageProps = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  const generateRect = () => {
    const rects =[];
    for (let i = 0; i < 5; i++) {
      rects.push(
        {
          x: Math.random() * stageProps.width,
          y: Math.random() * stageProps.height,
          width: 50 + Math.random() * 50,
          height: 50 + Math.random() * 50,
          fill: Konva.Util.getRandomColor(),
          rotation: Math.random() * 360,
          draggable: true,
          name: 'object',
          id: guid()
        }
      );
    }
    return rects;
  }
  const rects = generateRect();
  const renderRects = () => {
    return rects.map(rect => {
      return (
        <Rect key={rect.id} {...rect}/>
      )
    })
  }
  return (
    <div>
      <h1>可拖动形状对齐示例</h1>
      <Stage {...stageProps}>
        <Layer>
          {renderRects()}
        </Layer>

      </Stage>
    </div>
  );
};

export default GuideLine;
