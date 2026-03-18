import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
                                        Politique de confidentialité
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
                                    <h3 className="text-white font-semibold mb-2">1. Responsable du traitement</h3>
                                    <p>
                                        Asimetria Horeca, agence de conseil stratégique pour établissements HORECA basée à Bruxelles, est responsable du traitement de vos données personnelles collectées via ce site web.
                                        <br />Contact : <span className="text-[#2D5A4A]">contact@asimetria-horeca.be</span>
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">2. Données collectées</h3>
                                    <p>Dans le cadre de l'utilisation de notre formulaire de contact, nous collectons les données suivantes :</p>
                                    <ul className="mt-2 space-y-1 list-disc list-inside text-[#808080]">
                                        <li>Nom et prénom</li>
                                        <li>Nom de l'établissement</li>
                                        <li>Quartier et localisation</li>
                                        <li>Chiffre d'affaires estimé</li>
                                        <li>Objectif principal</li>
                                        <li>Message libre</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">3. Finalité du traitement</h3>
                                    <p>
                                        Vos données sont collectées uniquement dans le but de traiter votre demande de diagnostic et d'établir un premier contact commercial. Elles ne sont jamais utilisées à des fins de prospection non sollicitée, ni vendues ou cédées à des tiers.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">4. Base légale</h3>
                                    <p>
                                        Le traitement de vos données repose sur votre consentement explicite, exprimé lors de la soumission du formulaire de contact, conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">5. Durée de conservation</h3>
                                    <p>
                                        Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, puis supprimées de nos systèmes à moins qu'une relation contractuelle n'ait été établie.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">6. Vos droits</h3>
                                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                                    <ul className="mt-2 space-y-1 list-disc list-inside text-[#808080]">
                                        <li>Droit d'accès à vos données</li>
                                        <li>Droit de rectification</li>
                                        <li>Droit à l'effacement ("droit à l'oubli")</li>
                                        <li>Droit à la portabilité des données</li>
                                        <li>Droit d'opposition au traitement</li>
                                    </ul>
                                    <p className="mt-2">
                                        Pour exercer ces droits, contactez-nous à <span className="text-[#2D5A4A]">contact@asimetria-horeca.be</span>. Vous pouvez également introduire une réclamation auprès de l'Autorité de protection des données belge (APD) : <span className="text-[#2D5A4A]">www.autoriteprotectiondonnees.be</span>
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">7. Cookies</h3>
                                    <p>
                                        Ce site utilise uniquement des cookies techniques essentiels au bon fonctionnement et des préférences de langue (stockage local). Aucun cookie publicitaire ni de tracking tiers n'est utilisé.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-white font-semibold mb-2">8. Sécurité</h3>
                                    <p>
                                        Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
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
