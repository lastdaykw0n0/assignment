import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ko from '@/shared/config/locales/ko.json';
import en from '@/shared/config/locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
  },
  lng: navigator.language.startsWith('ko') ? 'ko' : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export { i18n };
