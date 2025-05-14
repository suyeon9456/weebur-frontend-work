import React, { InputHTMLAttributes, useCallback, useState } from 'react';

interface CheckBoxButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  className?: string;
  defaultChecked?: boolean;
}

const CheckBoxButton = ({
  onChange,
  children,
  className = '',
  defaultChecked,
  ...props
}: CheckBoxButtonProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }, []);
  return (
    <>
      <label
        className={`px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer font-bold
            ${
              isChecked
                ? 'bg-transparent text-[##202731]'
                : 'bg-white text-[#a9b0ba] hover:text-[#6b7788]'
            } ${className}`}
      >
        {children}
        <input type="checkbox" onChange={handleChange} {...props} className="hidden" />
      </label>
    </>
  );
};

export default CheckBoxButton;
