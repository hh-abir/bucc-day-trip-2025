'use client';

import React from 'react';
import FAQItem from './FAQItem';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqData = [
  {
    question: 'Can I bring a friend?',
    answer: 'Yes, you can bring a friend as long as they are a BUCC member. They will also need to register for the event.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Refunds will only be issued if the event is cancelled by the organizers.',
  },
  {
    question: 'Who can I contact for general communication?',
    answer: (
      <>
        Abrar Shaleheen <br />
        Senior Executive, Communication & Marketing <br />
        Cell No: 01765859336 <br /><br />
        Nowrin Afrin <br />
        Senior Executive, Event Management <br />
        Cell No: 01617611664
      </>
    ),
  },
  {
    question: 'Who can I contact for payment related issues?',
    answer: (
      <>
        Jauad Ahmed Sadik <br />
        Senior Executive, Finance <br />
        Cell No: 01732644303
      </>
    ),
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
        <h2 className="text-3xl font-bold text-center mb-12 section-title-gradient font-platform-bold">Frequently Asked Questions</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-4"
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
