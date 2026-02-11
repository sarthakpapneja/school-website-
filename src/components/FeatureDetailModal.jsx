import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Target, Zap, Globe } from 'lucide-react';

const FeatureDetailModal = ({ isOpen, onClose, feature }) => {
    if (!isOpen || !feature) return null;

    const content = {
        "Holistic Mastery": {
            fullDesc: "Our curriculum transcends standard parameters. We integrate neural-science backed learning protocols with classical philosophy to ensure students master not just the 'how', but the 'why' of global systems.",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
            modules: ["Cognitive Logic", "Emotional Resilience", "Ethical Leadership"]
        },
        "Global Ready": {
            fullDesc: "Preparation for the 22nd century requires more than coding. It requires spatial computing, AI ethical frameworks, and the ability to navigate complex geopolitical landscapes through our Silicon Valley partnerships.",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd378a?q=80&w=2070&auto=format&fit=crop",
            modules: ["AI & Logic Labs", "Geopolitical Strategy", "Quantum Computing"]
        },
        "Elite Mentors": {
            fullDesc: "Our educators are practitioners at the pinnacle of their fields. From former Ivy League deans to Silicon Valley innovators, our faculty provides artisanal mentorship that shapes character alongside intellect.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
            modules: ["Artisanal Mentorship", "Peer-to-Peer Labs", "Executive Pathways"]
        }
    }[feature.title] || {
        fullDesc: feature.desc,
        image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?q=80&w=2070",
        modules: ["Foundational Wisdom", "Heritage", "Innovation"]
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/95 backdrop-blur-3xl overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="bg-midnight-light border border-white/10 rounded-[3.5rem] w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-10 right-10 z-20 p-4 glass rounded-full text-ivory/50 hover:text-champagne transition-colors">
                        <X size={28} />
                    </button>

                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 p-12 lg:p-20">
                            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-champagne mb-12">
                                <feature.icon size={32} />
                            </div>

                            <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-6 block">Scholastic Pillar</span>
                            <h2 className="font-serif text-5xl font-bold text-ivory mb-10 leading-tight">
                                {feature.title} <br /><span className="text-champagne italic">Protocol</span>
                            </h2>

                            <p className="text-ivory/60 text-xl font-light leading-relaxed mb-12">
                                {content.fullDesc}
                            </p>

                            <div className="space-y-6">
                                {content.modules.map(mod => (
                                    <div key={mod} className="flex items-center gap-5 glass p-5 rounded-2xl border-white/5 group hover:border-champagne/30 transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-midnight flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-midnight transition-colors">
                                            <Zap size={18} />
                                        </div>
                                        <span className="text-ivory font-bold text-sm tracking-widest uppercase">{mod}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative min-h-[500px]">
                            <img
                                src={content.image}
                                alt={feature.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-midnight-light/40 via-transparent to-transparent"></div>

                            <div className="absolute bottom-12 left-12 right-12 glass p-10 rounded-3xl backdrop-blur-xl border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-champagne animate-pulse"></div>
                                    <span className="text-champagne font-bold text-[10px] tracking-[0.5em] uppercase">Now Integrating</span>
                                </div>
                                <h4 className="font-serif text-2xl text-white mb-2">Artisanal Curriculum Phase 04</h4>
                                <p className="text-ivory/40 text-sm font-light">Combining legacy wisdom with 2026 innovation frameworks.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FeatureDetailModal;
