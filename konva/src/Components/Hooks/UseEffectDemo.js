import React, { useState, useEffect } from 'react';
import { createConnection } from './chat';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  console.log('roomId==>', roomId);
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return <h1>欢迎来到 {roomId} 房间！</h1>;
}

function UseEffectDemo() {
  const [roomId, setRoomId] = useState('所有');
  return (
    <>
      <label>
        选择聊天室：
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
          <option value="所有">所有</option>
          <option value="旅游">旅游</option>
          <option value="音乐">音乐</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}

export default UseEffectDemo;
