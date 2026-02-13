import { ArrowRight, Play, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const Hero = ({ onExploreClick, onVideoClick }) => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-midnight" id="home">
            {/* Authentic School Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/assets/school_images/f1908a_2521df09d3e747a8b26bed634de401c8~mv2.jpeg"
                    alt="Athenia High School Campus"
                    className="w-full h-full object-cover opacity-30 scale-105 active:scale-100 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight" />
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

                <h2 className="font-serif text-2xl md:text-3xl text-ivory/80 mb-10 font-display max-w-2xl mx-auto leading-relaxed">
                    Fostering a learning environment where students <span className="text-champagne">explore, reach their potential</span>, and make an <span className="text-champagne">impact on the world</span>.
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                    <button
                        onClick={onExploreClick}
                        className="group bg-champagne text-midnight px-12 py-6 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-2xl shadow-champagne/30 flex items-center gap-4 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
                    >
                        Begin The Journey <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>

                    <button
                        onClick={() => onVideoClick({
                            id: "8KXkychdCcE",
                            title: "25 Years of Legacy",
                            subtitle: "Silver Jubilee Celebration"
                        })}
                        className="flex items-center gap-5 text-ivory group hover:text-champagne transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-champagne group-hover:bg-champagne/10 group-hover:scale-110 transition-all relative">
                            <div className="absolute -top-1 -right-1 bg-champagne text-midnight text-[8px] font-bold px-2 py-0.5 rounded-full z-10 animate-bounce">25</div>
                            <Play size={24} fill="currentColor" stroke="none" className="ml-1" />
                        </div>
                        <div className="text-left">
                            <span className="font-bold text-xs tracking-widest uppercase block mb-1">Watch Heritage Film</span>
                            <span className="text-ivory/40 text-[10px] uppercase font-bold group-hover:text-champagne/60 transition-colors">Journey of 25 Years</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
