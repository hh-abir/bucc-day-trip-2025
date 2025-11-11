'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-10 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/globe.svg" alt="BUCC Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">BUCC</span>
        </div>
        <div className="hidden md:flex md:flex-grow justify-center">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#schedule" className="hover:text-gray-400">Schedule</a></li>
            <li><a href="#register" className="hover:text-gray-400">Register</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:block w-24"></div> {/* Dummy div */}
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#schedule" className="hover:text-gray-400">Schedule</a></li>
            <li><a href="#register" className="hover:text-gray-400">Register</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
