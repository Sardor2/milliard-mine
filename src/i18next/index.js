import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
// import translationUz from "./locales/uz.json";
// import translationEn from "./locales/en.json";
// import translationRu from "./locales/ru.json";

// const resources = {
//   en: {
//     translation: translationEn,
//   },
//   ru: {
//     translation: translationRu,
//   },
//   uz: {
//     translation: translationUz,
//   },
// };
const apiKey = "pgiPsAI_4uDZe6--R1lpuQ";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ru",
    fallbackLng: "ru",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en", "ru", "uz"],

    backend: {
      loadPath: loadPath,
    },
  });

export default i18n;
