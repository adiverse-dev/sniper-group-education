import { useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    tag: "🎓 Sniper Classes",
    title: "Crack Every Exam with",
    highlight: "Expert Guidance",
    desc: "Result-oriented coaching for IIT JEE, NEET, Board Exams and Foundation courses — with expert faculty and proven methods since 2009.",
    stats: [{ val: "350+", lab: "JEE/NEET Qualifiers" }, { val: "99.1%", lab: "Top Percentile" }, { val: "15+", lab: "Years Experience" }, { val: "30+", lab: "Expert Faculty" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #2d1b69 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.2)",
    photo: "./img/students/jee.png",
  },
  {
    tag: "⚛️ IIT JEE",
    title: "IIT JEE Mains &",
    highlight: "Advanced Coaching",
    desc: "Comprehensive JEE preparation covering Physics, Chemistry and Mathematics with IITian faculty, daily practice problems and mock tests.",
    stats: [{ val: "AIR 312", lab: "Top Rank" }, { val: "Physics+Chem+Math", lab: "Subjects" }, { val: "2 Years", lab: "Course" }, { val: "Daily DPP", lab: "Practice" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a1a4e 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.2)",
    photo: "./img/students/jee.png",
  },
  {
    tag: "🩺 NEET",
    title: "NEET UG Complete",
    highlight: "Coaching Program",
    desc: "NCERT-focused NEET preparation with Biology, Chemistry and Physics. Extensive practice tests and lab practical sessions.",
    stats: [{ val: "650/720", lab: "Top Score" }, { val: "Bio+Chem+Phy", lab: "Subjects" }, { val: "2 Years", lab: "Course" }, { val: "NCERT Focus", lab: "Method" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a3e1a 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.15)",
    photo: "./img/students/neet.png",
  },
  {
    tag: "📗 Class 11th & 12th",
    title: "PCM / PCB Board",
    highlight: "Excellence Coaching",
    desc: "Senior secondary coaching combining board preparation with JEE/NEET foundation. Science stream subjects with doubt sessions.",
    stats: [{ val: "Class 11–12", lab: "Level" }, { val: "PCM / PCB", lab: "Streams" }, { val: "Board + Entrance", lab: "Focus" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #2d1b3e 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.18)",
    photo: "./img/students/class1112.png",
  },
  {
    tag: "📘 Class 9th & 10th",
    title: "Foundation &",
    highlight: "Board Exam Prep",
    desc: "Strong foundation for Class 9 & 10 students with all subjects. Weekly tests, doubt sessions and parent progress reports.",
    stats: [{ val: "Class 9–10", lab: "Level" }, { val: "All Subjects", lab: "Coverage" }, { val: "Board Focus", lab: "Goal" }, { val: "Weekly Tests", lab: "Practice" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a2d3e 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.15)",
    photo: "./img/students/class910.png",
  },
  {
    tag: "📙 Class 6 – 8",
    title: "All Subjects Hindi",
    highlight: "& CBSE Coaching",
    desc: "Complete coaching for Class 6 to 8 in all subjects — both Hindi Medium and CBSE English Medium with strong conceptual base.",
    stats: [{ val: "Class 6–8", lab: "Level" }, { val: "Hindi + CBSE", lab: "Medium" }, { val: "All Subjects", lab: "Coverage" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #3e1b1a 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.12)",
    photo: "./img/students/class68.png",
  },
];

const courses = [
  {
    id: "jee",
    name: "IIT JEE",
    full: "IIT JEE Mains & Advanced",
    fee: "₹75,000",
    icon: "⚛️",
    photo: "./img/students/jee.png",
    cat: "Engineering Entrance",
    stats: [{ v: "Class 11–12", l: "Eligibility" }, { v: "300", l: "Total Marks" }, { v: "2 Years", l: "Course" }],
    desc: "Comprehensive JEE preparation covering Physics, Chemistry and Mathematics with IITian faculty, daily practice problems and full mock test series.",
    eligibility: ["Class 11 appearing or passed", "Class 12 appearing or passed", "Age up to 25 years (JEE Advanced)", "PCM in Class 12 mandatory"],
    examPattern: [
      { subject: "Physics", marks: "100", type: "MCQ + Numerical" },
      { subject: "Chemistry", marks: "100", type: "MCQ + Numerical" },
      { subject: "Mathematics", marks: "100", type: "MCQ + Numerical" },
      { subject: "Total (Mains)", marks: "300", type: "NTA Online" },
    ],
    selection: ["JEE Mains (NTA — Jan & Apr)", "JEE Advanced (IIT conducted)", "Counselling via JoSAA", "IIT / NIT Admission"],
    includes: ["Daily Practice Problems (DPP)", "Weekly Mock Tests", "One-on-one Doubt Sessions", "Study Material (Printed + Digital)", "Previous Year Papers"],
  },
  {
    id: "neet",
    name: "NEET",
    full: "NEET UG Complete Coaching",
    fee: "₹70,000",
    icon: "🩺",
    photo: "./img/students/neet.png",
    cat: "Medical Entrance",
    stats: [{ v: "Class 12 PCB", l: "Eligibility" }, { v: "720", l: "Total Marks" }, { v: "2 Years", l: "Course" }],
    desc: "NCERT-focused NEET preparation with Biology, Chemistry and Physics. Extensive practice tests, lab practicals and revision sessions.",
    eligibility: ["Class 12 PCB with minimum 50% marks", "Age: 17 to 25 years", "Indian Nationals / OCI", "Physics, Chemistry, Biology mandatory"],
    examPattern: [
      { subject: "Biology (Botany + Zoology)", marks: "360", type: "MCQ" },
      { subject: "Chemistry", marks: "180", type: "MCQ" },
      { subject: "Physics", marks: "180", type: "MCQ" },
      { subject: "Total", marks: "720", type: "NTA Offline" },
    ],
    selection: ["NEET UG Written Exam (NTA)", "Merit List Based Counselling", "State Quota + All India Quota", "MBBS / BDS / AYUSH Admission"],
    includes: ["NCERT-Based Study Material", "Biology Special Sessions", "Mock Tests Series", "Lab Practical Coaching", "Revision Batches"],
  },
  {
    id: "class1112",
    name: "11th & 12th PCM/PCB",
    full: "Class 11th & 12th PCM / PCB Coaching",
    fee: "₹32,000",
    icon: "📗",
    photo: "./img/students/class1112.png",
    cat: "Senior Secondary",
    stats: [{ v: "Class 10 Passed", l: "Eligibility" }, { v: "PCM / PCB", l: "Streams" }, { v: "1 Year", l: "Course" }],
    desc: "Senior secondary coaching combining board exam preparation with JEE/NEET entrance foundation. Science stream subjects with regular doubt sessions.",
    eligibility: ["Class 10 passed — any board", "PCM stream: Physics, Chemistry, Math", "PCB stream: Physics, Chemistry, Biology", "CBSE / UP Board both accepted"],
    examPattern: [
      { subject: "Physics", marks: "70+30", type: "Board Written + Practical" },
      { subject: "Chemistry", marks: "70+30", type: "Board Written + Practical" },
      { subject: "Math / Biology", marks: "100 / 70+30", type: "Board Written" },
      { subject: "English", marks: "100", type: "Board Written" },
    ],
    selection: ["CBSE / UP Board Exam", "JEE Mains Foundation", "NEET Foundation", "School Internal Assessments"],
    includes: ["Board Exam Focused Notes", "JEE / NEET Foundation", "Weekly Chapter Tests", "Doubt Sessions (Daily)", "Previous Year Board Papers"],
  },
  {
    id: "class910",
    name: "9th & 10th Foundation",
    full: "Class 9th & 10th All Subjects Foundation",
    fee: "₹22,000",
    icon: "📘",
    photo: "./img/students/class910.png",
    cat: "Secondary Foundation",
    stats: [{ v: "Class 8–9 Passed", l: "Eligibility" }, { v: "All Subjects", l: "Coverage" }, { v: "1 Year", l: "Course" }],
    desc: "Strong foundation coaching for Class 9 & 10 with all subjects. Board exam focused with weekly tests, doubt sessions and parent progress reports.",
    eligibility: ["Class 8 passed for Class 9 batch", "Class 9 passed for Class 10 batch", "CBSE / UP Board students", "Hindi & English Medium both"],
    examPattern: [
      { subject: "Mathematics", marks: "80+20", type: "Board + Internal" },
      { subject: "Science (Phy+Chem+Bio)", marks: "80+20", type: "Board + Practical" },
      { subject: "Social Science", marks: "80+20", type: "Board Written" },
      { subject: "English / Hindi", marks: "80+20", type: "Board Written" },
    ],
    selection: ["CBSE / UP Board Class 10 Exam", "Internal Assessments", "School Pre-board Tests", "Foundation for JEE / NEET / NDA"],
    includes: ["All Subjects Coverage", "Weekly Test Series", "Monthly Parent Reports", "Doubt Resolution Sessions", "Board Pattern Practice Papers"],
  },
  {
    id: "class68",
    name: "Class 6 – 8",
    full: "Class 6 to 8 All Subjects — Hindi & CBSE",
    fee: "₹18,000",
    icon: "📙",
    photo: "./img/students/class68.png",
    cat: "Middle School",
    stats: [{ v: "Class 5–7 Passed", l: "Eligibility" }, { v: "Hindi + CBSE", l: "Medium" }, { v: "1 Year", l: "Course" }],
    desc: "Complete coaching for Class 6 to 8 in all subjects covering both Hindi Medium and CBSE English Medium with strong conceptual base building.",
    eligibility: ["Class 5 passed for Class 6 batch", "Class 6 / 7 passed for respective batches", "Hindi Medium & CBSE English Medium both", "Any school board accepted"],
    examPattern: [
      { subject: "Mathematics", marks: "100", type: "School Exam" },
      { subject: "Science", marks: "100", type: "School Exam" },
      { subject: "Social Science", marks: "100", type: "School Exam" },
      { subject: "Hindi / English", marks: "100", type: "School Exam" },
    ],
    selection: ["School Annual Exams", "Class Promotion Tests", "Monthly Unit Tests", "Foundation for Class 9–10"],
    includes: ["All Subjects (Hindi + English Medium)", "Concept Building Focus", "Monthly Unit Tests", "Activity Based Learning", "Regular Parent Communication"],
  },
];

const features = [
  { icon: "👨‍🏫", title: "Expert Faculty",        desc: "IITians and top educators with proven track records in JEE and NEET coaching.",        photo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&fit=crop&crop=center" },
  { icon: "📊", title: "Performance Tracking",   desc: "Regular assessments and detailed performance reports shared with parents.",              photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop&crop=center" },
  { icon: "📱", title: "Digital Resources",       desc: "Access to online study materials, recorded lectures and practice tests anytime.",        photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&fit=crop&crop=center" },
  { icon: "🧪", title: "Lab Practicals",          desc: "Well-equipped physics, chemistry and biology labs for hands-on practice.",               photo: "https://images.unsplash.com/photo-1532094349884-543559373729?w=600&q=80&fit=crop&crop=center" },
  { icon: "🏆", title: "Scholarship Tests",       desc: "Regular scholarship tests with fee concessions for high performers.",                    photo: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&q=80&fit=crop&crop=center" },
  { icon: "🎯", title: "Personalized Attention", desc: "Small batch sizes ensuring individual attention and personalized guidance.",              photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center" },
];

// ── COURSE DETAIL PANEL ──
const CourseDetail = ({ course, activeDetail, setActiveDetail }) => {
  const tabs = [
    { key: "eligibility", label: "📋 Eligibility" },
    { key: "exam",        label: "📝 Exam Pattern" },
    { key: "selection",   label: "🏆 Selection Process" },
    { key: "includes",    label: "✅ What's Included" },
  ];

  return (
    <div
      id="course-detail"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        border: "2px solid rgba(124,58,237,0.35)",
        background: "#f8f5ff",
        marginTop: "8px",
        marginBottom: "8px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d1b3e, #2d1b69)",
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
            background: "rgba(167,139,250,0.15)",
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
            padding: "10px 18px", background: "rgba(167,139,250,0.15)",
            borderRadius: "10px", textAlign: "center", flexShrink: 0,
          }}
        >
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>
            Course Fee
          </div>
          <div style={{ fontSize: "20px", fontWeight: 800, color: "#a78bfa" }}>{course.fee}</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: "white", borderBottom: "1px solid #ede8f8", overflowX: "auto" }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={(e) => { e.stopPropagation(); setActiveDetail(tab.key); }}
            style={{
              padding: "14px 20px", fontSize: "13px", fontWeight: 600,
              border: "none", background: "transparent", cursor: "pointer",
              whiteSpace: "nowrap", transition: "all 0.2s",
              borderBottom: activeDetail === tab.key ? "3px solid #7c3aed" : "3px solid transparent",
              color: activeDetail === tab.key ? "#7c3aed" : "#64748b",
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
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", background: "white", borderRadius: "12px", border: "1px solid #ede8f8" }}>
                <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#7c3aed", flexShrink: 0, fontWeight: 700 }}>✓</div>
                <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        )}

        {activeDetail === "exam" && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "380px" }}>
              <thead>
                <tr style={{ background: "rgba(124,58,237,0.07)" }}>
                  <th style={{ padding: "12px 18px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Subject</th>
                  <th style={{ padding: "12px 18px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Marks</th>
                  <th style={{ padding: "12px 18px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {course.examPattern.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #ede8f8", background: i % 2 === 0 ? "white" : "#f8f5ff" }}>
                    <td style={{ padding: "14px 18px", fontSize: "15px", color: "#1e293b", fontWeight: 500 }}>{row.subject}</td>
                    <td style={{ padding: "14px 18px", textAlign: "center", fontSize: "17px", fontWeight: 800, color: "#7c3aed" }}>{row.marks}</td>
                    <td style={{ padding: "14px 18px", textAlign: "center" }}>
                      <span style={{ padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, background: "rgba(124,58,237,0.1)", color: "#7c3aed" }}>{row.type}</span>
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
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "white" }}>
                    {i + 1}
                  </div>
                  {i < course.selection.length - 1 && (
                    <div style={{ width: "2px", height: "44px", background: "rgba(124,58,237,0.25)" }} />
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
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", background: "white", borderRadius: "12px", border: "1px solid #ede8f8" }}>
                <div style={{ fontSize: "20px", flexShrink: 0 }}>✅</div>
                <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{ padding: "16px 32px", background: "white", borderTop: "1px solid #ede8f8" }}>
        <a
          href="tel:+917060155711"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
            color: "white", padding: "11px 22px", borderRadius: "999px",
            fontSize: "14px", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 4px 12px rgba(124,58,237,0.3)",
          }}
        >
          📞 Enquire About {course.name}
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
          border: isSelected ? "2px solid #a78bfa" : "1.5px solid #eef1f8",
          background: "white",
          cursor: "pointer",
          transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
          boxShadow: isSelected ? "0 12px 36px rgba(124,58,237,0.18)" : "0 2px 12px rgba(0,0,0,0.06)",
        }}
        onMouseEnter={(e) => {
          if (!isSelected) {
            e.currentTarget.style.borderColor = "#7c3aed";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(124,58,237,0.14)";
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
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transition: "transform 0.5s ease" }}
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
          />

          {/* Purple top bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #7c3aed, #a78bfa)", zIndex: 3 }} />

          {/* Fee badge — always top right */}
          <div style={{ position: "absolute", top: "14px", right: "14px", background: "#7c3aed", color: "white", fontSize: "13px", fontWeight: 700, padding: "5px 14px", borderRadius: "999px", zIndex: 2, boxShadow: "0 2px 8px rgba(124,58,237,0.4)" }}>
            {course.fee}
          </div>

          {/* Category badge — always bottom left */}
          <div style={{ position: "absolute", bottom: "14px", left: "14px", background: "rgba(13,27,62,0.85)", color: "white", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "999px", zIndex: 2, letterSpacing: "0.5px" }}>
            {course.cat}
          </div>

          {/* Fade edge — desktop only */}
          {!isMobile && (
            <div style={{ position: "absolute", top: 0, bottom: 0, width: "80px", ...(isReverse ? { left: 0, background: "linear-gradient(to right, white, transparent)" } : { right: 0, background: "linear-gradient(to left, white, transparent)" }), pointerEvents: "none", zIndex: 1 }} />
          )}
        </div>

        {/* ── CONTENT SIDE ── */}
        <div
          style={{
            flex: 1,
            padding: isMobile ? "20px 18px" : "32px 36px",
            display: "flex", flexDirection: "column", justifyContent: "center",
            position: "relative",
            background: isSelected ? "linear-gradient(135deg, #0d1b3e, #2d1b69)" : "white",
            transition: "background 0.3s ease",
          }}
        >
          {/* Accent bar — desktop only */}
          {!isMobile && (
            <div style={{ position: "absolute", top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #7c3aed, #a78bfa)", ...(isReverse ? { right: 0 } : { left: 0 }) }} />
          )}

          {/* Icon + Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: isSelected ? "rgba(167,139,250,0.15)" : "rgba(124,58,237,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
              {course.icon}
            </div>
            <div>
              <div style={{ fontSize: isMobile ? "17px" : "20px", fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif", color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>
                {course.name}
              </div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#a78bfa", marginTop: "2px" }}>{course.full}</div>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: "14px", color: isSelected ? "rgba(255,255,255,0.75)" : "#334155", lineHeight: 1.7, marginBottom: "16px" }}>
            {course.desc}
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${isSelected ? "rgba(167,139,250,0.3)" : "#eef1f8"}`, borderRadius: "12px", overflow: "hidden", marginBottom: "18px" }}>
            {course.stats.map((s, i) => (
              <div key={i} style={{ padding: "10px 8px", textAlign: "center", borderRight: i < course.stats.length - 1 ? `1px solid ${isSelected ? "rgba(167,139,250,0.2)" : "#eef1f8"}` : "none" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: isSelected ? "rgba(255,255,255,0.5)" : "#94a3b8", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "2px" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* View details */}
          <div>
            <span
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "13px", fontWeight: 700, color: "#a78bfa",
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.3)",
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
const SniperClasses = () => {
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
          background: linear-gradient(135deg, #7c3aed, rgba(124,58,237,0.2), #7c3aed);
          z-index: -1;
        }
        .hero-photo-badge {
          position: absolute; bottom: 16px; left: -16px;
          background: linear-gradient(135deg, #0d1b3e, #2d1b69);
          border: 1.5px solid rgba(124,58,237,0.5); border-radius: 12px;
          padding: 8px 14px; display: flex; align-items: center; gap: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .hero-inner       { flex-direction: column !important; padding: 28px 20px 40px !important; gap: 20px !important; }
          .hero-left        { text-align: center !important; width: 100% !important; min-width: 0 !important; }
          .hero-photo-wrap  { width: 180px !important; height: 220px !important; margin: 0 auto; }
          .hero-stats       { justify-content: center !important; }
          .hero-photo-badge { left: 0 !important; }
          .course-zigzag-row { flex-direction: column !important; }
          .course-zigzag-img { width: 100% !important; min-height: 200px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
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
                <span style={{ display: "inline-block", padding: "5px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(124,58,237,0.5)", color: "#a78bfa", background: "rgba(124,58,237,0.12)" }}>
                  {slide.tag}
                </span>
                <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.6vw, 36px)", color: "white", lineHeight: 1.15, marginBottom: "12px" }}>
                  {slide.title} <span style={{ color: "#a78bfa" }}>{slide.highlight}</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px", maxWidth: "460px" }}>
                  {slide.desc}
                </p>
                <div className="hero-stats" style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  {slide.stats.map((s) => (
                    <div key={s.lab}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 800, color: "#a78bfa" }}>{s.val}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.lab}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — student photo (Public School style, purple theme) */}
              <div className="hero-photo-wrap">
                <img
                  key={slide.photo}
                  src={slide.photo}
                  alt="Student"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80&fit=crop&crop=top";
                  }}
                />
                <div className="hero-photo-badge">
                  <span style={{ fontSize: "18px" }}>🎓</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", letterSpacing: "1.5px", textTransform: "uppercase" }}>Since 2009</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#a78bfa" }}>Sniper Classes</div>
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
                  style={{ width: i === current ? "22px" : "7px", height: "7px", borderRadius: "999px", background: i === current ? "#a78bfa" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── COURSES SECTION — ZIGZAG ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(124,58,237,0.3)", color: "#7c3aed", background: "rgba(124,58,237,0.07)" }}>
              📋 Our Courses
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e", marginBottom: "10px" }}>
              Coaching <span style={{ color: "#7c3aed" }}>Programs</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", maxWidth: "480px", margin: "0 auto" }}>
              Expert coaching for every level — click any course to explore full details
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

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(124,58,237,0.3)", color: "#7c3aed", background: "rgba(124,58,237,0.07)" }}>🏆 Why Choose Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e" }}>
              The Classes <span style={{ color: "#7c3aed" }}>Advantage</span>
            </h2>
          </div>

          {/* Photo-top cards — Public School style, purple theme */}
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {features.map((f, i) => (
              <div key={i}
                style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", transition: "all 0.3s ease", overflow: "hidden", cursor: "default", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#7c3aed";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(124,58,237,0.14)";
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
                  {/* Purple top bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #7c3aed, #a78bfa)", zIndex: 3 }} />
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
                  <div style={{ position: "absolute", bottom: "10px", left: "16px", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(124,58,237,0.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: "0 4px 12px rgba(124,58,237,0.35)", zIndex: 2 }}>
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

    </div>
  );
};

export default SniperClasses;