'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface BannerStripProps {
  message?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
}

export const BannerStrip = ({ 
  message = "✨ Sign up for FREE, earn money, and keep 100% (no credit card required)!", 
  showCloseButton = true,
  onClose 
}: BannerStripProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-black text-white py-3 px-4 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 text-center"
        >
          <p className="text-sm md:text-base font-medium">
            {message}
          </p>
        </motion.div>
        
        {showCloseButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onClick={handleClose}
            className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
