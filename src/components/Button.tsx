import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function Button({
  label,
  className,
  icon,
  isLoading,
  disabled,
  ...props
}: React.PropsWithChildren<IButtonProps>) {
  return (
    <button
      className={`rounded px-4 py-2 ${
        className ? className : 'bg-blue-500 text-white'
      } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      disabled={disabled}
      data-testid="button"
      {...props}
    >
      {isLoading ? (
        <span className="loader"></span> // Ajoutez ici votre propre composant de chargement ou style
      ) : (
        <>
          {icon && <span className="icon">{icon}</span>}
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
}
