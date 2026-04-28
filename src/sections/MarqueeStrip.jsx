import { COMPANY_TEXT } from "../config/companyProfile";

const items = [
  { icon: "DEF", text: "NDA Batch Starting April 15 - Limited Seats", badge: "New", badgeColor: "bg-orange" },
  { icon: "AIM", text: "1,200+ Defence Selections in 2024", badge: "", badgeColor: "" },
  { icon: "SCH", text: "CBSE School Admissions Open - Nursery to Class 8", badge: "Open", badgeColor: "bg-green2" },
  { icon: "CLS", text: "IIT JEE / NEET Dropper Batch - Enroll Now", badge: "Hot", badgeColor: "bg-red-600" },
  { icon: "TOP", text: "98% Board Result Rate - 2024 Batch", badge: "", badgeColor: "" },
  { icon: "STAR", text: `${COMPANY_TEXT.yearsPlus} Years of Excellence in Education`, badge: "", badgeColor: "" },
  { icon: "CALL", text: "Call / WhatsApp: +91 7060155711", badge: "", badgeColor: "" },
  { icon: "SSB", text: "SSB Interview Prep by Ex-Army Officers", badge: "", badgeColor: "" },
  { icon: "GRP", text: "5,000+ Students Trained Across All Wings", badge: "", badgeColor: "" },
];

const doubled = [...items, ...items];

function MarqueeStrip() {
  return (
    <div
      style={{
        background: "#0d1b3e",
        borderTop: "3px solid #e8420a",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          zIndex: 10,
          background: "linear-gradient(to right, #0d1b3e, transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          zIndex: 10,
          background: "linear-gradient(to left, #0d1b3e, transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 28px",
              whiteSpace: "nowrap",
              color: "white",
              fontSize: "12.5px",
              fontWeight: 600,
              borderRight: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "10px", letterSpacing: "0.8px", opacity: 0.8 }}>{item.icon}</span>
            <span>{item.text}</span>
            {item.badge && (
              <span
                style={{
                  background:
                    item.badgeColor === "bg-orange"
                      ? "#e8420a"
                      : item.badgeColor === "bg-green2"
                        ? "#10b981"
                        : "#dc2626",
                  color: "white",
                  padding: "1px 7px",
                  borderRadius: "8px",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {item.badge}
              </span>
            )}
            <span style={{ color: "rgba(255,153,51,0.5)", marginLeft: "4px" }}>*</span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default MarqueeStrip;
