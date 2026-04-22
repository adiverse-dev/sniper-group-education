import { useState, useEffect, useCallback } from "react";
import HeroSlider from "../sections/HeroSlider";

// ─────────────────────────────────────────────────────────
// DEFENCE SLIDER SLIDES
// ─────────────────────────────────────────────────────────
const defenceSlides = [
  {
    img: "/img/students/1.jpg",
    imgPos: "top center",
    tag: "Sniper Defence Academy",
    accent: "#FF9933",
    heading: "Forge Your Path to National Service",
    sub: "India's trusted defence coaching — preparing warriors since 2009. Join 1,200+ successful selections.",
    stats: [{ val: "1,200+", lab: "Selections" }, { val: "15+", lab: "Years" }, { val: "98%", lab: "Success Rate" }, { val: "50+", lab: "Faculty" }],
    btn: "Explore Courses",
    link: "/defence",
  },
  {
    img: "./img/heroS/AISSEE.png",
    imgPos: "top center",
    tag: "AISSEE",
    accent: "#FF9933",
    heading: "All India Sainik School Entrance Exam",
    sub: "Comprehensive preparation for Class 6 & 9 admissions across all Sainik Schools in India.",
    // Fee removed from stats — contact academy for details
    stats: [{ val: "Class 6 & 9", lab: "Entry" }, { val: "350 Marks", lab: "Total" }, { val: "4 Subjects", lab: "Syllabus" }, { val: "1 Year", lab: "Course" }],
    btn: "Know More",
    link: "/defence",
  },
  {
    img: "./img/heroS/UPSSEE.png",
    imgPos: "top center",
    tag: "UPSSEE",
    accent: "#FF9933",
    heading: "Uttar Pradesh Sainik School Entrance Exam",
    sub: "State level exam for UP Sainik School admissions. Special focus on UP domicile students.",
    stats: [{ val: "State Level", lab: "Exam" }, { val: "250 Marks", lab: "Total" }, { val: "4 Subjects", lab: "Syllabus" }, { val: "1 Year", lab: "Course" }],
    btn: "Know More",
    link: "/defence",
  },
  {
    img: "./img/heroS/RIMS.png",
    imgPos: "top center",
    tag: "RMS",
    accent: "#FF9933",
    heading: "Rashtriya Indian Military School",
    sub: "Elite military school preparation combining academic excellence with military discipline and viva voce coaching.",
    stats: [{ val: "400 Marks", lab: "Total" }, { val: "Written + Viva", lab: "Pattern" }, { val: "Class 6 & 9", lab: "Entry" }, { val: "1 Year", lab: "Course" }],
    btn: "Know More",
    link: "/defence",
  },
  {
    img: "./img/heroS/RIMC.png",
    imgPos: "top center",
    tag: "RIMC",
    accent: "#FF9933",
    heading: "Rashtriya Indian Military College",
    sub: "RIMC Dehradun — most prestigious military college in India. Gateway to NDA.",
    stats: [{ val: "500 Marks", lab: "Total" }, { val: "SHAPE-1", lab: "Medical" }, { val: "Age 11.5–13", lab: "Eligibility" }, { val: "1 Year", lab: "Course" }],
    btn: "Know More",
    link: "/defence",
  },
  {
    img: "./img/heroS/CDS & NDA.png",
    imgPos: "top center",
    tag: "CDS & NDA",
    accent: "#FF9933",
    heading: "Combined Defence & National Defence Academy",
    sub: "Complete UPSC coaching for NDA & CDS — Army, Navy and Air Force. SSB interview preparation included.",
    stats: [{ val: "UPSC", lab: "Conducting Body" }, { val: "SSB 5 Days", lab: "Interview" }, { val: "900 Marks", lab: "NDA Total" }, { val: "1–2 Years", lab: "Course" }],
    btn: "Know More",
    link: "/defence",
  },
  {
    img: "./img/heroS/Airforce X&Y.png",
    imgPos: "top center",
    tag: "Air Force X & Y",
    accent: "#FF9933",
    heading: "Indian Air Force Group X & Y Exam",
    sub: "Agniveer Vayu preparation for Group X (Technical) and Group Y (Non-Technical). Written + PFT coaching.",
    stats: [{ val: "Age 17.5–21", lab: "Eligibility" }, { val: "PFT + Written", lab: "Pattern" }, { val: "6 Months", lab: "Course" }, { val: "MCQ Based", lab: "Exam Type" }],
    btn: "Know More",
    link: "/defence",
  },
];

// ─────────────────────────────────────────────────────────
// COURSES DATA — fee field removed intentionally
// ─────────────────────────────────────────────────────────
const courses = [
  {
    id: "aissee", name: "AISSEE", full: "All India Sainik School Entrance Exam", icon: "🏫",
    photo: "./img_course_card/AISSEE.jpg", cat: "School Level",
    stats: [{ v: "Class 6 & 9", l: "Entry" }, { v: "350", l: "Total Marks" }, { v: "1 Year", l: "Course" }],
    desc: "Comprehensive preparation for All India Sainik School Entrance Examination for Class 6 and Class 9 admissions across all Sainik Schools in India.",
    eligibility: ["Class 6 Entry: Age 10–12 years", "Class 9 Entry: Age 13–15 years", "Indian Nationals only", "Minimum 50% marks in previous class"],
    examPattern: [{ subject: "Mathematics", marks: "150", type: "MCQ" }, { subject: "General Knowledge", marks: "75", type: "MCQ" }, { subject: "Language (Hindi/English)", marks: "75", type: "MCQ" }, { subject: "Intelligence", marks: "50", type: "MCQ" }],
    selection: ["Written Exam (NTA conducted)", "Medical Examination", "Document Verification", "Merit List & Allotment"],
    physical: ["Good physical health required", "No major physical disability", "Medical fitness as per Sainik School norms"],
  },
  {
    id: "upssee", name: "UPSSEE", full: "Uttar Pradesh Sainik School Entrance Exam", icon: "⭐",
    photo: "./img_course_card/UPSSEE.jpg", cat: "School Level",
    stats: [{ v: "State Level", l: "Exam" }, { v: "250", l: "Total Marks" }, { v: "1 Year", l: "Course" }],
    desc: "Specialized coaching for Uttar Pradesh Sainik School Entrance Examination — state level exam for admission to UP Sainik Schools.",
    eligibility: ["Class 6 Entry: Age 10–12 years", "Class 9 Entry: Age 13–15 years", "UP Domicile preferred", "Minimum 45% in previous class"],
    examPattern: [{ subject: "Mathematics", marks: "100", type: "MCQ" }, { subject: "General Knowledge", marks: "50", type: "MCQ" }, { subject: "Hindi", marks: "50", type: "MCQ" }, { subject: "Mental Ability", marks: "50", type: "MCQ" }],
    selection: ["Written Exam (State level)", "Medical Examination", "Interview Round", "Final Merit List"],
    physical: ["Standard physical fitness", "Medical test by school authority", "No serious health conditions"],
  },
  {
    id: "rims", name: "RMS", full: "Rashtriya Military School", icon: "🎖️",
    photo: "./img_course_card/RIMS.jpg", cat: "School Level",
    stats: [{ v: "400", l: "Total Marks" }, { v: "Written+Viva", l: "Pattern" }, { v: "1 Year", l: "Course" }],
    desc: "Expert coaching for RIMS entrance examination — one of India's premier military schools offering world-class education combined with military training.",
    eligibility: ["Class 6 Entry: Age 10–12 years", "Class 9 Entry: Age 13–15 years", "All Indian nationals", "Good academic record required"],
    examPattern: [{ subject: "Mathematics", marks: "200", type: "Written" }, { subject: "English", marks: "100", type: "Written" }, { subject: "General Knowledge", marks: "50", type: "Written" }, { subject: "Viva Voce", marks: "50", type: "Interview" }],
    selection: ["Written Entrance Exam", "Viva Voce / Interview", "Medical Examination", "Final Selection List"],
    physical: ["Physical fitness test", "Height & weight standards", "Vision standards", "Medical board clearance"],
  },
  {
    id: "rimc", name: "RIMC", full: "Rashtriya Indian Military College", icon: "🏆",
    photo: "./img_course_card/RIMC.jpg", cat: "College Level",
    stats: [{ v: "500", l: "Total Marks" }, { v: "SHAPE-1", l: "Medical Std" }, { v: "Age 11.5–13", l: "Eligibility" }],
    desc: "Intensive preparation for RIMC Dehradun — the most prestigious military college in India, gateway to National Defence Academy.",
    eligibility: ["Age: 11.5 to 13 years", "Class 7 studying or passed", "Only male candidates", "Strong academic background needed"],
    examPattern: [{ subject: "Mathematics", marks: "200", type: "Written" }, { subject: "English", marks: "125", type: "Written" }, { subject: "GK & Current Affairs", marks: "75", type: "Written" }, { subject: "Viva Voce", marks: "100", type: "Interview" }],
    selection: ["Written Examination", "Viva Voce Interview", "Medical Examination (SHAPE-1)", "Final Merit & Allotment"],
    physical: ["SHAPE-1 medical standard", "Height min 152 cm", "Good vision required", "No physical disability"],
  },
  {
    id: "cds-nda", name: "CDS & NDA", full: "Combined Defence Services & National Defence Academy", icon: "🛡️",
    photo: "./img_course_card/CDS & NDA.jpg", cat: "National Level",
    stats: [{ v: "UPSC", l: "Conducted By" }, { v: "900", l: "NDA Marks" }, { v: "1–2 Yrs", l: "Course" }],
    desc: "Complete coaching for NDA and CDS — India's top defence entrance exams conducted by UPSC for Army, Navy and Air Force.",
    eligibility: ["NDA: Age 16.5–19.5 years, Class 12 passed/appearing", "CDS: Age 19–25 years, Graduate degree", "NDA: Male & Female both", "Indian Nationals only"],
    examPattern: [{ subject: "NDA — Mathematics", marks: "300", type: "Written" }, { subject: "NDA — GAT (English+GK)", marks: "600", type: "Written" }, { subject: "CDS — English", marks: "100", type: "Written" }, { subject: "CDS — GK + Math", marks: "200", type: "Written" }],
    selection: ["UPSC Written Exam", "SSB Interview (5 days)", "Medical Examination", "Merit List by UPSC"],
    physical: ["Height: 157 cm (Army), 162 cm (Navy/AF)", "Weight proportional to height", "Vision: 6/6 or correctable", "Full medical fitness required"],
  },
  {
    id: "airforce", name: "Air Force X & Y", full: "Indian Air Force Group X & Y Examination", icon: "✈️",
    photo: "./img_course_card/Airforce X&Y.jpg", cat: "Armed Forces",
    stats: [{ v: "Age 17.5–21", l: "Eligibility" }, { v: "PFT+Written", l: "Pattern" }, { v: "6 Months", l: "Course" }],
    desc: "Focused coaching for Indian Air Force Agniveer Vayu Group X (Technical) and Group Y (Non-Technical) examination.",
    eligibility: ["Age: 17.5 to 21 years", "Group X: Class 12 with Physics & Math (60%)", "Group Y: Class 12 any stream (50%)", "Indian male nationals only"],
    examPattern: [{ subject: "English", marks: "20", type: "MCQ" }, { subject: "Physics (Group X)", marks: "25", type: "MCQ" }, { subject: "Mathematics (Group X)", marks: "25", type: "MCQ" }, { subject: "Reasoning & GK (Group Y)", marks: "30", type: "MCQ" }],
    selection: ["Online Written Test", "Physical Fitness Test (PFT)", "Adaptability Test", "Medical Examination"],
    physical: ["Height min 152.5 cm", "Chest: 77 cm (expandable to 82 cm)", "Vision 6/6 (Group X), 6/9 (Group Y)", "1.6 km run in 7.5 minutes"],
  },
];

// ─────────────────────────────────────────────────────────
// FEATURES DATA
// ─────────────────────────────────────────────────────────
const features = [
  {
    icon: "🎯", title: "Expert Faculty",
    desc: "Ex-defence officers and SSB interview coaches with 15+ years experience.",
    photo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80&fit=crop&crop=center",
  },
  {
    icon: "📚", title: "Complete Study Material",
    desc: "Comprehensive, exam-focused study material updated every year.",
    photo: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80&fit=crop&crop=center",
  },
  {
    icon: "💪", title: "Physical Training",
    desc: "Regular PT sessions to build fitness levels required for defence services.",
    photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop&crop=center",
  },
  {
    icon: "🧪", title: "Mock Tests Series",
    desc: "Weekly mock tests and full-length practice papers to boost performance.",
    photo: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80&fit=crop&crop=center",
  },
  {
    icon: "🏆", title: "SSB Guidance",
    desc: "Dedicated SSB preparation with psychology tests and GTO tasks.",
    photo: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80&fit=crop&crop=center",
  },
  {
    icon: "👨‍👩‍👧", title: "Personal Mentoring",
    desc: "One-on-one mentoring sessions to identify and overcome weak areas.",
    photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&fit=crop&crop=center",
  },
];

// ─────────────────────────────────────────────────────────
// COURSE DETAIL PANEL — fee badge removed from header
// ─────────────────────────────────────────────────────────
const CourseDetail = ({ course, activeDetail, setActiveDetail }) => {
  const tabs = [
    { key: "eligibility", label: "📋 Eligibility" },
    { key: "exam",        label: "📝 Exam Pattern" },
    { key: "selection",   label: "🏆 Selection Process" },
    { key: "physical",    label: "💪 Physical" },
  ];
  return (
    <div id="course-detail" style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid rgba(255,153,0,0.35)", background: "#fffbf5", marginTop: "8px", marginBottom: "8px" }}>
      {/* Header — no fee displayed */}
      <div style={{ background: "linear-gradient(135deg, #0d1b3e, #1a3260)", padding: "22px 28px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(255,153,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0 }}>
          {course.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>{course.name} — {course.full}</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "3px" }}>{course.desc}</div>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ display: "flex", background: "white", borderBottom: "1px solid #f1e8d8", overflowX: "auto" }}>
        {tabs.map((tab) => (
          <button key={tab.key} onClick={(e) => { e.stopPropagation(); setActiveDetail(tab.key); }}
            style={{ padding: "14px 20px", fontSize: "13px", fontWeight: 600, border: "none", background: "transparent", cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s", borderBottom: activeDetail === tab.key ? "3px solid #FF9933" : "3px solid transparent", color: activeDetail === tab.key ? "#FF9933" : "#64748b" }}>
            {tab.label}
          </button>
        ))}
      </div>
      {/* Body */}
      <div style={{ padding: "28px 32px" }} onClick={(e) => e.stopPropagation()}>
        {activeDetail === "eligibility" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
            {course.eligibility.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", background: "white", borderRadius: "12px", border: "1px solid #f1e8d8" }}>
                <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,153,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#FF9933", flexShrink: 0, fontWeight: 700 }}>✓</div>
                <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        )}
        {activeDetail === "exam" && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "380px" }}>
              <thead>
                <tr style={{ background: "rgba(255,153,0,0.08)" }}>
                  <th style={{ padding: "12px 18px", textAlign: "left", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Subject</th>
                  <th style={{ padding: "12px 18px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Marks</th>
                  <th style={{ padding: "12px 18px", textAlign: "center", fontSize: "12px", fontWeight: 700, color: "#0d1b3e", textTransform: "uppercase", letterSpacing: "1px" }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {course.examPattern.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f1e8d8", background: i % 2 === 0 ? "white" : "#fffbf5" }}>
                    <td style={{ padding: "14px 18px", fontSize: "15px", color: "#1e293b", fontWeight: 500 }}>{row.subject}</td>
                    <td style={{ padding: "14px 18px", textAlign: "center", fontSize: "17px", fontWeight: 800, color: "#FF9933" }}>{row.marks}</td>
                    <td style={{ padding: "14px 18px", textAlign: "center" }}>
                      <span style={{ padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, background: "rgba(255,153,0,0.1)", color: "#FF9933" }}>{row.type}</span>
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
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #FF9933, #ffb347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "white" }}>{i + 1}</div>
                  {i < course.selection.length - 1 && <div style={{ width: "2px", height: "44px", background: "rgba(255,153,0,0.25)" }} />}
                </div>
                <div style={{ paddingTop: "10px", paddingBottom: i < course.selection.length - 1 ? "28px" : "0" }}>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b", margin: 0 }}>{step}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeDetail === "physical" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
            {course.physical.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", background: "white", borderRadius: "12px", border: "1px solid #f1e8d8" }}>
                <div style={{ fontSize: "20px", flexShrink: 0 }}>💪</div>
                <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* CTA */}
      <div style={{ padding: "16px 32px", background: "white", borderTop: "1px solid #f1e8d8", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #FF9933, #ffb347)", color: "white", padding: "11px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 12px rgba(255,153,0,0.3)" }}>
          📞 Enquire About {course.name}
        </a>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// COURSE ROW (zigzag) — fee badge on image removed
// ─────────────────────────────────────────────────────────
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
      <div
        onClick={handleClick}
        style={{ display: "flex", flexDirection: rowDirection, borderRadius: "20px", overflow: "hidden", border: isSelected ? "2px solid #FF9933" : "1.5px solid #eef1f8", background: "white", cursor: "pointer", transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease", boxShadow: isSelected ? "0 12px 36px rgba(255,153,0,0.18)" : "0 2px 12px rgba(0,0,0,0.06)" }}
        onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = "#FF9933"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(255,153,0,0.14)"; } }}
        onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; } }}
      >
        {/* IMAGE SIDE */}
        <div style={{ width: isMobile ? "100%" : "42%", flexShrink: 0, position: "relative", overflow: "hidden", minHeight: isMobile ? "220px" : "260px" }}>
          <img src={course.photo} alt={course.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transition: "transform 0.5s ease" }}
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
          />
          {/* Top accent bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #FF9933, #ffb347)", zIndex: 3 }} />
          {/* Category badge — fee badge removed */}
          <div style={{ position: "absolute", bottom: "14px", left: "14px", background: "rgba(13,27,62,0.85)", color: "white", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "999px", zIndex: 2, letterSpacing: "0.5px" }}>{course.cat}</div>
          {!isMobile && (
            <div style={{ position: "absolute", top: 0, bottom: 0, width: "80px", ...(isReverse ? { left: 0, background: "linear-gradient(to right, white, transparent)" } : { right: 0, background: "linear-gradient(to left, white, transparent)" }), pointerEvents: "none", zIndex: 1 }} />
          )}
        </div>
        {/* CONTENT SIDE */}
        <div style={{ flex: 1, padding: isMobile ? "20px 18px" : "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", background: isSelected ? "linear-gradient(135deg, #0d1b3e, #1a3260)" : "white", transition: "background 0.3s ease" }}>
          {!isMobile && (
            <div style={{ position: "absolute", top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #FF9933, #ffb347)", ...(isReverse ? { right: 0 } : { left: 0 }) }} />
          )}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: isSelected ? "rgba(255,153,0,0.15)" : "rgba(255,153,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0 }}>
              {course.icon}
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif", color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>{course.name}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#FF9933", marginTop: "2px" }}>{course.full}</div>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: isSelected ? "rgba(255,255,255,0.75)" : "#334155", lineHeight: 1.75, marginBottom: "18px" }}>{course.desc}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${isSelected ? "rgba(255,153,0,0.3)" : "#eef1f8"}`, borderRadius: "12px", overflow: "hidden", marginBottom: "18px" }}>
            {course.stats.map((s, i) => (
              <div key={i} style={{ padding: "10px 8px", textAlign: "center", borderRight: i < course.stats.length - 1 ? `1px solid ${isSelected ? "rgba(255,153,0,0.2)" : "#eef1f8"}` : "none" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: isSelected ? "rgba(255,255,255,0.5)" : "#94a3b8", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "2px" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: "#FF9933", background: "rgba(255,153,0,0.1)", border: "1px solid rgba(255,153,0,0.3)", padding: "7px 16px", borderRadius: "999px" }}>
              {isSelected ? "▲ Hide Details" : "▼ View Details"}
            </span>
          </div>
        </div>
      </div>
      {isSelected && (
        <CourseDetail course={course} activeDetail={activeDetail} setActiveDetail={setActiveDetail} />
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────
const DefenceAcademy = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeDetail, setActiveDetail] = useState("eligibility");
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      {/* Hero Slider */}
      <HeroSlider slides={defenceSlides} />
      {/* Courses Section — zigzag layout */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(255,153,0,0.3)", color: "#FF9933", background: "rgba(255,153,0,0.07)" }}>
              📋 Our Courses
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e", marginBottom: "10px" }}>
              Defence <span style={{ color: "#FF9933" }}>Programs</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", maxWidth: "480px", margin: "0 auto" }}>
              India's most trusted defence coaching since 2009 — click any course to explore details
            </p>
          </div>
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
      {/* Why Choose Us Section */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(255,153,0,0.3)", color: "#FF9933", background: "rgba(255,153,0,0.07)" }}>
              🏆 Why Choose Us
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e" }}>
              The Sniper <span style={{ color: "#FF9933" }}>Advantage</span>
            </h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i}
                style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", transition: "all 0.3s ease", overflow: "hidden", cursor: "default", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF9933"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(255,153,0,0.14)"; e.currentTarget.querySelector(".feat-img").style.transform = "scale(1.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.querySelector(".feat-img").style.transform = "scale(1)"; }}
              >
                <div style={{ position: "relative", height: "170px", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #FF9933, #ffb347)", zIndex: 3 }} />
                  <img className="feat-img" src={f.photo} alt={f.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.5s ease" }}
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: "10px", left: "16px", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,153,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: "0 4px 12px rgba(255,153,0,0.35)", zIndex: 2 }}>
                    {f.icon}
                  </div>
                </div>
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

export default DefenceAcademy;