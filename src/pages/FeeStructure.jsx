import { useState } from "react";

const tabs = [
  { id: "defence", label: "🛡️ Defence Academy", color: "#FF9933", bg: "#fff8f0" },
  { id: "school",  label: "📚 Public School",   color: "#10b981", bg: "#f0fdf4" },
  { id: "classes", label: "🎓 Sniper Classes",  color: "#7c3aed", bg: "#faf5ff" },
];

const feeData = {
  defence: {
    color: "#FF9933",
    bg: "#fff8f0",
    note: "Fees may vary based on batch type and duration. Contact us for exact details.",
    courses: [
      {
        name: "NDA Coaching",
        duration: "1 Year",
        fee: "₹45,000",
        perMonth: "₹4,000/mo",
        includes: ["Study Material", "Mock Tests", "SSB Guidance", "Physical Training"],
      },
      {
        name: "CDS Coaching",
        duration: "6 Months",
        fee: "₹28,000",
        perMonth: "₹5,000/mo",
        includes: ["Study Material", "Mock Tests", "Interview Prep", "OIR Practice"],
      },
      {
        name: "Sainik School Prep",
        duration: "1 Year",
        fee: "₹32,000",
        perMonth: "₹3,000/mo",
        includes: ["RIMC/RMS Prep", "Math & Science", "Mock Tests", "Doubt Sessions"],
      },
      {
        name: "SSB Interview Prep",
        duration: "2 Weeks",
        fee: "₹8,000",
        perMonth: "One-time",
        includes: ["Psychology Tests", "GTO Tasks", "Interview Practice", "Personality Dev"],
      },
    ],
  },
  school: {
    color: "#10b981",
    bg: "#f0fdf4",
    note: "Annual fees. Transport & hostel charges extra. Scholarships available for merit students.",
    courses: [
      {
        name: "Nursery — KG",
        duration: "Per Year",
        fee: "₹18,000",
        perMonth: "₹1,600/mo",
        includes: ["Activity Based Learning", "Books & Stationery", "Sports", "Art & Craft"],
      },
      {
        name: "Class 1 — 5",
        duration: "Per Year",
        fee: "₹24,000",
        perMonth: "₹2,200/mo",
        includes: ["CBSE Curriculum", "Books", "Sports", "Computer Lab"],
      },
      {
        name: "Class 6 — 8",
        duration: "Per Year",
        fee: "₹30,000",
        perMonth: "₹2,800/mo",
        includes: ["CBSE Curriculum", "Science Lab", "Sports", "Library Access"],
      },
      {
        name: "Class 9 — 10",
        duration: "Per Year",
        fee: "₹36,000",
        perMonth: "₹3,200/mo",
        includes: ["Board Prep", "Lab Practicals", "Mock Tests", "Extra Classes"],
      },
      {
        name: "Class 11 — 12",
        duration: "Per Year",
        fee: "₹42,000",
        perMonth: "₹3,800/mo",
        includes: ["Science / Commerce", "Lab Access", "Board + Competitive Prep", "Counselling"],
      },
    ],
  },
  classes: {
    color: "#7c3aed",
    bg: "#faf5ff",
    note: "Coaching fees. Hostel facility available separately. Scholarships for top scorers.",
    courses: [
      {
        name: "IIT JEE (Mains + Advanced)",
        duration: "2 Years",
        fee: "₹75,000",
        perMonth: "₹3,500/mo",
        includes: ["Physics / Chem / Math", "DPP Sheets", "Mock Tests", "Doubt Sessions"],
      },
      {
        name: "NEET Coaching",
        duration: "2 Years",
        fee: "₹70,000",
        perMonth: "₹3,200/mo",
        includes: ["Biology / Chem / Physics", "NCERT Focus", "Mock Tests", "Lab Practicals"],
      },
      {
        name: "NDA Foundation",
        duration: "1 Year",
        fee: "₹38,000",
        perMonth: "₹3,500/mo",
        includes: ["Math & GAT", "Physical Prep", "Mock Tests", "SSB Intro"],
      },
      {
        name: "Class 9 — 10 Coaching",
        duration: "1 Year",
        fee: "₹22,000",
        perMonth: "₹2,000/mo",
        includes: ["All Subjects", "Board Focus", "Weekly Tests", "Parent Reports"],
      },
      {
        name: "Class 11 — 12 Coaching",
        duration: "1 Year",
        fee: "₹32,000",
        perMonth: "₹2,800/mo",
        includes: ["Science Subjects", "Board + JEE/NEET Basics", "Mock Tests", "Doubt Sessions"],
      },
    ],
  },
};

const paymentSteps = [
  { num: "01", icon: "📋", title: "Enquire / Apply", desc: "Call us or fill the online enquiry form to express your interest." },
  { num: "02", icon: "👨‍💼", title: "Counselling",    desc: "Meet our counsellors who will guide you to the right course." },
  { num: "03", icon: "📄", title: "Form Submission", desc: "Fill the admission form and submit required documents." },
  { num: "04", icon: "💳", title: "Fee Payment",     desc: "Pay fees via cash, UPI, NEFT, or easy EMI options available." },
];

const FeeStructure = () => {
  const [active, setActive] = useState("defence");
  const data = feeData[active];
  const tab  = tabs.find(t => t.id === active);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      {/* ── 1. HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #0d1b3e 0%, #1a3260 60%, #0d1b3e 100%)",
        padding: "90px 20px 80px", position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "44px 44px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,66,10,0.12), transparent 70%)", pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
          <span style={{
            display: "inline-block", padding: "4px 16px", borderRadius: "999px",
            fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
            textTransform: "uppercase", marginBottom: "18px",
            border: "1px solid rgba(232,66,10,0.5)", color: "#ff6b35", background: "rgba(232,66,10,0.12)",
          }}>
            💰 Fee Structure
          </span>
          <h1 style={{
            fontFamily: "Georgia, serif", fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 50px)",
            color: "white", lineHeight: 1.15, marginBottom: "16px",
          }}>
            Transparent &{" "}
            <span style={{ color: "#ff6b35" }}>Affordable Fees</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
            Quality education at accessible prices — with scholarships available for deserving students
          </p>
        </div>
      </section>

      {/* ── 2. TABS ── */}
      <section style={{ background: "#ffffff", padding: "0 20px", borderBottom: "1px solid #eef1f8", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4px", overflowX: "auto" }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              padding: "18px 24px", border: "none", background: "none",
              fontSize: "14px", fontWeight: 700, cursor: "pointer",
              color: active === t.id ? t.color : "#64748b",
              borderBottom: `3px solid ${active === t.id ? t.color : "transparent"}`,
              transition: "all 0.2s ease", whiteSpace: "nowrap",
            }}>
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── 3. FEE CARDS ── */}
      <section style={{ background: "#f5f7fa", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Note */}
          <div style={{
            background: `${data.bg}`, border: `1px solid ${data.color}33`,
            borderRadius: "10px", padding: "12px 18px",
            fontSize: "13px", color: data.color, fontWeight: 600,
            marginBottom: "32px", display: "flex", alignItems: "center", gap: "8px",
          }}>
            ℹ️ {data.note}
          </div>

          {/* Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}>
            {data.courses.map((course, i) => (
              <div key={i} style={{
                background: "white", borderRadius: "16px",
                border: `1.5px solid #eef1f8`, padding: "28px",
                transition: "all 0.25s ease", cursor: "default",
                position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 12px 28px ${data.color}18`;
                  e.currentTarget.style.borderColor = data.color;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#eef1f8";
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(to right, ${data.color}, transparent)`,
                }} />

                {/* Course name */}
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "6px" }}>
                  {course.name}
                </h3>
                <p style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "20px" }}>
                  Duration: {course.duration}
                </p>

                {/* Fee display */}
                <div style={{
                  display: "flex", alignItems: "flex-end", gap: "10px",
                  marginBottom: "20px", paddingBottom: "20px",
                  borderBottom: "1px solid #f1f5f9",
                }}>
                  <div>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: "30px", fontWeight: 800, color: data.color, lineHeight: 1 }}>
                      {course.fee}
                    </div>
                    <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>Total Fee</div>
                  </div>
                  <div style={{
                    padding: "4px 10px", borderRadius: "6px",
                    background: data.bg, color: data.color,
                    fontSize: "12px", fontWeight: 600,
                    border: `1px solid ${data.color}33`,
                    marginBottom: "2px",
                  }}>
                    {course.perMonth}
                  </div>
                </div>

                {/* Includes */}
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  {course.includes.map((inc) => (
                    <div key={inc} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "50%",
                        background: `${data.color}18`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "9px", color: data.color, flexShrink: 0,
                      }}>✓</div>
                      <span style={{ fontSize: "12.5px", color: "#64748b" }}>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Enquire button */}
                <a href="tel:+917060155711" style={{
                  display: "block", textAlign: "center", marginTop: "20px",
                  padding: "10px", borderRadius: "10px",
                  background: data.bg, color: data.color,
                  fontSize: "13px", fontWeight: 700, textDecoration: "none",
                  border: `1px solid ${data.color}33`,
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = data.color; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = data.bg; e.currentTarget.style.color = data.color; }}
                >
                  Enquire About This Course
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PAYMENT PROCESS ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "999px",
              fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
              textTransform: "uppercase", marginBottom: "12px",
              border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)",
            }}>
              📋 Admission Process
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              How to <span style={{ color: "#e8420a" }}>Enrol</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {paymentSteps.map((step, i) => (
              <div key={i} style={{
                background: "#f8fafc", borderRadius: "16px", padding: "28px 24px",
                border: "1.5px solid #eef1f8", textAlign: "center",
                transition: "all 0.25s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8420a"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(232,66,10,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px",
                  background: "rgba(232,66,10,0.08)", margin: "0 auto 14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "24px",
                }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: "11px", fontWeight: 800, color: "#e8420a", letterSpacing: "1px", marginBottom: "8px" }}>
                  STEP {step.num}
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section style={{ background: "#0d1b3e", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 32px)", color: "white", marginBottom: "12px" }}>
            Contact Us for {" "}
            <span style={{ color: "#ff6b35" }}>Fee Details</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "28px" }}>
            Scholarships & EMI options available. Call us for custom fee plans.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a href="tel:+917060155711" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #e8420a, #ff6b35)",
              color: "white", padding: "13px 28px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(232,66,10,0.35)",
            }}>
              📞 Call Now — +91 7060155711
            </a>
            <a href="https://wa.me/917060155711" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", padding: "13px 28px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
            }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FeeStructure;