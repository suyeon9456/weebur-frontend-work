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
        className={`px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer
            ${
              isChecked
                ? 'bg-[#e9eefe] text-gray-700 border border-[#4175f5] text-[#4175f5]'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            } ${className}`}
      >
        {children}
        <input type="checkbox" onChange={handleChange} {...props} className="hidden" />
      </label>
    </>
  );
};

export default CheckBoxButton;
