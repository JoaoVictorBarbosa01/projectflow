import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Signup from "./pages/Signup";


// cria o roteador e exporta
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "sobre", element: <About/> },
      { path: "privacidade", element: <PrivacyPolicy /> },
      { path: "termos", element: <TermsOfUse /> },
      { path: "cadastrar", element: <Signup /> },
    
    ],
  },
]);

export default router;
