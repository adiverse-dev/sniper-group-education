const steps = [
  {
    num: "01",
    icon: "🎯",
    title: "Choose Your Wing",
    desc: "Select from Defence Academy, Public School, or Sniper Classes based on your goal and aspirations.",
    color: "#FF9933",
    bg: "#fff8f0",
  },
  {
    num: "02",
    icon: "📋",
    title: "Fill the Enquiry Form",
    desc: "Submit your basic details online or visit us directly. Our counsellors will guide you through the process.",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    num: "03",
    icon: "👨‍💼",
    title: "Counselling Session",
    desc: "Meet our expert counsellors who will understand your goals and recommend the best suitable program.",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    num: "04",
    icon: "🏆",
    title: "Begin Your Journey",
    desc: "Complete admission formalities and join Sniper Group. Your path to excellence starts here!",
    color: "#e8420a",
    bg: "#fff5f0",
  },
];

function JourneySteps() {
  return (
    <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span style={{
            display: "inline-block", padding: "4px 14px", borderRadius: "999px",
            fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
            textTransform: "uppercase", marginBottom: "10px",
            border: "1px solid rgba(232,66,10,0.3)",
            color: "#e8420a", background: "rgba(232,66,10,0.07)",
          }}>
            🗺️ Admission Process
          </span>
          <h2 style={{
            fontFamily: "Georgia, serif", fontWeight: 800,
            fontSize: "clamp(24px, 2.8vw, 36px)",
            color: "#0d1b3e", marginBottom: "8px",
          }}>
            Your Journey with <span style={{ color: "#e8420a" }}>Sniper Group</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "480px", margin: "0 auto" }}>
            Four simple steps to begin your path to excellence
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          position: "relative",
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{ position: "relative" }}>

              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute", top: "36px", right: "-10px",
                  width: "20px", height: "2px",
                  background: "linear-gradient(to right, #e8420a, transparent)",
                  zIndex: 1, display: window.innerWidth < 768 ? "none" : "block",
                }} />
              )}

              {/* Card */}
              <div style={{
                background: "white", borderRadius: "16px",
                padding: "28px 24px", height: "100%",
                border: "1.5px solid #eef1f8",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = step.color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px ${step.color}22`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#eef1f8";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Number + Icon */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    background: step.bg, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: "22px", flexShrink: 0,
                  }}>
                    {step.icon}
                  </div>
                  <span style={{
                    fontSize: "28px", fontWeight: 900,
                    color: step.color, opacity: 0.25,
                    fontFamily: "Georgia, serif", lineHeight: 1,
                  }}>
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "15px", fontWeight: 700,
                  color: "#0d1b3e", marginBottom: "8px",
                }}>
                  {step.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize: "12.5px", color: "#64748b",
                  lineHeight: 1.7, margin: 0,
                }}>
                  {step.desc}
                </p>

                {/* Bottom accent */}
                <div style={{
                  marginTop: "18px", height: "3px", borderRadius: "2px",
                  background: `linear-gradient(to right, ${step.color}, transparent)`,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <a href="tel:+917060155711" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #e8420a, #ff6b35)",
            color: "white", padding: "12px 28px", borderRadius: "999px",
            fontSize: "14px", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 4px 14px rgba(232,66,10,0.3)",
          }}>
            📞 Start Your Journey — Call Now
          </a>
        </div>

      </div>
    </section>
  );
}

export default JourneySteps;