export const SUPPORTED_LANGS = ["en", "hi"];
export const DEFAULT_LANG = "en";
export const LANG_STORAGE_KEY = "sniper-site-lang";

export function isSupportedLang(value) {
  return SUPPORTED_LANGS.includes(value);
}

export function getLangFromPath(pathname = "/") {
  const [first] = pathname.split("/").filter(Boolean);
  return isSupportedLang(first) ? first : null;
}

export function stripLangPrefix(pathname = "/") {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (isSupportedLang(segments[0])) segments.shift();
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function buildLocalizedPath(pathname = "/", lang = DEFAULT_LANG) {
  const safeLang = isSupportedLang(lang) ? lang : DEFAULT_LANG;
  const normalized = stripLangPrefix(pathname);
  return normalized === "/" ? `/${safeLang}` : `/${safeLang}${normalized}`;
}

export function normalizeRoutePath(pathname = "/") {
  const cleaned = stripLangPrefix(pathname);
  return cleaned === "" ? "/" : cleaned;
}

