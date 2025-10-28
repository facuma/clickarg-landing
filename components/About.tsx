import React from 'react';
import { motion, Variants } from 'framer-motion';

const sentence: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.04,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const text = "Desarrollamos soluciones 100% adaptadas a la cultura de tu organización.";

export const About: React.FC = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          {text.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
};
