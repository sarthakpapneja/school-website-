import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export const useTilt = (options = { stiffness: 150, damping: 20, maxRotation: 15 }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [options.maxRotation, -options.maxRotation]), {
        stiffness: options.stiffness,
        damping: options.damping
    });

    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-options.maxRotation, options.maxRotation]), {
        stiffness: options.stiffness,
        damping: options.damping
    });

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
};
