'use client';

import { motion } from 'framer-motion';
import LogoLoop from '../common/LogoLoop';
import { ASSETS } from '../../lib/assets';

export const TickerSection = () => {
  // Company logos from Cloudinary
  const companyLogos = [
    {
      src: ASSETS.logo1,
      alt: "Partner Logo 1",
      title: "Partner 1",
      href: "#"
    },
    {
      src: ASSETS.logo2,
      alt: "Partner Logo 2", 
      title: "Partner 2",
      href: "#"
    },
    {
      src: ASSETS.logo3,
      alt: "Partner Logo 3",
      title: "Partner 3",
      href: "#"
    },
    {
      src: ASSETS.logo4,
      alt: "Partner Logo 4",
      title: "Partner 4",
      href: "#"
    },
    {
      src: ASSETS.logo5,
      alt: "Partner Logo 5",
      title: "Partner 5",
      href: "#"
    },
    {
      src: ASSETS.logo6,
      alt: "Partner Logo 6",
      title: "Partner 6",
      href: "#"
    }
  ];

  return (
    <section className="py-16 bg-[#2C9B47] border-t border-b border-[#2C9B47]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-medium text-white/90 mb-2">
          Featured In
          </h3>
        </motion.div>
        
        <div className="h-20 flex items-center">
          <LogoLoop
            logos={companyLogos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={60}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#2C9B47"
            scaleOnHover={true}
            ariaLabel="Partner companies"
          />
        </div>
      </div>
    </section>
  );
};
