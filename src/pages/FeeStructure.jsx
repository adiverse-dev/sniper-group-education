import { useState } from "react";
import HeroSlider from "../sections/HeroSlider";
// ─────────────────────────────────────────────────────────
// FEE PAGE SLIDER SLIDES
// ─────────────────────────────────────────────────────────
const feeSlides = [
  {
    img: "/img/students/1.jpg",
    imgPos: "center top",
    tag: "Fee Structure 2026–27",
    accent: "#e8420a",
    heading: "Transparent & Affordable Fees",
    sub: "Quality education at accessible prices — scholarships available for deserving students.",
    btn: "View Fee Details",
    link: "/fees",
  },
  {
    img: "/img/students/4.jpg",
    imgPos: "center",
    tag: "Public School Fees",
    accent: "#10b981",
    heading: "Sniper Sainik School — Session 2026–27",
    sub: "Nursery to Class 8 — CBSE Affiliated. Quarterly fee payment options available.",
    btn: "View School Fees",
    link: "/fees",
  },
  {
    img: "/img/students/5.jpg",
    imgPos: "center",
    tag: "Scholarships Available",
    accent: "#7c3aed",
    heading: "Merit Scholarships & Discounts",
    sub: "Staff wards & army families get 20% off. Old students get 50% off admission fees.",
    btn: "Know More",
    link: "/fees",
  },
];
// ─────────────────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────────────────
const tabs = [
  { id: "school",  label: "📚 Public School",   color: "#10b981", bg: "#f0fdf4" },
  { id: "defence", label: "🛡️ Defence Academy", color: "#FF9933", bg: "#fff8f0" },
  { id: "classes", label: "🎓 Sniper Classes",  color: "#7c3aed", bg: "#faf5ff" },
];
// ─────────────────────────────────────────────────────────
// FEE DATA
// ─────────────────────────────────────────────────────────
const feeData = {
  school: {
    color: "#10b981",
    bg: "#f0fdf4",
    note: "Session 2026–27 | Registration Fee ₹1,500 will be charged separately (not included in Grand Total). Transport & hostel charges are extra.",
    showTable: true,
    tableData: [
      { cls: "NUR.",   admOld: 2750,  admNew: 5500,  qrt: 4500, total: 18000, grandOld: 20750, grandNew: 23500 },
      { cls: "L.K.G.", admOld: 2750,  admNew: 5500,  qrt: 4500, total: 18000, grandOld: 20750, grandNew: 23500 },
      { cls: "U.K.G.", admOld: 2750,  admNew: 5500,  qrt: 4500, total: 18000, grandOld: 20750, grandNew: 23500 },
      { cls: "1st",    admOld: 3750,  admNew: 7500,  qrt: 6000, total: 24000, grandOld: 27750, grandNew: 31500 },
      { cls: "2nd",    admOld: 3750,  admNew: 7500,  qrt: 6000, total: 24000, grandOld: 27750, grandNew: 31500 },
      { cls: "3rd",    admOld: 3750,  admNew: 7500,  qrt: 6000, total: 24000, grandOld: 27750, grandNew: 31500 },
      { cls: "4th",    admOld: 4750,  admNew: 9500,  qrt: 7500, total: 30000, grandOld: 34750, grandNew: 39500 },
      { cls: "5th",    admOld: 4750,  admNew: 9500,  qrt: 7500, total: 30000, grandOld: 34750, grandNew: 39500 },
      { cls: "6th",    admOld: 4750,  admNew: 9500,  qrt: 9000, total: 36000, grandOld: 40750, grandNew: 45500 },
      { cls: "7th",    admOld: 5750,  admNew: 11500, qrt: 9000, total: 36000, grandOld: 41750, grandNew: 47500 },
      { cls: "8th",    admOld: 5750,  admNew: 11500, qrt: 9000, total: 36000, grandOld: 41750, grandNew: 47500 },
    ],
    discounts: [
      "Staff Wards, Army Personnel & Siblings — 20% Discount on Admission Fee",
      "Old Students — 50% Discount on Admission Fee (Books & Uniform on payment)",
      "Verbal or unofficial discounts will not be considered valid",
      "Fees are non-refundable & non-adjustable after discount has been applied",
    ],
    policies: [
      "Registration Fee ₹1,500 (New Students) will be charged separately — not included in Grand Total",
      "Once admission is confirmed, the fee is non-negotiable & non-refundable",
    ],
  },
  defence: {
    color: "#FF9933",
    bg: "#fff8f0",
    note: "Please contact us directly for Defence Academy fee details. The fee structure will be displayed here once the PDF is updated.",
    showTable: false,
    courses: [],
  },
  classes: {
    color: "#7c3aed",
    bg: "#faf5ff",
    note: "Please contact us directly for Sniper Classes fee details. The fee structure will be displayed here once the PDF is updated.",
    showTable: false,
    courses: [],
  },
};
// ─────────────────────────────────────────────────────────
// PAYMENT STEPS
// ─────────────────────────────────────────────────────────
const paymentSteps = [
  { num: "01", icon: "📋", title: "Enquire / Apply",  desc: "Call us or fill the online enquiry form to express your interest." },
  { num: "02", icon: "👨‍💼", title: "Counselling",     desc: "Meet our counsellors who will guide you to the right course." },
  { num: "03", icon: "📄", title: "Form Submission",  desc: "Fill the admission form and submit required documents." },
  { num: "04", icon: "💳", title: "Fee Payment",      desc: "Pay fees via cash, UPI, NEFT, or easy EMI options available." },
];
// ─────────────────────────────────────────────────────────
// SCHOOL FEE TABLE
// ─────────────────────────────────────────────────────────
const SchoolFeeTable = ({ data }) => (
  <div>
    <div style={{ overflowX: "auto", borderRadius: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", marginBottom: "28px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px", background: "white" }}>
        <thead>
          <tr style={{ background: "linear-gradient(135deg, #0d1b3e, #0d3d2e)" }}>
            {["Class", "Adm. Fee (Old)", "Adm. Fee (New)", "Per Quarter (×4)", "Total Fees", "Grand Total (Old)", "Grand Total (New)"].map((h) => (
              <th key={h} style={{ padding: "14px 16px", fontSize: "11px", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "0.8px", textAlign: "center", whiteSpace: "nowrap" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.tableData.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f0fdf4", borderBottom: "1px solid #d1fae5" }}>
              <td style={{ padding: "13px 16px", fontWeight: 800, color: "#0d1b3e", textAlign: "center", fontSize: "15px" }}>{row.cls}</td>
              <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>₹{row.admOld.toLocaleString()}</td>
              <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", fontWeight: 700, color: "#10b981" }}>₹{row.admNew.toLocaleString()}</td>
              <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", color: "#334155" }}>₹{row.qrt.toLocaleString()}</td>
              <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "15px", fontWeight: 700, color: "#0d1b3e" }}>₹{row.total.toLocaleString()}</td>
              <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>₹{row.grandOld.toLocaleString()}</td>
              <td style={{ padding: "13px 16px", textAlign: "center", fontSize: "15px", fontWeight: 800, color: "#10b981" }}>₹{row.grandNew.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div style={{ background: "#fefce8", border: "1px solid #fde68a", borderRadius: "10px", padding: "12px 18px", fontSize: "13px", color: "#92400e", fontWeight: 600, marginBottom: "24px" }}>
      ⚠️ Registration Fee ₹1,500 (New Students) will be charged separately — not included in Grand Total.
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
      <div style={{ background: "white", borderRadius: "14px", padding: "24px", border: "1.5px solid #d1fae5" }}>
        <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#10b981", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>
          🎁 Discount Policies
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {data.discounts.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(16,185,129,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#10b981", flexShrink: 0, fontWeight: 700, marginTop: "1px" }}>✓</div>
              <span style={{ fontSize: "13px", color: "#334155", lineHeight: 1.6 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "white", borderRadius: "14px", padding: "24px", border: "1.5px solid #fde68a" }}>
        <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#b45309", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>
          📋 Fee Policies
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {data.policies.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(234,179,8,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#b45309", flexShrink: 0, fontWeight: 700, marginTop: "1px" }}>!</div>
              <span style={{ fontSize: "13px", color: "#334155", lineHeight: 1.6 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
// ─────────────────────────────────────────────────────────
// COMING SOON CARD
// ─────────────────────────────────────────────────────────
const ComingSoonCard = ({ data }) => (
  <div style={{ textAlign: "center", padding: "80px 20px", background: "white", borderRadius: "20px", border: `2px dashed ${data.color}44` }}>
    <div style={{ fontSize: "56px", marginBottom: "20px" }}>📄</div>
    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#0d1b3e", marginBottom: "12px" }}>
      Fee Structure Coming Soon
    </h3>
    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto 24px" }}>
      The fee structure for this wing will be displayed here once the PDF is updated. Please contact us directly for the latest details.
    </p>
    <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: data.color, color: "white", padding: "12px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
      📞 Call for Fee Details
    </a>
  </div>
);
// ─────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────
const FeeStructure = () => {
  const [active, setActive] = useState("school");
  const data = feeData[active];
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
      `}</style>
      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider slides={feeSlides} />
      {/* ── 2. STICKY TABS ── */}
      <section style={{ background: "#ffffff", padding: "0 20px", borderBottom: "1px solid #eef1f8", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4px", overflowX: "auto" }}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              padding: "18px 24px", border: "none", background: "none",
              fontSize: "14px", fontWeight: 700, cursor: "pointer",
              color: active === t.id ? t.color : "#64748b",
              borderBottom: `3px solid ${active === t.id ? t.color : "transparent"}`,
              transition: "all 0.2s ease", whiteSpace: "nowrap",
            }}>
              {t.label}
            </button>
          ))}
        </div>
      </section>
      {/* ── 3. FEE SECTION ── */}
      <section style={{ background: "#f5f7fa", padding: "56px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ background: data.bg, border: `1px solid ${data.color}33`, borderRadius: "10px", padding: "12px 18px", fontSize: "13px", color: data.color, fontWeight: 600, marginBottom: "32px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <span>ℹ️</span>
            <span>{data.note}</span>
          </div>
          {data.showTable
            ? <SchoolFeeTable data={data} />
            : <ComingSoonCard data={data} />
          }
        </div>
      </section>
      {/* ── 4. ADMISSION PROCESS ── */}
      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: "999px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "12px", border: "1px solid rgba(232,66,10,0.3)", color: "#e8420a", background: "rgba(232,66,10,0.07)" }}>
              📋 Admission Process
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(24px, 2.8vw, 34px)", color: "#0d1b3e" }}>
              How to <span style={{ color: "#e8420a" }}>Enrol</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {paymentSteps.map((step, i) => (
              <div key={i}
                style={{ background: "#f8fafc", borderRadius: "16px", padding: "28px 24px", border: "1.5px solid #eef1f8", textAlign: "center", transition: "all 0.25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8420a"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(232,66,10,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#eef1f8"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(232,66,10,0.08)", margin: "0 auto 14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                  {step.icon}
                </div>
                <div style={{ fontSize: "11px", fontWeight: 800, color: "#e8420a", letterSpacing: "1px", marginBottom: "8px" }}>STEP {step.num}</div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0d1b3e", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── 5. CTA ── */}
      <section style={{ background: "#0d1b3e", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 32px)", color: "white", marginBottom: "12px" }}>
            Contact Us for <span style={{ color: "#ff6b35" }}>Fee Details</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "28px" }}>
            Scholarships & EMI options available. Call us for custom fee plans.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a href="tel:+917060155711" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #e8420a, #ff6b35)", color: "white", padding: "13px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(232,66,10,0.35)" }}>
              📞 Call Now — +91 7060155711
            </a>
            <a href="https://wa.me/917060155711" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "13px 28px", borderRadius: "999px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FeeStructure;