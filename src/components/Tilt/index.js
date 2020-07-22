import React, { useRef, useEffect } from 'react';
import './style.css';
import VanillaTilt from 'vanilla-tilt';

const TiltRoot = (props) => {
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
    return () => tiltRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  );
};

const Tilt = () => {
  return (
    <div className="totally-centered">
      <TiltRoot>
        <div className="totally-centered">vanilla-tilt.js</div>
      </TiltRoot>
    </div>
  );
};

export default Tilt;
