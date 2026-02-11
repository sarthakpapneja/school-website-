import { motion } from 'framer-motion';

const StatItem = ({ label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-12 glass border border-white/5 rounded-[3rem] relative group overflow-hidden"
    >
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-champagne/5 rounded-full blur-[40px] group-hover:bg-champagne/10 transition-all duration-700"></div>

        <div className="font-serif text-6xl md:text-8xl font-bold text-champagne mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform duration-700">
            {value}
        </div>
        <div className="text-ivory/40 text-[10px] font-bold tracking-[0.4em] uppercase text-center">{label}</div>
    </motion.div>
);

const Stats = () => {
    return (
        <section className="py-24 px-6 bg-midnight relative z-10 overflow-hidden">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/stats_background_1770840447045.png"
                    alt="Global Connectivity"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <StatItem label="Years of Wisdom" value="30+" delay={0.1} />
                    <StatItem label="Global Scholars" value="5K" delay={0.2} />
                    <StatItem label="Elite Faculty" value="150" delay={0.3} />
                    <StatItem label="Campus Acres" value="25" delay={0.4} />
                </div>
            </div>
        </section>
    );
};

export default Stats;
