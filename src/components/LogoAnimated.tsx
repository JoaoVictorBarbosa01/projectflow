import React from 'react';
import { motion } from 'framer-motion';

// Logo simples com animação de scale e pulse suave
const LogoAnimated: React.FC = () => {
  return (
    <motion.div
      className="text-white text-5xl font-extrabold tracking-tight select-none"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-label="Logo animada do sistema"
      role="img"
    >
      Proj<span className="text-pink-400">Mind</span>
    </motion.div>
  );
};

export default LogoAnimated;
