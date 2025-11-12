'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient font-platform-bold">About The Trip</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg mb-8">
            Embark on an exciting day-long adventure with the BRAC University Computer Club (BUCC)! This exclusive trip offers a perfect blend of relaxation, networking, and engaging activities. Exclusively for BUCC members, it's your chance to connect with fellow members from GB and 7 departments (EB, E, GM) without any work or academic pressure, unwind, and create lasting memories. Don't miss out on this unique opportunity to strengthen bonds and enjoy a day filled with fun!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaCalendarAlt className="text-blue-500 text-3xl mb-2" />
            <div>
              <h3 className="text-xl font-bold">Date</h3>
              <p>December 5, 2025</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-green-500 text-3xl mb-2" />
            <div>
              <h3 className="text-xl font-bold">Location</h3>
              <p>A beautiful resort near Dhaka</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaDollarSign className="text-purple-500 text-3xl mb-2" />
            <div>
              <h3 className="text-xl font-bold">Registration Fee</h3>
              <p>BDT 1599 (Includes all activities, food, and travel)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
