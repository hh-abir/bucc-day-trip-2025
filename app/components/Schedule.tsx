import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trip Schedule</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="border-l-2 border-blue-500 absolute h-full left-4"></div>
          <div className="mb-8 flex items-center w-full">
            <div className="bg-blue-500 rounded-full h-8 w-8 z-10"></div>
            <div className="pl-8">
              <p className="font-bold">9:00 AM</p>
              <p>Departure from BRAC University</p>
            </div>
          </div>
          <div className="mb-8 flex items-center w-full">
            <div className="bg-blue-500 rounded-full h-8 w-8 z-10"></div>
            <div className="pl-8">
              <p className="font-bold">11:00 AM</p>
              <p>Arrival at the Resort & Welcome Drinks</p>
            </div>
          </div>
          <div className="mb-8 flex items-center w-full">
            <div className="bg-blue-500 rounded-full h-8 w-8 z-10"></div>
            <div className="pl-8">
              <p className="font-bold">1:00 PM</p>
              <p>Lunch</p>
            </div>
          </div>
          <div className="mb-8 flex items-center w-full">
            <div className="bg-blue-500 rounded-full h-8 w-8 z-10"></div>
            <div className="pl-8">
              <p className="font-bold">2:00 PM - 5:00 PM</p>
              <p>Activities & Games</p>
            </div>
          </div>
          <div className="flex items-center w-full">
            <div className="bg-blue-500 rounded-full h-8 w-8 z-10"></div>
            <div className="pl-8">
              <p className="font-bold">5:00 PM</p>
              <p>Departure from the Resort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
