'use client';

import React from 'react';
import ScheduleItem from './ScheduleItem';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBus, FaCoffee, FaUtensils, FaGamepad, FaFlagCheckered } from 'react-icons/fa';

const scheduleData = [
  {
    time: '9:00 AM',
    title: 'Departure from BRAC University',
    description: 'We will depart from the BRAC University campus by bus. Please be on time!',
    icon: <FaBus className="text-red-500" />,
  },
  {
    time: '11:00 AM',
    title: 'Arrival at the Resort & Welcome Drinks',
    description: 'Upon arrival, you will be greeted with welcome drinks and a chance to settle in.',
    icon: <FaCoffee className="text-green-500" />,
  },
  {
    time: '1:00 PM',
    title: 'Lunch',
    description: 'A delicious buffet lunch will be served with a variety of options to choose from.',
    icon: <FaUtensils className="text-yellow-500" />,
  },
  {
    time: '2:00 PM - 5:00 PM',
    title: 'Activities & Games',
    description: 'Get ready for a fun-filled afternoon with team-building activities, a coding competition, and other games.',
    icon: <FaGamepad className="text-purple-500" />,
  },
  {
    time: '5:00 PM',
    title: 'Departure from the Resort',
    description: 'We will depart from the resort and head back to the BRAC University campus.',
    icon: <FaFlagCheckered className="text-indigo-500" />,
  },
];

const Schedule = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="schedule" className="py-20 bg-gray-100 text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trip Schedule</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-2xl mx-auto relative"
        >
          {/* This div creates the vertical line for the timeline effect */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-300 hidden md:block"></div>
          {scheduleData.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="relative md:pl-12">
              {/* This div creates the circle on the timeline */}
              <div className="hidden md:block absolute left-4 top-6 w-4 h-4 rounded-full bg-blue-500 z-10"></div>
              <ScheduleItem
                time={item.time}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
