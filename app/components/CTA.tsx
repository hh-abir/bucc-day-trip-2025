'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="register" className="py-20">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-12 rounded-3xl shadow-lg text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Join?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Don't miss out on this exciting opportunity to connect with the BUCC community and have a great time.
            Register now to secure your spot!
          </p>
          <motion.a
            href="#"
            className="bg-transparent border-2 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 w-48 mx-auto animate-border-color"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Register Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
