import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SeoManager from "./components/SeoManager";
import WhatsappButton from "./components/WhatsappButton";
import { LanguageProvider } from "./i18n/LanguageProvider";
import "./index.css";
import "./App.css";

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-wrapper">
      <SeoManager />
      <AnnouncementBar />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

export default App;

