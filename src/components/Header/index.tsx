import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center pt-5 pb-5 border-b border-[#E0E0E0]">
      <Link href="/" className="flex flex-start w-[90%] max-w-[1200px]">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
