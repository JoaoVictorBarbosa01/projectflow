import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const VerifyEmail: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-gray-800">
      <motion.div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4 text-primary">Verifique seu e-mail</h1>
        <p className="text-gray-600 mb-6">
          Enviamos um link de confirmação para o seu e-mail.
          <br />
          Clique no link para ativar sua conta e acessar o ProjectFlow.
        </p>

        <Link to="/" className="text-primary font-semibold underline">
          Voltar à página inicial
        </Link>
      </motion.div>
    </section>
  );
};

export default VerifyEmail;
