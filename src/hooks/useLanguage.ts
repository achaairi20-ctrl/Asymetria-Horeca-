import { useTranslation } from 'react-i18next';

export type Language = 'fr' | 'nl' | 'en';

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language as Language;

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
  ];

  return {
    currentLanguage,
    changeLanguage,
    languages,
    t,
    i18n,
  };
}
