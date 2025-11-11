import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center pt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">BUCC Day Long Trip 2025</h1>
        <p className="text-lg md:text-xl mb-8">Join us for a day of fun, networking, and adventure!</p>
        <div className="mb-8">
          <Countdown />
        </div>
        <a
          href="#register"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
