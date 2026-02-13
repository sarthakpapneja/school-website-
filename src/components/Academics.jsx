import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Globe, Palette } from 'lucide-react';

const departments = [
    {
        id: 'stem',
        name: 'Science & Technology Wing',
        description: 'Advanced research in Physics, Chemistry, and Biology within our NCERT-aligned laboratories.',
        icon: <FlaskConical className="text-champagne" size={24} />,
        image: "/assets/campus_corridor_real.jpg"
    },
    {
        id: 'humanities',
        name: 'Liberal Arts & Social Sciences',
        description: 'Critical analysis of History, Geography, and Political Science to understand the global human condition.',
        icon: <Globe className="text-champagne" size={24} />,
        image: "/assets/campus_facade_real.jpg"
    },
    {
        id: 'arts',
        name: 'Creative & Performing Arts',
        description: 'Nurturing creative expression through Fine Arts, Music, and Dramatic performance as per CBSE guidelines.',
        icon: <Palette className="text-champagne" size={24} />,
        image: "/assets/campus_balcony_sunset.jpg"
    },
    {
        id: 'classics',
        name: 'Value Education & Holistic Growth',
        description: 'Developing character and leadership through timeless wisdom and personality development, aligned with NEP 2020.',
        icon: <BookOpen className="text-champagne" size={24} />,
        image: "/assets/students_stairs.jpg"
    }
];

const Academics = () => {
    return (
        <section className="py-24 bg-midnight relative overflow-hidden" id="academics">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-champagne font-bold tracking-[0.2em] uppercase text-sm">Academic Excellence</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-ivory mt-4 mb-6">Curriculum of <span className="italic text-champagne">Distinction</span></h2>
                    <p className="text-ivory/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Our rigorous curriculum is designed to challenge the intellect and cultivate the character of future world leaders.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {departments.map((dept, index) => (
                        <motion.div
                            key={dept.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative h-80 rounded-2xl overflow-hidden glass border border-white/5 cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={dept.image}
                                    alt={dept.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-12 rounded-full bg-champagne/10 backdrop-blur-md flex items-center justify-center mb-4 border border-champagne/20 group-hover:bg-champagne group-hover:text-midnight transition-colors duration-300">
                                        {dept.icon}
                                    </div>
                                    <h3 className="text-3xl font-serif text-ivory mb-2 group-hover:text-champagne transition-colors">{dept.name}</h3>
                                    <p className="text-ivory/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0">
                                        {dept.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Standard Checklists */}
            <div className="mt-32 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Classwork */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-midnight-light/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-champagne/30 transition-colors duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <h4 className="font-serif text-3xl text-ivory mb-8 pb-6 border-b border-white/5 flex items-center justify-between">
                                <span>Classwork <span className="block text-xs font-sans font-bold tracking-[0.3em] text-champagne mt-2 uppercase">Protocol</span></span>
                                <BookOpen className="text-champagne/20 group-hover:text-champagne/60 transition-colors duration-500" size={48} />
                            </h4>

                            <ul className="space-y-5">
                                {[
                                    "Index completion with topic number, name, page no, and date.",
                                    "Check for spelling, grammar, and syntax corrections.",
                                    "Math/Science: Steps shown, relevant formulae, scientific methods.",
                                    "Neatness, order, and legible handwriting.",
                                    "Completeness of work; ensure incomplete work is finished.",
                                    "No loose papers; encourage real-time notebook entry."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-ivory/70 font-light text-sm group/item">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne/40 group-hover/item:bg-champagne group-hover/item:scale-150 transition-all duration-300" />
                                        <span className="group-hover/item:text-ivory transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Homework */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-midnight-light/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-champagne/30 transition-colors duration-500 overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-champagne/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10">
                            <h4 className="font-serif text-3xl text-ivory mb-8 pb-6 border-b border-white/5 flex items-center justify-between">
                                <span>Homework <span className="block text-xs font-sans font-bold tracking-[0.3em] text-champagne mt-2 uppercase">Protocol</span></span>
                                <div className="text-champagne/20 group-hover:text-champagne/60 transition-colors duration-500">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                                </div>
                            </h4>

                            <ul className="space-y-5">
                                {[
                                    "Completeness of assigned work.",
                                    "Correct spellings, grammar, syntax, and methodology.",
                                    "Timely submission of work.",
                                    "Proper indexing with relevant details.",
                                    "Parent updates every 15 days via Email (Paperless Policy).",
                                    "Cultivate pre-read/post-read habits for independent learning."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-ivory/70 font-light text-sm group/item">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne/40 group-hover/item:bg-champagne group-hover/item:scale-150 transition-all duration-300" />
                                        <span className="group-hover/item:text-ivory transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                                {/* Special Highlight Item */}
                                <li className="flex items-start gap-4 text-champagne font-medium text-sm bg-champagne/5 p-4 rounded-xl border border-champagne/10">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                                    No Homework for Class I & II.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Academics;
