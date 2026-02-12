import { motion } from 'framer-motion';
import { BookOpen, Target, Award, ArrowUpRight, Trophy, Globe2, Users, Sparkles } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

const FeatureCard = ({ icon: Icon, title, desc, delay, onClick }) => {
    const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className="group bg-white/5 p-12 rounded-[3.5rem] border border-white/5 hover:border-champagne/30 transition-all duration-700 cursor-pointer overflow-hidden relative"
        >
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-champagne/5 rounded-full blur-[80px] group-hover:bg-champagne/10 transition-all duration-700"></div>

            <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-champagne mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-champagne group-hover:text-midnight shadow-2xl shadow-champagne/5" style={{ transform: 'translateZ(60px)' }}>
                <Icon size={40} />
            </div>

            <div style={{ transform: 'translateZ(40px)' }}>
                <h3 className="font-serif text-3xl font-bold text-ivory mb-6 leading-tight group-hover:text-champagne transition-colors">{title}</h3>
                <p className="text-ivory/50 leading-relaxed text-lg font-light mb-10">{desc}</p>
            </div>

            <div className="mt-auto flex items-center justify-between group-hover:text-champagne transition-colors" style={{ transform: 'translateZ(30px)' }}>
                <div className="flex flex-col">
                    <span className="text-ivory/30 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Pillar Of</span>
                    <span className="text-champagne font-bold text-xs tracking-widest uppercase">Excellence</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-champagne group-hover:bg-champagne group-hover:text-midnight transition-all">
                    <ArrowUpRight size={20} />
                </div>
            </div>
        </motion.div>
    );
};

const features = [
    {
        title: "Global University Placement Cell",
        description: "Strong placement record in premier Indian and International institutions, with dedicated guidance for Class XII.",
        icon: <Trophy size={28} className="text-champagne" />
    },
    {
        title: "Cultural Exchange & Global Exposure",
        description: "International exchange programs, MUN collaborations, and cross-border academic initiatives.",
        icon: <Globe2 size={28} className="text-champagne" />
    },
    {
        title: "Boutique Mentorship",
        description: "A 4:1 student-faculty ratio ensures hyper-personalized academic guidance for competitive excellence.",
        icon: <Users size={28} className="text-champagne" />
    }
];

const Features = ({ onLearnMore }) => {
    return (
        <section className="py-32 bg-midnight relative overflow-hidden" id="philosophy">
            {/* Background Blend */}
            <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                    alt="Campus Library"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="flex items-center gap-2 text-champagne font-bold tracking-[0.3em] uppercase text-xs mb-6">
                                <Sparkles size={14} />
                                The Athenia Standard
                            </span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="font-serif text-5xl md:text-7xl font-bold text-ivory leading-tight mb-8"
                            >
                                The Athenia <br /><span className="text-champagne italic">Advantage</span>
                            </motion.h2>
                            <p className="text-ivory/70 text-lg leading-relaxed mb-12 max-w-lg font-light">
                                We don't just educate; we curate the environment for greatness.
                                Every aspect of Athenia is designed to propel students toward elite outcomes.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    onClick={() => onLearnMore(feature)}
                                    className="p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-champagne/30 transition-all cursor-pointer group backdrop-blur-sm"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="p-3 rounded-full bg-champagne/10 group-hover:bg-champagne/20 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-ivory mb-2 group-hover:text-champagne transition-colors">{feature.title}</h3>
                                            <p className="text-ivory/60 font-light text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual spacer for the background image area */}
                    <div className="hidden md:block" />
                </div>
            </div>
        </section>
    );
};

export default Features;
