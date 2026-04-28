import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

function preloadImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve();
      return;
    }

    const img = new Image();
    img.decoding = "async";

    const finish = async () => {
      if (typeof img.decode === "function") {
        try {
          await img.decode();
        } catch {
          // decode failures should not block rendering
        }
      }
      resolve();
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = src;

    if (img.complete) {
      finish();
    }
  });
}

function HeroSlider({ slides, waitForFirstSlide = false }) {
  const total = slides?.length || 0;
  const [cur, setCur] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [firstSlideLoaded, setFirstSlideLoaded] = useState(false);

  const curRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);

  const imageSources = useMemo(
    () => (slides || []).map((slide) => slide.img).filter(Boolean),
    [slides]
  );
  const needsFirstSlideWait = waitForFirstSlide && Boolean(imageSources[0]);
  const isReady = !needsFirstSlideWait || firstSlideLoaded;

  useEffect(() => {
    curRef.current = cur;
  }, [cur]);

  useEffect(() => {
    isTransitioningRef.current = transitioning;
  }, [transitioning]);

  useEffect(() => {
    if (!needsFirstSlideWait) {
      return;
    }

    let cancelled = false;
    preloadImage(imageSources[0]).then(() => {
      if (!cancelled) setFirstSlideLoaded(true);
    });

    const fallbackTimer = window.setTimeout(() => {
      if (!cancelled) setFirstSlideLoaded(true);
    }, 2500);

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
    };
  }, [needsFirstSlideWait, imageSources]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const goTo = useCallback((n) => {
    if (!total || isTransitioningRef.current) return;

    const nextIndex = ((n % total) + total) % total;
    if (nextIndex === curRef.current) return;

    setTransitioning(true);
    setCur(nextIndex);
    curRef.current = nextIndex;

    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
    }

    transitionTimerRef.current = window.setTimeout(() => {
      setTransitioning(false);
    }, 350);
  }, [total]);

  const prev = useCallback(() => {
    goTo(curRef.current - 1);
  }, [goTo]);

  const next = useCallback(() => {
    goTo(curRef.current + 1);
  }, [goTo]);

  useEffect(() => {
    if (total <= 1) return undefined;
    const timer = window.setInterval(next, 5000);
    return () => window.clearInterval(timer);
  }, [next, total]);

  if (!slides || total === 0) {
    return null;
  }

  if (!isReady) {
    return (
      <div
        style={{
          width: "100%",
          height: "420px",
          background: "linear-gradient(120deg, #0d1b3e 0%, #1a3260 45%, #0d1b3e 100%)",
        }}
        aria-hidden="true"
      />
    );
  }

  const s = slides[cur];

  return (
    <div style={{ position: "relative", width: "100%", height: "420px", overflow: "hidden" }}>
      {slides.map((slide, i) => {
        const isPrev = i === (cur - 1 + total) % total;
        const isNext = i === (cur + 1) % total;
        const isActive = i === cur;

        if (!isActive && !isPrev && !isNext) {
          return null;
        }

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              transition: "opacity 0.6s ease",
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 1 : 0,
              willChange: "opacity",
            }}
          >
            {slide.img && (
              <img
                src={slide.img}
                alt={
                  slide.alt ||
                  slide.heading ||
                  [slide.title, slide.highlight, slide.title2].filter(Boolean).join(" ") ||
                  slide.tag ||
                  "Sniper Group banner image"
                }
                loading={isActive ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "auto"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: slide.imgPos || "center",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: slide.img
                  ? "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.18) 100%)"
                  : slide.bg || "linear-gradient(135deg, #0d1b3e, #1a3260)",
              }}
            />
          </div>
        );
      })}

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
        className="hs-content"
      >
        {s.tag && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: `${s.accent || "#FF9933"}22`,
              border: `1.5px solid ${s.accent || "#FF9933"}`,
              color: s.accent || "#FF9933",
              fontSize: "11px",
              fontWeight: 700,
              padding: "5px 14px",
              borderRadius: "999px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              width: "fit-content",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: s.accent || "#FF9933",
                flexShrink: 0,
              }}
            />
            {s.tag}
          </div>
        )}

        <h2
          style={{
            color: "#fff",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(26px, 3.8vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 12px",
            maxWidth: "620px",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
          }}
        >
          {s.title && <>{s.title} </>}
          {s.highlight && <span style={{ color: s.accent || "#FF9933" }}>{s.highlight}</span>}
          {s.title2 && (
            <>
              <br />
              {s.title2}
            </>
          )}
          {!s.title && s.heading}
        </h2>

        {s.sub && (
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "15px",
              lineHeight: 1.75,
              marginBottom: "20px",
              maxWidth: "520px",
              letterSpacing: "0.2px",
            }}
          >
            {s.sub}
          </p>
        )}

        {s.pills && s.pills.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "26px" }}>
            {s.pills.map((p) => (
              <span
                key={p}
                style={{
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {s.stats && s.stats.length > 0 && (
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginBottom: "26px" }}>
            {s.stats.map((st) => (
              <div key={st.lab}>
                <div style={{ fontSize: "20px", fontWeight: 800, color: s.accent || "#FF9933" }}>
                  {st.val}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.55)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {st.lab}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="hs-cta" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {s.link && (
            <Link
              to={s.link}
              style={{
                padding: "11px 26px",
                borderRadius: "8px",
                background: s.accent || "#FF9933",
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 700,
                boxShadow: `0 4px 16px ${s.accent || "#FF9933"}44`,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {s.btn || "Explore Courses"} {"\u2192"}
            </Link>
          )}
          <Link
            to="/contact"
            style={{
              padding: "11px 24px",
              borderRadius: "8px",
              background: "transparent",
              color: "white",
              border: "1.5px solid rgba(255,255,255,0.6)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Apply Now
          </Link>
        </div>
      </div>

      <button
        onClick={prev}
        className="hs-arrow"
        aria-label="Previous Slide"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.45)",
          border: "1.5px solid rgba(255,255,255,0.35)",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {"\u2039"}
      </button>

      <button
        onClick={next}
        className="hs-arrow"
        aria-label="Next Slide"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.45)",
          border: "1.5px solid rgba(255,255,255,0.35)",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {"\u203A"}
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === cur ? "22px" : "8px",
              height: "8px",
              borderRadius: "999px",
              background: i === cur ? s.accent || "#FF9933" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>

      <style>{`
        .hs-content { transition: opacity 0.35s ease, transform 0.35s ease; }
        .hs-arrow:hover { background: rgba(0,0,0,0.7) !important; }
        @media (max-width: 768px) {
          .hs-content { padding: 0 24px !important; }
          .hs-cta { flex-direction: column !important; }
          .hs-cta a { text-align: center !important; justify-content: center !important; }
        }
      `}</style>
    </div>
  );
}

export default HeroSlider;
