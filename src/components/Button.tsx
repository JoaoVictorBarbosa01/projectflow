import React, { ReactNode } from 'react';   // Importa React e ReactNode para filhos
import { motion } from 'framer-motion';    // Importa Framer Motion para animações

// Interface para definir as props do botão com tipagem TypeScript
interface ButtonProps {
  children: ReactNode;       // Conteúdo dentro do botão (texto, ícone)
  onClick?: () => void;      // Função opcional para evento de clique
  variant?: 'primary' | 'secondary' | 'outline';  // Variações de estilo
  disabled?: boolean;        // Estado desabilitado
  className?: string;        // Classes CSS extras para customização
}

// Objetivo: definir as classes Tailwind para cada variante de botão
const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
  secondary: 'bg-primary-light text-white hover:bg-primary focus:ring-primary-light',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
};

// Componente Button com animações e suporte a disabled e acessibilidade
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',   // Define o padrão para primary
  disabled = false,      // Padrão é habilitado
  className = '',        // Classes adicionais extras
}) => {
  return (
    <motion.button
      // Evento de clique só chama se não estiver desabilitado
      onClick={!disabled ? onClick : undefined}
      // Classes Tailwind:
      // px e py para padding, rounded-md para bordas arredondadas
      // font-semibold para destaque no texto
      // focus:outline-none e focus:ring-2 para foco visível
      // transition para animação suave
      // adiciona classes conforme a variante
      // adiciona classes extras que vieram por prop
      // adiciona cursor-not-allowed se disabled
      className={`
        px-5 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 transition
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      // Animação ao passar mouse (hover) só se não estiver desabilitado
      whileHover={!disabled ? { scale: 1.05 } : {}}
      // Animação ao clicar (tap) só se não estiver desabilitado
      whileTap={!disabled ? { scale: 0.95 } : {}}
      // Acessibilidade: aria-disabled para indicar estado para leitores de tela
      aria-disabled={disabled}
      // Desabilita nativamente o botão (impede eventos e foco)
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
