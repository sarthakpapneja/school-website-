import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Trophy } from 'lucide-react';

const HallOfFame = () => {
    return (
        <section className="py-32 bg-midnight relative overflow-hidden" id="heritage">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-champagne/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-champagne font-bold tracking-[0.2em] uppercase text-sm block mb-4">Legacy of Leadership</span>
                        <h2 className="font-serif text-5xl md:text-7xl text-ivory">
                            The Athenia <br /><span className="text-champagne italic">Hall of Fame</span>
                        </h2>
                    </div>
                    <p className="text-ivory/60 max-w-md text-lg font-light leading-relaxed mb-2">
                        Witness the milestones and accolades of our distinguished scholars and athletes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hall of Fame Vol. 1 */}
                    <motion.a
                        href="https://heyzine.com/flip-book/bd2d473786.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border border-white/10 block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 z-10" />
                        <img
                            src="/assets/school_images/hall_of_fame_mockup.png"
                            alt="Hall of Fame Vol 1"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="w-12 h-12 bg-champagne text-midnight flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform">
                                <Trophy size={20} />
                            </div>
                            <h3 className="text-2xl font-serif text-ivory mb-1">Hall of Fame</h3>
                            <p className="text-champagne text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                View Flipbook <ExternalLink size={12} />
                            </p>
                        </div>
                    </motion.a>

                    {/* Sports Tracker */}
                    <motion.a
                        href="https://heyzine.com/flip-book/675ceaf5ff.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border border-white/10 block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 z-10" />
                        <img
                            src="/assets/school_images/sports_legacy_mockup.png"
                            alt="Sports Acheivements"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="w-12 h-12 bg-champagne text-midnight flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform">
                                <Trophy size={20} />
                            </div>
                            <h3 className="text-2xl font-serif text-ivory mb-1">Sports Legacy</h3>
                            <p className="text-champagne text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                View Flipbook <ExternalLink size={12} />
                            </p>
                        </div>
                    </motion.a>

                    {/* Episteme 2024-25 */}
                    <motion.a
                        href="https://heyzine.com/flip-book/f4f052efce.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border border-white/10 block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 z-10" />
                        <img
                            src="/assets/school_images/episteme_mockup.png"
                            alt="Episteme 2024-25"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="w-12 h-12 bg-champagne text-midnight flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform">
                                <BookOpen size={20} />
                            </div>
                            <h3 className="text-2xl font-serif text-ivory mb-1">Episteme 2024-25</h3>
                            <p className="text-champagne text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                View Flipbook <ExternalLink size={12} />
                            </p>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default HallOfFame;
