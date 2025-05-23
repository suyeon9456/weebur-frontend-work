'use client';

import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import Image from 'next/image';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  showSearchIcon?: boolean;
  showCloseIcon?: boolean;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  className = '',
  showSearchIcon = true,
  showCloseIcon = true,
  placeholder,
  defaultValue,
  ...props
}) => {
  const [value, setValue] = useState<string>(defaultValue ?? '');
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const clearInput = useCallback(() => {
    setValue('');
  }, []);
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`
            relative flex px-9 py-5
            rounded-[1000px]
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            min-w-[386px] max-w-[500px]
            hover:shadow-[0_0_15px_0_rgba(0,0,0,0.15)]
        `}
      >
        {showSearchIcon && (
          <Image src="/icons/search.svg" alt="검색 아이콘" width={24} height={24} />
        )}
        <input
          placeholder={placeholder}
          className={`
            w-full
            ${showSearchIcon ? 'pr-12' : ''}
            ${className}
          `}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {showCloseIcon && (
          <button onClick={clearInput} className="cursor-pointer">
            <Image src="/icons/close.svg" alt="닫기 아이콘" width={24} height={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
