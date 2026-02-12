import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck, Mail, Key, LayoutDashboard, Calendar, FileText, CreditCard, ChevronRight, Bell, User } from 'lucide-react';
import toast from 'react-hot-toast';

const PortalMockup = ({ isOpen, onClose }) => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ id: '', key: '' });

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset state on close
            setIsAuthenticated(false);
            setIsAuthenticating(false);
            setCredentials({ id: '', key: '' });
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!credentials.id || !credentials.key) {
            toast.error('Please enter valid credentials.');
            return;
        }

        setIsAuthenticating(true);

        // Simulate secure authentication flow
        setTimeout(() => {
            setIsAuthenticating(false);
            setIsAuthenticated(true);
            toast.success('Authentication Successful. Welcome, Scholar.', {
                icon: '🦅',
                style: {
                    borderRadius: '1rem',
                    background: '#161B22',
                    color: '#D4AF37',
                    border: '1px solid rgba(212,175,55,0.2)'
                },
            });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-3xl overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="bg-midnight-light border border-white/10 rounded-[3.5rem] w-full max-w-4xl overflow-hidden shadow-2xl relative my-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-8 right-8 z-50 p-3 glass rounded-full text-ivory/50 hover:text-champagne transition-colors">
                        <X size={20} />
                    </button>

                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        {!isAuthenticated ? (
                            /* LOGIN VIEW */
                            <div className="w-full flex flex-col items-center justify-center p-12 lg:p-20">
                                <motion.div
                                    animate={isAuthenticating ? { scale: [1, 1.1, 1], rotate: [0, 360] } : {}}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-20 h-20 bg-champagne rounded-3xl flex items-center justify-center text-midnight mb-12 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                                >
                                    {isAuthenticating ? <ShieldCheck size={40} /> : <Lock size={40} />}
                                </motion.div>

                                <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-4 text-center block">Secure Gateway</span>
                                <h2 className="font-serif text-4xl font-bold text-ivory mb-12 leading-tight text-center">
                                    Athenia <br /><span className="text-champagne italic">Unified Portal</span>
                                </h2>

                                <form onSubmit={handleLogin} className="w-full max-w-md space-y-8">
                                    <div className="space-y-4">
                                        <label className="block text-ivory/20 text-[10px] font-bold tracking-[0.3em] uppercase">Scholastic ID</label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/20" size={20} />
                                            <input
                                                required
                                                type="text"
                                                value={credentials.id}
                                                onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
                                                placeholder="SCHOLAR_ID_2024"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="block text-ivory/20 text-[10px] font-bold tracking-[0.3em] uppercase">Encryption Key</label>
                                        <div className="relative">
                                            <Key className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/20" size={20} />
                                            <input
                                                required
                                                type="password"
                                                value={credentials.key}
                                                onChange={(e) => setCredentials({ ...credentials, key: e.target.value })}
                                                placeholder="••••••••••••"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isAuthenticating}
                                        className="w-full bg-champagne text-midnight py-6 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white transition-all shadow-2xl shadow-champagne/20 flex items-center justify-center gap-4 group disabled:opacity-50"
                                    >
                                        {isAuthenticating ? 'Decrypting Access...' : 'Authenticate Entry'}
                                        {!isAuthenticating && <ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />}
                                    </button>
                                </form>

                                <p className="mt-12 text-ivory/20 text-[10px] tracking-widest uppercase">Encryption Status: AES-256 Bit Active</p>
                            </div>
                        ) : (
                            /* DASHBOARD VIEW */
                            <div className="flex flex-col lg:flex-row w-full h-full">
                                {/* Sidebar */}
                                <div className="w-full lg:w-64 border-r border-white/5 p-8 flex flex-col gap-4">
                                    <div className="mb-12 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-champagne/10 rounded-xl flex items-center justify-center text-champagne">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-ivory font-bold text-sm">A. Papneja</h4>
                                            <p className="text-[10px] text-champagne/60 tracking-wider">Level 12 Scholar</p>
                                        </div>
                                    </div>

                                    {[
                                        { icon: LayoutDashboard, label: 'Overview', active: true },
                                        { icon: Calendar, label: 'Schedule' },
                                        { icon: FileText, label: 'Academics' },
                                        { icon: CreditCard, label: 'Financials' },
                                        { icon: Bell, label: 'Notices' },
                                    ].map((item) => (
                                        <button
                                            key={item.label}
                                            className={`flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${item.active ? 'bg-champagne text-midnight shadow-lg shadow-champagne/20' : 'text-ivory/40 hover:text-ivory hover:bg-white/5'}`}
                                        >
                                            <item.icon size={18} />
                                            {item.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-12 lg:p-16 h-full overflow-y-auto">
                                    <div className="flex justify-between items-end mb-12">
                                        <div>
                                            <span className="text-champagne font-bold text-[10px] tracking-[0.5em] uppercase mb-2 block">Sanctuary Overview</span>
                                            <h2 className="font-serif text-3xl font-bold text-ivory">Welcome, Scholar</h2>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-ivory/40 text-[10px] uppercase font-bold tracking-widest">Date</p>
                                            <p className="text-ivory font-serif italic">12 Feb, 2024</p>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                        {[
                                            { label: 'Attendance', value: '98%', color: '#D4AF37' },
                                            { label: 'GPA', value: '3.9/4.0', color: '#F8F9FA' },
                                            { label: 'Total Credits', value: '142', color: '#D4AF37' },
                                        ].map((stat) => (
                                            <div key={stat.label} className="glass p-6 rounded-3xl border border-white/5">
                                                <p className="text-ivory/20 text-[10px] uppercase font-bold tracking-widest mb-4">{stat.label}</p>
                                                <h3 className="text-3xl font-serif font-bold text-ivory" style={{ color: stat.color }}>{stat.value}</h3>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Today's Schedule */}
                                    <div className="glass p-8 rounded-[2.5rem] border border-white/5">
                                        <div className="flex justify-between items-center mb-8">
                                            <h4 className="text-ivory font-bold uppercase tracking-widest text-xs">Today's Sessions</h4>
                                            <button className="text-champagne text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">View Full <ChevronRight size={14} /></button>
                                        </div>
                                        <div className="space-y-6">
                                            {[
                                                { time: '09:00 AM', subject: 'Advanced Astrophysics', location: 'Hall A' },
                                                { time: '11:30 AM', subject: 'Philosophy of Ethics', location: 'Library' },
                                                { time: '02:00 PM', subject: 'Artisanal Design', location: 'Studio 3' },
                                            ].map((session, idx) => (
                                                <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                                                    <div className="flex gap-6 items-center">
                                                        <span className="text-champagne font-bold text-[10px] tabular-nums">{session.time}</span>
                                                        <div>
                                                            <p className="text-ivory font-bold text-sm tracking-wide">{session.subject}</p>
                                                            <p className="text-ivory/20 text-[10px] uppercase font-bold tracking-widest">{session.location}</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-2 h-2 rounded-full bg-champagne animate-pulse"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PortalMockup;
