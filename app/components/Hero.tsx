import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 64px)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">BUCC Day Long Trip 2025</h1>
        <p className="text-xl mb-8">Join us for a day of fun, networking, and adventure!</p>
        <a
          href="#register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
