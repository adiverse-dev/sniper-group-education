import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { COMPANY_PROFILE, COMPANY_TEXT } from "../config/companyProfile";
import { useLanguage } from "../i18n/LanguageProvider";

function getSlides(lang) {
  if (lang === "hi") {
    return [
      {
        img: IMAGE_PATHS.about.hero.slide1,
        imgPos: "center top",
        tag: "हमारी कहानी",
        accent: "#e8420a",
        heading: "अनुशासन और उत्कृष्टता की विरासत",
        sub: "स्नाइपर ग्रुप शिक्षा और डिफेन्स तैयारी को क्षेत्रीय छात्रों तक पहुंचाने के लिए समर्पित है।",
        btn: "और जानें",
        link: "/about",
      },
      {
        img: IMAGE_PATHS.about.hero.slide2,
        imgPos: "center",
        tag: "नेतृत्व",
        accent: "#10b981",
        heading: "अनुभवी मार्गदर्शन, स्पष्ट दिशा",
        sub: "समर्पित नेतृत्व, अनुभवी फैकल्टी और परिणाम-आधारित दृष्टिकोण।",
        btn: "डायरेक्टर संदेश",
        link: "/about",
      },
      {
        img: IMAGE_PATHS.about.hero.slide3,
        imgPos: "center",
        tag: "हमारा ट्रस्ट",
        accent: "#7c3aed",
        heading: "शिक्षा और समाज सेवा के लिए प्रतिबद्ध",
        sub: "Bhagwan Parshuram Education & Charitable Trust के अंतर्गत संचालित।",
        btn: "ट्रस्ट विवरण",
        link: "/about",
      },
    ];
  }

  return [
    {
      img: IMAGE_PATHS.about.hero.slide1,
      imgPos: "center top",
      tag: "Our Story",
      accent: "#e8420a",
      heading: "A Legacy of Discipline and Excellence",
      sub: "Sniper Group is committed to accessible, high-quality education and defence preparation.",
      btn: "Know More",
      link: "/about",
    },
    {
      img: IMAGE_PATHS.about.hero.slide2,
      imgPos: "center",
      tag: "Leadership",
      accent: "#10b981",
      heading: "Experienced Guidance, Clear Direction",
      sub: "Dedicated leadership, experienced faculty and a result-focused approach.",
      btn: "Director Message",
      link: "/about",
    },
    {
      img: IMAGE_PATHS.about.hero.slide3,
      imgPos: "center",
      tag: "Our Trust",
      accent: "#7c3aed",
      heading: "Committed to Education and Social Welfare",
      sub: "Operated under Bhagwan Parshuram Education & Charitable Trust.",
      btn: "Trust Details",
      link: "/about",
    },
  ];
}

const copy = {
  en: {
    storyTag: "Our Story",
    storyTitleA: "A Legacy Built on",
    storyTitleB: "Discipline",
    storyTitleC: "and Excellence",
    storyP1:
      "Sniper Group of Education started with a clear purpose: provide structured, result-oriented education to regional students.",
    storyP2:
      "What began as a defence-focused initiative has grown into three dedicated wings serving school students, defence aspirants and competitive exam learners.",
    storyP3:
      "Today, families across the district trust us for sincere guidance, consistent effort and measurable outcomes.",
    timeline: [
      { year: "2020", title: "Foundation", desc: "Started as Sniper Defence Academy." },
      { year: "2021", title: "School Wing", desc: "Launched Public School from Nursery to Class 8." },
      { year: "2022", title: "Classes Wing", desc: "Started JEE/NEET and board preparation batches." },
      { year: "2024", title: "Growth", desc: "Expanded student success across all three wings." },
    ],
    leaderTag: "Leadership",
    leaderTitleA: "Director",
    leaderTitleB: "Message",
    leaderRole: "Director and Founder",
    leaderBody1:
      "Our mission has always been to bring metro-level preparation and mentorship to students in our own region.",
    leaderBody2:
      "Discipline, consistency and the right learning environment are the pillars on which we build every student journey.",
    leaderBody3: "Together, we are shaping confident, capable leaders for tomorrow.",
    trustTag: "Our Trust",
    trustTitleA: "Bhagwan Parshuram Education and",
    trustTitleB: "Charitable Trust",
    trustSub: "The foundation behind every initiative at Sniper Group of Education.",
    trustPoints: [
      "Registered charitable trust with transparent operations.",
      "Merit scholarships and fee support for deserving students.",
      "Community-focused educational and welfare initiatives.",
      "Special concessions for defence and staff families.",
    ],
    purposeTag: "Our Purpose",
    purposeTitleA: "Vision and",
    purposeTitleB: "Mission",
    cards: [
      {
        icon: "V",
        title: "Our Vision",
        desc: "To be the most trusted institution in our region, where every student gets a fair chance to succeed.",
      },
      {
        icon: "M",
        title: "Our Mission",
        desc: "To deliver focused, practical and disciplined education for school, defence and competitive exams.",
      },
      {
        icon: "U",
        title: "Our Values",
        desc: "Discipline, sincerity, respect and hard work shape our daily culture.",
      },
      {
        icon: "C",
        title: "Our Commitment",
        desc: "Every learner receives honest guidance, faculty support and a growth-oriented environment.",
      },
    ],
  },
  hi: {
    storyTag: "हमारी कहानी",
    storyTitleA: "अनुशासन और",
    storyTitleB: "उत्कृष्टता",
    storyTitleC: "की विरासत",
    storyP1:
      "स्नाइपर ग्रुप ऑफ एजुकेशन की शुरुआत एक स्पष्ट उद्देश्य के साथ हुई: क्षेत्रीय छात्रों को व्यवस्थित और परिणाम-उन्मुख शिक्षा देना।",
    storyP2:
      "जो पहल डिफेन्स तैयारी से शुरू हुई, वह आज तीन समर्पित विंग्स के रूप में स्कूल, डिफेन्स और प्रतियोगी परीक्षा छात्रों की सेवा कर रही है।",
    storyP3:
      "आज जिले भर के परिवार ईमानदार मार्गदर्शन, निरंतर प्रयास और वास्तविक परिणामों के लिए हम पर भरोसा करते हैं।",
    timeline: [
      { year: "2020", title: "स्थापना", desc: "Sniper Defence Academy की शुरुआत।" },
      { year: "2021", title: "स्कूल विंग", desc: "Nursery से Class 8 तक Public School शुरू किया।" },
      { year: "2022", title: "क्लासेस विंग", desc: "JEE/NEET और बोर्ड तैयारी बैच शुरू हुए।" },
      { year: "2024", title: "विकास", desc: "तीनों विंग्स में छात्रों की सफलता का विस्तार।" },
    ],
    leaderTag: "नेतृत्व",
    leaderTitleA: "डायरेक्टर का",
    leaderTitleB: "संदेश",
    leaderRole: "डायरेक्टर और फाउंडर",
    leaderBody1:
      "हमारा लक्ष्य हमेशा यह रहा है कि हमारे क्षेत्र के छात्रों को भी महानगरों जैसी तैयारी और मेंटरशिप मिले।",
    leaderBody2:
      "अनुशासन, निरंतरता और सही सीखने का माहौल हर छात्र की यात्रा का आधार है।",
    leaderBody3: "हम मिलकर कल के आत्मविश्वासी और सक्षम लीडर्स तैयार कर रहे हैं।",
    trustTag: "हमारा ट्रस्ट",
    trustTitleA: "भगवान परशुराम एजुकेशन एंड",
    trustTitleB: "चैरिटेबल ट्रस्ट",
    trustSub: "Sniper Group की हर पहल के पीछे यही मजबूत आधार है।",
    trustPoints: [
      "पारदर्शी संचालन के साथ पंजीकृत चैरिटेबल ट्रस्ट।",
      "योग्य छात्रों के लिए स्कॉलरशिप और फीस सहायता।",
      "शिक्षा और सामाजिक कल्याण से जुड़ी सामुदायिक पहल।",
      "डिफेन्स और स्टाफ परिवारों के लिए विशेष रियायतें।",
    ],
    purposeTag: "हमारा उद्देश्य",
    purposeTitleA: "विजन और",
    purposeTitleB: "मिशन",
    cards: [
      {
        icon: "V",
        title: "हमारा विजन",
        desc: "अपने क्षेत्र का सबसे विश्वसनीय संस्थान बनना, जहां हर छात्र को आगे बढ़ने का समान अवसर मिले।",
      },
      {
        icon: "M",
        title: "हमारा मिशन",
        desc: "स्कूल, डिफेन्स और प्रतियोगी परीक्षाओं के लिए केंद्रित, व्यवहारिक और अनुशासित शिक्षा देना।",
      },
      {
        icon: "U",
        title: "हमारे मूल्य",
        desc: "अनुशासन, ईमानदारी, सम्मान और मेहनत हमारी दैनिक कार्यसंस्कृति का हिस्सा हैं।",
      },
      {
        icon: "C",
        title: "हमारी प्रतिबद्धता",
        desc: "हर छात्र को सही मार्गदर्शन, फैकल्टी सपोर्ट और विकास-केंद्रित वातावरण देना।",
      },
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = copy[lang] || copy.en;
  const slides = getSlides(lang);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap');
        .about-grid-two { display:grid; grid-template-columns:1fr 1fr; gap:48px; }
        .about-grid-four { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px; }
        @media (max-width: 900px) { .about-grid-two { grid-template-columns:1fr; } }
      `}</style>

      <HeroSlider slides={slides} />

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div className="about-grid-two" style={{ maxWidth: "1100px", margin: "0 auto", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>
              {t.storyTag}
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e", marginBottom: "16px", lineHeight: 1.25 }}>
              {t.storyTitleA} <span style={{ color: "#e8420a" }}>{t.storyTitleB}</span> {t.storyTitleC}
            </h2>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.85, marginBottom: "12px" }}>{t.storyP1}</p>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.85, marginBottom: "12px" }}>{t.storyP2}</p>
            <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.85 }}>{t.storyP3}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {t.timeline.map((item) => (
              <div key={item.year} style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "#f8fafc", border: "1px solid #eef2f7", borderRadius: "14px", padding: "16px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "rgba(232,66,10,0.12)", color: "#e8420a", fontWeight: 800, fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {item.year}
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0d1b3e", marginBottom: "4px" }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: "14px", color: "#334155", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", background: "white", borderRadius: "24px", padding: "40px", border: "1px solid #eaf0f8", boxShadow: "0 8px 32px rgba(13,27,62,0.08)" }}>
          <div style={{ textAlign: "center", marginBottom: "26px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>
              {t.leaderTag}
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px,2.8vw,34px)", color: "#0d1b3e" }}>
              {t.leaderTitleA} <span style={{ color: "#e8420a" }}>{t.leaderTitleB}</span>
            </h2>
          </div>

          <div className="about-grid-two" style={{ alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "260px", height: "260px", margin: "0 auto 14px", borderRadius: "50%", overflow: "hidden", border: "4px solid rgba(232,66,10,0.2)", boxShadow: "0 16px 34px rgba(13,27,62,0.16)" }}>
                <img src={IMAGE_PATHS.about.leadership.director} alt="Director Sanjeev Parashar" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <h4 style={{ fontSize: "17px", fontWeight: 800, color: "#0d1b3e", marginBottom: "4px" }}>Sanjeev Parashar</h4>
              <p style={{ margin: 0, color: "#64748b", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>Ex AIG, Indian Army</p>
              <p style={{ margin: "8px 0 0", color: "#e8420a", fontWeight: 700, fontSize: "13px" }}>{t.leaderRole}</p>
            </div>
            <div>
              <p style={{ color: "#334155", fontSize: "16px", lineHeight: 1.9, marginBottom: "12px" }}>{t.leaderBody1}</p>
              <p style={{ color: "#334155", fontSize: "16px", lineHeight: 1.9, marginBottom: "12px" }}>{t.leaderBody2}</p>
              <p style={{ color: "#0d1b3e", fontSize: "16px", lineHeight: 1.9, fontWeight: 700, borderLeft: "3px solid #e8420a", paddingLeft: "14px", marginTop: "18px" }}>{t.leaderBody3}</p>
              <p style={{ color: "#64748b", fontSize: "12px", marginTop: "10px" }}>{`${COMPANY_TEXT.cityTierText} | ${COMPANY_TEXT.estText}`}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(160deg, #0b1830 0%, #112244 55%, #0d1b3e 100%)", padding: "78px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", border: "1px solid rgba(232,66,10,0.4)", color: "#ff6b35", background: "rgba(232,66,10,0.12)" }}>
              {t.trustTag}
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px,2.8vw,36px)", color: "white", marginBottom: "8px" }}>
              {t.trustTitleA} <span style={{ color: "#ff6b35" }}>{t.trustTitleB}</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "15px", maxWidth: "620px", margin: "0 auto" }}>{t.trustSub}</p>
          </div>

          <div className="about-grid-four">
            {t.trustPoints.map((point, idx) => (
              <div key={point} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: "22px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(232,66,10,0.16)", color: "#ff8a57", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                  {idx + 1}
                </div>
                <p style={{ color: "rgba(255,255,255,0.82)", margin: 0, fontSize: "14px", lineHeight: 1.8 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0d1b3e", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", border: "1px solid rgba(232,66,10,0.4)", color: "#ff6b35", background: "rgba(232,66,10,0.12)" }}>
              {t.purposeTag}
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px,2.8vw,34px)", color: "white" }}>
              {t.purposeTitleA} <span style={{ color: "#ff6b35" }}>{t.purposeTitleB}</span>
            </h2>
          </div>
          <div className="about-grid-four">
            {t.cards.map((card, index) => (
              <div key={`${card.title}-${index}`} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "rgba(255,107,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff8a57", fontWeight: 800, marginBottom: "14px" }}>
                  {card.icon}
                </div>
                <h3 style={{ color: "white", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{card.title}</h3>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "14px", lineHeight: 1.8 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
