import React, { useState, useCallback } from 'react';

import Child from "./Child";

export default function App() {
    const [ count, setCount ] = useState(0);
    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(0);

    return (
        <div>
            count: {count} <button onClick={() => setCount(count + 1)}>点击</button>

            <br/>
            <br/>
            child: <Child  />

            <br/>
            <br/>

            child2:
            <Child />
        </div>
    )
}
