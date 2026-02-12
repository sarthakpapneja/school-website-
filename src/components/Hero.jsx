import { ArrowRight, Play, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const Hero = ({ onExploreClick, onVideoClick }) => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-midnight" id="home">
            {/* Simple Background */}
            <div className="absolute inset-0 z-0 bg-midnight" />

            {/* Logo Emblem - Refined, single discrete placement */}
            <div className="absolute inset-0 z-1 pointer-events-none flex items-center justify-center opacity-[0.02]">
                <img src={logoImg} alt="" className="w-[30%] aspect-square object-contain grayscale blur-[1px]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-20 text-center px-6 max-w-7xl mx-auto mt-20">
                <div className="inline-flex items-center gap-3 backdrop-blur-md px-6 py-2 rounded-full mb-10 border border-white/10 bg-white/5">
                    <Sparkles size={14} className="text-champagne animate-pulse" />
                    <span className="text-champagne font-bold text-[10px] tracking-[0.4em] uppercase font-sans">Future Heritage</span>
                </div>

                <div className="relative mb-8">
                    <h1 className="font-serif text-[7vw] md:text-[9vw] font-bold text-ivory leading-[0.8] tracking-tighter select-none whitespace-nowrap">
                        ATHENIA HIGH
                    </h1>
                </div>

                <h2 className="font-serif text-4xl md:text-6xl text-ivory mb-10 font-display italic">
                    Seek Wisdom
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                    <button
                        onClick={onExploreClick}
                        className="group bg-champagne text-midnight px-12 py-6 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-2xl shadow-champagne/30 flex items-center gap-4 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
                    >
                        Begin The Journey <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>

                    <button
                        onClick={onVideoClick}
                        className="flex items-center gap-5 text-ivory group hover:text-champagne transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-champagne group-hover:bg-champagne/10 group-hover:scale-110 transition-all">
                            <Play size={24} fill="currentColor" stroke="none" className="ml-1" />
                        </div>
                        <div className="text-left">
                            <span className="font-bold text-xs tracking-widest uppercase block mb-1">Preview</span>
                            <span className="text-ivory/40 text-[10px] uppercase font-bold group-hover:text-champagne/60 transition-colors">Campus Glimpse</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
