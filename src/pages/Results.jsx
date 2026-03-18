import { useState, useEffect } from "react";

const heroSlides = [
  {
    type: "stats",
    tag: "🏆 Our Results",
    title: "Our Students,",
    highlight: "Our Pride",
    title2: "",
    sub: "Real achievements from real students — across Defence, School & Coaching wings.",
    stats: [
      { val: "1,200+", lab: "Defence Selections" },
      { val: "98%",    lab: "Board Pass Rate" },
      { val: "350+",   lab: "JEE/NEET Qualifiers" },
      { val: "15+",    lab: "Years of Results" },
    ],
  },
  {
    type: "stats",
    tag: "🛡️ Defence Wing",
    title: "1,200+ Defence",
    highlight: "Selections",
    title2: "& Counting",
    sub: "NDA, CDS, AFCAT, Sainik School — our students serve the nation with pride.",
    stats: [
      { val: "1,200+", lab: "Selections" },
      { val: "AIR 47",  lab: "Best NDA Rank" },
      { val: "148th",   lab: "Latest NDA Course" },
      { val: "15+",     lab: "Years" },
    ],
  },
  {
    type: "stats",
    tag: "📚 School & Classes Wing",
    title: "98% Board",
    highlight: "Results",
    title2: "Every Year",
    sub: "District toppers, state rankers, JEE & NEET qualifiers — excellence is our standard.",
    stats: [
      { val: "98%",    lab: "Board Pass Rate" },
      { val: "350+",   lab: "JEE/NEET Qualifiers" },
      { val: "Rank 1", lab: "District Topper" },
      { val: "99%ile", lab: "Best JEE Percentile" },
    ],
  },
];

const allResults = [
  // ── DEFENCE SELECTIONS ──
  { name: "Arjun Singh",    achievement: "NDA Selected — 148th Course",   wing: "Defence", score: "AIR 47",   scoreLabel: "All India Rank", year: "2024", color: "#FF9933", bg: "#fff8f0" },
  { name: "Vikram Yadav",   achievement: "CDS Selected — Indian Army",    wing: "Defence", score: "1st",      scoreLabel: "Battalion Rank", year: "2024", color: "#FF9933", bg: "#fff8f0" },
  { name: "Amit Rawat",     achievement: "Sainik School Entrance Cleared",wing: "Defence", score: "Top 5",    scoreLabel: "State Rank",     year: "2024", color: "#FF9933", bg: "#fff8f0" },
  { name: "Rahul Tomar",    achievement: "NDA Selected — 146th Course",   wing: "Defence", score: "AIR 112",  scoreLabel: "All India Rank", year: "2023", color: "#FF9933", bg: "#fff8f0" },
  { name: "Sanjay Bisht",   achievement: "CDS Selected — Indian Navy",    wing: "Defence", score: "AIR 88",   scoreLabel: "All India Rank", year: "2023", color: "#FF9933", bg: "#fff8f0" },
  { name: "Deepak Negi",    achievement: "NDA Selected — 144th Course",   wing: "Defence", score: "AIR 203",  scoreLabel: "All India Rank", year: "2022", color: "#FF9933", bg: "#fff8f0" },

  // ── BOARD TOPPERS ──
  { name: "Priya Sharma",   achievement: "Class 10 — District Rank 1",    wing: "School",  score: "98.6%",    scoreLabel: "Board Score",    year: "2024", color: "#10b981", bg: "#f0fdf4" },
  { name: "Ananya Verma",   achievement: "Class 12 — Science Topper",     wing: "School",  score: "97.2%",    scoreLabel: "Board Score",    year: "2024", color: "#10b981", bg: "#f0fdf4" },
  { name: "Kavya Joshi",    achievement: "Class 10 — State Rank 3",       wing: "School",  score: "99%",      scoreLabel: "Board Score",    year: "2023", color: "#10b981", bg: "#f0fdf4" },
  { name: "Ritika Singh",   achievement: "Class 12 — District Topper",    wing: "School",  score: "96.8%",    scoreLabel: "Board Score",    year: "2023", color: "#10b981", bg: "#f0fdf4" },
  { name: "Harsh Pandey",   achievement: "Class 10 — School Rank 1",      wing: "School",  score: "95.4%",    scoreLabel: "Board Score",    year: "2022", color: "#10b981", bg: "#f0fdf4" },
  { name: "Pooja Rawat",    achievement: "Class 12 — Commerce Topper",    wing: "School",  score: "94.6%",    scoreLabel: "Board Score",    year: "2022", color: "#10b981", bg: "#f0fdf4" },

  // ── JEE / NEET ──
  { name: "Rohan Mehta",    achievement: "IIT JEE Advanced Qualified",    wing: "Classes", score: "AIR 312",  scoreLabel: "JEE Advanced",   year: "2024", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Sneha Gupta",    achievement: "NEET Qualified — MBBS Seat",    wing: "Classes", score: "650/720",  scoreLabel: "NEET Score",     year: "2024", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Tushar Malik",   achievement: "JEE Mains Qualified",           wing: "Classes", score: "99.1%ile", scoreLabel: "Percentile",     year: "2023", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Neha Chauhan",   achievement: "NEET Qualified — BDS Seat",     wing: "Classes", score: "620/720",  scoreLabel: "NEET Score",     year: "2023", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Shubham Rana",   achievement: "JEE Advanced Qualified",        wing: "Classes", score: "AIR 580",  scoreLabel: "JEE Advanced",   year: "2022", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Divya Negi",     achievement: "NEET Qualified — MBBS Seat",    wing: "Classes", score: "638/720",  scoreLabel: "NEET Score",     year: "2022", color: "#7c3aed", bg: "#faf5ff" },
];

const years = ["All", "2024", "2023", "2022"];
const wings = ["All", "Defence", "School", "Classes"];

const wingMeta = {
  Defence: { label: "🛡️ Defence",  color: "#FF9933" },
  School:  { label: "📚 School",   color: "#10b981" },
  Classes: { label: "🎓 Classes",  color: "#7c3aed" },
};

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

const Results = () => {
  const [year, setYear] = useState("All");
  const [wing, setWing] = useState("All");
  const [cur, setCur]   = useState(0);
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

  const filtered = allResults.filter(r =>
    (year === "All" || r.year === year) &&
    (wing === "All" || r.wing === wing)
  );

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

      {/* ── 2. FILTERS ── */}
      <section style={{ background: "#ffffff", padding: "32px 20px", borderBottom: "1px solid #eef1f8" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>Year</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {years.map((y) => (
                <button key={y} onClick={() => setYear(y)} style={{ padding: "6px 14px", borderRadius: "999px", cursor: "pointer", fontSize: "13px", fontWeight: 600, border: "1.5px solid", borderColor: year === y ? "#e8420a" : "#e2e8f0", background: year === y ? "rgba(232,66,10,0.08)" : "white", color: year === y ? "#e8420a" : "#64748b", transition: "all 0.2s" }}>{y}</button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>Wing</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {wings.map((w) => (
                <button key={w} onClick={() => setWing(w)} style={{ padding: "6px 14px", borderRadius: "999px", cursor: "pointer", fontSize: "13px", fontWeight: 600, border: "1.5px solid", borderColor: wing === w ? "#e8420a" : "#e2e8f0", background: wing === w ? "rgba(232,66,10,0.08)" : "white", color: wing === w ? "#e8420a" : "#64748b", transition: "all 0.2s" }}>{w === "All" ? "All Wings" : wingMeta[w].label}</button>
              ))}
            </div>
          </div>
          <div style={{ marginLeft: "auto", fontSize: "13px", color: "#94a3b8", fontWeight: 600 }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
          </div>
        </div>
      </section>

      {/* ── 3. CARDS GRID ── */}
      <section style={{ background: "#f5f7fa", padding: "52px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8", fontSize: "15px" }}>No results found for selected filters.</div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {filtered.map((r, i) => (
                <div key={i}
                  style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", padding: "24px", transition: "all 0.25s ease", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 28px ${r.color}18`; e.currentTarget.style.borderColor = r.color; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#eef1f8"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `linear-gradient(135deg, ${r.color}, ${r.color}99)`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "14px", fontWeight: 700 }}>{getInitials(r.name)}</div>
                    <div style={{ background: r.bg, borderRadius: "10px", padding: "6px 12px", textAlign: "center", border: `1px solid ${r.color}33` }}>
                      <div style={{ fontSize: "15px", fontWeight: 800, color: r.color, fontFamily: "Georgia, serif" }}>{r.score}</div>
                      <div style={{ fontSize: "9px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.scoreLabel}</div>
                    </div>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "4px" }}>{r.name}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "14px" }}>{r.achievement}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 600, background: r.bg, color: r.color, border: `1px solid ${r.color}33` }}>{wingMeta[r.wing].label}</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "white", background: "#0d1b3e", borderRadius: "6px", padding: "3px 8px" }}>{r.year}</span>
                  </div>
                  <div style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
                    {[...Array(5)].map((_, j) => (<span key={j} style={{ color: "#e8420a", fontSize: "11px" }}>★</span>))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 4. BOTTOM CTA ── */}
      <section style={{ background: "#0d1b3e", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 32px)", color: "white", marginBottom: "12px" }}>
            Your Name Could <span style={{ color: "#ff6b35" }}>Be Here!</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "28px" }}>Join Sniper Group and become the next success story</p>
          <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #e8420a, #ff6b35)", color: "white", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(232,66,10,0.35)" }}>
            📞 Enquire Now — +91 7060155711
          </a>
        </div>
      </section>

    </div>
  );
};

export default Results;