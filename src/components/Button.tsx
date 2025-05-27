import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import clsx from 'clsx';
import { MotionProps } from 'framer-motion';

// Tipagem correta para um botão com Framer Motion + atributos nativos
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'button'> & MotionProps;

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
  secondary: 'bg-primary-light text-white hover:bg-primary focus:ring-primary-light',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
};

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      className={clsx(
        `px-5 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 transition`,
        variants[variant],
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};
