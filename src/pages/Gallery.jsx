import { useState, useEffect } from "react";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { COMPANY_TEXT } from "../config/companyProfile";
import { useLanguage } from "../i18n/LanguageProvider";

function getHeroSlides(lang) {
  if (lang === "hi") {
    return [
      {
        img: IMAGE_PATHS.gallery.hero.slide1,
        imgPos: "center top",
        accent: "#e8420a",
        type: "stats",
        tag: "📸 गैलरी",
        title: "हमारे पल,",
        highlight: "हमारी यादें",
        title2: "",
        sub: "Sniper Group की उपलब्धियां, कार्यक्रम और प्रेरक क्षणों की झलक।",
        stats: [
          { val: COMPANY_TEXT.yearsPlus, lab: "यादों के वर्ष" },
          { val: "3", lab: "विंग्स" },
          { val: "1,200+", lab: "डिफेन्स चयन" },
          { val: "5,000+", lab: "छात्र" },
        ],
        btn: "गैलरी देखें",
        link: "/gallery",
      },
      {
        img: IMAGE_PATHS.gallery.hero.slide2,
        imgPos: "center",
        accent: "#10b981",
        type: "stats",
        tag: "🎖️ कार्यक्रम और समारोह",
        title: "हर वर्ष",
        highlight: "उत्कृष्टता",
        title2: "का उत्सव",
        sub: "NDA चयन से लेकर वार्षिक समारोह तक, हर उपलब्धि को गर्व से संजोया गया है।",
        stats: [
          { val: "50+", lab: "आयोजित कार्यक्रम" },
          { val: "100+", lab: "समारोह" },
          { val: COMPANY_TEXT.yearsPlus, lab: "वर्ष" },
          { val: "3", lab: "विंग्स" },
        ],
        btn: "इवेंट्स देखें",
        link: "/gallery",
      },
      {
        img: IMAGE_PATHS.gallery.hero.slide3,
        imgPos: "center",
        accent: "#7c3aed",
        type: "stats",
        tag: "🏆 उपलब्धियां",
        title: "गर्व के",
        highlight: "क्षण",
        title2: "और यादें",
        sub: "बोर्ड टॉपर्स, JEE/NEET चयन और डिफेन्स सफलता की कहानियां चित्रों में।",
        stats: [
          { val: "1,200+", lab: "डिफेन्स चयन" },
          { val: "98%", lab: "बोर्ड रिजल्ट" },
          { val: "350+", lab: "JEE/NEET क्वालिफायर" },
          { val: "5,000+", lab: "छात्र" },
        ],
        btn: "उपलब्धियां देखें",
        link: "/gallery",
      },
    ];
  }

  return [
    {
      img: IMAGE_PATHS.gallery.hero.slide1,
      imgPos: "center top",
      accent: "#e8420a",
      type: "stats",
      tag: "📸 Gallery",
      title: "Our Moments,",
      highlight: "Our Memories",
      title2: "",
      sub: "A glimpse into life at Sniper Group — achievements, events, and proud moments.",
      stats: [
        { val: COMPANY_TEXT.yearsPlus, lab: "Years of Memories" },
        { val: "3", lab: "Wings" },
        { val: "1,200+", lab: "Defence Selections" },
        { val: "5,000+", lab: "Students" },
      ],
      btn: "Explore Gallery",
      link: "/gallery",
    },
    {
      img: IMAGE_PATHS.gallery.hero.slide2,
      imgPos: "center",
      accent: "#10b981",
      type: "stats",
      tag: "🎖️ Events & Ceremonies",
      title: "Celebrating",
      highlight: "Excellence",
      title2: "Every Year",
      sub: "From NDA selections to Annual Functions — every milestone captured with pride.",
      stats: [
        { val: "50+", lab: "Events Conducted" },
        { val: "100+", lab: "Ceremonies" },
        { val: COMPANY_TEXT.yearsPlus, lab: "Years" },
        { val: "3", lab: "Wings" },
      ],
      btn: "View Events",
      link: "/gallery",
    },
    {
      img: IMAGE_PATHS.gallery.hero.slide3,
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
        { val: "98%", lab: "Board Pass Rate" },
        { val: "350+", lab: "JEE/NEET Qualifiers" },
        { val: "5,000+", lab: "Students" },
      ],
      btn: "See Achievements",
      link: "/gallery",
    },
  ];
}

const photoWings = ["Defence", "School", "Classes"];
const photoCategories = ["Events", "Achievements"];
const photoHeights = [260, 200, 220, 240, 280, 210];
const photoColors = {
  Defence: "#FF9933",
  School: "#10b981",
  Classes: "#7c3aed",
};

const photos = IMAGE_PATHS.gallery.photos.map((photoPath, index) => {
  const id = index + 1;
  const wing = photoWings[index % photoWings.length];
  const category = photoCategories[index % photoCategories.length];

  return {
    id,
    wing,
    category,
    title: `${wing} ${category} Photo ${String(id).padStart(3, "0")}`,
    color: photoColors[wing],
    height: photoHeights[index % photoHeights.length],
    photo: photoPath,
  };
});

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

const catFilters  = ["All", "Events", "Achievements"];
const PHOTOS_BATCH_SIZE = 24;

const wingMeta = {
  Defence: { color: "#FF9933", labelEn: "🛡️ Defence", labelHi: "🛡️ डिफेन्स" },
  School:  { color: "#10b981", labelEn: "📚 School",  labelHi: "📚 स्कूल"  },
  Classes: { color: "#7c3aed", labelEn: "🎓 Classes", labelHi: "🎓 क्लासेस" },
  All:     { color: "#e8420a", labelEn: "🏫 All",     labelHi: "🏫 सभी"     },
};

const uiText = {
  en: {
    exploreWings: "Explore Our Wings",
    clickWing: "Click a wing to view its full gallery",
    photos: "photos",
    wing: "Wing",
    category: "Category",
    showing: "Showing",
    of: "of",
    photo: "photo",
    photosPlural: "photos",
    backToWings: "Back to Wings",
    noPhotos: "No photos found for selected filters.",
    loadMore: "Load More Photos",
    videosTag: "🎥 Videos",
    watchStoriesA: "Watch Our",
    watchStoriesB: "Stories",
    videoHint: "Center card plays • Use arrows to browse",
    tapToPlay: "▶ Tap to Play",
  },
  hi: {
    exploreWings: "हमारी विंग्स देखें",
    clickWing: "पूरी गैलरी देखने के लिए किसी विंग पर क्लिक करें",
    photos: "फोटो",
    wing: "विंग",
    category: "कैटेगरी",
    showing: "दिखा रहे हैं",
    of: "में से",
    photo: "फोटो",
    photosPlural: "फोटो",
    backToWings: "विंग्स पर वापस जाएं",
    noPhotos: "चुने गए फिल्टर के लिए कोई फोटो नहीं मिला।",
    loadMore: "और फोटो लोड करें",
    videosTag: "🎥 वीडियो",
    watchStoriesA: "हमारी",
    watchStoriesB: "कहानियां देखें",
    videoHint: "बीच वाला कार्ड प्ले होगा • तीर से ब्राउज़ करें",
    tapToPlay: "▶ चलाने के लिए टैप करें",
  },
};

function localizeWingLabel(wing, lang) {
  return lang === "hi" ? wingMeta[wing].labelHi : wingMeta[wing].labelEn;
}

function localizeCategoryLabel(category, lang) {
  if (lang !== "hi") return category;
  return category === "Events" ? "इवेंट्स" : category === "Achievements" ? "उपलब्धियां" : "सभी";
}

function localizePhotoTitle(photo, lang) {
  if (lang !== "hi") return photo.title;
  const id = String(photo.id).padStart(3, "0");
  return `${localizeWingLabel(photo.wing, lang)} ${localizeCategoryLabel(photo.category, lang)} फोटो ${id}`;
}

// ── 3D Reel Carousel Component ──
const ReelCarousel = ({ videos, tapToPlayLabel }) => {
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
                    alt={`Sniper Group video preview ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${v.youtubeId}/default.jpg`;
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: isCenter ? 0.85 : 0.55,
                    }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: isCenter ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.5)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: isCenter ? "58px" : "42px", height: isCenter ? "58px" : "42px", borderRadius: "50%", background: isCenter ? "rgba(232,66,10,0.75)" : "rgba(255,255,255,0.08)", border: isCenter ? "1.5px solid rgba(255,255,255,0.5)" : "1.5px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", boxShadow: isCenter ? "0 0 30px rgba(232,66,10,0.5)" : "none", transition: "all 0.4s" }}>
                    <div style={{ width: 0, height: 0, borderTop: `${isCenter ? 10 : 7}px solid transparent`, borderBottom: `${isCenter ? 10 : 7}px solid transparent`, borderLeft: `${isCenter ? 18 : 13}px solid ${isCenter ? "white" : "rgba(255,255,255,0.6)"}`, marginLeft: isCenter ? "4px" : "3px" }} />
                  </div>
                  {isCenter && (
                    <div style={{ position: "absolute", bottom: "14px", left: 0, right: 0, textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                      {tapToPlayLabel}
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
  const { lang } = useLanguage();
  const t = uiText[lang] || uiText.en;
  const heroSlides = getHeroSlides(lang);
  const [cat, setCat]           = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [selectedWing, setSelectedWing] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PHOTOS_BATCH_SIZE);

  const filtered = photos.filter(p =>
    (selectedWing === null || p.wing === selectedWing) &&
    (cat  === "All" || p.category === cat)
  );

  const visiblePhotos = filtered.slice(0, visibleCount);
  const cols = [[], [], []];
  visiblePhotos.forEach((p, i) => cols[i % 3].push({ ...p, filteredIndex: i }));

  const resetGalleryState = () => {
    setVisibleCount(PHOTOS_BATCH_SIZE);
    setLightbox(null);
  };

  const handleWingSelect = (wing) => {
    setSelectedWing(wing);
    setCat("All");
    resetGalleryState();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (nextCategory) => {
    setCat(nextCategory);
    resetGalleryState();
  };

  const handleBackToWings = () => {
    setSelectedWing(null);
    setCat("All");
    resetGalleryState();
  };

  const openLightbox  = (index) => setLightbox(index);
  const closeLightbox = ()      => setLightbox(null);
  const prevPhoto     = (e)     => { if (!visiblePhotos.length) return; e.stopPropagation(); setLightbox((lightbox - 1 + visiblePhotos.length) % visiblePhotos.length); };
  const nextPhoto     = (e)     => { if (!visiblePhotos.length) return; e.stopPropagation(); setLightbox((lightbox + 1) % visiblePhotos.length); };

  useEffect(() => {
    if (lightbox === null || !visiblePhotos.length) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") setLightbox((prev) => (prev + 1) % visiblePhotos.length);
      if (e.key === "ArrowLeft")  setLightbox((prev) => (prev - 1 + visiblePhotos.length) % visiblePhotos.length);
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, visiblePhotos.length]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const activePhoto = lightbox !== null ? visiblePhotos[lightbox] : null;

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider slides={heroSlides} />
      {/* ── 2/3. WINGS CARDS (initial) or FILTERS + MASONRY GRID (after select) ── */}
      {selectedWing === null ? (
        <section style={{ background: "#f5f7fa", padding: "48px 20px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0d1b3e" }}>{t.exploreWings}</h3>
              <p style={{ color: "#64748b", marginTop: "6px" }}>{t.clickWing}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {photoWings.map((w) => {
                const rep = photos.find(p => p.wing === w) || photos[0];
                return (
                  <div key={w}
                    onClick={() => handleWingSelect(w)}
                    style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden", position: "relative", height: "260px", border: "1.5px solid #eef1f8", boxShadow: "0 8px 28px rgba(13,27,62,0.04)", transition: "transform 0.18s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <img
                      src={rep.photo}
                      alt={`${w} wing activities at Sniper Group`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,27,62,0.06) 0%, rgba(13,27,62,0.6) 100%)" }} />
                    <div style={{ position: "absolute", left: "16px", bottom: "18px", color: "white", fontSize: "20px", fontWeight: 800, textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}>{localizeWingLabel(w, lang)}</div>
                    <div style={{ position: "absolute", right: "14px", top: "14px", padding: "6px 12px", borderRadius: "999px", background: wingMeta[w].color, color: "white", fontWeight: 700 }}>{photos.filter(p => p.wing === w).length} {t.photos}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section style={{ background: "#ffffff", padding: "24px 20px", borderBottom: "1px solid #eef1f8", position: "sticky", top: 0, zIndex: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>{t.wing}:</span>
                <div style={{ padding: "6px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, border: "1.5px solid #e8420a", background: "rgba(232,66,10,0.08)", color: "#e8420a" }}>
                  {localizeWingLabel(selectedWing, lang)}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>{t.category}:</span>
                {catFilters.map((c) => (
                  <button key={c} onClick={() => handleCategoryChange(c)} style={{ padding: "6px 14px", borderRadius: "999px", cursor: "pointer", fontSize: "14px", fontWeight: 600, border: "1.5px solid", borderColor: cat === c ? "#e8420a" : "#e2e8f0", background: cat === c ? "rgba(232,66,10,0.08)" : "white", color: cat === c ? "#e8420a" : "#64748b", transition: "all 0.2s" }}>{localizeCategoryLabel(c, lang)}</button>
                ))}
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: "12px", alignItems: "center" }}>
	                <div style={{ fontSize: "14px", color: "#64748b", fontWeight: 600 }}>
	                  {t.showing} {Math.min(visibleCount, filtered.length)} {t.of} {filtered.length} {filtered.length !== 1 ? t.photosPlural : t.photo}
	                </div>
                <button onClick={handleBackToWings} style={{ padding: "8px 12px", borderRadius: "10px", background: "white", border: "1px solid #e2e8f0", cursor: "pointer", fontWeight: 700 }}>{t.backToWings}</button>
              </div>
            </div>
          </section>

          <section style={{ background: "#f5f7fa", padding: "48px 20px" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
	              {filtered.length === 0 ? (
	                <div style={{ textAlign: "center", padding: "60px", color: "#64748b", fontSize: "15px" }}>{t.noPhotos}</div>
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
	                          <img
	                            src={photo.photo}
	                            alt={photo.title}
	                            loading="lazy"
	                            decoding="async"
	                            onError={(e) => { e.currentTarget.style.display = "none"; }}
	                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
	                          />
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,27,62,0.05) 0%, rgba(13,27,62,0.72) 100%)" }} />
                          <p style={{ position: "absolute", left: "14px", right: "14px", bottom: "12px", fontSize: "14px", fontWeight: 700, color: "white", lineHeight: 1.4, textShadow: "0 2px 6px rgba(0,0,0,0.45)" }}>{localizePhotoTitle(photo, lang)}</p>
                          <div style={{ position: "absolute", top: "12px", left: "12px", padding: "3px 10px", borderRadius: "999px", background: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 700, color: photo.color, border: `1px solid ${photo.color}33` }}>{localizeWingLabel(photo.wing, lang)}</div>
                          <div style={{ position: "absolute", top: "12px", right: "12px", padding: "3px 10px", borderRadius: "999px", background: photo.color, color: "white", fontSize: "14px", fontWeight: 700 }}>{localizeCategoryLabel(photo.category, lang)}</div>
                          <div className="overlay" style={{ position: "absolute", inset: 0, background: "rgba(13,27,62,0.6)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.25s ease", borderRadius: "12px" }}>
                            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🔍</div>
                          </div>
                        </div>
                      ))}
                    </div>
	                  ))}
	                </div>
	              )}
	              {visibleCount < filtered.length && (
	                <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
	                  <button
	                    onClick={() => setVisibleCount((prev) => prev + PHOTOS_BATCH_SIZE)}
	                    style={{
	                      padding: "10px 18px",
	                      borderRadius: "999px",
	                      border: "1px solid #e2e8f0",
	                      background: "white",
	                      color: "#0d1b3e",
	                      fontSize: "14px",
	                      fontWeight: 700,
	                      cursor: "pointer",
	                    }}
	                  >
	                    {t.loadMore}
	                  </button>
	                </div>
	              )}
	            </div>
	          </section>
        </>
      )}

      {/* ── 4. VIDEO SECTION — 3D Carousel ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.4)", color: "#e8420a", background: "rgba(232,66,10,0.08)" }}>{t.videosTag}</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              {t.watchStoriesA} <span style={{ color: "#e8420a" }}>{t.watchStoriesB}</span>
            </h2>
            <p style={{ color: "rgba(13,27,62,0.45)", fontSize: "14px", marginTop: "8px" }}>{t.videoHint}</p>
          </div>
          <ReelCarousel videos={videos} tapToPlayLabel={t.tapToPlay} />
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {activePhoto && (
        <div onClick={closeLightbox} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <button onClick={closeLightbox} style={{ position: "fixed", top: "20px", right: "20px", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "white", fontSize: "20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}> ✕ </button>
          <div style={{ position: "fixed", top: "24px", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 600, background: "rgba(255,255,255,0.1)", padding: "6px 16px", borderRadius: "999px", backdropFilter: "blur(8px)" }}>
	            {lightbox + 1} / {visiblePhotos.length}
          </div>
          <button onClick={prevPhoto} style={{ position: "fixed", left: "20px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}> ‹ </button>
          <button onClick={nextPhoto} style={{ position: "fixed", right: "20px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}> › </button>
          <div onClick={e => e.stopPropagation()} style={{ background: "white", borderRadius: "24px", maxWidth: "520px", width: "100%", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.6)", animation: "popIn 0.25s ease" }}>
            <div style={{ height: "320px", background: `linear-gradient(135deg, ${activePhoto.color}20, ${activePhoto.color}45)`, position: "relative" }}>
	              <img
	                src={activePhoto.photo}
	                alt={activePhoto.title}
	                loading="lazy"
	                decoding="async"
	                onError={(e) => { e.currentTarget.style.display = "none"; }}
	                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
	              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,27,62,0.15) 0%, rgba(13,27,62,0.55) 100%)" }} />
              <div style={{ position: "absolute", top: "14px", left: "14px", padding: "4px 12px", borderRadius: "999px", background: "rgba(255,255,255,0.92)", fontSize: "13px", fontWeight: 700, color: activePhoto.color, border: `1px solid ${activePhoto.color}33` }}>{localizeWingLabel(activePhoto.wing, lang)}</div>
              <div style={{ position: "absolute", top: "14px", right: "14px", padding: "4px 12px", borderRadius: "999px", background: activePhoto.color, color: "white", fontSize: "13px", fontWeight: 700 }}>{localizeCategoryLabel(activePhoto.category, lang)}</div>
            </div>
            <div style={{ padding: "24px 28px 28px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 800, color: "#0d1b3e", marginBottom: "16px", lineHeight: 1.3 }}>{localizePhotoTitle(activePhoto, lang)}</h3>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
	                {visiblePhotos.map((_, i) => (
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

