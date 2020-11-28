import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders app component', () => {
    const { getByTestId } = render(<App />);
    const linkElement = getByTestId('app');
    expect(linkElement).toBeInTheDocument();
  });
});
