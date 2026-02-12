import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, HelpCircle, BookOpen, CreditCard } from 'lucide-react';

const FAQ_FLOWS = {
    start: {
        message: "Namaste! I am the Athenia Wisdom Bot. How may I assist your educational journey today?",
        options: [
            { label: 'Admissions 2024-25', next: 'admissions' },
            { label: 'Fee Structure', next: 'fees' },
            { label: 'Scholarships', next: 'scholarships' },
            { label: 'Age Criteria', next: 'age' }
        ]
    },
    admissions: {
        message: "Admissions for the 2024-25 session are currently open for Classes Pre-Nursery to XII. Would you like to know about the process?",
        options: [
            { label: 'Application Process', next: 'process' },
            { label: 'Document Checklist', next: 'documents' },
            { label: 'Back to Start', next: 'start' }
        ]
    },
    fees: {
        message: "At Athenia, we believe in transparent boutique education. Our fee structure varies by class level. Should I provide a general range?",
        options: [
            { label: 'Primary (I-V)', next: 'fee_primary' },
            { label: 'Senior (IX-XII)', next: 'fee_senior' },
            { label: 'Back to Start', next: 'start' }
        ]
    },
    age: {
        message: "For Class I, the child should be 6+ years as of 31st March 2024, following NEP 2020 guidelines. Check for other classes?",
        options: [
            { label: 'Pre-Nursery', next: 'age_pre' },
            { label: 'Back to Start', next: 'start' }
        ]
    },
    scholarships: {
        message: "We offer 'Merit-Cum-Means' scholarships for exceptional scholars. Assessments are conducted during the admission interaction.",
        options: [
            { label: 'How to Apply', next: 'scholarship_apply' },
            { label: 'Back to Start', next: 'start' }
        ]
    },
    // Leaf nodes
    process: { message: "1. Online Registration. 2. Interactive Session with Principal. 3. Document Verification. 4. Admission Confirmation.", options: [{ label: 'Back to Start', next: 'start' }] },
    documents: { message: "Birth Certificate, Aadhaar Card, Previous Report Card, and 4 Passport Photos are required.", options: [{ label: 'Back to Start', next: 'start' }] },
    fee_primary: { message: "The annual composite fee for Primary wing starts from ₹1.2L per annum, excluding transport.", options: [{ label: 'Back to Start', next: 'start' }] },
    fee_senior: { message: "Senior school composite fee starts from ₹1.8L per annum for Science stream.", options: [{ label: 'Back to Start', next: 'start' }] },
    age_pre: { message: "Pre-Nursery applicants should be 3+ years as of 31st March.", options: [{ label: 'Back to Start', next: 'start' }] },
    scholarship_apply: { message: "Indicate your interest during the application modal submission or mention it during the school visit.", options: [{ label: 'Back to Start', next: 'start' }] },
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: FAQ_FLOWS.start.message, options: FAQ_FLOWS.start.options }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleOptionClick = (option) => {
        const nextFlow = FAQ_FLOWS[option.next];
        setMessages(prev => [
            ...prev,
            { type: 'user', text: option.label },
            { type: 'bot', text: nextFlow.message, options: nextFlow.options }
        ]);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[1000] font-sans">
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-midnight-light border border-white/10 w-[380px] h-[550px] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
                    >
                        {/* Header */}
                        <div className="p-6 bg-champagne text-midnight flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-midnight rounded-full flex items-center justify-center text-champagne">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm leading-none">Athenia Wisdom Bot</h3>
                                    <p className="text-[10px] font-bold tracking-widest uppercase opacity-60">Admission Assistant</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${msg.type === 'bot' ? 'bg-white/5 text-ivory/80 border border-white/5' : 'bg-champagne/10 text-champagne border border-champagne/20'}`}>
                                        {msg.text}
                                        {msg.options && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {msg.options.map((opt, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleOptionClick(opt)}
                                                        className="px-3 py-2 bg-white/5 hover:bg-champagne/20 border border-white/10 hover:border-champagne/30 rounded-lg text-[10px] font-bold text-champagne transition-all"
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Input Placeholder */}
                        <div className="p-6 pt-0">
                            <div className="relative">
                                <input 
                                    disabled
                                    placeholder="Type a message..." 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[10px] text-ivory/20 focus:outline-none"
                                />
                                <Send size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/10" />
                            </div>
                            <p className="text-[8px] text-center mt-4 text-ivory/20 uppercase tracking-[0.2em]">Seek Wisdom, Empower Minds</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 bg-champagne text-midnight rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(212,175,55,0.4)] group relative overflow-hidden"
                    >
                        <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />
                        <Sparkles size={14} className="absolute top-3 right-3 animate-pulse" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
