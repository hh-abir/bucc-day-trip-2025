'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBus, FaCoffee, FaUtensils, FaGamepad, FaUsers, FaMusic, FaFlagCheckered, FaWalking } from 'react-icons/fa';

const scheduleData = [
  {
    time: '7:00 AM',
    title: 'Arrival in Campus',
    description: 'All participants are requested to arrive at the campus on time.',
    icon: <FaWalking />,
  },
  {
    time: '7:30 AM',
    title: 'Journey Start',
    description: 'The bus will depart from the campus. Please ensure you are on board.',
    icon: <FaBus />,
  },
  {
    time: '9:30 AM',
    title: 'Ice Breaking Session',
    description: 'A fun session to get to know your fellow participants.',
    icon: <FaUsers />,
  },
  {
    time: '10:00 AM',
    title: 'Tic Tac Toe',
    description: 'Engage in a classic game of Tic Tac Toe with a twist!',
    icon: <FaGamepad />,
  },
  {
    time: '11:00 AM - 1:00 PM',
    title: 'Football & Cricket',
    description: 'Enjoy outdoor sports activities like Football and Cricket.',
    icon: <FaGamepad />,
  },
  {
    time: '1:00 PM - 2:30 PM',
    title: 'Lunch',
    description: 'A delicious lunch will be served.',
    icon: <FaUtensils />,
  },
  {
    time: '2:30 PM - 3:00 PM',
    title: 'Indoor Activity',
    description: 'Participate in various indoor games and activities.',
    icon: <FaGamepad />,
  },
  {
    time: '3:00 PM - 4:00 PM',
    title: 'Musical Chair',
    description: 'A lively game of musical chairs for everyone.',
    icon: <FaMusic />,
  },
  {
    time: '4:00 PM - 5:00 PM',
    title: 'Tug of War',
    description: 'Team up and test your strength in a game of Tug of War.',
    icon: <FaUsers />,
  },
  {
    time: '5:00 PM - 6:00 PM',
    title: 'Snacks & Closing Session',
    description: 'Enjoy some snacks and a closing session to wrap up the day.',
    icon: <FaCoffee />,
  },
  {
    time: '6:00 PM',
    title: 'Departure',
    description: 'The bus will depart for the campus.',
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
          className="max-w-2xl mx-auto relative"
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
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl z-10">
                  {item.icon}
                </div>
                <div
                  className={`p-4 rounded-lg shadow-md bg-white ${
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
