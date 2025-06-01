import React, { useState } from "react";  // useState para controlar o menu aberto/fechado
import { motion } from "framer-motion";  // Para animações
import LogoImage from "../assets/logo/logo.webp"; // Importa logo
import LinkButton from "../components/LinkButton";

export const Navbar: React.FC = () => {
  // Estado para abrir/fechar menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Navbar fixa no topo com fundo branco translúcido e sombra
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-4 z-50"
      initial={{ y: -50, opacity: 0 }} // Animação inicial: sair de cima e invisível
      animate={{ y: 0, opacity: 1 }}   // Animação final: desliza para baixo e aparece
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Grupo com logo e nome do projeto */}
      <div className="flex items-center space-x-3">
        <img src={LogoImage} alt="ProjectFlow Logo" className="h-14 w-auto" />
        <motion.span
          className="text-primary font-bold text-xl select-none"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
        </motion.span>
      </div>

      {/* Botões para desktop - escondidos em telas pequenas */}
      <div className="hidden sm:flex space-x-3">
        <LinkButton to="/" variant="primary">
          Login
        </LinkButton>
        <LinkButton to="/cadastrar" variant="primary">
          Cadastrar
        </LinkButton>
      </div>

      {/* Botão hamburger para mobile - visível só abaixo de "sm" */}
      <button
        className="sm:hidden p-2 rounded-md text-primary hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu mobile
        aria-label="Abrir menu"
      >
        {/* Ícone muda conforme estado do menu */}
        {isMenuOpen ? (
          // Ícone X para fechar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Ícone hamburguer para abrir
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menu dropdown mobile - aparece quando isMenuOpen é true */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-3 py-4 sm:hidden"
        >
          {/* Botões do menu mobile */}
          <LinkButton to="/" variant="primary">
            Login
          </LinkButton>
          <LinkButton to="/cadastrar" variant="primary">
            Cadastrar
          </LinkButton>
        </motion.div>
      )}
    </motion.nav>
  );
};
export default Navbar;