import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('selectedLanguage');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('../Languages/En.json'), 
      },
      fr: {
        translation: require('../Languages/Fr.json'), 
      },
    },
    lng: savedLanguage || 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
