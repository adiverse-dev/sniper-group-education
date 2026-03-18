import { useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    tag: "🛡️ Sniper Defence Academy",
    title: "Forge Your Path to",
    highlight: "National Service",
    desc: "India's trusted defence coaching — preparing warriors since 2009. Join 1,200+ successful selections.",
    stats: [{ val: "1,200+", lab: "Selections" }, { val: "15+", lab: "Years" }, { val: "98%", lab: "Success Rate" }, { val: "50+", lab: "Faculty" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a3260 60%, #0d1b3e 100%)",
    glow: "rgba(255,153,0,0.15)",
  },
  {
    tag: "🏫 AISSEE",
    title: "All India Sainik School",
    highlight: "Entrance Exam",
    desc: "Comprehensive preparation for Class 6 & 9 admissions across all Sainik Schools in India. NTA conducted exam.",
    stats: [{ val: "Class 6 & 9", lab: "Entry" }, { val: "350 Marks", lab: "Total" }, { val: "4 Subjects", lab: "Syllabus" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a2d4e 60%, #0d1b3e 100%)",
    glow: "rgba(255,153,0,0.15)",
  },
  {
    tag: "⭐ UPSSEE",
    title: "Uttar Pradesh Sainik School",
    highlight: "Entrance Exam",
    desc: "State level exam for UP Sainik School admissions. Special focus on UP domicile students with expert guidance.",
    stats: [{ val: "State Level", lab: "Exam" }, { val: "250 Marks", lab: "Total" }, { val: "4 Subjects", lab: "Syllabus" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a2d1a 60%, #0d1b3e 100%)",
    glow: "rgba(255,153,0,0.12)",
  },
  {
    tag: "🎖️ RIMS",
    title: "Rashtriya Indian",
    highlight: "Military School",
    desc: "Elite military school preparation combining academic excellence with military discipline and viva voce coaching.",
    stats: [{ val: "400 Marks", lab: "Total" }, { val: "Written + Viva", lab: "Pattern" }, { val: "Class 6 & 9", lab: "Entry" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #2d1b0e 60%, #0d1b3e 100%)",
    glow: "rgba(255,153,0,0.15)",
  },
  {
    tag: "🏆 RIMC",
    title: "Rashtriya Indian",
    highlight: "Military College",
    desc: "RIMC Dehradun — most prestigious military college in India. Gateway to NDA. Intensive preparation for age 11.5–13.",
    stats: [{ val: "500 Marks", lab: "Total" }, { val: "SHAPE-1", lab: "Medical" }, { val: "Age 11.5–13", lab: "Eligibility" }, { val: "1 Year", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #2d0d1b 60%, #0d1b3e 100%)",
    glow: "rgba(255,153,0,0.15)",
  },
  {
    tag: "🛡️ CDS & NDA",
    title: "Combined Defence &",
    highlight: "National Defence Academy",
    desc: "Complete UPSC coaching for NDA & CDS — Army, Navy and Air Force. SSB interview preparation included.",
    stats: [{ val: "UPSC", lab: "Conducting Body" }, { val: "SSB 5 Days", lab: "Interview" }, { val: "900 Marks", lab: "NDA Total" }, { val: "1–2 Years", lab: "Course" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #1a1a3e 60%, #0d1b3e 100%)",
    glow: "rgba(255,153,0,0.18)",
  },
  {
    tag: "✈️ Air Force X & Y",
    title: "Indian Air Force",
    highlight: "Group X & Y Exam",
    desc: "Agniveer Vayu preparation for Group X (Technical) and Group Y (Non-Technical). Written + PFT coaching.",
    stats: [{ val: "Age 17.5–21", lab: "Eligibility" }, { val: "PFT + Written", lab: "Pattern" }, { val: "6 Months", lab: "Course" }, { val: "MCQ Based", lab: "Exam Type" }],
    bg: "linear-gradient(135deg, #0d1b3e 0%, #0d2d3e 60%, #0d1b3e 100%)",
    glow: "rgba(255,153,0,0.12)",
  },
];

const courses = [
  {
    id: "aissee", name: "AISSEE", full: "All India Sainik School Entrance Exam", fee: "₹35,000", icon: "🏫",
    desc: "Comprehensive preparation for All India Sainik School Entrance Examination for Class 6 and Class 9 admissions across all Sainik Schools in India.",
    eligibility: ["Class 6 Entry: Age 10–12 years", "Class 9 Entry: Age 13–15 years", "Indian Nationals only", "Minimum 50% marks in previous class"],
    examPattern: [{ subject: "Mathematics", marks: "150", type: "MCQ" }, { subject: "General Knowledge", marks: "75", type: "MCQ" }, { subject: "Language (Hindi/English)", marks: "75", type: "MCQ" }, { subject: "Intelligence", marks: "50", type: "MCQ" }],
    selection: ["Written Exam (NTA conducted)", "Medical Examination", "Document Verification", "Merit List & Allotment"],
    physical: ["Good physical health required", "No major physical disability", "Medical fitness as per Sainik School norms"],
  },
  {
    id: "upssee", name: "UPSSEE", full: "Uttar Pradesh Sainik School Entrance Exam", fee: "₹30,000", icon: "⭐",
    desc: "Specialized coaching for Uttar Pradesh Sainik School Entrance Examination — state level exam for admission to UP Sainik Schools.",
    eligibility: ["Class 6 Entry: Age 10–12 years", "Class 9 Entry: Age 13–15 years", "UP Domicile preferred", "Minimum 45% in previous class"],
    examPattern: [{ subject: "Mathematics", marks: "100", type: "MCQ" }, { subject: "General Knowledge", marks: "50", type: "MCQ" }, { subject: "Hindi", marks: "50", type: "MCQ" }, { subject: "Mental Ability", marks: "50", type: "MCQ" }],
    selection: ["Written Exam (State level)", "Medical Examination", "Interview Round", "Final Merit List"],
    physical: ["Standard physical fitness", "Medical test by school authority", "No serious health conditions"],
  },
  {
    id: "rims", name: "RIMS", full: "Rashtriya Indian Military School", fee: "₹38,000", icon: "🎖️",
    desc: "Expert coaching for RIMS entrance examination — one of India's premier military schools offering world-class education combined with military training.",
    eligibility: ["Class 6 Entry: Age 10–12 years", "Class 9 Entry: Age 13–15 years", "All Indian nationals", "Good academic record required"],
    examPattern: [{ subject: "Mathematics", marks: "200", type: "Written" }, { subject: "English", marks: "100", type: "Written" }, { subject: "General Knowledge", marks: "50", type: "Written" }, { subject: "Viva Voce", marks: "50", type: "Interview" }],
    selection: ["Written Entrance Exam", "Viva Voce / Interview", "Medical Examination", "Final Selection List"],
    physical: ["Physical fitness test", "Height & weight standards", "Vision standards", "Medical board clearance"],
  },
  {
    id: "rimc", name: "RIMC", full: "Rashtriya Indian Military College", fee: "₹40,000", icon: "🏆",
    desc: "Intensive preparation for RIMC Dehradun — the most prestigious military college in India, gateway to National Defence Academy.",
    eligibility: ["Age: 11.5 to 13 years", "Class 7 studying or passed", "Only male candidates", "Strong academic background needed"],
    examPattern: [{ subject: "Mathematics", marks: "200", type: "Written" }, { subject: "English", marks: "125", type: "Written" }, { subject: "GK & Current Affairs", marks: "75", type: "Written" }, { subject: "Viva Voce", marks: "100", type: "Interview" }],
    selection: ["Written Examination", "Viva Voce Interview", "Medical Examination (SHAPE-1)", "Final Merit & Allotment"],
    physical: ["SHAPE-1 medical standard", "Height min 152 cm", "Good vision required", "No physical disability"],
  },
  {
    id: "cds-nda", name: "CDS & NDA", full: "Combined Defence Services & National Defence Academy", fee: "₹45,000", icon: "🛡️",
    desc: "Complete coaching for NDA and CDS — India's top defence entrance exams conducted by UPSC for Army, Navy and Air Force.",
    eligibility: ["NDA: Age 16.5–19.5 years, Class 12 passed/appearing", "CDS: Age 19–25 years, Graduate degree", "NDA: Male & Female both", "Indian Nationals only"],
    examPattern: [{ subject: "NDA — Mathematics", marks: "300", type: "Written" }, { subject: "NDA — GAT (English+GK)", marks: "600", type: "Written" }, { subject: "CDS — English", marks: "100", type: "Written" }, { subject: "CDS — GK + Math", marks: "200", type: "Written" }],
    selection: ["UPSC Written Exam", "SSB Interview (5 days)", "Medical Examination", "Merit List by UPSC"],
    physical: ["Height: 157 cm (Army), 162 cm (Navy/AF)", "Weight proportional to height", "Vision: 6/6 or correctable", "Full medical fitness required"],
  },
  {
    id: "airforce", name: "Air Force X & Y", full: "Indian Air Force Group X & Y Examination", fee: "₹25,000", icon: "✈️",
    desc: "Focused coaching for Indian Air Force Agniveer Vayu Group X (Technical) and Group Y (Non-Technical) examination.",
    eligibility: ["Age: 17.5 to 21 years", "Group X: Class 12 with Physics & Math (60%)", "Group Y: Class 12 any stream (50%)", "Indian male nationals only"],
    examPattern: [{ subject: "English", marks: "20", type: "MCQ" }, { subject: "Physics (Group X)", marks: "25", type: "MCQ" }, { subject: "Mathematics (Group X)", marks: "25", type: "MCQ" }, { subject: "Reasoning & GK (Group Y)", marks: "30", type: "MCQ" }],
    selection: ["Online Written Test", "Physical Fitness Test (PFT)", "Adaptability Test", "Medical Examination"],
    physical: ["Height min 152.5 cm", "Chest: 77 cm (expandable to 82 cm)", "Vision 6/6 (Group X), 6/9 (Group Y)", "1.6 km run in 7.5 minutes"],
  },
];

const features = [
  { icon: "🎯", title: "Expert Faculty",          desc: "Ex-defence officers and SSB interview coaches with 15+ years experience." },
  { icon: "📚", title: "Complete Study Material",  desc: "Comprehensive, exam-focused study material updated every year." },
  { icon: "💪", title: "Physical Training",        desc: "Regular PT sessions to build fitness levels required for defence services." },
  { icon: "🧪", title: "Mock Tests Series",        desc: "Weekly mock tests and full-length practice papers to boost performance." },
  { icon: "🏆", title: "SSB Guidance",             desc: "Dedicated SSB preparation with psychology tests and GTO tasks." },
  { icon: "👨‍👩‍👧", title: "Personal Mentoring",     desc: "One-on-one mentoring sessions to identify and overcome weak areas." },
];

const DefenceAcademy = () => {
  const [current, setCurrent]           = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeDetail, setActiveDetail] = useState("eligibility");
  const [animating, setAnimating]       = useState(false);

  const goTo = useCallback((index) => {
    setAnimating(true);
    setTimeout(() => { setCurrent(index); setAnimating(false); }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
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
          .hero-inner   { flex-direction: column !important; padding: 28px 20px 40px !important; gap: 20px !important; }
          .hero-left    { text-align: center !important; width: 100% !important; min-width: 0 !important; }
          .hero-right   { display: none !important; }
          .hero-stats   { justify-content: center !important; }
          .cards-grid   { grid-template-columns: 1fr !important; }
          .detail-tabs  { overflow-x: auto; }
          .detail-body  { padding: 20px !important; }
          .detail-head  { padding: 20px !important; flex-direction: column !important; }
          .features-grid{ grid-template-columns: 1fr !important; }
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
                <span style={{ display: "inline-block", padding: "5px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px", border: "1px solid rgba(255,153,0,0.5)", color: "#FF9933", background: "rgba(255,153,0,0.12)" }}>
                  {slide.tag}
                </span>
                <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.6vw, 36px)", color: "white", lineHeight: 1.15, marginBottom: "12px" }}>
                  {slide.title} <span style={{ color: "#FF9933" }}>{slide.highlight}</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px", maxWidth: "460px" }}>
                  {slide.desc}
                </p>
                <div className="hero-stats" style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  {slide.stats.map((s) => (
                    <div key={s.lab}>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 800, color: "#FF9933" }}>{s.val}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px" }}>{s.lab}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="hero-right" style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "rgba(255,153,0,0.15)", border: "2px solid rgba(255,153,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "42px" }}>🛡️</div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>OUR ACADEMY</p>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.4vw, 36px)", color: "white", lineHeight: 1.2, marginBottom: "4px" }}>Sniper</h2>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(20px, 2.4vw, 36px)", color: "#FF9933", lineHeight: 1.2, marginBottom: "6px" }}>Defence Academy</h2>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "1px" }}>NDA • CDS • SSB • Sainik School</p>
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
                  style={{ width: i === current ? "22px" : "7px", height: "7px", borderRadius: "999px", background: i === current ? "#FF9933" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── COURSES CARDS ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(255,153,0,0.3)", color: "#FF9933", background: "rgba(255,153,0,0.07)" }}>📋 Our Courses</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e", marginBottom: "10px" }}>
              Defence <span style={{ color: "#FF9933" }}>Programs</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
              Click on any course card to view full details
            </p>
          </div>

          {/* Cards Grid */}
          <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {courses.map((course) => {
              const isSelected = selectedCourse?.id === course.id;
              return (
                <div key={course.id} onClick={() => handleCardClick(course)}
                  style={{ background: isSelected ? "linear-gradient(135deg, #0d1b3e, #1a3260)" : "white", borderRadius: "16px", padding: "28px", border: isSelected ? "2px solid #FF9933" : "1.5px solid #eef1f8", borderTop: "4px solid #FF9933", cursor: "pointer", transition: "all 0.3s ease", boxShadow: isSelected ? "0 12px 36px rgba(255,153,0,0.2)" : "none" }}
                  onMouseEnter={e => { if (!isSelected) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(255,153,0,0.12)"; e.currentTarget.style.borderColor = "#FF9933"; }}}
                  onMouseLeave={e => { if (!isSelected) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#eef1f8"; }}}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: isSelected ? "rgba(255,153,0,0.15)" : "rgba(255,153,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>{course.icon}</div>
                    <span style={{ padding: "5px 12px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, background: isSelected ? "rgba(255,153,0,0.2)" : "rgba(255,153,0,0.1)", color: "#FF9933" }}>{course.fee}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 700, color: isSelected ? "white" : "#0d1b3e", marginBottom: "4px", lineHeight: 1.3 }}>{course.name}</h3>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#FF9933", marginBottom: "12px" }}>{course.full}</p>
                  <p style={{ fontSize: "15px", color: isSelected ? "rgba(255,255,255,0.8)" : "#334155", lineHeight: 1.7, marginBottom: "20px" }}>{course.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 700, color: "#FF9933" }}>
                    {isSelected ? "▲ Hide Details" : "▼ View Details"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── EXPANDED DETAIL ── */}
          {selectedCourse && (
            <div id="course-detail" style={{ background: "#fffbf5", borderRadius: "20px", border: "2px solid rgba(255,153,0,0.3)", boxShadow: "0 16px 48px rgba(255,153,0,0.1)", overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, #0d1b3e, #1a3260)", padding: "28px 36px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(255,153,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", flexShrink: 0 }}>{selectedCourse.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px", fontWeight: 800, color: "white", marginBottom: "4px" }}>{selectedCourse.full}</h3>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", margin: 0 }}>{selectedCourse.desc}</p>
                </div>
                <div style={{ padding: "10px 20px", background: "rgba(255,153,0,0.15)", borderRadius: "10px", textAlign: "center", flexShrink: 0 }}>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "1px" }}>Course Fee</div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#FF9933" }}>{selectedCourse.fee}</div>
                </div>
              </div>

              <div style={{ display: "flex", borderBottom: "1px solid #f1e8d8", background: "white", overflowX: "auto" }}>
                {[{ key: "eligibility", label: "📋 Eligibility" }, { key: "exam", label: "📝 Exam Pattern" }, { key: "selection", label: "🏆 Selection Process" }, { key: "physical", label: "💪 Physical Requirements" }].map((tab) => (
                  <button key={tab.key} onClick={(e) => { e.stopPropagation(); setActiveDetail(tab.key); }}
                    style={{ padding: "16px 22px", fontSize: "14px", fontWeight: 600, border: "none", borderBottom: activeDetail === tab.key ? "3px solid #FF9933" : "3px solid transparent", background: "transparent", color: activeDetail === tab.key ? "#FF9933" : "#64748b", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div style={{ padding: "36px" }} onClick={(e) => e.stopPropagation()}>
                {activeDetail === "eligibility" && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
                    {selectedCourse.eligibility.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "18px", background: "white", borderRadius: "12px", border: "1px solid #f1e8d8" }}>
                        <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,153,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#FF9933", flexShrink: 0, fontWeight: 700 }}>✓</div>
                        <span style={{ fontSize: "15px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeDetail === "exam" && (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "400px" }}>
                      <thead>
                        <tr style={{ background: "rgba(255,153,0,0.08)" }}>
                          <th style={{ padding: "14px 20px", textAlign: "left", fontSize: "13px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Subject</th>
                          <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "13px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Marks</th>
                          <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "13px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCourse.examPattern.map((row, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid #f1e8d8", background: i % 2 === 0 ? "white" : "#fffbf5" }}>
                            <td style={{ padding: "16px 20px", fontSize: "16px", color: "#1e293b", fontWeight: 500 }}>{row.subject}</td>
                            <td style={{ padding: "16px 20px", textAlign: "center", fontSize: "18px", fontWeight: 800, color: "#FF9933" }}>{row.marks}</td>
                            <td style={{ padding: "16px 20px", textAlign: "center" }}>
                              <span style={{ padding: "5px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, background: "rgba(255,153,0,0.1)", color: "#FF9933" }}>{row.type}</span>
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
                          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #FF9933, #ffb347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: "white" }}>{i + 1}</div>
                          {i < selectedCourse.selection.length - 1 && <div style={{ width: "2px", height: "48px", background: "rgba(255,153,0,0.3)" }} />}
                        </div>
                        <div style={{ paddingTop: "10px", paddingBottom: i < selectedCourse.selection.length - 1 ? "32px" : "0" }}>
                          <p style={{ fontSize: "16px", fontWeight: 600, color: "#1e293b", margin: 0 }}>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeDetail === "physical" && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
                    {selectedCourse.physical.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "18px", background: "white", borderRadius: "12px", border: "1px solid #f1e8d8" }}>
                        <div style={{ fontSize: "22px", flexShrink: 0 }}>💪</div>
                        <span style={{ fontSize: "15px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ padding: "20px 36px", background: "white", borderTop: "1px solid #f1e8d8", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #FF9933, #ffb347)", color: "white", padding: "12px 24px", borderRadius: "999px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 12px rgba(255,153,0,0.3)" }}>📞 Enquire About {selectedCourse.name}</a>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(255,153,0,0.3)", color: "#FF9933", background: "rgba(255,153,0,0.07)" }}>🏆 Why Choose Us</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e" }}>The Sniper <span style={{ color: "#FF9933" }}>Advantage</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1.5px solid #eef1f8", transition: "all 0.25s ease", display: "flex", gap: "16px", alignItems: "flex-start" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF9933"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,153,0,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,153,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>{f.icon}</div>
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

export default DefenceAcademy;