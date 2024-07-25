import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales-en/en";
import fa from "./locales-fa/fa";

// let storedLang = "fa"; // Default to "fa" if no stored language is found
// if (typeof window !== "undefined") {
//   const storedLangStr = window.localStorage.getItem("language");
//   if (storedLangStr) {
//     storedLang = JSON.parse(storedLangStr).state.language;
//   }
// }

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
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
