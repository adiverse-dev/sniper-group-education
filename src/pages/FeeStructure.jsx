import { useMemo, useState } from "react";
import HeroSlider from "../sections/HeroSlider";
import { IMAGE_PATHS } from "../config/imagePaths";
import { useLanguage } from "../i18n/LanguageProvider";

const feeRows = [
  { cls: "NUR.", admOld: 2750, admNew: 5500, qrt: 4500, total: 18000, grandOld: 20750, grandNew: 23500 },
  { cls: "L.K.G.", admOld: 2750, admNew: 5500, qrt: 4500, total: 18000, grandOld: 20750, grandNew: 23500 },
  { cls: "U.K.G.", admOld: 2750, admNew: 5500, qrt: 4500, total: 18000, grandOld: 20750, grandNew: 23500 },
  { cls: "1st", admOld: 3750, admNew: 7500, qrt: 6000, total: 24000, grandOld: 27750, grandNew: 31500 },
  { cls: "2nd", admOld: 3750, admNew: 7500, qrt: 6000, total: 24000, grandOld: 27750, grandNew: 31500 },
  { cls: "3rd", admOld: 3750, admNew: 7500, qrt: 6000, total: 24000, grandOld: 27750, grandNew: 31500 },
  { cls: "4th", admOld: 4750, admNew: 9500, qrt: 7500, total: 30000, grandOld: 34750, grandNew: 39500 },
  { cls: "5th", admOld: 4750, admNew: 9500, qrt: 7500, total: 30000, grandOld: 34750, grandNew: 39500 },
  { cls: "6th", admOld: 4750, admNew: 9500, qrt: 9000, total: 36000, grandOld: 40750, grandNew: 45500 },
  { cls: "7th", admOld: 5750, admNew: 11500, qrt: 9000, total: 36000, grandOld: 41750, grandNew: 47500 },
  { cls: "8th", admOld: 5750, admNew: 11500, qrt: 9000, total: 36000, grandOld: 41750, grandNew: 47500 },
];

const content = {
  en: {
    tabs: {
      school: "Public School",
      defence: "Defence Academy",
      classes: "Sniper Classes",
    },
    noteSchool:
      "Session 2026-27 | Registration fee of Rs 1,500 is charged separately (not included in grand total). Transport and hostel charges are extra.",
    noteDefence:
      "Please contact us directly for Defence Academy fee details. This section will be updated with PDF rates shortly.",
    noteClasses:
      "Please contact us directly for Sniper Classes fee details. This section will be updated with PDF rates shortly.",
    tableHeaders: [
      "Class",
      "Adm. Fee (Old)",
      "Adm. Fee (New)",
      "Per Quarter (x4)",
      "Total Fees",
      "Grand Total (Old)",
      "Grand Total (New)",
    ],
    regWarn: "Registration fee of Rs 1,500 (new students) is charged separately and is not included in grand total.",
    discountTitle: "Discount Policies",
    policyTitle: "Fee Policies",
    discounts: [
      "Staff wards, army personnel and siblings get 20% discount on admission fee.",
      "Old students get 50% discount on admission fee (books and uniform on payment).",
      "Verbal or unofficial discounts will not be considered valid.",
      "Fees are non-refundable and non-adjustable after discount is applied.",
    ],
    policies: [
      "Registration fee of Rs 1,500 for new students is separate.",
      "Once admission is confirmed, fee is non-negotiable and non-refundable.",
    ],
    comingSoon: "Fee Structure Coming Soon",
    comingSoonSub:
      "The fee structure for this wing will be displayed here after the latest update. Please call for current details.",
    callForFees: "Call for Fee Details",
    admissionProcess: "Admission Process",
    enrolHeadingA: "How to",
    enrolHeadingB: "Enrol",
    steps: [
      { num: "01", title: "Enquire / Apply", desc: "Call us or submit the enquiry form." },
      { num: "02", title: "Counselling", desc: "Meet our counsellor for course guidance." },
      { num: "03", title: "Form Submission", desc: "Submit form with required documents." },
      { num: "04", title: "Fee Payment", desc: "Pay via cash, UPI, NEFT or EMI options." },
    ],
    ctaHeadingA: "Contact Us for",
    ctaHeadingB: "Fee Details",
    ctaSub: "Need personalized guidance about fee plans? Our team will help you quickly.",
    ctaBtn: "Talk to Counsellor",
  },
  hi: {
    tabs: {
      school: "पब्लिक स्कूल",
      defence: "डिफेन्स अकादमी",
      classes: "स्नाइपर क्लासेस",
    },
    noteSchool:
      "सत्र 2026-27 | रजिस्ट्रेशन फीस Rs 1,500 अलग से लगेगी (ग्रैंड टोटल में शामिल नहीं)। ट्रांसपोर्ट और हॉस्टल चार्ज अलग हैं।",
    noteDefence:
      "डिफेन्स अकादमी की फीस जानकारी के लिए सीधे संपर्क करें। PDF अपडेट के साथ यह सेक्शन जल्द अपडेट होगा।",
    noteClasses:
      "स्नाइपर क्लासेस की फीस जानकारी के लिए सीधे संपर्क करें। PDF अपडेट के साथ यह सेक्शन जल्द अपडेट होगा।",
    tableHeaders: [
      "कक्षा",
      "एडमिशन फीस (पुराने)",
      "एडमिशन फीस (नए)",
      "प्रति क्वार्टर (x4)",
      "कुल फीस",
      "ग्रैंड टोटल (पुराने)",
      "ग्रैंड टोटल (नए)",
    ],
    regWarn: "नए छात्रों की रजिस्ट्रेशन फीस Rs 1,500 अलग से लगेगी, यह ग्रैंड टोटल में शामिल नहीं है।",
    discountTitle: "छूट नीति",
    policyTitle: "फीस नियम",
    discounts: [
      "स्टाफ वार्ड, आर्मी पर्सनल और सिब्लिंग को एडमिशन फीस पर 20% छूट।",
      "पुराने छात्रों को एडमिशन फीस पर 50% छूट (बुक्स और यूनिफॉर्म भुगतान पर)।",
      "मौखिक या अनौपचारिक छूट मान्य नहीं होगी।",
      "छूट लागू होने के बाद फीस नॉन-रिफंडेबल और नॉन-एडजस्टेबल रहेगी।",
    ],
    policies: [
      "नए छात्रों की रजिस्ट्रेशन फीस Rs 1,500 अलग से देय है।",
      "एडमिशन कन्फर्म होने के बाद फीस पर नेगोशिएशन या रिफंड नहीं होगा।",
    ],
    comingSoon: "फीस संरचना जल्द उपलब्ध होगी",
    comingSoonSub:
      "इस विंग की फीस संरचना नई अपडेट के बाद यहां दिखाई जाएगी। अभी के लिए कृपया कॉल करें।",
    callForFees: "फीस जानकारी के लिए कॉल करें",
    admissionProcess: "प्रवेश प्रक्रिया",
    enrolHeadingA: "कैसे",
    enrolHeadingB: "दाखिला लें",
    steps: [
      { num: "01", title: "पूछताछ / आवेदन", desc: "कॉल करें या enquiry form भरें।" },
      { num: "02", title: "काउंसलिंग", desc: "कोर्स गाइडेंस के लिए काउंसलर से मिलें।" },
      { num: "03", title: "फॉर्म जमा", desc: "जरूरी दस्तावेजों के साथ फॉर्म जमा करें।" },
      { num: "04", title: "फीस भुगतान", desc: "Cash, UPI, NEFT या EMI से भुगतान करें।" },
    ],
    ctaHeadingA: "फीस जानकारी के लिए",
    ctaHeadingB: "हमसे संपर्क करें",
    ctaSub: "फीस प्लान पर पर्सनल गाइडेंस चाहिए? हमारी टीम तुरंत सहायता करेगी।",
    ctaBtn: "काउंसलर से बात करें",
  },
};

function getSlides(lang) {
  if (lang === "hi") {
    return [
      {
        img: IMAGE_PATHS.fees.hero.slide1,
        imgPos: "center top",
        tag: "फीस 2026-27",
        accent: "#e8420a",
        heading: "पारदर्शी और किफायती फीस",
        sub: "गुणवत्तापूर्ण शिक्षा उचित फीस पर, मेरिट आधारित सहायता उपलब्ध।",
        btn: "फीस देखें",
        link: "/fees",
      },
      {
        img: IMAGE_PATHS.fees.hero.slide2,
        imgPos: "center",
        tag: "पब्लिक स्कूल फीस",
        accent: "#10b981",
        heading: "Sniper Sainik School - सत्र 2026-27",
        sub: "Nursery से Class 8 तक CBSE पैटर्न के साथ क्वार्टरली पेमेंट सुविधा।",
        btn: "स्कूल फीस देखें",
        link: "/fees",
      },
      {
        img: IMAGE_PATHS.fees.hero.slide3,
        imgPos: "center",
        tag: "स्कॉलरशिप उपलब्ध",
        accent: "#7c3aed",
        heading: "मेरिट स्कॉलरशिप और छूट",
        sub: "स्टाफ वार्ड और आर्मी परिवार को विशेष छूट।",
        btn: "और जानें",
        link: "/fees",
      },
    ];
  }

  return [
    {
      img: IMAGE_PATHS.fees.hero.slide1,
      imgPos: "center top",
      tag: "Fee Structure 2026-27",
      accent: "#e8420a",
      heading: "Transparent and Affordable Fees",
      sub: "Quality education at accessible prices with support for deserving students.",
      btn: "View Fee Details",
      link: "/fees",
    },
    {
      img: IMAGE_PATHS.fees.hero.slide2,
      imgPos: "center",
      tag: "Public School Fees",
      accent: "#10b981",
      heading: "Sniper Sainik School - Session 2026-27",
      sub: "Nursery to Class 8 under CBSE pattern with quarterly payment options.",
      btn: "View School Fees",
      link: "/fees",
    },
    {
      img: IMAGE_PATHS.fees.hero.slide3,
      imgPos: "center",
      tag: "Scholarships Available",
      accent: "#7c3aed",
      heading: "Merit Scholarships and Discounts",
      sub: "Special fee benefits for staff wards and army families.",
      btn: "Know More",
      link: "/fees",
    },
  ];
}

function ComingSoonCard({ color, title, desc, buttonLabel }) {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px", background: "white", borderRadius: "20px", border: `2px dashed ${color}44` }}>
      <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#0d1b3e", marginBottom: "12px" }}>{title}</h3>
      <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto 24px" }}>{desc}</p>
      <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", background: color, color: "white", padding: "12px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
        {buttonLabel}
      </a>
    </div>
  );
}

export default function FeeStructure() {
  const { lang } = useLanguage();
  const [active, setActive] = useState("school");

  const t = content[lang] || content.en;
  const slides = useMemo(() => getSlides(lang), [lang]);

  const tabs = [
    { id: "school", color: "#10b981", bg: "#f0fdf4", label: t.tabs.school },
    { id: "defence", color: "#FF9933", bg: "#fff8f0", label: t.tabs.defence },
    { id: "classes", color: "#7c3aed", bg: "#faf5ff", label: t.tabs.classes },
  ];

  const activeTab = tabs.find((tab) => tab.id === active) || tabs[0];
  const activeNote = active === "school" ? t.noteSchool : active === "defence" ? t.noteDefence : t.noteClasses;

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');`}</style>
      <HeroSlider slides={slides} />

      <section style={{ background: "#ffffff", padding: "0 20px", borderBottom: "1px solid #eef1f8", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4px", overflowX: "auto" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: "18px 24px",
                border: "none",
                background: "none",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                color: active === tab.id ? tab.color : "#64748b",
                borderBottom: `3px solid ${active === tab.id ? tab.color : "transparent"}`,
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section style={{ background: "#f5f7fa", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ background: activeTab.bg, border: `1px solid ${activeTab.color}33`, borderRadius: "10px", padding: "12px 18px", fontSize: "13px", color: activeTab.color, fontWeight: 600, marginBottom: "32px" }}>
            {activeNote}
          </div>

          {active === "school" ? (
            <div>
              <div style={{ overflowX: "auto", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", marginBottom: "28px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px", background: "white" }}>
                  <thead>
                    <tr style={{ background: "linear-gradient(135deg, #0d1b3e, #0d3d2e)" }}>
                      {t.tableHeaders.map((header) => (
                        <th key={header} style={{ padding: "14px 16px", fontSize: "11px", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "0.8px", textAlign: "center", whiteSpace: "nowrap" }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row, index) => (
                      <tr key={`${row.cls}-${index}`} style={{ background: index % 2 === 0 ? "white" : "#f0fdf4", borderBottom: "1px solid #d1fae5" }}>
                        <td style={{ padding: "13px 16px", fontWeight: 800, color: "#0d1b3e", textAlign: "center", fontSize: "15px" }}>{row.cls}</td>
                        <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>Rs {row.admOld.toLocaleString()}</td>
                        <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", fontWeight: 700, color: "#10b981" }}>Rs {row.admNew.toLocaleString()}</td>
                        <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", color: "#334155" }}>Rs {row.qrt.toLocaleString()}</td>
                        <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "15px", fontWeight: 700, color: "#0d1b3e" }}>Rs {row.total.toLocaleString()}</td>
                        <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>Rs {row.grandOld.toLocaleString()}</td>
                        <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "15px", fontWeight: 800, color: "#10b981" }}>Rs {row.grandNew.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ background: "#fefce8", border: "1px solid #fde68a", borderRadius: "10px", padding: "12px 18px", fontSize: "13px", color: "#92400e", fontWeight: 600, marginBottom: "24px" }}>
                {t.regWarn}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                <div style={{ background: "white", borderRadius: "14px", padding: "24px", border: "1.5px solid #d1fae5" }}>
                  <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#10b981", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>{t.discountTitle}</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {t.discounts.map((line) => (
                      <p key={line} style={{ fontSize: "13px", color: "#334155", lineHeight: 1.6, margin: 0 }}>- {line}</p>
                    ))}
                  </div>
                </div>

                <div style={{ background: "white", borderRadius: "14px", padding: "24px", border: "1.5px solid #fde68a" }}>
                  <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#b45309", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>{t.policyTitle}</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {t.policies.map((line) => (
                      <p key={line} style={{ fontSize: "13px", color: "#334155", lineHeight: 1.6, margin: 0 }}>- {line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ComingSoonCard color={activeTab.color} title={t.comingSoon} desc={t.comingSoonSub} buttonLabel={t.callForFees} />
          )}
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>
              {t.admissionProcess}
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              {t.enrolHeadingA} <span style={{ color: "#e8420a" }}>{t.enrolHeadingB}</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {t.steps.map((step) => (
              <div
                key={step.num}
                style={{ background: "#f8fafc", borderRadius: "16px", padding: "28px 24px", border: "1.5px solid #eef1f8", textAlign: "center", transition: "all 0.25s ease" }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = "#e8420a";
                  event.currentTarget.style.transform = "translateY(-4px)";
                  event.currentTarget.style.boxShadow = "0 8px 24px rgba(232,66,10,0.1)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = "#eef1f8";
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 800, color: "#e8420a", letterSpacing: "1px", marginBottom: "8px" }}>STEP {step.num}</div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0d1b3e", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 32px)", color: "white", marginBottom: "12px" }}>
            {t.ctaHeadingA} <span style={{ color: "#ff6b35" }}>{t.ctaHeadingB}</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: 1.7, marginBottom: "26px" }}>{t.ctaSub}</p>
          <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", background: "linear-gradient(135deg, #e8420a, #ff6b35)", color: "white", padding: "12px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 5px 18px rgba(232,66,10,0.35)" }}>
            {t.ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
}
