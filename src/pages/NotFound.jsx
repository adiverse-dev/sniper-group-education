import { Link } from "react-router-dom";
import { Home, ArrowLeft, Shield, BookOpen, GraduationCap } from "lucide-react";

const NotFound = () => {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #05130b 0%, #0b132b 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,166,70,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(220,166,70,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #dca646, transparent)" }}
      />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* 404 Number */}
        <div>
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
        </div>

        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-white/45 text-sm sm:text-base leading-relaxed mb-10">
            The page you're looking for doesn't exist or has been moved. Head back home or explore one of our wings.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[#05130b] text-sm tracking-wider hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg, #dca646, #f0c060)" }}
          >
            <Home size={15} />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm tracking-wider border border-white/20 hover:border-[#dca646]/50 hover:bg-white/5 transition-all"
            aria-label="Go back"
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
        </div>

        {/* Wing links */}
        <div>
          <p className="text-white/25 text-xs tracking-widest uppercase mb-4">
            Or explore our wings
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Shield, label: "Defence Academy", route: "/defence", color: "text-amber-400" },
              { icon: BookOpen, label: "Public School", route: "/school", color: "text-emerald-400" },
              { icon: GraduationCap, label: "Sniper Classes", route: "/classes", color: "text-sky-400" },
            ].map((item) => (
              <Link
                key={item.route}
                to={item.route}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[#dca646]/40 hover:bg-white/10 transition-all text-sm text-white/60 hover:text-white"
              >
                <item.icon size={14} className={item.color} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
