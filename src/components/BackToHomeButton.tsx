import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // ícone de casa

const BackToHomeButton: React.FC = () => (
  <div className="mb-6">
    <Link
      to="/"
      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
    >
      <FaHome className="mr-2" />
      Voltar para Home
    </Link>
  </div>
);

export default BackToHomeButton;
