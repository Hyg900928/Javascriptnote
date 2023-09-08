import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect } from 'react-konva';

class ScalableCanvas extends Component {
  constructor(props) {
    super(props);
    const renderSize = {
      width: 1086,
      height: 560,

    }
    const originCanvasWidth = 5960;
    const originCanvasHeight = 2895;
    const ratioX = renderSize.width / originCanvasWidth;
    this.state = {
      scale: ratioX,
      canvasWidth: renderSize.width,
      canvasHeight: renderSize.height,
      rect: {
        x: 100,
        width: 300,
        height: 300,
        fill: 'blue',
        draggable: true
      }
    };
  }

  handleZoomIn = () => {
    this.setState((prevState) => ({
      scale: prevState.scale * 1.1,
      canvasWidth: prevState.canvasWidth * 1.1,
      canvasHeight: prevState.canvasHeight * 1.1,
    }));
  };

  handleZoomOut = () => {
    this.setState((prevState) => ({
      scale: prevState.scale / 1.1,
      canvasWidth: prevState.canvasWidth / 1.1,
      canvasHeight: prevState.canvasHeight / 1.1,
    }));
  };

  handleDragStart = (e) => {

    this.setState({
      rect: {
        ...this.state.rect,
        isDragging: true
      }
    })

  };
  handleDragEnd = (e) => {
    this.setState({
      rect: {
        ...this.state.rect,
        isDragging: false
      }
    })
  };

  render() {
    const { rect } = this.state;
    const rectProps = {
      ...rect,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd
    }
    return (
      <div>
        <button onClick={this.handleZoomIn}>放大</button>
        <button onClick={this.handleZoomOut}>缩小</button>
        <Stage width={this.state.canvasWidth} height={this.state.canvasHeight}>
          <Layer scale={{ x: this.state.scale, y: this.state.scale }}>
            <Rect
              {...rectProps}
            />
            {/* 在这里添加其他Konva形状 */}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default ScalableCanvas;
