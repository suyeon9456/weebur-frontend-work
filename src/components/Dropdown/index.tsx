'use client';

import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  children: React.ReactNode;
  label?: string;
}

const Dropdown = ({ children, label = '' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
            px-4 py-2 bg-white cursor-pointer flex items-center gap-1 transition-all duration-200 min-w-[150px] h-[64px] rounded-full
            hover:shadow-[0_0_15px_0_rgba(0,0,0,0.15)]
            focus:shadow-[0_0_15px_0_rgba(0,0,0,0.15)]
        `}
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 z-[1000] bg-white shadow-md rounded-md p-[26px] min-w-[150px] border border-slate-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
