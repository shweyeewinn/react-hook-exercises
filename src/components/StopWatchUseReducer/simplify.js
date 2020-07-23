import React, { useReducer, useRef, useEffect } from 'react';

const reducer = (currentState, newState) => {
  return {
    ...currentState,
    ...newState,
  };
  //   switch (action.type) {
  //     case 'LAPSE':
  //       return {
  //         ...state,
  //         lapse: action.now - action.startTime,
  //       };
  //     case 'TOGGLE_RUNNING':
  //       return {
  //         ...state,
  //         running: !state.running,
  //       };
  //     case 'CLEAR':
  //       return {
  //         ...state,
  //         lapse: 0,
  //         running: false,
  //       };
  //     default:
  //       return state;
  //   }
};
const SimplifyStopWatch = () => {
  const [{ lapse, running }, setState] = useReducer(reducer, {
    lapse: 0,
    running: false,
  });
  //   const [lapse, setLapse] = useState(0);
  //   const [running, setRunning] = useState(false);
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
        //setLapse(Date.now() - startTime);
        // dispatch({ type: 'LAPSE', now: Date.now(), startTime });
        setState({ lapse: Date.now() - startTime });
      }, 0);
    }
    //setRunning(!running);
    // dispatch({ type: 'TOGGLE_RUNNING' });
    setState({ running: !running });
  };

  const handleClearClick = () => {
    clearInterval(intervalRef.current);
    //setLapse(0);
    //setRunning(false);
    // dispatch({ type: 'CLEAR' });
    setState({
      lapse: 0,
      running: false,
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <label
        style={{
          fontSize: '5em',
          display: 'block',
        }}
      >
        {lapse} ms
      </label>
      <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};

export default SimplifyStopWatch;
