import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Users, FileText, CheckCircle } from 'lucide-react';

const tabs = [
    {
        id: 'curriculum',
        label: 'Curriculum',
        icon: <BookOpen size={18} />,
        content: {
            title: "Academic Rigor",
            text: "Our curriculum is designed to challenge and inspire. Affiliated with CBSE, we offer a balanced blend of scholastic and co-scholastic activities.",
            points: ["STEAM Integration", "Project-Based Learning", "Coding & Robotics", "Public Speaking"]
        }
    },
    {
        id: 'admissions',
        label: 'Admissions',
        icon: <FileText size={18} />,
        content: {
            title: "Join Our Family",
            text: "We welcome students who are eager to learn and grow. Our admission process is transparent and merit-based.",
            points: ["Online Application", "Entrance Assessment", "Parent Interview", "Scholarship Opportunities"]
        }
    },
    {
        id: 'results',
        label: 'Results',
        icon: <GraduationCap size={18} />,
        content: {
            title: "Proven Excellence",
            text: "Consistently achieving top results in board examinations. Our students secure placements in prestigious universities worldwide.",
            points: ["100% Pass Rate", "District Toppers", "National Olympiad Winners", "Sports Achievements"]
        }
    },
    {
        id: 'faculty',
        label: 'Faculty',
        icon: <Users size={18} />,
        content: {
            title: "Mentors for Life",
            text: "Our educators are not just teachers but mentors who guide students through their formative years with patience and expertise.",
            points: ["Qualified & Experienced", "Continuous Training", "Student-Centric Approach", "Dedicated Counselors"]
        }
    }
];

const Academics = () => {
    const [activeTab, setActiveTab] = useState('curriculum');

    return (
        <section className="py-24 px-6 bg-slate-50" id="academics">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-2 block">Academic Excellence</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue">Pathways to Success</h2>
                    <div className="h-1 w-20 bg-gold mt-6 mx-auto"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Tabs Navigation */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-4 p-6 rounded-2xl text-left transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-royal-blue text-white shadow-xl shadow-royal-blue/20 scale-105'
                                        : 'bg-white text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-white/20' : 'bg-slate-200 text-slate-500'}`}>
                                    {tab.icon}
                                </div>
                                <span className="font-serif font-bold text-lg">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full md:w-2/3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[400px]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <h3 className="font-serif text-3xl font-bold text-royal-blue mb-6">
                                    {tabs.find(t => t.id === activeTab).content.title}
                                </h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {tabs.find(t => t.id === activeTab).content.text}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tabs.find(t => t.id === activeTab).content.points.map((point, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 flex-shrink-0" />
                                            <span className="font-medium text-slate-800">{point}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <button className="text-royal-blue font-bold text-sm tracking-widest uppercase hover:text-gold transition-colors flex items-center gap-2 group">
                                        Learn More <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academics;
