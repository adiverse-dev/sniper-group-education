import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_SEO,
  ROUTE_SEO,
  ORG_STRUCTURED_DATA,
  SAMPLE_FAQ_SCHEMA,
} from "../config/seoConfig";
import {
  DEFAULT_LANG,
  buildLocalizedPath,
  getLangFromPath,
  normalizeRoutePath,
} from "../i18n/language";

function upsertMeta(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("link");
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
}

function upsertJsonLd(id, payload) {
  let node = document.getElementById(id);
  if (!node) {
    node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    document.head.appendChild(node);
  }
  node.textContent = JSON.stringify(payload);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname || "/";
    const lang = getLangFromPath(rawPath) || DEFAULT_LANG;
    const basePath = normalizeRoutePath(rawPath);
    const localizedPath = buildLocalizedPath(basePath, lang);

    const routeSeo = ROUTE_SEO[basePath] || {};
    const seo = { ...DEFAULT_SEO, ...routeSeo };

    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/+$/, "");
    const pageUrl = `${siteUrl}${localizedPath}`;
    const imageUrl = seo.image.startsWith("http") ? seo.image : `${siteUrl}${seo.image}`;
    const robotsValue = ROUTE_SEO[basePath] ? seo.robots : "noindex,nofollow";

    document.title = seo.title;

    upsertMeta("meta[name='description']", { name: "description", content: seo.description });
    upsertMeta("meta[name='keywords']", { name: "keywords", content: seo.keywords });
    upsertMeta("meta[name='author']", {
      name: "author",
      content: DEFAULT_SEO.title || "Sniper Group of Education",
    });
    upsertMeta("meta[name='theme-color']", { name: "theme-color", content: "#0d1b3e" });
    upsertMeta("meta[name='format-detection']", {
      name: "format-detection",
      content: "telephone=no",
    });
    upsertMeta("meta[name='robots']", { name: "robots", content: robotsValue });

    upsertMeta("meta[property='og:type']", { property: "og:type", content: seo.type });
    upsertMeta("meta[property='og:title']", { property: "og:title", content: seo.title });
    upsertMeta("meta[property='og:description']", {
      property: "og:description",
      content: seo.description,
    });
    upsertMeta("meta[property='og:url']", { property: "og:url", content: pageUrl });
    upsertMeta("meta[property='og:image']", { property: "og:image", content: imageUrl });

    upsertMeta("meta[name='twitter:card']", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title", content: seo.title });
    upsertMeta("meta[name='twitter:description']", {
      name: "twitter:description",
      content: seo.description,
    });
    upsertMeta("meta[name='twitter:image']", { name: "twitter:image", content: imageUrl });

    upsertLink("link[rel='canonical']", { rel: "canonical", href: pageUrl });

    const enAlt = `${siteUrl}${buildLocalizedPath(basePath, "en")}`;
    const hiAlt = `${siteUrl}${buildLocalizedPath(basePath, "hi")}`;
    upsertLink("link[rel='alternate'][hreflang='en']", {
      rel: "alternate",
      hreflang: "en",
      href: enAlt,
    });
    upsertLink("link[rel='alternate'][hreflang='hi']", {
      rel: "alternate",
      hreflang: "hi",
      href: hiAlt,
    });
    upsertLink("link[rel='alternate'][hreflang='x-default']", {
      rel: "alternate",
      hreflang: "x-default",
      href: enAlt,
    });

    const orgLd = {
      ...(ORG_STRUCTURED_DATA || {}),
      url: ORG_STRUCTURED_DATA?.url ? ORG_STRUCTURED_DATA.url.replace(/\/+$/, "") : siteUrl,
      logo: ORG_STRUCTURED_DATA?.logo
        ? ORG_STRUCTURED_DATA.logo
        : `${siteUrl}/img/branding/Flogo.svg`,
    };
    upsertJsonLd("seo-org-jsonld", orgLd);

    const faq = routeSeo.faq || DEFAULT_SEO.faq || SAMPLE_FAQ_SCHEMA;
    if (faq) {
      upsertJsonLd("seo-faq-jsonld", faq);
    }
  }, [location.pathname]);

  return null;
}

