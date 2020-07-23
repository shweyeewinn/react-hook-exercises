import React, { useState, useEffect } from 'react';
import createActivityDetector from 'activity-detector';

const useIdle = (options) => {
  const [isIdle, setIsIdle] = useState(false);
  useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on('idle', () => setIsIdle(true));
    activityDetector.on('active', () => setIsIdle(false));
    return () => activityDetector.stop();
  }, []);
  return isIdle;
};

const Idle = () => {
  const isIdle = useIdle({ timeToIdle: 1000 });
  return (
    <div>
      <div>{isIdle ? 'Are you still her?' : 'Hello there!'}</div>
    </div>
  );
};

export default Idle;
