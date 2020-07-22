import React, { useState } from 'react';

// Custom Hook
// const useCounter = (initialState, step) => {
const useCounter = ({ initialState, step }) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return { count, increment, setCount };
};
const CounterWithCustomHook = () => {
  //   const { count, increment } = useCounter(3, 2);
  const { count, increment } = useCounter({ initialState: 3, step: 2 });
  return <button onClick={increment}>{count}</button>;
};

export default CounterWithCustomHook;
