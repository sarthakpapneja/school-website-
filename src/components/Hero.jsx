import { motion, useScroll, useTransform } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const { ref: exploreRef, position: explorePos } = useMagnetic(0.2);
    const { ref: videoRef, position: videoPos } = useMagnetic(0.2);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="home">
            {/* Cinematic Background */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 bg-slate-900"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-royal-blue/90 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Athenia Campus"
                    className="w-full h-full object-cover opacity-80 scale-110"
                />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center px-4 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        Estd. 1995 • Excellence in Education
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                >
                    Seek <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Wisdom</span>. <br />
                    Shape the Future.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                >
                    Athenia High School creates a dynamic learning environment where tradition meets innovation, empowering students to become global leaders.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        ref={exploreRef}
                        animate={{ x: explorePos.x, y: explorePos.y }}
                        className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-shadow transform hover:scale-105 shadow-xl shadow-gold/20 flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        Explore Campus
                    </motion.button>
                    <motion.button
                        ref={videoRef}
                        animate={{ x: videoPos.x, y: videoPos.y }}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        <span className="w-8 h-8 rounded-full bg-white text-royal-blue flex items-center justify-center">
                            <span className="ml-1 text-xs">▶</span>
                        </span>
                        Watch Video
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </div>
    );
};

export default Hero;
