import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./Button";
import { supabase } from "../supabase";

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
    <Button
      onClick={handleLogin}
      variant="outline"
      className={`bg-white text-gray-800 flex items-center justify-center gap-2 ${className}`}
    >
      <FcGoogle size={20} />
      Entrar com Google
    </Button>
  );
};

export default GoogleButton;
