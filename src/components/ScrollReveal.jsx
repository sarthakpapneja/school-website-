import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.02, delayChildren: delay }}
            className={className}
        >
            {/* If children is a string, split it characters. If it's elements, just render children */}
            {typeof children === 'string' ? (
                children.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))
            ) : (
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
};

export default ScrollReveal;
