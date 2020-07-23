import React, { useState } from 'react';

const Upper = React.memo(({ children }) => {
  const [count, setCount] = useState(0);
  console.log('rendering', children);
  return (
    <div>
      Uppercase version: {children.toUpperCase()}{' '}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
});

const FormWithUseMemo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <div>
      <label htmlFor="first-name-input">First Name</label>
      <input
        id="first-name-input"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Upper>{firstName}</Upper>
      <hr />
      <label htmlFor="last-name-input">Last Name</label>
      <input
        id="last-name-input"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Upper>{lastName}</Upper>
    </div>
  );
};

export default FormWithUseMemo;
