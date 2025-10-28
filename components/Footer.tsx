import React from 'react';
import { motion } from 'framer-motion';
import { LinkedInIcon, XIcon, InstagramIcon } from './icons';

const navLinks = [
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Casos de Uso', href: '#casos-de-uso' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: <LinkedInIcon className="h-6 w-6" /> },
  { name: 'X', href: '#', icon: <XIcon className="h-5 w-5" /> },
  { name: 'Instagram', href: '#', icon: <InstagramIcon className="h-6 w-6" /> },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="mb-4">
                <span className="block font-poppins font-black italic text-3xl tracking-wide text-white">CLICKARG</span>
                <span className="block font-poppins font-thin text-sm tracking-widest text-gray-400 -mt-1">Soluciones tecnológicas</span>
            </a>
            <p className="text-gray-400">Transformando negocios con IA.</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-brand-cyan transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-brand-cyan"
                  whileHover={{ scale: 1.2, y: -3 }}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-base text-gray-500">
            Clickarg © 2025 – Soluciones con IA desde Corrientes y Chaco.
          </p>
        </div>
      </div>
    </footer>
  );
};
