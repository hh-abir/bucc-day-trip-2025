'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBus, FaCoffee, FaUtensils, FaGamepad, FaFlagCheckered } from 'react-icons/fa';

const scheduleData = [
  {
    time: '9:00 AM',
    title: 'Departure from BRAC University',
    description: 'We will depart from the BRAC University campus by bus. Please be on time!',
    icon: <FaBus />,
  },
  {
    time: '11:00 AM',
    title: 'Arrival at the Resort & Welcome Drinks',
    description: 'Upon arrival, you will be greeted with welcome drinks and a chance to settle in.',
    icon: <FaCoffee />,
  },
  {
    time: '1:00 PM',
    title: 'Lunch',
    description: 'A delicious buffet lunch will be served with a variety of options to choose from.',
    icon: <FaUtensils />,
  },
  {
    time: '2:00 PM - 5:00 PM',
    title: 'Activities & Games',
    description: 'Get ready for a fun-filled afternoon with team-building activities, a coding competition, and other games.',
    icon: <FaGamepad />,
  },
  {
    time: '5:00 PM',
    title: 'Departure from the Resort',
    description: 'We will depart from the resort and head back to the BRAC University campus.',
    icon: <FaFlagCheckered />,
  },
];

const Schedule = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="schedule" className="py-20 bg-gray-100 text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trip Schedule</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="border-l-2 border-blue-500 absolute h-full left-6 md:left-1/2 transform md:-translate-x-1/2"></div>
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex items-center w-full ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl z-10 ml-1">
                  {item.icon}
                </div>
                <div
                  className={`p-4 rounded-lg shadow-md bg-white flex-1 ${
                    index % 2 === 0 ? 'ml-4' : 'mr-4'
                  }`}
                >
                  <p className="font-bold">{item.time}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
