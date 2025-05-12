import React from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
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

export const Button: React.FC<ButtonProps> = ({
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
    <button className={buttonStyles} disabled={disabled || isLoading} {...props} onClick={onClick}>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
