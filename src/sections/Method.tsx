import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { Search, Layout, Rocket } from 'lucide-react';

const phases = [
  { key: '1', icon: Search },
  { key: '2', icon: Layout },
  { key: '3', icon: Rocket },
];

export function Method() {
  const { t } = useTranslation();

  return (
    <section id="method" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {t('method.title')}
            </h2>
            <p className="mt-4 text-[#A0A0A0]">{t('method.subtitle')}</p>
          </div>
        </ScrollReveal>

        {/* Methodology Visual */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 mb-16 relative rounded-lg overflow-hidden max-w-3xl mx-auto">
            <img
              src="/images/methodology.jpg"
              alt="3-phase methodology"
              className="w-full h-auto"
            />
            {/* Numbers Overlay on the Image Circles */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <div className="absolute top-[50%] left-[25%] -translate-x-1/2 -translate-y-1/2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-['Plus_Jakarta_Sans']">1</span>
              </div>
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#C9A962] drop-shadow-[0_0_15px_rgba(201,169,98,0.5)] font-['Plus_Jakarta_Sans']">2</span>
              </div>
              <div className="absolute top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-['Plus_Jakarta_Sans']">3</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const items = t(`method.phases.${phase.key}.items`, {
              returnObjects: true,
            }) as string[];

            return (
              <ScrollReveal key={phase.key} delay={index * 0.2}>
                <motion.div
                  className="relative"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Phase Number Badge */}
                  <div className="absolute -top-4 -left-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#2D5A4A] text-white font-bold text-lg font-['JetBrains_Mono'] z-10 shadow-lg">
                    {phase.key}
                  </div>

                  <div className="pt-8 p-6 bg-[#111111] border border-[#2A2A2A] rounded-lg h-full">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2D5A4A]/10 mb-4 text-[#2D5A4A]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4 font-['Plus_Jakarta_Sans']">
                      {t(`method.phases.${phase.key}.title`)}
                    </h3>

                    <ul className="space-y-3">
                      {items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-sm text-[#A0A0A0]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A4A] mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
