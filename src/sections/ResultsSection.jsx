import { COMPANY_TEXT } from "../config/companyProfile";

const results = [
  {
    name: "Cadet Arjun Singh",
    achievement: "NDA Selected — 148th Course",
    wing: "Defence Academy",
    wingColor: "#FF9933",
    wingBg: "#fff8f0",
    avatar: "AS",
    score: "AIR 47",
    scoreLabel: "All India Rank",
    year: "2024",
  },
  {
    name: "Priya Sharma",
    achievement: "Class 10 — District Rank 1",
    wing: "Public School",
    wingColor: "#10b981",
    wingBg: "#f0fdf4",
    avatar: "PS",
    score: "98.6%",
    scoreLabel: "Board Score",
    year: "2024",
  },
  {
    name: "Rohan Mehta",
    achievement: "IIT JEE Advanced Qualified",
    wing: "Sniper Classes",
    wingColor: "#7c3aed",
    wingBg: "#faf5ff",
    avatar: "RM",
    score: "AIR 312",
    scoreLabel: "JEE Advanced",
    year: "2024",
  },
  {
    name: "Vikram Yadav",
    achievement: "CDS Selected — Indian Army",
    wing: "Defence Academy",
    wingColor: "#FF9933",
    wingBg: "#fff8f0",
    avatar: "VY",
    score: "1st",
    scoreLabel: "Battalion Rank",
    year: "2024",
  },
  
];

const stats = [
  { val: "1,200+", lab: "Defence Selections", color: "#FF9933" },
  { val: "98%",    lab: "Board Pass Rate",    color: "#10b981" },
  { val: "350+",   lab: "JEE/NEET Qualifiers",color: "#7c3aed" },
  { val: COMPANY_TEXT.yearsPlus, lab: "Years of Results", color: "#e8420a" },
];

function ResultsSection() {
  return (
    <section style={{ background: "#ffffff", padding: "72px 20px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{
            display: "inline-block", padding: "4px 14px", borderRadius: "999px",
            fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
            textTransform: "uppercase", marginBottom: "12px",
            border: "1px solid rgba(232,66,10,0.3)",
            color: "#e8420a", background: "rgba(232,66,10,0.07)",
          }}>
            🏆 Our Results
          </span>
          <h2 style={{
            fontFamily: "Georgia, serif", fontWeight: 800,
            fontSize: "clamp(26px, 3vw, 38px)",
            color: "#0d1b3e", marginBottom: "10px",
          }}>
            Our Students,{" "}
            <span style={{ color: "#e8420a" }}>Our Pride</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "15px", maxWidth: "500px", margin: "0 auto" }}>
            Real achievements from real students — across all three wings of Sniper Group
          </p>
          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "18px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #e8420a)" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e8420a" }} />
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #e8420a)" }} />
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "16px", marginBottom: "52px",
          background: "#0d1b3e", borderRadius: "16px",
          padding: "28px 32px",
        }}>
          {stats.map((s) => (
            <div key={s.lab} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "Georgia, serif", fontSize: "32px",
                fontWeight: 800, color: s.color, marginBottom: "4px",
              }}>
                {s.val}
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>
                {s.lab}
              </div>
            </div>
          ))}
        </div>

        {/* Result Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {results.map((r, i) => (
            <div key={i}
              style={{
                background: "#f5f7fa", borderRadius: "16px",
                border: "1.5px solid #eef1f8", padding: "24px",
                transition: "all 0.25s ease", cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = r.wingColor;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#eef1f8";
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                {/* Avatar */}
                <div style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  background: `linear-gradient(135deg, ${r.wingColor}, ${r.wingColor}aa)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: "14px", fontWeight: 700,
                }}>
                  {r.avatar}
                </div>

                {/* Score badge */}
                <div style={{
                  background: r.wingBg, borderRadius: "10px",
                  padding: "6px 12px", textAlign: "center",
                  border: `1px solid ${r.wingColor}33`,
                }}>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: r.wingColor, fontFamily: "Georgia, serif" }}>
                    {r.score}
                  </div>
                  <div style={{ fontSize: "9px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {r.scoreLabel}
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "4px" }}>
                {r.name}
              </h3>

              {/* Achievement */}
              <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "12px" }}>
                {r.achievement}
              </p>

              {/* Wing tag */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  display: "inline-block", padding: "3px 10px",
                  borderRadius: "999px", fontSize: "10.5px", fontWeight: 600,
                  background: r.wingBg, color: r.wingColor,
                  border: `1px solid ${r.wingColor}33`,
                }}>
                  {r.wing}
                </span>
                <span style={{ fontSize: "11px", color: "#94a3b8" }}>{r.year}</span>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: "#e8420a", fontSize: "11px" }}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ResultsSection;
