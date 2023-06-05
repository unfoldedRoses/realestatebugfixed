import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="text-lg font-semibold text-gray-800">
          Airbnb
        </a>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none ml-2"
          />
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Explore
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Host
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Sign up
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-600 hover:text-gray-800 ml-4">
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
