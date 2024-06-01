import React from 'react';
import Loader, { LoaderProps } from './Loader/Loader';
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  loaderProps?: LoaderProps;
}

export default function Button({
  label,
  className,
  icon,
  isLoading,
  disabled,
  containerClassName = 'flex items-center justify-center gap-2',
  loaderProps = { color: '#fa0000', size: 'small' },
  ...props
}: React.PropsWithChildren<IButtonProps>) {
  return (
    <button
      className={`rounded px-4 py-2 ${
        className ? className : 'bg-blue-500 text-white'
      } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      disabled={disabled}
      data-testid="buttonsdsdsqsqs"
      {...props}
    >
      {isLoading ? (
        <div className={containerClassName}>
          {label && <span>{label}</span>}
          <Loader {...loaderProps} />
        </div>
      ) : (
        <div className={containerClassName}>
          {label && <span>{label}</span>}
          {icon && <span>{icon}</span>}
        </div>
      )}
    </button>
  );
}
