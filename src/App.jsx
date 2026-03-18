import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

// ── Shared Components (banayenge step by step) ──
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 import WhatsappButton from "./components/WhatsappButton";
 import CallbackButton from "./components/Callbackbutton";

import "./index.css";
import "./App.css";

function App() {
  const location = useLocation();

  // Har page change pe scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Fade-in on scroll — global observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-wrapper">

      {/* ── Top Bar ── */}
      <AnnouncementBar />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Page Content ── */}
      <main>
        <AppRoutes />
      </main>

      {/* ── Footer ── */}
      {<Footer /> }

      {/* ── Floating Buttons ── */}
      { <WhatsappButton /> }
      
      

    </div>
  );
}

export default App;