'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

export const Tabs = ({ tabs, defaultTab, onTabChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  // Scroll into view when tab changes (mobile)
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Mobile only: scroll selected tab into view
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    if (isMobile && containerRef.current && btnRefs.current && activeTab) {
      const idx = tabs.findIndex((tab) => tab.id === activeTab);
      const btn = btnRefs.current[idx];
      if (btn && btn.scrollIntoView) {
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="w-full mb-8">
        <div
          className="
            flex border-b-2 border-gray-200
            overflow-x-auto scrollbar-hide sm:overflow-x-visible
            sm:justify-start
            whitespace-nowrap
            "
          ref={containerRef}
        >
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              ref={el => { btnRefs.current[idx] = el; }}
              onClick={() => handleTabClick(tab.id)}
              className={`
                px-6 py-3 font-medium transition-all duration-200
                whitespace-nowrap
                sm:flex-1
                flex-shrink-0
                ${activeTab === tab.id
                  ? 'text-[#2C9B47] border-b-2 border-[#2C9B47] -mb-0.5'
                  : 'text-gray-600 hover:text-[#2C9B47]'
                }
              `}
              style={{
                minWidth: "min(140px, 80vw)",
                flex: '0 0 auto', // On mobile allow slide
              }}
            >
              <span className="block truncate">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Content will be passed as children */}
      </motion.div>
    </div>
  );
};
