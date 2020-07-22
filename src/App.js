import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import CounterWithCustomHook from './components/CounterWithCustomHook';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
      <div>
        <h1 style={{ color: 'red' }}>Counter With Custom Hook</h1>
        <CounterWithCustomHook />
      </div>
      <div>
        <h1>StopWatch</h1>
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
