import { useMemo, useState } from "react";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { useLanguage } from "../i18n/LanguageProvider";
import LocalizedLink from "../components/LocalizedLink";

const resultPhotoMap = {
  "Arjun Singh": IMAGE_PATHS.results.cards.arjunSingh,
  "Vikram Yadav": IMAGE_PATHS.results.cards.vikramYadav,
  "Amit Rawat": IMAGE_PATHS.results.cards.amitRawat,
  "Rahul Tomar": IMAGE_PATHS.results.cards.rahulTomar,
  "Sanjay Bisht": IMAGE_PATHS.results.cards.sanjayBisht,
  "Deepak Negi": IMAGE_PATHS.results.cards.deepakNegi,
  "Priya Sharma": IMAGE_PATHS.results.cards.priyaSharma,
  "Ananya Verma": IMAGE_PATHS.results.cards.ananyaVerma,
  "Kavya Joshi": IMAGE_PATHS.results.cards.kavyaJoshi,
  "Ritika Singh": IMAGE_PATHS.results.cards.ritikaSingh,
  "Harsh Pandey": IMAGE_PATHS.results.cards.harshPandey,
  "Pooja Rawat": IMAGE_PATHS.results.cards.poojaRawat,
  "Rohan Mehta": IMAGE_PATHS.results.cards.rohanMehta,
  "Sneha Gupta": IMAGE_PATHS.results.cards.snehaGupta,
  "Tushar Malik": IMAGE_PATHS.results.cards.tusharMalik,
  "Neha Chauhan": IMAGE_PATHS.results.cards.nehaChauhan,
  "Shubham Rana": IMAGE_PATHS.results.cards.shubhamRana,
  "Divya Negi": IMAGE_PATHS.results.cards.divyaNegi,
};

const allResults = [
  {
    name: "Arjun Singh",
    achievement: { en: "NDA Selected - 148th Course", hi: "NDA चयनित - 148वां कोर्स" },
    wing: "defence",
    score: "AIR 47",
    scoreLabel: { en: "All India Rank", hi: "ऑल इंडिया रैंक" },
    year: "2024",
    color: "#FF9933",
    bg: "#fff8f0",
  },
  {
    name: "Vikram Yadav",
    achievement: { en: "CDS Selected - Indian Army", hi: "CDS चयनित - भारतीय सेना" },
    wing: "defence",
    score: "1st",
    scoreLabel: { en: "Battalion Rank", hi: "बटालियन रैंक" },
    year: "2024",
    color: "#FF9933",
    bg: "#fff8f0",
  },
  {
    name: "Amit Rawat",
    achievement: { en: "Sainik School Entrance Cleared", hi: "सैनिक स्कूल प्रवेश परीक्षा उत्तीर्ण" },
    wing: "defence",
    score: "Top 5",
    scoreLabel: { en: "State Rank", hi: "स्टेट रैंक" },
    year: "2024",
    color: "#FF9933",
    bg: "#fff8f0",
  },
  {
    name: "Rahul Tomar",
    achievement: { en: "NDA Selected - 146th Course", hi: "NDA चयनित - 146वां कोर्स" },
    wing: "defence",
    score: "AIR 112",
    scoreLabel: { en: "All India Rank", hi: "ऑल इंडिया रैंक" },
    year: "2023",
    color: "#FF9933",
    bg: "#fff8f0",
  },
  {
    name: "Sanjay Bisht",
    achievement: { en: "CDS Selected - Indian Navy", hi: "CDS चयनित - भारतीय नौसेना" },
    wing: "defence",
    score: "AIR 88",
    scoreLabel: { en: "All India Rank", hi: "ऑल इंडिया रैंक" },
    year: "2023",
    color: "#FF9933",
    bg: "#fff8f0",
  },
  {
    name: "Deepak Negi",
    achievement: { en: "NDA Selected - 144th Course", hi: "NDA चयनित - 144वां कोर्स" },
    wing: "defence",
    score: "AIR 203",
    scoreLabel: { en: "All India Rank", hi: "ऑल इंडिया रैंक" },
    year: "2022",
    color: "#FF9933",
    bg: "#fff8f0",
  },
  {
    name: "Priya Sharma",
    achievement: { en: "Class 10 - District Rank 1", hi: "कक्षा 10 - जिला रैंक 1" },
    wing: "school",
    score: "98.6%",
    scoreLabel: { en: "Board Score", hi: "बोर्ड स्कोर" },
    year: "2024",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    name: "Ananya Verma",
    achievement: { en: "Class 12 - Science Topper", hi: "कक्षा 12 - साइंस टॉपर" },
    wing: "school",
    score: "97.2%",
    scoreLabel: { en: "Board Score", hi: "बोर्ड स्कोर" },
    year: "2024",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    name: "Kavya Joshi",
    achievement: { en: "Class 10 - State Rank 3", hi: "कक्षा 10 - स्टेट रैंक 3" },
    wing: "school",
    score: "99%",
    scoreLabel: { en: "Board Score", hi: "बोर्ड स्कोर" },
    year: "2023",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    name: "Ritika Singh",
    achievement: { en: "Class 12 - District Topper", hi: "कक्षा 12 - जिला टॉपर" },
    wing: "school",
    score: "96.8%",
    scoreLabel: { en: "Board Score", hi: "बोर्ड स्कोर" },
    year: "2023",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    name: "Harsh Pandey",
    achievement: { en: "Class 10 - School Rank 1", hi: "कक्षा 10 - स्कूल रैंक 1" },
    wing: "school",
    score: "95.4%",
    scoreLabel: { en: "Board Score", hi: "बोर्ड स्कोर" },
    year: "2022",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    name: "Pooja Rawat",
    achievement: { en: "Class 12 - Commerce Topper", hi: "कक्षा 12 - कॉमर्स टॉपर" },
    wing: "school",
    score: "94.6%",
    scoreLabel: { en: "Board Score", hi: "बोर्ड स्कोर" },
    year: "2022",
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    name: "Rohan Mehta",
    achievement: { en: "IIT JEE Advanced Qualified", hi: "IIT JEE Advanced क्वालिफाइड" },
    wing: "classes",
    score: "AIR 312",
    scoreLabel: { en: "JEE Advanced", hi: "JEE Advanced" },
    year: "2024",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    name: "Sneha Gupta",
    achievement: { en: "NEET Qualified - MBBS Seat", hi: "NEET क्वालिफाइड - MBBS सीट" },
    wing: "classes",
    score: "650/720",
    scoreLabel: { en: "NEET Score", hi: "NEET स्कोर" },
    year: "2024",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    name: "Tushar Malik",
    achievement: { en: "JEE Mains Qualified", hi: "JEE Mains क्वालिफाइड" },
    wing: "classes",
    score: "99.1%ile",
    scoreLabel: { en: "Percentile", hi: "परसेंटाइल" },
    year: "2023",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    name: "Neha Chauhan",
    achievement: { en: "NEET Qualified - BDS Seat", hi: "NEET क्वालिफाइड - BDS सीट" },
    wing: "classes",
    score: "620/720",
    scoreLabel: { en: "NEET Score", hi: "NEET स्कोर" },
    year: "2023",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    name: "Shubham Rana",
    achievement: { en: "JEE Advanced Qualified", hi: "JEE Advanced क्वालिफाइड" },
    wing: "classes",
    score: "AIR 580",
    scoreLabel: { en: "JEE Advanced", hi: "JEE Advanced" },
    year: "2022",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    name: "Divya Negi",
    achievement: { en: "NEET Qualified - MBBS Seat", hi: "NEET क्वालिफाइड - MBBS सीट" },
    wing: "classes",
    score: "638/720",
    scoreLabel: { en: "NEET Score", hi: "NEET स्कोर" },
    year: "2022",
    color: "#7c3aed",
    bg: "#faf5ff",
  },
].map((result) => ({
  ...result,
  photo: resultPhotoMap[result.name],
}));

const wingMeta = {
  defence: {
    en: { label: "Defence", tag: "Defence" },
    hi: { label: "डिफेन्स", tag: "डिफेन्स" },
    color: "#FF9933",
  },
  school: {
    en: { label: "School", tag: "School" },
    hi: { label: "स्कूल", tag: "स्कूल" },
    color: "#10b981",
  },
  classes: {
    en: { label: "Classes", tag: "Classes" },
    hi: { label: "क्लासेस", tag: "क्लासेस" },
    color: "#7c3aed",
  },
};

const content = {
  en: {
    year: "Year",
    wing: "Wing",
    all: "All",
    allWings: "All Wings",
    found: "results found",
    foundOne: "result found",
    noResults: "No results found for selected filters.",
    ctaHeadingA: "Your Name Could",
    ctaHeadingB: "Be Here!",
    ctaSub: "Join Sniper Group and become the next success story.",
    ctaBtn: "Enquire Now",
  },
  hi: {
    year: "वर्ष",
    wing: "विंग",
    all: "सभी",
    allWings: "सभी विंग",
    found: "रिजल्ट मिले",
    foundOne: "रिजल्ट मिला",
    noResults: "चुने गए फिल्टर के लिए कोई रिजल्ट नहीं मिला।",
    ctaHeadingA: "अगला नाम",
    ctaHeadingB: "आपका हो सकता है",
    ctaSub: "Sniper Group से जुड़ें और अगली सफलता की कहानी बनें।",
    ctaBtn: "अभी पूछताछ करें",
  },
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getSlides(lang) {
  if (lang === "hi") {
    return [
      {
        img: IMAGE_PATHS.results.hero.defence,
        imgPos: "center top",
        tag: "परिणाम 2026",
        accent: "#e8420a",
        heading: "Defence Selections में शानदार रिकॉर्ड",
        sub: "NDA, CDS और Sainik School में लगातार चयन के साथ भरोसेमंद तैयारी।",
        btn: "रिजल्ट देखें",
        link: "/results",
      },
      {
        img: IMAGE_PATHS.results.hero.school,
        imgPos: "center",
        tag: "स्कूल टॉपर्स",
        accent: "#10b981",
        heading: "CBSE बोर्ड में शानदार प्रदर्शन",
        sub: "कक्षा 10 और 12 में जिला और स्टेट लेवल पर टॉप करने वाले विद्यार्थी।",
        btn: "स्कूल रिजल्ट देखें",
        link: "/results",
      },
      {
        img: IMAGE_PATHS.results.hero.classes,
        imgPos: "center",
        tag: "JEE / NEET Achievers",
        accent: "#7c3aed",
        heading: "IIT JEE और NEET में सिद्ध सफलता",
        sub: "Top ranks, strong scores और guided mentorship के साथ लगातार परिणाम।",
        btn: "सभी उपलब्धियां",
        link: "/results",
      },
    ];
  }

  return [
    {
      img: IMAGE_PATHS.results.hero.defence,
      imgPos: "center top",
      tag: "Results 2026",
      accent: "#e8420a",
      heading: "Strong Track Record in Defence Selections",
      sub: "Consistent selections in NDA, CDS, and Sainik School with guided preparation.",
      btn: "View Results",
      link: "/results",
    },
    {
      img: IMAGE_PATHS.results.hero.school,
      imgPos: "center",
      tag: "School Toppers",
      accent: "#10b981",
      heading: "Outstanding CBSE Board Performance",
      sub: "District and state-level toppers from Class 10 and Class 12 every year.",
      btn: "View School Results",
      link: "/results",
    },
    {
      img: IMAGE_PATHS.results.hero.classes,
      imgPos: "center",
      tag: "JEE / NEET Achievers",
      accent: "#7c3aed",
      heading: "Proven Results in IIT JEE and NEET",
      sub: "Top ranks and high scores backed by structured mentoring and practice.",
      btn: "Explore Achievements",
      link: "/results",
    },
  ];
}

export default function Results() {
  const { lang } = useLanguage();
  const [year, setYear] = useState("All");
  const [wing, setWing] = useState("all");

  const t = content[lang] || content.en;
  const slides = useMemo(() => getSlides(lang), [lang]);
  const years = ["All", "2024", "2023", "2022"];
  const wingFilters = ["all", "defence", "school", "classes"];

  const filtered = allResults.filter(
    (item) => (year === "All" || item.year === year) && (wing === "all" || item.wing === wing)
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        @media (max-width: 600px) {
          .results-filters { flex-direction: column !important; align-items: flex-start !important; }
          .results-filters-count { margin-left: 0 !important; }
        }
      `}</style>

      <HeroSlider slides={slides} />

      <section style={{ background: "#ffffff", padding: "32px 20px", borderBottom: "1px solid #eef1f8" }}>
        <div
          className="results-filters"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            gap: "32px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "8px",
              }}
            >
              {t.year}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {years.map((option) => (
                <button
                  key={option}
                  onClick={() => setYear(option)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                    border: "1.5px solid",
                    borderColor: year === option ? "#e8420a" : "#e2e8f0",
                    background: year === option ? "rgba(232,66,10,0.08)" : "white",
                    color: year === option ? "#e8420a" : "#64748b",
                    transition: "all 0.2s",
                  }}
                >
                  {option === "All" ? t.all : option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "8px",
              }}
            >
              {t.wing}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {wingFilters.map((option) => (
                <button
                  key={option}
                  onClick={() => setWing(option)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                    border: "1.5px solid",
                    borderColor: wing === option ? "#e8420a" : "#e2e8f0",
                    background: wing === option ? "rgba(232,66,10,0.08)" : "white",
                    color: wing === option ? "#e8420a" : "#64748b",
                    transition: "all 0.2s",
                  }}
                >
                  {option === "all"
                    ? t.allWings
                    : wingMeta[option][lang]?.label || wingMeta[option].en.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className="results-filters-count"
            style={{ marginLeft: "auto", fontSize: "13px", color: "#94a3b8", fontWeight: 600 }}
          >
            {filtered.length} {filtered.length === 1 ? t.foundOne : t.found}
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f7fa", padding: "52px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8", fontSize: "15px" }}>
              {t.noResults}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {filtered.map((item, index) => {
                const wingData = wingMeta[item.wing];
                const wingLabel = wingData[lang]?.tag || wingData.en.tag;
                return (
                  <div
                    key={`${item.name}-${index}`}
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      border: "1.5px solid #eef1f8",
                      padding: "24px",
                      transition: "all 0.25s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.transform = "translateY(-4px)";
                      event.currentTarget.style.boxShadow = `0 12px 28px ${item.color}18`;
                      event.currentTarget.style.borderColor = item.color;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.transform = "translateY(0)";
                      event.currentTarget.style.boxShadow = "none";
                      event.currentTarget.style.borderColor = "#eef1f8";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}99)`,
                          position: "relative",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: 700,
                        }}
                      >
                        <span>{getInitials(item.name)}</span>
                        <img
                          src={item.photo}
                          alt={`${item.name} result`}
                          loading="lazy"
                          decoding="async"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          background: item.bg,
                          borderRadius: "10px",
                          padding: "6px 12px",
                          textAlign: "center",
                          border: `1px solid ${item.color}33`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: 800,
                            color: item.color,
                            fontFamily: "'Playfair Display', Georgia, serif",
                          }}
                        >
                          {item.score}
                        </div>
                        <div style={{ fontSize: "9px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          {item.scoreLabel[lang] || item.scoreLabel.en}
                        </div>
                      </div>
                    </div>

                    <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "4px" }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "14px" }}>
                      {item.achievement[lang] || item.achievement.en}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          fontSize: "10.5px",
                          fontWeight: 600,
                          background: item.bg,
                          color: item.color,
                          border: `1px solid ${item.color}33`,
                        }}
                      >
                        {wingLabel}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "white",
                          background: "#0d1b3e",
                          borderRadius: "6px",
                          padding: "3px 8px",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section style={{ background: "#0d1b3e", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 800,
              fontSize: "clamp(22px, 2.8vw, 32px)",
              color: "white",
              marginBottom: "12px",
            }}
          >
            {t.ctaHeadingA} <span style={{ color: "#ff6b35" }}>{t.ctaHeadingB}</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", marginBottom: "28px" }}>{t.ctaSub}</p>
          <LocalizedLink
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #e8420a, #ff6b35)",
              color: "white",
              padding: "13px 30px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(232,66,10,0.35)",
            }}
          >
            {t.ctaBtn} - +91 7060155711
          </LocalizedLink>
        </div>
      </section>
    </div>
  );
}
