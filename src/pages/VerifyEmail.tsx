import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../supabase";

const VerifyEmail: React.FC = () => {
  const [seconds, setSeconds] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [message, setMessage] = useState("");

  // Contagem regressiva
  useEffect(() => {
    if (!canResend && seconds > 0) {
      const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [seconds, canResend]);

  const handleResend = async () => {
    setMessage("");
    setCanResend(false);
    setSeconds(30);

    const { data, error } = await supabase.auth.resend({
      type: "signup",
      email: (await supabase.auth.getUser()).data?.user?.email ?? "",
    });

    if (error) {
      setMessage("Erro ao reenviar e-mail.");
    } else {
      setMessage("E-mail reenviado com sucesso!");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-gray-800">
      <motion.div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-200 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ rotate: -5 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 12H8m8 0a4 4 0 01-8 0m8 0a4 4 0 00-8 0m4-4v4m0 4h.01M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z"
            />
          </svg>
        </motion.div>

        <h1 className="text-2xl font-bold mb-4 text-primary">Verifique seu e-mail</h1>
        <p className="text-gray-600 mb-4">
          Enviamos um link de confirmação para o seu e-mail.
          <br />
          Clique nele para ativar sua conta.
        </p>

        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`w-full mt-4 px-4 py-2 rounded-xl font-semibold transition ${
            canResend
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {canResend ? "Reenviar e-mail" : `Aguarde ${seconds}s`}
        </button>

        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}

        <Link to="/" className="mt-6 inline-block text-sm text-primary underline">
          Voltar à página inicial
        </Link>
      </motion.div>
    </section>
  );
};

export default VerifyEmail;
