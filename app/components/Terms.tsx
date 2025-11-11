'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient">Terms and Conditions</h2>
        <div className="max-w-3xl mx-auto text-left">
          <p className="mb-4">
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
          <h3 className="text-xl font-bold mb-2">4. Photography and Videography</h3>
          <p className="mb-4">
            By attending the event, you consent to be photographed and filmed. The organizers reserve the right to use any photographs or videos for promotional purposes.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Terms;
