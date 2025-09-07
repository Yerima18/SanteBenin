'use client';
import { useState, useEffect } from 'react';
import { Language } from '@/types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('sante-benin-language') as Language;
    if (savedLanguage && ['fr', 'fon', 'yoruba'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('sante-benin-language', newLanguage);
  };

  return { language, changeLanguage };
};