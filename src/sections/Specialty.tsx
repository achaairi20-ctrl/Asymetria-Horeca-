import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

export function Specialty() {
  const { t } = useTranslation();

  const points = [
    'specialty.points.0',
    'specialty.points.1',
    'specialty.points.2',
    'specialty.points.3',
    'specialty.points.4',
    'specialty.points.5',
  ];

  const scrollToMethod = () => {
    const element = document.querySelector('#method');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
                {t('specialty.title')}
              </h2>
            </ScrollReveal>

            <div className="mt-10 space-y-4">
              {points.map((point, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#2D5A4A]/20 mt-0.5">
                      <Check className="w-4 h-4 text-[#2D5A4A]" />
                    </div>
                    <span className="text-[#A0A0A0]">{t(point)}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.6}>
              <motion.button
                onClick={scrollToMethod}
                className="mt-10 inline-flex items-center gap-2 text-[#2D5A4A] font-medium hover:text-[#3d7a64] transition-colors"
                whileHover={{ x: 4 }}
              >
                {t('specialty.cta')}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="/images/restaurant-ambiance.jpg"
                  alt="Restaurant ambiance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
                <div className="text-3xl font-bold text-[#C9A962] font-['JetBrains_Mono']">
                  +340%
                </div>
                <div className="text-sm text-[#A0A0A0] mt-1">
                  Visibilité moyenne
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
