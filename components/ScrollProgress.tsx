import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  name: string;
}

interface ScrollProgressProps {
  sections: Section[];
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } 
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleDotClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-40 hidden lg:flex">
      <ul className="flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <li key={section.id} className="relative group">
            <button
              onClick={() => handleDotClick(section.id)}
              className="flex items-center"
              aria-label={`Ir a la sección ${section.name}`}
            >
              <span className="absolute right-full mr-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {section.name}
              </span>
              <motion.div
                className="w-3 h-3 rounded-full border-2 border-brand-cyan transition-colors"
                animate={{
                  backgroundColor: activeSection === section.id ? '#00CFFF' : 'transparent',
                  scale: activeSection === section.id ? 1.5 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              ></motion.div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
