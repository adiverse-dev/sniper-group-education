import { useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    tag: "📚 Sniper Public School",
    title: "Nurturing Excellence from",
    highlight: "Day One",
    desc: "CBSE affiliated school offering quality education from Nursery to Class 8 with modern facilities and experienced faculty.",
    stats: [{ val: "1,000+", lab: "Students" }, { val: "CBSE", lab: "Affiliated" }, { val: "98%", lab: "Board Results" }, { val: "50+", lab: "Faculty" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #0d3d2e 60%, #0d1b3e 100%)",
    glow: "rgba(16,185,129,0.15)",
    color: "#10b981",
  },
  {
    tag: "🌱 Nursery – KG",
    title: "Building Strong",
    highlight: "Foundations Early",
    desc: "Activity-based early childhood education focusing on creativity, basic phonics, art & craft, music and social development.",
    stats: [{ val: "Age 3–6", lab: "Eligibility" }, { val: "Activity Based", lab: "Learning" }, { val: "Art & Music", lab: "Included" }, { val: "₹18,000", lab: "Per Year" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a3d1a 60%, #0d1b3e 100%)",
    glow: "rgba(16,185,129,0.15)",
    color: "#10b981",
  },
  {
    tag: "📖 Class 1 – 5",
    title: "Conceptual Clarity &",
    highlight: "All-Round Growth",
    desc: "Strong CBSE foundation with computer lab, sports, library access and focus on conceptual clarity from an early age.",
    stats: [{ val: "Class 1–5", lab: "Level" }, { val: "CBSE", lab: "Curriculum" }, { val: "Computer Lab", lab: "Included" }, { val: "₹24,000", lab: "Per Year" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #0d2d3e 60%, #0d1b3e 100%)",
    glow: "rgba(16,185,129,0.12)",
    color: "#10b981",
  },
  {
    tag: "🔬 Class 6 – 8",
    title: "Science, Math &",
    highlight: "Academic Excellence",
    desc: "Middle school education with science labs, mathematics focus, English communication and competitive exam foundation building.",
    stats: [{ val: "Class 6–8", lab: "Level" }, { val: "Science Lab", lab: "Included" }, { val: "Math Focus", lab: "Special" }, { val: "₹30,000", lab: "Per Year" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a0d3e 60%, #0d1b3e 100%)",
    glow: "rgba(16,185,129,0.15)",
    color: "#10b981",
  },
];

const courses = [
  {
    name: "Nursery – KG",
    duration: "1 Year",
    fee: "₹18,000/yr",
    icon: "🌱",
    desc: "Activity-based early childhood education focusing on foundational skills, creativity and social development.",
    includes: ["Activity Based Learning", "Art & Craft", "Music & Dance", "Basic Phonics"],
  },
  {
    name: "Class 1 – 5",
    duration: "Per Year",
    fee: "₹24,000/yr",
    icon: "📖",
    desc: "Strong foundational education following CBSE curriculum with focus on conceptual clarity and all-round development.",
    includes: ["CBSE Curriculum", "Computer Lab", "Sports & Games", "Library Access"],
  },
  {
    name: "Class 6 – 8",
    duration: "Per Year",
    fee: "₹30,000/yr",
    icon: "🔬",
    desc: "Middle school education with science labs, mathematics focus and competitive exam foundation building.",
    includes: ["Science Lab", "Math Focus", "English Communication", "Sports"],
  },

];

const features = [
  { icon: "🏫", title: "CBSE Affiliated",         desc: "Fully affiliated with CBSE board ensuring national standard curriculum." },
  { icon: "🔬", title: "Modern Labs",              desc: "Well-equipped science, computer and language labs for hands-on learning." },
  { icon: "⚽", title: "Sports & Activities",     desc: "Cricket, football, athletics and indoor games for physical development." },
  { icon: "📚", title: "Experienced Teachers",    desc: "Qualified and dedicated faculty with years of teaching experience." },
  { icon: "👨‍👩‍👧", title: "Parent Connect",         desc: "Regular PTMs and parent-teacher communication for student progress." },
  { icon: "🏆", title: "Merit Scholarships",      desc: "Fee concessions and scholarships for top-performing students." },
];

const PublicSchool = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    setAnimating(true);
    setTimeout(() => { setCurrent(typeof index === "function" ? index(current) : index); setAnimating(false); }, 300);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => goTo((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, [goTo]);

  const slide = heroSlides[current];

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      {/* ── HERO SLIDER ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-inner  { flex-direction: column !important; padding: 28px 20px 40px !important; gap: 20px !important; }
          .hero-left   { text-align: center !important; }
          .hero-right  { display: none !important; }
          .hero-stats  { justify-content: center !important; }
          .cards-grid  { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ background: "#ffffff", padding: "20px 16px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{
            borderRadius: "20px", overflow: "hidden", position: "relative",
            minHeight: "340px", display: "flex", alignItems: "center",
            background: slide.bg, transition: "background 0.6s ease",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}>
            {/* Grid overlay */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />

            {/* Glow */}
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${slide.glow}, transparent 70%)`, pointerEvents: "none", transition: "all 0.6s ease" }} />

            {/* Content */}
            <div className="hero-inner" style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", alignItems: "center", padding: "40px 56px 48px", opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)", transition: "all 0.3s ease", gap: "48px" }}>

              {/* Left */}
              <div className="hero-left" style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "inline-block", padding: "5px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(16,185,129,0.5)", color: slide.color, background: "rgba(16,185,129,0.12)" }}>
                  {slide.tag}
                </span>
                <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.6vw, 36px)", color: "white", lineHeight: 1.15, marginBottom: "12px" }}>
                  {slide.title} <span style={{ color: slide.color }}>{slide.highlight}</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px", maxWidth: "460px" }}>
                  {slide.desc}
                </p>
                <div className="hero-stats" style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  {slide.stats.map((s) => (
                    <div key={s.lab}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 800, color: slide.color }}>{s.val}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.lab}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="hero-right" style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "42px" }}>📚</div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>OUR SCHOOL</p>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.4vw, 36px)", color: "white", lineHeight: 1.2, marginBottom: "4px" }}>Sniper</h2>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.4vw, 36px)", color: "#10b981", lineHeight: 1.2, marginBottom: "6px" }}>Public School</h2>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "1px" }}>CBSE Affiliated • Nursery to Class 8</p>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <button onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", zIndex: 10, width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", color: "white", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={() => goTo((current + 1) % heroSlides.length)}
              style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", zIndex: 10, width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", color: "white", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>

            {/* Dots */}
            <div style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "7px", zIndex: 10 }}>
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  style={{ width: i === current ? "22px" : "7px", height: "7px", borderRadius: "999px", background: i === current ? "#10b981" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

            {/* ── CLASSES ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 700, letterSpacing: "2.5px",
              textTransform: "uppercase", marginBottom: "12px",
              border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)",
            }}>📋 Classes Offered</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              From <span style={{ color: "#10b981" }}>Nursery to Class 8</span>
            </h2>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
            {courses.map((c, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                padding: "10px 18px", borderRadius: "999px", cursor: "pointer",
                fontSize: "15px", fontWeight: 700, border: "2px solid",
                borderColor: activeTab === i ? "#10b981" : "#e2e8f0",
                background: activeTab === i ? "rgba(16,185,129,0.1)" : "white",
                color: activeTab === i ? "#10b981" : "#64748b",
                transition: "all 0.2s",
              }}>{c.icon} {c.name}</button>
            ))}
          </div>

          {(() => {
            const c = courses[activeTab];
            return (
              <div style={{
                background: "#f8fafc", borderRadius: "20px", padding: "40px",
                border: "2px solid rgba(16,185,129,0.2)",
                boxShadow: "0 8px 32px rgba(16,185,129,0.08)",
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px",
              }}>
                <div>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>{c.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "24px", fontWeight: 800, color: "#0d1b3e", marginBottom: "12px" }}>{c.name}</h3>
                  <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px" }}>{c.desc}</p>
                  <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ padding: "8px 16px", background: "rgba(16,185,129,0.1)", borderRadius: "8px", fontSize: "15px", fontWeight: 600, color: "#10b981" }}>⏱ {c.duration}</div>
                    <div style={{ padding: "8px 16px", background: "rgba(16,185,129,0.1)", borderRadius: "8px", fontSize: "15px", fontWeight: 600, color: "#10b981" }}>💰 {c.fee}</div>
                  </div>
                  <a href="tel:+917060155711" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "linear-gradient(135deg, #10b981, #34d399)",
                    color: "white", padding: "12px 24px", borderRadius: "999px",
                    fontSize: "14px", fontWeight: 700, textDecoration: "none",
                  }}>📞 Enquire About Admission</a>
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "16px" }}>What's Included:</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {c.includes.map((inc) => (
                      <div key={inc} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", background: "white", borderRadius: "10px", border: "1px solid #eef1f8" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", color: "#10b981", flexShrink: 0 }}>✓</div>
                        <span style={{ fontSize: "14px", color: "#0d1b3e", fontWeight: 500 }}>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 700, letterSpacing: "2.5px",
              textTransform: "uppercase", marginBottom: "12px",
              border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)",
            }}>🏆 Why Choose Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              The School <span style={{ color: "#10b981" }}>Advantage</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: "white", borderRadius: "16px", padding: "28px",
                border: "1.5px solid #eef1f8", transition: "all 0.25s ease",
                display: "flex", gap: "16px", alignItems: "flex-start",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(16,185,129,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 700, letterSpacing: "2.5px",
              textTransform: "uppercase", marginBottom: "12px",
              border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)",
            }}>🌈 Student Life</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              A Day at <span style={{ color: "#10b981" }}>Sniper School</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", maxWidth: "500px", margin: "12px auto 0" }}>
              Every child's journey is special — we make learning joyful, safe and inspiring from Day 1
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { emoji: "🎨", title: "Art & Craft",        desc: "Creative activities that develop fine motor skills and imagination in young learners.",        color: "#FF9933", bg: "#fff8f0" },
              { emoji: "📖", title: "Story Time",          desc: "Daily reading sessions to build language skills, vocabulary and love for books.",             color: "#10b981", bg: "#f0fdf4" },
              { emoji: "⚽", title: "Sports & Play",      desc: "Structured outdoor play and sports to build teamwork, fitness and confidence.",               color: "#7c3aed", bg: "#faf5ff" },
              { emoji: "🔬", title: "Science Activities",  desc: "Fun experiments and activities that spark curiosity and scientific thinking from Class 3+.",   color: "#e8420a", bg: "#fff5f0" },
              { emoji: "🎵", title: "Music & Dance",       desc: "Cultural activities that nurture creativity, rhythm and self-expression in children.",         color: "#10b981", bg: "#f0fdf4" },
              { emoji: "🏅", title: "Annual Events",       desc: "Sports day, annual function, science fair and cultural events for holistic development.",      color: "#FF9933", bg: "#fff8f0" },
            ].map((item, i) => (
              <div key={i} style={{
                background: item.bg, borderRadius: "16px", padding: "28px 20px",
                border: `1.5px solid ${item.color}22`, textAlign: "center",
                transition: "all 0.25s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${item.color}22`; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  width: "60px", height: "60px", borderRadius: "16px",
                  background: "white", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "28px", margin: "0 auto 14px",
                  boxShadow: `0 4px 12px ${item.color}20`,
                }}>
                  {item.emoji}
                </div>
                <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0d1b3e", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
};

export default PublicSchool;