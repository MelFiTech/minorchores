'use client';

import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { ASSETS } from '../../lib/assets';

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            From{' '}
            <span className="text-[#2C9B47] font-serif italic">Minor Chores</span> to{' '}
            <br />
            <span className="text-[#2C9B47] font-serif italic">Major Opportunities</span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-tight tracking-tight">
            Empowering the next generation by turning minor chores into major opportunities for personal growth and financial success.
          </p>
          <div className="flex justify-center mb-12">
            <Button size="lg" variant="primary">
              Download the App
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto"
          >
            <div className="w-full h-[600px] rounded-2xl overflow-hidden">
              <img
                src={ASSETS.preview}
                alt="Minor Chores App Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
