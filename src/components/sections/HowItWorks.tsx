'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StepCard } from '../common/StepCard';
import { Tabs } from '../common/Tabs';
import { ASSETS } from '../../lib/assets';

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('chorepreneur');

  const parentSteps = [
    {
      number: "01",
      title: "Create Family Profile",
      description: "Set up your family account and add your children's profiles. Verify their age and set parental controls."
    },
    {
      number: "02", 
      title: "Browse Local Services",
      description: "Find trusted young entrepreneurs in your neighborhood. Filter by age, skills, and ratings."
    },
    {
      number: "03",
      title: "Book & Monitor",
      description: "Book services for your family. Monitor progress and communicate with service providers."
    },
    {
      number: "04",
      title: "Review & Pay",
      description: "Review completed work, rate the service, and make secure payments through the platform."
    }
  ];

  const chorepreneurSteps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up with parental approval and showcase your skills. Add photos and set your availability."
    },
    {
      number: "02", 
      title: "Browse Local Jobs",
      description: "Find tasks in your neighborhood that match your skills. Filter by distance, pay, and schedule."
    },
    {
      number: "03",
      title: "Connect & Communicate",
      description: "Chat with customers about job details. Ask questions and confirm expectations before starting."
    },
    {
      number: "04",
      title: "Complete & Get Paid",
      description: "Finish the job, get rated, and receive payment directly. Build your reputation in the community."
    }
  ];

  const customerSteps = [
    {
      number: "01",
      title: "Sign Up & Verify",
      description: "Create your account and verify your identity. Set your location and service preferences."
    },
    {
      number: "02", 
      title: "Post Your Needs",
      description: "Describe the tasks you need help with. Set your budget and preferred timeline."
    },
    {
      number: "03",
      title: "Choose Provider",
      description: "Review proposals from young entrepreneurs. Check their profiles, ratings, and previous work."
    },
    {
      number: "04",
      title: "Hire & Pay",
      description: "Hire your chosen provider, track progress, and make secure payments upon completion."
    }
  ];

  const tabs = [
    { id: 'parent', label: 'Parent' },
    { id: 'chorepreneur', label: 'Chore-preneur' },
    { id: 'customer', label: 'Chore Customer' }
  ];

  const getCurrentSteps = () => {
    switch (activeTab) {
      case 'parent':
        return parentSteps;
      case 'chorepreneur':
        return chorepreneurSteps;
      case 'customer':
        return customerSteps;
      default:
        return chorepreneurSteps;
    }
  };

  return (
    <section className="py-20 bg-[#FAFAFA]">
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
            How{' '}
            <span className="text-[#2C9B47] font-serif italic">Minor Chores</span>{' '}
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-tight tracking-tight">
            Download Minor Chores on IOS or Android, the first app for young entrepreneurs to start profitable neighborhood businesses safely.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Tabs tabs={tabs} defaultTab="chorepreneur" onTabChange={setActiveTab} />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Steps Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {getCurrentSteps().map((step, index) => (
              <StepCard
                key={`${activeTab}-${index}`}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </motion.div>

          {/* Right side - Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src={ASSETS.how}
                alt="How Minor Chores Works"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
