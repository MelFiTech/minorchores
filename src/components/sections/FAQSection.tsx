'use client';

import { motion } from 'framer-motion';
import { Accordion } from '../common/Accordion';

export const FAQSection = () => {
  const faqItems = [
    {
      id: '1',
      question: 'How do I get started as a young entrepreneur?',
      answer: 'Simply download the app, create your profile with parental approval, and start browsing available jobs in your neighborhood. You can set your own rates and schedule.'
    },
    {
      id: '2',
      question: 'Is the platform safe for children?',
      answer: 'Yes, safety is our top priority. All users are verified, parents have full oversight through the app, and we have strict safety protocols in place including background checks for adult users.'
    },
    {
      id: '3',
      question: 'How do parents monitor their children\'s activities?',
      answer: 'Parents receive real-time notifications about job bookings, can set geographic restrictions, monitor earnings, and have full access to their child\'s account activity through the parental dashboard.'
    },
    {
      id: '4',
      question: 'What types of jobs are available?',
      answer: 'Young entrepreneurs can find various opportunities like pet care, yard work, tutoring, tech support, house sitting, and other age-appropriate tasks that match their skills and interests.'
    },
    {
      id: '5',
      question: 'How do payments work?',
      answer: 'All payments are processed securely through the platform. Young entrepreneurs keep 100% of their earnings, and parents can track all financial activity. Payments are made directly to the child\'s account.'
    },
    {
      id: '6',
      question: 'Can I set my own rates?',
      answer: 'Absolutely! Young entrepreneurs have full control over their pricing. You can set different rates for different types of jobs and adjust them based on your experience and the complexity of the work.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Frequently Asked{' '}
              <span className="text-[#2C9B47] font-serif italic">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-tight tracking-tight">
              Everything you need to know about Minor Chores and how it works for families and young entrepreneurs.
            </p>
          </motion.div>

          {/* Right side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
