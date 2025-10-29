'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl h-full flex flex-col"
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#2C9B47] rounded-lg flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0">
        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
          {icon}
        </div>
      </div>
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};
