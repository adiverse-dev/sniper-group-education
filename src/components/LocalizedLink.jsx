import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";
import { buildLocalizedPath } from "../i18n/language";

function shouldLocalizePath(pathname) {
  if (!pathname || typeof pathname !== "string") return false;
  if (!pathname.startsWith("/")) return false;
  if (pathname.startsWith("//")) return false;
  return true;
}

export default function LocalizedLink({ to, ...props }) {
  const { lang } = useLanguage();

  if (typeof to === "string") {
    const localizedTo = shouldLocalizePath(to) ? buildLocalizedPath(to, lang) : to;
    return <Link to={localizedTo} {...props} />;
  }

  if (to && typeof to === "object" && shouldLocalizePath(to.pathname)) {
    return <Link to={{ ...to, pathname: buildLocalizedPath(to.pathname, lang) }} {...props} />;
  }

  return <Link to={to} {...props} />;
}

