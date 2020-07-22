import React, { useState, useEffect } from 'react';

const CounterLocalStorage = () => {
  // What we can do in our useState is we can actually pass it a function which it will only call on the first render. If I change this to a function that returns a read of localStorage count and that function will only be run when this counter is rendered for the first time.
  const initialCount = () => Number(window.localStorage.getItem('count') || 0);
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 2);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);

  return <button onClick={increment}>{count}</button>;
};

export default CounterLocalStorage;
