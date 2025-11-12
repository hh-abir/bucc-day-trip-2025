'use client';

import React from 'react';
import Slider from 'react-slick';
import Countdown from './Countdown';
import { motion } from 'framer-motion';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroImages = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96??auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1170&q=80',
];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    arrows: false,
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Slider {...settings}>
          {heroImages.map((src, index) => (
            <div key={index}>
              <div
                className="h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Centered Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">

        {/* 🖼️ PNG Title Image */}
        <motion.img
          src="/title.png" // your image path
          alt="BUCC লুপের বাইরে - A day long tour 2025"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[280px] sm:w-[400px] md:w-[520px] mb-8"
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <Countdown />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#terms"
            className="transition bg-transparent border border-white text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 text-center"
          >
            T&Cs
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScExVF0Ii7g9A_IgqEI0Gp54bVNduyTddoNE3y3ZYQmjGZ2JQ/viewform"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 text-center"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
