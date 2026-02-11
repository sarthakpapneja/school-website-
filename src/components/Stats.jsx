import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Digit = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const springValue = useSpring(0, {
        stiffness: 100,
        damping: 30,
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, springValue, value]);

    const displayValue = useTransform(springValue, (latest) => Math.round(latest));
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        displayValue.on("change", (latest) => setCurrent(latest));
    }, [displayValue]);

    return <span ref={ref}>{current}</span>;
};

const Stats = () => {
    const stats = [
        { label: "Acres Campus", value: 13, suffix: "+" },
        { label: "Global Alumni", value: 5000, suffix: "+" },
        { label: "Sports Medals", value: 450, suffix: "+" },
        { label: "Faculty Experts", value: 120, suffix: "+" },
    ];

    return (
        <section className="py-20 bg-royal-blue text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-4xl md:text-6xl font-serif font-black mb-2 text-gold">
                                <Digit value={stat.value} />{stat.suffix}
                            </div>
                            <div className="text-slate-300 font-bold uppercase tracking-widest text-xs md:text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
