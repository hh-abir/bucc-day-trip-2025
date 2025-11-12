'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion'; // <--- 1. Import Variants
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

// 2. Add type annotation ": Variants" here
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 3. Add type annotation ": Variants" here as well
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-platform-bold"
        >
          About The Trip
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Embark on an exciting day-long adventure with the BRAC University Computer Club (BUCC)! This exclusive
            trip offers a perfect blend of relaxation, networking, and engaging activities. Exclusively for BUCC
            members, it&apos;s your chance to connect with fellow members from GB and 7 departments (EB, SE, E, GM)
            without any work or academic pressure, unwind, and create lasting memories. Don&apos;t miss out on this
            unique opportunity to strengthen bonds and enjoy a day filled with fun!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-5 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-4">
              <FaCalendarAlt className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Date</h3>
              <p className="text-slate-600">December 5, 2025</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-5 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full p-4">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Location</h3>
              <p className="text-slate-600">Saheb Bari Resort, Gazipur</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-5 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0 bg-purple-100 text-purple-600 rounded-full p-4">
              <FaDollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Registration Fee</h3>
              <p className="text-slate-600">BDT 1599 (All inclusive)</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;