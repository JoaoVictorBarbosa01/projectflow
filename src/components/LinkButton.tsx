import { Link, LinkProps } from "react-router-dom"; // Importa o componente de navegação e tipagem
import { motion } from "framer-motion";             // Para animações no botão
import clsx from "clsx";                            // Para combinar classes de forma condicional
import { ReactNode } from "react";

// Define as variantes de estilo do botão, igual ao Button.tsx
const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
  secondary: "bg-primary-light text-white hover:bg-primary focus:ring-primary-light",
  outline: "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
};

// Define as props esperadas pelo LinkButton
type LinkButtonProps = {
  to: string;                         // Caminho da rota
  variant?: "primary" | "secondary" | "outline"; // Estilo do botão (opcional, padrão = 'primary')
  children: ReactNode;               // Conteúdo dentro do botão (texto, ícone, etc.)
  className?: string;                // Classe adicional (se precisar customizar mais)
} & LinkProps;                       // Inclui todas as props nativas do Link do React Router

// Componente LinkButton: um botão com estilo que navega entre rotas
const LinkButton = ({
  to,
  children,
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) => {
  return (
    // O botão é um Link animado com motion.div
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "inline-block px-5 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 transition",
        variants[variant], // aplica estilo da variante
        className          // aplica classes adicionais
      )}
    >
      {/* Link do react-router-dom com estilos herdados do container pai */}
      <Link to={to} {...props} className="block w-full h-full">
        {children}
      </Link>
    </motion.div>
  );
};

export default LinkButton;
