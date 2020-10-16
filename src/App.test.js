import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Has correct welcome text', () => {
  render(<App />)
  expect(screen.getByRole('heading')).toHaveTextContent('Hello');
})

test('Sum numbers', () => {
  expect(1 + 2).toEqual(4);
});
