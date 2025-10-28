import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Abstract technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
      </div>
      <motion.div
        className="relative z-10 px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter"
          variants={itemVariants}
        >
          Transforma tu negocio con la potencia de la Inteligencia Artificial
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Ahorra tiempo, reduce costos y eleva la experiencia de tus clientes a un nuevo nivel.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button 
            className="mt-10 px-8 py-4 bg-brand-cyan text-black font-bold rounded-lg text-lg shadow-cyan-glow transform transition-transform duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar auditoría gratuita
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
