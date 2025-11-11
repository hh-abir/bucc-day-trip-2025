'use client';

import React from 'react';
import IncludedCard from './IncludedCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatsIncluded = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="whats-included" className="py-20 bg-white text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.1 }}>
            <IncludedCard
              icon={
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              }
              title="Travel"
              description="Round-trip transportation from BRAC University to the resort by AC bus."
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.2 }}>
            <IncludedCard
              icon={
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              }
              title="Food & Drinks"
              description="Welcome drinks, buffet lunch, and evening snacks will be provided."
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.3 }}>
            <IncludedCard
              icon={
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              }
              title="Activities"
              description="Access to all planned activities, games, and competitions."
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.4 }}>
            <IncludedCard
              icon={
                <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M5 3l14 18"></path></svg>
              }
              title="And More!"
              description="A surprise gift for every participant and a chance to win exciting prizes."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
