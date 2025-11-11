'use client';

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const venueImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
];

const Venue = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="venue" className="py-20 bg-gray-100 text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Venue</h2>
        <div className="flex flex-col md:flex-row items-center gap-x-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="h-96 overflow-hidden rounded-lg shadow-md">
              <Slider {...settings}>
                {venueImages.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Venue image ${index + 1}`} className="w-full h-96 object-cover" />
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 p-4"
          >
            <h3 className="text-2xl font-bold mb-4">A Beautiful Resort</h3>
            <p className="text-base mb-3">
              We have chosen a stunning resort for our day-long trip, away from the hustle and bustle of the city. With lush green landscapes, a serene lake, and modern facilities, it's the perfect place to relax, learn, and connect.
            </p>
            <p className="text-base">
              The resort offers a swimming pool, a large playground for outdoor activities, and spacious conference rooms for our workshops.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
