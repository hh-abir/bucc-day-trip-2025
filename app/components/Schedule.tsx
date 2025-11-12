'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBus,
  FaCoffee,
  FaUtensils,
  FaGamepad,
  FaUsers,
  FaMusic,
  FaFlagCheckered,
  FaWalking,
} from 'react-icons/fa';

const scheduleData = [
  { time: '7:00 AM', title: 'Arrival in Campus', description: 'All participants are requested to arrive at the campus on time.', icon: <FaWalking /> },
  { time: '7:30 AM', title: 'Journey Start', description: 'The bus will depart from the campus. Please ensure you are on board.', icon: <FaBus /> },
  { time: '9:30 AM', title: 'Ice Breaking Session', description: 'A fun session to get to know your fellow participants.', icon: <FaUsers /> },
  { time: '10:00 AM', title: 'Tic Tac Toe', description: 'Engage in a classic game of Tic Tac Toe with a twist!', icon: <FaGamepad /> },
  { time: '11:00 AM - 1:00 PM', title: 'Football & Cricket', description: 'Enjoy outdoor sports activities like Football and Cricket.', icon: <FaGamepad /> },
  { time: '1:00 PM - 2:30 PM', title: 'Lunch', description: 'A delicious lunch will be served.', icon: <FaUtensils /> },
  { time: '2:30 PM - 3:00 PM', title: 'Indoor Activity', description: 'Participate in various indoor games and activities.', icon: <FaGamepad /> },
  { time: '3:00 PM - 4:00 PM', title: 'Musical Chair', description: 'A lively game of musical chairs for everyone.', icon: <FaMusic /> },
  { time: '4:00 PM - 5:00 PM', title: 'Tug of War', description: 'Team up and test your strength in a game of Tug of War.', icon: <FaUsers /> },
  { time: '5:00 PM - 6:00 PM', title: 'Snacks & Closing Session', description: 'Enjoy some snacks and a closing session to wrap up the day.', icon: <FaCoffee /> },
  { time: '6:00 PM', title: 'Departure', description: 'The bus will depart for the campus.', icon: <FaFlagCheckered /> },
];

const Schedule = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="schedule"
      ref={ref}
      className="py-20 bg-gradient-to-b from-blue-50 to-white text-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-platform-bold">
          Trip Schedule
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-blue-600 h-full rounded-full" />

          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline card */}
              <div
                className={`relative flex items-center w-full md:w-1/2 ${
                  index % 2 === 0
                    ? 'md:pr-10 md:text-right pl-16 md:pl-0'
                    : 'md:pl-10 md:text-left pl-16 md:pl-0'
                }`}
              >
                <motion.div
                  className="bg-white shadow-lg p-6 rounded-2xl border border-gray-100 relative z-10 hover:shadow-xl transition duration-300 md:max-w-[90%]"
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    {item.time}
                  </p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Icon */}
              <div
                className={`absolute ${
                  index % 2 === 0
                    ? 'md:left-[50%]'
                    : 'md:left-[50%]'
                } left-6 transform md:-translate-x-1/2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 shadow-md ring-4 ring-blue-100`}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
