import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IMAGE_PATHS } from "../config/imagePaths";

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
    name: "Sniper Defence Academy",
    tagline: "Forge the Warrior Within",
    desc: "Elite coaching for NDA, CDS, Sainik School & all defence entrance examinations. Rigorous academics meets physical excellence.",
    bullets: ["NDA / CDS Coaching", "Physical Training", "SSB Interview Prep"],
    link: "/defence",
    color: "#e8420a",
    border: "#e8420a",
    bg: "rgba(232,66,10,0.05)",
    tagColor: "#e8420a",
    // Photo — defence cadets / NDA
    photo: IMAGE_PATHS.wings.defence,
    photoBg: IMAGE_PATHS.wings.defence,

  },
  {
    num: "WING 02",
    name: "Sniper Public School",
    tagline: "Nurturing Young Minds",
    desc: "CBSE affiliated school from Nursery to Class 8. A holistic learning environment that blends discipline and creativity.",
    bullets: ["CBSE Curriculum", "Smart Classrooms", "Activity-Based Learning"],
    link: "/school",
    color: "#10b981",
    border: "#10b981",
    bg: "rgba(16,185,129,0.05)",
    tagColor: "#10b981",
    photo: IMAGE_PATHS.wings.school,
    photoBg: IMAGE_PATHS.wings.school,
  },
  {
    num: "WING 03",
    name: "Sniper Classes",
    tagline: "Crack Every Exam",
    desc: "Specialized coaching for Class 9–12, IIT JEE, NEET & NDA Foundation programs. Expert faculty, proven results.",
    bullets: ["IIT JEE / NEET", "NDA Foundation", "Board Excellence (9–12)"],
    link: "/classes",
    color: "#7c3aed",
    border: "#7c3aed",
    bg: "rgba(124,58,237,0.05)",
    tagColor: "#7c3aed",
    photo: IMAGE_PATHS.wings.classes,
    photoBg: IMAGE_PATHS.wings.classes,
  },
];

const WhatAreYouLookingFor = () => {
  return (
    <section className="py-24 px-4" style={{ background: "#f5f7fa" }}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#e8420a]/30 text-[#e8420a] bg-[#e8420a]/10">
              Our Wings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0d1b3e]">
              What Are You Looking For?
            </h2>
            <p className="mt-4 text-[#0d1b3e]/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Three specialized divisions, united by one purpose — your success.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#e8420a]" />
              <div className="w-2 h-2 rounded-full bg-[#e8420a]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#e8420a]" />
            </div>
          </div>
        </AnimatedSection>

        {/* Wing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {wings.map((wing, i) => (
            <AnimatedSection key={wing.name} delay={i * 0.12}>
              <Link
                to={wing.link}
                className="group rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                style={{
                  borderColor: wing.border,
                  background: "white",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                  color: "inherit",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 48px ${wing.color}25`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
              >
                {/* ── PHOTO TOP ── */}
                <div style={{ position: "relative", height: "200px", overflow: "hidden", flexShrink: 0 }}>
                  {/* Colored top bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: wing.color, zIndex: 3 }} />

                  <img loading="lazy" decoding="async"
                    src={wing.photo}
                    alt={wing.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={e => { e.target.src = wing.photoBg; }}
                  />

                  {/* Fade bottom into card */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to top, white, transparent)", pointerEvents: "none", zIndex: 1 }} />

                  {/* Wing number badge — top left */}
                  <div
                    style={{
                      position: "absolute", top: "14px", left: "14px",
                      background: "rgba(13,27,62,0.75)",
                      backdropFilter: "blur(6px)",
                      color: "white", fontSize: "10px", fontWeight: 700,
                      padding: "4px 10px", borderRadius: "999px",
                      letterSpacing: "2px", textTransform: "uppercase",
                      zIndex: 2,
                    }}
                  >
                    {wing.num}
                  </div>
                </div>

                {/* ── CARD BODY ── */}
                <div className="flex flex-col flex-1 p-7 pt-4">
                  {/* Name & tagline */}
                  <h3 className="font-serif text-xl font-bold text-[#0d1b3e] mb-1 mt-1">
                    {wing.name}
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: wing.tagColor }}>
                    {wing.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[#0d1b3e]/55 text-sm leading-relaxed mb-5">
                    {wing.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {wing.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#0d1b3e]/70">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: wing.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA (card is clickable) */}
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200" style={{ color: wing.tagColor }}>
                    Explore Wing →
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreYouLookingFor;
