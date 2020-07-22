import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterLocalStorage from './index';

// After each of the test, I'm going to remove that countItem or the item from local storage called count.
// So don't have to do this in every single test and my tests are still going to pass that way.
afterEach(() => {
  window.localStorage.removeItem('count');
});

test('reads and writes to local storage', () => {
  window.localStorage.setItem('count', '3');
  const { container } = render(<CounterLocalStorage />);
  const button = container.firstChild;
  expect(button.textContent).toBe('3');
  fireEvent.click(button);
  expect(window.localStorage.getItem('count')).toBe('5');
  expect(button.textContent).toBe('5');
});
