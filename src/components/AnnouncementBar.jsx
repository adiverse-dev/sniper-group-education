import { useLanguage } from "../i18n/LanguageProvider";
import LocalizedLink from "./LocalizedLink";

function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="relative z-50 overflow-hidden bg-navy px-6 py-2 flex items-center justify-center gap-4 text-white text-xs font-medium">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-orange/10 to-transparent animate-pulse" />
      <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse flex-shrink-0" />

      <span className="hidden sm:block text-center">{t("announcement.desktop")}</span>
      <span className="sm:hidden text-center">{t("announcement.mobile")}</span>

      <LocalizedLink
        to="/contact"
        className="flex-shrink-0 font-bold px-3 py-0.5 rounded-full text-[11px] border transition-all text-[#ffb38a] border-saffron/40 hover:bg-saffron/15 hover:text-saffron"
      >
        {t("announcement.enquireNow")}
      </LocalizedLink>
    </div>
  );
}

export default AnnouncementBar;

