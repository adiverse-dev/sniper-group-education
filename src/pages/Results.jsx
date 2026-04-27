import { useState } from "react";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";

// ─────────────────────────────────────────────────────────
// HERO SLIDER SLIDES
// ─────────────────────────────────────────────────────────
const heroSlides = [
  {
    img: IMAGE_PATHS.results.hero.defence,
    imgPos: "center top",
    tag: "Fee Structure 2026–27",
    accent: "#e8420a",
    heading: "Transparent & Affordable Fees",
    sub: "Quality education at accessible prices — scholarships available for deserving students.",
    btn: "View Fee Details",
    link: "/fees",
  },
  {
    img: IMAGE_PATHS.results.hero.school,
    imgPos: "center",
    tag: "Public School Fees",
    accent: "#10b981",
    heading: "Sniper Sainik School — Session 2026–27",
    sub: "Nursery to Class 8 — CBSE Affiliated. Quarterly fee payment options available.",
    btn: "View School Fees",
    link: "/fees",
  },
  {
    img: IMAGE_PATHS.results.hero.classes,
    imgPos: "center",
    tag: "Scholarships Available",
    accent: "#7c3aed",
    heading: "Merit Scholarships & Discounts",
    sub: "Staff wards & army families get 20% off. Old students get 50% off admission fees.",
    btn: "Know More",
    link: "/fees",
  },
];

// ─────────────────────────────────────────────────────────
// RESULTS DATA
// ─────────────────────────────────────────────────────────
const resultPhotoMap = {
  "Arjun Singh": IMAGE_PATHS.results.cards.arjunSingh,
  "Vikram Yadav": IMAGE_PATHS.results.cards.vikramYadav,
  "Amit Rawat": IMAGE_PATHS.results.cards.amitRawat,
  "Rahul Tomar": IMAGE_PATHS.results.cards.rahulTomar,
  "Sanjay Bisht": IMAGE_PATHS.results.cards.sanjayBisht,
  "Deepak Negi": IMAGE_PATHS.results.cards.deepakNegi,
  "Priya Sharma": IMAGE_PATHS.results.cards.priyaSharma,
  "Ananya Verma": IMAGE_PATHS.results.cards.ananyaVerma,
  "Kavya Joshi": IMAGE_PATHS.results.cards.kavyaJoshi,
  "Ritika Singh": IMAGE_PATHS.results.cards.ritikaSingh,
  "Harsh Pandey": IMAGE_PATHS.results.cards.harshPandey,
  "Pooja Rawat": IMAGE_PATHS.results.cards.poojaRawat,
  "Rohan Mehta": IMAGE_PATHS.results.cards.rohanMehta,
  "Sneha Gupta": IMAGE_PATHS.results.cards.snehaGupta,
  "Tushar Malik": IMAGE_PATHS.results.cards.tusharMalik,
  "Neha Chauhan": IMAGE_PATHS.results.cards.nehaChauhan,
  "Shubham Rana": IMAGE_PATHS.results.cards.shubhamRana,
  "Divya Negi": IMAGE_PATHS.results.cards.divyaNegi,
};

const allResults = [
  // ── DEFENCE SELECTIONS ──
  { name: "Arjun Singh",    achievement: "NDA Selected — 148th Course",    wing: "Defence", score: "AIR 47",   scoreLabel: "All India Rank", year: "2024", color: "#FF9933", bg: "#fff8f0" },
  { name: "Vikram Yadav",   achievement: "CDS Selected — Indian Army",     wing: "Defence", score: "1st",      scoreLabel: "Battalion Rank", year: "2024", color: "#FF9933", bg: "#fff8f0" },
  { name: "Amit Rawat",     achievement: "Sainik School Entrance Cleared", wing: "Defence", score: "Top 5",    scoreLabel: "State Rank",     year: "2024", color: "#FF9933", bg: "#fff8f0" },
  { name: "Rahul Tomar",    achievement: "NDA Selected — 146th Course",    wing: "Defence", score: "AIR 112",  scoreLabel: "All India Rank", year: "2023", color: "#FF9933", bg: "#fff8f0" },
  { name: "Sanjay Bisht",   achievement: "CDS Selected — Indian Navy",     wing: "Defence", score: "AIR 88",   scoreLabel: "All India Rank", year: "2023", color: "#FF9933", bg: "#fff8f0" },
  { name: "Deepak Negi",    achievement: "NDA Selected — 144th Course",    wing: "Defence", score: "AIR 203",  scoreLabel: "All India Rank", year: "2022", color: "#FF9933", bg: "#fff8f0" },

  // ── BOARD TOPPERS ──
  { name: "Priya Sharma",   achievement: "Class 10 — District Rank 1",     wing: "School",  score: "98.6%",    scoreLabel: "Board Score",    year: "2024", color: "#10b981", bg: "#f0fdf4" },
  { name: "Ananya Verma",   achievement: "Class 12 — Science Topper",      wing: "School",  score: "97.2%",    scoreLabel: "Board Score",    year: "2024", color: "#10b981", bg: "#f0fdf4" },
  { name: "Kavya Joshi",    achievement: "Class 10 — State Rank 3",        wing: "School",  score: "99%",      scoreLabel: "Board Score",    year: "2023", color: "#10b981", bg: "#f0fdf4" },
  { name: "Ritika Singh",   achievement: "Class 12 — District Topper",     wing: "School",  score: "96.8%",    scoreLabel: "Board Score",    year: "2023", color: "#10b981", bg: "#f0fdf4" },
  { name: "Harsh Pandey",   achievement: "Class 10 — School Rank 1",       wing: "School",  score: "95.4%",    scoreLabel: "Board Score",    year: "2022", color: "#10b981", bg: "#f0fdf4" },
  { name: "Pooja Rawat",    achievement: "Class 12 — Commerce Topper",     wing: "School",  score: "94.6%",    scoreLabel: "Board Score",    year: "2022", color: "#10b981", bg: "#f0fdf4" },

  // ── JEE / NEET ──
  { name: "Rohan Mehta",    achievement: "IIT JEE Advanced Qualified",     wing: "Classes", score: "AIR 312",  scoreLabel: "JEE Advanced",   year: "2024", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Sneha Gupta",    achievement: "NEET Qualified — MBBS Seat",     wing: "Classes", score: "650/720",  scoreLabel: "NEET Score",     year: "2024", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Tushar Malik",   achievement: "JEE Mains Qualified",            wing: "Classes", score: "99.1%ile", scoreLabel: "Percentile",     year: "2023", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Neha Chauhan",   achievement: "NEET Qualified — BDS Seat",      wing: "Classes", score: "620/720",  scoreLabel: "NEET Score",     year: "2023", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Shubham Rana",   achievement: "JEE Advanced Qualified",         wing: "Classes", score: "AIR 580",  scoreLabel: "JEE Advanced",   year: "2022", color: "#7c3aed", bg: "#faf5ff" },
  { name: "Divya Negi",     achievement: "NEET Qualified — MBBS Seat",     wing: "Classes", score: "638/720",  scoreLabel: "NEET Score",     year: "2022", color: "#7c3aed", bg: "#faf5ff" },
].map((result) => ({
  ...result,
  photo: resultPhotoMap[result.name],
}));

const years = ["All", "2024", "2023", "2022"];
const wings = ["All", "Defence", "School", "Classes"];

const wingMeta = {
  Defence: { label: "🛡️ Defence", color: "#FF9933" },
  School:  { label: "📚 School",  color: "#10b981" },
  Classes: { label: "🎓 Classes", color: "#7c3aed" },
};

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

// ─────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────
const Results = () => {
  const [year, setYear] = useState("All");
  const [wing, setWing] = useState("All");

  const filtered = allResults.filter(r =>
    (year === "All" || r.year === year) &&
    (wing === "All" || r.wing === wing)
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        @media (max-width: 600px) {
          .results-filters { flex-direction: column !important; align-items: flex-start !important; }
          .results-filters-count { margin-left: 0 !important; }
        }
      `}</style>

      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider slides={heroSlides} />

      {/* ── 2. FILTERS ── */}
      <section style={{ background: "#ffffff", padding: "32px 20px", borderBottom: "1px solid #eef1f8" }}>
        <div className="results-filters" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>Year</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {years.map((y) => (
                <button key={y} onClick={() => setYear(y)}
                  style={{ padding: "6px 14px", borderRadius: "999px", cursor: "pointer", fontSize: "13px", fontWeight: 600, border: "1.5px solid", borderColor: year === y ? "#e8420a" : "#e2e8f0", background: year === y ? "rgba(232,66,10,0.08)" : "white", color: year === y ? "#e8420a" : "#64748b", transition: "all 0.2s" }}>
                  {y}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>Wing</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {wings.map((w) => (
                <button key={w} onClick={() => setWing(w)}
                  style={{ padding: "6px 14px", borderRadius: "999px", cursor: "pointer", fontSize: "13px", fontWeight: 600, border: "1.5px solid", borderColor: wing === w ? "#e8420a" : "#e2e8f0", background: wing === w ? "rgba(232,66,10,0.08)" : "white", color: wing === w ? "#e8420a" : "#64748b", transition: "all 0.2s" }}>
                  {w === "All" ? "All Wings" : wingMeta[w].label}
                </button>
              ))}
            </div>
          </div>
          <div className="results-filters-count" style={{ marginLeft: "auto", fontSize: "13px", color: "#94a3b8", fontWeight: 600 }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
          </div>
        </div>
      </section>

      {/* ── 3. CARDS GRID ── */}
      <section style={{ background: "#f5f7fa", padding: "52px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8", fontSize: "15px" }}>
              No results found for selected filters.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {filtered.map((r, i) => (
                <div key={i}
                  style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", padding: "24px", transition: "all 0.25s ease", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 28px ${r.color}18`; e.currentTarget.style.borderColor = r.color; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#eef1f8"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `linear-gradient(135deg, ${r.color}, ${r.color}99)`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "14px", fontWeight: 700 }}>
                      <span>{getInitials(r.name)}</span>
	                      <img
	                        src={r.photo}
	                        alt={r.name}
	                        loading="lazy"
	                        decoding="async"
	                        onError={(e) => { e.currentTarget.style.display = "none"; }}
	                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
	                      />
                    </div>
                    <div style={{ background: r.bg, borderRadius: "10px", padding: "6px 12px", textAlign: "center", border: `1px solid ${r.color}33` }}>
                      <div style={{ fontSize: "15px", fontWeight: 800, color: r.color, fontFamily: "'Playfair Display', Georgia, serif" }}>{r.score}</div>
                      <div style={{ fontSize: "9px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>{r.scoreLabel}</div>
                    </div>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "4px" }}>{r.name}</h3>
                  <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "14px" }}>{r.achievement}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 600, background: r.bg, color: r.color, border: `1px solid ${r.color}33` }}>
                      {wingMeta[r.wing].label}
                    </span>
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
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 32px)", color: "white", marginBottom: "12px" }}>
            Your Name Could <span style={{ color: "#ff6b35" }}>Be Here!</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "28px" }}>
            Join Sniper Group and become the next success story
          </p>
          <a href="tel:+917060155711"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #e8420a, #ff6b35)", color: "white", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(232,66,10,0.35)" }}>
            📞 Enquire Now — +91 7060155711
          </a>
        </div>
      </section>
    </div>
  );
};

export default Results;
