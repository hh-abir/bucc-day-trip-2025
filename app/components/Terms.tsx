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
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient font-platform-bold">Terms and Conditions</h2>
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
            <ul className="list-disc list-inside space-y-3 mt-4">
              <li>
                <span className="font-semibold">Guardian Consent:</span> Participants confirm they have obtained permission from a parent or guardian to attend.
              </li>
              <li>
                <span className="font-semibold">Code of Conduct:</span> All attendees must adhere to the BRAC University Code of Conduct throughout the event.
              </li>
              <li>
                <span className="font-semibold">Liability:</span> BRAC University Computer Club (BUCC) is not responsible for any personal injury, or any loss or damage to personal property.
              </li>
              <li>
                <span className="font-semibold">Refund Policy:</span> Registration fees are non-refundable. The only exception is if participation is denied by BUCC due to reaching event capacity, in which case a full refund will be processed.
              </li>
              <li>
                <span className="font-semibold">Right to Deny Participation:</span> To manage capacity, BUCC reserves the right to deny participation based on a first-come, first-served policy.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Terms;
