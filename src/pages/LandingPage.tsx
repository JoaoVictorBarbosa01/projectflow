import React from 'react';
import { Button } from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/img/background.jpeg';
import logo from '../assets/logo/logoBranco2.png';

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
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Conteúdo principal centralizado */}
      <main className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Logo com animação */}
        <motion.img
          src={logo}
          alt="Logo ProjectFlow"
          className="w-38 h-24 mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.6 }}
        
        />

        {/* Título */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bem-vindo
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg text-gray-300 mb-10 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Gerencie projetos, tarefas e equipes com simplicidade e eficiência.<br />
          Interface intuitiva e recursos poderosos.
        </motion.p>

        {/* Botões */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="primary" className="px-6 py-3 rounded-lg font-semibold">
            Login
          </Button>
          <Button variant="secondary" className="px-6 py-3 rounded-lg font-semibold">
            Cadastrar
          </Button>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;
