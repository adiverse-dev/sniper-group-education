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
  },
  {
    tag: "⚛️ IIT JEE",
    title: "IIT JEE Mains &",
    highlight: "Advanced Coaching",
    desc: "Comprehensive JEE preparation covering Physics, Chemistry and Mathematics with IITian faculty, daily practice problems and mock tests.",
    stats: [{ val: "AIR 312", lab: "Top Rank" }, { val: "Physics+Chem+Math", lab: "Subjects" }, { val: "2 Years", lab: "Course" }, { val: "Daily DPP", lab: "Practice" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a1a4e 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.2)",
  },
  {
    tag: "🩺 NEET",
    title: "NEET UG Complete",
    highlight: "Coaching Program",
    desc: "NCERT-focused NEET preparation with Biology, Chemistry and Physics. Extensive practice tests and lab practical sessions.",
    stats: [{ val: "650/720", lab: "Top Score" }, { val: "Bio+Chem+Phy", lab: "Subjects" }, { val: "2 Years", lab: "Course" }, { val: "NCERT Focus", lab: "Method" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a3e1a 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    tag: "📗 Class 11th & 12th",
    title: "PCM / PCB Board",
    highlight: "Excellence Coaching",
    desc: "Senior secondary coaching combining board preparation with JEE/NEET foundation. Science stream subjects with doubt sessions.",
    stats: [{ val: "Class 11–12", lab: "Level" }, { val: "PCM / PCB", lab: "Streams" }, { val: "Board + Entrance", lab: "Focus" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #2d1b3e 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.18)",
  },
  {
    tag: "📘 Class 9th & 10th",
    title: "Foundation &",
    highlight: "Board Exam Prep",
    desc: "Strong foundation for Class 9 & 10 students with all subjects. Weekly tests, doubt sessions and parent progress reports.",
    stats: [{ val: "Class 9–10", lab: "Level" }, { val: "All Subjects", lab: "Coverage" }, { val: "Board Focus", lab: "Goal" }, { val: "Weekly Tests", lab: "Practice" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a2d3e 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    tag: "📙 Class 6 – 8",
    title: "All Subjects Hindi",
    highlight: "& CBSE Coaching",
    desc: "Complete coaching for Class 6 to 8 in all subjects — both Hindi Medium and CBSE English Medium with strong conceptual base.",
    stats: [{ val: "Class 6–8", lab: "Level" }, { val: "Hindi + CBSE", lab: "Medium" }, { val: "All Subjects", lab: "Coverage" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #3e1b1a 60%, #0d1b3e 100%)",
    glow: "rgba(124,58,237,0.12)",
  },
];

const courses = [
  {
    id: "jee",
    name: "IIT JEE",
    full: "IIT JEE Mains & Advanced",
    fee: "₹75,000",
    icon: "⚛️",
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
  { icon: "👨‍🏫", title: "Expert Faculty",         desc: "IITians and top educators with proven track records in JEE and NEET coaching." },
  { icon: "📊", title: "Performance Tracking",    desc: "Regular assessments and detailed performance reports shared with parents." },
  { icon: "📱", title: "Digital Resources",        desc: "Access to online study materials, recorded lectures and practice tests anytime." },
  { icon: "🧪", title: "Lab Practicals",           desc: "Well-equipped physics, chemistry and biology labs for hands-on practice." },
  { icon: "🏆", title: "Scholarship Tests",        desc: "Regular scholarship tests with fee concessions for high performers." },
  { icon: "🎯", title: "Personalized Attention",  desc: "Small batch sizes ensuring individual attention and personalized guidance." },
];

const SniperClasses = () => {
  const [current, setCurrent]           = useState(0);
  const [animating, setAnimating]       = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeDetail, setActiveDetail] = useState("eligibility");

  const goTo = useCallback((index) => {
    setAnimating(true);
    setTimeout(() => { setCurrent(typeof index === "function" ? index(current) : index); setAnimating(false); }, 300);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => goTo((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, [goTo]);

  const slide = heroSlides[current];

  const handleCardClick = (course) => {
    if (selectedCourse?.id === course.id) {
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
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      {/* ── HERO SLIDER ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-inner  { flex-direction: column !important; padding: 28px 20px 40px !important; gap: 20px !important; }
          .hero-left   { text-align: center !important; }
          .hero-right  { display: none !important; }
          .hero-stats  { justify-content: center !important; }
          .cards-grid  { grid-template-columns: 1fr !important; }
          .detail-tabs { overflow-x: auto; }
          .detail-body { padding: 20px !important; }
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

              {/* Right */}
              <div className="hero-right" style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "rgba(124,58,237,0.15)", border: "2px solid rgba(124,58,237,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "42px" }}>🎓</div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>OUR INSTITUTE</p>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.4vw, 36px)", color: "white", lineHeight: 1.2, marginBottom: "4px" }}>Sniper</h2>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.4vw, 36px)", color: "#a78bfa", lineHeight: 1.2, marginBottom: "6px" }}>Classes</h2>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "1px" }}>JEE • NEET • Board • Foundation</p>
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
                  style={{ width: i === current ? "22px" : "7px", height: "7px", borderRadius: "999px", background: i === current ? "#a78bfa" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

            {/* ── COURSES CARDS ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(124,58,237,0.3)", color: "#7c3aed", background: "rgba(124,58,237,0.07)" }}>📋 Our Courses</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e", marginBottom: "10px" }}>
              Coaching <span style={{ color: "#7c3aed" }}>Programs</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>Click on any course card to view full details</p>
          </div>

          {/* Cards Grid */}
          <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {courses.map((course) => {
              const isSelected = selectedCourse?.id === course.id;
              return (
                <div key={course.id} onClick={() => handleCardClick(course)}
                  style={{ background: isSelected ? "linear-gradient(135deg, #0d1b3e, #2d1b69)" : "white", borderRadius: "16px", padding: "28px", border: isSelected ? "2px solid #a78bfa" : "1.5px solid #eef1f8", borderTop: "4px solid #7c3aed", cursor: "pointer", transition: "all 0.3s ease", boxShadow: isSelected ? "0 12px 36px rgba(124,58,237,0.2)" : "none" }}
                  onMouseEnter={e => { if (!isSelected) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(124,58,237,0.12)"; e.currentTarget.style.borderColor = "#7c3aed"; }}}
                  onMouseLeave={e => { if (!isSelected) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#eef1f8"; }}}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: isSelected ? "rgba(167,139,250,0.15)" : "rgba(124,58,237,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>{course.icon}</div>
                    <span style={{ padding: "5px 12px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, background: isSelected ? "rgba(167,139,250,0.2)" : "rgba(124,58,237,0.1)", color: "#a78bfa" }}>{course.fee}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 700, color: isSelected ? "white" : "#0d1b3e", marginBottom: "4px", lineHeight: 1.3 }}>{course.name}</h3>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#a78bfa", marginBottom: "12px" }}>{course.full}</p>
                  <p style={{ fontSize: "15px", color: isSelected ? "rgba(255,255,255,0.8)" : "#334155", lineHeight: 1.7, marginBottom: "20px" }}>{course.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 700, color: "#a78bfa" }}>
                    {isSelected ? "▲ Hide Details" : "▼ View Details"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── EXPANDED DETAIL ── */}
          {selectedCourse && (
            <div id="course-detail" style={{ background: "#f8f5ff", borderRadius: "20px", border: "2px solid rgba(124,58,237,0.3)", boxShadow: "0 16px 48px rgba(124,58,237,0.1)", overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, #0d1b3e, #2d1b69)", padding: "28px 36px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(167,139,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", flexShrink: 0 }}>{selectedCourse.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px", fontWeight: 800, color: "white", marginBottom: "4px" }}>{selectedCourse.full}</h3>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", margin: 0 }}>{selectedCourse.desc}</p>
                </div>
                <div style={{ padding: "10px 20px", background: "rgba(167,139,250,0.15)", borderRadius: "10px", textAlign: "center", flexShrink: 0 }}>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "1px" }}>Course Fee</div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#a78bfa" }}>{selectedCourse.fee}</div>
                </div>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", borderBottom: "1px solid #ede8f8", background: "white", overflowX: "auto" }}>
                {[
                  { key: "eligibility", label: "📋 Eligibility" },
                  { key: "exam",        label: "📝 Exam Pattern" },
                  { key: "selection",   label: "🏆 Selection Process" },
                  { key: "includes",    label: "✅ What's Included" },
                ].map((tab) => (
                  <button key={tab.key} onClick={(e) => { e.stopPropagation(); setActiveDetail(tab.key); }}
                    style={{ padding: "16px 22px", fontSize: "14px", fontWeight: 600, border: "none", borderBottom: activeDetail === tab.key ? "3px solid #7c3aed" : "3px solid transparent", background: "transparent", color: activeDetail === tab.key ? "#7c3aed" : "#64748b", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div style={{ padding: "36px" }} onClick={(e) => e.stopPropagation()}>
                {activeDetail === "eligibility" && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
                    {selectedCourse.eligibility.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "18px", background: "white", borderRadius: "12px", border: "1px solid #ede8f8" }}>
                        <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#7c3aed", flexShrink: 0, fontWeight: 700 }}>✓</div>
                        <span style={{ fontSize: "15px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeDetail === "exam" && (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "400px" }}>
                      <thead>
                        <tr style={{ background: "rgba(124,58,237,0.07)" }}>
                          <th style={{ padding: "14px 20px", textAlign: "left", fontSize: "13px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Subject</th>
                          <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "13px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Marks</th>
                          <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "13px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCourse.examPattern.map((row, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid #ede8f8", background: i % 2 === 0 ? "white" : "#f8f5ff" }}>
                            <td style={{ padding: "16px 20px", fontSize: "16px", color: "#1e293b", fontWeight: 500 }}>{row.subject}</td>
                            <td style={{ padding: "16px 20px", textAlign: "center", fontSize: "18px", fontWeight: 800, color: "#7c3aed" }}>{row.marks}</td>
                            <td style={{ padding: "16px 20px", textAlign: "center" }}>
                              <span style={{ padding: "5px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, background: "rgba(124,58,237,0.1)", color: "#7c3aed" }}>{row.type}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeDetail === "selection" && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {selectedCourse.selection.map((step, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: "white" }}>{i + 1}</div>
                          {i < selectedCourse.selection.length - 1 && <div style={{ width: "2px", height: "48px", background: "rgba(124,58,237,0.3)" }} />}
                        </div>
                        <div style={{ paddingTop: "10px", paddingBottom: i < selectedCourse.selection.length - 1 ? "32px" : "0" }}>
                          <p style={{ fontSize: "16px", fontWeight: 600, color: "#1e293b", margin: 0 }}>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeDetail === "includes" && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
                    {selectedCourse.includes.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "18px", background: "white", borderRadius: "12px", border: "1px solid #ede8f8" }}>
                        <div style={{ fontSize: "22px", flexShrink: 0 }}>✅</div>
                        <span style={{ fontSize: "15px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ padding: "20px 36px", background: "white", borderTop: "1px solid #ede8f8" }}>
                <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", color: "white", padding: "12px 24px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 12px rgba(124,58,237,0.3)" }}>
                  📞 Enquire About {selectedCourse.name}
                </a>
              </div>
            </div>
          )}
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1.5px solid #eef1f8", transition: "all 0.25s ease", display: "flex", gap: "16px", alignItems: "flex-start" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,58,237,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(124,58,237,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0d1b3e", marginBottom: "6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "15px", color: "#334155", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
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