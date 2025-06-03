import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/img/background2.jpeg';
import logo from '../assets/logo/logoBranco2.png';
import LinkButton from "../components/LinkButton";

const LandingPage: React.FC = () => {
  usePageTitle("Home - ProjectFlow");

  return (
    <div
      className="relative h-screen w-full bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-90 z-0"></div>

      {/* Conteúdo principal centralizado */}
      <main className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Logo com animação */}
        <motion.img
          src={logo}
          alt="Logo ProjectFlow"
          className="w-34 h-24 mb-20 mr-6"
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 2.5 }}
          transition={{ duration: 1.5 }}
        
        />

        {/* Título */}
        <motion.h1
          className="text-4xl md:text-5l font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-l text-gray-300 mb-10 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Gerencie projetos, tarefas e equipes com simplicidade e eficiência.<br />
          Interface intuitiva e recursos poderosos.
        </motion.p>

        {/* Botões */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.5 }}
        >
          <LinkButton to="/Login" variant="primary">
            Login
          </LinkButton>
          <LinkButton to="/cadastrar" variant="primary">
            Cadastrar
          </LinkButton>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;
