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
    photo: "./img/students/school_main.png",
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
    photo: "./img/students/nursery.png",
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
    photo: "./img/students/class15.png",
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
    photo: "./img/students/class68school.png",
  },
];

const courses = [
  {
    id: "nursery",
    name: "Nursery – KG",
    full: "Nursery to Kindergarten — Early Childhood Education",
    fee: "₹18,000/yr",
    icon: "🌱",
    photo: "./img/students/nursery.png",
    cat: "Early Childhood",
    stats: [{ v: "Age 3–6", l: "Eligibility" }, { v: "Activity Based", l: "Learning" }, { v: "1 Year", l: "Duration" }],
    desc: "Activity-based early childhood education focusing on foundational skills, creativity, basic phonics and social development.",
    eligibility: [
      "Age 3 to 6 years",
      "No prior schooling required",
      "Both boys and girls",
      "Any background accepted",
    ],
    examPattern: [
      { subject: "Language & Phonics", marks: "—", type: "Activity" },
      { subject: "Mathematics Basics", marks: "—", type: "Activity" },
      { subject: "Art & Craft", marks: "—", type: "Creative" },
      { subject: "Environmental Awareness", marks: "—", type: "Activity" },
    ],
    selection: ["Online / Walk-in Admission Enquiry", "Document Submission", "Interaction Session", "Admission Confirmation"],
    includes: ["Activity Based Learning", "Art & Craft Sessions", "Music & Dance", "Basic Phonics & Numbers"],
  },
  {
    id: "class15",
    name: "Class 1 – 5",
    full: "Class 1 to 5 — CBSE Foundation",
    fee: "₹24,000/yr",
    icon: "📖",
    photo: "./img/students/class15.png",
    cat: "Primary School",
    stats: [{ v: "Class 1–5", l: "Level" }, { v: "CBSE", l: "Curriculum" }, { v: "1 Year", l: "Duration" }],
    desc: "Strong foundational education following CBSE curriculum with focus on conceptual clarity, computer lab and all-round development.",
    eligibility: [
      "Age-appropriate class entry",
      "Previous class passed certificate",
      "CBSE / any board background",
      "Hindi & English Medium both",
    ],
    examPattern: [
      { subject: "Mathematics", marks: "100", type: "Written" },
      { subject: "English", marks: "100", type: "Written" },
      { subject: "Hindi", marks: "100", type: "Written" },
      { subject: "Environmental Studies", marks: "100", type: "Written" },
    ],
    selection: ["Admission Enquiry", "Previous Report Card Verification", "Interaction with Child", "Admission & Fee Submission"],
    includes: ["CBSE Curriculum", "Computer Lab Access", "Sports & Games", "Library Access"],
  },
  {
    id: "class68",
    name: "Class 6 – 8",
    full: "Class 6 to 8 — Middle School Excellence",
    fee: "₹30,000/yr",
    icon: "🔬",
    photo: "./img/students/class68school.png",
    cat: "Middle School",
    stats: [{ v: "Class 6–8", l: "Level" }, { v: "Science Lab", l: "Facility" }, { v: "1 Year", l: "Duration" }],
    desc: "Middle school education with science labs, mathematics focus, English communication and competitive exam foundation building.",
    eligibility: [
      "Class 5 passed for Class 6",
      "Class 6 / 7 passed for respective classes",
      "CBSE / UP Board background",
      "Hindi & English Medium both",
    ],
    examPattern: [
      { subject: "Mathematics", marks: "100", type: "Written" },
      { subject: "Science", marks: "100", type: "Written + Practical" },
      { subject: "Social Science", marks: "100", type: "Written" },
      { subject: "English / Hindi", marks: "100", type: "Written" },
    ],
    selection: ["Admission Enquiry", "Previous Class Certificate", "Entry Level Test", "Admission Confirmation"],
    includes: ["Science Lab Sessions", "Math Special Focus", "English Communication", "Sports & Co-curricular"],
  },
];

const features = [
  { icon: "🏫", title: "CBSE Affiliated",       desc: "Fully affiliated with CBSE board ensuring national standard curriculum.", photo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80&fit=crop&crop=center" },
  { icon: "🔬", title: "Modern Labs",            desc: "Well-equipped science, computer and language labs for hands-on learning.", photo: "https://images.unsplash.com/photo-1532094349884-543559373729?w=600&q=80&fit=crop&crop=center" },
  { icon: "⚽", title: "Sports & Activities",   desc: "Cricket, football, athletics and indoor games for physical development.", photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center" },
  { icon: "📚", title: "Experienced Teachers",  desc: "Qualified and dedicated faculty with years of teaching experience.", photo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&fit=crop&crop=center" },
  { icon: "👨‍👩‍👧", title: "Parent Connect",       desc: "Regular PTMs and parent-teacher communication for student progress.", photo: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80&fit=crop&crop=center" },
  { icon: "🏆", title: "Merit Scholarships",    desc: "Fee concessions and scholarships for top-performing students.", photo: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&q=80&fit=crop&crop=center" },
];

// ── COURSE DETAIL PANEL ──
const CourseDetail = ({ course, activeDetail, setActiveDetail }) => {
  const tabs = [
    { key: "eligibility", label: "📋 Eligibility" },
    { key: "exam",        label: "📝 Subjects" },
    { key: "selection",   label: "🏆 Admission Process" },
    { key: "includes",    label: "✅ What's Included" },
  ];

  return (
    <div
      id="course-detail"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        border: "2px solid rgba(16,185,129,0.35)",
        background: "#f0fdf4",
        marginTop: "8px",
        marginBottom: "8px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d1b3e, #0d3d2e)",
          padding: "22px 28px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "52px", height: "52px", borderRadius: "14px",
            background: "rgba(16,185,129,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "26px", flexShrink: 0,
          }}
        >
          {course.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>
            {course.name} — {course.full}
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "3px" }}>
            {course.desc}
          </div>
        </div>
        <div
          style={{
            padding: "10px 18px", background: "rgba(16,185,129,0.15)",
            borderRadius: "10px", textAlign: "center", flexShrink: 0,
          }}
        >
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>
            Annual Fee
          </div>
          <div style={{ fontSize: "20px", fontWeight: 800, color: "#34d399" }}>{course.fee}</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: "white", borderBottom: "1px solid #d1fae5", overflowX: "auto" }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={(e) => { e.stopPropagation(); setActiveDetail(tab.key); }}
            style={{
              padding: "14px 20px", fontSize: "13px", fontWeight: 600,
              border: "none", background: "transparent", cursor: "pointer",
              whiteSpace: "nowrap", transition: "all 0.2s",
              borderBottom: activeDetail === tab.key ? "3px solid #10b981" : "3px solid transparent",
              color: activeDetail === tab.key ? "#10b981" : "#64748b",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Body */}
      <div style={{ padding: "28px 32px" }} onClick={(e) => e.stopPropagation()}>
        {activeDetail === "eligibility" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
            {course.eligibility.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", background: "white", borderRadius: "12px", border: "1px solid #d1fae5" }}>
                <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#10b981", flexShrink: 0, fontWeight: 700 }}>✓</div>
                <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        )}

        {activeDetail === "exam" && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "380px" }}>
              <thead>
                <tr style={{ background: "rgba(16,185,129,0.07)" }}>
                  <th style={{ padding: "12px 18px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Subject</th>
                  <th style={{ padding: "12px 18px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Marks</th>
                  <th style={{ padding: "12px 18px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {course.examPattern.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #d1fae5", background: i % 2 === 0 ? "white" : "#f0fdf4" }}>
                    <td style={{ padding: "14px 18px", fontSize: "15px", color: "#1e293b", fontWeight: 500 }}>{row.subject}</td>
                    <td style={{ padding: "14px 18px", textAlign: "center", fontSize: "17px", fontWeight: 800, color: "#10b981" }}>{row.marks}</td>
                    <td style={{ padding: "14px 18px", textAlign: "center" }}>
                      <span style={{ padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, background: "rgba(16,185,129,0.1)", color: "#10b981" }}>{row.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeDetail === "selection" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {course.selection.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #10b981, #34d399)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "white" }}>
                    {i + 1}
                  </div>
                  {i < course.selection.length - 1 && (
                    <div style={{ width: "2px", height: "44px", background: "rgba(16,185,129,0.25)" }} />
                  )}
                </div>
                <div style={{ paddingTop: "10px", paddingBottom: i < course.selection.length - 1 ? "28px" : "0" }}>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b", margin: 0 }}>{step}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeDetail === "includes" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
            {course.includes.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", background: "white", borderRadius: "12px", border: "1px solid #d1fae5" }}>
                <div style={{ fontSize: "20px", flexShrink: 0 }}>✅</div>
                <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{ padding: "16px 32px", background: "white", borderTop: "1px solid #d1fae5" }}>
        <a
          href="tel:+917060155711"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #10b981, #34d399)",
            color: "white", padding: "11px 22px", borderRadius: "999px",
            fontSize: "14px", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
          }}
        >
          📞 Enquire About {course.name} Admission
        </a>
      </div>
    </div>
  );
};

// ── COURSE ROW (zigzag) ──
const CourseRow = ({ course, index, selectedCourse, setSelectedCourse, activeDetail, setActiveDetail }) => {
  const isReverse = index % 2 === 1;
  const isSelected = selectedCourse?.id === course.id;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mobile: always column. On desktop: zigzag
  const rowDirection = isMobile ? "column" : (isReverse ? "row-reverse" : "row");

  const handleClick = () => {
    if (isSelected) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(course);
      setActiveDetail("eligibility");
      setTimeout(() => {
        document.getElementById("course-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      {/* Row card */}
      <div
        onClick={handleClick}
        style={{
          display: "flex",
          flexDirection: rowDirection,
          borderRadius: "20px",
          overflow: "hidden",
          border: isSelected ? "2px solid #10b981" : "1.5px solid #eef1f8",
          background: "white",
          cursor: "pointer",
          transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
          boxShadow: isSelected ? "0 12px 36px rgba(16,185,129,0.18)" : "0 2px 12px rgba(0,0,0,0.06)",
        }}
        onMouseEnter={(e) => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = "#10b981";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(16,185,129,0.14)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = "#eef1f8";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
          }
        }}
      >
        {/* ── IMAGE SIDE ── */}
        <div
          style={{
            width: isMobile ? "100%" : "42%",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            minHeight: isMobile ? "220px" : "260px",
          }}
        >
          <img
            src={course.photo}
            alt={course.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              transition: "transform 0.5s ease",
            }}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop";
            }}
          />

          {/* Green top bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #10b981, #34d399)", zIndex: 3 }} />

          {/* Fee badge — always top right on mobile */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              background: "#10b981",
              color: "white",
              fontSize: "13px",
              fontWeight: 700,
              padding: "5px 14px",
              borderRadius: "999px",
              zIndex: 2,
              boxShadow: "0 2px 8px rgba(16,185,129,0.4)",
            }}
          >
            {course.fee}
          </div>

          {/* Category badge — always bottom left on mobile */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              left: "14px",
              background: "rgba(13,27,62,0.85)",
              color: "white",
              fontSize: "11px",
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: "999px",
              zIndex: 2,
              letterSpacing: "0.5px",
            }}
          >
            {course.cat}
          </div>

          {/* Fade edge — only on desktop */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                top: 0, bottom: 0,
                width: "80px",
                ...(isReverse
                  ? { left: 0, background: "linear-gradient(to right, white, transparent)" }
                  : { right: 0, background: "linear-gradient(to left, white, transparent)" }),
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          )}
        </div>

        {/* ── CONTENT SIDE ── */}
        <div
          style={{
            flex: 1,
            padding: isMobile ? "20px 18px" : "32px 36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            background: isSelected ? "linear-gradient(135deg, #0d1b3e, #0d3d2e)" : "white",
            transition: "background 0.3s ease",
          }}
        >
          {/* Accent bar — only desktop */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                top: 0, bottom: 0,
                width: "4px",
                background: "linear-gradient(to bottom, #10b981, #34d399)",
                ...(isReverse ? { right: 0 } : { left: 0 }),
              }}
            />
          )}

          {/* Icon + Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <div
              style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: isSelected ? "rgba(16,185,129,0.15)" : "rgba(16,185,129,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", flexShrink: 0,
              }}
            >
              {course.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: isMobile ? "17px" : "20px", fontWeight: 800,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: isSelected ? "white" : "#0d1b3e",
                  lineHeight: 1.2,
                }}
              >
                {course.name}
              </div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#10b981", marginTop: "2px" }}>
                {course.full}
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "14px",
              color: isSelected ? "rgba(255,255,255,0.75)" : "#334155",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            {course.desc}
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              border: `1px solid ${isSelected ? "rgba(16,185,129,0.3)" : "#eef1f8"}`,
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "18px",
            }}
          >
            {course.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  borderRight: i < course.stats.length - 1
                    ? `1px solid ${isSelected ? "rgba(16,185,129,0.2)" : "#eef1f8"}`
                    : "none",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>
                  {s.v}
                </div>
                <div style={{ fontSize: "10px", color: isSelected ? "rgba(255,255,255,0.5)" : "#94a3b8", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "2px" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* View details */}
          <div>
            <span
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "13px", fontWeight: 700, color: "#10b981",
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.3)",
                padding: "7px 16px", borderRadius: "999px",
              }}
            >
              {isSelected ? "▲ Hide Details" : "▼ View Details"}
            </span>
          </div>
        </div>
      </div>

      {/* ── DETAIL PANEL ── */}
      {isSelected && (
        <CourseDetail
          course={course}
          activeDetail={activeDetail}
          setActiveDetail={setActiveDetail}
        />
      )}
    </div>
  );
};

// ── MAIN COMPONENT ──
const PublicSchool = () => {
  const [current, setCurrent]               = useState(0);
  const [animating, setAnimating]           = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeDetail, setActiveDetail]     = useState("eligibility");

  const goTo = useCallback((index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(typeof index === "function" ? index(current) : index);
      setAnimating(false);
    }, 300);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => goTo((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, [goTo]);

  const slide = heroSlides[current];

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');

        @keyframes heroPhotoIn {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .hero-photo-wrap {
          position: relative; width: 260px; height: 320px; flex-shrink: 0;
        }
        .hero-photo-wrap img {
          width: 100%; height: 100%; object-fit: cover; object-position: top center;
          border-radius: 20px 20px 60px 20px; display: block;
          animation: heroPhotoIn 0.5s ease both;
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
        }
        .hero-photo-wrap::before {
          content: ''; position: absolute; inset: -3px;
          border-radius: 22px 22px 62px 22px;
          background: linear-gradient(135deg, #10b981, rgba(16,185,129,0.2), #10b981);
          z-index: -1;
        }
        .hero-photo-badge {
          position: absolute; bottom: 16px; left: -16px;
          background: linear-gradient(135deg, #0d1b3e, #0d3d2e);
          border: 1.5px solid rgba(16,185,129,0.5); border-radius: 12px;
          padding: 8px 14px; display: flex; align-items: center; gap: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .hero-inner       { flex-direction: column !important; padding: 28px 20px 40px !important; gap: 20px !important; }
          .hero-left        { text-align: center !important; width: 100% !important; min-width: 0 !important; }
          .hero-photo-wrap  { width: 180px !important; height: 220px !important; margin: 0 auto; }
          .hero-stats       { justify-content: center !important; }
          .hero-photo-badge { left: 0 !important; }

          .zigzag-row       { flex-direction: column !important; border-radius: 16px !important; }
          .zigzag-img-side  { width: 100% !important; min-height: 220px !important; }
          .zigzag-content   { padding: 20px 18px !important; }
          .zigzag-accent    { display: none !important; }
          .zigzag-stats     { display: grid !important; grid-template-columns: repeat(3,1fr) !important; }

          .features-grid    { grid-template-columns: 1fr !important; }
          .student-life-grid{ grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .student-life-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO SLIDER ── */}
      <div style={{ background: "#ffffff", padding: "20px 16px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{
            borderRadius: "20px", overflow: "hidden", position: "relative",
            minHeight: "340px", display: "flex", alignItems: "center",
            background: slide.bg, transition: "background 0.6s ease",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${slide.glow}, transparent 70%)`, pointerEvents: "none", transition: "all 0.6s ease" }} />

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

              {/* Right — student photo like Defence page */}
              <div className="hero-photo-wrap">
                <img
                  key={slide.photo}
                  src={slide.photo}
                  alt="School student"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80&fit=crop&crop=top";
                  }}
                />
                <div className="hero-photo-badge">
                  <span style={{ fontSize: "18px" }}>📚</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", letterSpacing: "1.5px", textTransform: "uppercase" }}>CBSE Affiliated</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#10b981" }}>Sniper School</div>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", zIndex: 10, width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", color: "white", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={() => goTo((current + 1) % heroSlides.length)}
              style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", zIndex: 10, width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.25)", color: "white", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>

            <div style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "7px", zIndex: 10 }}>
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  style={{ width: i === current ? "22px" : "7px", height: "7px", borderRadius: "999px", background: i === current ? "#10b981" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CLASSES SECTION — ZIGZAG ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)" }}>
              📋 Classes Offered
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e", marginBottom: "10px" }}>
              From <span style={{ color: "#10b981" }}>Nursery to Class 8</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", maxWidth: "480px", margin: "0 auto" }}>
              Quality CBSE education at every stage — click any class to explore details
            </p>
          </div>

          {/* Zigzag rows */}
          {courses.map((course, index) => (
            <CourseRow
              key={course.id}
              course={course}
              index={index}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
              activeDetail={activeDetail}
              setActiveDetail={setActiveDetail}
            />
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)" }}>🏆 Why Choose Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e" }}>
              The School <span style={{ color: "#10b981" }}>Advantage</span>
            </h2>
          </div>
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {features.map((f, i) => (
              <div key={i}
                style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", transition: "all 0.3s ease", overflow: "hidden", cursor: "default", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#10b981";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(16,185,129,0.14)";
                  e.currentTarget.querySelector(".feat-img").style.transform = "scale(1.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#eef1f8";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  e.currentTarget.querySelector(".feat-img").style.transform = "scale(1)";
                }}
              >
                {/* Photo top */}
                <div style={{ position: "relative", height: "170px", overflow: "hidden" }}>
                  {/* Green top bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #10b981, #34d399)", zIndex: 3 }} />
                  <img
                    className="feat-img"
                    src={f.photo}
                    alt={f.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.5s ease" }}
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
                  />
                  {/* Fade bottom */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none" }} />
                  {/* Icon badge */}
                  <div style={{ position: "absolute", bottom: "10px", left: "16px", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(16,185,129,0.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: "0 4px 12px rgba(16,185,129,0.35)", zIndex: 2 }}>
                    {f.icon}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "14px 20px 22px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0d1b3e", marginBottom: "7px" }}>{f.title}</h3>
                  <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
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
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)" }}>🌈 Student Life</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              A Day at <span style={{ color: "#10b981" }}>Sniper School</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", maxWidth: "500px", margin: "12px auto 0" }}>
              Every child's journey is special — we make learning joyful, safe and inspiring from Day 1
            </p>
          </div>

          <div className="student-life-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { emoji: "🎨", title: "Art & Craft",        desc: "Creative activities that develop fine motor skills and imagination in young learners.",      color: "#FF9933", photo: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80&fit=crop&crop=center" },
              { emoji: "📖", title: "Story Time",          desc: "Daily reading sessions to build language skills, vocabulary and love for books.",           color: "#10b981", photo: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80&fit=crop&crop=center" },
              { emoji: "⚽", title: "Sports & Play",      desc: "Structured outdoor play and sports to build teamwork, fitness and confidence.",             color: "#7c3aed", photo: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80&fit=crop&crop=center" },
              { emoji: "🔬", title: "Science Activities",  desc: "Fun experiments and activities that spark curiosity and scientific thinking from Class 3+.", color: "#e8420a", photo: "https://images.unsplash.com/photo-1532094349884-543559373729?w=600&q=80&fit=crop&crop=center" },
              { emoji: "🎵", title: "Music & Dance",       desc: "Cultural activities that nurture creativity, rhythm and self-expression in children.",       color: "#10b981", photo: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80&fit=crop&crop=center" },
              { emoji: "🏅", title: "Annual Events",       desc: "Sports day, annual function, science fair and cultural events for holistic development.",    color: "#FF9933", photo: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&q=80&fit=crop&crop=center" },
            ].map((item, i) => (
              <div key={i}
                style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", overflow: "hidden", transition: "all 0.3s ease", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", cursor: "default" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 16px 36px ${item.color}22`;
                  e.currentTarget.querySelector(".sl-img").style.transform = "scale(1.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#eef1f8";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  e.currentTarget.querySelector(".sl-img").style.transform = "scale(1)";
                }}
              >
                {/* Photo top */}
                <div style={{ position: "relative", height: "150px", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: item.color, zIndex: 3 }} />
                  <img
                    className="sl-img"
                    src={item.photo}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.5s ease" }}
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none" }} />
                  {/* Emoji badge */}
                  <div style={{ position: "absolute", bottom: "8px", left: "14px", width: "40px", height: "40px", borderRadius: "10px", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: `0 4px 10px ${item.color}30`, zIndex: 2 }}>
                    {item.emoji}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "12px 16px 18px" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#0d1b3e", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", color: "#334155", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PublicSchool;