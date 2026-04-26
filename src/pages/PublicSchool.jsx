import { useState, useEffect } from "react";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
// ─────────────────────────────────────────────────────────
// SCHOOL SLIDER SLIDES
// ─────────────────────────────────────────────────────────
const schoolSlides = [
  {
    img: IMAGE_PATHS.school.hero.intro,
    imgPos: "top center",
    tag: "Sniper Public School",
    accent: "#10b981",
    heading: "Nurturing Excellence from Day One",
    sub: "CBSE affiliated school offering quality education from Nursery to Class 8 with modern facilities and experienced faculty.",
    stats: [{ val: "1,000+", lab: "Students" }, { val: "CBSE", lab: "Affiliated" }, { val: "98%", lab: "Board Results" }, { val: "50+", lab: "Faculty" }],
    btn: "Explore School",
    link: "/school",
  },
  {
    img: IMAGE_PATHS.school.hero.nurseryKg,
    imgPos: "top center",
    tag: "Nursery – KG",
    accent: "#10b981",
    heading: "Building Strong Foundations Early",
    sub: "Activity-based early childhood education focusing on creativity, basic phonics, art & craft, music and social development.",
    stats: [{ val: "Age 3–6", lab: "Eligibility" }, { val: "Activity Based", lab: "Learning" }, { val: "Art & Music", lab: "Included" }, { val: "₹18,000", lab: "Per Year" }],
    btn: "Know More",
    link: "/school",
  },
  {
    img: IMAGE_PATHS.school.hero.class15,
    imgPos: "top center",
    tag: "Class 1 – 5",
    accent: "#10b981",
    heading: "Conceptual Clarity & All-Round Growth",
    sub: "Strong CBSE foundation with computer lab, sports, library access and focus on conceptual clarity from an early age.",
    stats: [{ val: "Class 1–5", lab: "Level" }, { val: "CBSE", lab: "Curriculum" }, { val: "Computer Lab", lab: "Included" }, { val: "₹24,000", lab: "Per Year" }],
    btn: "Know More",
    link: "/school",
  },
  {
    img: IMAGE_PATHS.school.hero.class68,
    imgPos: "top center",
    tag: "Class 6 – 8",
    accent: "#10b981",
    heading: "Science, Math & Academic Excellence",
    sub: "Middle school education with science labs, mathematics focus, English communication and competitive exam foundation building.",
    stats: [{ val: "Class 6–8", lab: "Level" }, { val: "Science Lab", lab: "Included" }, { val: "Math Focus", lab: "Special" }, { val: "₹36,000", lab: "Per Year" }],
    btn: "Know More",
    link: "/school",
  },
];
// ─────────────────────────────────────────────────────────
// COURSES DATA
// ─────────────────────────────────────────────────────────
const courses = [
  {
    id: "nursery",
    name: "Nursery – KG",
    full: "Nursery to Kindergarten — Early Childhood Education",
    fee: "₹18,000/yr",
    icon: "🌱",
    photo: IMAGE_PATHS.school.cards.nurseryKg,
    cat: "Early Childhood",
    stats: [{ v: "Age 3–6", l: "Eligibility" }, { v: "Activity Based", l: "Learning" }, { v: "1 Year", l: "Duration" }],
    desc: "Activity-based early childhood education focusing on foundational skills, creativity, basic phonics and social development.",
    eligibility: ["Age 3 to 6 years", "No prior schooling required", "Both boys and girls", "Any background accepted"],
    examPattern: [
      { subject: "Language & Phonics",       marks: "—", type: "Activity" },
      { subject: "Mathematics Basics",        marks: "—", type: "Activity" },
      { subject: "Art & Craft",               marks: "—", type: "Creative" },
      { subject: "Environmental Awareness",   marks: "—", type: "Activity" },
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
    photo: IMAGE_PATHS.school.cards.class15,
    cat: "Primary School",
    stats: [{ v: "Class 1–5", l: "Level" }, { v: "CBSE", l: "Curriculum" }, { v: "1 Year", l: "Duration" }],
    desc: "Strong foundational education following CBSE curriculum with focus on conceptual clarity, computer lab and all-round development.",
    eligibility: ["Age-appropriate class entry", "Previous class passed certificate", "CBSE / any board background", "Hindi & English Medium both"],
    examPattern: [
      { subject: "Mathematics",          marks: "100", type: "Written" },
      { subject: "English",              marks: "100", type: "Written" },
      { subject: "Hindi",                marks: "100", type: "Written" },
      { subject: "Environmental Studies",marks: "100", type: "Written" },
    ],
    selection: ["Admission Enquiry", "Previous Report Card Verification", "Interaction with Child", "Admission & Fee Submission"],
    includes: ["CBSE Curriculum", "Computer Lab Access", "Sports & Games", "Library Access"],
  },
  {
    id: "class68",
    name: "Class 6 – 8",
    full: "Class 6 to 8 — Middle School Excellence",
    fee: "₹36,000/yr",
    icon: "🔬",
    photo: IMAGE_PATHS.school.cards.class68,
    cat: "Middle School",
    stats: [{ v: "Class 6–8", l: "Level" }, { v: "Science Lab", l: "Facility" }, { v: "1 Year", l: "Duration" }],
    desc: "Middle school education with science labs, mathematics focus, English communication and competitive exam foundation building.",
    eligibility: ["Class 5 passed for Class 6", "Class 6 / 7 passed for respective classes", "CBSE / UP Board background", "Hindi & English Medium both"],
    examPattern: [
      { subject: "Mathematics",    marks: "100", type: "Written" },
      { subject: "Science",        marks: "100", type: "Written + Practical" },
      { subject: "Social Science", marks: "100", type: "Written" },
      { subject: "English / Hindi",marks: "100", type: "Written" },
    ],
    selection: ["Admission Enquiry", "Previous Class Certificate", "Entry Level Test", "Admission Confirmation"],
    includes: ["Science Lab Sessions", "Math Special Focus", "English Communication", "Sports & Co-curricular"],
  },
];
// ─────────────────────────────────────────────────────────
// FEATURES DATA
// ─────────────────────────────────────────────────────────
const features = [
  { icon: "🏫", title: "CBSE Affiliated",      desc: "Fully affiliated with CBSE board ensuring national standard curriculum.",                    photo: IMAGE_PATHS.school.features.cbseAffiliated },
  { icon: "🔬", title: "Modern Labs",           desc: "Well-equipped science, computer and language labs for hands-on learning.",                   photo: IMAGE_PATHS.school.features.modernLabs },
  { icon: "⚽", title: "Sports & Activities",  desc: "Cricket, football, athletics and indoor games for physical development.",                     photo: IMAGE_PATHS.school.features.sportsActivities },
  { icon: "📚", title: "Experienced Teachers", desc: "Qualified and dedicated faculty with years of teaching experience.",                          photo: IMAGE_PATHS.school.features.experiencedTeachers },
  { icon: "👨‍👩‍👧", title: "Parent Connect",      desc: "Regular PTMs and parent-teacher communication for student progress.",                        photo: IMAGE_PATHS.school.features.parentConnect },
  { icon: "🏆", title: "Merit Scholarships",   desc: "Fee concessions and scholarships for top-performing students.",                               photo: IMAGE_PATHS.school.features.meritScholarships },
];
// ─────────────────────────────────────────────────────────
// COURSE DETAIL PANEL
// ─────────────────────────────────────────────────────────
const CourseDetail = ({ course, activeDetail, setActiveDetail }) => {
  const tabs = [
    { key: "eligibility", label: "📋 Eligibility" },
    { key: "exam",        label: "📝 Subjects" },
    { key: "selection",   label: "🏆 Admission Process" },
    { key: "includes",    label: "✅ What's Included" },
  ];
  return (
    <div id="course-detail" style={{ borderRadius: "20px", overflow: "hidden", border: "2px solid rgba(16,185,129,0.35)", background: "#f0fdf4", marginTop: "8px", marginBottom: "8px" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0d1b3e, #0d3d2e)", padding: "22px 28px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0 }}>
          {course.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>{course.name} — {course.full}</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "3px" }}>{course.desc}</div>
        </div>
        <div style={{ padding: "10px 18px", background: "rgba(16,185,129,0.15)", borderRadius: "10px", textAlign: "center", flexShrink: 0 }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>Annual Fee</div>
          <div style={{ fontSize: "20px", fontWeight: 800, color: "#34d399" }}>{course.fee}</div>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ display: "flex", background: "white", borderBottom: "1px solid #d1fae5", overflowX: "auto" }}>
        {tabs.map((tab) => (
          <button key={tab.key} onClick={(e) => { e.stopPropagation(); setActiveDetail(tab.key); }}
            style={{ padding: "14px 20px", fontSize: "13px", fontWeight: 600, border: "none", background: "transparent", cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s", borderBottom: activeDetail === tab.key ? "3px solid #10b981" : "3px solid transparent", color: activeDetail === tab.key ? "#10b981" : "#64748b" }}>
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
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #10b981, #34d399)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "white" }}>{i + 1}</div>
                  {i < course.selection.length - 1 && <div style={{ width: "2px", height: "44px", background: "rgba(16,185,129,0.25)" }} />}
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
        <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #10b981, #34d399)", color: "white", padding: "11px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 12px rgba(16,185,129,0.3)" }}>
          📞 Enquire About {course.name} Admission
        </a>
      </div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────
// COURSE ROW (zigzag)
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
        style={{ display: "flex", flexDirection: rowDirection, borderRadius: "20px", overflow: "hidden", border: isSelected ? "2px solid #10b981" : "1.5px solid #eef1f8", background: "white", cursor: "pointer", transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease", boxShadow: isSelected ? "0 12px 36px rgba(16,185,129,0.18)" : "0 2px 12px rgba(0,0,0,0.06)" }}
        onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(16,185,129,0.14)"; } }}
        onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; } }}
      >
        {/* IMAGE SIDE */}
        <div style={{ width: isMobile ? "100%" : "42%", flexShrink: 0, position: "relative", overflow: "hidden", minHeight: isMobile ? "220px" : "260px" }}>
          <img loading="lazy" decoding="async" src={course.photo} alt={course.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transition: "transform 0.5s ease" }}
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
          />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #10b981, #34d399)", zIndex: 3 }} />
          <div style={{ position: "absolute", top: "14px", right: "14px", background: "#10b981", color: "white", fontSize: "13px", fontWeight: 700, padding: "5px 14px", borderRadius: "999px", zIndex: 2, boxShadow: "0 2px 8px rgba(16,185,129,0.4)" }}>{course.fee}</div>
          <div style={{ position: "absolute", bottom: "14px", left: "14px", background: "rgba(13,27,62,0.85)", color: "white", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "999px", zIndex: 2, letterSpacing: "0.5px" }}>{course.cat}</div>
          {!isMobile && (
            <div style={{ position: "absolute", top: 0, bottom: 0, width: "80px", ...(isReverse ? { left: 0, background: "linear-gradient(to right, white, transparent)" } : { right: 0, background: "linear-gradient(to left, white, transparent)" }), pointerEvents: "none", zIndex: 1 }} />
          )}
        </div>
        {/* CONTENT SIDE */}
        <div style={{ flex: 1, padding: isMobile ? "20px 18px" : "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", background: isSelected ? "linear-gradient(135deg, #0d1b3e, #0d3d2e)" : "white", transition: "background 0.3s ease" }}>
          {!isMobile && (
            <div style={{ position: "absolute", top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #10b981, #34d399)", ...(isReverse ? { right: 0 } : { left: 0 }) }} />
          )}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: isSelected ? "rgba(16,185,129,0.15)" : "rgba(16,185,129,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
              {course.icon}
            </div>
            <div>
              <div style={{ fontSize: isMobile ? "17px" : "20px", fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif", color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>{course.name}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#10b981", marginTop: "2px" }}>{course.full}</div>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: isSelected ? "rgba(255,255,255,0.75)" : "#334155", lineHeight: 1.7, marginBottom: "16px" }}>{course.desc}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${isSelected ? "rgba(16,185,129,0.3)" : "#eef1f8"}`, borderRadius: "12px", overflow: "hidden", marginBottom: "18px" }}>
            {course.stats.map((s, i) => (
              <div key={i} style={{ padding: "10px 8px", textAlign: "center", borderRight: i < course.stats.length - 1 ? `1px solid ${isSelected ? "rgba(16,185,129,0.2)" : "#eef1f8"}` : "none" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: isSelected ? "rgba(255,255,255,0.5)" : "#94a3b8", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: "2px" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", padding: "7px 16px", borderRadius: "999px" }}>
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
const PublicSchool = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeDetail, setActiveDetail]     = useState("eligibility");
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        .features-grid     { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .student-life-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        @media (max-width: 768px) {
          .features-grid     { grid-template-columns: 1fr !important; }
          .student-life-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .student-life-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      {/* ── HERO SLIDER ── */}
      <HeroSlider slides={schoolSlides} />
      {/* ── CLASSES SECTION — ZIGZAG ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)" }}>
              🏆 Why Choose Us
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e" }}>
              The School <span style={{ color: "#10b981" }}>Advantage</span>
            </h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i}
                style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", transition: "all 0.3s ease", overflow: "hidden", cursor: "default", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(16,185,129,0.14)"; e.currentTarget.querySelector(".feat-img").style.transform = "scale(1.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.querySelector(".feat-img").style.transform = "scale(1)"; }}
              >
                <div style={{ position: "relative", height: "170px", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #10b981, #34d399)", zIndex: 3 }} />
                  <img loading="lazy" decoding="async" className="feat-img" src={f.photo} alt={f.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.5s ease" }}
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: "10px", left: "16px", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(16,185,129,0.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: "0 4px 12px rgba(16,185,129,0.35)", zIndex: 2 }}>
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
      {/* ── STUDENT LIFE ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)" }}>
              🌈 Student Life
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              A Day at <span style={{ color: "#10b981" }}>Sniper School</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", maxWidth: "500px", margin: "12px auto 0" }}>
              Every child's journey is special — we make learning joyful, safe and inspiring from Day 1
            </p>
          </div>
          <div className="student-life-grid">
            {[
              { emoji: "🎨", title: "Art & Craft",       desc: "Creative activities that develop fine motor skills and imagination in young learners.",      color: "#FF9933", photo: IMAGE_PATHS.school.studentLife.artCraft },
              { emoji: "📖", title: "Story Time",         desc: "Daily reading sessions to build language skills, vocabulary and love for books.",           color: "#10b981", photo: IMAGE_PATHS.school.studentLife.storyTime },
              { emoji: "⚽", title: "Sports & Play",     desc: "Structured outdoor play and sports to build teamwork, fitness and confidence.",             color: "#7c3aed", photo: IMAGE_PATHS.school.studentLife.sportsPlay },
              { emoji: "🔬", title: "Science Activities", desc: "Fun experiments and activities that spark curiosity and scientific thinking from Class 3+.", color: "#e8420a", photo: IMAGE_PATHS.school.studentLife.scienceActivities },
              { emoji: "🎵", title: "Music & Dance",      desc: "Cultural activities that nurture creativity, rhythm and self-expression in children.",       color: "#10b981", photo: IMAGE_PATHS.school.studentLife.musicDance },
              { emoji: "🏅", title: "Annual Events",      desc: "Sports day, annual function, science fair and cultural events for holistic development.",    color: "#FF9933", photo: IMAGE_PATHS.school.studentLife.annualEvents },
            ].map((item, i) => (
              <div key={i}
                style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", overflow: "hidden", transition: "all 0.3s ease", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 16px 36px ${item.color}22`; e.currentTarget.querySelector(".sl-img").style.transform = "scale(1.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.querySelector(".sl-img").style.transform = "scale(1)"; }}
              >
                <div style={{ position: "relative", height: "150px", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: item.color, zIndex: 3 }} />
                  <img className="sl-img" src={item.photo} alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.5s ease" }}
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: "8px", left: "14px", width: "40px", height: "40px", borderRadius: "10px", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: `0 4px 10px ${item.color}30`, zIndex: 2 }}>
                    {item.emoji}
                  </div>
                </div>
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
