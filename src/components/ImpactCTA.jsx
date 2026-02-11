import { motion } from 'framer-motion';

const ImpactCTA = () => {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto">
                <div className="relative bg-royal-blue rounded-[3rem] p-12 md:p-24 overflow-hidden text-center">
                    {/* Background Decorative SVG */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" fill="none" />
                        </svg>
                    </div>

                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase mb-6 block">Ready to Begin?</span>
                        <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
                            Ignite Your Potential in a Space Designed for <span className="italic text-gold">Greatness</span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Admissions for the 2026-27 academic session are now open. Join a community where tradition meets the future.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="bg-white text-royal-blue hover:bg-gold hover:text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl transform hover:-translate-y-1">
                                Apply for Admission
                            </button>
                            <button className="text-white font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors tracking-widest uppercase text-sm">
                                Download Brochure
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ImpactCTA;
