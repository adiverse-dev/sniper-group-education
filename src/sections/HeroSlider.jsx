// sections/HeroSlider.jsx
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

function HeroSlider({ slides }) {
  const [cur, setCur] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((n) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCur(n);
      setTransitioning(false);
    }, 350);
  }, [transitioning]);

  const prev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length), [cur, slides.length, goTo]);
  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, slides.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[cur];

  return (
    <div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden" }}>

      {/* ── Background image slides ── */}
      {slides.map((slide, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          transition: "opacity 0.6s ease",
          opacity: i === cur ? 1 : 0,
          zIndex: i === cur ? 1 : 0,
        }}>
          {slide.img && (
            <img
              src={slide.img}
              alt={slide.tag}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: slide.imgPos || "center" }}
              onError={e => { e.target.style.display = "none"; }}
            />
          )}
          {/* Dark gradient overlay — left heavy like screenshot */}
          <div style={{
            position: "absolute", inset: 0,
            background: slide.img
              ? "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.18) 100%)"
              : slide.bg || "linear-gradient(135deg, #0d1b3e, #1a3260)",
          }} />
        </div>
      ))}

      {/* ── Content ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 60px",
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? "translateY(10px)" : "translateY(0)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }} className="hs-content">

        {/* Tag pill */}
        {s.tag && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            background: `${s.accent || "#FF9933"}22`,
            border: `1.5px solid ${s.accent || "#FF9933"}`,
            color: s.accent || "#FF9933",
            fontSize: "11px", fontWeight: 700,
            padding: "5px 14px", borderRadius: "999px",
            letterSpacing: "1.5px", textTransform: "uppercase",
            width: "fit-content", marginBottom: "18px",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.accent || "#FF9933", flexShrink: 0 }} />
            {s.tag}
          </div>
        )}

        {/* Heading */}
        <h2 style={{
          color: "#fff",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(26px, 3.8vw, 48px)",
          fontWeight: 700, lineHeight: 1.15,
          margin: "0 0 12px", maxWidth: "620px",
          textShadow: "0 2px 16px rgba(0,0,0,0.5)",
        }}>
          {s.title && <>{s.title} </>}
          {s.highlight && <span style={{ color: s.accent || "#FF9933" }}>{s.highlight}</span>}
          {s.title2 && <><br />{s.title2}</>}
          {/* If page passes just 'heading' instead of title+highlight */}
          {!s.title && s.heading}
        </h2>

        {/* Subtitle */}
        {s.sub && (
          <p style={{
            color: "rgba(255,255,255,0.78)",
            fontSize: "15px", lineHeight: 1.75,
            marginBottom: "20px", maxWidth: "520px",
            letterSpacing: "0.2px",
          }}>{s.sub}</p>
        )}

        {/* Pills (optional) */}
        {s.pills && s.pills.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "26px" }}>
            {s.pills.map((p) => (
              <span key={p} style={{
                padding: "4px 12px", borderRadius: "999px", fontSize: "13px",
                fontWeight: 600, background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.18)",
              }}>{p}</span>
            ))}
          </div>
        )}

        {/* Stats (optional) */}
        {s.stats && s.stats.length > 0 && (
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginBottom: "26px" }}>
            {s.stats.map((st) => (
              <div key={st.lab}>
                <div style={{ fontSize: "20px", fontWeight: 800, color: s.accent || "#FF9933" }}>{st.val}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px" }}>{st.lab}</div>
              </div>
            ))}
          </div>
        )}

        {/* CTA buttons */}
        <div className="hs-cta" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {s.link && (
            <Link to={s.link} style={{
              padding: "11px 26px", borderRadius: "8px",
              background: s.accent || "#FF9933",
              color: "#fff", textDecoration: "none",
              fontSize: "14px", fontWeight: 700,
              boxShadow: `0 4px 16px ${s.accent || "#FF9933"}44`,
              display: "inline-flex", alignItems: "center", gap: "6px",
            }}>
              {s.btn || "Explore Courses"} →
            </Link>
          )}
          <Link to="/contact" style={{
            padding: "11px 24px", borderRadius: "8px",
            background: "transparent", color: "white",
            border: "1.5px solid rgba(255,255,255,0.6)",
            textDecoration: "none", fontSize: "14px", fontWeight: 600,
          }}>Apply Now</Link>
        </div>
      </div>

      {/* ── Prev button ── */}
      <button onClick={prev} className="hs-arrow" style={{
        position: "absolute", left: "16px", top: "50%",
        transform: "translateY(-50%)", zIndex: 3,
        width: "42px", height: "42px", borderRadius: "50%",
        background: "rgba(0,0,0,0.45)", border: "1.5px solid rgba(255,255,255,0.35)",
        color: "white", fontSize: "20px", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>‹</button>

      {/* ── Next button ── */}
      <button onClick={next} className="hs-arrow" style={{
        position: "absolute", right: "16px", top: "50%",
        transform: "translateY(-50%)", zIndex: 3,
        width: "42px", height: "42px", borderRadius: "50%",
        background: "rgba(0,0,0,0.45)", border: "1.5px solid rgba(255,255,255,0.35)",
        color: "white", fontSize: "20px", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>›</button>

      {/* ── Dots ── */}
      <div style={{
        position: "absolute", bottom: "18px", left: "50%",
        transform: "translateX(-50%)", zIndex: 3,
        display: "flex", gap: "8px", alignItems: "center",
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === cur ? "22px" : "8px",
            height: "8px", borderRadius: "999px",
            background: i === cur ? (s.accent || "#FF9933") : "rgba(255,255,255,0.4)",
            border: "none", cursor: "pointer", padding: 0,
            transition: "all 0.35s ease",
          }} />
        ))}
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
        .hs-content { transition: opacity 0.35s ease, transform 0.35s ease; }
        .hs-arrow:hover { background: rgba(0,0,0,0.7) !important; }
        @media (max-width: 768px) {
          .hs-content { padding: 0 24px !important; }
          .hs-cta { flex-direction: column !important; }
          .hs-cta a { text-align: center !important; justify-content: center !important; }
        }
      `}</style>
    </div>
  );
}

export default HeroSlider;