import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Start at 0

  return (
    <div>
        <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
// Click +/- to update the count