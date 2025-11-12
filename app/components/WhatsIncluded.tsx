'use client';

import React from 'react';
import IncludedCard from './IncludedCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBed, FaFutbol, FaUtensils, FaBus } from 'react-icons/fa';

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
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient font-platform-bold">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.1 }}>
            <IncludedCard
              icon={<FaBus className="w-12 h-12 text-blue-500" />}
              title="Travel"
              description="Round-trip transportation from BRAC University to the resort by bus."
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.2 }}>
            <IncludedCard
              icon={<FaBed className="w-12 h-12 text-blue-500" />}
              title="Facilities"
              description="Deluxe AC Rooms, Swimming Pool, Football Field, Indoor Games, Garden Area & Pond Area"
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.3 }}>
            <IncludedCard
              icon={<FaFutbol className="w-12 h-12 text-green-500" />}
              title="Activities"
              description="Football, Cricket, Table Tennis, Carrom, Musical Chairs, Tug of War, and many more exciting games"
            />
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5, delay: 0.4 }}>
            <IncludedCard
              icon={<FaUtensils className="w-12 h-12 text-purple-500" />}
              title="Food & Refreshments"
              description="Breakfast, Lunch, Snacks, and a Souvenir"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;

