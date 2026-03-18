import { Link } from "react-router-dom";

const cards = [
  {
    tag: "Wing 01",
    icon: "🛡️",
    name: "Sniper Defence Academy",
    tagline: "Forge the Warrior Within",
    desc: "Elite coaching for NDA, CDS, Sainik School & all defence entrance examinations. Rigorous academics meets physical excellence.",
    highlights: ["NDA / CDS Coaching", "Physical Training", "SSB Interview Prep"],
    link: "/defence",
    color: "#FF9933",
    bgColor: "#fff8f0",
    iconBg: "#fff3e0",
  },
  {
    tag: "Wing 02",
    icon: "📚",
    name: "Sniper Public School",
    tagline: "Nurturing Young Minds",
    desc: "CBSE affiliated school from Nursery to Class 8. A holistic learning environment that blends discipline and creativity.",
    highlights: ["CBSE Curriculum", "Smart Classrooms", "Activity-Based Learning"],
    link: "/school",
    color: "#10b981",
    bgColor: "#f0fdf4",
    iconBg: "#d1fae5",
  },
  {
    tag: "Wing 03",
    icon: "🎓",
    name: "Sniper Classes",
    tagline: "Crack Every Exam",
    desc: "Specialized coaching for Class 9–12, IIT JEE, NEET & NDA Foundation programs. Expert faculty, proven results.",
    highlights: ["IIT JEE / NEET", "NDA Foundation", "Board Excellence (9–12)"],
    link: "/classes",
    color: "#7c3aed",
    bgColor: "#faf5ff",
    iconBg: "#ede9fe",
  },
];

function WhatAreYouLookingFor() {
  return (
    <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            display: "inline-block", padding: "4px 14px", borderRadius: "999px",
            fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
            textTransform: "uppercase", marginBottom: "12px",
            border: "1px solid rgba(232,66,10,0.3)",
            color: "#e8420a", background: "rgba(232,66,10,0.07)",
          }}>
            Our Wings
          </span>
          <h2 style={{
            fontFamily: "Georgia, serif", fontWeight: 800,
            fontSize: "clamp(26px, 3vw, 40px)",
            color: "#0d1b3e", marginBottom: "10px",
          }}>
            What Are You Looking For?
          </h2>
          <p style={{ color: "#64748b", fontSize: "15px", maxWidth: "520px", margin: "0 auto" }}>
            Three specialized divisions, united by one purpose — your success.
          </p>
          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "18px" }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #e8420a)" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e8420a" }} />
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #e8420a)" }} />
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {cards.map((c) => (
            <Link key={c.link} to={c.link} style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <div
                style={{
                  background: c.bgColor, borderRadius: "16px",
                  border: `1px solid #e8e8e8`,
                  borderTop: `4px solid ${c.color}`,
                  padding: "32px", height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Tag */}
                <span style={{
                  fontSize: "11px", fontFamily: "monospace",
                  letterSpacing: "3px", textTransform: "uppercase",
                  color: c.color, opacity: 0.7,
                }}>
                  {c.tag}
                </span>

                {/* Icon */}
                <div style={{
                  marginTop: "16px", marginBottom: "20px",
                  width: "56px", height: "56px", borderRadius: "14px",
                  background: c.iconBg, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "26px",
                }}>
                  {c.icon}
                </div>

                {/* Name */}
                <h3 style={{
                  fontSize: "18px", fontWeight: 700,
                  fontFamily: "Georgia, serif",
                  color: "#0d1b3e", marginBottom: "4px",
                }}>
                  {c.name}
                </h3>

                {/* Tagline */}
                <p style={{ fontSize: "13px", fontWeight: 600, color: c.color, marginBottom: "14px" }}>
                  {c.tagline}
                </p>

                {/* Desc */}
                <p style={{ fontSize: "13px", color: "rgba(13,27,62,0.55)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {c.desc}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0" }}>
                  {c.highlights.map((h) => (
                    <li key={h} style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      fontSize: "12px", color: "rgba(13,27,62,0.6)",
                      marginBottom: "6px",
                    }}>
                      <div style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: c.color, flexShrink: 0,
                      }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Explore link */}
                <div style={{
                  fontSize: "13px", fontWeight: 700,
                  color: c.color, display: "flex",
                  alignItems: "center", gap: "6px",
                }}>
                  Explore Wing →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatAreYouLookingFor;