import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../supabase";
import GoogleButton from "../components/GoogleButton";

const Signup: React.FC = () => {
  usePageTitle("Cadastrar - ProjectFlow");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

 // Função de cadastro
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Chama o Supabase Auth para registrar o usuário
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
          // Redireciona após o clique no link de verificação no e-mail
          emailRedirectTo: "https://projectflow-pi.vercel.app/dashboard",// ou localhost:5173 se for local
        },
      });

      if (error) {
        console.error("Erro ao cadastrar:", error.message);
        setError(error.message);
        setLoading(false);
        return;
      }

      // Redireciona para página de verificação imediatamente após sucesso
      navigate("/verifique-email");

    } catch (err: any) {
      console.error("Erro inesperado:", err.message);
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
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

        <GoogleButton className=" w-full" />

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-4 text-gray-400">ou</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Digite uma senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded-xl hover:bg-primary-dark transition"
            disabled={loading}
          >
            {loading ? "Criando conta..." : "Criar conta"}
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{" "}
            <Link to="/" className="text-primary font-medium hover:underline">
              Faça o Login
            </Link>
          </p>
          <p className="text-sm text-gray-500">
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
