import React, { useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

const Collision = () => {
  const [isColliding, setIsColliding] = useState(false);

  const circle1Radius = 50;
  const circle2Radius = 30;

  const initialCircle1Position = { x: 100, y: 100 };
  const initialCircle2Position = { x: 200, y: 150 };

  const [circle1Position, setCircle1Position] = useState(initialCircle1Position);
  const [circle2Position, setCircle2Position] = useState(initialCircle2Position);

  // 碰撞检测函数
  const checkCollision = () => {
    const distance = Math.sqrt(
      (circle1Position.x - circle2Position.x) ** 2 + (circle1Position.y - circle2Position.y) ** 2
    );
    const sumOfRadii = circle1Radius + circle2Radius;

    if (distance <= sumOfRadii) {
      setIsColliding(true);
    } else {
      setIsColliding(false);
    }
  };

  // 在圆的位置变化时进行碰撞检测
  React.useEffect(() => {
    checkCollision();
  }, [circle1Position, circle2Position]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle
          x={circle1Position.x}
          y={circle1Position.y}
          radius={circle1Radius}
          fill={isColliding ? 'red' : 'blue'}
          draggable
          onDragMove={e => {
            setCircle1Position({ x: e.target.x(), y: e.target.y() });
          }}
        />
        <Circle
          x={circle2Position.x}
          y={circle2Position.y}
          radius={circle2Radius}
          fill={isColliding ? 'red' : 'green'}
          draggable
          onDragMove={e => {
            setCircle2Position({ x: e.target.x(), y: e.target.y() });
          }}
        />
      </Layer>
    </Stage>
  );
};

export default Collision;
