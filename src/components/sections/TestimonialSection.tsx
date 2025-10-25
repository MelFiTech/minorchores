'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from '../common/TestimonialCard';

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "Minor Chores has been amazing for our family. My daughter earns money doing what she loves. The platform is safe and simple.",
      rating: 5
    },
    {
      name: "Marcus Chen", 
      role: "Chore-preneur",
      content: "I can set my own schedule with Minor Chores. The platform helps me save for college. I've made great connections here.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Parent", 
      content: "The service quality is outstanding. Young entrepreneurs are professional and reliable. Supporting local youth is rewarding.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Chore-preneur",
      content: "I've learned real business skills here. Customer service has become my strength. Earning while learning is fantastic.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      role: "Parent",
      content: "Creates such positive community impact. Makes everything secure and simple. Love seeing youth succeed.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Chore-preneur",
      content: "Developed strong service skills here. Great platform to earn money. Preparing me for the future.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            What Our{' '}
            <span className="text-[#2C9B47] font-serif italic">Community</span>
            {' '}Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-tight tracking-tight">
            Hear from parents, young entrepreneurs, and community members who are building stronger neighborhoods together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          {/* Top row - moves left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
                <div key={`top-${index}`} className="flex-shrink-0 w-80 mr-8">
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    index={index}
                  />
                </div>
              ))}
            </div>
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

          {/* Bottom row - moves right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
                <div key={`bottom-${index}`} className="flex-shrink-0 w-80 mr-8">
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    index={index}
                  />
                </div>
              ))}
            </div>
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
