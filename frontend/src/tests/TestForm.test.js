import React from 'react';
import { render, screen } from '@testing-library/react';
import TestForm from '../components/TestForm';

test('render App', () => {
  render(<TestForm />);
  const linkElement = screen.getByText('Value');
  // expect(linkElement).toBeInTheDocument();
});