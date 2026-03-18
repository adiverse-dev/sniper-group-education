function AnnouncementBar() {
  return (
    <div className="relative z-50 overflow-hidden bg-navy px-6 py-2 flex items-center justify-center gap-4 text-white text-xs font-medium">

      {/* Shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-orange/10 to-transparent animate-pulse" />

      {/* Blinking dot */}
      <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse flex-shrink-0" />

      {/* Text — desktop */}
      <span className="hidden sm:block text-center">
        🎉 Admissions Open 2025–26 &nbsp;|&nbsp;
        🛡️ NDA Batch Starting April 15 — Limited Seats &nbsp;|&nbsp;
        📚 CBSE School Admissions Open
      </span>

      {/* Text — mobile */}
      <span className="sm:hidden">
        🎉 Admissions Open 2025–26
      </span>

      {/* Enquire Now */}
      <a
        href="/contact"
        className="flex-shrink-0 font-bold px-3 py-0.5 rounded-full text-[11px] border transition-all
                   text-[#ffb38a] border-saffron/40
                   hover:bg-saffron/15 hover:text-saffron"
      >
        Enquire Now →
      </a>

    </div>
  );
}

export default AnnouncementBar;