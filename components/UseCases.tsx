import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ClinicIcon, EcommerceIcon, RealEstateIcon } from './icons';

const useCases = [
  {
    icon: <ClinicIcon className="w-12 h-12 text-brand-cyan" />,
    title: 'Clínicas',
    description: 'Gestión de citas, recordatorios automáticos y resolución de preguntas frecuentes para mejorar la atención al paciente.',
    stats: '+40% en velocidad de respuesta'
  },
  {
    icon: <EcommerceIcon className="w-12 h-12 text-brand-cyan" />,
    title: 'E-commerce',
    description: 'Asistentes de compra, seguimiento de pedidos y soporte post-venta para aumentar la conversión y fidelidad.',
     stats: '+25% en tasa de conversión'
  },
  {
    icon: <RealEstateIcon className="w-12 h-12 text-brand-cyan" />,
    title: 'Inmobiliarias',
    description: 'Calificación de leads, agendamiento de visitas y atención 24/7 para no perder ninguna oportunidad de negocio.',
     stats: 'Incremento del LTV'
  },
];

const cardVariants: Variants = {
  rest: { y: 0, filter: 'blur(0px)' },
  hover: { y: -10, filter: 'blur(0px)', transition: { duration: 0.3 } }
};

const contentVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0.2, transition: { duration: 0.3 } }
};

const statsVariants: Variants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } }
};

export const UseCases: React.FC = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Casos de Aplicación</h2>
          <p className="mt-4 text-lg text-gray-400">Optimizamos negocios con alto flujo de mensajes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-dark-card border border-gray-800 rounded-xl overflow-hidden cursor-pointer flex flex-col items-center text-center"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
            >
              <motion.div variants={contentVariants} className="flex flex-col items-center">
                <div className="mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                variants={statsVariants}
              >
                <p className="text-2xl font-bold text-brand-cyan text-center">{useCase.stats}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
