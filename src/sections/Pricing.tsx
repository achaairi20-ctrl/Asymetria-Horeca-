import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { Check, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Pricing() {
  const { t } = useTranslation();

  const packs = [
    { key: '1', featured: false },
    { key: '2', featured: true },
    { key: '3', featured: false },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {t('pricing.title')}
            </h2>
            <p className="mt-4 text-[#A0A0A0]">{t('pricing.subtitle')}</p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packs.map((pack, index) => {
            const features = t(`pricing.packs.${pack.key}.features`, {
              returnObjects: true,
            }) as string[];
            const hasSubprice = pack.key === '3';
            const badge = pack.featured
              ? t(`pricing.packs.${pack.key}.badge`)
              : null;

            return (
              <ScrollReveal key={pack.key} delay={index * 0.2}>
                <motion.div
                  className="relative h-full group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-[2px] rounded-xl blur-md transition-all duration-500 ${pack.featured
                      ? 'bg-gradient-to-r from-[#C9A962]/50 via-[#F3E2C3]/50 to-[#C9A962]/50 opacity-75 group-hover:opacity-100 group-hover:blur-xl'
                      : 'bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent opacity-50 group-hover:opacity-100 group-hover:via-[#2D5A4A]/50 group-hover:blur-lg'
                    }`} />

                  {/* Card Content Container */}
                  <div className={`relative p-8 rounded-xl h-full flex flex-col bg-[#111111] ${pack.featured
                      ? 'border border-[#C9A962]/30'
                      : 'border border-[#2A2A2A]/50 block'
                    }`}>
                    {badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <Badge className="bg-[#C9A962] hover:bg-[#D5B876] text-black font-semibold px-4 py-1.5 shadow-[0_0_15px_rgba(201,169,98,0.5)] transition-all">
                          <Star className="w-3.5 h-3.5 mr-1.5 fill-black" />
                          {badge}
                        </Badge>
                      </div>
                    )}

                    <div className="mb-6 relative z-10">
                      <h3 className="text-xl font-semibold text-white font-['Plus_Jakarta_Sans']">
                        {t(`pricing.packs.${pack.key}.name`)}
                      </h3>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-white font-['JetBrains_Mono']">
                          {t(`pricing.packs.${pack.key}.price`)}
                        </span>
                        {hasSubprice && (
                          <p className="text-sm text-[#666666] mt-1">
                            {t(`pricing.packs.${pack.key}.subprice`)}
                          </p>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow relative z-10">
                      {features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-[#A0A0A0]"
                        >
                          <Check className="w-4 h-4 text-[#2D5A4A] mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={scrollToContact}
                      className={`relative z-10 w-full py-4 rounded font-medium transition-all duration-300 ${pack.featured
                          ? 'bg-[#2D5A4A] text-white hover:bg-[#3d7a64] shadow-[0_0_20px_rgba(45,90,74,0.3)] hover:shadow-[0_0_25px_rgba(45,90,74,0.5)]'
                          : 'bg-[#1A1A1A] border border-[#2A2A2A] text-white hover:bg-[#222222] hover:border-[#333333]'
                        }`}
                    >
                      {t(`pricing.packs.${pack.key}.cta`)}
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="text-center text-[#666666] text-sm mt-8">
            {t('pricing.note')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
