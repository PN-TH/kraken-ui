import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  test('renders a spinning loader by default', () => {
    render(<Loader />);
    const loaderElement = screen.getByRole('status');
    expect(loaderElement).toHaveClass('animate-spin');
  });

  test('renders a linear loader when linear prop is true', () => {
    render(<Loader linear />);
    const loaderElement = screen.getByTestId('linear-loader');
    expect(loaderElement).toHaveClass('animate-linear-progress');
  });

  test('applies custom speed', () => {
    render(<Loader speed={2} />);
    const loaderElement = screen.getByRole('status');
    expect(loaderElement).toHaveStyle('animation-duration: 2s');
  });

  test('applies custom color', () => {
    render(<Loader color="#ff5733" />);
    const loaderElement = screen.getByRole('status');
    expect(loaderElement).toHaveStyle('border-top-color: #ff5733');
  });

  test('applies custom color for linear loader', () => {
    render(<Loader linear color="#33c1ff" />);
    const loaderElement = screen.getByRole('status');
    expect(loaderElement.firstChild).toHaveStyle('background-color: #33c1ff');
  });

  test('renders a small loader by default', () => {
    render(<Loader size="small" />);
    const loaderElement = screen.getByRole('status');
    expect(loaderElement).toHaveClass('h-6 w-6');
  });
});
