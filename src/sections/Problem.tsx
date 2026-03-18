import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { EyeOff, Target, Users, Building2 } from 'lucide-react';

export function Problem() {
  const { t } = useTranslation();

  const cards = [
    { key: 'invisibility', icon: EyeOff },
    { key: 'positioning', icon: Target },
    { key: 'wordOfMouth', icon: Users },
    { key: 'competition', icon: Building2 },
  ];

  return (
    <section id="problem" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center font-['Plus_Jakarta_Sans']">
            {t('problem.title')}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.key} delay={index * 0.15}>
                <motion.div
                  className="p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg h-full"
                  whileHover={{
                    borderColor: '#2D5A4A',
                    y: -4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2D5A4A]/10 mb-6">
                    <Icon className="w-6 h-6 text-[#2D5A4A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-['Plus_Jakarta_Sans']">
                    {t(`problem.cards.${card.key}.title`)}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {t(`problem.cards.${card.key}.description`)}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
