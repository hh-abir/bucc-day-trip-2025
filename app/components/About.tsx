'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white text-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">About the Trip</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          The BUCC Day Long Trip is an annual event designed to bring together the bright minds of the BRAC University Computer Club. This year, we're escaping the city to a serene and beautiful resort, offering a perfect blend of learning, networking, and relaxation. It's a fantastic opportunity to connect with fellow members, share ideas, learn from experienced alumni, and make memories that will last a lifetime.
        </p>
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Date</h3>
            <p className="text-lg">December 5, 2025</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-lg">A beautiful resort (TBA)</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Who can join?</h3>
            <p className="text-lg">All BUCC members are welcome!</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
