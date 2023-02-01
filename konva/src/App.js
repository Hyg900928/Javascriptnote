import React from 'react';
import { Stage, Layer, Text, Rect, Group } from 'react-konva';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        isDragging: false,
        x: 50,
        y: 50
    };
  }

  render() {
      const widthBleedRecProps = {
          x: -25,
          y: -25,
          width: 350,
          height: 350,

          fill: 'blue'
      }

      const widthBorderRecProps = {
          x: -40,
          y: -40,
          width: 380,
          height: 380,

          fill: 'yellow'
      }

      const groupProps = {
          x: 300,
          y: 300,
          width: 300,
          height: 300,
          // clip: {
          //   x: 0,
          //   y: 0,
          //   width: 300,
          //   height: 300,
          // },
      }

      const withoutBleedProps = {
          x: 0,
          y: 0,
          width: 300,
          height: 300,
          fill: 'red'
      }
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text
                text="Draggable Text"
                x={this.state.x}
                y={this.state.y}
                draggable
                fill={this.state.isDragging ? 'green' : 'black'}
                onDragStart={() => {
                  this.setState({
                    isDragging: true
                  });
                }}
                onDragEnd={e => {
                  this.setState({
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y()
                  });
                }}
            />
            <Group {...groupProps}>
                <Rect {...widthBorderRecProps}/>
                <Rect {...widthBleedRecProps}/>
                <Rect {...withoutBleedProps}/>
            </Group>
          </Layer>
        </Stage>
    );
  }
}

export default App;
