import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  Utensils,
  BarChart3,
  Workflow,
  TrendingUp,
  MapPinned,
  Cpu,
} from 'lucide-react';

const icons = [Utensils, BarChart3, Workflow, TrendingUp, MapPinned, Cpu];

export function WhyAsimetria() {
  const { t } = useTranslation();

  const items = [
    'whyAsimetria.items.0',
    'whyAsimetria.items.1',
    'whyAsimetria.items.2',
    'whyAsimetria.items.3',
    'whyAsimetria.items.4',
    'whyAsimetria.items.5',
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {t('whyAsimetria.title')}
            </h2>
            <p className="mt-4 text-[#A0A0A0]">{t('whyAsimetria.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="p-6 bg-[#111111] border border-[#2A2A2A] rounded-lg"
                  whileHover={{
                    borderColor: '#2D5A4A',
                    y: -4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2D5A4A]/10 mb-4">
                    <Icon className="w-5 h-5 text-[#2D5A4A]" />
                  </div>
                  <p className="text-white font-medium">{t(item)}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
