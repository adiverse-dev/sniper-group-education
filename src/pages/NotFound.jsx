import { ArrowLeft, BookOpen, GraduationCap, Home, Shield } from "lucide-react";
import LocalizedLink from "../components/LocalizedLink";
import { useLanguage } from "../i18n/LanguageProvider";

const copy = {
  en: {
    title: "Page Not Found",
    sub: "The page you are looking for does not exist or has been moved. Go back home or explore our wings.",
    home: "Go to Home",
    back: "Go Back",
    wingsLabel: "Or explore our wings",
    defence: "Defence Academy",
    school: "Public School",
    classes: "Sniper Classes",
    backAria: "Go back",
  },
  hi: {
    title: "पेज नहीं मिला",
    sub: "जो पेज आप खोज रहे हैं वह उपलब्ध नहीं है या स्थानांतरित हो गया है। होम पर जाएं या हमारी विंग्स देखें।",
    home: "होम पर जाएं",
    back: "वापस जाएं",
    wingsLabel: "या हमारी विंग्स देखें",
    defence: "डिफेन्स अकादमी",
    school: "पब्लिक स्कूल",
    classes: "स्नाइपर क्लासेस",
    backAria: "पिछले पेज पर जाएं",
  },
};

export default function NotFound() {
  const { lang } = useLanguage();
  const t = copy[lang] || copy.en;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #05130b 0%, #0b132b 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,166,70,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(220,166,70,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #dca646, transparent)" }}
      />

      <div className="relative z-10 max-w-lg mx-auto">
        <p
          className="font-serif font-black leading-none mb-2"
          style={{
            fontSize: "clamp(6rem, 20vw, 12rem)",
            background: "linear-gradient(135deg, #dca646 0%, #f0c060 50%, rgba(220,166,70,0.2) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">{t.title}</h1>
        <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-10">{t.sub}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <LocalizedLink
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[#05130b] text-sm tracking-wider hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #dca646, #f0c060)" }}
          >
            <Home size={15} />
            {t.home}
          </LocalizedLink>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm tracking-wider border border-white/20 hover:border-[#dca646]/50 hover:bg-white/5 transition-all"
            aria-label={t.backAria}
          >
            <ArrowLeft size={15} />
            {t.back}
          </button>
        </div>

        <p className="text-white/25 text-xs tracking-widest uppercase mb-4">{t.wingsLabel}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: Shield, label: t.defence, route: "/defence", color: "text-amber-400" },
            { icon: BookOpen, label: t.school, route: "/school", color: "text-emerald-400" },
            { icon: GraduationCap, label: t.classes, route: "/classes", color: "text-sky-400" },
          ].map((item) => (
            <LocalizedLink
              key={item.route}
              to={item.route}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[#dca646]/40 hover:bg-white/10 transition-all text-sm text-white/60 hover:text-white"
            >
              <item.icon size={14} className={item.color} />
              {item.label}
            </LocalizedLink>
          ))}
        </div>
      </div>
    </main>
  );
}
