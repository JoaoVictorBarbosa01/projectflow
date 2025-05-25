import React from 'react';
import { FaFileContract } from 'react-icons/fa';
import BackToHomeButton from '../components/BackToHomeButton';
import usePageTitle from "../hooks/usePageTitle";


const TermsOfUse: React.FC = () => {
 usePageTitle("Termos de Uso - ProjectFlow");
 
  return (
    <main className="max-w-4xl mx-auto p-6">
    <div className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-3xl text-left">
        <div className="flex items-center mb-6 text-indigo-600">
          <FaFileContract className="text-2xl mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Termos de Uso</h1>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ao utilizar a plataforma ProjectFlow, você concorda com os termos estabelecidos neste documento. Nossa ferramenta é destinada ao gerenciamento de projetos e seu uso deve respeitar princípios éticos, legais e de boa-fé.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Reservamo-nos o direito de atualizar estes termos sempre que necessário. Recomendamos que você os consulte periodicamente para estar ciente de quaisquer mudanças. O uso contínuo da plataforma implica aceitação das atualizações.
        </p><br/>
        <BackToHomeButton />
      </div>
    </div>
    </main>
  );
};

export default TermsOfUse;
