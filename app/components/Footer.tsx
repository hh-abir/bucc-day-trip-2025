'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/globe.svg" alt="BUCC Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">BUCC</span>
            </div>
            <p className="text-gray-400">
              BRAC University Computer Club is a community of tech enthusiasts and learners.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-white">Schedule</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-white">Register</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul>
              <li><a href="mailto:info@bucc.com" className="text-gray-400 hover:text-white">Email: info@bucc.com</a></li>
              <li><a href="https://www.bucc.com" className="text-gray-400 hover:text-white">Website: www.bucc.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8930000000004!2d90.391255!3d23.751000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85b5a0a8b01%3A0x4f8c7b0a8b01!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1678912345678!5m2!1sen!2sbd"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BRAC University Computer Club. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
