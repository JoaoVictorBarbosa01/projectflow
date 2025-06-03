import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../supabase";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login com e-mail e senha
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
    }

    setLoading(false);
  };

  // Login com Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/verify-callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Entrar na sua conta</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-muted-foreground">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-primary dark:bg-zinc-800 dark:border-zinc-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-muted-foreground">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-primary dark:bg-zinc-800 dark:border-zinc-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-muted-foreground">ou entre com</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-3 flex items-center justify-center gap-2 py-2 border rounded-xl hover:bg-muted transition dark:bg-zinc-800 dark:border-zinc-700"
          >
            <FcGoogle className="text-xl" />
            <span>Entrar com Google</span>
          </button>
        </div>

        <p className="text-sm text-center mt-6 text-muted-foreground">
          Não tem conta?
          <Link to="/signup" className="text-primary font-medium ml-1 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
