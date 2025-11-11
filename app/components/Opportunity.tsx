'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Opportunity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="opportunity" className="py-20 bg-white text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why You Shouldn't Miss The Opportunity</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 p-4"
          >
            <p className="text-lg mb-4">
              This day-long trip is more than just a getaway. It's a chance to connect with your peers, network with alumni, and learn from industry professionals in a relaxed and fun environment.
            </p>
            <p className="text-lg">
              We have a packed schedule of activities, including team-building games, a coding competition, and a bonfire with a Q&A session with our special guests. You'll leave with new friends, new skills, and a renewed passion for computer science.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 p-4"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
