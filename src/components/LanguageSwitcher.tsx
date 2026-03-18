import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <motion.button
            onClick={() => changeLanguage(lang.code)}
            className={`px-2 py-1 text-sm font-medium transition-colors duration-200 ${
              currentLanguage === lang.code
                ? 'text-[#2D5A4A]'
                : 'text-[#666666] hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang.label}
          </motion.button>
          {index < languages.length - 1 && (
            <span className="text-[#666666]">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
