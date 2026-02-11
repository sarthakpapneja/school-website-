import { motion } from 'framer-motion';
import { Trophy, Zap, Bus, Monitor, Sun, Book } from 'lucide-react';

const BentoGrid = () => {
    const items = [
        {
            title: "13-Acre Campus",
            desc: "Sprawling green campus with state-of-the-art facilities.",
            icon: <Book className="w-6 h-6 text-gold" />,
            colSpan: "md:col-span-2",
            bg: "bg-slate-900",
            img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop"
        },
        {
            title: "Sports Excellence",
            desc: "Dedicated grounds for Cricket, Football, & Basketball.",
            icon: <Trophy className="w-6 h-6 text-white" />,
            colSpan: "md:col-span-1",
            bg: "bg-royal-blue",
            img: "https://images.unsplash.com/photo-1577416412292-7661e371927b?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Safe Transport",
            desc: "GPS-enabled fleet ensuring student safety.",
            icon: <Bus className="w-6 h-6 text-white" />,
            colSpan: "md:col-span-1",
            bg: "bg-slate-800",
            img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2671&auto=format&fit=crop"
        },
        {
            title: "Tech-Forward",
            desc: "Smart Labs & 100% Solar Powered Campus.",
            icon: <Sun className="w-6 h-6 text-gold" />,
            colSpan: "md:col-span-2",
            bg: "bg-gold",
            img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white" id="infrastructure">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-2 block">World-Class Facilities</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue">Designed for Growth</h2>
                    <div className="h-1 w-20 bg-gold mt-6 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden group ${item.colSpan} shadow-xl hover:shadow-2xl transition-shadow`}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 opacity-60 transition-opacity group-hover:opacity-70 ${item.bg === 'bg-gold' ? 'bg-yellow-600 mix-blend-multiply' : 'bg-slate-900 mix-blend-multiply'}`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-fit mb-4 border border-white/20">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 font-serif">{item.title}</h3>
                                <p className="text-slate-200 text-sm font-medium leading-relaxed max-w-sm">
                                    {item.desc}
                                </p>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '40%' }}
                                    className="h-1 bg-gold mt-4 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
