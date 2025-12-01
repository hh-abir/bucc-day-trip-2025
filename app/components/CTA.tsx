'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-4"> {/* Added px-4 for mobile padding */}
        <div
          className="p-12 rounded-3xl shadow-lg text-white h-64 flex flex-col items-center justify-center md:flex-row md:justify-end"
          style={{
            backgroundImage: 'url(/Banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <motion.a
            href=""
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 mt-4 md:mt-0"
            animate={{
              y: [0, -10, 0], // Float up and down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Registration Closed
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
