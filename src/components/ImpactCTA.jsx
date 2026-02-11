import { motion } from 'framer-motion';

const ImpactCTA = ({ onApply, onRequestProspectus }) => {
    return (
        <section className="py-32 px-6 bg-midnight relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-midnight-light rounded-[4rem] p-16 md:p-32 text-center overflow-hidden border border-white/10"
                >
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne/5 rounded-full -ml-48 -mb-48 blur-[120px]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-8 block">Academic Excellence</span>
                        <h2 className="font-serif text-5xl md:text-8xl font-bold text-ivory mb-10 leading-[0.9] tracking-tighter">
                            Build Your <span className="text-champagne italic">Legacy</span>
                        </h2>
                        <p className="text-ivory/50 text-xl md:text-2xl mb-16 font-light leading-relaxed">
                            Admissions are now open for the Academic Year 2026-27. Secure your child's seat in our boutique academy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onApply}
                                className="bg-champagne text-midnight px-14 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-2xl shadow-champagne/20"
                            >
                                Apply for Admission
                            </motion.button>
                            <button
                                onClick={onRequestProspectus}
                                className="bg-transparent border border-white/20 text-ivory hover:bg-white hover:text-midnight px-14 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all"
                            >
                                Request Prospectus
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactCTA;
