import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGE_PATHS } from "../config/imagePaths";
import { useLanguage } from "../i18n/LanguageProvider";
import LocalizedLink from "../components/LocalizedLink";

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

const wings = [
  {
    num: "WING 01",
    name: { en: "Sniper Defence Academy", hi: "स्नाइपर डिफेन्स अकादमी" },
    tagline: { en: "Forge the Warrior Within", hi: "अपने अंदर के योद्धा को गढ़ें" },
    desc: {
      en: "Elite coaching for NDA, CDS, Sainik School and all defence entrance examinations.",
      hi: "NDA, CDS, सैनिक स्कूल और अन्य डिफेन्स एंट्रेंस परीक्षाओं के लिए विशेषज्ञ कोचिंग।",
    },
    bullets: {
      en: ["NDA / CDS Coaching", "Physical Training", "SSB Interview Prep"],
      hi: ["NDA / CDS कोचिंग", "फिजिकल ट्रेनिंग", "SSB इंटरव्यू तैयारी"],
    },
    link: "/defence",
    color: "#e8420a",
    border: "#e8420a",
    tagColor: "#e8420a",
    photo: IMAGE_PATHS.wings.defence,
    photoBg: IMAGE_PATHS.wings.defence,
  },
  {
    num: "WING 02",
    name: { en: "Sniper Public School", hi: "स्नाइपर पब्लिक स्कूल" },
    tagline: { en: "Nurturing Young Minds", hi: "नन्हे मन का समग्र विकास" },
    desc: {
      en: "CBSE affiliated school from Nursery to Class 8 with holistic learning.",
      hi: "नर्सरी से कक्षा 8 तक CBSE आधारित स्कूल, जहां समग्र शिक्षा पर जोर है।",
    },
    bullets: {
      en: ["CBSE Curriculum", "Smart Classrooms", "Activity-Based Learning"],
      hi: ["CBSE पाठ्यक्रम", "स्मार्ट क्लासरूम", "गतिविधि आधारित शिक्षा"],
    },
    link: "/school",
    color: "#10b981",
    border: "#10b981",
    tagColor: "#10b981",
    photo: IMAGE_PATHS.wings.school,
    photoBg: IMAGE_PATHS.wings.school,
  },
  {
    num: "WING 03",
    name: { en: "Sniper Classes", hi: "स्नाइपर क्लासेस" },
    tagline: { en: "Crack Every Exam", hi: "हर परीक्षा में सफलता" },
    desc: {
      en: "Specialized coaching for Class 9-12, IIT JEE, NEET and NDA Foundation.",
      hi: "कक्षा 9-12, IIT JEE, NEET और NDA Foundation के लिए विशेष कोचिंग।",
    },
    bullets: {
      en: ["IIT JEE / NEET", "NDA Foundation", "Board Excellence (9-12)"],
      hi: ["IIT JEE / NEET", "NDA Foundation", "बोर्ड उत्कृष्टता (9-12)"],
    },
    link: "/classes",
    color: "#7c3aed",
    border: "#7c3aed",
    tagColor: "#7c3aed",
    photo: IMAGE_PATHS.wings.classes,
    photoBg: IMAGE_PATHS.wings.classes,
  },
];

const copy = {
  en: {
    tag: "Our Wings",
    heading: "What Are You Looking For?",
    sub: "Three specialized divisions, united by one purpose - your success.",
    cta: "Explore Wing",
  },
  hi: {
    tag: "हमारी विंग्स",
    heading: "आप क्या ढूंढ रहे हैं?",
    sub: "तीन विशेषज्ञ विंग्स, एक ही लक्ष्य - आपकी सफलता।",
    cta: "विंग देखें",
  },
};

export default function WhatAreYouLookingFor() {
  const { lang } = useLanguage();
  const t = copy[lang] || copy.en;

  return (
    <section className="py-24 px-4" style={{ background: "#f5f7fa" }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#e8420a]/30 text-[#e8420a] bg-[#e8420a]/10">
              {t.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0d1b3e]">
              {t.heading}
            </h2>
            <p className="mt-4 text-[#0d1b3e]/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.sub}
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#e8420a]" />
              <div className="w-2 h-2 rounded-full bg-[#e8420a]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#e8420a]" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {wings.map((wing, index) => (
            <AnimatedSection key={wing.link} delay={index * 0.12}>
              <LocalizedLink
                to={wing.link}
                className="group rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                style={{
                  borderColor: wing.border,
                  background: "white",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.boxShadow = `0 20px 48px ${wing.color}25`;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden", flexShrink: 0 }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: wing.color, zIndex: 3 }} />
                  <img
                    loading="lazy"
                    decoding="async"
                    src={wing.photo}
                    alt={wing.name[lang] || wing.name.en}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.src = wing.photoBg;
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none", zIndex: 1 }} />
                  <div style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(13,27,62,0.75)", backdropFilter: "blur(6px)", color: "white", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", letterSpacing: "2px", textTransform: "uppercase", zIndex: 2 }}>
                    {wing.num}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-7 pt-4">
                  <h3 className="font-serif text-xl font-bold text-[#0d1b3e] mb-1 mt-1">{wing.name[lang] || wing.name.en}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: wing.tagColor }}>
                    {wing.tagline[lang] || wing.tagline.en}
                  </p>
                  <p className="text-[#0d1b3e]/55 text-sm leading-relaxed mb-5">{wing.desc[lang] || wing.desc.en}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {(wing.bullets[lang] || wing.bullets.en).map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-[#0d1b3e]/70">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: wing.color }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200" style={{ color: wing.tagColor }}>
                    {t.cta}
                    {" ->"}
                  </div>
                </div>
              </LocalizedLink>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
