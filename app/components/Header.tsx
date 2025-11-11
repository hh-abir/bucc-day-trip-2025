'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/bucclogo.png" alt="BUCC Logo" className="h-16 w-auto mr-2"/>
        </div>
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
          <a href="#about" className={`hover:text-blue-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            About
          </a>
          <a href="#schedule" className={`hover:text-blue-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Schedule
          </a>
          <a href="#venue" className={`hover:text-blue-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Venue
          </a>
          <a href="#faq" className={`hover:text-blue-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            FAQ
          </a>
        </nav>
        <div></div> {/* Placeholder for right side */}
      </div>
    </motion.header>
  );
};

export default Header;
