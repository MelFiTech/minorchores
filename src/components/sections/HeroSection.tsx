'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../common/Button';
import { ASSETS } from '../../lib/assets';

export const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="min-h-screen bg-[#FAFAFA] flex items-center px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left order-2 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <div className="mb-1">
                Kickstart a{' '}
                <span className="text-[#2C9B47] font-serif italic">Neighborhood</span>
              </div>
              <div>
                Business in{' '}
                <span className="text-[#2C9B47] font-serif italic">Minutes</span>
              </div>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed"
            >
              Turn your skills into income. Connect with neighbors who need help with everyday tasks. 
              Start earning today with our simple, secure platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button 
                size="md" 
                variant="primary"
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Get Started Now
              </Button>
              <Button 
                size="md" 
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base"
                onClick={() => setShowVideo(true)}
              >
                Watch Video
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Hero Image with stack effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            {/* Background layers - responsive sizing */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] bg-gradient-to-br from-[#2C9B47]/5 to-[#2C9B47]/2 rounded-xl sm:rounded-2xl border border-[#2C9B47]/10" />
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] bg-gradient-to-br from-[#2C9B47]/8 to-[#2C9B47]/4 rounded-xl sm:rounded-2xl border border-[#2C9B47]/15" />
            
            {/* Main image - responsive sizing */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src={ASSETS.hero}
                alt="Minor Chores Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://drive.google.com/file/d/1EPUb_wyO3JnkhyiqIYp2w-NJFe9h5mDc/preview"
              className="w-full h-full rounded-lg"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </section>
  );
};
