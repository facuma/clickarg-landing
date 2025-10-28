import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0">
            <div>
              <span className="block font-poppins font-black italic text-3xl tracking-wide text-white">CLICKARG</span>
              <span className="block font-poppins font-thin text-sm tracking-widest text-gray-400 -mt-1">Soluciones tecnológicas</span>
            </div>
          </a>
          <motion.button 
            className="hidden md:block px-6 py-2 bg-brand-cyan text-black font-bold rounded-lg text-base shadow-cyan-glow transform transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar auditoría gratuita
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};
