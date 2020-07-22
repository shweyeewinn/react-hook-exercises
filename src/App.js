import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import CounterWithCustomHook from './components/CounterWithCustomHook';
import CounterLocalStorage from './components/CounterStoreValueInLocalStorage';

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ color: 'green' }}>Counter</h1>
        <Counter />
      </div>
      <div>
        <h1 style={{ color: 'red' }}>Counter With Custom Hook</h1>
        <CounterWithCustomHook />
      </div>
      <div>
        <h1 style={{ color: 'blue' }}>
          Store Values in localStorage with the React - UseEffect Hook
        </h1>
        <CounterLocalStorage />
      </div>
      <div>
        <h1 style={{ color: 'orange' }}>
          StopWatch - useState, useRef, useEffect Hooks
        </h1>
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
