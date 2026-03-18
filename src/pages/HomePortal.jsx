import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Users, Trophy, Star, Award, Target, Zap, ArrowRight,
} from "lucide-react";
import VideoSection from "../sections/VideoSection";
import HeroSlider from "../sections/HeroSlider";
import WhatAreYouLookingFor from "../sections/WhatAreYouLookingFor";
import MarqueeStrip from "../sections/MarqueeStrip";
import CallbackSection from "../sections/CallbackSection";

const SectionTitle = ({ tag, title, subtitle }) => (
  <div className="text-center mb-14">
    {tag && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#e8420a]/30 text-[#e8420a] bg-[#e8420a]/10">
        {tag}
      </span>
    )}
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0d1b3e]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-[#0d1b3e]/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className="mt-6 flex items-center justify-center gap-3">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#e8420a]" />
      <div className="w-2 h-2 rounded-full bg-[#e8420a]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#e8420a]" />
    </div>
  </div>
);

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


const stats = [
  { icon: Users,  value: "5,000+", label: "Students Trained",    color: "#e8420a" },
  { icon: Trophy, value: "1,200+", label: "Defence Selections",  color: "#10b981" },
  { icon: Star,   value: "15+",    label: "Years of Excellence", color: "#f59e0b" },
  { icon: Award,  value: "98%",    label: "Board Result Rate",   color: "#7c3aed" },
];

const testimonials = [
  { name: "Aniket Kumar", role: "Sainik School - Puruliya", avatar: "AK", avatarBg: "#FF9933",
    photo: "/images/students/aniket.jpg",
    quote: "Sniper Defence Academy ne mujhe sirf padhai nahi, ek soldier ki soch di. Yahan se mera safar shuru hua." },
  { name: "Harsh Chahal", role: "Sainik School - Gurukul Kurukshetra", avatar: "HC", avatarBg: "#10b981",
    photo: "/images/students/harsh.jpg",
    quote: "Yahan ki training aur discipline ne mujhe Sainik School ke liye taiyaar kiya. Best decision of my life." },
  { name: "Aditya Nagar", role: "Sainik School - Gurukul Kurukshetra", avatar: "AN", avatarBg: "#0d1b3e",
    photo: "/images/students/aditya.jpg",
    quote: "Faculty bahut dedicated hai. Har student par personally dhyan diya jaata hai. Results khud bolta hai." },
  { name: "Adarsh Hoon", role: "Sainik School - Amravathi Nagar", avatar: "AH", avatarBg: "#7c3aed",
    photo: "/images/students/adarsh.jpg",
    quote: "Sniper Group ka mahaul aur guidance ne mera sapna sach kar diya. Bahut grateful hoon." },
];

const HomePortal = () => {
  const [videoMuted, setVideoMuted] = useState(true);
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#f5f7fa" }}>

      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider />

      {/* ── 2. VIDEO SECTION ── */}
      <VideoSection />

      {/* ── 3. WHAT ARE YOU LOOKING FOR ── */}
      <WhatAreYouLookingFor />

      {/* ── 4. MARQUEE ── */}
      <MarqueeStrip />
      

      {/* ── 5. ABOUT ── */}
      <section id="about" className="py-24 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase mb-5 border border-[#e8420a]/30 text-[#e8420a] bg-[#e8420a]/10">
                About Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b3e] leading-tight mb-6">
                A Legacy Built on <span style={{ color: "#e8420a" }}>Discipline</span> &{" "}
                <span style={{ color: "#e8420a" }}>Excellence</span>
              </h2>
              <p className="text-[#0d1b3e]/60 text-base leading-relaxed mb-5">
                Sniper Group of Education was founded with a singular mission — to create a
                comprehensive educational ecosystem where every student receives world-class guidance.
              </p>
              <p className="text-[#0d1b3e]/60 text-base leading-relaxed mb-8">
                From preparing future Army officers to nurturing young school children and
                competitive exam aspirants, we bring the same rigor and commitment to every classroom.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Target, label: "Vision", text: "To be India's most trusted multi-wing educational institution" },
                  { icon: Zap, label: "Mission", text: "Empowering students with knowledge, discipline, and purpose" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="p-5 rounded-2xl border hover:shadow-md transition-all duration-300"
                      style={{ background: "#f5f7fa", borderColor: "#eef1f8" }}>
                      <Icon size={22} style={{ color: "#e8420a" }} className="mb-3" />
                      <p className="text-[#0d1b3e] font-semibold text-sm mb-1">{item.label}</p>
                      <p className="text-[#0d1b3e]/50 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] border shadow-xl" style={{ borderColor: "#eef1f8" }}>
                  <video
                    id="about-video"
                    src="/video/about-sniper.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Sound toggle button */}
                  <button
                    onClick={() => {
                      const v = document.getElementById("about-video");
                      v.muted = !v.muted;
                      v.play();
                      setVideoMuted(v.muted);
                    }}
                    style={{
                      position: "absolute", bottom: "16px", right: "16px",
                      width: "42px", height: "42px", borderRadius: "50%",
                      background: "rgba(0,0,0,0.55)", border: "1.5px solid rgba(255,255,255,0.4)",
                      color: "white", fontSize: "18px", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      backdropFilter: "blur(6px)", transition: "all 0.2s", zIndex: 5,
                    }}
                    title="Toggle Sound"
                  >
                    {videoMuted ? "🔇" : "🔊"}
                  </button>
                </div>
                <div className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl shadow-2xl border"
                  style={{ background: "#ffffff", borderColor: "#eef1f8" }}>
                  <p className="font-serif text-3xl font-bold" style={{ color: "#e8420a" }}>5+</p>
                  <p className="text-[#0d1b3e]/50 text-xs tracking-wider mt-0.5">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* ── 6. STATS ── */}
      <section className="py-20 px-4" style={{ background: "#0d1b3e" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#e8420a]/40 bg-[#e8420a]/15"
              style={{ color: "#ff6b35" }}>By The Numbers</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div className="text-center group p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                    style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: stat.color + "25" }}>
                      <Icon size={22} style={{ color: stat.color }} />
                    </div>
                    <p className="font-serif text-4xl sm:text-5xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-white/50 text-sm tracking-wide">{stat.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ── */}
      <section className="py-24 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionTitle tag="Student Stories" title="Words from Our Warriors"
              subtitle="Real students. Real results. Hear what our community has to say." />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <div className="p-8 h-full flex flex-col rounded-2xl border hover:shadow-lg transition-all duration-300"
                  style={{ background: "#f5f7fa", borderColor: "#eef1f8" }}>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} style={{ color: "#e8420a", fill: "#e8420a" }} />
                    ))}
                  </div>
                  <p className="text-[#0d1b3e]/60 text-sm leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 overflow-hidden"
                      style={{ background: t.avatarBg }}>
                      {t.photo
                        ? <img src={t.photo} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        : t.avatar}
                    </div>
                    <div>
                      <p className="text-[#0d1b3e] font-semibold text-sm">{t.name}</p>
                      <p className="text-[#0d1b3e]/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CallbackSection/>

    </div>
  );
};

export default HomePortal;