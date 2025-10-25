'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../common/Button';
import { ASSETS } from '../../lib/assets';

export const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="min-h-[90vh] bg-[#FAFAFA] flex items-center px-4 -mt-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-none space-y-2">
              <div>
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
              className="text-xl md:text-xl text-gray-600 mb-12 leading-tight tracking-tight"
            >
              Turn your skills into income. Connect with neighbors who need help with everyday tasks. 
              Start earning today with our simple, secure platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="md" 
                variant="primary"
                className="w-full sm:w-auto"
              >
                Get Started Now
              </Button>
              <Button 
                size="md" 
                variant="outline"
                className="w-full sm:w-auto"
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
            className="flex justify-center lg:justify-end relative"
          >
            {/* Background layers */}
            <div className="absolute top-4 right-4 w-full max-w-lg h-[32rem] bg-gradient-to-br from-[#2C9B47]/5 to-[#2C9B47]/2 rounded-2xl border border-[#2C9B47]/10" />
            <div className="absolute top-2 right-2 w-full max-w-lg h-[32rem] bg-gradient-to-br from-[#2C9B47]/8 to-[#2C9B47]/4 rounded-2xl border border-[#2C9B47]/15" />
            
            {/* Main image */}
            <div className="relative w-full max-w-lg h-[32rem] rounded-2xl overflow-hidden">
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
          <div className="relative bg-white rounded-lg w-full max-w-3xl aspect-square">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://drive.google.com/file/d/1EPUb_wyO3JnkhyiqIYp2w-NJFe9h5mDc/preview"
              className="w-full h-full"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </section>
  );
};
