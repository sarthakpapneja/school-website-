import { motion } from 'framer-motion';

const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full aurora-glow"></div>
            <div className="absolute inset-0 bg-white/40"></div>
        </div>
    );
};

export default AuroraBackground;
