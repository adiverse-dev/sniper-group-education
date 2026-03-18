import { useState, useEffect } from "react";

const heroSlides = [
  {
    type: "stats",
    tag: "🏫 About Us",
    title: "15+ Years of",
    highlight: "Excellence",
    title2: "& Legacy",
    sub: "Sniper Group of Education — a comprehensive educational ecosystem empowering students from Nursery to National Defence.",
    stats: [
      { val: "5,000+", lab: "Students" },
      { val: "15+",    lab: "Years" },
      { val: "3",      lab: "Wings" },
      { val: "1,200+", lab: "Selections" },
    ],
  },
  {
    type: "stats",
    tag: "🏆 Our Achievement",
    title: "Trusted by",
    highlight: "5,000+",
    title2: "Families",
    sub: "From defence aspirants to school children and competitive exam students — Sniper Group has transformed thousands of lives across the region.",
    stats: [
      { val: "1,200+", lab: "Defence Selections" },
      { val: "98%",    lab: "Board Results" },
      { val: "350+",   lab: "JEE/NEET Qualifiers" },
      { val: "15+",    lab: "Years" },
    ],
  },
  {
    type: "trust",
    tag: "🙏 Our Trust",
    title: "Bhagwan Parshuram",
    highlight: "Education",
    title2: "& Charitable Trust",
    sub: "Committed to making quality education accessible to every child regardless of background.",
  },
];

const About = () => {
  const [cur, setCur] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => { setCur((c) => (c + 1) % heroSlides.length); setFade(true); }, 300);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  function goTo(n) {
    if (n === cur) return;
    setFade(false);
    setTimeout(() => { setCur(n); setFade(true); }, 300);
  }

  const s = heroSlides[cur];

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      {/* ── 1. HERO SLIDER ── */}
      <div style={{ background: "#ffffff", padding: "20px 16px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative", minHeight: "320px", display: "flex", alignItems: "center", background: "linear-gradient(135deg, #0d1b3e 0%, #1a3260 60%, #0d1b3e 100%)", boxShadow: "0 4px 24px rgba(0,0,0,0.18)" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,66,10,0.13), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1, width: "100%", padding: "40px 56px 48px", opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.3s ease, transform 0.3s ease", textAlign: "center" }}>
              <span style={{ display: "inline-block", padding: "4px 16px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(232,66,10,0.5)", color: "#ff6b35", background: "rgba(232,66,10,0.12)" }}>{s.tag}</span>
              <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 42px)", color: "white", lineHeight: 1.2, marginBottom: "12px" }}>
                {s.title} <span style={{ color: "#ff6b35" }}>{s.highlight}</span> {s.title2}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 24px" }}>{s.sub}</p>
              {s.type === "stats" && (
                <div style={{ display: "flex", justifyContent: "center", gap: "36px", flexWrap: "wrap" }}>
                  {s.stats.map((st) => (
                    <div key={st.lab} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 800, color: "#ff6b35" }}>{st.val}</div>
                      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "3px" }}>{st.lab}</div>
                    </div>
                  ))}
                </div>
              )}
              {s.type === "trust" && <div style={{ fontSize: "44px" }}>🙏</div>}
              <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginTop: "28px" }}>
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{ height: "7px", borderRadius: "4px", border: "none", cursor: "pointer", width: i === cur ? "22px" : "7px", background: i === cur ? "#ff6b35" : "rgba(255,255,255,0.3)", transition: "all 0.3s ease", padding: 0 }} />
                ))}
              </div>
            </div>
            <button onClick={() => goTo((cur - 1 + heroSlides.length) % heroSlides.length)} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", color: "white", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={() => goTo((cur + 1) % heroSlides.length)} style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", color: "white", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
        </div>
      </div>

      {/* ── 2. OUR STORY ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>📖 Our Story</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e", marginBottom: "16px", lineHeight: 1.25 }}>
              A Legacy Built on <span style={{ color: "#e8420a" }}>Discipline</span> & Excellence
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>Sniper Group of Education was founded with a singular mission — to create a comprehensive educational ecosystem where every student receives world-class guidance and mentorship.</p>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>What started as a small defence coaching centre has grown into a full-fledged educational group with three specialized wings — each dedicated to a distinct aspect of student excellence.</p>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.8 }}>Today, with 5,000+ students trained and 1,200+ defence selections, Sniper Group stands as one of the most trusted names in education across the region.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { year: "2009", title: "Foundation", desc: "Started as Sniper Defence Academy with 50 students", color: "#FF9933" },
              { year: "2013", title: "School Wing", desc: "Launched Sniper Public School — CBSE affiliated", color: "#10b981" },
              { year: "2017", title: "Classes Wing", desc: "Opened Sniper Classes for JEE, NEET & board coaching", color: "#7c3aed" },
              { year: "2024", title: "5000+ Students", desc: "Milestone — 1,200+ defence selections achieved", color: "#e8420a" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: `${t.color}15`, border: `2px solid ${t.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 800, color: t.color, flexShrink: 0 }}>{t.year}</div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0d1b3e", marginBottom: "3px" }}>{t.title}</h4>
                  <p style={{ fontSize: "15px", color: "#334155", margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. TRUST SECTION ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>🙏 Our Trust</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.6vw, 32px)", color: "#0d1b3e" }}>
              Bhagwan Parshuram Education & <span style={{ color: "#e8420a" }}>Charitable Trust</span>
            </h2>
          </div>

          <div style={{ background: "linear-gradient(135deg, #0d1b3e, #1a3260)", borderRadius: "20px", overflow: "hidden", position: "relative", boxShadow: "0 16px 48px rgba(13,27,62,0.2)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #e8420a, #ff6b35, #e8420a)" }} />
            <div style={{ padding: "48px" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🙏</div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>
                Sniper Group operates under <strong style={{ color: "white" }}>Bhagwan Parshuram Education & Charitable Trust</strong> — committed to making quality education accessible to every child regardless of background.
              </p>
              <p style={{ color: "#ff6b35", fontSize: "18px", fontWeight: 800, marginBottom: "20px", fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "0.5px" }}>🙏 दादा परशुराम की जय</p>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.9, marginBottom: "24px" }}>The Trust actively supports merit scholarships, fee concessions for deserving students, and community welfare programs.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["✓ Registered Trust", "✓ Merit Scholarships", "✓ Community Welfare"].map((pt) => (
                  <div key={pt} style={{ padding: "8px 16px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{pt}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PRINCIPAL'S MESSAGE ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>🎓 Leadership</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>Principal's <span style={{ color: "#e8420a" }}>Message</span></h2>
          </div>
          <div style={{ background: "white", borderRadius: "20px", padding: "48px", border: "1.5px solid #eef1f8", boxShadow: "0 8px 32px rgba(13,27,62,0.06)", display: "grid", gridTemplateColumns: "200px 1fr", gap: "40px", alignItems: "start" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "140px", height: "140px", borderRadius: "50%", background: "linear-gradient(135deg, #0d1b3e, #1a3260)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px", margin: "0 auto 14px", border: "4px solid rgba(232,66,10,0.2)" }}>👨‍💼</div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "4px" }}>Sanjeev Parashar</h4>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#0d1b3e", margin: "0 0 2px" }}>Ex AIG Indian Army</p>
              <p style={{ fontSize: "14px", color: "#e8420a", fontWeight: 600 }}>Principal & Founder</p>
              <p style={{ fontSize: "14px", color: "#334155" }}>Sniper Group of Education</p>
            </div>
            <div>
              <div style={{ fontSize: "52px", color: "#e8420a", opacity: 0.15, lineHeight: 1, marginBottom: "4px", fontFamily: "'Playfair Display', Georgia, serif" }}>"</div>
              <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>At Sniper Group of Education, we believe that every student carries within them the potential for greatness. Our role as educators is not merely to teach — but to ignite that spark, nurture it with discipline, and guide it toward a purposeful future.</p>
              <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>Whether a child dreams of serving the nation in uniform, excelling in board examinations, or cracking the nation's toughest competitive tests — Sniper Group provides the environment, the mentorship, and the unwavering support.</p>
              <p style={{ color: "#0d1b3e", fontSize: "15px", lineHeight: 1.9, fontWeight: 700 }}>We don't just build students. We build futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VISION & MISSION ── */}
      <section style={{ background: "#0d1b3e", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.4)", color: "#ff6b35", background: "rgba(232,66,10,0.12)" }}>🎯 Our Purpose</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "white" }}>Vision & <span style={{ color: "#ff6b35" }}>Mission</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { icon: "🔭", title: "Our Vision",      color: "#FF9933", desc: "To be India's most trusted multi-wing educational institution — nurturing students from their first classroom to their proudest achievement." },
              { icon: "🚀", title: "Our Mission",     color: "#10b981", desc: "To empower every student with world-class knowledge, unbreakable discipline, and unwavering purpose — making excellence accessible to all." },
              { icon: "💎", title: "Our Values",      color: "#7c3aed", desc: "Discipline, integrity, perseverance, and compassion form the foundation of everything we do at Sniper Group of Education." },
              { icon: "🏆", title: "Our Commitment",  color: "#e8420a", desc: "Every student receives personalized attention, expert guidance, and the support needed to achieve their full potential." },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "28px", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = item.color + "55"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${item.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.80)", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;