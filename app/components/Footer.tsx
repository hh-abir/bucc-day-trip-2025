'use client';

import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* About BUCC Section */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/bucc.svg" alt="BUCC Logo" className="h-8 w-8 mr-2 bg-white p-1 rounded-full" />
            <h3 className="text-xl font-bold">BUCC</h3>
          </div>
          <p>BRAC University Computer Club is a community of tech enthusiasts and learners.</p>
        </div>

        {/* Quick Links (Example) */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#about" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#schedule" className="hover:underline">Schedule</a></li>
            <li className="mb-2"><a href="#venue" className="hover:underline">Venue</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" /> Email: bucc@g.bracu.ac.bd
          </p>
          <p className="flex items-center">
            <FaGlobe className="mr-2" /> Website: <a href="https://www.bracucc.org/" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">www.bracucc.org</a>
          </p>
        </div>

        {/* Google Map */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Location Map</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9400000000004!2d90.39945200000001!3d23.840330000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755d99d3803b7cd%3A0xe68b9ebcb437c3db!2sSAHEB%20BARI%20RESORT!5e0!3m2!1sen!2sbd!4v1678912345678!5m2!1sen!2sbd"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} BUCC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
