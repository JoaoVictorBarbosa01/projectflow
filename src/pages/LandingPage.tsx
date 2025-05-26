import React from 'react';
import { Button } from '../components/Button';
import dashboardImg from '../assets/img/dashboard.jpg'; 
import { motion } from 'framer-motion';
import { FaTasks, FaUsers, FaChartLine } from 'react-icons/fa'; // importar ícones no topo do arquivo
import projectManagementGif from '../assets/gifs/project-management2.gif';
import usePageTitle from "../hooks/usePageTitle";

const LandingPage: React.FC = () => {
usePageTitle("Home - ProjectFlow");
  return (
    <div className="bg-gray-50">
      {/* Conteúdo principal */}
      <main className="flex-grow">
        {/* Seção Hero com fundo gradiente e layout em grid */}
        <section
          className="
            pt-28 pb-20 px-6 md:px-12 lg:px-24
            bg-gradient-to-r from-indigo-50 via-white to-indigo-50
            grid grid-cols-1 md:grid-cols-2 gap-12 items-center
            text-center md:text-left
          "
        >
          {/* Texto Hero */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Organize seus projetos com facilidade
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-10 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Uma plataforma intuitiva para gerenciar tarefas, equipes e produtividade.
            </motion.p>

            {/* Botões com hover */}
            <div className="flex justify-center md:justify-start space-x-4">
              <Button
                variant="primary"
                className="px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105">
                Começar agora
              </Button>
            </div>
          </div>

          {/* Mockup com animação suave de zoom */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="max-w-4xl w-full rounded-3xl shadow-2xl border border-gray-300 overflow-hidden bg-white">
              {/* Barra superior do mockup */}
              <div className="h-8 bg-gray-200 flex items-center px-5 space-x-3 rounded-t-3xl">
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
                <span className="w-4 h-4 rounded-full bg-green-500"></span>
              </div>
              {/* Imagem da tela */}
              <img
                src={dashboardImg}
                alt="Interface do sistema"
                className="w-full object-cover"
                style={{ aspectRatio: '16 / 9' }}
              />
            </div>
          </motion.div>
        </section>

       {/* Seção de Recursos */}
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Recursos que facilitam sua rotina
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Nossa plataforma oferece as ferramentas certas para otimizar a gestão de projetos e aumentar a produtividade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Gestão de Tarefas */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
              {/* Ícone representando tarefas */}
              <FaTasks className="text-indigo-600 mb-4 w-12 h-12" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gestão de Tarefas</h3>
              <p className="text-gray-600 text-center">
                Crie, atribua e acompanhe tarefas em tempo real com facilidade.
              </p>
            </div>

            {/* Card 2 - Colaboração em Equipe */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
              {/* Ícone representando equipe */}
              <FaUsers className="text-indigo-600 mb-4 w-12 h-12" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Colaboração em Equipe</h3>
              <p className="text-gray-600 text-center">
                Compartilhe ideias, envie comentários e mantenha sua equipe sincronizada.
              </p>
            </div>

            {/* Card 3 - Relatórios Inteligentes */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
              {/* Ícone representando relatórios */}
              <FaChartLine className="text-indigo-600 mb-4 w-12 h-12" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Relatórios Inteligentes</h3>
              <p className="text-gray-600 text-center">
                Visualize o progresso com relatórios automáticos e gráficos interativos.
              </p>
            </div>
          </div>
        </section>

        {/* Seção de Demonstração com GIF */}
          <section className="bg-indigo-50 py-20 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto da chamada */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">
                Comece a gerenciar seus projetos com eficiência agora mesmo!
              </h2>
              <p className="text-indigo-700 mb-6 max-w-lg">
                Experimente uma plataforma intuitiva que ajuda você a planejar, organizar e acompanhar cada etapa do seu projeto.
              </p>
              <Button variant="primary" className="px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105">
                Teste grátis por 14 dias
              </Button>
            </motion.div>

           {/* GIF animado */}
            <div className="mt-12 flex justify-center px-4">
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-xl w-full max-w-[520px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img
                  src={projectManagementGif}
                  alt="Demonstração da gestão de projetos"
                  className="w-full h-auto object-contain max-h-[400px] mx-auto"
                />
              </motion.div>
            </div>


          </section>
      </main>
    </div>
  );
};

export default LandingPage;