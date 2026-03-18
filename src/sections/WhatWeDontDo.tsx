import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { X } from 'lucide-react';

export function WhatWeDontDo() {
  const { t } = useTranslation();

  const items = [
    'whatWeDontDo.items.0',
    'whatWeDontDo.items.1',
    'whatWeDontDo.items.2',
    'whatWeDontDo.items.3',
  ];

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {t('whatWeDontDo.title')}
            </h2>
            <p className="mt-4 text-[#A0A0A0]">{t('whatWeDontDo.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="flex items-center gap-4 p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg"
                whileHover={{ borderColor: '#666666' }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-red-500/10">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-[#A0A0A0] line-through decoration-[#666666]">
                  {t(item)}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
