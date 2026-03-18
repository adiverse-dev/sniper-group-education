import { useState } from "react";

const infoCards = [
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91 7060155711"],
    sub: "Mon–Sat, 8AM – 7PM",
    color: "#e8420a",
    bg: "#fff5f0",
    action: { label: "Call Now", href: "tel:+917060155711" },
  },
  {
    icon: "💬",
    title: "WhatsApp",
    lines: ["+91 7060155711"],
    sub: "Quick replies within 30 mins",
    color: "#10b981",
    bg: "#f0fdf4",
    action: { label: "Chat Now", href: "https://wa.me/917060155711" },
  },
  {
    icon: "📍",
    title: "Our Location",
    lines: ["Sniper Group of Education", "Uttarakhand, India"],
    sub: "Visit us Mon–Sat",
    color: "#7c3aed",
    bg: "#faf5ff",
    action: { label: "Get Directions", href: "https://maps.google.com" },
  },
  {
    icon: "🕐",
    title: "Office Timings",
    lines: ["Mon – Sat: 8:00 AM – 7:00 PM", "Sunday: 10:00 AM – 2:00 PM"],
    sub: "We're here to help",
    color: "#FF9933",
    bg: "#fff8f0",
    action: null,
  },
];

const Contact = () => {
  const [form, setForm]       = useState({ name: "", phone: "", email: "", wing: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field, val) {
    setForm(f => ({ ...f, [field]: val }));
  }

  function handleSubmit() {
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  }

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: "10px",
    border: "1.5px solid #e2e8f0", fontSize: "14px",
    background: "white", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s", color: "#0d1b3e",
  };

  const labelStyle = {
    fontSize: "12.5px", fontWeight: 600, color: "#0d1b3e",
    display: "block", marginBottom: "6px",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>

      {/* ── 1. HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #0d1b3e 0%, #1a3260 60%, #0d1b3e 100%)",
        padding: "90px 20px 80px", position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "44px 44px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(232,66,10,0.12), transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
          <span style={{
            display: "inline-block", padding: "4px 16px", borderRadius: "999px",
            fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
            textTransform: "uppercase", marginBottom: "18px",
            border: "1px solid rgba(232,66,10,0.5)", color: "#ff6b35", background: "rgba(232,66,10,0.12)",
          }}>
            📞 Contact Us
          </span>
          <h1 style={{
            fontFamily: "Georgia, serif", fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 50px)",
            color: "white", lineHeight: 1.15, marginBottom: "16px",
          }}>
            We're Here to{" "}
            <span style={{ color: "#ff6b35" }}>Help You!</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
            Have questions about admissions, fees, or courses? Reach out — our team is ready to guide you.
          </p>
        </div>
      </section>

      {/* ── 2. INFO CARDS ── */}
      <section style={{ background: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
            {infoCards.map((card, i) => (
              <div key={i} style={{
                background: card.bg, borderRadius: "16px",
                padding: "28px 24px", border: `1.5px solid ${card.color}22`,
                transition: "all 0.25s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 28px ${card.color}18`; e.currentTarget.style.borderColor = card.color; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = `${card.color}22`; }}
              >
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px",
                  background: "white", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "24px", marginBottom: "16px",
                  boxShadow: `0 4px 12px ${card.color}20`,
                }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "8px" }}>
                  {card.title}
                </h3>
                {card.lines.map((l, j) => (
                  <p key={j} style={{ fontSize: "14px", fontWeight: 600, color: card.color, marginBottom: "2px" }}>{l}</p>
                ))}
                <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px", marginBottom: card.action ? "16px" : "0" }}>
                  {card.sub}
                </p>
                {card.action && (
                  <a href={card.action.href} target={card.action.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "8px 16px", borderRadius: "999px",
                      background: card.color, color: "white",
                      fontSize: "12px", fontWeight: 700, textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >
                    {card.action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CONTACT FORM ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "999px",
              fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
              textTransform: "uppercase", marginBottom: "12px",
              border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)",
            }}>
              ✉️ Send a Message
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              Drop Us a <span style={{ color: "#e8420a" }}>Message</span>
            </h2>
          </div>

          <div style={{
            background: "white", borderRadius: "20px", padding: "40px",
            border: "1.5px solid #eef1f8", boxShadow: "0 8px 32px rgba(13,27,62,0.06)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "56px", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0d1b3e", marginBottom: "8px", fontFamily: "Georgia, serif" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "24px", lineHeight: 1.7 }}>
                  Thank you <strong>{form.name}</strong>! We'll get back to you within 24 hours.
                </p>
                <a href="tel:+917060155711" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "linear-gradient(135deg, #e8420a, #ff6b35)",
                  color: "white", padding: "12px 24px", borderRadius: "999px",
                  fontSize: "14px", fontWeight: 700, textDecoration: "none",
                }}>
                  📞 Call Us — +91 7060155711
                </a>
              </div>
            ) : (
              <div>
                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" placeholder="Your full name" value={form.name}
                      onChange={e => handleChange("name", e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#e8420a"}
                      onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                      onChange={e => handleChange("phone", e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#e8420a"}
                      onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={labelStyle}>Email (Optional)</label>
                    <input type="email" placeholder="your@email.com" value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#e8420a"}
                      onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Interested Wing</label>
                    <select value={form.wing} onChange={e => handleChange("wing", e.target.value)}
                      style={{ ...inputStyle, color: form.wing ? "#0d1b3e" : "#94a3b8" }}
                      onFocus={e => e.target.style.borderColor = "#e8420a"}
                      onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                    >
                      <option value="">Select Wing</option>
                      <option value="defence">🛡️ Defence Academy</option>
                      <option value="school">📚 Public School</option>
                      <option value="classes">🎓 Sniper Classes</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={labelStyle}>Your Message</label>
                  <textarea placeholder="Write your message or query here..." value={form.message}
                    onChange={e => handleChange("message", e.target.value)}
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                    onFocus={e => e.target.style.borderColor = "#e8420a"}
                    onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>

                <button onClick={handleSubmit} style={{
                  width: "100%", padding: "14px",
                  background: form.name && form.phone
                    ? "linear-gradient(135deg, #e8420a, #ff6b35)"
                    : "#e2e8f0",
                  color: form.name && form.phone ? "white" : "#94a3b8",
                  border: "none", borderRadius: "10px",
                  fontSize: "15px", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.2s ease",
                }}>
                  Send Message 📩
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 4. MAP ── */}
      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "999px",
              fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px",
              textTransform: "uppercase", marginBottom: "12px",
              border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)",
            }}>
              📍 Find Us
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.6vw, 32px)", color: "#0d1b3e" }}>
              Our <span style={{ color: "#e8420a" }}>Location</span>
            </h2>
          </div>

          {/* Card */}
          <div style={{
            background: "white", borderRadius: "24px",
            overflow: "hidden", border: "1.5px solid #eef1f8",
            boxShadow: "0 16px 48px rgba(13,27,62,0.08)",
          }}>
            {/* Google Maps iframe */}
            <iframe
              title="Sniper Group of Education Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.352743352885!2d77.74708127530361!3d29.006545175462637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c71309f09177d%3A0x1bee640d4adb5222!2sSNIPER%20DEFENCE%20ACADEMY!5e0!3m2!1sen!2sin!4v1773216540508!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Address strip */}
            <div style={{
              padding: "28px 32px",
              background: "white",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: "20px",
              borderTop: "1px solid #f1f5f9",
            }}>
              {/* Left — address info */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
                  background: "rgba(232,66,10,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "24px",
                }}>
                  📍
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "4px" }}>
                    Sniper Group of Education
                  </h4>
                  <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0 }}>
                    GP-4, Near PNB, Divider Road, Ganganagar, Meerut City (U.P)
                  </p>
                </div>
              </div>

              {/* Right — info chips + button */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "8px 14px", borderRadius: "10px",
                  background: "#f8fafc", border: "1px solid #e2e8f0",
                  fontSize: "12.5px", fontWeight: 600, color: "#0d1b3e",
                }}>
                  🕐 Mon–Sat: 8AM – 7PM
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "8px 14px", borderRadius: "10px",
                  background: "#f8fafc", border: "1px solid #e2e8f0",
                  fontSize: "12.5px", fontWeight: 600, color: "#0d1b3e",
                }}>
                  📞 +91 7060155711
                </div>
                <a
                  href="https://www.google.com/maps/search/GP-4+Near+PNB+Divider+Road+Ganganagar+Meerut+Uttar+Pradesh"
                  target="_blank" rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "linear-gradient(135deg, #e8420a, #ff6b35)",
                    color: "white", padding: "10px 20px", borderRadius: "999px",
                    fontSize: "13px", fontWeight: 700, textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(232,66,10,0.3)",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;