import { COMPANY_PROFILE, COMPANY_TEXT } from "../config/companyProfile";

function VideoSection() {
  return (
    <section className="bg-white py-14 px-5 md:px-20 fade-in">
      <div className="max-w-[1180px] mx-auto">

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "48px", alignItems: "start" }}>

          {/* LEFT â€” Director heading + Video */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)", marginBottom: "14px" }}>
                ðŸŽ¥ From Our Leaders
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.4vw, 34px)", color: "#0d1b3e", lineHeight: 1.2, marginBottom: "10px" }}>
                A Word from Our Director
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75 }}>
                Hear directly from our leadership about our vision and commitment to your success
              </p>
            </div>

            {/* YouTube Video â€” directly below heading */}
            <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", aspectRatio: "16/9", boxShadow: "0 12px 40px rgba(13,27,62,0.15)" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/eD2-DaF1zAM?si=H4Shy2_Vs-JOOuPl"
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>

          {/* RIGHT â€” Trust heading + description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)", marginBottom: "14px" }}>
                ðŸ™ Our Trust
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.4vw, 34px)", color: "#0d1b3e", lineHeight: 1.2, marginBottom: "10px" }}>
                Bhagwan Parshuram <span style={{ color: "#e8420a" }}>Education & Charitable Trust</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75 }}>
                Founded with a vision to provide quality education and defence training to the youth of India. Our trust has been shaping futures and serving society {COMPANY_TEXT.sinceFounded}
                .
              </p>
            </div>

            {/* Divider */}
            <div style={{ width: "48px", height: "4px", borderRadius: "2px", background: "#e8420a" }} />

            {/* Extra trust description */}
            <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.85 }}>
              We are governed by <strong style={{ color: "#0d1b3e" }}>{COMPANY_PROFILE.trustName}</strong> — a registered trust committed to uplifting society through quality education and character-building {COMPANY_TEXT.sinceFounded}.
            </p>
            <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.85 }}>
              Based in {COMPANY_PROFILE.city}, our mission is to make world-class education and defence training accessible to every child, regardless of background.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VideoSection;
