import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { MapPin, Languages, TrendingUp } from 'lucide-react';

const cards = [
  { key: 'mapping', icon: MapPin },
  { key: 'multilingual', icon: Languages },
  { key: 'traffic', icon: TrendingUp },
];

export function BrusselsAdvantage() {
  const { t } = useTranslation();

  return (
    <section id="brussels" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {t('brussels.title')}
            </h2>
            <p className="mt-4 text-[#A0A0A0]">{t('brussels.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.key} delay={index * 0.15}>
                <motion.div
                  className="p-8 bg-[#111111] border border-[#2A2A2A] rounded-lg h-full"
                  whileHover={{
                    borderColor: '#2D5A4A',
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2D5A4A]/10 mb-6">
                    <Icon className="w-7 h-7 text-[#2D5A4A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-['Plus_Jakarta_Sans']">
                    {t(`brussels.cards.${card.key}.title`)}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed text-sm">
                    {t(`brussels.cards.${card.key}.description`)}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Brussels Map Visual */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 relative rounded-lg overflow-hidden">
            <img
              src="/images/brussels-map.jpg"
              alt="Brussels neighborhoods map"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
