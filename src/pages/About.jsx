import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { COMPANY_PROFILE, COMPANY_TEXT } from "../config/companyProfile";

// ─────────────────────────────────────────────────────────────
// HERO SLIDER SLIDES
// ─────────────────────────────────────────────────────────────
const heroSlides = [
  {
    img: IMAGE_PATHS.about.hero.slide1,
    imgPos: "center top",
    tag: "Fee Structure 2026-27",
    accent: "#e8420a",
    heading: "Transparent & Affordable Fees",
    sub: "Quality education at accessible prices — scholarships available for deserving students.",
    btn: "View Fee Details",
    link: "/fees",
  },
  {
    img: IMAGE_PATHS.about.hero.slide2,
    imgPos: "center",
    tag: "Public School Fees",
    accent: "#10b981",
    heading: "Sniper Sainik School — Session 2026-27",
    sub: "Nursery to Class 8 — CBSE Affiliated. Quarterly fee payment options available.",
    btn: "View School Fees",
    link: "/fees",
  },
  {
    img: IMAGE_PATHS.about.hero.slide3,
    imgPos: "center",
    tag: "Scholarships Available",
    accent: "#7c3aed",
    heading: "Merit Scholarships & Discounts",
    sub: "Staff wards and army families get 20% off. Old students get 50% off admission fees.",
    btn: "Know More",
    link: "/fees",
  },
];

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
const About = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        @media (max-width: 768px) {
          .about-story-grid      { grid-template-columns: 1fr !important; }
          .about-principal-grid  { grid-template-columns: 1fr !important; text-align: center; }
          .about-trust-grid      { grid-template-columns: 1fr !important; }
          .about-vm-grid         { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .about-vm-grid { grid-template-columns: 1fr !important; }
        }
        .trust-stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 24px 20px;
          text-align: center;
          transition: all 0.25s ease;
        }
        .trust-stat-card:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(232,66,10,0.35);
          transform: translateY(-3px);
        }
        .trust-item-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 18px 20px;
          transition: all 0.25s ease;
          cursor: default;
        }
        .trust-item-row:hover {
          background: rgba(255,255,255,0.08);
        }
      `}</style>

      {/* 1. HERO SLIDER */}
      <HeroSlider slides={heroSlides} />

      {/* 2. OUR STORY */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div
          className="about-story-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "14px",
                border: "1px solid rgba(232,66,10,0.3)",
                color: "#e8420a",
                background: "rgba(232,66,10,0.07)",
              }}
            >
              Our Story
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 2.8vw, 34px)",
                color: "#0d1b3e",
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              A Legacy Built on{" "}
              <span style={{ color: "#e8420a" }}>Discipline</span> &amp; Excellence
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
              Sniper Group of Education was established in 2020 with a clear purpose — to bring
              structured, result-oriented education to students of our region who deserve the same
              quality of coaching available in bigger cities.
            </p>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
              Starting as a focused defence coaching centre, we quickly expanded into a
              full-fledged educational group with three dedicated wings — each serving a distinct
              need of our students and their families.
            </p>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.8 }}>
              In just a few years, Sniper Group has earned the trust of thousands of families
              across the district, with hundreds of students clearing defence and competitive
              examinations every year.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { year: "2020", title: "Foundation",     desc: "Started as Sniper Defence Academy with a small but committed batch of students", color: "#FF9933" },
              { year: "2021", title: "School Wing",    desc: "Launched Sniper Sainik Public School — CBSE affiliated, Nursery to Class 8",    color: "#10b981" },
              { year: "2022", title: "Classes Wing",   desc: "Opened Sniper Classes for JEE, NEET, and board exam coaching",                   color: "#7c3aed" },
              { year: "2024", title: "Growing Strong", desc: "Thousands of students enrolled, hundreds of defence selections achieved",         color: "#e8420a" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: `${t.color}15`,
                    border: `2px solid ${t.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 800,
                    color: t.color,
                    flexShrink: 0,
                  }}
                >
                  {t.year}
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0d1b3e", marginBottom: "3px" }}>{t.title}</h4>
                  <p style={{ fontSize: "15px", color: "#334155", margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIRECTOR'S MESSAGE */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
                border: "1px solid rgba(232,66,10,0.3)",
                color: "#e8420a",
                background: "rgba(232,66,10,0.07)",
              }}
            >
              Leadership
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 2.8vw, 34px)",
                color: "#0d1b3e",
              }}
            >
              Director's <span style={{ color: "#e8420a" }}>Message</span>
            </h2>
          </div>

          <div
            className="about-principal-grid"
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "52px",
              border: "1.5px solid #eef1f8",
              boxShadow: "0 8px 40px rgba(13,27,62,0.08)",
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Photo — bigger, rectangular portrait style */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0d1b3e, #1a3260)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                  border: "4px solid rgba(232,66,10,0.2)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 16px 40px rgba(13,27,62,0.18)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "2px",
                  }}
                >
                  DIR
                </span>
                <img
                  src={IMAGE_PATHS.about.leadership.director}
                  alt="Director Sanjeev Parashar"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                {/* Bottom fade */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "64px",
                    background: "linear-gradient(to top, rgba(13,27,62,0.55), transparent)",
                  }}
                />
              </div>

              <div style={{ width: "48px", height: "3px", background: "#e8420a", borderRadius: "2px", margin: "0 auto 14px" }} />
              <h4 style={{ fontSize: "17px", fontWeight: 800, color: "#0d1b3e", marginBottom: "5px" }}>Sanjeev Parashar</h4>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 8px" }}>
                Ex AIG, Indian Army
              </p>
              <span
                style={{
                  fontSize: "13px",
                  color: "#e8420a",
                  fontWeight: 700,
                  background: "rgba(232,66,10,0.07)",
                  padding: "3px 14px",
                  borderRadius: "999px",
                  display: "inline-block",
                  marginBottom: "6px",
                }}
              >
                Director &amp; Founder
              </span>
              <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>Sniper Group of Education</p>
            </div>

            {/* Message */}
            <div style={{ paddingTop: "8px" }}>
              <div
                style={{
                  fontSize: "80px",
                  color: "#e8420a",
                  opacity: 0.1,
                  lineHeight: 0.8,
                  marginBottom: "8px",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>
              <p style={{ color: "#334155", fontSize: "16px", lineHeight: 1.9, marginBottom: "18px" }}>
                When we started Sniper Group in 2020, our goal was simple — give students in our
                district the same standard of coaching and guidance that was only available in
                metros. Every child here has the capability; what they need is the right environment
                and the right push.
              </p>
              <p style={{ color: "#334155", fontSize: "16px", lineHeight: 1.9, marginBottom: "18px" }}>
                My army background taught me that discipline is not a restriction — it is a
                foundation. We have built this institution on that belief, and the results our
                students achieve year after year prove that it works.
              </p>
              <p
                style={{
                  color: "#0d1b3e",
                  fontSize: "16px",
                  lineHeight: 1.9,
                  fontWeight: 700,
                  borderLeft: "3px solid #e8420a",
                  paddingLeft: "16px",
                  marginTop: "24px",
                }}
              >
                Together, we are shaping leaders for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR TRUST — redesigned */}
      <section
        style={{
          background: "linear-gradient(160deg, #0b1830 0%, #112244 55%, #0d1b3e 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glows */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "440px", height: "440px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,66,10,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
                border: "1px solid rgba(232,66,10,0.4)",
                color: "#ff6b35",
                background: "rgba(232,66,10,0.12)",
              }}
            >
              Our Trust
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 2.8vw, 36px)",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Bhagwan Parshuram Education &amp;{" "}
              <span style={{ color: "#ff6b35" }}>Charitable Trust</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "500px", margin: "0 auto" }}>
              The foundation behind every initiative at Sniper Group of Education
            </p>
          </div>

          {/* Two-column content */}
          <div
            className="about-trust-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
              marginBottom: "28px",
            }}
          >
            {/* Left — trust description */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "36px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  background: "linear-gradient(to bottom, #e8420a, #ff6b35)",
                }}
              />
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "16px",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                About the Trust
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>
                Sniper Group operates under{" "}
                <strong style={{ color: "white" }}>
                  Bhagwan Parshuram Education &amp; Charitable Trust
                </strong>{" "}
                — committed to making quality education accessible to every child, regardless of
                their family's financial situation.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.9, marginBottom: "28px" }}>
                The Trust actively supports merit scholarships, fee concessions for deserving
                students, and community welfare programs within the district.
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                <p
                  style={{
                    color: "#ff8c42",
                    fontSize: "20px",
                    fontWeight: 800,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    letterSpacing: "0.5px",
                    margin: 0,
                  }}
                >
                  दादा परशुराम की जय
                </p>
              </div>
            </div>

            {/* Right — 4 feature rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { letter: "R", label: "Registered Charitable Trust",   sub: "Legally registered, transparent, and accountable in all operations.",               color: "#FF9933" },
                { letter: "S", label: "Merit Scholarships",             sub: "Financial support for academically deserving students from all backgrounds.",         color: "#10b981" },
                { letter: "W", label: "Community Welfare",              sub: "Programs benefiting students and families across the district.",                      color: "#7c3aed" },
                { letter: "A", label: "Army Family Concessions",        sub: "Special fee discounts for staff wards and defence families.",                         color: "#e8420a" },
              ].map((item, i) => (
                <div
                  className="trust-item-row"
                  key={i}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = item.color + "44"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${item.color}20`,
                      border: `1.5px solid ${item.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      fontWeight: 800,
                      color: item.color,
                      flexShrink: 0,
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {item.letter}
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "white", margin: "0 0 3px" }}>{item.label}</p>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.52)", margin: 0, lineHeight: 1.6 }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { num: "2020", label: "Year Established",              color: "#FF9933" },
              { num: "3",    label: "Educational Wings",             color: "#10b981" },
              { num: "20%",  label: "Discount for Army Families",    color: "#7c3aed" },
              { num: "50%",  label: "Off Admission for Old Students", color: "#e8420a" },
            ].map((s, i) => (
              <div className="trust-stat-card" key={i}>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 900,
                    color: s.color,
                    margin: "0 0 4px",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {s.num}
                </p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.52)", margin: 0, lineHeight: 1.5 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VISION & MISSION */}
      <section style={{ background: "#0d1b3e", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
                border: "1px solid rgba(232,66,10,0.4)",
                color: "#ff6b35",
                background: "rgba(232,66,10,0.12)",
              }}
            >
              Our Purpose
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 2.8vw, 34px)",
                color: "white",
              }}
            >
              Vision &amp; <span style={{ color: "#ff6b35" }}>Mission</span>
            </h2>
          </div>

          <div
            className="about-vm-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              { icon: "V", title: "Our Vision",      color: "#FF9933", desc: "To become the most trusted educational institution in our region — where every student, regardless of background, gets a genuine shot at a successful future." },
              { icon: "M", title: "Our Mission",     color: "#10b981", desc: "To deliver focused, practical, and disciplined education that prepares students for defence services, board exams, and competitive examinations — right here in their hometown." },
              { icon: "V", title: "Our Values",      color: "#7c3aed", desc: "Discipline, sincerity, respect, and hard work are the principles we live by at Sniper Group. These values are not just taught — they are practised every day." },
              { icon: "C", title: "Our Commitment",  color: "#e8420a", desc: "Every student who walks through our doors receives honest guidance, dedicated faculty attention, and a learning environment built for real results." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  padding: "28px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                  e.currentTarget.style.borderColor = item.color + "55";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${item.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: item.color,
                    marginBottom: "16px",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.80)", lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;