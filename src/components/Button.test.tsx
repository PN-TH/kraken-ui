import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with label', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  test('renders button with custom className', () => {
    render(<Button label="Click Me" className="w-10" />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveClass('w-10');
  });

  test('renders button with icon', () => {
    render(<Button label="Click Me" icon={<span>Icon</span>} />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveTextContent('Click Me');
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('renders loader when isLoading is true', () => {
    render(<Button label="Loading" isLoading />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  test('applies disabled state', () => {
    render(<Button label="Click Me" disabled />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('cursor-not-allowed opacity-50');
  });

  test('fires click event', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
