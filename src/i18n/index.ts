import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales-en/en";
import fa from "./locales-fa/fa";

let lang = { state: { language: "fa", direction: "rtl" }, version: 0 };
if (typeof window !== "undefined") {
  const storedLang = window.localStorage.getItem("language");
  if (storedLang) {
    lang = JSON.parse(storedLang);
  }
}

const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: lang.state.language || "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
