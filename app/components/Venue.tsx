'use client';

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt } from 'react-icons/fa';

// !!! Required CSS for react-slick !!!
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <section id="venue" className="py-16 md:py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">The Destination</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 font-platform-bold">
            Saheb Bari Resort
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Escape the city chaos. Experience the perfect blend of nature and luxury.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
                <Slider {...settings}>
                  {venueImages.map((image, index) => (
                    <div key={index} className="outline-none">
                      <div className="h-64 sm:h-80 md:h-96 w-full relative">
                        <img
                          src={image}
                          alt={`Venue view ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </motion.div>

            {/* Description & Map Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full space-y-6 md:space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Prime Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      Baroipara road, Saheb Bari Road, Dolipara, <br className="hidden md:block" />
                      Rajendrapur Cantonment, 1742
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  We have chosen this stunning resort for our day-long trip, away from the hustle of Dhaka. With lush green landscapes and a serene lake, it&apos;s the perfect place to relax, learn, and connect with fellow BUCC members.
                </p>
              </div>

              {/* Single Map Button */}
              <div className="ml-4">
                <a
                  href="https://www.google.com/maps/place/SAHEB+BARI+RESORT/@24.1141886,90.4453473,14.75z/data=!4m9!3m8!1s0x3755d99d3803b7cd:0xe68b9ebcb437c3db!5m2!4m1!1i2!8m2!3d24.1141586!4d90.4454611!16s%2Fg%2F11f776bn3b?hl=en&entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  <span className="font-medium text-sm">Get the Direction</span>
                </a>
              </div>


            </motion.div>
          </div>
        </div>
      </div>

      {/* Global Styles for Slick Dots */}
      <style jsx global>{`
        .custom-dots {
          bottom: 15px;
          width: 100%;
          text-align: center;
        }
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.5;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        .custom-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Venue;
