import React from 'react';

const CTA = () => {
  return (
    <section id="register" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Join?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Don't miss out on this exciting opportunity to connect with the BUCC community and have a great time.
          Register now to secure your spot!
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default CTA;
