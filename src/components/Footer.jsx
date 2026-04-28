import LocalizedLink from "./LocalizedLink";
import { useLanguage } from "../i18n/LanguageProvider";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path
      d="M16.5 12H13.5V9.75C13.5 9.12 13.872 8.625 14.625 8.625H16.5V6H14.25C12.18 6 10.5 7.5 10.5 9.75V12H8.25V15H10.5V21.75H13.5V15H15.75L16.5 12Z"
      fill="white"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <defs>
      <radialGradient id="ig-grad1" cx="30%" cy="107%" r="130%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad1)" />
    <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" stroke="white" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.8" stroke="white" strokeWidth="1.6" />
    <circle cx="16.2" cy="7.8" r="0.9" fill="white" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path
      d="M19.8 8.2C19.6 7.5 19 6.9 18.3 6.7C17 6.4 12 6.4 12 6.4C12 6.4 7 6.4 5.7 6.7C5 6.9 4.4 7.5 4.2 8.2C3.9 9.5 3.9 12 3.9 12C3.9 12 3.9 14.5 4.2 15.8C4.4 16.5 5 17.1 5.7 17.3C7 17.6 12 17.6 12 17.6C12 17.6 17 17.6 18.3 17.3C19 17.1 19.6 16.5 19.8 15.8C20.1 14.5 20.1 12 20.1 12C20.1 12 20.1 9.5 19.8 8.2Z"
      fill="white"
    />
    <polygon points="10.2,14.6 14.8,12 10.2,9.4" fill="#FF0000" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <rect width="24" height="24" rx="6" fill="#25D366" />
    <path
      d="M12 4.5C7.858 4.5 4.5 7.858 4.5 12C4.5 13.38 4.878 14.676 5.532 15.786L4.5 19.5L8.316 18.48C9.396 19.08 10.656 19.5 12 19.5C16.142 19.5 19.5 16.142 19.5 12C19.5 7.858 16.142 4.5 12 4.5Z"
      fill="white"
    />
  </svg>
);

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sanjeevparashar.sda",
    icon: <FacebookIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sniperdefenceacademy?igsh=MW9ocGE1eHZkanJybA==",
    icon: <InstagramIcon />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@sniperdefenceacademymeerut4694",
    icon: <YouTubeIcon />,
  },
  { label: "WhatsApp", href: "https://wa.me/917060155711", icon: <WhatsAppIcon /> },
];

const sectionTitleStyle = {
  fontSize: "13px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#e8420a",
  marginBottom: "20px",
};

const linkListStyle = { listStyle: "none", padding: 0, display: "grid", gap: "12px" };
const linkStyle = { color: "#bbb", textDecoration: "none" };

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <>
      <div style={{ lineHeight: 0, overflow: "hidden", background: "#f5f7fa" }}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z"
            fill="#0a1628"
            opacity="0.4"
          />
          <path
            d="M0,40 C200,85 400,10 600,50 C800,90 1000,15 1200,55 C1320,78 1400,45 1440,35 L1440,100 L0,100 Z"
            fill="#0a1628"
          />
        </svg>
      </div>

      <footer style={{ background: "#0a1628", color: "#fff", fontFamily: "Poppins,sans-serif" }}>
        <div
          style={{
            background: "linear-gradient(90deg,#e8420a,#ff6b35)",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ margin: 0, fontWeight: 700 }}>{t("footer.admissions")}</p>
          <a
            href="https://wa.me/917060155711"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#fff",
              color: "#e8420a",
              padding: "8px 22px",
              borderRadius: "999px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {t("footer.enquireNow")}
          </a>
        </div>

        <div
          className="footer-grid"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "60px 40px 40px",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: "28px",
          }}
        >
          <div>
            <img
              src="/img/branding/Flogo.svg"
              alt="Sniper Group of Education logo"
              loading="lazy"
              decoding="async"
              style={{ height: "52px", marginBottom: "18px" }}
            />
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,.65)",
                lineHeight: "1.9",
                marginBottom: "22px",
              }}
            >
              {t("footer.trustText")}
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={sectionTitleStyle}>{t("footer.institutes")}</h4>
            <ul style={linkListStyle}>
              <li>
                <LocalizedLink to="/defence" style={linkStyle}>
                  {t("wings.defenceName")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/school" style={linkStyle}>
                  {t("wings.schoolName")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/classes" style={linkStyle}>
                  {t("wings.classesName")}
                </LocalizedLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={sectionTitleStyle}>{t("footer.quickLinks")}</h4>
            <ul style={linkListStyle}>
              <li>
                <LocalizedLink to="/" style={linkStyle}>
                  {t("nav.home")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/about" style={linkStyle}>
                  {t("footer.about")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/results" style={linkStyle}>
                  {t("footer.results")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/fees" style={linkStyle}>
                  {t("footer.fees")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/gallery" style={linkStyle}>
                  {t("footer.gallery")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/contact" style={linkStyle}>
                  {t("footer.contact")}
                </LocalizedLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={sectionTitleStyle}>{t("footer.contactUs")}</h4>
            <div style={{ display: "grid", gap: "14px", color: "#bbb" }}>
              <div>{t("footer.address")}</div>
              <div>+91 7060155711</div>
              <div>{t("footer.schedule")}</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,.08)" }} />
        </div>

        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.45)", margin: 0 }}>
            Copyright {year} Sniper Group of Education. {t("footer.rights")}
          </p>

          <p style={{ fontSize: "13px", color: "rgba(255,255,255,.45)", margin: 0 }}>
            {t("footer.madeBy")}
          </p>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr !important;
              padding: 40px 20px !important;
            }
          }
          @media (max-width: 560px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;

