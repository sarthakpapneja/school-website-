import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoData }) => {
    if (!isOpen) return null;

    const defaultVideo = {
        id: "aw42egcY7Bk",
        title: "A Glimpse of Athenia",
        subtitle: "Heritage Film"
    };

    const video = videoData || defaultVideo;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/95 backdrop-blur-2xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-full max-w-6xl aspect-video bg-black rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-10 p-4 bg-midnight/50 backdrop-blur-xl rounded-full text-ivory hover:text-champagne transition-all border border-white/10 group"
                    >
                        <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
                    </button>

                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-midnight/80 to-transparent p-12 pointer-events-none">
                        <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-2 block opacity-60">Now Playing</span>
                        <h3 className="font-serif text-4xl font-bold text-ivory">{video.title} <span className="text-champagne italic">{video.subtitle}</span></h3>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default VideoModal;
