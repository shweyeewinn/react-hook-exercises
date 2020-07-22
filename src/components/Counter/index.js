import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(2);
  const increment = () => setCount(count + 2);
  return <button onClick={increment}>{count}</button>;
};

export default Counter;
