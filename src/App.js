import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import CounterWithCustomHook from './components/CounterWithCustomHook';
import CounterLocalStorage from './components/CounterStoreValueInLocalStorage';
import Tilt from './components/Tilt';
import StopWatchUseReducer from './components/StopWatchUseReducer';
import SimplifyStopWatch from './components/StopWatchUseReducer/simplify';
import StopWatchWithCustomHook from './components/StopWatchUseReducer/customHook';
import Idle from './components/Idle';
import FormWithUseMemo from './components/FormWithUseMemo';

function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{ color: 'green' }}>Counter - useState</h1>
        <Counter />
      </div>
      <div>
        <h1 style={{ color: 'red' }}>Counter - Custom Hook</h1>
        <CounterWithCustomHook />
      </div>
      <div>
        <h1 style={{ color: 'blue' }}>
          Store Values in localStorage with the React - UseEffect Hook
        </h1>
        <CounterLocalStorage />
      </div>

      <div>
        <h1 style={{ color: 'green' }}>
          Access and Modify a DOM Node with useRef and useEffect Hooks
        </h1>
        <Tilt />
      </div>

      <div>
        <h1 style={{ color: 'orange' }}>
          StopWatch - Interact and Update State in React with useState
        </h1>
        <StopWatch />
      </div>

      <div>
        <h1 style={{ color: 'blue' }}>
          Declaratively Interact with Complex Component State using the
          useReducer Hook
        </h1>
        <StopWatchUseReducer />
      </div>

      <div>
        <h1 style={{ color: 'green' }}>
          Simplify a Component Reducer with the React setState Hook
        </h1>
        <SimplifyStopWatch />
      </div>

      <div>
        <h1 style={{ color: 'orange' }}>
          Share complex logic across React Components with Custom Hooks
        </h1>
        <StopWatchWithCustomHook />
      </div>

      <div>
        <h1 style={{ color: 'black' }}>
          Detect user activity with a custom useIdle React Hook
        </h1>
        <Idle />
      </div>

      <div>
        <h1 style={{ color: 'black' }}>
          Prevent Unnecessary Component Rerenders with React memo
        </h1>
        <FormWithUseMemo />
      </div>
    </div>
  );
}

export default App;
