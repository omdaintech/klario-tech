import { useState, useEffect, useCallback } from 'react';

export type Language = 'en' | 'sv';

export const useLocalization = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [, forceUpdate] = useState({});

  useEffect(() => {
    // Auto-detect language from browser or localStorage
    const savedLanguage = localStorage.getItem('klario-language') as Language;
    const browserLang = navigator.language.toLowerCase();
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else if (browserLang.includes('sv')) {
      setLanguage('sv');
    }
  }, []);

  const switchLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('klario-language', newLanguage);
    // Force a re-render to update the UI immediately
    forceUpdate({});
  }, []);

  return {
    language,
    switchLanguage,
    isSwedish: language === 'sv'
  };
};