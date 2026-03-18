import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function Storytelling() {
  const { t } = useTranslation();

  const metrics = [
    { key: 'visibility', value: 340, suffix: '%' },
    { key: 'calls', value: 180, suffix: '%' },
    { key: 'reservations', value: 65, suffix: '%' },
  ];

  return (
    <section id="storytelling" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {t('storytelling.title')}
            </h2>
            <p className="mt-4 text-[#A0A0A0]">{t('storytelling.subtitle')}</p>
          </div>
        </ScrollReveal>

        {/* Story Sections */}
        <div className="mt-16 space-y-16">
          {/* Before */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-[#C9A962] font-medium text-sm tracking-wider">
                  ÉTAPE 1
                </span>
                <h3 className="text-2xl font-semibold text-white mt-2 font-['Plus_Jakarta_Sans']">
                  {t('storytelling.sections.before.title')}
                </h3>
                <p className="mt-4 text-[#A0A0A0] leading-relaxed">
                  {t('storytelling.sections.before.description')}
                </p>
              </div>
              <div className="aspect-video bg-[#111111] rounded-lg flex items-center justify-center border border-[#2A2A2A]">
                <span className="text-6xl text-[#2A2A2A] font-['JetBrains_Mono']">
                  ?
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Diagnostic */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 aspect-video bg-[#111111] rounded-lg flex items-center justify-center border border-[#2A2A2A]">
                <div className="w-32 h-32 rounded-full border-4 border-[#2D5A4A]/30 border-t-[#2D5A4A] animate-spin" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[#C9A962] font-medium text-sm tracking-wider">
                  ÉTAPE 2
                </span>
                <h3 className="text-2xl font-semibold text-white mt-2 font-['Plus_Jakarta_Sans']">
                  {t('storytelling.sections.diagnostic.title')}
                </h3>
                <p className="mt-4 text-[#A0A0A0] leading-relaxed">
                  {t('storytelling.sections.diagnostic.description')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Repositioning */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-[#C9A962] font-medium text-sm tracking-wider">
                  ÉTAPE 3
                </span>
                <h3 className="text-2xl font-semibold text-white mt-2 font-['Plus_Jakarta_Sans']">
                  {t('storytelling.sections.repositioning.title')}
                </h3>
                <p className="mt-4 text-[#A0A0A0] leading-relaxed">
                  {t('storytelling.sections.repositioning.description')}
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="/images/data-viz.jpg"
                  alt="Growth visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal>
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white text-center font-['Plus_Jakarta_Sans']">
                {t('storytelling.sections.results.title')}
              </h3>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.key}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-5xl font-bold text-[#2D5A4A] font-['JetBrains_Mono']">
                      +
                      <AnimatedCounter
                        end={metric.value}
                        suffix={metric.suffix}
                        duration={2500}
                      />
                    </div>
                    <p className="mt-2 text-[#A0A0A0]">
                      {t(
                        `storytelling.sections.results.metrics.${metric.key}`
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
