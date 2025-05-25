

import React from 'react';
import dashboardImg from '../assets/img/dashboard.jpg'; // Caminho da imagem



export const DashboardMockup = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 w-full max-w-4xl relative">
        {/* Moldura do notebook */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gray-700 rounded-full z-10" />
        
        {/* Tela */}
        <div className="rounded-xl overflow-hidden border-4 border-gray-800 shadow-lg">
          <img
            src={dashboardImg}
            alt="Dashboard"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Base do notebook */}
        <div className="mt-2 h-5 bg-gray-800 rounded-b-xl" />
      </div>
    </div>
  );
};
