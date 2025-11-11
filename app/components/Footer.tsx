import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 BRAC University Computer Club. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-600">Facebook</a>
          <a href="#" className="hover:text-gray-600">Twitter</a>
          <a href="#" className="hover:text-gray-600">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
