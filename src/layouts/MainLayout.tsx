// src/layouts/MainLayout.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";


const MainLayout = () => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={isLanding ? "" : "min-h-[calc(100vh-160px)] container mx-auto px-4 py-8"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
