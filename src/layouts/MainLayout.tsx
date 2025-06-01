// src/layouts/MainLayout.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";


const MainLayout = () => {
  const { pathname } = useLocation();

  // Rotas onde NÃO queremos Navbar e Footer
  const noNavRoutes = ["/", "/dashboard", "/login", "/cadastrar",];

  const hideNav = noNavRoutes.includes(pathname);

  return (
    <>
      <ScrollToTop />
      {!hideNav && <Navbar />}
      <main className={hideNav ? "" : "min-h-[calc(100vh-160px)] container mx-auto px-4 py-8"}>
        <Outlet />
      </main>
      {hideNav && <Footer />}
    </>
  );
};

export default MainLayout;