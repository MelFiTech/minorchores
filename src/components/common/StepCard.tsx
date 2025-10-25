'use client';

import { motion } from 'framer-motion';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export const StepCard = ({ number, title, description, index }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl"
    >
      <div className="w-12 h-12 bg-[#2C9B47] rounded-lg flex items-center justify-center mb-4">
        <span className="text-white font-bold text-lg">{number}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 leading-tight tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-tight tracking-tight">
        {description}
      </p>
    </motion.div>
  );
};
