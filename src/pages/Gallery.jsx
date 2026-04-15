import { useState, useEffect } from "react";
import HeroSlider from "../sections/HeroSlider";

const heroSlides = [
  {
    img: "/img/students/1.jpg",
    imgPos: "center top",
    accent: "#e8420a",
    type: "stats",
    tag: "📸 Gallery",
    title: "Our Moments,",
    highlight: "Our Memories",
    title2: "",
    sub: "A glimpse into life at Sniper Group — achievements, events, and proud moments.",
    stats: [
      { val: "15+",   lab: "Years of Memories" },
      { val: "3",     lab: "Wings" },
      { val: "1,200+",lab: "Defence Selections" },
      { val: "5,000+",lab: "Students" },
    ],
    btn: "Explore Gallery",
    link: "/gallery",
  },
  {
    img: "/img/students/4.jpg",
    imgPos: "center",
    accent: "#10b981",
    type: "stats",
    tag: "🎖️ Events & Ceremonies",
    title: "Celebrating",
    highlight: "Excellence",
    title2: "Every Year",
    sub: "From NDA selections to Annual Functions — every milestone captured with pride.",
    stats: [
      { val: "50+",  lab: "Events Conducted" },
      { val: "100+", lab: "Ceremonies" },
      { val: "15+",  lab: "Years" },
      { val: "3",    lab: "Wings" },
    ],
    btn: "View Events",
    link: "/gallery",
  },
  {
    img: "/img/students/5.jpg",
    imgPos: "center",
    accent: "#7c3aed",
    type: "stats",
    tag: "🏆 Achievements",
    title: "Proud",
    highlight: "Moments",
    title2: "& Memories",
    sub: "Board toppers, JEE/NEET qualifiers, defence heroes — their stories, in pictures.",
    stats: [
      { val: "1,200+", lab: "Defence Selections" },
      { val: "98%",    lab: "Board Pass Rate" },
      { val: "350+",   lab: "JEE/NEET Qualifiers" },
      { val: "5,000+", lab: "Students" },
    ],
    btn: "See Achievements",
    link: "/gallery",
  },
];

const photos = [
  { id: 1,  wing: "Defence", category: "Events",       title: "NDA Selection Ceremony",      emoji: "🎖️",  color: "#FF9933", height: 260 },
  { id: 2,  wing: "School",  category: "Achievements", title: "Annual Prize Distribution",    emoji: "🏆",  color: "#10b981", height: 200 },
  { id: 3,  wing: "Classes", category: "Events",       title: "JEE Results Celebration",      emoji: "🎉",  color: "#7c3aed", height: 220 },
  { id: 4,  wing: "Defence", category: "Achievements", title: "CDS Batch 2024 Selections",    emoji: "⭐",  color: "#FF9933", height: 240 },
  { id: 5,  wing: "School",  category: "Events",       title: "Sports Day 2024",               emoji: "🏅",  color: "#10b981", height: 280 },
  { id: 6,  wing: "Classes", category: "Achievements", title: "NEET Toppers Felicitation",    emoji: "👨‍⚕️", color: "#7c3aed", height: 200 },
  { id: 7,  wing: "Defence", category: "Events",       title: "Republic Day Parade Practice", emoji: "🇮🇳", color: "#FF9933", height: 210 },
  { id: 8,  wing: "School",  category: "Achievements", title: "Board Topper 2024",             emoji: "📚",  color: "#10b981", height: 240 },
  { id: 9,  wing: "Classes", category: "Events",       title: "Orientation Day 2024",         emoji: "🎓",  color: "#7c3aed", height: 260 },
  { id: 10, wing: "Defence", category: "Achievements", title: "Sainik School Selections",     emoji: "🛡️",  color: "#FF9933", height: 200 },
  { id: 11, wing: "School",  category: "Events",       title: "Annual Function 2024",         emoji: "🎭",  color: "#10b981", height: 220 },
  { id: 12, wing: "Classes", category: "Achievements", title: "IIT JEE Advanced Results",     emoji: "🔬",  color: "#7c3aed", height: 240 },
  { id: 13, wing: "Defence", category: "Events",       title: "Physical Training Session",    emoji: "💪",  color: "#FF9933", height: 260 },
  { id: 14, wing: "School",  category: "Events",       title: "Science Exhibition",           emoji: "🧪",  color: "#10b981", height: 200 },
  { id: 15, wing: "Classes", category: "Events",       title: "Parent Teacher Meet",          emoji: "👪",  color: "#7c3aed", height: 220 },
];

const videos = [
  { youtubeId: "To9gCVO-E0g",  embed: "https://www.youtube.com/embed/To9gCVO-E0g?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=To9gCVO-E0g" },
  { youtubeId: "ceoCOclJ9xk",  embed: "https://www.youtube.com/embed/ceoCOclJ9xk?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=ceoCOclJ9xk" },
  { youtubeId: "fe2wgNHxVYs",  embed: "https://www.youtube.com/embed/fe2wgNHxVYs?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=fe2wgNHxVYs" },
  { youtubeId: "crdd-nQTDp4",  embed: "https://www.youtube.com/embed/crdd-nQTDp4?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=crdd-nQTDp4" },
  { youtubeId: "FRnevAczd1Y",  embed: "https://www.youtube.com/embed/FRnevAczd1Y?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=FRnevAczd1Y" },
  { youtubeId: "zJe0SXPOU6Y",  embed: "https://www.youtube.com/embed/zJe0SXPOU6Y?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=zJe0SXPOU6Y" },
  { youtubeId: "mgQGU-c-6-w",  embed: "https://www.youtube.com/embed/mgQGU-c-6-w?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=mgQGU-c-6-w" },
  { youtubeId: "rfvyz17fdVg",  embed: "https://www.youtube.com/embed/rfvyz17fdVg?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=rfvyz17fdVg" },
  { youtubeId: "xaUO7N7UDZM",  embed: "https://www.youtube.com/embed/xaUO7N7UDZM?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=xaUO7N7UDZM" },
  { youtubeId: "S-qjZ_xcT4o",  embed: "https://www.youtube.com/embed/S-qjZ_xcT4o?autoplay=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=S-qjZ_xcT4o" },
];

const wingFilters = ["All", "Defence", "School", "Classes"];
const catFilters  = ["All", "Events", "Achievements"];

const wingMeta = {
  Defence: { color: "#FF9933", label: "🛡️ Defence" },
  School:  { color: "#10b981", label: "📚 School"  },
  Classes: { color: "#7c3aed", label: "🎓 Classes" },
  All:     { color: "#e8420a", label: "🏫 All"     },
};

// ── 3D Reel Carousel Component ──
const ReelCarousel = ({ videos }) => {
  const [center, setCenter] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  const prev = () => { setPlaying(false); setCenter(c => (c - 1 + videos.length) % videos.length); };
  const next = () => { setPlaying(false); setCenter(c => (c + 1) % videos.length); };

  const onMouseDown = (e) => setDragStartX(e.clientX);
  const onMouseUp   = (e) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    setDragStartX(null);
  };

  const onTouchStart = (e) => setDragStartX(e.touches[0].clientX);
  const onTouchEnd   = (e) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    setDragStartX(null);
  };

  const getProps = (i) => {
    const total = videos.length;
    let offset = i - center;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    const abs = Math.abs(offset);
    if (abs > 2) return null;
    return {
      offset,
      scale:      offset === 0 ? (hovered ? 1.06 : 1) : abs === 1 ? 0.75 : 0.58,
      translateX: offset * 280,
      zIndex:     10 - abs,
      opacity:    offset === 0 ? 1    : abs === 1 ? 0.6  : 0.35,
      rotateY:    offset * -22,
      blur:       offset === 0 ? 0    : abs === 1 ? 1    : 3,
    };
  };

  const CARD_W = 260;
  const CARD_H = Math.round(CARD_W * 16 / 9);

  return (
    <div>
      <div
        style={{ position: "relative", height: `${CARD_H}px`, userSelect: "none", cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={() => setDragStartX(null)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {videos.map((v, i) => {
          const p = getProps(i);
          if (!p) return null;
          const isCenter = p.offset === 0;
          return (
            <div key={i}
              onClick={() => { if (isCenter) { if (!playing) setPlaying(true); } else { setPlaying(false); setCenter(i); } }}
              onMouseEnter={() => { if (isCenter) setHovered(true); }}
              onMouseLeave={() => setHovered(false)}
              style={{
                position: "absolute", left: "50%", top: 0,
                width: `${CARD_W}px`, height: `${CARD_H}px`,
                transform: `translateX(calc(-50% + ${p.translateX}px)) scale(${p.scale}) perspective(700px) rotateY(${p.rotateY}deg)`,
                zIndex: p.zIndex, opacity: p.opacity,
                filter: `blur(${p.blur}px)`,
                transition: "all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transformOrigin: "center center",
                cursor: "pointer", borderRadius: "22px", overflow: "hidden",
                background: isCenter
                  ? "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, rgba(232,66,10,0.08) 100%)"
                  : "linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 100%)",
                border: isCenter ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow: isCenter
                  ? "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
                  : "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {isCenter && playing && v.youtubeId ? (
                <>
                  <iframe
                    src={v.embed} title="video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", borderRadius: "22px", zIndex: 5 }}
                  />
                  <button
                    onClick={e => { e.stopPropagation(); setPlaying(false); }}
                    style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10, width: "30px", height: "30px", borderRadius: "50%", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.3)", color: "white", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    ✕
                  </button>
                </>
              ) : (
                <>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)", borderRadius: "22px 22px 0 0", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(0deg, rgba(255,255,255,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a3260, #0d1b3e)" }} />
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                    alt="thumbnail" loading="lazy"
                    onError={e => { e.target.src = `https://img.youtube.com/vi/${v.youtubeId}/default.jpg`; }}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: isCenter ? 0.85 : 0.55 }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: isCenter ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.5)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: isCenter ? "58px" : "42px", height: isCenter ? "58px" : "42px", borderRadius: "50%", background: isCenter ? "rgba(232,66,10,0.75)" : "rgba(255,255,255,0.08)", border: isCenter ? "1.5px solid rgba(255,255,255,0.5)" : "1.5px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", boxShadow: isCenter ? "0 0 30px rgba(232,66,10,0.5)" : "none", transition: "all 0.4s" }}>
                    <div style={{ width: 0, height: 0, borderTop: `${isCenter ? 10 : 7}px solid transparent`, borderBottom: `${isCenter ? 10 : 7}px solid transparent`, borderLeft: `${isCenter ? 18 : 13}px solid ${isCenter ? "white" : "rgba(255,255,255,0.6)"}`, marginLeft: isCenter ? "4px" : "3px" }} />
                  </div>
                  {isCenter && (
                    <div style={{ position: "absolute", bottom: "14px", left: 0, right: 0, textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                      ▶ Tap to Play
                    </div>
                  )}
                  <div style={{ position: "absolute", top: "10px", right: "12px", color: "rgba(255,255,255,0.18)", fontSize: "10px", fontWeight: 600 }}>{i + 1}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "center", marginTop: "32px" }}>
        {videos.map((_, i) => (
          <div key={i} onClick={() => setCenter(i)}
            style={{ width: i === center ? "24px" : "7px", height: "7px", borderRadius: "999px", background: i === center ? "#e8420a" : "rgba(13,27,62,0.2)", cursor: "pointer", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const [wing, setWing]         = useState("All");
  const [cat, setCat]           = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = photos.filter(p =>
    (wing === "All" || p.wing === wing) &&
    (cat  === "All" || p.category === cat)
  );

  const cols = [[], [], []];
  filtered.forEach((p, i) => cols[i % 3].push({ ...p, filteredIndex: i }));

  const openLightbox  = (index) => setLightbox(index);
  const closeLightbox = ()      => setLightbox(null);
  const prevPhoto     = (e)     => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); };
  const nextPhoto     = (e)     => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); };

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") setLightbox((prev) => (prev + 1) % filtered.length);
      if (e.key === "ArrowLeft")  setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const activePhoto = lightbox !== null ? filtered[lightbox] : null;

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider slides={heroSlides} />
      {/* ── 2. FILTERS ── */}
      <section style={{ background: "#ffffff", padding: "24px 20px", borderBottom: "1px solid #eef1f8", position: "sticky", top: 0, zIndex: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>Wing:</span>
            {wingFilters.map((w) => (
              <button key={w} onClick={() => setWing(w)} style={{ padding: "6px 14px", borderRadius: "999px", cursor: "pointer", fontSize: "14px", fontWeight: 600, border: "1.5px solid", borderColor: wing === w ? "#e8420a" : "#e2e8f0", background: wing === w ? "rgba(232,66,10,0.08)" : "white", color: wing === w ? "#e8420a" : "#64748b", transition: "all 0.2s" }}>{w === "All" ? "All Wings" : wingMeta[w].label}</button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>Category:</span>
            {catFilters.map((c) => (
              <button key={c} onClick={() => setCat(c)} style={{ padding: "6px 14px", borderRadius: "999px", cursor: "pointer", fontSize: "14px", fontWeight: 600, border: "1.5px solid", borderColor: cat === c ? "#e8420a" : "#e2e8f0", background: cat === c ? "rgba(232,66,10,0.08)" : "white", color: cat === c ? "#e8420a" : "#64748b", transition: "all 0.2s" }}>{c}</button>
            ))}
          </div>
          <div style={{ marginLeft: "auto", fontSize: "14px", color: "#64748b", fontWeight: 600 }}>
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* ── 3. MASONRY GRID ── */}
      <section style={{ background: "#f5f7fa", padding: "48px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px", color: "#64748b", fontSize: "15px" }}>No photos found for selected filters.</div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", alignItems: "start" }}>
              {cols.map((col, ci) => (
                <div key={ci} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {col.map((photo) => (
                    <div key={photo.id}
                      onClick={() => openLightbox(photo.filteredIndex)}
                      style={{ borderRadius: "14px", overflow: "hidden", cursor: "pointer", position: "relative", height: `${photo.height}px`, background: `linear-gradient(135deg, ${photo.color}22, ${photo.color}44)`, border: "1.5px solid #eef1f8", transition: "all 0.25s ease", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = `0 12px 28px ${photo.color}30`; e.currentTarget.style.borderColor = photo.color; e.currentTarget.querySelector(".overlay").style.opacity = "1"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.querySelector(".overlay").style.opacity = "0"; }}
                    >
                      <div style={{ fontSize: "48px", marginBottom: "12px" }}>{photo.emoji}</div>
                      <p style={{ fontSize: "15px", fontWeight: 600, color: photo.color, textAlign: "center", padding: "0 16px" }}>{photo.title}</p>
                      <div style={{ position: "absolute", top: "12px", left: "12px", padding: "3px 10px", borderRadius: "999px", background: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 700, color: photo.color, border: `1px solid ${photo.color}33` }}>{wingMeta[photo.wing].label}</div>
                      <div style={{ position: "absolute", top: "12px", right: "12px", padding: "3px 10px", borderRadius: "999px", background: photo.color, color: "white", fontSize: "14px", fontWeight: 700 }}>{photo.category}</div>
                      <div className="overlay" style={{ position: "absolute", inset: 0, background: "rgba(13,27,62,0.6)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.25s ease", borderRadius: "12px" }}>
                        <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🔍</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 4. VIDEO SECTION — 3D Carousel ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.4)", color: "#e8420a", background: "rgba(232,66,10,0.08)" }}>🎥 Videos</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              Watch Our <span style={{ color: "#e8420a" }}>Stories</span>
            </h2>
            <p style={{ color: "rgba(13,27,62,0.45)", fontSize: "14px", marginTop: "8px" }}>Center card plays • Use arrows to browse</p>
          </div>
          <ReelCarousel videos={videos} />
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {activePhoto && (
        <div onClick={closeLightbox} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <button onClick={closeLightbox} style={{ position: "fixed", top: "20px", right: "20px", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "white", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}> ✕ </button>
          <div style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 600, background: "rgba(255,255,255,0.1)", padding: "6px 16px", borderRadius: "999px", backdropFilter: "blur(8px)" }}>
            {lightbox + 1} / {filtered.length}
          </div>
          <button onClick={prevPhoto} style={{ position: "fixed", left: "20px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}> ‹ </button>
          <button onClick={nextPhoto} style={{ position: "fixed", right: "20px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}> › </button>
          <div onClick={e => e.stopPropagation()} style={{ background: "white", borderRadius: "24px", maxWidth: "520px", width: "100%", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.6)", animation: "popIn 0.25s ease" }}>
            <div style={{ height: "320px", background: `linear-gradient(135deg, ${activePhoto.color}20, ${activePhoto.color}45)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ fontSize: "88px", filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))" }}>{activePhoto.emoji}</div>
              <div style={{ position: "absolute", top: "14px", left: "14px", padding: "4px 12px", borderRadius: "999px", background: "rgba(255,255,255,0.92)", fontSize: "13px", fontWeight: 700, color: activePhoto.color, border: `1px solid ${activePhoto.color}33` }}>{wingMeta[activePhoto.wing].label}</div>
              <div style={{ position: "absolute", top: "14px", right: "14px", padding: "4px 12px", borderRadius: "999px", background: activePhoto.color, color: "white", fontSize: "13px", fontWeight: 700 }}>{activePhoto.category}</div>
            </div>
            <div style={{ padding: "24px 28px 28px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 800, color: "#0d1b3e", marginBottom: "16px", lineHeight: 1.3 }}>{activePhoto.title}</h3>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {filtered.map((_, i) => (
                  <button key={i} onClick={() => setLightbox(i)} style={{ width: i === lightbox ? "20px" : "8px", height: "8px", borderRadius: "999px", background: i === lightbox ? activePhoto.color : "#e2e8f0", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }} />
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @keyframes popIn {
              from { opacity: 0; transform: scale(0.92); }
              to   { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}

    </div>
  );
};

export default Gallery;
