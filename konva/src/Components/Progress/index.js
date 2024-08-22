import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};


const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalRequests = 4;
    const requestDuration = 1000; // 每个请求的持续时间（毫秒）

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / totalRequests);
        if (newProgress >= 100) {
          clearInterval(intervalId);
        }
        return newProgress;
      });
    }, requestDuration);

    // 模拟四个接口请求
    for (let i = 0; i < totalRequests; i++) {
      setTimeout(() => {
        // 发送接口请求（这里模拟请求完成）
        console.log(`请求 ${i + 1} 完成`);
      }, i * requestDuration);
    }
  }, []);

  return (
    <div>
      <h1>多个接口请求进度</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};



export default Progress;
