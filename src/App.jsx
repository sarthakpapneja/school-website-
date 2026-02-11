import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronRight, GraduationCap, Users, Trophy, BookOpen, Phone, MapPin, Search } from 'lucide-react';

import BentoGrid from './components/BentoGrid';
import Academics from './components/Academics';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Features from './components/Features';
import Message from './components/Message';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
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
              className={`text-sm font-medium tracking-wide hover:text-gold transition-colors ${scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
            Apply Now <ChevronRight size={16} />
          </button>
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

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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
          <button className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-gold/20 flex items-center gap-2 w-full sm:w-auto justify-center">
            Explore Campus
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            <span className="w-8 h-8 rounded-full bg-white text-royal-blue flex items-center justify-center">
              <span className="ml-1 text-xs">▶</span>
            </span>
            Watch Video
          </button>
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

const SectionHeading = ({ sub, title, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-2 block">{sub}</span>
    <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue">{title}</h2>
    <div className={`h-1 w-20 bg-gold mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Message />
      <Features />
      <BentoGrid />
      <Academics />
      <Footer />

    </div>
  );
}

export default App;
