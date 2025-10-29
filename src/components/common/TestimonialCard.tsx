'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index: number;
}

export const TestimonialCard = ({ name, role, content, rating, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-gray-100 h-full"
    >
      {/* Rating Stars */}
      <div className="flex items-center mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 italic">
        "{content}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2C9B47] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
          <span className="text-white font-semibold text-base sm:text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-sm sm:text-base text-gray-900 truncate">{name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
