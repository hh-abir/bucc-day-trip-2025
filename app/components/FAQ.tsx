'use client';

import React from 'react';
import FAQItem from './FAQItem';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqData = [
  {
    question: 'What is the dress code?',
    answer: 'The dress code is casual and comfortable. We recommend wearing something you can move around in for the activities.',
  },
  {
    question: 'What should I bring?',
    answer: 'We recommend bringing a water bottle, sunscreen, a hat, and a positive attitude! You might also want to bring a change of clothes if you plan on swimming.',
  },
  {
    question: 'Can I bring a friend?',
    answer: 'Yes, you can bring a friend as long as they are a student of BRAC University. They will also need to register for the event.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Unfortunately, we do not offer refunds. However, you can transfer your ticket to another student.',
  },
];

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-20 bg-white text-gray-900" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient">Frequently Asked Questions</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
