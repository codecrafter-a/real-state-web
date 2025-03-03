import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../src/Componant/locales/en.json';
import he from '../src/Componant/locales/he.json';

i18n
  .use(LanguageDetector) // Detect language from URL
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      he: { translation: he }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'navigator'], // Detect language from URL path
      lookupFromPathIndex: 0 // "/fr/page" → "fr"
    }
  });

export default i18n;

