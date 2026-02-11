import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import principalImage from '../assets/principal.jpeg';

const Message = ({ onReadMore }) => {

    return (
        <section className="py-32 px-6 bg-midnight relative overflow-hidden" id="about">
            {/* Layered Background Text */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
                <span className="font-serif text-[20vw] font-bold text-ivory leading-none whitespace-nowrap">
                    EXCELLENCE
                </span>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-champagne/10 rounded-full blur-[120px]"></div>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                            <img
                                src={principalImage}
                                alt="Principal"
                                className="w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl hidden md:block"
                        >
                            <Quote className="text-champagne mb-4" size={32} />
                            <p className="text-ivory font-serif text-xl italic leading-tight">
                                "Wisdom is the <br />
                                foundation of <br />
                                leadership."
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-champagne font-bold text-xs tracking-[0.4em] uppercase mb-6 block drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">Philosophy of Excellence</span>
                        <h2 className="font-serif text-5xl md:text-7xl font-bold text-ivory leading-[1.1] mb-10">
                            A Word from <br /> <span className="text-champagne italic">Our Principal</span>
                        </h2>

                        <p className="text-ivory/60 text-lg md:text-xl leading-relaxed mb-10 font-light italic border-l-2 border-champagne/30 pl-8">
                            "We don't just educate; we cultivate global torchbearers. At Athenia, we believe wisdom is achieved through a perfect balance of tradition and innovation."
                        </p>

                        <p className="text-ivory/40 mb-12 leading-relaxed text-lg">
                            Our holistic approach ensures that every child finds their voice. Through artisanal mentorship and exposure to global research, we shape minds that don't just solve problems—they foresee them.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onReadMore}
                            className="group bg-midnight-light border border-white/10 text-ivory px-10 py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:border-champagne hover:text-champagne transition-all shadow-xl shadow-black/40 flex items-center gap-4"
                        >
                            The Leadership Note
                            <span className="w-2 h-2 rounded-full bg-champagne group-hover:scale-150 transition-transform"></span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Message;
