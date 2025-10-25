'use client';

import { motion } from 'framer-motion';
import { ASSETS } from '../../lib/assets';

export const Value = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              <div>Why Choose</div>
              <div className="text-[#2C9B47] font-serif italic">Minor Chores?</div>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-xl text-gray-600 leading-tight tracking-tight">
              We're more than just a platform. <br />
              We're your gateway to building a sustainable neighborhood business. <br />
              Together, we create opportunities that benefit everyone.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-[840px] rounded-2xl overflow-hidden"
        >
          <img
            src={ASSETS.value}
            alt="Minor Chores Value"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
