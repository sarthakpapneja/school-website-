import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

const Message = () => {
    const { ref: magneticRef, position } = useMagnetic(0.3);

    return (
        <section className="py-24 px-6 bg-white overflow-hidden" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side with Decorative Border */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -top-10 -left-10 w-40 h-40 border-l-8 border-t-8 border-gold z-0 hidden md:block opacity-30"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-8 border-b-8 border-royal-blue z-0 hidden md:block opacity-30"></div>

                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?q=80&w=2070&auto=format&fit=crop"
                                alt="School Principal"
                                className="w-full aspect-[4/5] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="font-serif text-3xl font-bold">Dr. Anita Sharma</p>
                                <p className="text-gold uppercase tracking-[0.2em] text-sm mt-2">Principal & Founder</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Words from the Principal</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-8 leading-tight">
                            A Culture of Excellence & <span className="text-gold">Continuous Inquiry</span>
                        </h2>

                        <div className="prose prose-lg text-slate-600 space-y-6">
                            <p>
                                Welcome to Athenia High School, where every student's potential is nurtured with care and precision. Our philosophy, "Seek Wisdom," is more than just a motto; it is the heartbeat of our community.
                            </p>
                            <p>
                                We believe that education must go beyond textbooks. At Athenia, we cultivate critical thinkers, compassionate citizens, and courageous leaders. Through a blend of classical values and modern technology, we prepare our students for the unknowns of tomorrow.
                            </p>
                            <p className="font-serif italic text-royal-blue text-xl border-l-4 border-gold pl-6 py-2">
                                "Our mission is to create an environment where curiosity is celebrated, and character is built alongside competence."
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <motion.button
                                ref={magneticRef}
                                animate={{ x: position.x, y: position.y }}
                                className="bg-royal-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-royal-blue/20"
                            >
                                Read Full Message
                            </motion.button>
                            <div className="w-20 h-[1px] bg-slate-200"></div>
                            <p className="text-slate-400 text-sm italic">Seek Wisdom Since 1995</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Message;
