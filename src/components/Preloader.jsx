import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
    const [phase, setPhase] = useState("loading"); // loading, split, done

    useEffect(() => {
        const timer = setTimeout(() => {
            setPhase("split");
            setTimeout(() => {
                setPhase("done");
                onComplete();
            }, 1000);
        }, 2200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    if (phase === "done") return null;

    return (
        <div className="fixed inset-0 z-[99999] pointer-events-none flex flex-col">
            {/* Top Half */}
            <motion.div
                initial={{ height: "50vh" }}
                animate={phase === "split" ? { height: 0 } : { height: "50vh" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="w-full bg-midnight relative overflow-hidden border-b border-champagne/10"
            >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-serif text-9xl text-ivory font-bold tracking-tighter"
                    >
                        ATHENIA
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Half */}
            <motion.div
                initial={{ height: "50vh" }}
                animate={phase === "split" ? { height: 0 } : { height: "50vh" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="w-full bg-midnight relative overflow-hidden border-t border-champagne/10"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-serif text-9xl text-ivory font-bold tracking-tighter opacity-10 blur-sm transform scale-y-[-1]"
                    >
                        ATHENIA
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-champagne text-xs font-bold tracking-[0.5em] uppercase"
                >
                    Loading Sanctuary...
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Preloader;
