import { motion } from 'framer-motion';
import { Target, Heart, Globe, Users, Brain, Shield } from 'lucide-react';

const Section = ({ title, children, className = "" }) => (
    <div className={`mb-24 ${className}`}>
        <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-4xl text-ivory mb-8 border-l-4 border-champagne pl-6"
        >
            {title}
        </motion.h3>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ivory/80 text-lg leading-relaxed font-light space-y-6"
        >
            {children}
        </motion.div>
    </div>
);

const Pillow = ({ title, icon: Icon, items }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors"
    >
        <div className="w-16 h-16 bg-champagne/10 rounded-2xl flex items-center justify-center text-champagne mb-8">
            <Icon size={32} />
        </div>
        <h4 className="font-serif text-2xl text-ivory mb-6">{title}</h4>
        <ul className="space-y-4">
            {items.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-ivory/70 text-sm font-light">
                    <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2 shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

const About = () => {
    return (
        <section className="py-32 bg-midnight-light relative overflow-hidden" id="about">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <span className="text-champagne font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Philosophy</span>
                        <h2 className="font-serif text-5xl md:text-7xl text-ivory mb-8">Committed to <span className="text-champagne italic">Excellence</span></h2>
                        <p className="text-xl text-ivory/60 font-light leading-relaxed">
                            Established in 2017, Athenia High School is a premier <span className="text-champagne">CBSE-affiliated school</span> that reflects the vibrant energy of Saharanpur.
                            We follow the theory of <span className="text-champagne">Vasudhaiva Kutumbakam</span> — the world is one family.
                        </p>
                    </motion.div>

                    <Section title="Mission">
                        <p>
                            SEEK WISDOM AND STRIVE FOR SOCIAL, ETHICAL AND EMOTIONAL LEARNING OF THE CHILD.
                        </p>
                        <p>
                            Athenia High is synonymous with quality education and is a pioneer in mooting all-round development.
                            It fosters an education system which aims at the flowering of the child's physical, emotional, mental and spiritual personality.
                            Our endeavour is to impart education which looks beyond the frontiers of formal education. It is, in fact, a preparation for lifelong learning.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-midnight p-8 rounded-3xl border border-white/5">
                            <div>
                                <h5 className="text-champagne font-bold uppercase tracking-widest text-xs mb-4">We Aim At</h5>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3"><Globe size={16} className="text-champagne" /> Maintaining a global perspective</li>
                                    <li className="flex items-center gap-3"><Users size={16} className="text-champagne" /> Embracing cultural diversity</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section title="Vision">
                        <p className="text-2xl font-serif text-champagne italic mb-8">"TEACH WITH PASSION – TRAIN WITH A VISION"</p>
                        <p>
                            Our vision aligns with shifts in the global economy, society, and environment. We believe in letting actions speak louder than words.
                            We are widely acknowledged as a secular institution which develops character and ethical leadership.
                        </p>
                        <p>
                            Knowledge acquired from education is not merely for the cultivation of our sensibilities or a step towards elevated employment
                            but must be used in the service of humanity.
                        </p>
                    </Section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <Pillow
                            title="Academic Success"
                            icon={Brain}
                            items={[
                                "Acquisition of academic skills",
                                "Curriculum emphasising practical, technological approach",
                                "Languages as a skill development tool",
                                "Training to apply knowledge to real-life situations",
                                "Benchmarked results on global standards"
                            ]}
                        />
                        <Pillow
                            title="Social Success"
                            icon={Heart}
                            items={[
                                "Development of strong identity and self worth",
                                "Ability to relate, connect and communicate",
                                "Cultural sensitivity and acceptance",
                                "Valuing justice and fairness",
                                "Being service-oriented unconditionally"
                            ]}
                        />
                        <Pillow
                            title="Personal Success"
                            icon={Shield}
                            items={[
                                "Being a lifelong learner with keen spirit of inquiry",
                                "Developing a value-based and ethical outlook",
                                "Imbibing cognitive and behavioural skills",
                                "Students will be: Thinkers, Communicators, Principled, Balanced, Reflective" // Condensed for layout
                            ]}
                        />
                        <Pillow
                            title="Global Mindset"
                            icon={Globe}
                            items={[
                                "Value human spirit beyond cultural boundaries",
                                "Develop awareness of global issues",
                                "Understand impact of one’s thoughts on the world",
                                "Think globally and act locally"
                            ]}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
