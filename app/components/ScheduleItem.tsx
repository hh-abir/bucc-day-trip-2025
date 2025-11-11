'use client';

import { useState } from 'react';

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  iconColor: string;
}

const ScheduleItem = ({ time, title, description, iconColor }: ScheduleItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-all duration-300 ease-in-out hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center"
      >
        <div className="flex items-center">
          <div className={`w-4 h-4 rounded-full ${iconColor} mr-4`}></div>
          <span className="text-lg font-bold text-blue-600 mr-4">{time}</span>
          <span className="text-lg font-semibold">{title}</span>
        </div>
        <svg
          className={`w-6 h-6 text-gray-600 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4 pl-8 border-l-2 border-blue-200 ml-2">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ScheduleItem;
