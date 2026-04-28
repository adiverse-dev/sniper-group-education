import { Suspense, lazy, useMemo } from "react";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { COMPANY_PROFILE, COMPANY_TEXT } from "../config/companyProfile";
import { useLanguage } from "../i18n/LanguageProvider";

const WhatAreYouLookingFor = lazy(() => import("../sections/WhatAreYouLookingFor"));

function getSlides(lang) {
  if (lang === "hi") {
    return [
      {
        img: IMAGE_PATHS.home.hero.defence,
        imgPos: "center top",
        tag: "Defence Academy",
        accent: "#e8420a",
        heading: "डिफेन्स परीक्षाओं में मजबूत सफलता",
        sub: "AISSEE · RMS · RIMC · NDA · CDS · Air Force",
        btn: "कोर्स देखें",
        link: "/defence",
      },
      {
        img: IMAGE_PATHS.home.hero.school,
        imgPos: "center",
        tag: "Public School",
        accent: "#10b981",
        heading: "Nursery से Class 8 तक गुणवत्ता शिक्षा",
        sub: "CBSE पैटर्न, अनुशासन और समग्र विकास",
        btn: "स्कूल देखें",
        link: "/school",
      },
      {
        img: IMAGE_PATHS.home.hero.classes,
        imgPos: "center",
        tag: "Sniper Classes",
        accent: "#7c3aed",
        heading: "JEE, NEET और बोर्ड तैयारी",
        sub: "IIT JEE · NEET · Foundation Programs",
        btn: "क्लासेस देखें",
        link: "/classes",
      },
    ];
  }

  return [
    {
      img: IMAGE_PATHS.home.hero.defence,
      imgPos: "center top",
      tag: "Defence Academy",
      accent: "#e8420a",
      heading: "Strong Results in Defence Examinations",
      sub: "AISSEE · RMS · RIMC · NDA · CDS · Air Force",
      btn: "Explore Courses",
      link: "/defence",
    },
    {
      img: IMAGE_PATHS.home.hero.school,
      imgPos: "center",
      tag: "Public School",
      accent: "#10b981",
      heading: "Quality Learning from Nursery to Class 8",
      sub: "CBSE pattern with discipline and holistic growth",
      btn: "Explore School",
      link: "/school",
    },
    {
      img: IMAGE_PATHS.home.hero.classes,
      imgPos: "center",
      tag: "Sniper Classes",
      accent: "#7c3aed",
      heading: "JEE, NEET and Board Preparation",
      sub: "IIT JEE · NEET · Foundation Programs",
      btn: "Explore Classes",
      link: "/classes",
    },
  ];
}

const copy = {
  en: {
    heroPill: "Your dreams are our dreams",
    heroTitleA: "Inspiring Young Minds and",
    heroTitleB: "Empowering Dreams",
    heroSub: `Sniper Group of Education - ${COMPANY_TEXT.cityTierText}`,
    stats: [
      { value: "200+", label: "Defence Selections", color: "#e8420a" },
      { value: "1200+", label: "Students Trained", color: "#10b981" },
      { value: "3", label: "Wings", color: "#7c3aed" },
      { value: COMPANY_TEXT.yearsPlus, label: "Years Excellence", color: "#f59e0b" },
    ],
    directorTag: "A Word from Our Director",
    directorQuote:
      "At Sniper Group, we do not just teach - we transform. Every student carries the potential to serve the nation and grow beyond limits.",
    directorRole: "Director, Sniper Group of Education",
    trustTag: "Our Trust",
    trustTitle: "Bhagwan Parshuram Education and Charitable Trust",
    trustDesc:
      `Registered under the Societies Registration Act, the trust supports all three wings in ${COMPANY_PROFILE.city} with a commitment to accessible and quality education.`,
    trustStats: [
      { label: "Registered Trust", value: COMPANY_TEXT.trustSinceText },
      { label: "Three Wings", value: "One Mission" },
      { label: "Registered City", value: "Meerut, U.P." },
      { label: "Students Served", value: "200+" },
    ],
    numbersTag: "By The Numbers",
    numbersTitle: "Our Impact in Numbers",
    impact: [
      { value: "200+", label: "Students Trained", color: "#e8420a" },
      { value: "1200+", label: "Defence Selections", color: "#10b981" },
      { value: COMPANY_TEXT.yearsPlus, label: "Years of Excellence", color: "#f59e0b" },
      { value: "98%", label: "Board Result Rate", color: "#7c3aed" },
    ],
    storiesTag: "Student Stories",
    storiesTitle: "Words from Our Warriors",
    storiesSub: "Real students. Real results.",
  },
  hi: {
    heroPill: "आपके सपने हमारे सपने",
    heroTitleA: "नन्हे मन को प्रेरणा और",
    heroTitleB: "सपनों को शक्ति",
    heroSub: `Sniper Group of Education - ${COMPANY_TEXT.cityTierText}`,
    stats: [
      { value: "200+", label: "डिफेन्स सेलेक्शन", color: "#e8420a" },
      { value: "1200+", label: "प्रशिक्षित छात्र", color: "#10b981" },
      { value: "3", label: "विंग्स", color: "#7c3aed" },
      { value: COMPANY_TEXT.yearsPlus, label: "वर्षों का अनुभव", color: "#f59e0b" },
    ],
    directorTag: "डायरेक्टर का संदेश",
    directorQuote:
      "Sniper Group में हम सिर्फ पढ़ाते नहीं, बल्कि व्यक्तित्व का निर्माण करते हैं। हर छात्र में राष्ट्र सेवा और सफलता की क्षमता होती है।",
    directorRole: "डायरेक्टर, स्नाइपर ग्रुप ऑफ एजुकेशन",
    trustTag: "हमारा ट्रस्ट",
    trustTitle: "भगवान परशुराम एजुकेशन एंड चैरिटेबल ट्रस्ट",
    trustDesc:
      `${COMPANY_PROFILE.city} में संचालित यह पंजीकृत ट्रस्ट हमारी तीनों विंग्स को गुणवत्ता और सुलभ शिक्षा के लक्ष्य से मजबूत करता है।`,
    trustStats: [
      { label: "पंजीकृत ट्रस्ट", value: COMPANY_TEXT.trustSinceText },
      { label: "तीन विंग्स", value: "एक मिशन" },
      { label: "पंजीकृत शहर", value: "मेरठ, उ.प्र." },
      { label: "सेवा प्राप्त छात्र", value: "200+" },
    ],
    numbersTag: "आंकड़ों में",
    numbersTitle: "हमारा प्रभाव",
    impact: [
      { value: "200+", label: "प्रशिक्षित छात्र", color: "#e8420a" },
      { value: "1200+", label: "डिफेन्स चयन", color: "#10b981" },
      { value: COMPANY_TEXT.yearsPlus, label: "अनुभव", color: "#f59e0b" },
      { value: "98%", label: "बोर्ड रिजल्ट रेट", color: "#7c3aed" },
    ],
    storiesTag: "स्टूडेंट स्टोरीज़",
    storiesTitle: "हमारे विद्यार्थियों के अनुभव",
    storiesSub: "सच्चे छात्र, सच्चे परिणाम।",
  },
};

const testimonials = [
  {
    name: "Suryansh Rathore",
    role: { en: "Sainik School - Puruliya", hi: "सैनिक स्कूल - पुरुलिया" },
    quote: {
      en: "Sniper Defence Academy gave me direction, discipline and confidence to move ahead.",
      hi: "Sniper Defence Academy ने मुझे दिशा, अनुशासन और आगे बढ़ने का आत्मविश्वास दिया।",
    },
    wing: { en: "Defence Academy", hi: "डिफेन्स अकादमी" },
    color: "#e8420a",
    photo: IMAGE_PATHS.home.testimonials.suryanshRathore,
  },
  {
    name: "Sameer Parmar",
    role: { en: "Sainik School - Gurukul Kurukshetra", hi: "सैनिक स्कूल - गुरुकुल कुरुक्षेत्र" },
    quote: {
      en: "The training pattern and regular feedback helped me prepare with full clarity.",
      hi: "ट्रेनिंग पैटर्न और नियमित फीडबैक ने मुझे स्पष्टता के साथ तैयारी करने में मदद की।",
    },
    wing: { en: "Defence Academy", hi: "डिफेन्स अकादमी" },
    color: "#10b981",
    photo: IMAGE_PATHS.home.testimonials.sameerParmar,
  },
  {
    name: "Abhinav Thakur",
    role: { en: "Sainik School - Gurukul Kurukshetra", hi: "सैनिक स्कूल - गुरुकुल कुरुक्षेत्र" },
    quote: {
      en: "Dedicated faculty and personal attention made a real difference in my performance.",
      hi: "समर्पित फैकल्टी और व्यक्तिगत ध्यान ने मेरे प्रदर्शन में वास्तविक बदलाव लाया।",
    },
    wing: { en: "Sniper Classes", hi: "स्नाइपर क्लासेस" },
    color: "#7c3aed",
    photo: IMAGE_PATHS.home.testimonials.abhinavThakur,
  },
];

function MarqueeStrip() {
  const items = ["AISSEE", "RMS", "RIMC", "NDA", "CDS", "Air Force", "IIT JEE", "NEET", "Class 9-12", "CBSE", "Sainik School"];
  return (
    <div style={{ background: "#e8420a", overflow: "hidden", padding: "12px 0", width: "100%" }}>
      <div style={{ display: "flex", gap: "56px", animation: "marquee 30s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} style={{ color: "white", fontSize: "13px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "56px" }}>
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

export default function HomePortal() {
  const { lang } = useLanguage();
  const t = copy[lang] || copy.en;
  const slides = useMemo(() => getSlides(lang), [lang]);

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", background: "#f5f7fa" }}>
      <section style={{ position: "relative", height: "530px", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "100%" }}>
          {[IMAGE_PATHS.home.banner.defenceWing, IMAGE_PATHS.home.banner.schoolWing, IMAGE_PATHS.home.banner.classesWing, IMAGE_PATHS.home.banner.achievers, IMAGE_PATHS.home.banner.campus].map((src, idx) => (
            <img key={`${src}-${idx}`} src={src} alt="Sniper Group campus and students" loading={idx === 0 ? "eager" : "lazy"} decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.72))" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 20px" }}>
          <div style={{ padding: "8px 18px", borderRadius: "999px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "13px", marginBottom: "18px", backdropFilter: "blur(6px)" }}>
            {t.heroPill}
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, fontFamily: "Georgia, serif", margin: 0 }}>
            {t.heroTitleA}
            <br />
            {`${t.heroTitleB} ${COMPANY_TEXT.sinceFounded}`}
          </h1>
          <p style={{ marginTop: "14px", fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>{t.heroSub}</p>
        </div>
      </section>

      <div style={{ marginTop: "-72px", padding: "0 20px", position: "relative", zIndex: 5 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "14px", background: "#fff", borderRadius: "20px", padding: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
          {t.stats.map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: item.color }}>{item.value}</div>
              <div style={{ fontSize: "12px", color: "rgba(13,27,62,0.55)", marginTop: "4px" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "38px" }}>
        <HeroSlider slides={slides} waitForFirstSlide />
      </div>

      <Suspense fallback={<div style={{ minHeight: "260px", background: "#f5f7fa" }} aria-hidden="true" />}>
        <WhatAreYouLookingFor />
      </Suspense>

      <MarqueeStrip />

      <section style={{ padding: "80px 16px", background: "#f5f7fa" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "34px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "34px", border: "1px solid #eef1f8", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: "999px", background: "rgba(232,66,10,0.1)", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "18px" }}>
              {t.directorTag}
            </span>
            <blockquote style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#0d1b3e", lineHeight: 1.9, fontStyle: "italic", borderLeft: "3px solid #e8420a", paddingLeft: "18px", margin: "0 0 20px" }}>
              "{t.directorQuote}"
            </blockquote>
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "16px", overflow: "hidden", marginBottom: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <iframe
                src="https://www.youtube.com/embed/eD2-DaF1zAM?start=7"
                title="Sniper Group Director Video Message"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #e8420a, #0d1b3e)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                D
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: "#0d1b3e", fontSize: "14px" }}>{t.directorRole}</p>
                <p style={{ color: "rgba(13,27,62,0.5)", fontSize: "12px", margin: "3px 0 0" }}>{`${COMPANY_TEXT.cityTierText} | ${COMPANY_TEXT.estText}`}</p>
              </div>
            </div>
          </div>

          <div style={{ background: "#0d1b3e", borderRadius: "20px", padding: "34px", boxShadow: "0 2px 16px rgba(13,27,62,0.25)" }}>
            <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: "999px", background: "rgba(232,66,10,0.2)", border: "1px solid rgba(232,66,10,0.4)", color: "#ff7043", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "18px" }}>
              {t.trustTag}
            </span>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: "14px" }}>{t.trustTitle}</h3>
            <p style={{ color: "rgba(255,255,255,0.64)", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>{t.trustDesc}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {t.trustStats.map((item) => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "12px", padding: "12px 14px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p style={{ color: "#e8420a", fontSize: "14px", fontWeight: 700, margin: 0 }}>{item.value}</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", margin: "3px 0 0" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 16px", background: "#0d1b3e" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.35)", color: "#e8420a", background: "rgba(232,66,10,0.12)" }}>
              {t.numbersTag}
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, color: "#fff", margin: 0 }}>{t.numbersTitle}</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {t.impact.map((item) => (
              <div key={item.label} style={{ textAlign: "center", padding: "32px 22px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
                <p style={{ margin: "0 0 8px", fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 800, color: item.color, lineHeight: 1 }}>{item.value}</p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 16px", background: "#f5f7fa" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.1)" }}>
              {t.storiesTag}
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 700, color: "#0d1b3e", margin: 0 }}>{t.storiesTitle}</h2>
            <p style={{ marginTop: "10px", color: "rgba(13,27,62,0.6)", fontSize: "15px" }}>{t.storiesSub}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {testimonials.map((item) => (
              <div key={item.name} style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #eef1f8", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", height: "200px" }}>
                  <img src={item.photo} alt={item.name} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: item.color }} />
                  <div style={{ position: "absolute", top: "10px", right: "10px", background: item.color, color: "white", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {item.wing[lang] || item.wing.en}
                  </div>
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ margin: "0 0 10px", color: "#334155", fontSize: "13px", lineHeight: 1.75, fontStyle: "italic" }}>
                    "{item.quote[lang] || item.quote.en}"
                  </p>
                  <p style={{ margin: 0, fontWeight: 700, color: "#0d1b3e", fontSize: "13px" }}>{item.name}</p>
                  <p style={{ margin: "3px 0 0", color: `${item.color}cc`, fontSize: "11px" }}>{item.role[lang] || item.role.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
