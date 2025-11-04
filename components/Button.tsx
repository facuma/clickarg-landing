
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const primaryClasses = "bg-brand-cyan text-black";
  const secondaryClasses = "bg-transparent border border-brand-cyan text-brand-cyan";

  return (
    <motion.button
      className={`mt-10 px-8 py-4 font-bold rounded-lg text-lg shadow-cyan-glow ${variant === 'primary' ? primaryClasses : secondaryClasses}`}
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
      {...props}
    >
      {children}
    </motion.button>
  );
};
