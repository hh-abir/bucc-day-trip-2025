'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sponsorsData = [
  {
    name: 'Tech Sponsor 1',
    logo: 'https://via.placeholder.com/150x80.png?text=Sponsor+1',
  },
  {
    name: 'Tech Sponsor 2',
    logo: 'https://via.placeholder.com/150x80.png?text=Sponsor+2',
  },
  {
    name: 'Tech Sponsor 3',
    logo: 'https://via.placeholder.com/150x80.png?text=Sponsor+3',
  },
  {
    name: 'Tech Sponsor 4',
    logo: 'https://via.placeholder.com/150x80.png?text=Sponsor+4',
  },
];

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sponsors" className="py-20 bg-gray-100 text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {sponsorsData.map((sponsor, index) => (
            <img key={index} src={sponsor.logo} alt={sponsor.name} className="h-16" />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
