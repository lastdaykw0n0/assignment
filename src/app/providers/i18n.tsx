import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import ko from '@/shared/config/locales/ko.json';
import en from '@/shared/config/locales/en.json';

type Language = 'ko' | 'en';
type Translations = typeof ko;

interface I18nContextValue {
  language: Language;
  translations: Translations;
  t: (key: keyof Translations) => string;
  changeLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const translationsMap: Record<Language, Translations> = {
  ko,
  en,
};

const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem('language') as Language | null;
  if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.startsWith('ko') ? 'ko' : 'en';
  return browserLanguage;
};

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const translations = useMemo(() => translationsMap[language], [language]);

  const t = useCallback(
    (key: keyof Translations): string => {
      return translations[key] || key;
    },
    [translations]
  );

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  const value = useMemo(
    () => ({
      language,
      translations,
      t,
      changeLanguage,
    }),
    [language, translations, t, changeLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
