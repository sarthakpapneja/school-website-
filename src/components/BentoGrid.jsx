import { motion } from 'framer-motion';
import { Microscope, Laptop, Music, Dumbbell, Sparkles, ArrowUpRight } from 'lucide-react';

const Card = ({ title, icon: Icon, image, span, delay, desc }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true, margin: "-50px" }}
        className={`relative rounded-[2.5rem] overflow-hidden group border border-white/5 cursor-none ${span}`}
        style={{ willChange: 'transform' }}
    >
        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80 group-hover:via-midnight/40 transition-all duration-700"></div>

        {/* Parallax Image Wrapper */}
        <div className="absolute inset-0 overflow-hidden transform-gpu">
            <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-[110%] h-[110%] -left-[5%] -top-[5%] object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2 opacity-60 group-hover:opacity-100"
            />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end h-full pointer-events-none">
            <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-champagne mb-6 group-hover:bg-champagne group-hover:text-midnight transition-all transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 shadow-2xl shadow-black/50">
                <Icon size={24} />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-2 group-hover:text-champagne transition-colors leading-tight drop-shadow-lg">
                {title}
            </h3>

            <p className="text-ivory/80 text-sm md:text-base font-light max-w-xs transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                {desc}
            </p>

            {/* Exploration Hint */}
            <div className="mt-6 flex items-center gap-3 transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                <span className="text-[10px] font-bold tracking-[0.3em] text-champagne uppercase">Explore Facility</span>
                <div className="w-8 h-[1px] bg-champagne/50" />
            </div>
        </div>

        {/* Collaborative Cursor Trigger Area */}
        <div className="absolute inset-0 z-50 cursor-none hover-trigger" />
    </motion.div>
);

const BentoGrid = () => {
    const items = [
        {
            title: "13-Acre Estate",
            icon: Laptop,
            desc: "A sprawling 52,680 sq.m. estate where nature and innovation coexist in perfect harmony.",
            image: "/assets/campus_masterplan.jpg",
            span: "md:col-span-2 md:row-span-2",
            delay: 0.1
        },
        {
            title: "Heritage Architecture",
            icon: Microscope,
            desc: "Exposed brick facades that breathe, designed for natural cooling and timeless aesthetics.",
            image: "/assets/campus_facade_real.jpg",
            span: "md:col-span-1 md:row-span-1",
            delay: 0.2
        },
        {
            title: "Open-Air Corridors",
            icon: ArrowUpRight,
            desc: "Walkways bathed in sunlight, connecting minds to the elements.",
            image: "/assets/campus_corridor_real.jpg",
            span: "md:col-span-1 md:row-span-1",
            delay: 0.3
        },
        {
            title: "Sports & Vitality",
            icon: Dumbbell,
            desc: "Expansive courts and grounds for holistic physical development under the open sky.",
            image: "/assets/campus_court_real.jpg",
            span: "md:col-span-2 md:row-span-1",
            delay: 0.4
        }
    ];

    return (
        <section className="py-32 px-6 bg-midnight relative overflow-hidden" id="infrastructure">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-champagne/5 rounded-full blur-[150px] pointer-events-none will-change-transform"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 glass rounded-full flex items-center justify-center text-champagne mb-8 border border-white/10"
                    >
                        <Sparkles size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-6xl md:text-8xl font-bold text-ivory mb-8"
                    >
                        Boutique <span className="text-champagne italic">Infrastructure</span>
                    </motion.h2>
                    <p className="text-ivory/60 text-xl max-w-2xl font-light leading-relaxed">
                        Every square inch of our estate is architected to inspire curiosity and facilitate deep-learning protocols.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[800px]">
                    {items.map((item, idx) => (
                        <Card key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
