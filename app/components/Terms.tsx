'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaShieldAlt, FaExclamationTriangle, FaMoneyBillWave, FaBan } from 'react-icons/fa';

const Terms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="terms" className="py-20 bg-gray-100 text-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-5xl font-bold text-center mb-6 section-title-gradient font-platform-bold">
          Terms and Conditions
        </h2>
        <div className="max-w-3xl mx-auto text-left px-4 bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside space-y-4 mt-4">
            <li className="flex items-start gap-2">
              <FaUsers className="mt-1 text-blue-600" />
              <span>
                <span className="font-semibold text-blue-600">Guardian Consent:</span> Participants confirm they have obtained <span className="font-bold">permission from a parent or guardian</span> to attend.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaShieldAlt className="mt-1 text-indigo-600" />
              <span>
                <span className="font-semibold text-blue-600">Code of Conduct:</span> All attendees must adhere to the <span className="font-bold">BRAC University Code of Conduct</span> throughout the event.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaExclamationTriangle className="mt-1 text-red-600" />
              <span>
                <span className="font-semibold text-blue-600">Liability:</span> <span className="font-bold text-red-600">BUCC is not responsible for any personal injury</span>, or any loss or damage to personal property.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaMoneyBillWave className="mt-1 text-green-600" />
              <span>
                <span className="font-semibold text-blue-600">Refund Policy:</span> Registration fees are <span className="font-bold">non-refundable</span>. The only exception is if participation is denied by BUCC due to reaching event capacity, in which case a <span className="font-bold text-green-600">full refund</span> will be processed.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaBan className="mt-1 text-yellow-600" />
              <span>
                <span className="font-semibold text-blue-600">Right to Deny Participation:</span> BUCC reserves the right to deny participation based on a <span className="font-bold">first-come, first-served</span> policy.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Terms;
