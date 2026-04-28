import { useState, useEffect } from "react";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { COMPANY_TEXT } from "../config/companyProfile";

// ---------------------------------------------------------
// HERO SLIDER SLIDES
// ---------------------------------------------------------
const heroSlides = [
 {
 img: IMAGE_PATHS.classes.hero.intro,
 imgPos: "top center",
 tag: "Sniper Classes",
 accent: "#7c3aed",
 heading: "Crack Every Exam with Expert Guidance",
 sub: `Result-oriented coaching for IIT JEE, NEET, Board Exams and Foundation courses - with expert faculty and proven methods ${COMPANY_TEXT.sinceFounded}.`,
 
 btn: "Explore Courses",
 link: "/classes",
 },
 {
 img: IMAGE_PATHS.classes.hero.iitJee,
 imgPos: "top center",
 tag: "IIT JEE",
 accent: "#7c3aed",
 heading: "IIT JEE Mains & Advanced Coaching",
 sub: "Comprehensive JEE preparation covering Physics, Chemistry and Mathematics with IITian faculty, daily practice problems and mock tests.",
 
 btn: "Know More",
 link: "/classes",
 },
 {
 img: IMAGE_PATHS.classes.hero.neet,
 imgPos: "top center",
 tag: "NEET",
 accent: "#7c3aed",
 heading: "NEET UG Complete Coaching Program",
 sub: "NCERT-focused NEET preparation with Biology, Chemistry and Physics. Extensive practice tests and lab practical sessions.",
 
 btn: "Know More",
 link: "/classes",
 },
 {
 img: IMAGE_PATHS.classes.hero.class1112PcmPcb,
 imgPos: "top center",
 tag: "Class 11th & 12th",
 accent: "#7c3aed",
 heading: "PCM / PCB Board Excellence Coaching",
 sub: "Senior secondary coaching combining board preparation with JEE/NEET foundation. Science stream subjects with doubt sessions.",
 
 btn: "Know More",
 link: "/classes",
 },
 {
 img: IMAGE_PATHS.classes.hero.class910Foundation,
 imgPos: "top center",
 tag: "Class 9th & 10th",
 accent: "#7c3aed",
 heading: "Foundation & Board Exam Prep",
 sub: "Strong foundation for Class 9 & 10 students with all subjects. Weekly tests, doubt sessions and parent progress reports.",
 
 btn: "Know More",
 link: "/classes",
 },
 {
 img: IMAGE_PATHS.classes.hero.class68Foundation,
 imgPos: "top center",
 tag: "Class 6 - 8",
 accent: "#7c3aed",
 heading: "All Subjects Hindi & CBSE Coaching",
 sub: "Complete coaching for Class 6 to 8 in all subjects - both Hindi Medium and CBSE English Medium with strong conceptual base.",
 
 btn: "Know More",
 link: "/classes",
 },
];

// ---------------------------------------------------------
// COURSES DATA - fee field removed intentionally
// ---------------------------------------------------------
const courses = [
 {
 id: "jee",
 name: "IIT JEE",
 full: "IIT JEE Mains & Advanced",
 icon: "P",
 photo: IMAGE_PATHS.classes.cards.iitJee,
 cat: "Engineering Entrance",
 
 desc: "Comprehensive JEE preparation covering Physics, Chemistry and Mathematics with IITian faculty, daily practice problems and full mock test series.",
 eligibility: ["Class 11 appearing or passed", "Class 12 appearing or passed", "Age up to 25 years (JEE Advanced)", "PCM in Class 12 mandatory"],
 examPattern: [
 { subject: "Physics", marks: "100", type: "MCQ + Numerical" },
 { subject: "Chemistry", marks: "100", type: "MCQ + Numerical" },
 { subject: "Mathematics", marks: "100", type: "MCQ + Numerical" },
 { subject: "Total (Mains)", marks: "300", type: "NTA Online" },
 ],
 selection: ["JEE Mains (NTA - Jan & Apr)", "JEE Advanced (IIT conducted)", "Counselling via JoSAA", "IIT / NIT Admission"],
 includes: ["Daily Practice Problems (DPP)", "Weekly Mock Tests", "One-on-one Doubt Sessions", "Study Material (Printed + Digital)", "Previous Year Papers"],
 },
 {
 id: "neet",
 name: "NEET",
 full: "NEET UG Complete Coaching",
 icon: "P",
 photo: IMAGE_PATHS.classes.cards.neet,
 cat: "Medical Entrance",
 
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
 icon: "M/B",
 photo: IMAGE_PATHS.classes.cards.class1112PcmPcb,
 cat: "Senior Secondary",
 
 desc: "Senior secondary coaching combining board exam preparation with JEE/NEET entrance foundation. Science stream subjects with regular doubt sessions.",
 eligibility: ["Class 10 passed - any board", "PCM stream: Physics, Chemistry, Math", "PCB stream: Physics, Chemistry, Biology", "CBSE / UP Board both accepted"],
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
 icon: "F",
 photo: IMAGE_PATHS.classes.cards.class910Foundation,
 cat: "Secondary Foundation",
 
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
 name: "Class 6 - 8",
 full: "Class 6 to 8 All Subjects - Hindi & CBSE",
 icon: "P",
 photo: IMAGE_PATHS.classes.cards.class68Foundation,
 cat: "Middle School",
 
 desc: "Complete coaching for Class 6 to 8 in all subjects covering both Hindi Medium and CBSE English Medium with strong conceptual base building.",
 eligibility: ["Class 5 passed for Class 6 batch", "Class 6 / 7 passed for respective batches", "Hindi Medium & CBSE English Medium both", "Any school board accepted"],
 examPattern: [
 { subject: "Mathematics", marks: "100", type: "School Exam" },
 { subject: "Science", marks: "100", type: "School Exam" },
 { subject: "Social Science", marks: "100", type: "School Exam" },
 { subject: "Hindi / English", marks: "100", type: "School Exam" },
 ],
 selection: ["School Annual Exams", "Class Promotion Tests", "Monthly Unit Tests", "Foundation for Class 9-10"],
 includes: ["All Subjects (Hindi + English Medium)", "Concept Building Focus", "Monthly Unit Tests", "Activity Based Learning", "Regular Parent Communication"],
 },
];

// ---------------------------------------------------------
// FEATURES DATA
// ---------------------------------------------------------
const features = [
 { icon: "E", title: "Expert Faculty", desc: "IITians and top educators with proven track records in JEE and NEET coaching.", photo: IMAGE_PATHS.classes.features.expertFaculty },
 { icon: "P", title: "Performance Tracking", desc: "Regular assessments and detailed performance reports shared with parents.", photo: IMAGE_PATHS.classes.features.performanceTracking },
 { icon: "P", title: "Digital Resources", desc: "Access to online study materials, recorded lectures and practice tests anytime.", photo: IMAGE_PATHS.classes.features.digitalResources },
 { icon: "P", title: "Lab Practicals", desc: "Well-equipped physics, chemistry and biology labs for hands-on practice.", photo: IMAGE_PATHS.classes.features.labPracticals },
 { icon: "P", title: "Scholarship Tests", desc: "Regular scholarship tests with fee concessions for high performers.", photo: IMAGE_PATHS.classes.features.scholarshipTests },
 { icon: "P", title: "Personalized Attention", desc: "Small batch sizes ensuring individual attention and personalized guidance.", photo: IMAGE_PATHS.classes.features.personalizedAttention },
];

// ---------------------------------------------------------
// COURSE DETAIL PANEL - fee badge removed from header
// ---------------------------------------------------------
const CourseDetail = ({ course, activeDetail, setActiveDetail }) => {
 const tabs = [
 { key: "eligibility", label: "Eligibility" },
 { key: "exam", label: "Exam Pattern" },
 { key: "selection", label: "Selection Process" },
 { key: "includes", label: "What's Included" },
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
 {/* Header - no fee displayed */}
 <div style={{ background: "linear-gradient(135deg, #0d1b3e, #2d1b69)", padding: "22px 28px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
 <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(167,139,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0 }}>
 {course.icon}
 </div>
 <div style={{ flex: 1 }}>
 <div style={{ fontSize: "16px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>{course.name} - {course.full}</div>
 <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "3px" }}>{course.desc}</div>
 </div>
 </div>
 {/* Tabs */}
 <div style={{ display: "flex", background: "white", borderBottom: "1px solid #ede8f8", overflowX: "auto" }}>
 {tabs.map((tab) => (
 <button key={tab.key} onClick={(e) => { e.stopPropagation(); setActiveDetail(tab.key); }}
 style={{ padding: "14px 20px", fontSize: "13px", fontWeight: 600, border: "none", background: "transparent", cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s", borderBottom: activeDetail === tab.key ? "3px solid #7c3aed" : "3px solid transparent", color: activeDetail === tab.key ? "#7c3aed" : "#64748b" }}>
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
 <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "white" }}>{i + 1}</div>
 {i < course.selection.length - 1 && <div style={{ width: "2px", height: "44px", background: "rgba(124,58,237,0.25)" }} />}
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
 <div style={{ fontSize: "20px", flexShrink: 0 }}>✓</div>
 <span style={{ fontSize: "14px", color: "#1e293b", fontWeight: 500, lineHeight: 1.6 }}>{item}</span>
 </div>
 ))}
 </div>
 )}
 </div>
 {/* CTA */}
 <div style={{ padding: "16px 32px", background: "white", borderTop: "1px solid #ede8f8" }}>
 <a href="tel:+917060155711"
 style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", color: "white", padding: "11px 22px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 12px rgba(124,58,237,0.3)" }}>
 Enquire About {course.name}
 </a>
 </div>
 </div>
 );
};

// ---------------------------------------------------------
// COURSE ROW (zigzag) - fee badge on image removed
// ---------------------------------------------------------
const CourseRow = ({ course, index, selectedCourse, setSelectedCourse, activeDetail, setActiveDetail }) => {
 const isReverse = index % 2 === 1;
 const isSelected = selectedCourse?.id === course.id;
 const courseInitial = (course?.name || "").trim().charAt(0).toUpperCase();
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
 style={{ display: "flex", flexDirection: rowDirection, borderRadius: "20px", overflow: "hidden", border: isSelected ? "2px solid #a78bfa" : "1.5px solid #eef1f8", background: "white", cursor: "pointer", transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease", boxShadow: isSelected ? "0 12px 36px rgba(124,58,237,0.18)" : "0 2px 12px rgba(0,0,0,0.06)" }}
 onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(124,58,237,0.14)"; } }}
 onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; } }}
 >
 {/* IMAGE SIDE */}
 <div style={{ width: isMobile ? "100%" : "42%", flexShrink: 0, position: "relative", overflow: "hidden", minHeight: isMobile ? "220px" : "260px" }}>
 <img loading="lazy" decoding="async" src={course.photo} alt={course.name}
 style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transition: "transform 0.5s ease" }}
 onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
 />
 {/* Top accent bar */}
 <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #7c3aed, #a78bfa)", zIndex: 3 }} />
 {/* Category badge - fee badge removed */}
 <div style={{ position: "absolute", bottom: "14px", left: "14px", background: "rgba(13,27,62,0.85)", color: "white", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "999px", zIndex: 2, letterSpacing: "0.5px" }}>{course.cat}</div>
 {!isMobile && (
 <div style={{ position: "absolute", top: 0, bottom: 0, width: "80px", ...(isReverse ? { left: 0, background: "linear-gradient(to right, white, transparent)" } : { right: 0, background: "linear-gradient(to left, white, transparent)" }), pointerEvents: "none", zIndex: 1 }} />
 )}
 </div>
 {/* CONTENT SIDE */}
 <div style={{ flex: 1, padding: isMobile ? "20px 18px" : "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", background: isSelected ? "linear-gradient(135deg, #0d1b3e, #2d1b69)" : "white", transition: "background 0.3s ease" }}>
 {!isMobile && (
 <div style={{ position: "absolute", top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #7c3aed, #a78bfa)", ...(isReverse ? { right: 0 } : { left: 0 }) }} />
 )}
<div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
<div style={{ width: "48px", height: "48px", borderRadius: "14px", background: isSelected ? "rgba(167,139,250,0.15)" : "rgba(124,58,237,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
{courseInitial}
</div>
 <div>
 <div style={{ fontSize: isMobile ? "17px" : "20px", fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif", color: isSelected ? "white" : "#0d1b3e", lineHeight: 1.2 }}>{course.name}</div>
 <div style={{ fontSize: "12px", fontWeight: 600, color: "#a78bfa", marginTop: "2px" }}>{course.full}</div>
 </div>
 </div>
 <p style={{ fontSize: "14px", color: isSelected ? "rgba(255,255,255,0.75)" : "#334155", lineHeight: 1.7, marginBottom: "16px" }}>{course.desc}</p>
 <div style={{ padding: "12px 0", marginBottom: "18px" }}>
 <p style={{ margin: 0, fontSize: "14px", color: isSelected ? "rgba(255,255,255,0.75)" : "#334155", lineHeight: 1.6 }}>
 
 </p>
 </div>
 <div>
 <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: "#a78bfa", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", padding: "7px 16px", borderRadius: "999px" }}>
 {isSelected ? "Hide Details" : "View Details"}
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

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
const SniperClasses = () => {
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
 <HeroSlider slides={heroSlides} />
 {/* Courses Section - zigzag layout */}
 <section style={{ background: "#ffffff", padding: "72px 20px" }}>
 <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
 <div style={{ textAlign: "center", marginBottom: "52px" }}>
 <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(124,58,237,0.3)", color: "#7c3aed", background: "rgba(124,58,237,0.07)" }}>
 Our Courses
 </span>
 <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e", marginBottom: "10px" }}>
 Coaching <span style={{ color: "#7c3aed" }}>Programs</span>
 </h2>
 <p style={{ color: "#334155", fontSize: "15px", maxWidth: "480px", margin: "0 auto" }}>
 Expert coaching for every level - click any course to explore full details
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
 <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(124,58,237,0.3)", color: "#7c3aed", background: "rgba(124,58,237,0.07)" }}>WHY THE CLASSES</span>
 <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0d1b3e" }}>
 The Classes <span style={{ color: "#7c3aed" }}>Advantage</span>
 </h2>
 </div>
<div className="features-grid">
{features.map((f, i) => (
<div key={i}
style={{ background: "white", borderRadius: "16px", border: "1.5px solid #eef1f8", transition: "all 0.3s ease", overflow: "hidden", cursor: "default", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
onMouseEnter={e => { e.currentTarget.style.borderColor = "#7c3aed"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(124,58,237,0.14)"; e.currentTarget.querySelector(".feat-img").style.transform = "scale(1.06)"; }}
onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.querySelector(".feat-img").style.transform = "scale(1)"; }}
>
 <div style={{ position: "relative", height: "170px", overflow: "hidden" }}>
 <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #7c3aed, #a78bfa)", zIndex: 3 }} />
<img loading="lazy" decoding="async" className="feat-img" src={f.photo} alt={f.title}
 style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.5s ease" }}
 onError={e => { e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&fit=crop"; }}
 />
 <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none" }} />
<div style={{ position: "absolute", bottom: "10px", left: "16px", width: "44px", height: "44px", borderRadius: "12px", background: "rgba(124,58,237,0.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", boxShadow: "0 4px 12px rgba(124,58,237,0.35)", zIndex: 2 }}>
 {(f?.title || "").trim().charAt(0).toUpperCase()}
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

export default SniperClasses;

