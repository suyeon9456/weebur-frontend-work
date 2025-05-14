import React from 'react';
import { twMerge } from 'tailwind-merge';
import LoadingSpinner from './LoadingSpinner';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  size?: ButtonSize;
  buttonType?: ButtonType;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'px-3 h-8 text-sm',
  medium: 'px-3.5 h-10 text-base',
  large: 'px-4 h-12 text-lg',
};

const buttonTypeStyles: Record<ButtonType, string> = {
  primary: 'bg-[#1252f2] text-white hover:bg-blue-700 active:bg-blue-800',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = 'medium',
  buttonType = 'primary',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const buttonStyles = twMerge(
    baseStyles,
    sizeStyles[size],
    buttonTypeStyles[buttonType],
    fullWidth ? 'w-full' : '',
    className
  );

  return (
    <button
      className={buttonStyles}
      disabled={disabled || isLoading}
      {...props}
      onClick={onClick}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
    >
      {isLoading && <LoadingSpinner />}
      {children}
    </button>
  );
};

export default Button;
