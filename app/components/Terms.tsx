'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Terms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="terms" className="py-20 bg-gray-100 text-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient">Terms and Conditions</h2>
        <div className="max-w-3xl mx-auto text-left px-4 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpanded}>
            <h3 className="text-xl font-bold">Read our Terms and Conditions</h3>
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <p className="mt-4 mb-4">
              By registering for this event, you agree to the following terms and conditions. Please read them carefully.
            </p>
            <h3 className="text-xl font-bold mb-2">1. Registration and Payment</h3>
            <p className="mb-4">
              Registration is not confirmed until full payment has been received. All payments are non-refundable.
            </p>
            <h3 className="text-xl font-bold mb-2">2. Code of Conduct</h3>
            <p className="mb-4">
              All participants are expected to behave in a professional and respectful manner. Any form of harassment or misconduct will not be tolerated and may result in immediate expulsion from the event without a refund.
            </p>
            <h3 className="text-xl font-bold mb-2">3. Liability</h3>
            <p className="mb-4">
              The organizers will not be held liable for any personal injury, loss, or damage to property during the event.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Terms;
