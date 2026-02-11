import { motion } from 'framer-motion';

const images = [
    {
        url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
        title: "Science Exhibition",
        span: "md:col-span-2 md:row-span-2"
    },
    {
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        title: "Cultural Arts",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
        title: "Sports Day",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
        title: "Library Sessions",
        span: "md:col-span-1 md:row-span-2"
    },
    {
        url: "https://images.unsplash.com/photo-1509062522246-37fa55423c13?q=80&w=2070&auto=format&fit=crop",
        title: "Smart Classrooms",
        span: "md:col-span-2 md:row-span-1"
    }
];

const Gallery = () => {
    return (
        <section className="py-24 px-6 bg-slate-50 overflow-hidden" id="gallery">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-2 block">Moments that Matter</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue leading-tight mb-6">
                        Life at <span className="text-gold">Athenia</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 h-auto md:h-[800px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-[2rem] overflow-hidden group shadow-lg ${img.span}`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-8 left-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <h4 className="font-serif text-2xl font-bold">{img.title}</h4>
                                <p className="text-gold text-xs uppercase tracking-widest mt-1">Explore Life</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
