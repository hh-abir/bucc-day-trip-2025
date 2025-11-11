import React from 'react';

const Header = () => {
  return (
    <header
      className="relative text-white py-4 px-8"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/globe.svg" alt="BUCC Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">BUCC</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#schedule" className="hover:text-gray-400">Schedule</a></li>
            <li><a href="#register" className="hover:text-gray-400">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
