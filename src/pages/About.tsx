import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import BackToHomeButton from '../components/BackToHomeButton';
import usePageTitle from "../hooks/usePageTitle";

const About: React.FC = () => {
usePageTitle("Sobre - ProjectFlow");

  return (
     <main className="max-w-4xl mx-auto p-6">
        <div className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
        <div className="max-w-3xl text-left">
            <div className="flex items-center justify-center mb-6 text-indigo-600">
            <FaRegLightbulb className="text-4xl mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Sobre Nós</h1>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
            O <strong>ProjectFlow</strong> nasceu da observação prática de um problema comum em empresas e equipes: a dificuldade de manter projetos organizados, equipes alinhadas e prazos sob controle. A partir dessa necessidade real, desenvolvemos uma plataforma completa, intuitiva e moderna, voltada para facilitar o gerenciamento de projetos, tarefas e times.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
            Nossa missão é simplificar o processo de gestão sem perder robustez. Com recursos visuais, relatórios inteligentes e uma interface responsiva, queremos transformar a forma como pessoas e empresas planejam, executam e monitoram suas atividades diárias.
            </p><br/>
            <BackToHomeButton />
        </div>
        </div>
     </main>
  );
};

<BackToHomeButton />

export default About;
