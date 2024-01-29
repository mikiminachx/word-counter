import React from 'react';
import { render, screen } from '@testing-library/react';
import WordCounter from './App';

test('renders Word Counter heading', () => {
  render(<WordCounter />);
  const headingElement = screen.getByText(/Word Counter/i);
  expect(headingElement).toBeInTheDocument();
});
