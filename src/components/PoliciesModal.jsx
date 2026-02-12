import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HeartPulse, ShieldAlert, GraduationCap, Users, ShieldCheck, FileText } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

const POLICIES = [
    {
        id: 'health',
        title: 'Health & Wellbeing',
        icon: HeartPulse,
        content: `Athenia High School prioritizes the holistic wellness of every scholar. 
        - Dedicated Medical Bay with a resident nurse available during school hours.
        - Regular comprehensive health check-ups (Vision, Dental, General) conducted by specialists.
        - Mental Health Support: On-campus counselors to assist scholars with emotional and academic wellbeing.
        - Nutritious Meal Protocols: Strict audit of the cafeteria for hygiene and balanced nutrition.`
    },
    {
        id: 'behaviour',
        title: 'Behaviour Policy',
        icon: Users,
        content: `Reflecting our value-based education, we expect scholars to uphold the 'Athenia Standard'.
        - Etiquette & Manners: High emphasis on respectful interaction with faculty and peers.
        - Dress Code: Scholars must adhere to the prescribed formal uniform with pride.
        - Digital Responsibility: Usage of devices is governed by our strict ICT ethics guidelines.
        - Merit System: Positive behavior is reinforced through our house-points and merit rewards.`
    },
    {
        id: 'protection',
        title: 'Child Protection',
        icon: ShieldCheck,
        content: `Total safety is the foundation of our sanctuary.
        - 100% CCTV Surveillance of all corridors, play areas, and gate entries.
        - Verified Staff: Mandatory police verification for all faculty and support staff.
        - Gate Management: RFID tracking and strict visitor protocols (No unauthorized entry).
        - Safe Transport: GPS-enabled buses with female attendants and panic buttons.`
    },
    {
        id: 'bullying',
        title: 'Anti-Bullying',
        icon: ShieldAlert,
        content: `Athenia is a zero-tolerance zone for bullying.
        - Proactive Awareness: Regular workshops on sensitized social interaction.
        - Reporting Mechanism: Scholars can report incidents anonymously via 'Wisdom Boxes'.
        - Immediate Action: Any substantiated claim results in immediate disciplinary assessment.
        - Peer Mentorship: Senior scholars are trained to act as 'Peace Ambassadors' within the primary wing.`
    }
];

const PoliciesModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState(POLICIES[0].id);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.atheniaLenis?.stop();
        } else {
            document.body.style.overflow = 'unset';
            window.atheniaLenis?.start();
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.atheniaLenis?.start();
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const activePolicy = POLICIES.find(p => p.id === activeTab);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-midnight/95 backdrop-blur-3xl overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    className="bg-midnight-light border border-white/10 rounded-[2.5rem] lg:rounded-[4rem] w-full max-w-5xl overflow-hidden shadow-2xl relative flex flex-col lg:flex-row h-[85vh] lg:h-[700px] max-h-[90vh] lg:max-h-none"
                    onClick={(e) => e.stopPropagation()}
                    data-lenis-prevent
                >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05] flex items-center justify-center">
                        <img src={logoImg} alt="" className="w-full h-full object-contain scale-[1.3] mix-blend-overlay" />
                    </div>
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 lg:top-8 lg:right-8 z-50 p-3 lg:p-4 glass rounded-full text-ivory/50 hover:text-champagne transition-colors shadow-xl">
                        <X size={20} className="lg:hidden" />
                        <X size={24} className="hidden lg:block" />
                    </button>

                    {/* Left Sidebar */}
                    <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-white/5 p-6 lg:p-16 pt-16 lg:pt-16 flex flex-col gap-6 lg:gap-8 bg-black/40 relative z-10">
                        <div className="mb-4 lg:mb-10 text-center lg:text-left">
                            <span className="text-champagne font-bold text-[8px] lg:text-[10px] tracking-[0.5em] uppercase mb-2 lg:mb-4 block opacity-60">Athenia Standards</span>
                            <h2 className="font-serif text-2xl lg:text-4xl font-bold text-ivory leading-tight uppercase tracking-tight">
                                Institutional <br /><span className="text-champagne italic lowercase artisanal-underline">Policies</span>
                            </h2>
                        </div>

                        <div className="flex flex-row lg:flex-col gap-2 lg:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
                            {POLICIES.map((policy) => (
                                <button
                                    key={policy.id}
                                    onClick={() => setActiveTab(policy.id)}
                                    className={`flex items-center gap-3 lg:gap-6 px-4 lg:px-8 py-2 lg:py-5 rounded-full lg:rounded-[2rem] text-[9px] lg:text-xs font-bold tracking-widest uppercase transition-all text-left whitespace-nowrap lg:whitespace-normal ${activeTab === policy.id ? 'bg-champagne text-midnight shadow-[0_10px_30px_rgba(212,175,55,0.2)]' : 'text-ivory/40 hover:text-ivory hover:bg-white/5'}`}
                                >
                                    <policy.icon size={14} className="lg:hidden" />
                                    <policy.icon size={20} className="hidden lg:block" />
                                    {policy.title}
                                </button>
                            ))}
                        </div>

                        <div className="mt-auto hidden lg:block">
                            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                                <FileText size={24} className="text-champagne mb-4" />
                                <p className="text-[10px] text-ivory/40 leading-relaxed uppercase tracking-wider font-bold">Verified for CBSE Standardization & Academic Year 2024-25</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 p-8 lg:p-24 overflow-y-auto min-h-0 relative z-10 bg-midnight/30">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="max-w-2xl mx-auto lg:mx-0 ornament-border p-6 lg:p-0"
                            >
                                <div className="w-12 h-12 lg:w-24 lg:h-24 bg-champagne/5 rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center text-champagne mb-8 lg:mb-16 border border-champagne/20 shadow-[0_20px_50px_rgba(212,175,55,0.1)]">
                                    <activePolicy.icon size={24} className="lg:hidden" />
                                    <activePolicy.icon size={48} className="hidden lg:block" />
                                </div>
                                <h3 className="font-serif text-3xl lg:text-6xl font-bold text-ivory mb-6 lg:mb-14 leading-[0.9] tracking-tighter border-b lg:border-b-0 border-white/10 pb-4 lg:pb-0">{activePolicy.title}</h3>
                                <div className="space-y-6 lg:space-y-12">
                                    {activePolicy.content.split('\n').map((line, idx) => {
                                        const trimmed = line.trim();
                                        if (!trimmed) return null;
                                        const isBullet = trimmed.startsWith('-');
                                        return (
                                            <p key={idx} className={`text-sm lg:text-xl leading-relaxed ${isBullet ? 'text-ivory/70 pl-6 lg:pl-10 relative before:content-[""] before:absolute before:left-0 before:top-2.5 lg:before:top-4 before:w-1.5 lg:before:w-2 before:h-1.5 lg:before:h-2 before:bg-champagne before:rounded-full before:shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'text-ivory font-serif italic pb-4 lg:pb-6 opacity-90'}`}>
                                                {isBullet ? trimmed.substring(1).trim() : trimmed}
                                            </p>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PoliciesModal;
