import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

const ACADEMY_MAP_URL =
  "https://www.google.com/maps/place/SNIPER+DEFENCE+ACADEMY/@29.01642,77.7617811,17z/data=!4m15!1m8!3m7!1s0x390c71309f09177d:0x1bee640d4adb5222!2sSNIPER+DEFENCE+ACADEMY!8m2!3d29.01642!4d77.7617811!10e1!16s%2Fg%2F11ql64p14y!3m5!1s0x390c71309f09177d:0x1bee640d4adb5222!8m2!3d29.01642!4d77.7617811!16s%2Fg%2F11ql64p14y!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D";
const ACADEMY_MAP_EMBED_URL = "https://www.google.com/maps?q=29.01642,77.7617811&z=17&output=embed";
const ACADEMY_ADDRESS = "NH 34, Rajpura Road, Mawana Rd, opposite HP Petrol Pump, Meerut, Uttar Pradesh 250001";
const CONTACT_RECEIVER_EMAIL = "aditya.finofits@gmail.com";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const isValidUuid = (value) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value.trim());

const content = {
  en: {
    heroTag: "Contact Us",
    heroTitleA: "We Are Here to",
    heroTitleB: "Help You",
    heroSub: "Have questions about admissions, fees or courses? Reach out and our team will guide you.",
    cards: {
      call: { title: "Call Us", sub: "Mon-Sat, 8:00 AM - 7:00 PM", action: "Call Now" },
      whatsapp: { title: "WhatsApp", sub: "Quick replies within 30 minutes", action: "Chat Now" },
      location: { title: "Our Location", sub: "Visit us Mon-Sat", action: "Get Directions" },
      timing: { title: "Office Timings", sub: "We are here to help" },
    },
    formTag: "Send a Message",
    formTitleA: "Drop Us a",
    formTitleB: "Message",
    labels: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      wing: "Select Wing",
      message: "Message",
    },
    placeholders: {
      name: "Enter your full name",
      phone: "Enter your phone number",
      email: "Enter your email address",
      wing: "Choose your preferred wing",
      message: "Write your query",
    },
    wingOptions: {
      defence: "Defence Academy",
      school: "Public School",
      classes: "Sniper Classes",
    },
    submit: "Send Message",
    submitting: "Sending...",
    successTitle: "Message Sent",
    successBody: "Thank you, {name}. Our team will contact you within 24 hours.",
    callNow: "Call Us - +91 7060155711",
    mapTag: "Campus Location",
    mapTitleA: "Visit",
    mapTitleB: "Our Campus",
    mapSub: "Sniper Group of Education campus in Meerut.",
    errors: {
      name: "Please enter your full name.",
      phone: "Please enter a valid phone number.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email address.",
      configMissing: `Contact form is not configured. Create a Web3Forms key for ${CONTACT_RECEIVER_EMAIL} and set VITE_WEB3FORMS_ACCESS_KEY.`,
      keyInvalid: `Invalid VITE_WEB3FORMS_ACCESS_KEY format. Use a valid UUID key created for ${CONTACT_RECEIVER_EMAIL}.`,
      submitFailed: "Unable to send message. Please try again.",
    },
  },
  hi: {
    heroTag: "संपर्क करें",
    heroTitleA: "हम आपकी",
    heroTitleB: "मदद के लिए हैं",
    heroSub: "एडमिशन, फीस या कोर्स से जुड़ा कोई सवाल हो तो हमसे संपर्क करें। हमारी टीम आपकी गाइड करेगी।",
    cards: {
      call: { title: "कॉल करें", sub: "सोम-शनि, सुबह 8:00 से शाम 7:00", action: "अभी कॉल करें" },
      whatsapp: { title: "व्हाट्सऐप", sub: "30 मिनट के भीतर जवाब", action: "चैट करें" },
      location: { title: "हमारा पता", sub: "सोम-शनि विजिट करें", action: "दिशा देखें" },
      timing: { title: "ऑफिस टाइमिंग", sub: "हम सहायता के लिए उपलब्ध हैं" },
    },
    formTag: "मैसेज भेजें",
    formTitleA: "अपना",
    formTitleB: "मैसेज भेजें",
    labels: {
      name: "पूरा नाम",
      phone: "मोबाइल नंबर",
      email: "ईमेल पता",
      wing: "विंग चुनें",
      message: "संदेश",
    },
    placeholders: {
      name: "अपना पूरा नाम लिखें",
      phone: "अपना मोबाइल नंबर लिखें",
      email: "अपना ईमेल लिखें",
      wing: "अपनी पसंद की विंग चुनें",
      message: "अपना सवाल लिखें",
    },
    wingOptions: {
      defence: "डिफेन्स अकादमी",
      school: "पब्लिक स्कूल",
      classes: "स्नाइपर क्लासेस",
    },
    submit: "मैसेज भेजें",
    submitting: "भेजा जा रहा है...",
    successTitle: "मैसेज भेज दिया गया",
    successBody: "धन्यवाद, {name}. हमारी टीम 24 घंटे के अंदर आपसे संपर्क करेगी।",
    callNow: "कॉल करें - +91 7060155711",
    mapTag: "कैंपस लोकेशन",
    mapTitleA: "हमारे",
    mapTitleB: "कैंपस आएं",
    mapSub: "Sniper Group of Education का मेरठ स्थित कैंपस।",
    errors: {
      name: "कृपया अपना पूरा नाम लिखें।",
      phone: "कृपया सही मोबाइल नंबर लिखें।",
      emailRequired: "ईमेल जरूरी है।",
      emailInvalid: "कृपया सही ईमेल पता लिखें।",
      configMissing: `Contact form configured नहीं है। ${CONTACT_RECEIVER_EMAIL} के लिए Web3Forms key बनाकर VITE_WEB3FORMS_ACCESS_KEY सेट करें।`,
      keyInvalid: `VITE_WEB3FORMS_ACCESS_KEY format गलत है। ${CONTACT_RECEIVER_EMAIL} के लिए valid UUID key उपयोग करें।`,
      submitFailed: "मैसेज भेजने में समस्या आई। कृपया दोबारा कोशिश करें।",
    },
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang] || content.en;

  const [form, setForm] = useState({ name: "", phone: "", email: "", wing: "", message: "" });
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const infoCards = useMemo(
    () => [
      {
        key: "call",
        title: t.cards.call.title,
        lines: ["+91 7060155711"],
        sub: t.cards.call.sub,
        color: "#e8420a",
        bg: "#fff5f0",
        action: { label: t.cards.call.action, href: "tel:+917060155711" },
      },
      {
        key: "whatsapp",
        title: t.cards.whatsapp.title,
        lines: ["+91 7060155711"],
        sub: t.cards.whatsapp.sub,
        color: "#10b981",
        bg: "#f0fdf4",
        action: { label: t.cards.whatsapp.action, href: "https://wa.me/917060155711" },
      },
      {
        key: "location",
        title: t.cards.location.title,
        lines: ["Sniper Defence Academy", ACADEMY_ADDRESS],
        sub: t.cards.location.sub,
        color: "#7c3aed",
        bg: "#faf5ff",
        action: { label: t.cards.location.action, href: ACADEMY_MAP_URL },
      },
      {
        key: "timing",
        title: t.cards.timing.title,
        lines: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: 10:00 AM - 2:00 PM"],
        sub: t.cards.timing.sub,
        color: "#FF9933",
        bg: "#fff8f0",
      },
    ],
    [t]
  );

  const isFormValid =
    form.name.trim().length >= 2 &&
    form.phone.replace(/\D/g, "").length >= 10 &&
    isValidEmail(form.email);

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1.5px solid #e2e8f0",
    fontSize: "14px",
    background: "white",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    color: "#0d1b3e",
  };

  const labelStyle = {
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#0d1b3e",
    display: "block",
    marginBottom: "6px",
  };

  function handleChange(field, value) {
    if (field === "name" || field === "phone" || field === "email") {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    setSubmitError("");
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const phoneDigits = form.phone.replace(/\D/g, "");
    const email = form.email.trim();
    const nextErrors = { name: "", phone: "", email: "" };

    if (name.length < 2) {
      nextErrors.name = t.errors.name;
    }

    if (phoneDigits.length < 10) {
      nextErrors.phone = t.errors.phone;
    }

    if (!email) {
      nextErrors.email = t.errors.emailRequired;
    } else if (!isValidEmail(email)) {
      nextErrors.email = t.errors.emailInvalid;
    }

    if (nextErrors.name || nextErrors.phone || nextErrors.email) {
      setErrors(nextErrors);
      return;
    }

    const accessKey = (WEB3FORMS_ACCESS_KEY || "").trim();

    if (!accessKey) {
      setSubmitError(t.errors.configMissing);
      return;
    }

    if (!isValidUuid(accessKey)) {
      setSubmitError(t.errors.keyInvalid);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Contact Form Submission from ${name}`,
        name,
        from_name: name,
        email,
        replyto: email,
        phone: form.phone.trim(),
        wing: form.wing || "Not selected",
        message: form.message.trim() || "No message provided",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || t.errors.submitFailed);
      }

      setSubmittedName(name);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || t.errors.submitFailed);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0d1b3e 0%, #1a3260 60%, #0d1b3e 100%)",
          padding: "90px 20px 80px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", padding: "4px 16px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "18px", border: "1px solid rgba(232,66,10,0.5)", color: "#ff6b35", background: "rgba(232,66,10,0.12)" }}>
            {t.heroTag}
          </span>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 50px)", color: "white", lineHeight: 1.15, marginBottom: "16px" }}>
            {t.heroTitleA} <span style={{ color: "#ff6b35" }}>{t.heroTitleB}</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>{t.heroSub}</p>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
            {infoCards.map((card) => (
              <div
                key={card.key}
                style={{ background: card.bg, borderRadius: "16px", padding: "28px 24px", border: `1.5px solid ${card.color}22`, transition: "all 0.25s ease" }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-4px)";
                  event.currentTarget.style.boxShadow = `0 12px 28px ${card.color}18`;
                  event.currentTarget.style.borderColor = card.color;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow = "none";
                  event.currentTarget.style.borderColor = `${card.color}22`;
                }}
              >
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "8px" }}>{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={`${card.key}-${line}`} style={{ fontSize: "14px", fontWeight: 600, color: card.color, marginBottom: "2px" }}>
                    {line}
                  </p>
                ))}
                <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px", marginBottom: card.action ? "16px" : "0" }}>{card.sub}</p>
                {card.action ? (
                  <a
                    href={card.action.href}
                    target={card.action.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      borderRadius: "999px",
                      background: card.color,
                      color: "white",
                      fontSize: "12px",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    {card.action.label}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f7fa", padding: "72px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>
              {t.formTag}
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              {t.formTitleA} <span style={{ color: "#e8420a" }}>{t.formTitleB}</span>
            </h2>
          </div>

          <div style={{ background: "white", borderRadius: "20px", padding: "40px", border: "1.5px solid #eef1f8", boxShadow: "0 8px 32px rgba(13,27,62,0.06)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0d1b3e", marginBottom: "8px", fontFamily: "Georgia, serif" }}>{t.successTitle}</h3>
                <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "24px", lineHeight: 1.7 }}>
                  {t.successBody.replace("{name}", submittedName)}
                </p>
                <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", background: "linear-gradient(135deg, #e8420a, #ff6b35)", color: "white", padding: "12px 24px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
                  {t.callNow}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "grid", gap: "18px" }}>
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>{t.labels.name}</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    placeholder={t.placeholders.name}
                    style={{ ...inputStyle, borderColor: errors.name ? "#dc2626" : "#e2e8f0" }}
                    autoComplete="name"
                  />
                  {errors.name ? <p style={{ margin: "6px 2px 0", fontSize: "12px", color: "#dc2626" }}>{errors.name}</p> : null}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                  <div>
                    <label htmlFor="contact-phone" style={labelStyle}>{t.labels.phone}</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => handleChange("phone", event.target.value)}
                      placeholder={t.placeholders.phone}
                      style={{ ...inputStyle, borderColor: errors.phone ? "#dc2626" : "#e2e8f0" }}
                      autoComplete="tel"
                    />
                    {errors.phone ? <p style={{ margin: "6px 2px 0", fontSize: "12px", color: "#dc2626" }}>{errors.phone}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>{t.labels.email}</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      placeholder={t.placeholders.email}
                      style={{ ...inputStyle, borderColor: errors.email ? "#dc2626" : "#e2e8f0" }}
                      autoComplete="email"
                    />
                    {errors.email ? <p style={{ margin: "6px 2px 0", fontSize: "12px", color: "#dc2626" }}>{errors.email}</p> : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-wing" style={labelStyle}>{t.labels.wing}</label>
                  <select
                    id="contact-wing"
                    value={form.wing}
                    onChange={(event) => handleChange("wing", event.target.value)}
                    style={inputStyle}
                  >
                    <option value="">{t.placeholders.wing}</option>
                    <option value="Defence Academy">{t.wingOptions.defence}</option>
                    <option value="Public School">{t.wingOptions.school}</option>
                    <option value="Sniper Classes">{t.wingOptions.classes}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={labelStyle}>{t.labels.message}</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    placeholder={t.placeholders.message}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                {submitError ? (
                  <div style={{ borderRadius: "10px", border: "1px solid #fecaca", background: "#fef2f2", color: "#b91c1c", fontSize: "12.5px", padding: "10px 12px" }}>
                    {submitError}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  style={{
                    marginTop: "6px",
                    border: "none",
                    borderRadius: "999px",
                    padding: "12px 20px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "white",
                    cursor: !isFormValid || isSubmitting ? "not-allowed" : "pointer",
                    background: !isFormValid || isSubmitting ? "#94a3b8" : "linear-gradient(135deg, #e8420a, #ff6b35)",
                  }}
                >
                  {isSubmitting ? t.submitting : t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", background: "rgba(16,185,129,0.07)" }}>
              {t.mapTag}
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              {t.mapTitleA} <span style={{ color: "#10b981" }}>{t.mapTitleB}</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: "15px", marginTop: "8px" }}>{t.mapSub}</p>
          </div>

          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1.5px solid #e2e8f0", boxShadow: "0 10px 30px rgba(13,27,62,0.08)" }}>
            <iframe
              title="Sniper Defence Academy Location"
              src={ACADEMY_MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: "420px", border: "0" }}
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
