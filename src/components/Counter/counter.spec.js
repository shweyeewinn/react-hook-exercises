import React from 'react';
// import { render, fireEvent } from 'react-testing-library';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test('counter increments the count', () => {
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).toBe('2');
  fireEvent.click(button);
  expect(button.textContent).toBe('4');
});
