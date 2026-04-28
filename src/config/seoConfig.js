export const SEO_BRAND_NAME = "Sniper Group of Education";
export const SEO_SITE_URL = "https://snipergroupofeducation.netlify.app";

export const DEFAULT_SEO = {
  title: "Defence Academy and Coaching in Meerut | Sniper Group",
  description:
    "Sniper Group offers defence exam preparation, quality schooling, and academic coaching in Meerut to help students achieve top results.",
  robots: "index,follow",
  keywords:
    "defence academy meerut, school in meerut, coaching institute meerut, NDA coaching, CDS coaching, IIT JEE coaching, NEET coaching",
  canonical: SEO_SITE_URL,
  image: "/img/branding/og-image.svg",
  type: "website",
  openGraph: {
    title: "Sniper Group of Education",
    description: "Defence Academy, Public School, and Coaching in Meerut.",
    url: SEO_SITE_URL,
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
    description: "Defence Academy, Public School, and Coaching in Meerut",
    image: `${SEO_SITE_URL}/img/branding/og-image.svg`,
  },
  alternates: {
    canonical: SEO_SITE_URL,
  },
};

export const ROUTE_SEO = {
  "/": {
    title: "Defence Academy and Coaching in Meerut | Sniper Group",
    description:
      "Sniper Group in Meerut unites Defence Academy, Public School, and Coaching classes to deliver focused preparation and strong academic foundations.",
    keywords:
      "education institute Meerut, defence academy, public school, sniper classes, NDA, CDS, CBSE school, IIT JEE, NEET",
  },
  "/defence": {
    title: "NDA and CDS Coaching in Meerut | Sniper Defence Academy",
    description:
      "Target NDA, CDS, and Sainik School success with Sniper Defence Academy's structured coaching, SSB prep, and mock tests in Meerut.",
    keywords:
      "defence academy Meerut, NDA coaching Meerut, CDS coaching Meerut, AISSEE coaching, RIMC coaching, RMS coaching, Air Force coaching",
  },
  "/school": {
    title: "Public School in Meerut | Sniper Group",
    description:
      "CBSE-affiliated Sniper Public School in Meerut provides holistic education from Nursery to Class 8 with focus on academics and character building.",
    keywords:
      "public school Meerut, nursery school Meerut, CBSE school Meerut, class 1 to 8 school",
  },
  "/classes": {
    title: "IIT JEE and NEET Coaching in Meerut | Sniper Classes",
    description:
      "Sniper Classes offers IIT JEE, NEET, and board preparation in Meerut with expert faculty, practice tests, and performance tracking.",
    keywords:
      "coaching classes Meerut, IIT JEE coaching Meerut, NEET coaching Meerut, class 9 10 foundation, class 11 12 coaching",
  },
  "/about": {
    title: "About Sniper Group | Education and Defence Coaching",
    description:
      "Discover Sniper Group's mission, history, and governance under Bhagwan Parshuram Education and Charitable Trust.",
    keywords:
      "about sniper group of education, education trust Meerut, sniper institute profile",
  },
  "/results": {
    title: "Student Results and Achievements | Sniper Group",
    description:
      "See student achievements from Sniper Group across defence selections, board toppers, and competitive exam successes.",
    keywords:
      "sniper results, student achievements Meerut, defence exam selections, coaching results",
  },
  "/fees": {
    title: "Fee Structure | Sniper Group of Education",
    description:
      "View the latest fee structure for Sniper Defence Academy, Sniper Public School, and Sniper Classes in Meerut.",
    keywords:
      "fee structure Meerut, defence academy fees, school fees, coaching class fees",
  },
  "/gallery": {
    title: "Gallery | Campus, Events, and Achievements",
    description:
      "Browse photos and videos showcasing campus life, events, and student achievements across Sniper Group.",
    keywords:
      "school gallery Meerut, defence academy gallery, campus events, student activities",
  },
  "/contact": {
    title: "Contact Sniper Group | Admissions and Enquiries",
    description:
      "Get in touch with Sniper Group in Meerut for admissions, counseling, and course details across all wings.",
    keywords:
      "contact sniper group, admissions Meerut, education counseling Meerut, defence academy contact",
  },
};

export const ORG_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Sniper Group of Education",
  url: SEO_SITE_URL,
  logo: `${SEO_SITE_URL}/img/branding/Flogo.svg`,
  telephone: "+91-7060155711",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Meerut",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

export const SAMPLE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best NDA coaching in Meerut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sniper Defence Academy offers focused NDA coaching with physical training and SSB preparation.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sniper provide NEET coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sniper Classes runs NEET coaching with NCERT-focused revision and mock tests.",
      },
    },
    {
      "@type": "Question",
      name: "What is the admission process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact the admissions team via the Contact page or call the centre for guidance on admission steps.",
      },
    },
  ],
};
