import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, Eye, Server, FileText } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1200] flex items-center justify-center p-6 bg-midnight/95 backdrop-blur-3xl overflow-y-auto" onClick={onClose}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-midnight-light border border-white/10 rounded-[3rem] w-full max-w-4xl p-12 lg:p-20 relative shadow-2xl overflow-y-auto max-h-[90vh]"
                        data-lenis-prevent
                    >
                        {/* Close Button */}
                        <button onClick={onClose} className="absolute top-8 right-8 p-4 glass rounded-full text-ivory/50 hover:text-champagne transition-colors shadow-xl z-50">
                            <X size={24} />
                        </button>

                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 bg-champagne rounded-2xl flex items-center justify-center text-midnight shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                                    <Shield size={32} />
                                </div>
                                <div>
                                    <span className="text-champagne font-bold text-[10px] tracking-[0.5em] uppercase mb-2 block">Institutional Integrity</span>
                                    <h2 className="font-serif text-4xl lg:text-6xl font-bold text-ivory leading-tight uppercase tracking-tighter">
                                        Privacy <span className="text-champagne italic">Protocol</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-12 text-ivory/70 leading-relaxed font-light text-lg lg:text-xl">
                                <section>
                                    <h3 className="text-ivory font-serif text-2xl mb-6 flex items-center gap-4">
                                        <Lock size={20} className="text-champagne" />
                                        Foundational Privacy
                                    </h3>
                                    <p>
                                        Athenia High School is committed to safeguarding the digital footprint of our scholars and their families. We handle all data with the same artisanal care we apply to our mentorship.
                                    </p>
                                </section>

                                <section className="grid md:grid-cols-2 gap-12">
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                        <Eye size={24} className="text-champagne mb-4" />
                                        <h4 className="text-ivory font-bold text-xs tracking-widest uppercase mb-4">Observation</h4>
                                        <p className="text-sm">We collect minimal data through our 'Portal of Aspiration' solely for the purpose of academic evaluation and communication.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                        <Server size={24} className="text-champagne mb-4" />
                                        <h4 className="text-ivory font-bold text-xs tracking-widest uppercase mb-4">Sanctuary Storage</h4>
                                        <p className="text-sm">All student records are encrypted and stored within our secure heritage infrastructure, never shared with third-party entities.</p>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-ivory font-serif text-2xl mb-6 flex items-center gap-4">
                                        <FileText size={20} className="text-champagne" />
                                        Academic Disclosure
                                    </h3>
                                    <p>
                                        In alignment with CBSE protocols and global digital safety standards, we ensure that every interaction with our portal is transparent. Scholars are taught digital citizenship as a core part of the Athenia curriculum.
                                    </p>
                                </section>

                                <div className="pt-12 border-t border-white/5 flex justify-between items-center text-[10px] tracking-widest uppercase font-bold text-ivory/20">
                                    <p>Last Updated: February 2026</p>
                                    <p>Athenia Heritage Campus</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PrivacyModal;
