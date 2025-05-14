import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import SearchForm from '@/app/SearchForm';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-4 pt-5 pb-5 border-b border-[#E0E0E0] sticky top-0 bg-white">
      <div className="flex flex-start w-[90%] max-w-[1200px] h-[48px] items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <SearchForm />
    </header>
  );
};

export default Header;
