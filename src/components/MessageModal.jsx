import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, Sparkles } from 'lucide-react';
import principalImage from '../assets/principal.jpeg';

const MessageModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] overflow-y-auto bg-midnight/95 backdrop-blur-3xl"
                onClick={onClose}
            >
                <div className="min-h-screen w-full flex items-center justify-center p-6 py-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="bg-midnight-light border border-white/10 rounded-[3.5rem] w-full max-w-5xl overflow-hidden shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-10 right-10 z-10 p-4 glass rounded-full text-ivory/50 hover:text-champagne transition-colors group">
                            <X size={28} className="group-hover:rotate-90 transition-transform duration-500" />
                        </button>

                        <div className="flex flex-col lg:flex-row">
                            {/* Image Side */}
                            <div className="w-full lg:w-2/5 relative h-[400px] lg:h-auto overflow-hidden">
                                <img
                                    src={principalImage}
                                    className="w-full h-full object-cover"
                                    alt="Principal"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10">
                                    <h3 className="font-serif text-3xl font-bold text-ivory">Mrs. Leena Dua</h3>
                                    <p className="text-champagne font-bold text-xs tracking-widest uppercase">Principal & Lead Mentor</p>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center">
                                <Quote className="text-champagne/20 mb-10" size={60} />

                                <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-6 block">Legacy Of Leadership</span>
                                <h2 className="font-serif text-4xl lg:text-6xl font-bold text-ivory leading-tight mb-8">
                                    Cultivating the <br /><span className="text-champagne italic">Visionary Mind</span>
                                </h2>

                                <div className="prose prose-invert max-w-none space-y-6 text-ivory/60 text-lg font-light leading-relaxed">
                                    <p>
                                        At Athenia, we believe that education is not the filling of a vessel, but the kindling of a flame.
                                        In an era defined by rapid technological acceleration, we anchor our students in the timeless
                                        virtues of critical thinking and emotional intelligence.
                                    </p>
                                    <p>
                                        Our artisanal approach to mentorship ensures that every student is seen, heard, and challenged
                                        to reach beyond their perceived limits. We don't just prepare students for universities;
                                        we prepare them for a lifetime of seeking truth and leading with wisdom.
                                    </p>
                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                        <div>
                                            <h4 className="text-ivory font-bold mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-champagne" /> Boutique Focus
                                            </h4>
                                            <p className="text-sm opacity-50">1:8 Teacher-student ratio for personalized growth.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-ivory font-bold mb-2 flex items-center gap-2">
                                                <Sparkles size={16} className="text-champagne" /> Global Horizon
                                            </h4>
                                            <p className="text-sm opacity-50">Immersion programs in 12 partner nations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default MessageModal;
