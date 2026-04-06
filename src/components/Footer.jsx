import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ── SVG WAVE — footer ── */}
      <div style={{ lineHeight: 0, overflow: "hidden", background: "#f5f7fa" }}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          {/* Soft double-wave — fills into footer dark bg */}
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
            fill="#0a1628"
            opacity="0.4"
          />
          <path
            d="M0,40 C200,85 400,10 600,50 C800,90 1000,15 1200,55 C1320,78 1400,45 1440,35 L1440,100 L0,100 Z"
            fill="#0a1628"
          />
        </svg>
      </div>

      <footer style={{ background: "#0a1628", color: "white", fontFamily: "'Poppins', sans-serif" }}>

        {/* ── TOP BAND ── */}
        <div style={{ background: "linear-gradient(90deg, #e8420a, #ff6b35)", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: "15px", letterSpacing: "0.5px" }}>
            🎓 Admissions Open 2025–26 — Limited Seats Available!
          </p>
          <a href="https://wa.me/917060155711" target="_blank" rel="noreferrer"
            style={{ background: "white", color: "#e8420a", padding: "8px 22px", borderRadius: "999px", fontWeight: 700, fontSize: "14px", textDecoration: "none", whiteSpace: "nowrap" }}>
            Enquire Now →
          </a>
        </div>

        {/* ── MAIN FOOTER ── */}
        <div className="footer-grid" style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 40px 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "40px" }}>

          {/* COL 1 — Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              {/* ── LOGO SVG ── */}
              <img
                src="/img/students/2.svg"
                alt="Sniper Group of Education Logo"
                style={{ height: "52px", width: "auto", objectFit: "contain" }}
              />
            </div>

            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: "20px" }}>
              Governed by <strong style={{ color: "rgba(255,255,255,0.85)" }}>Bhagwan Parshuram Education & Charitable Trust</strong>. Empowering youth through quality education and defence training since 2009.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: "📘", label: "Facebook",  href: "#" },
                { icon: "📸", label: "Instagram", href: "#" },
                { icon: "▶️", label: "YouTube",   href: "#" },
                { icon: "💬", label: "WhatsApp",  href: "https://wa.me/917060155711" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                  style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(232,66,10,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2 — Our Institutes */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#e8420a", marginBottom: "20px" }}>Our Institutes</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "🛡️ Defence Academy", path: "/defence" },
                { label: "📚 Public School",    path: "/school"  },
                { label: "🎓 Sniper Classes",   path: "/classes" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path}
                    style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "white"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Quick Links */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#e8420a", marginBottom: "20px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "About Us",      path: "/about"        },
                { label: "Results",       path: "/results"      },
                { label: "Fee Structure", path: "/fee-structure" },
                { label: "Gallery",       path: "/gallery"      },
                { label: "Contact Us",    path: "/contact"      },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path}
                    style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "white"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}>
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — Contact */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#e8420a", marginBottom: "20px" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: "📍", text: "GP-4, Near PNB, Divider Road, Ganganagar, Meerut City (U.P)" },
                { icon: "📞", text: "+91 7060155711" },
                { icon: "🕐", text: "Mon–Sat: 8:00 AM – 7:00 PM" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                  <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── DIVIDER ── */}
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            © {year} Sniper Group of Education. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            Bhagwan Parshuram Education & Charitable Trust
          </p>
        </div>

        {/* Mobile responsive */}
        <style>{`
          @media (max-width: 900px) {
            .footer-grid { grid-template-columns: 1fr 1fr !important; padding: 40px 20px !important; gap: 32px !important; }
          }
          @media (max-width: 480px) {
            .footer-grid { grid-template-columns: 1fr !important; padding: 32px 20px !important; }
          }
        `}</style>

      </footer>
    </>
  );
};

export default Footer;
