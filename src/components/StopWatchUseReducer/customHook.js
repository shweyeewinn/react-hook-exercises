import React, { useReducer, useRef, useEffect } from 'react';

const reducer = (currentState, newState) => {
  return {
    ...currentState,
    ...newState,
  };
};

//Custom Hook
const useStopWatch = () => {
  const [{ lapse, running }, setState] = useReducer(reducer, {
    lapse: 0,
    running: false,
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = setInterval(() => {
        setState({ lapse: Date.now() - startTime });
      }, 0);
    }
    setState({ running: !running });
  };

  const handleClearClick = () => {
    clearInterval(intervalRef.current);
    setState({
      lapse: 0,
      running: false,
    });
  };

  return {
    handleClearClick,
    handleRunClick,
    lapse,
    running,
  };
};

const StopWatchWithCustomHook = () => {
  const stopWatchOne = useStopWatch();
  const stopWatchTwo = useStopWatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <label
          style={{
            fontSize: '5em',
            display: 'block',
          }}
        >
          {stopWatchOne.lapse} ms
        </label>
        <button onClick={stopWatchOne.handleRunClick}>
          {stopWatchOne.running ? 'Stop' : 'Start'}
        </button>
        <button onClick={stopWatchOne.handleClearClick}>Clear</button>
      </div>
      <div>
        <h1>
          <strong>Lapse Difference:</strong>
          <span>{stopWatchOne.lapse - stopWatchTwo.lapse} ms</span>
        </h1>
      </div>

      <div>
        <label
          style={{
            fontSize: '5em',
            display: 'block',
          }}
        >
          {stopWatchTwo.lapse} ms
        </label>
        <button onClick={stopWatchTwo.handleRunClick}>
          {stopWatchTwo.running ? 'Stop' : 'Start'}
        </button>
        <button onClick={stopWatchTwo.handleClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default StopWatchWithCustomHook;
