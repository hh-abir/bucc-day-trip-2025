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
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient">About The Trip</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg mb-4">
            Join us for an unforgettable day-long trip organized by the BRAC University Computer Club (BUCC). This is a great opportunity to unwind, network with peers, and participate in fun activities.
          </p>
          <p className="text-lg mb-8">
            The trip is open to all students of BRAC University, regardless of their department. We encourage you to bring your friends and make new ones!
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
