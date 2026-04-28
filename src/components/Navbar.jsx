import { useState, useEffect } from "react";
import {
  Shield,
  BookOpen,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { BRANDING_ASSETS } from "../config/brandingAssets";
import { useLanguage } from "../i18n/LanguageProvider";
import LocalizedLink from "./LocalizedLink";

const wings = [
  {
    key: "defence",
    path: "/defence",
    accent: "#FF9933",
    Icon: Shield,
    nameKey: "wings.defenceName",
    descKey: "wings.defenceDesc",
  },
  {
    key: "school",
    path: "/school",
    accent: "#10b981",
    Icon: BookOpen,
    nameKey: "wings.schoolName",
    descKey: "wings.schoolDesc",
  },
  {
    key: "classes",
    path: "/classes",
    accent: "#7c3aed",
    Icon: GraduationCap,
    nameKey: "wings.classesName",
    descKey: "wings.classesDesc",
  },
];

const navLinks = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.results", path: "/results" },
  { key: "nav.fees", path: "/fees" },
  { key: "nav.gallery", path: "/gallery" },
  { key: "nav.contact", path: "/contact" },
];

function LanguageToggle() {
  const { lang, setLanguage, t } = useLanguage();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #e2e8f0",
        borderRadius: "999px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <button
        onClick={() => setLanguage("en")}
        style={{
          border: "none",
          padding: "6px 10px",
          fontSize: "12px",
          cursor: "pointer",
          color: lang === "en" ? "#fff" : "#0d1b3e",
          background: lang === "en" ? "#e8420a" : "transparent",
        }}
        aria-label={t("language.en")}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("hi")}
        style={{
          border: "none",
          padding: "6px 10px",
          fontSize: "12px",
          cursor: "pointer",
          color: lang === "hi" ? "#fff" : "#0d1b3e",
          background: lang === "hi" ? "#e8420a" : "transparent",
        }}
        aria-label={t("language.hi")}
      >
        HI
      </button>
    </div>
  );
}

function Navbar() {
  const { t, basePath } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dropOpen, setDropOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileInstitutes, setMobileInstitutes] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropOpen(false);
    setMobileInstitutes(false);
  };

  const isActive = (path) => basePath === path;
  const wingActive = wings.some((wing) => isActive(wing.path));

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "white",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 4px 20px rgba(13,27,62,0.10)" : "0 1px 0 #e8edf4",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(to right, #e8420a, #FF9933)",
          transition: "width 0.1s linear",
          zIndex: 60,
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 28px",
          height: scrolled ? "60px" : "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          transition: "height 0.3s ease",
        }}
      >
        <LocalizedLink
          to="/"
          onClick={closeAllMenus}
          style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
        >
          <img
            src={BRANDING_ASSETS.navbarLogo}
            alt="Sniper Group of Education"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{
              height: scrolled ? "50px" : "70px",
              width: "auto",
              objectFit: "contain",
              transition: "height 0.3s ease",
            }}
          />
        </LocalizedLink>

        <div
          style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }}
          className="hidden-mobile"
        >
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 12px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                background: wingActive ? "rgba(232,66,10,0.12)" : "transparent",
                color: wingActive ? "#e8420a" : "#0d1b3e",
                cursor: "pointer",
              }}
            >
              {t("nav.institutes")}
              {dropOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: "50%",
                background: "white",
                borderRadius: "16px",
                padding: "10px",
                minWidth: "520px",
                boxShadow: "0 20px 60px rgba(13,27,62,0.15)",
                border: "1px solid #e8edf4",
                transition: "all 0.2s ease",
                opacity: dropOpen ? 1 : 0,
                transform: dropOpen
                  ? "translateX(-50%) translateY(0)"
                  : "translateX(-50%) translateY(8px)",
                pointerEvents: dropOpen ? "auto" : "none",
                zIndex: 100,
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#94a3b8",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "0 10px 10px",
                  borderBottom: "1px solid #f1f5f9",
                  marginBottom: "6px",
                }}
              >
                {t("nav.threeWings")}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
                {wings.map((wing, index) => {
                  const active = isActive(wing.path);
                  const Icon = wing.Icon;
                  const isLast = index === wings.length - 1;
                  return (
                    <LocalizedLink
                      key={wing.path}
                      to={wing.path}
                      onClick={closeAllMenus}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px",
                        borderRadius: "12px",
                        textDecoration: "none",
                        background: active ? `${wing.accent}10` : "transparent",
                        border: active ? `1.5px solid ${wing.accent}30` : "1.5px solid transparent",
                        gridColumn: isLast ? "1 / -1" : "auto",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "12px",
                          background: active ? `${wing.accent}18` : "#f8fafc",
                          border: `1px solid ${active ? `${wing.accent}35` : "#e2e8f0"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={17} color={active ? wing.accent : "#94a3b8"} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "13.5px", fontWeight: 700, color: active ? wing.accent : "#0d1b3e" }}>
                          {t(wing.nameKey)}
                        </div>
                        <div style={{ fontSize: "11px", color: "#94a3b8" }}>{t(wing.descKey)}</div>
                      </div>
                      <ChevronRight size={14} color={active ? wing.accent : "#94a3b8"} />
                    </LocalizedLink>
                  );
                })}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <LocalizedLink
              key={link.path}
              to={link.path}
              onClick={closeAllMenus}
              style={{
                position: "relative",
                padding: "7px 12px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                color: isActive(link.path) ? "#e8420a" : "#0d1b3e",
                background: isActive(link.path) ? "rgba(232,66,10,0.06)" : "transparent",
              }}
            >
              {t(link.key)}
            </LocalizedLink>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <LanguageToggle />

          <a
            href="tel:+917060155711"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#0d1b3e",
              fontSize: "12.5px",
              fontWeight: 600,
              textDecoration: "none",
              padding: "7px 12px",
              borderRadius: "8px",
              border: "1.5px solid #e2e8f0",
            }}
            className="hidden-mobile"
          >
            {t("nav.call")}: 7060155711
          </a>

          <LocalizedLink
            to="/contact"
            onClick={closeAllMenus}
            style={{
              background: "linear-gradient(135deg, #e8420a, #ff6b35)",
              color: "white",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            className="hidden-mobile"
          >
            {t("nav.applyNow")}
          </LocalizedLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            className="show-mobile"
            aria-label={t("nav.toggleMenu")}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#0d1b3e",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#0d1b3e",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#0d1b3e",
                borderRadius: "2px",
              }}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #f1f5f9",
            padding: "12px 20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            boxShadow: "0 8px 24px rgba(13,27,62,0.1)",
          }}
        >
          <button
            onClick={() => setMobileInstitutes(!mobileInstitutes)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0d1b3e",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {t("nav.institutes")}
            {mobileInstitutes ? <ChevronUp size={14} color="#64748b" /> : <ChevronDown size={14} color="#64748b" />}
          </button>

          {mobileInstitutes && (
            <div style={{ paddingLeft: "14px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "6px" }}>
              {wings.map((wing, index) => {
                const active = isActive(wing.path);
                const Icon = wing.Icon;
                const isLast = index === wings.length - 1;
                return (
                  <LocalizedLink
                    key={wing.path}
                    to={wing.path}
                    onClick={closeAllMenus}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      color: active ? wing.accent : "#0d1b3e",
                      fontSize: "13.5px",
                      fontWeight: 600,
                      background: active ? `${wing.accent}12` : "transparent",
                      border: active ? `1px solid ${wing.accent}33` : "1px solid transparent",
                      gridColumn: isLast ? "1 / -1" : "auto",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        background: active ? `${wing.accent}15` : "#f8fafc",
                        border: `1px solid ${active ? `${wing.accent}35` : "#e2e8f0"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={14} color={active ? wing.accent : "#94a3b8"} />
                    </div>
                    <span style={{ flex: 1 }}>{t(wing.nameKey)}</span>
                    <ChevronRight size={13} />
                  </LocalizedLink>
                );
              })}
            </div>
          )}

          {navLinks.map((link) => (
            <LocalizedLink
              key={`mobile-${link.path}`}
              to={link.path}
              onClick={closeAllMenus}
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                background: isActive(link.path) ? "rgba(232,66,10,0.06)" : "transparent",
                color: isActive(link.path) ? "#e8420a" : "#0d1b3e",
              }}
            >
              {t(link.key)}
            </LocalizedLink>
          ))}

          <a
            href="tel:+917060155711"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 14px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0d1b3e",
              textDecoration: "none",
              border: "1.5px solid #e2e8f0",
              marginTop: "8px",
            }}
          >
            {t("nav.call")}: 7060155711
          </a>

          <a
            href="https://wa.me/917060155711"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 14px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#25d366",
              textDecoration: "none",
              border: "1.5px solid #25d36630",
              background: "#25d36608",
              marginTop: "4px",
            }}
          >
            {t("nav.whatsapp")}: 7060155711
          </a>

          <LocalizedLink
            to="/contact"
            onClick={closeAllMenus}
            style={{
              display: "block",
              textAlign: "center",
              padding: "12px",
              background: "linear-gradient(135deg, #e8420a, #ff6b35)",
              color: "white",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              marginTop: "6px",
            }}
          >
            {t("nav.applyNow")}
          </LocalizedLink>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
