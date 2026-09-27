import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import ja from "./locales/ja.json";
import de from "./locales/de.json";
import zh from "./locales/zh.json";
import ar from "./locales/ar.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
import ko from "./locales/ko.json";
import it from "./locales/it.json";
import nl from "./locales/nl.json";
import tr from "./locales/tr.json";
import th from "./locales/th.json";
import vi from "./locales/vi.json";
import bn from "./locales/bn.json";
import sv from "./locales/sv.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      fr: { translation: fr },
      es: { translation: es },
      ja: { translation: ja },
      de: { translation: de },
      zh: { translation: zh },
      ar: { translation: ar },
      pt: { translation: pt },
      ru: { translation: ru },
      ko: { translation: ko },
      it: { translation: it },
      nl: { translation: nl },
      tr: { translation: tr },
      th: { translation: th },
      vi: { translation: vi },
      bn: { translation: bn },
      sv: { translation: sv },
    },
    fallbackLng: "en",
    lng: localStorage.getItem("i18nLanguage") || "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nLanguage",
    },
  });

export default i18n;
