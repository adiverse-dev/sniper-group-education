import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    tag: "🛡️ Wing 01 — Defence Academy",
    title: "Forge the", highlight: "Warrior", title2: "Within You",
    sub: "Top coaching for NDA, CDS & SSB. Where academics meets the discipline of a soldier.",
    pills: ["NDA Coaching", "CDS", "SSB Prep", "Physical Training"],
    btn1: "Explore Academy", link: "/defence",
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a3260 50%, #0f2040 100%)",
    accent: "#FF9933",
    icon: "🛡️",
  },
  {
    tag: "📚 Wing 02 — Public School",
    title: "Nurturing", highlight: "Young", title2: "Brilliant Minds",
    sub: "CBSE affiliated school from Nursery to Class 8. Where curiosity meets character.",
    pills: ["CBSE", "Smart Classrooms", "Activity Learning", "Nursery–8"],
    btn1: "Explore School", link: "/school",
    bg: "linear-gradient(135deg, #0d2818 0%, #0f3d22 50%, #0a2010 100%)",
    accent: "#34d399",
    icon: "📚",
  },
  {
    tag: "🎓 Wing 03 — Sniper Classes",
    title: "Crack Every", highlight: "Exam", title2: "You Face",
    sub: "IIT JEE, NEET & NDA Foundation coaching. Expert faculty, personal mentorship.",
    pills: ["IIT JEE / NEET", "NDA Foundation", "Class 9–12"],
    btn1: "Explore Classes", link: "/classes",
    bg: "linear-gradient(135deg, #1a0533 0%, #2d0f5e 50%, #1a0533 100%)",
    accent: "#c4b5fd",
    icon: "🎓",
  },
];

function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCur((c) => (c + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  function goTo(n) {
    setFade(false);
    setTimeout(() => { setCur(n); setFade(true); }, 300);
  }

  const s = slides[cur];

  return (
    <div style={{ background: "#ffffff", padding: "20px 16px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

        {/* Card */}
        <div style={{
          borderRadius: "20px", overflow: "hidden", position: "relative",
          minHeight: "340px", display: "flex", alignItems: "center",
          background: s.bg, transition: "background 0.5s ease",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        }}>

          {/* Grid overlay */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.04,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px", pointerEvents: "none",
          }} />

          {/* Content */}
          <div style={{
            position: "relative", zIndex: 10,
            width: "100%", display: "flex", alignItems: "center",
            padding: "40px 56px 48px",
            opacity: fade ? 1 : 0,
            transform: fade ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }} className="hero-content">

            {/* Left */}
            <div className="hero-text" style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "4px 12px", borderRadius: "999px",
                border: `1px solid ${s.accent}55`, background: `${s.accent}18`,
                color: s.accent, fontSize: "12px", fontWeight: 700,
                letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px",
              }}>{s.tag}</div>

              <h1 style={{
                color: "white", fontWeight: 900, lineHeight: 1.1,
                fontSize: "clamp(20px, 2.6vw, 36px)", marginBottom: "10px",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}>
                {s.title}{" "}
                <span style={{ color: s.accent }}>{s.highlight}</span>
                <br />{s.title2}
              </h1>

              <p style={{
                color: "rgba(255,255,255,0.62)", fontSize: "14px",
                lineHeight: 1.7, marginBottom: "18px", maxWidth: "380px",
              }}>{s.sub}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                {s.pills.map((p) => (
                  <span key={p} style={{
                    padding: "4px 10px", borderRadius: "14px", fontSize: "13px",
                    fontWeight: 600, background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.12)",
                  }}>{p}</span>
                ))}
              </div>

              <div className="hero-cta-wrap" style={{ display: "flex", gap: "10px" }}>
                <Link to={s.link} style={{
                  background: s.accent, color: "#000",
                  padding: "10px 22px", borderRadius: "24px",
                  fontSize: "14px", fontWeight: 700,
                  textDecoration: "none", display: "inline-flex",
                  alignItems: "center", gap: "6px",
                }}>{s.btn1} →</Link>
                <Link to="/contact" style={{
                  color: "white", padding: "10px 20px", borderRadius: "24px",
                  fontSize: "14px", fontWeight: 600, textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.25)",
                }}>Apply Now</Link>
              </div>
            </div>

            {/* Right icon */}
            <div className="hero-visual" style={{
              flexShrink: 0, width: "220px", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "110px", animation: "heroFloat 4s ease-in-out infinite",
            }}>{s.icon}</div>
          </div>

          {/* Prev Arrow */}
          <button onClick={() => goTo((cur - 1 + slides.length) % slides.length)}
            style={{
              position: "absolute", left: "14px", top: "50%",
              transform: "translateY(-50%)", zIndex: 20,
              width: "36px", height: "36px", borderRadius: "50%",
              background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)",
              color: "white", fontSize: "18px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>‹</button>

          {/* Next Arrow */}
          <button onClick={() => goTo((cur + 1) % slides.length)}
            style={{
              position: "absolute", right: "14px", top: "50%",
              transform: "translateY(-50%)", zIndex: 20,
              width: "36px", height: "36px", borderRadius: "50%",
              background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)",
              color: "white", fontSize: "18px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>›</button>

          {/* Dots */}
          <div style={{
            position: "absolute", bottom: "14px", left: "50%",
            transform: "translateX(-50%)", zIndex: 20, display: "flex", gap: "7px",
          }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                height: "7px", borderRadius: "4px", border: "none", cursor: "pointer",
                width: i === cur ? "22px" : "7px",
                background: i === cur ? "white" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s ease", padding: 0,
              }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50%       { transform: translateY(-12px) rotate(2deg); }
        }
        @media (max-width: 768px) {
          .hero-content  { flex-direction: column !important; padding: 28px 20px 40px !important; text-align: center !important; }
          .hero-text     { width: 100% !important; }
          .hero-visual   { display: none !important; }
          .hero-cta-wrap { justify-content: center !important; }
        }
      `}</style>
    </div>
  );
}

export default HeroSlider;