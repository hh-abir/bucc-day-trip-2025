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
              <p className="text-lg mb-4 text-gray-700">
                Imagine a day where laughter, games, and endless fun take over - that’s what the BRAC University Computer Club has planned for you! All members are invited to join an unforgettable trip packed with exciting activities, outdoor adventures, and plenty of surprises. It’s a day designed for everyone to relax, enjoy, and make memories that last a lifetime.
              </p>

              <p className="text-lg mb-4 text-gray-700">
This trip is a rare chance to spend time with panel members and fellow club members, connect, and share experiences in a fun and friendly environment. Moments like these don’t come often, so don’t miss the chance to strengthen friendships and be part of something special.              </p>

              <p className="text-lg mb-4 text-gray-700">
Step away from your routine and dive into a day packed with joy, games, and activities for all kinds of members. It’s the perfect time to bond with the BUCC family, enjoy surprises, and create unforgettable memories. Seats are limited, so make sure you join us for a day full of adventure, laughter, and pure fun!              </p>
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
