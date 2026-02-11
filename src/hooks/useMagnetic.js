import { useRef, useState, useEffect } from 'react';

export const useMagnetic = (strength = 0.5) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const distanceX = clientX - centerX;
            const distanceY = clientY - centerY;

            // If within range (approx 100px from center)
            if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
                setPosition({
                    x: distanceX * strength,
                    y: distanceY * strength
                });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        ref.current?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            ref.current?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return { ref, position };
};
