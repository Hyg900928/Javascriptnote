import React from 'react';

const Child = () => {
    return <span>{Math.random()}</span>
}

// export default Child
export default React.memo(Child);
