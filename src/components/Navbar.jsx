import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const NavLink = ({ href, children, mobile = false, onClick }) => {
    if (mobile) {
        return (
            <a
                href={href}
                onClick={onClick}
                className="block py-4 text-4xl font-serif text-ivory hover:text-champagne transition-colors border-b border-white/5"
            >
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex items-center justify-between"
                >
                    {children}
                    <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-champagne" />
                </motion.div>
            </a>
        );
    }

    return (
        <a
            href={href}
            className="relative px-4 py-2 text-sm text-ivory/80 hover:text-white transition-colors uppercase tracking-widest font-medium z-10 group overflow-hidden"
        >
            <span className="relative z-10 duration-300 group-hover:text-midnight transition-colors">{children}</span>
            <span className="absolute inset-0 bg-champagne transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-0 ease-out" />
        </a>
    );
};

const Navbar = ({ onApplyClick, onPortalClick, onPoliciesClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Admissions', href: '#admissions' },
        { name: 'Academics', href: '#academics' },
        { name: 'Heritage', href: '#heritage' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
                }`}
        >
            <div
                className={`absolute inset-0 transition-all duration-700 ${isScrolled ? 'bg-midnight/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20' : 'bg-transparent'
                    }`}
            />

            <div className="container mx-auto px-6 relative flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden ${isScrolled ? 'bg-champagne text-midnight' : 'bg-white/10 text-ivory glass'}`}>
                        <img src={logo} alt="Athenia High Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl md:text-2xl font-serif font-bold text-ivory tracking-tight group-hover:text-champagne transition-colors duration-300">
                        ATHENIA HIGH
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <NavLink key={link.name} href={link.href}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={onPoliciesClick}
                        className="text-ivory/60 hover:text-champagne text-xs uppercase tracking-widest font-bold px-4 transition-colors"
                    >
                        Policies
                    </button>
                    <button
                        onClick={onPortalClick}
                        className="text-ivory/60 hover:text-champagne text-xs uppercase tracking-widest font-bold px-4 transition-colors"
                    >
                        Portal
                    </button>
                    <button
                        onClick={onApplyClick}
                        className="bg-champagne text-midnight hover:bg-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    >
                        Enroll Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-ivory z-50 relative w-10 h-10 flex items-center justify-center rounded-full glass"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-midnight z-40 flex flex-col justify-center px-8"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                        <div className="space-y-2 relative z-10">
                            <span className="text-champagne text-xs font-bold tracking-[0.5em] uppercase mb-8 block">Navigation</span>
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                                >
                                    <NavLink href={link.href} mobile onClick={() => setIsMobileMenuOpen(false)}>
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 space-y-4"
                        >
                            <button
                                onClick={() => {
                                    onPoliciesClick();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full py-4 glass rounded-xl text-ivory uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/10"
                            >
                                Institutional Policies
                            </button>
                            <button
                                onClick={() => {
                                    onPortalClick();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full py-4 glass rounded-xl text-ivory uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/10"
                            >
                                Access Portal
                            </button>
                            <button
                                onClick={() => {
                                    onApplyClick();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full py-4 bg-champagne rounded-xl text-midnight uppercase tracking-widest text-sm font-bold shadow-lg shadow-champagne/20"
                            >
                                Enroll Now
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
