import { FcGoogle } from "react-icons/fc";
import { supabase } from "../supabase";
import { motion } from "framer-motion";
import clsx from "clsx";

interface GoogleButtonProps {
  className?: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ className = "" }) => {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://projectflow-pi.vercel.app/dashboard",
      },
    });
  };

  return (
    <motion.button
      onClick={handleLogin}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "flex items-center gap-2 justify-center px-5 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 transition border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
        className
      )}
    >
      <FcGoogle size={20} />
      Entrar com Google
    </motion.button>
  );
};

export default GoogleButton;
