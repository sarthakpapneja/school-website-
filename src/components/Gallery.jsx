import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from './Lightbox';

const images = [
    {
        url: '/assets/campus_facade_real.jpg',
        title: 'The Grand Hall',
        desc: 'Our heritage architecture meets modern innovation.',
        span: 'md:col-span-2 md:row-span-2'
    },
    {
        url: '/assets/campus_corridor_real.jpg',
        title: 'Academic Corridors',
        desc: 'Open, light-filled corridors connecting learning spaces.',
        span: 'md:col-span-1 md:row-span-1'
    },
    {
        url: '/assets/students_stairs.jpg',
        title: 'Student Life',
        desc: 'Joyful moments shared by our scholars.',
        span: 'md:col-span-1 md:row-span-2'
    },
    {
        url: '/assets/campus_balcony_sunset.jpg',
        title: 'Evening Courtyard',
        desc: 'A quiet sunset across the campus greens.',
        span: 'md:col-span-1 md:row-span-1'
    },
    {
        url: '/assets/campus_court_real.jpg',
        title: 'Athletic Estate',
        desc: 'Expansive courts for holistic physical mastery.',
        span: 'md:col-span-1 md:row-span-1'
    }
];

const Gallery = () => {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

    const openLightbox = (index) => setLightbox({ isOpen: true, index });

    return (
        <section className="py-32 px-6 bg-midnight" id="gallery">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-24 text-center">
                    <span className="text-champagne font-bold text-xs tracking-[0.6em] uppercase mb-6 block">Visual Heritage</span>
                    <h2 className="font-serif text-5xl md:text-7xl font-bold text-ivory mb-8">Captured <span className="text-champagne italic">Moments</span></h2>
                    <p className="text-ivory/40 text-lg max-w-xl font-light">Explore the boutique estate and daily rituals that define the Athenia experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 auto-rows-[300px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => openLightbox(idx)}
                            className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 ${img.span}`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    className="flex items-center justify-between"
                                >
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-ivory mb-1">{img.title}</h3>
                                        <p className="text-champagne text-xs font-bold tracking-widest uppercase">{img.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-ivory">
                                        <Maximize2 size={18} />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Lightbox
                    isOpen={lightbox.isOpen}
                    onClose={() => setLightbox({ ...lightbox, isOpen: false })}
                    images={images}
                    currentIndex={lightbox.index}
                    setCurrentIndex={(idx) => setLightbox({ ...lightbox, index: idx })}
                />
            </div>
        </section>
    );
};

export default Gallery;
