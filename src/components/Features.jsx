import { motion } from 'framer-motion';
import { Award, Globe, Heart, ShieldCheck, Target, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors duration-500"></div>

        <div className="w-16 h-16 bg-royal-blue/5 rounded-2xl flex items-center justify-center text-royal-blue mb-8 group-hover:bg-royal-blue group-hover:text-white transition-all duration-500">
            <Icon size={32} />
        </div>

        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
            {desc}
        </p>

        <div className="mt-8 flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Learn More <span className="text-lg">→</span>
        </div>
    </motion.div>
);

const Features = () => {
    const pillars = [
        {
            icon: Award,
            title: "Academic Rigor",
            desc: "Consistently ranked among the top schools for CBSE results and innovation in teaching."
        },
        {
            icon: Globe,
            title: "Global Outlook",
            desc: "Our students are prepared for global challenges through international exchange programs."
        },
        {
            icon: Heart,
            title: "Holistic Care",
            desc: "Supporting emotional and physical well-being through dedicated counseling and nutrition."
        },
        {
            icon: ShieldCheck,
            title: "Secure Environment",
            desc: "24/7 surveillance and GPS-tracked transport ensuring complete peace of mind for parents."
        },
        {
            icon: Target,
            title: "Values Driven",
            desc: "Instilling 'Seek Wisdom' as a way of life, fostering integrity, respect, and responsibility."
        },
        {
            icon: Zap,
            title: "Modern Edge",
            desc: "Smart classrooms, robotics labs, and 100% solar energy integration at our core."
        }
    ];

    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-40 left-0 w-72 h-72 bg-royal-blue/5 rounded-full blur-3xl -ml-36"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-48"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-2 block">Our Core Pillars</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue leading-tight mb-6">
                        Why Visionaries Choose <br className="hidden md:block" /> Athenia High School
                    </h2>
                    <div className="h-1.5 w-24 bg-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <FeatureCard
                            key={idx}
                            icon={pillar.icon}
                            title={pillar.title}
                            desc={pillar.desc}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
