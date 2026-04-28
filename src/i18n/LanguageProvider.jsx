/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { messages } from "./messages";
import {
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  buildLocalizedPath,
  getLangFromPath,
  isSupportedLang,
  normalizeRoutePath,
} from "./language";

const LanguageContext = createContext(null);

function readStoredLang() {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return isSupportedLang(stored) ? stored : null;
}

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathLang = getLangFromPath(location.pathname);
  const storedLang = readStoredLang();
  const lang = pathLang || storedLang || DEFAULT_LANG;
  const basePath = normalizeRoutePath(location.pathname);

  useEffect(() => {
    if (!pathLang) {
      const target = buildLocalizedPath(location.pathname, lang);
      if (target !== location.pathname) {
        navigate(`${target}${location.search}${location.hash}`, { replace: true });
      }
      return;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, pathLang);
    }
  }, [lang, location.hash, location.pathname, location.search, navigate, pathLang]);

  const setLanguage = (nextLang) => {
    const safeLang = isSupportedLang(nextLang) ? nextLang : DEFAULT_LANG;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, safeLang);
    }

    const target = buildLocalizedPath(basePath, safeLang);
    navigate(`${target}${location.search}${location.hash}`);
  };

  const t = (key, fallback = key) => {
    const dict = messages[lang] || messages[DEFAULT_LANG];
    const value = key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), dict);
    return value ?? fallback;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        basePath,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
