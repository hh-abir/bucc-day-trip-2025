import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About the Trip</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          The BUCC Day Long Trip is an annual event for all members of the BRAC University Computer Club.
          This year, we're heading to a beautiful resort for a day of fun, food, and exciting activities.
          It's a great opportunity to connect with fellow members, learn from each other, and make lasting memories.
        </p>
        <div className="flex justify-center space-x-8">
          <div>
            <h3 className="text-xl font-bold">Date</h3>
            <p className="text-lg">December 5, 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-lg">A beautiful resort (TBA)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
