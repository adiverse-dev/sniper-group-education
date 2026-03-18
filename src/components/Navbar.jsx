import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const wings = [
  { icon: "🛡️", name: "Defence Academy", desc: "NDA • CDS • SSB Coaching",       path: "/defence", bg: "bg-orange-50",  accent: "#FF9933" },
  { icon: "📚", name: "Public School",    desc: "CBSE • Nursery to Class 8",       path: "/school",  bg: "bg-green-50",  accent: "#10b981" },
  { icon: "🎓", name: "Sniper Classes",   desc: "IIT JEE • NEET • NDA Foundation", path: "/classes", bg: "bg-purple-50", accent: "#7c3aed" },
];

const navLinks = [
  { label: "Home",          path: "/" },
  { label: "Our Institutes",path: null, dropdown: true },
  { label: "About",         path: "/about" },
  { label: "Result",        path: "/results" },
  { label: "Fee Structure", path: "/fee-structure" },
  { label: "Gallery",       path: "/gallery" },
  { label: "Contact",       path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled,         setScrolled]        = useState(false);
  const [scrollProgress,   setScrollProgress]  = useState(0);
  const [dropOpen,         setDropOpen]         = useState(false);
  const [menuOpen,         setMenuOpen]         = useState(false);
  const [mobileInstitutes, setMobileInstitutes] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
    setMobileInstitutes(false);
  }, [location.pathname]);

  const isActive   = (path) => location.pathname === path;
  const wingActive = wings.some((w) => isActive(w.path));
  const activeWing = wings.find((w) => isActive(w.path));

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "white", transition: "all 0.3s ease", boxShadow: scrolled ? "0 4px 20px rgba(13,27,62,0.10)" : "0 1px 0 #e8edf4" }}>

      {/* ── Scroll Progress Bar ── */}
      <div style={{ position: "absolute", top: 0, left: 0, height: "3px", width: `${scrollProgress}%`, background: "linear-gradient(to right, #e8420a, #FF9933)", transition: "width 0.1s linear", zIndex: 60 }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", height: scrolled ? "60px" : "68px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", transition: "height 0.3s ease" }}>

        {/* ── Logo ── */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ width: "40px", height: "40px", background: "linear-gradient(135deg, #0d1b3e, #1a3260)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "18px", fontFamily: "'Playfair Display', Georgia, serif", flexShrink: 0 }}>S</div>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, color: "#0d1b3e", fontSize: "15px", lineHeight: 1.2 }}>
            SNIPER
            <small style={{ display: "block", fontSize: "9px", fontFamily: "'Poppins', system-ui, sans-serif", color: "#94a3b8", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase" }}>Group of Education</small>
          </div>
        </Link>

        {/* ── Desktop Links ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }} className="hidden-mobile">

          {navLinks.map((link) =>
            link.dropdown ? (

              /* Our Institutes Dropdown */
              <div key="institutes" style={{ position: "relative" }}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}>

                <button style={{ display: "flex", alignItems: "center", gap: "4px", padding: "7px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", border: "none", background: wingActive ? `${activeWing?.accent}12` : "transparent", color: wingActive ? activeWing?.accent : "#0d1b3e", cursor: "pointer", transition: "all 0.2s" }}>
                  Our Institutes
                  {/* Active wing indicator */}
                  {activeWing && (
                    <span style={{ fontSize: "10px", padding: "1px 7px", borderRadius: "999px", background: "rgba(232,66,10,0.1)", color: "#e8420a", fontWeight: 700 }}>
                      {activeWing.icon}
                    </span>
                  )}
                  <svg style={{ transition: "transform 0.2s", transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.5 }} width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>

                {/* Dropdown Panel */}
                <div style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", background: "white", borderRadius: "16px", padding: "10px", minWidth: "290px", boxShadow: "0 20px 60px rgba(13,27,62,0.15)", border: "1px solid #e8edf4", transition: "all 0.2s ease", opacity: dropOpen ? 1 : 0, transform: dropOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(8px)", pointerEvents: dropOpen ? "auto" : "none", zIndex: 100 }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", letterSpacing: "2px", textTransform: "uppercase", padding: "0 10px 10px", borderBottom: "1px solid #f1f5f9", marginBottom: "6px" }}>Our Three Wings</div>
                  {wings.map((w) => {
                    const active = isActive(w.path);
                    return (
                      <Link key={w.path} to={w.path} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px", borderRadius: "12px", textDecoration: "none", background: active ? `${w.accent}10` : "transparent", border: active ? `1.5px solid ${w.accent}30` : "1.5px solid transparent", transition: "all 0.2s", marginBottom: "4px" }}>
                        <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: active ? `${w.accent}15` : "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{w.icon}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13.5px", fontWeight: 700, color: active ? w.accent : "#0d1b3e" }}>{w.name}</div>
                          <div style={{ fontSize: "11px", color: "#94a3b8" }}>{w.desc}</div>
                        </div>
                        {active && <span style={{ fontSize: "11px", fontWeight: 700, color: w.accent }}>●</span>}
                        {!active && <span style={{ color: "#cbd5e1", fontSize: "14px" }}>→</span>}
                      </Link>
                    );
                  })}
                </div>
              </div>

            ) : (
              <Link key={link.path} to={link.path} style={{ position: "relative", padding: "7px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", textDecoration: "none", color: isActive(link.path) ? "#e8420a" : "#0d1b3e", background: isActive(link.path) ? "rgba(232,66,10,0.06)" : "transparent", transition: "all 0.2s" }}>
                {link.label}
                {/* Active underline */}
                {isActive(link.path) && (
                  <span style={{ position: "absolute", bottom: "2px", left: "12px", right: "12px", height: "2px", background: "linear-gradient(to right, #e8420a, #FF9933)", borderRadius: "999px" }} />
                )}
              </Link>
            )
          )}
        </div>

        {/* ── Right Side ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <a href="tel:+917060155711" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0d1b3e", fontSize: "12.5px", fontWeight: 600, textDecoration: "none", padding: "7px 12px", borderRadius: "8px", border: "1.5px solid #e2e8f0", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8420a"; e.currentTarget.style.color = "#e8420a"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#0d1b3e"; }}
            className="hidden-mobile">
            📞 7060155711
          </a>

          <div style={{ position: "relative" }} className="hidden-mobile">
            <span style={{ position: "absolute", top: "-8px", right: "-6px", background: "#10b981", color: "white", fontSize: "8px", fontWeight: 800, letterSpacing: "0.5px", padding: "2px 6px", borderRadius: "999px", whiteSpace: "nowrap", zIndex: 10, animation: "blink 1.5s ease-in-out infinite" }}>
              ● OPEN
            </span>
            <Link to="/contact" style={{ background: "linear-gradient(135deg, #e8420a, #ff6b35)", color: "white", padding: "8px 18px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 12px rgba(232,66,10,0.3)", transition: "all 0.2s", whiteSpace: "nowrap", display: "block" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(232,66,10,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(232,66,10,0.3)"; }}>
              Apply Now
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", flexDirection: "column", gap: "5px", padding: "4px", background: "transparent", border: "none", cursor: "pointer" }} className="show-mobile" aria-label="Toggle menu">
            <span style={{ display: "block", width: "22px", height: "2px", background: "#0d1b3e", borderRadius: "2px", transition: "all 0.25s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "#0d1b3e", borderRadius: "2px", transition: "all 0.25s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "#0d1b3e", borderRadius: "2px", transition: "all 0.25s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #f1f5f9", padding: "12px 20px 16px", display: "flex", flexDirection: "column", gap: "4px", boxShadow: "0 8px 24px rgba(13,27,62,0.1)" }}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key="mob-inst">
                <button onClick={() => setMobileInstitutes(!mobileInstitutes)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, color: "#0d1b3e", background: "transparent", border: "none", cursor: "pointer" }}>
                  Our Institutes
                  <svg style={{ transition: "transform 0.2s", transform: mobileInstitutes ? "rotate(180deg)" : "rotate(0deg)" }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
                {mobileInstitutes && (
                  <div style={{ paddingLeft: "14px", display: "flex", flexDirection: "column", gap: "4px", marginBottom: "4px" }}>
                    {wings.map((w) => (
                      <Link key={w.path} to={w.path} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", textDecoration: "none", background: isActive(w.path) ? `${w.accent}10` : "transparent", color: isActive(w.path) ? w.accent : "#0d1b3e", fontSize: "13.5px", fontWeight: 600 }}>
                        {w.icon} {w.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.path} to={link.path} style={{ padding: "10px 14px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, textDecoration: "none", background: isActive(link.path) ? "rgba(232,66,10,0.06)" : "transparent", color: isActive(link.path) ? "#e8420a" : "#0d1b3e" }}>
                {link.label}
              </Link>
            )
          )}
          <a href="tel:+917060155711" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, color: "#0d1b3e", textDecoration: "none", border: "1.5px solid #e2e8f0", marginTop: "8px" }}>
            📞 Call: 7060155711
          </a>
          <a href="https://wa.me/917060155711" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, color: "#25d366", textDecoration: "none", border: "1.5px solid #25d36630", background: "#25d36608", marginTop: "4px" }}>
            💬 WhatsApp: 7060155711
          </a>
          <Link to="/contact" style={{ display: "block", textAlign: "center", padding: "12px", background: "linear-gradient(135deg, #e8420a, #ff6b35)", color: "white", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", marginTop: "6px" }}>
            Apply Now
          </Link>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(0.95); }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;