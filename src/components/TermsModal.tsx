import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-2xl max-h-[85vh] bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden pointer-events-auto"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-8 py-6 border-b border-[#2A2A2A]">
                                <div>
                                    <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                                        Conditions d'utilisation
                                    </h2>
                                    <p className="text-sm text-[#666666] mt-1">Dernière mise à jour : Février 2025</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-[#666666] hover:text-white transition-colors rounded-lg hover:bg-[#1A1A1A]"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="overflow-y-auto max-h-[calc(85vh-88px)] px-8 py-6 space-y-6 text-[#A0A0A0] text-sm leading-relaxed">

                                <section>
                                    <h3 className="text-white font-semibold mb-2">1. Objet</h3>
                                    <p>
                                        Les présentes conditions d'utilisation régissent l'accès et l'utilisation du site web d'Asimetria Horeca, agence spécialisée en repositionnement stratégique et croissance digitale pour les établissements HORECA à Bruxelles. En accédant à ce site, vous acceptez sans réserve les présentes conditions.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">2. Services proposés</h3>
                                    <p>
                                        Asimetria Horeca propose des prestations de conseil stratégique, de repositionnement de marque, d'optimisation digitale et d'accompagnement commercial pour les restaurants, cafés et établissements HORECA basés en Région de Bruxelles-Capitale.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">3. Propriété intellectuelle</h3>
                                    <p>
                                        L'ensemble des contenus présents sur ce site (textes, visuels, méthodes, structures) est la propriété exclusive d'Asimetria Horeca et est protégé par les lois belges et européennes sur la propriété intellectuelle. Toute reproduction sans autorisation préalable est interdite.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">4. Responsabilité</h3>
                                    <p>
                                        Asimetria Horeca s'engage à fournir des informations exactes et à jour sur son site. Toutefois, nous ne saurions être tenus responsables des décisions prises sur la base des informations présentes sur ce site, ni de tout dommage direct ou indirect lié à l'utilisation de ces informations.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">5. Protection des données</h3>
                                    <p>
                                        Les données collectées via le formulaire de contact sont utilisées uniquement dans le cadre de notre relation commerciale et ne sont jamais transmises à des tiers sans votre consentement. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant à <span className="text-[#2D5A4A]">contact@asimetria-horeca.be</span>.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">6. Droit applicable</h3>
                                    <p>
                                        Les présentes conditions sont soumises au droit belge. En cas de litige, les tribunaux de l'arrondissement de Bruxelles seront seuls compétents.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">7. Contact</h3>
                                    <p>
                                        Pour toute question relative aux présentes conditions, vous pouvez nous contacter à :<br />
                                        <span className="text-[#2D5A4A]">contact@asimetria-horeca.be</span><br />
                                        Asimetria Horeca — Bruxelles, Belgique
                                    </p>
                                </section>

                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
