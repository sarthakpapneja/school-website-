import { motion } from 'framer-motion';

const Marquee = ({ text = "SEEK WISDOM • ATHENIA HERITAGE • EST 1996 •" }) => {
    return (
        <div className="py-12 bg-midnight overflow-hidden border-y border-white/5 relative z-10">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap"
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[8vw] font-serif font-black text-transparent stroke-text opacity-10 px-10 select-none">
                        {text}
                    </span>
                ))}
            </motion.div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px var(--color-champagne);
                    text-stroke: 1px var(--color-champagne);
                }
            `}</style>
        </div>
    );
};

export default Marquee;
