import React from 'react';
import { motion, Variants } from 'framer-motion';
import { AuditIcon, ProposalIcon, ImplementIcon } from './icons';

const containerVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  offscreen: { scale: 0.5, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const steps = [
  {
    icon: <AuditIcon className="w-12 h-12 text-brand-cyan" />,
    title: '1. Auditoría Inicial',
    description: 'Realizamos una llamada para entender a fondo tus necesidades, desafíos y objetivos.',
  },
  {
    icon: <ProposalIcon className="w-12 h-12 text-brand-cyan" />,
    title: '2. Propuesta Personalizada',
    description: 'Elaboramos una estrategia y propuesta detallada, mostrando cómo la IA puede transformar tu negocio.',
  },
  {
    icon: <ImplementIcon className="w-12 h-12 text-brand-cyan" />,
    title: '3. Implementación en 45 días',
    description: 'Desarrollamos e integramos la solución, con un plazo promedio de 45 días para la puesta en producción.',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Cómo Trabajamos</h2>
          <p className="mt-4 text-lg text-gray-400">Un proceso claro y eficiente para resultados garantizados.</p>
        </div>
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-700 -translate-y-1/2 mt-[-60px]"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center p-6"
              variants={itemVariants}
            >
              <div className="relative mb-6 bg-dark-bg">
                 <div className="absolute -inset-1.5 bg-brand-cyan rounded-full blur opacity-25"></div>
                 <div className="relative p-4 bg-gray-900 rounded-full border border-gray-700">
                    {step.icon}
                 </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
