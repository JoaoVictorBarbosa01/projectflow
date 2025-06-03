import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase"; // ajuste o caminho conforme necessário

export default function VerifyCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifySession = async () => {
      const { data, error } = await supabase.auth.getSession();

      // Aguarda alguns segundos caso a sessão ainda esteja sendo criada
      setTimeout(async () => {
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      }, 2000);
    };

    verifySession();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-2xl font-bold text-primary mb-2">Confirmando e-mail...</h1>
        <p className="text-gray-600">Aguarde um momento enquanto confirmamos seu acesso.</p>
      </div>
    </div>
  );
}
