import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    establishment: '',
    district: '',
    revenue: '',
    objective: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {t('contact.title')}
            </h2>
            <p className="mt-4 text-[#A0A0A0]">{t('contact.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 font-['Plus_Jakarta_Sans']">
                  {t('contact.info.email')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2D5A4A]/10">
                      <Mail className="w-5 h-5 text-[#2D5A4A]" />
                    </div>
                    <span className="text-[#A0A0A0]">
                      contact@asimetria-horeca.be
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2D5A4A]/10">
                      <Phone className="w-5 h-5 text-[#2D5A4A]" />
                    </div>
                    <span className="text-[#A0A0A0]">+32 2 000 00 00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2D5A4A]/10">
                      <MapPin className="w-5 h-5 text-[#2D5A4A]" />
                    </div>
                    <span className="text-[#A0A0A0]">
                      Brussels, Belgium
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  Nous répondons à toutes les demandes sous 24 heures ouvrables.
                  Chaque diagnostic est personnalisé et gratuit.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            {isSubmitted ? (
              <motion.div
                className="p-8 bg-[#1A1A1A] border border-[#2D5A4A] rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-16 h-16 text-[#2D5A4A] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t('contact.form.success')}
                </h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      {t('contact.form.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#666666] focus:border-[#2D5A4A]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="establishment" className="text-white">
                      {t('contact.form.establishment')}
                    </Label>
                    <Input
                      id="establishment"
                      name="establishment"
                      value={formData.establishment}
                      onChange={handleInputChange}
                      className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#666666] focus:border-[#2D5A4A]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="district" className="text-white">
                      {t('contact.form.district')}
                    </Label>
                    <Input
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#666666] focus:border-[#2D5A4A]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">
                      {t('contact.form.revenue')}
                    </Label>
                    <Select
                      value={formData.revenue}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, revenue: value }))
                      }
                    >
                      <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] text-white focus:ring-[#2D5A4A]">
                        <SelectValue
                          placeholder={t('contact.form.revenueOptions.small')}
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                        <SelectItem value="small">
                          {t('contact.form.revenueOptions.small')}
                        </SelectItem>
                        <SelectItem value="medium">
                          {t('contact.form.revenueOptions.medium')}
                        </SelectItem>
                        <SelectItem value="large">
                          {t('contact.form.revenueOptions.large')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">
                    {t('contact.form.objective')}
                  </Label>
                  <Select
                    value={formData.objective}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, objective: value }))
                    }
                  >
                    <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] text-white focus:ring-[#2D5A4A]">
                      <SelectValue
                        placeholder={t('contact.form.objectiveOptions.visibility')}
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                      <SelectItem value="visibility">
                        {t('contact.form.objectiveOptions.visibility')}
                      </SelectItem>
                      <SelectItem value="repositioning">
                        {t('contact.form.objectiveOptions.repositioning')}
                      </SelectItem>
                      <SelectItem value="growth">
                        {t('contact.form.objectiveOptions.growth')}
                      </SelectItem>
                      <SelectItem value="loyalty">
                        {t('contact.form.objectiveOptions.loyalty')}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    {t('contact.form.message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder:text-[#666666] focus:border-[#2D5A4A] resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-[#2D5A4A] text-white font-medium rounded flex items-center justify-center gap-2 hover:bg-[#3d7a64] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  {t('contact.form.submit')}
                </motion.button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
