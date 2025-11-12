'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaWalking,
  FaBus,
  FaCoffee,
  FaUsers,
  FaGamepad,
  FaMusic,
  FaUtensils,
  FaPrayingHands,
  FaFlagCheckered
} from 'react-icons/fa';

const scheduleData = [
  { time: '7:00 AM', title: 'Arrival in Campus', description: 'All participants are requested to arrive at the campus on time.', icon: <FaWalking /> },
  { time: '7:30 AM', title: 'Journey Start', description: 'The bus will depart from the campus. Please ensure you are on board.', icon: <FaBus /> },
  { time: '8:30 AM', title: 'Breakfast (On Journey)', description: 'Enjoy breakfast while traveling to the resort.', icon: <FaCoffee /> },
  { time: '9:30 AM', title: 'Arrival at Resort', description: 'Reach the resort and get ready for the day’s activities.', icon: <FaWalking /> },
  { time: '10:00 AM', title: 'Ice Breaking Session', description: 'A fun session to get to know your fellow participants.', icon: <FaUsers /> },
  { time: '11:00 AM', title: 'Activities (Games, Pool, Etc.)', description: 'Enjoy various games and pool activities at the resort.', icon: <FaGamepad /> },
  { time: '1:30 PM - 1:45 PM', title: 'Jummah Namaz', description: "Take a short break for Jummah prayer. Please gather at the designated prayer area on time.", icon: <FaPrayingHands /> },
  { time: '2:00 PM - 3:00 PM', title: 'Lunch', description: 'A delicious lunch will be served.', icon: <FaUtensils /> },
  { time: '3:00 PM - 4:30 PM', title: 'More Activities (Culture Programs, Fun Time, Etc.)', description: 'Enjoy cultural programs, fun activities, and free time.', icon: <FaMusic /> },
  { time: '4:45 PM - 5:15 PM', title: 'Snacks & Closing Session', description: 'Grab some snacks and join the closing session.', icon: <FaCoffee /> },
  { time: '5:30 PM', title: 'Departure', description: 'The bus will depart for the campus. Don’t forget your belongings.', icon: <FaFlagCheckered /> },
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
                    ? 'md:pr-8 md:text-right pl-16 md:pl-0'
                    : 'md:pl-8 md:text-left pl-16 md:pl-0'
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
