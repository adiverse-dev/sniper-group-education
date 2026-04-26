export const SEO_BRAND_NAME = "Sniper Group of Education";

export const DEFAULT_SEO = {
  title: "Defence Academy & Coaching in Meerut — Sniper Group",
  description:
    "Sniper Group offers defence exam preparation, quality schooling and academic coaching in Meerut to help students achieve top results.",
  robots: "index,follow",
  keywords: "defence academy meerut, school in meerut, coaching institute meerut",
  canonical: "https://yourdomain.com",
  image: "/img/branding/og-image.svg",
  type: "website",
  openGraph: {
    title: "Sniper Group of Education",
    description: "Defence Academy, Public School and Coaching in Meerut.",
    url: "https://yourdomain.com",
    type: "website",
      images: [
      {
        url: "/img/branding/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sniper Group of Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sniper Group of Education",
    description: "Defence Academy, Public School and Coaching in Meerut",
    image: "https://yourdomain.com/og-image.jpg",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export const ROUTE_SEO = {
  "/": {
    title: "Defence Academy & Coaching in Meerut — Sniper Group",
    description:
      "Sniper Group in Meerut unites Defence Academy, Public School and Coaching classes to deliver focused coaching and strong academic foundations.",
    keywords:
      "education institute Meerut, defence academy, public school, sniper classes, NDA, CDS, CBSE school, IIT JEE, NEET",
  },
  "/defence": {
    title: "NDA & CDS Coaching in Meerut — Sniper Defence Academy",
    description:
      "Target NDA, CDS and Sainik School success with Sniper Defence Academy's structured coaching, SSB prep and mock tests in Meerut.",
    keywords:
      "Defence academy Meerut, NDA coaching Meerut, CDS coaching Meerut, AISSEE coaching, RIMC coaching, RMS coaching, Air Force coaching",
  },
  "/school": {
    title: "Public School in Meerut — Sniper Group",
    description:
      "CBSE-affiliated Sniper Public School in Meerut provides holistic education from Nursery to Class 8, focusing on academics and character development.",
    keywords:
      "public school Meerut, nursery school Meerut, CBSE school Meerut, class 1 to 8 school",
  },
  "/classes": {
    title: "IIT JEE & NEET Coaching in Meerut — Sniper Classes",
    description:
      "Sniper Classes offers IIT JEE, NEET and board preparation in Meerut with expert faculty, practice tests and performance tracking for serious aspirants.",
    keywords:
      "coaching classes Meerut, IIT JEE coaching Meerut, NEET coaching Meerut, class 9 10 foundation, class 11 12 coaching",
  },
  "/about": {
    title: "About Sniper Group — Education & Defence Coaching",
    description:
      "Discover Sniper Group's mission, history and governance under Bhagwan Parshuram Education Trust — committed to excellence in education and defence coaching.",
    keywords:
      "about sniper group of education, education trust Meerut, sniper institute profile",
  },
  "/results": {
    title: "Student Results & Achievements — Sniper Group",
    description:
      "See top student achievements from Sniper Group across Defence selections, board toppers and competitive exam successes — proven outcomes and success stories.",
    keywords:
      "sniper results, student achievements Meerut, defence exam selections, coaching results",
  },
  "/fees": {
    title: "Fee Structure — Sniper Group of Education",
    description:
      "View the latest fee structure for Sniper Defence Academy, Sniper Public School and Sniper Classes in Meerut, including scholarship details.",
    keywords:
      "fee structure Meerut, defence academy fees, school fees, coaching class fees",
  },
  "/gallery": {
    title: "Gallery — Campus, Events & Achievements",
    description:
      "Browse photos and videos showcasing campus life, events and student achievements across Sniper Group's Defence, School and Classes wings.",
    keywords:
      "school gallery Meerut, defence academy gallery, campus events, student activities",
  },
  "/contact": {
    title: "Contact Sniper Group — Admissions & Enquiries",
    description:
      "Get in touch with Sniper Group in Meerut for admissions, counseling and course details across Defence Academy, Public School and Coaching classes.",
    keywords:
      "contact sniper group, admissions Meerut, education counseling Meerut, defence academy contact",
  },
};

// Organization structured data (JSON-LD) export for reuse
export const ORG_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Sniper Group of Education",
  url: "https://yourdomain.com",
  logo: "/img/branding/Flogo.svg",
  telephone: "+91-7060155711",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Meerut",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

// Example FAQ schema — pages may supply their own question/answer arrays
export const SAMPLE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {"@type": "Question", name: "What is the best NDA coaching in Meerut?", acceptedAnswer: {"@type": "Answer", text: "Sniper Defence Academy offers focused NDA coaching with physical training and SSB preparation."}},
    {"@type": "Question", name: "Does Sniper provide NEET coaching?", acceptedAnswer: {"@type": "Answer", text: "Yes — Sniper Classes runs NEET coaching with NCERT-focused revision and mock tests."}},
    {"@type": "Question", name: "What is the admission process?", acceptedAnswer: {"@type": "Answer", text: "Contact the admissions team via the Contact page or call the centre for guidance on the admission steps."}},
  ],
};

