import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Users, Trophy, Star, Award, Quote,
} from "lucide-react";
import WhatAreYouLookingFor from "../sections/WhatAreYouLookingFor";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { COMPANY_PROFILE, COMPANY_TEXT } from "../config/companyProfile";


// BANNER PHOTOS

const bannerPhotos = [
  { src: IMAGE_PATHS.home.banner.defenceWing, label: "Defence Wing",   bg: "#1a2a3a" },
  { src: IMAGE_PATHS.home.banner.schoolWing,  label: "School Wing",    bg: "#1a3a2e" },
  { src: IMAGE_PATHS.home.banner.classesWing, label: "Sniper Classes", bg: "#1e1a3a" },
  { src: IMAGE_PATHS.home.banner.achievers,   label: "Achievements",   bg: "#2a1a1a" },
  { src: IMAGE_PATHS.home.banner.campus,      label: "Campus Life",    bg: "#1a1e2a" },
];

const bannerStats = [
  { value: "200+", label: "Defence Selections", color: "#e8420a" },
  { value: "1200+", label: "Students Trained",   color: "#10b981" },
  { value: "3",      label: "Wings / Institutes", color: "#7c3aed" },
  { value: COMPANY_TEXT.yearsPlus, label: "Years Excellence",   color: "#f59e0b" },
  { value: "98%",    label: "Board Result Rate",  color: "#3b82f6" },
];


// HOME SLIDER SLIDES

const homeSlides = [
  {
    img: IMAGE_PATHS.home.hero.defence,
    imgPos: "center top",
    tag: "Defence Academy",
    accent: "#e8420a",
    heading: "Crack Every Defence Exam",
    sub: "AISSEE Â· RMS Â· RIMC Â· NDA Â· CDS Â· Air Force",
    btn: "Explore Courses",
    link: "/defence",
  },
  {
    img: IMAGE_PATHS.home.hero.school,
    imgPos: "center",
    tag: "Public School",
    accent: "#10b981",
    heading: "Quality CBSE Education",
    sub: "Nursery to Class 8 â€” Building strong foundations",
    btn: "Explore School",
    link: "/school",
  },
  {
    img: IMAGE_PATHS.home.hero.classes,
    imgPos: "center",
    tag: "Sniper Classes",
    accent: "#7c3aed",
    heading: "Crack Every Exam You Face",
    sub: "IIT JEE Â· NEET Â· 9th to 12th Foundation",
    btn: "Explore Classes",
    link: "/classes",
  },
  {
    img: IMAGE_PATHS.home.hero.group,
    imgPos: "center",
    tag: "Sniper Group",
    accent: "#e8420a",
    heading: "One Trust. Three Wings.",
    sub: `Comprehensive education ecosystem ${COMPANY_TEXT.sinceFounded}`,
    btn: "Know More",
    link: "/",
  },
];


// ANIMATED SECTION

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionDiv = motion.div;
  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};


// HERO BANNER

const HeroBanner = () => (
  <div style={{ width: "100%" }}>
    <div style={{
      position: "relative",
      height: "550px",
      display: "flex",
      overflow: "hidden",
    }}>
      {bannerPhotos.map((p, i) => (
        <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden", background: p.bg }}>
          <img
            src={p.src}
            alt={p.label}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            onError={(e) => { e.currentTarget.src = IMAGE_PATHS.home.banner.campus; }}
          />
        </div>
      ))}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
        zIndex: 2,
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "0 20px",
      }}>
        <div style={{
          padding: "8px 20px", borderRadius: "999px",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff", fontSize: "13px",
          marginBottom: "20px", backdropFilter: "blur(6px)",
        }}>
          Your dreams are our dreams
        </div>
        <h1 style={{
          fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 700,
          color: "#fff", lineHeight: 1.2,
          fontFamily: "Georgia, serif", margin: 0,
        }}>
          Inspiring Young Minds and <br />
          {`Empowering Dreams ${COMPANY_TEXT.sinceFounded}`}
        </h1>
        <p style={{ marginTop: "14px", fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
          {`Sniper Group of Education â€” ${COMPANY_TEXT.cityTierText}`}
        </p>
      </div>
    </div>

    {/* STATS BAR */}
    <div style={{ marginTop: "-80px", padding: "0 20px", position: "relative", zIndex: 5 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "16px", background: "#ffffff",
        borderRadius: "20px", padding: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}>
        {bannerStats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "22px", fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "12px", color: "rgba(13,27,62,0.5)", marginTop: "5px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


// SECTION TITLE

const SectionTitle = ({ tag, title, subtitle, dark = false }) => (
  <div className="text-center mb-14">
    {tag && (
      <span style={{
        display: "inline-block", padding: "6px 18px", borderRadius: "999px",
        fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em",
        textTransform: "uppercase", marginBottom: "16px",
        border: "1px solid rgba(232,66,10,0.3)",
        color: "#e8420a", background: "rgba(232,66,10,0.1)",
      }}>
        {tag}
      </span>
    )}
    <h2 style={{
      fontFamily: "Georgia, serif",
      fontSize: "clamp(26px, 3.5vw, 44px)",
      fontWeight: 700, lineHeight: 1.2,
      color: dark ? "#ffffff" : "#0d1b3e", margin: 0,
    }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{
        marginTop: "14px",
        color: dark ? "rgba(255,255,255,0.55)" : "rgba(13,27,62,0.55)",
        fontSize: "15px", maxWidth: "600px",
        margin: "14px auto 0", lineHeight: 1.7,
      }}>
        {subtitle}
      </p>
    )}
    <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
      <div style={{ height: "1px", width: "64px", background: "linear-gradient(to right, transparent, #e8420a)" }} />
      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e8420a" }} />
      <div style={{ height: "1px", width: "64px", background: "linear-gradient(to left, transparent, #e8420a)" }} />
    </div>
  </div>
);


// DATA

const stats = [
  { icon: Users,  value: "200+", label: "Students Trained",    color: "#e8420a" },
  { icon: Trophy, value: "1200+", label: "Defence Selections",  color: "#10b981" },
  { icon: Star,   value: COMPANY_TEXT.yearsPlus, label: "Years of Excellence", color: "#f59e0b" },
  { icon: Award,  value: "98%",    label: "Board Result Rate",   color: "#7c3aed" },
];

const testimonials = [
  { name: "Suryansh Rathore", role: "Sainik School - Puruliya",            avatar: "SR", avatarBg: "#FF9933", photo: IMAGE_PATHS.home.testimonials.suryanshRathore, quote: "Sniper Defence Academy ne mujhe sirf padhai nahi, ek soldier ki soch di. Yahan se mera safar shuru hua.", wingColor: "#e8420a", wingLabel: "Defence Academy" },
  { name: "Sameer Parmar",    role: "Sainik School - Gurukul Kurukshetra", avatar: "SP", avatarBg: "#10b981", photo: IMAGE_PATHS.home.testimonials.sameerParmar,    quote: "Yahan ki training aur discipline ne mujhe Sainik School ke liye taiyaar kiya. Best decision of my life.",  wingColor: "#10b981", wingLabel: "Defence Academy" },
  { name: "Abhinav Thakur",   role: "Sainik School - Gurukul Kurukshetra", avatar: "AT", avatarBg: "#0d1b3e", photo: IMAGE_PATHS.home.testimonials.abhinavThakur,   quote: "Faculty bahut dedicated hai. Har student par personally dhyan diya jaata hai. Results khud bolta hai.",   wingColor: "#7c3aed", wingLabel: "Sniper Classes" },
  { name: "Aaradhya Rath",    role: "Sainik School - Amravathi Nagar",     avatar: "AR", avatarBg: "#7c3aed", photo: IMAGE_PATHS.home.testimonials.aaradhyaRathi,   quote: "Sniper Group ka mahaul aur guidance ne mera sapna sach kar diya. Bahut grateful hoon.",                   wingColor: "#FF9933", wingLabel: "Defence Academy" },
];


// MARQUEE STRIP

const MarqueeStrip = () => {
  const items = ["AISSEE", "RMS", "RIMC", "NDA", "CDS", "Air Force", "IIT JEE", "NEET", "Class 9-12", "CBSE Board", "Sainik School", "Military School", "Defence Academy"];
  return (
    <div style={{ background: "#e8420a", overflow: "hidden", padding: "12px 0", width: "100%" }}>
      <div style={{ display: "flex", gap: "60px", animation: "marquee 30s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{ color: "white", fontSize: "13px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "60px" }}>
            {item}
            {i < items.length * 3 - 1 && (
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.5)", display: "inline-block" }} />
            )}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
};


// STUDENT PHOTO BANNER

const StudentPhotoBanner = () => (
  <div style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
    <img
      loading="lazy" decoding="async" src={IMAGE_PATHS.home.studentBanner.group}
      alt="Our Students â€” Sniper Group of Education"
      style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "240px", objectPosition: "center top" }}
    />
  </div>
);


// MAIN PAGE

const HomePortal = () => {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", background: "#f5f7fa" }}>

      {/* 1. HERO BANNER */}
      <div style={{ marginBottom: "40px" }}>
        <HeroBanner />
      </div>

      {/* 2. HERO SLIDER */}
      <HeroSlider slides={homeSlides} />

      {/* 3. WHAT ARE YOU LOOKING FOR */}
      <WhatAreYouLookingFor />

      {/* 4. MARQUEE */}
      <MarqueeStrip />

      {/* 5. DIRECTOR'S WORD + OUR TRUST */}
      <section style={{ padding: "80px 16px", background: "#f5f7fa" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px" }}>
            <AnimatedSection>
              <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", border: "1px solid #eef1f8", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", height: "100%" }}>
                <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: "999px", background: "rgba(232,66,10,0.1)", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
                  A Word from Our Director
                </span>
                <div style={{ width: "40px", height: "4px", background: "#e8420a", borderRadius: "2px", marginBottom: "24px" }} />
                <blockquote style={{ fontFamily: "Georgia, serif", fontSize: "clamp(15px, 1.8vw, 17px)", color: "#0d1b3e", lineHeight: 1.8, fontStyle: "italic", borderLeft: "3px solid #e8420a", paddingLeft: "20px", margin: "0 0 24px 0" }}>
                  "At Sniper Group of Education, we do not just teach â€” we transform. Every student who walks through our doors carries within them the potential to serve the nation, excel academically, and rise beyond their circumstances."
                </blockquote>
                <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "16px", overflow: "hidden", marginBottom: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
                  <iframe
                    src="https://www.youtube.com/embed/eD2-DaF1zAM?start=7"
                    title="Sniper Group Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "linear-gradient(135deg, #e8420a, #0d1b3e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "18px", flexShrink: 0 }}>
                    D
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#0d1b3e", fontSize: "15px", margin: 0 }}>Director, Sniper Group of Education</p>
                    <p style={{ color: "rgba(13,27,62,0.5)", fontSize: "12px", margin: "3px 0 0" }}>{`${COMPANY_TEXT.cityTierText} Â· ${COMPANY_TEXT.estText}`}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div style={{ background: "#0d1b3e", borderRadius: "20px", padding: "40px", height: "100%", boxShadow: "0 2px 16px rgba(13,27,62,0.25)" }}>
                <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: "999px", background: "rgba(232,66,10,0.2)", border: "1px solid rgba(232,66,10,0.4)", color: "#ff7043", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
                  Our Trust
                </span>
                <div style={{ width: "40px", height: "4px", background: "#e8420a", borderRadius: "2px", marginBottom: "20px" }} />
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: "18px" }}>
                  Bhagwan Parshuram Education &amp; Charitable Trust
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.75, marginBottom: "24px" }}>
                  Registered under the Societies Registration Act, our trust is the legal backbone of all three wings. Based in {COMPANY_PROFILE.city} â€” a {COMPANY_PROFILE.cityTier} â€” we are committed to making quality education accessible, affordable, and excellence-driven for every child.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { label: "Registered Trust", value: COMPANY_TEXT.trustSinceText },
                    { label: "Three Wings",       value: "One Mission" },
                    { label: "Registered City",   value: "Meerut, U.P." },
                    { label: "Students Served",   value: "200+" },
                  ].map(item => (
                    <div key={item.label} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "12px", padding: "14px 16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p style={{ color: "#e8420a", fontSize: "15px", fontWeight: 700, margin: 0 }}>{item.value}</p>
                      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", margin: "3px 0 0" }}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. STUDENT PHOTO BANNER */}
      <StudentPhotoBanner />

      {/* 7. MARQUEE */}
      <MarqueeStrip />

      {/* 8. STATS */}
      <section style={{ padding: "80px 16px", background: "#0d1b3e" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionTitle tag="By The Numbers" title="Our Impact in Numbers" dark={true} />
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div
                    style={{ textAlign: "center", padding: "36px 24px", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: `${stat.color}25`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <Icon size={24} style={{ color: stat.color }} />
                    </div>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, color: stat.color, margin: "0 0 8px", lineHeight: 1 }}>{stat.value}</p>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", letterSpacing: "0.5px" }}>{stat.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section style={{ padding: "80px 16px", background: "#f5f7fa" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionTitle tag="Student Stories" title="Words from Our Warriors" subtitle="Real students. Real results." />
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <div
                  style={{ borderRadius: "18px", overflow: "hidden", border: "1px solid #eef1f8", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "all 0.3s", display: "flex", flexDirection: "column", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.wingColor; e.currentTarget.style.boxShadow = `0 16px 40px ${t.wingColor}22`; e.currentTarget.style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "relative", height: "220px", overflow: "hidden", flexShrink: 0 }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: t.wingColor, zIndex: 3 }} />
                    <img loading="lazy" decoding="async" src={t.photo} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", background: "#e2e8f0" }} onError={e => { e.target.onerror = null; e.target.style.display = "none"; }} />
                    <div style={{ position: "absolute", top: "14px", right: "12px", background: t.wingColor, color: "white", fontSize: "9px", fontWeight: 700, padding: "3px 10px", borderRadius: "999px", letterSpacing: "1px", textTransform: "uppercase", zIndex: 2 }}>{t.wingLabel}</div>
                    <div style={{ position: "absolute", bottom: "10px", left: "14px", width: "36px", height: "36px", borderRadius: "10px", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 10px ${t.wingColor}30`, zIndex: 2 }}>
                      <Quote size={16} style={{ color: t.wingColor }} />
                    </div>
                  </div>
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                      {[...Array(5)].map((_, j) => <Star key={j} size={13} style={{ color: t.wingColor, fill: t.wingColor }} />)}
                    </div>
                    <p style={{ color: "rgba(13,27,62,0.65)", fontSize: "12.5px", lineHeight: 1.75, fontStyle: "italic", flex: 1, marginBottom: "16px" }}>"{t.quote}"</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "12px", borderTop: `1px solid ${t.wingColor}25` }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `2px solid ${t.wingColor}40`, background: t.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "12px", fontWeight: 700 }}>
                        <img loading="lazy" decoding="async" src={t.photo} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} />
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, color: "#0d1b3e", fontSize: "12.5px", margin: 0 }}>{t.name}</p>
                        <p style={{ fontSize: "11px", color: `${t.wingColor}cc`, margin: "2px 0 0" }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePortal;
