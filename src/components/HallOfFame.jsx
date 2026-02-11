import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const alumni = [
    {
        name: "Aaryan Malhotra",
        year: "Class of 2015",
        role: "Senior Engineer at SpaceX",
        quote: "Athenia didn't just teach me science; it taught me how to ask the right questions. The curiosity sparked in the robotics lab is what drives me today.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Sanya Kapoor",
        year: "Class of 2018",
        role: "International Human Rights Lawyer",
        quote: "The emphasis on global values and public speaking at Athenia gave me the confidence to represent voices that need to be heard on the world stage.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Rohan Varma",
        year: "Class of 2012",
        role: "Award-winning Architect",
        quote: "The sprawling green campus wasn't just a place to play—it was my first lesson in how space influences creativity and well-being.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop"
    }
];

const HallOfFame = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % alumni.length);
    const prev = () => setCurrent((prev) => (prev - 1 + alumni.length) % alumni.length);

    return (
        <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="hall-of-fame">
            <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="w-full lg:w-1/2">
                        <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Legacy of Excellence</span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
                            The Athenia <br /> <span className="text-gold">Hall of Fame</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-lg">
                            Our alumni are shaping the future across industries, carrying the wisdom they gathered within our walls to the ends of the earth.
                        </p>

                        <div className="flex gap-4">
                            <button onClick={prev} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-royal-blue transition-all group">
                                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button onClick={next} className="w-14 h-14 rounded-full bg-gold text-royal-blue flex items-center justify-center hover:bg-white transition-all group">
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0"
                            >
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] h-full flex flex-col justify-between relative">
                                    <Quote className="absolute top-8 right-8 text-gold/20" size={80} />

                                    <div>
                                        <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-slate-200 mb-8">
                                            "{alumni[current].quote}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <img
                                            src={alumni[current].image}
                                            alt={alumni[current].name}
                                            className="w-20 h-20 rounded-2xl object-cover border-2 border-gold/50"
                                        />
                                        <div>
                                            <h4 className="text-xl font-bold font-serif text-white">{alumni[current].name}</h4>
                                            <p className="text-gold text-sm font-bold uppercase tracking-widest">{alumni[current].year}</p>
                                            <p className="text-slate-400 text-sm mt-1">{alumni[current].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HallOfFame;
