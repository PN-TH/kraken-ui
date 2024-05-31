import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders with default styles', () => {
    render(<Button label="Default Button" />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'py-2 px-4 bg-blue-500 text-white rounded',
    );
  });

  test('applies custom className', () => {
    render(<Button label="Custom Button" className="p-10" />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveClass('p-10');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByTestId('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('displays loading state', () => {
    render(<Button label="Loading" isLoading />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toContainHTML('<span class="loader"></span>');
  });

  test('disables the button', () => {
    render(<Button label="Disabled" disabled />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeDisabled();
  });

  // test('renders with an icon', () => {
  //   render(
  //     <Button label="With Icon" icon={<span className="icon">Icon</span>} />,
  //   );
  //   const buttonElement = screen.getByTestId('button');
  //   const iconElement = screen.getByText(/icon/i);
  //   expect(buttonElement).toContainElement(iconElement);
  // });
});
