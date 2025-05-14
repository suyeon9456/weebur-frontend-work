import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import SearchForm from '@/app/SearchForm';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 flex flex-col items-center justify-center gap-4 border-b border-[#E0E0E0] bg-white pt-5 pb-5">
      <div className="flex-start flex h-[48px] w-[90%] max-w-[1200px] items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <SearchForm />
    </header>
  );
};

export default Header;
