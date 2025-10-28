import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-black text-center overflow-hidden">
        <div 
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,207,255,0.1)_0%,transparent_30%)]"
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
                Tu negocio puede trabajar mejor con IA.
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Descubre el potencial oculto en tus operaciones y da el salto hacia el futuro.
            </p>
            <motion.button 
                className="mt-10 px-8 py-4 bg-brand-cyan text-black font-bold rounded-lg text-lg shadow-cyan-glow"
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
            >
                Agenda una auditoría gratuita
            </motion.button>
        </div>
    </section>
  );
};
