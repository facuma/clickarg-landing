import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TimeIcon, MoneyIcon, ExperienceIcon } from './icons';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const benefits = [
  {
    icon: <TimeIcon className="w-10 h-10 text-brand-cyan" />,
    title: 'Ahorra Tiempo',
    description: 'Automatiza tareas repetitivas y libera a tu equipo para que se enfoque en lo que realmente importa.',
  },
  {
    icon: <MoneyIcon className="w-10 h-10 text-brand-cyan" />,
    title: 'Ahorra Dinero',
    description: 'Optimiza procesos, reduce errores humanos y mejora la asignación de recursos para un ROI medible.',
  },
  {
    icon: <ExperienceIcon className="w-10 h-10 text-brand-cyan" />,
    title: 'Mejora la Experiencia',
    description: 'Ofrece respuestas instantáneas y personalizadas 24/7, aumentando la satisfacción y lealtad del cliente.',
  },
];

export const WhyAI: React.FC = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-8 bg-dark-card backdrop-blur-sm border border-gray-800 rounded-xl text-center"
              variants={cardVariants}
            >
              <div className="flex justify-center mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
