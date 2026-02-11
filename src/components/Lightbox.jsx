import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
    if (!isOpen) return null;

    const next = () => setCurrentIndex((currentIndex + 1) % images.length);
    const prev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/95 backdrop-blur-3xl p-6 md:p-12"
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-10 right-10 z-20 p-4 bg-white/5 rounded-full text-ivory hover:text-champagne transition-all border border-white/10"
                >
                    <X size={32} />
                </button>

                <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                    <motion.button
                        whileHover={{ x: -5 }}
                        onClick={prev}
                        className="absolute left-0 z-10 w-20 h-20 glass rounded-full flex items-center justify-center text-ivory hover:text-champagne transition-all"
                    >
                        <ChevronLeft size={48} />
                    </motion.button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotateY: -45 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative max-w-5xl max-h-full flex flex-col items-center"
                        >
                            <img
                                src={images[currentIndex].url}
                                alt={images[currentIndex].title}
                                className="max-w-full max-h-[70vh] object-contain rounded-[2rem] shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/10"
                            />
                            <div className="mt-12 text-center">
                                <h3 className="font-serif text-5xl font-bold text-ivory mb-4 tracking-tighter">
                                    {images[currentIndex].title} <span className="text-champagne italic">Archive</span>
                                </h3>
                                <p className="text-ivory/40 text-xl font-light tracking-wide">{images[currentIndex].desc}</p>
                                <div className="mt-8 flex justify-center gap-3">
                                    {images.map((_, i) => (
                                        <div key={i} className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-champagne w-12 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/10'}`}></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.button
                        whileHover={{ x: 5 }}
                        onClick={next}
                        className="absolute right-0 z-10 w-20 h-20 glass rounded-full flex items-center justify-center text-ivory hover:text-champagne transition-all"
                    >
                        <ChevronRight size={48} />
                    </motion.button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
