// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { ROUTES } from "../router/routes";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-2">ProjectFlow</h4>
          <p>Gerencie seus projetos de forma prática, rápida e inteligente.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Institucional</h4>
          <ul>
            <li><Link to={ROUTES.ABOUT} className="hover:underline">Sobre nós</Link></li>
            <li><Link to={ROUTES.PRIVACY} className="hover:underline">Política de Privacidade</Link></li>
            <li><Link to={ROUTES.TERMS} className="hover:underline">Termos de Uso</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <ul>
            <li>Email: suporte@projectflow.com</li>
            <li>WhatsApp: (11) 91234-5678</li>
            <li>Segunda a Sexta, 9h - 18h</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Redes Sociais</h4>
          <ul>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} ProjectFlow. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
