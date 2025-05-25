import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import BackToHomeButton from '../components/BackToHomeButton';
import usePageTitle from "../hooks/usePageTitle";

const PrivacyPolicy: React.FC = () => {
usePageTitle("Política de Privacidade - ProjectFlow");

  return (
    <main className="max-w-4xl mx-auto p-6">
    <div className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-3xl text-left">
        <div className="flex items-center mb-6 text-indigo-600">
          <FaShieldAlt className="text-2xl mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Política de Privacidade</h1>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          No ProjectFlow, a privacidade dos nossos usuários é uma prioridade. Todos os dados fornecidos por você são armazenados com segurança e utilizados exclusivamente para melhorar sua experiência com nossa plataforma.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Garantimos que suas informações não serão compartilhadas com terceiros sem consentimento. Utilizamos tecnologias modernas de criptografia, autenticação e segurança de dados para proteger seu acesso e seus projetos.
        </p>< br/>
        <BackToHomeButton />
      </div>
    </div>
    </main>
  );
};

export default PrivacyPolicy;
