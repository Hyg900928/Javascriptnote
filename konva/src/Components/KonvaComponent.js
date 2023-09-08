import React from 'react';
import { Stage, Layer, Group, Circle, Rect } from 'react-konva';

class KonvaComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const groupProps = {
      x: 0,
      y: 0,
      width: 500,
      height: 500,
      clip: {
        x: 50,
        y: 50,
        width: 200,
        height: 200
      }
    };

    const rectProps = {
      x: 0,
      y: 0,
      width: 300,
      height: 300,
      fill: 'blue'
    };
    return (
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Group {...groupProps}>
              <Rect {...rectProps} />
            </Group>
            <Circle x={200} y={100} radius={50} fill="green" />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default KonvaComponent;
