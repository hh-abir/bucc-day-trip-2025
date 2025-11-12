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
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 section-title-gradient font-platform-bold text-left">Why You Shouldn't Miss The Opportunity</h2>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg mb-4">
                This is an unparalleled chance to immerse yourself in a vibrant community of tech enthusiasts and learners. You'll gain valuable insights, expand your network, and discover new passions in a dynamic and supportive environment.
              </p>
              <p className="text-lg mb-4">
                Beyond the learning, it's an opportunity for pure fun and camaraderie. Engage in exciting activities, forge lasting friendships, and create unforgettable memories that will enrich your university experience.
              </p>
              <p className="text-lg">
                Don't miss out on this unique blend of professional growth and recreational enjoyment, designed to inspire and connect. It's more than just a trip; it's an investment in your personal and professional journey.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1724377418225232&show_text=0&width=560"
              width="100%"
              height="600"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
