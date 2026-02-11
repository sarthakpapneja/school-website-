import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { ref: magneticRef, position } = useMagnetic(0.3);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'admissions', 'infrastructure', 'academics', 'gallery', 'hall-of-fame', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Academics', href: '#academics' },
        { name: 'Admissions', href: '#admissions' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-royal-blue rounded-full flex items-center justify-center text-white">
                        <span className="font-serif font-bold text-xl">A</span>
                    </div>
                    <div className={`font-serif font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                        Athenia <span className="text-gold">High</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide hover:text-gold transition-all relative group ${activeSection === link.href.replace('#', '')
                                ? 'text-gold'
                                : scrolled ? 'text-slate-700' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all ${activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </a>
                    ))}
                    <motion.button
                        ref={magneticRef}
                        animate={{ x: position.x, y: position.y }}
                        className="bg-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-shadow transform hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                        Apply Now <ChevronRight size={16} />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gold"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 absolute w-full"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-800 font-medium text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-royal-blue text-white w-full py-3 rounded-xl font-bold mt-4">
                                Student Portal
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
