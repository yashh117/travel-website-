import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LANGUAGES = [
  { code: "en", flag: "🇬🇧", nativeName: "English",    label: "English"    },
  { code: "hi", flag: "🇮🇳", nativeName: "हिंदी",      label: "Hindi"      },
  { code: "fr", flag: "🇫🇷", nativeName: "Français",   label: "French"     },
  { code: "es", flag: "🇪🇸", nativeName: "Español",    label: "Spanish"    },
  { code: "de", flag: "🇩🇪", nativeName: "Deutsch",    label: "German"     },
  { code: "it", flag: "🇮🇹", nativeName: "Italiano",   label: "Italian"    },
  { code: "pt", flag: "🇧🇷", nativeName: "Português",  label: "Portuguese" },
  { code: "nl", flag: "🇳🇱", nativeName: "Nederlands", label: "Dutch"      },
  { code: "sv", flag: "🇸🇪", nativeName: "Svenska",    label: "Swedish"    },
  { code: "ru", flag: "🇷🇺", nativeName: "Русский",    label: "Russian"    },
  { code: "ar", flag: "🇸🇦", nativeName: "العربية",    label: "Arabic"     },
  { code: "tr", flag: "🇹🇷", nativeName: "Türkçe",     label: "Turkish"    },
  { code: "zh", flag: "🇨🇳", nativeName: "中文",        label: "Chinese"    },
  { code: "ja", flag: "🇯🇵", nativeName: "日本語",      label: "Japanese"   },
  { code: "ko", flag: "🇰🇷", nativeName: "한국어",      label: "Korean"     },
  { code: "th", flag: "🇹🇭", nativeName: "ภาษาไทย",   label: "Thai"       },
  { code: "vi", flag: "🇻🇳", nativeName: "Tiếng Việt", label: "Vietnamese" },
  { code: "bn", flag: "🇧🇩", nativeName: "বাংলা",      label: "Bengali"    },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nLanguage", code);
    setOpen(false);
    document.documentElement.lang = code;
  };

  return (
    <div className={`lang-selector ${open ? "lang-open" : ""}`} ref={ref}>
      <button
        className="lang-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        title={current.label}
      >
        <span className="lang-flag">{current.flag}</span>
        <span className="lang-code">{current.code.toUpperCase()}</span>
        <svg className="lang-chevron" width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <ul className="lang-dropdown" role="listbox" aria-label="Language options">
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === i18n.language}
              className={`lang-option ${lang.code === i18n.language ? "lang-active" : ""}`}
              onClick={() => changeLanguage(lang.code)}
              onKeyDown={(e) => e.key === "Enter" && changeLanguage(lang.code)}
              tabIndex={0}
              title={lang.label}
            >
              <span className="lang-opt-flag">{lang.flag}</span>
              <div className="lang-opt-text">
                <span className="lang-opt-native">{lang.nativeName}</span>
              </div>
              {lang.code === i18n.language && (
                <svg className="lang-check" width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="#c9a02a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
