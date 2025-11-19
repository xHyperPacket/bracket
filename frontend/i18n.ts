import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'nb',
    fallbackLng: 'nb',
    supportedLngs: ['nb'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Deaktiver språkdeteksjon
      order: [],
      caches: []
    }
  });

export default i18n;
