import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../supabase";
import GoogleButton from "../components/GoogleButton";
import LinkButton from "../components/LinkButton";


const Signup: React.FC = () => {
  usePageTitle("Cadastrar - ProjectFlow");

  const handleGoogleSignup = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error("Erro ao autenticar com Google:", error.message);
  }
};

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-gray-800">
      <motion.div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-primary">
          Criar sua conta
        </h1>

        {/* Botão de autenticação com Google */}
        <GoogleButton className=" w-full" />

        {/* Separador */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-4 text-gray-400">ou</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Formulário de cadastro */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="seuemail@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Digite uma senha"
              required
            />
          </div>

          <LinkButton to="/" variant="primary" className="w-full text-center" >
              Criar conta
          </LinkButton>
        </form>

        {/* Link para voltar para Home */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">Já tem uma conta?</span>
          <Link to="/" className="ml-2 text-primary font-medium hover:underline">
            Faça o Login
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Ou{" "}
            <Link to="/" className="text-primary font-medium hover:underline">
              retorne para a home
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Signup;
