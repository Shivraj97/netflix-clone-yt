import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useVerticalScroll from '../hooks/useVerticalScroll';
import useAuth from '../hooks/useAuth';
import BasicMenu from './BasicMenu';

const Header = () => {
  const [isScrolled] = useVerticalScroll();
  const { logout } = useAuth();

  return (
    <header className={`${isScrolled ? 'bg-[#141414]' : ''}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt=""
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <BasicMenu />
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
