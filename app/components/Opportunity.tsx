'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OpportunityCard from './OpportunityCard';

const opportunities = [
  {
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 013.292-2.296c.37.04.726.132 1.05.27m-4.342 2.026a3.002 3.002 0 003.292-2.296c.37.04.726.132 1.05.27m-4.342 2.026a3 3 0 01-3.292 2.296c-.37-.04-.726-.132-1.05-.27m4.342-2.026L12 11.472M12 11.472L9.658 9.446m2.342 2.026L14.342 9.446" />
      </svg>
    ),
    title: 'Networking',
    description: 'Connect with fellow students, alumni, and industry professionals.',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 21v-1m0-16a9 9 0 110 18 9 9 0 010-18z" />
      </svg>
    ),
    title: 'Learning',
    description: 'Participate in workshops and a coding competition to sharpen your skills.',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fun & Games',
    description: 'Enjoy a day of fun activities, games, and a bonfire.',
  },
];

const Opportunity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="opportunity" className="py-20 bg-white text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why You Shouldn't Miss The Opportunity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <OpportunityCard
                icon={opportunity.icon}
                title={opportunity.title}
                description={opportunity.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
