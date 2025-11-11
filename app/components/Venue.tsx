'use client';

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const venueImages = [
  '/venue/venue-1.jpg',
  '/venue/venue-2.jpg',
  '/venue/venue-3.jpg',
  '/venue/venue-4.jpg',
  '/venue/venue-5.jpg',
  '/venue/venue-6.jpg',
  '/venue/venue-7.jpg',
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
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient">Venue</h2>
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
            className="md:w-1/2 overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4">SAHEB BARI RESORT</h3>
              <p className="text-base mb-3 max-w-full break-words">
                Located at Baroipara road Saheb Bari Road, Dolipara, Rajendrapur Cantonment, 1742. We have chosen this stunning resort for our day-long trip, away from the hustle and bustle of the city. With lush green landscapes, a serene lake, and modern facilities, it's the perfect place to relax, learn, and connect.
              </p>
              <p className="text-base max-w-full break-words">
                The resort offers a swimming pool, a large playground for outdoor activities, and spacious conference rooms for our workshops.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
