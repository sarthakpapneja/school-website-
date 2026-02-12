import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck, Mail, Key, LayoutDashboard, Calendar, FileText, CreditCard, ChevronRight, Bell, User, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const PortalMockup = ({ isOpen, onClose }) => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ id: '', key: '' });
    const [studentData, setStudentData] = useState(null);
    const [activeTab, setActiveTab] = useState('Overview');

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset state on close but keep session logic if authenticated
            if (!isAuthenticated) {
                setCredentials({ id: '', key: '' });
            }
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isAuthenticated]);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!credentials.id || !credentials.key) {
            toast.error('Please enter valid credentials.');
            return;
        }

        setIsAuthenticating(true);

        try {
            // Priority 1: Try real API
            const response = await axios.post('http://localhost:5001/api/portal/login', credentials);

            if (response.data.success) {
                setStudentData(response.data.student);
                setIsAuthenticated(true);
                setActiveTab('Overview');
                toast.success(`Welcome, Scholar ${response.data.student.name}`, { icon: '🦅' });
                return;
            }
        } catch (error) {
            console.log('API unreachable or error, trying local fallback...');

            // Priority 2: Production/Demo Demo Fallback
            // Check for valid demo credentials: ATH2024001 / wisdom789
            if (credentials.id.toUpperCase() === 'ATH2024001' && credentials.key === 'wisdom789') {
                const mockStudent = {
                    name: "A. Papneja",
                    class: "XII",
                    stream: "Science",
                    stats: { attendance: "98%", result: "96.4%", rank: "#12" },
                    schedule: [
                        { time: '08:00 AM', subject: 'Physics (Electrodynamics)', location: 'Lab 1' },
                        { time: '09:45 AM', subject: 'Mathematics (Calculus)', location: 'Room 204' },
                        { time: '11:15 AM', subject: 'English Core', location: 'Lecture Hall' },
                        { time: '01:30 PM', subject: 'Computer Science (Python)', location: 'IT Wing' }
                    ],
                    fullSchedule: {
                        Monday: [
                            { time: '08:00 - 09:30', subject: 'Physics', teacher: 'Dr. Sharma' },
                            { time: '09:45 - 11:15', subject: 'Mathematics', teacher: 'Mrs. Gupta' },
                            { time: '11:30 - 13:00', subject: 'Chemistry', teacher: 'Mr. Verma' }
                        ]
                    },
                    academicRecords: [
                        { subject: 'Physics', unitTest: 23, halfYearly: 74, predicted: 95 },
                        { subject: 'Mathematics', unitTest: 25, halfYearly: 78, predicted: 98 }
                    ],
                    feeStatus: {
                        pending: 12500,
                        lastPayment: { amount: 45000, date: '2024-01-15' },
                        history: [
                            { quarter: 'Q1 (Apr-Jun)', amount: 45000, status: 'Paid', date: '2024-04-10' }
                        ]
                    },
                    circulars: [
                        { id: 1, title: 'Annual Sports Day 2024', date: '2024-02-10', highlight: true }
                    ]
                };

                setTimeout(() => {
                    setStudentData(mockStudent);
                    setIsAuthenticated(true);
                    setActiveTab('Overview');
                    toast.success(`Welcome, Scholar ${mockStudent.name}`, { icon: '🦅' });
                    setIsAuthenticating(false);
                }, 1500);
                return;
            }

            toast.error('Authentication Failed. Please check your credentials.');
        } finally {
            if (credentials.id.toUpperCase() !== 'ATH2024001' || credentials.key !== 'wisdom789') {
                setIsAuthenticating(false);
            }
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setStudentData(null);
        setActiveTab('Overview');
        setCredentials({ id: '', key: '' });
        toast.success('Logged out successfully.');
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
                    className="bg-midnight-light border border-white/10 rounded-[3.5rem] w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl relative my-auto overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-8 right-8 z-50 p-3 glass rounded-full text-ivory/50 hover:text-champagne transition-colors">
                        <X size={20} />
                    </button>

                    <div className="flex flex-col lg:flex-row flex-1 overflow-hidden min-h-0">
                        {!isAuthenticated ? (
                            /* LOGIN VIEW */
                            <div className="w-full flex-1 flex flex-col items-center justify-center p-6 lg:p-20 overflow-y-auto min-h-0">
                                <motion.div
                                    animate={isAuthenticating ? { scale: [1, 1.1, 1], rotate: [0, 360] } : {}}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-12 h-12 lg:w-20 lg:h-20 bg-champagne rounded-xl lg:rounded-3xl flex items-center justify-center text-midnight mb-6 lg:mb-12 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                                >
                                    {isAuthenticating ? <ShieldCheck size={24} /> : <Lock size={24} />}
                                </motion.div>

                                <span className="text-champagne font-bold text-[8px] lg:text-xs tracking-[0.5em] uppercase mb-3 lg:mb-4 text-center block">Secure Gateway</span>
                                <h2 className="font-serif text-xl lg:text-4xl font-bold text-ivory mb-6 lg:mb-12 leading-tight text-center">
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
                                                placeholder="••••••••"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-4 lg:py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light text-sm lg:text-base"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isAuthenticating}
                                        className="w-full bg-champagne text-midnight py-5 lg:py-6 rounded-2xl font-bold tracking-widest uppercase text-[10px] lg:text-xs hover:bg-white transition-all shadow-2xl shadow-champagne/20 flex items-center justify-center gap-4 group disabled:opacity-50 mb-6 lg:mb-0"
                                    >
                                        {isAuthenticating ? 'Decrypting Access...' : 'Authenticate Entry'}
                                        {!isAuthenticating && <ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />}
                                    </button>
                                </form>

                                <p className="mt-12 text-ivory/20 text-[10px] tracking-widest uppercase">Encryption Status: AES-256 Bit Active</p>
                            </div>
                        ) : (
                            /* DASHBOARD VIEW */
                            <div className="flex flex-col lg:flex-row w-full flex-1 min-h-0 overflow-hidden">
                                {/* Sidebar */}
                                <div className="w-full lg:w-64 border-r border-white/5 p-8 flex flex-col gap-4 overflow-y-auto">
                                    <div className="mb-12 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-champagne/10 rounded-xl flex items-center justify-center text-champagne">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-ivory font-bold text-sm">{studentData?.name || 'Scholar'}</h4>
                                            <p className="text-[10px] text-champagne/60 tracking-wider">Class {studentData?.class || 'XII'} - {studentData?.stream || 'Science'} Stream</p>
                                        </div>
                                    </div>

                                    {[
                                        { icon: LayoutDashboard, label: 'Overview' },
                                        { icon: Calendar, label: 'Schedule' },
                                        { icon: FileText, label: 'Academics (CBSE)' },
                                        { icon: CreditCard, label: 'Fee Portal' },
                                        { icon: Bell, label: 'Circulars' },
                                    ].map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => setActiveTab(item.label)}
                                            className={`flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${activeTab === item.label ? 'bg-champagne text-midnight shadow-lg shadow-champagne/20' : 'text-ivory/40 hover:text-ivory hover:bg-white/5'}`}
                                        >
                                            <item.icon size={18} />
                                            {item.label}
                                        </button>
                                    ))}

                                    <div className="mt-auto">
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all text-red-500/60 hover:text-red-500 hover:bg-red-500/5 w-full"
                                        >
                                            <LogOut size={18} />
                                            Sign Out
                                        </button>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-6 lg:p-16 overflow-y-auto min-h-0">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 lg:mb-12 gap-4">
                                        <div>
                                            <span className="text-champagne font-bold text-[10px] tracking-[0.5em] uppercase mb-2 block">Student Sanctuary</span>
                                            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ivory">Portal / <span className="text-champagne italic">{activeTab}</span></h2>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-ivory/40 text-[10px] uppercase font-bold tracking-widest">Session</p>
                                            <p className="text-ivory font-serif italic">2024 - 2025</p>
                                        </div>
                                    </div>

                                    {activeTab === 'Overview' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                                {[
                                                    { label: 'Attendance', value: studentData?.stats?.attendance || 'N/A', color: '#D4AF37' },
                                                    { label: 'Term I Result', value: studentData?.stats?.result || 'N/A', color: '#F8F9FA' },
                                                    { label: 'Merit Rank', value: studentData?.stats?.rank || 'N/A', color: '#D4AF37' },
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
                                                    <h4 className="text-ivory font-bold uppercase tracking-widest text-xs">Today's Class Schedule</h4>
                                                    <button onClick={() => setActiveTab('Schedule')} className="text-champagne text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-70 transition-opacity">Full Timetable <ChevronRight size={14} /></button>
                                                </div>
                                                <div className="space-y-6">
                                                    {(studentData?.schedule || []).map((session, idx) => (
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
                                        </motion.div>
                                    )}

                                    {activeTab === 'Schedule' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {Object.entries(studentData?.fullSchedule || {}).map(([day, classes]) => (
                                                    <div key={day} className="glass p-8 rounded-[2.5rem] border border-white/5">
                                                        <h4 className="text-champagne font-bold uppercase tracking-[0.2em] text-xs mb-8 pb-4 border-b border-white/5">{day}</h4>
                                                        <div className="space-y-6">
                                                            {classes.map((c, idx) => (
                                                                <div key={idx} className="space-y-1">
                                                                    <p className="text-champagne font-bold text-[10px] tabular-nums">{c.time}</p>
                                                                    <p className="text-ivory font-bold text-sm">{c.subject}</p>
                                                                    <p className="text-ivory/20 text-[10px] uppercase tracking-widest">{c.teacher}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'Academics (CBSE)' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
                                            <div className="glass p-10 rounded-[3rem] border border-white/5 overflow-hidden relative">
                                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                                    <FileText size={120} />
                                                </div>
                                                <div className="flex justify-between items-center mb-10">
                                                    <h4 className="text-ivory font-bold uppercase tracking-widest text-xs">Unit Test & Half-Yearly Performance</h4>
                                                    <button
                                                        onClick={() => toast.success('Transcript generation started. Secure download active.', { icon: '📄' })}
                                                        className="bg-white/10 hover:bg-white/20 text-ivory text-[10px] font-bold px-6 py-3 rounded-xl tracking-widest uppercase transition-all"
                                                    >
                                                        Download Transcript
                                                    </button>
                                                </div>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left">
                                                        <thead>
                                                            <tr className="border-b border-white/5">
                                                                <th className="pb-6 text-ivory/20 text-[10px] uppercase tracking-[0.3em] font-bold">Subject</th>
                                                                <th className="pb-6 text-ivory/20 text-[10px] uppercase tracking-[0.3em] font-bold">Unit Test (25)</th>
                                                                <th className="pb-6 text-ivory/20 text-[10px] uppercase tracking-[0.3em] font-bold">Half-Yearly (80)</th>
                                                                <th className="pb-6 text-ivory/20 text-[10px] uppercase tracking-[0.3em] font-bold">Predicted (%)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-white/5 italic">
                                                            {(studentData?.academicRecords || []).map((record, idx) => (
                                                                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                                                                    <td className="py-6 text-ivory font-bold">{record.subject}</td>
                                                                    <td className="py-6 text-champagne font-mono">{record.unitTest}</td>
                                                                    <td className="py-6 text-ivory font-mono">{record.halfYearly}</td>
                                                                    <td className="py-6 text-champagne font-serif font-bold text-xl">{record.predicted}%</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'Fee Portal' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                                <div className="glass p-10 rounded-[3rem] border border-white/5 bg-gradient-to-br from-champagne/10 to-transparent">
                                                    <p className="text-champagne font-bold text-[10px] uppercase tracking-[0.5em] mb-4">Pending Dues</p>
                                                    <h3 className="text-5xl font-serif font-bold text-ivory mb-8">₹{studentData?.feeStatus?.pending?.toLocaleString() || '0'}</h3>
                                                    <button
                                                        onClick={() => toast.success('Secure Payment Gateway Initialized...', { icon: '💳' })}
                                                        className="w-full bg-champagne text-midnight py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white transition-all"
                                                    >
                                                        Pay Now
                                                    </button>
                                                </div>
                                                <div className="glass p-10 rounded-[3rem] border border-white/5">
                                                    <p className="text-ivory/20 text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">Last Payment</p>
                                                    <h3 className="text-4xl font-serif font-bold text-ivory mb-2">₹{studentData?.feeStatus?.lastPayment?.amount?.toLocaleString() || '0'}</h3>
                                                    <p className="text-champagne font-bold text-[10px] uppercase tracking-widest">Received on {studentData?.feeStatus?.lastPayment?.date || 'N/A'}</p>
                                                </div>
                                            </div>

                                            <div className="glass p-10 rounded-[3rem] border border-white/5">
                                                <h4 className="text-ivory font-bold uppercase tracking-widest text-xs mb-8">Quarterly Ledger</h4>
                                                <div className="space-y-4">
                                                    {(studentData?.feeStatus?.history || []).map((item, idx) => (
                                                        <div key={idx} className="flex items-center justify-between p-6 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-all">
                                                            <div>
                                                                <p className="text-ivory font-bold text-sm mb-1">{item.quarter}</p>
                                                                <p className="text-ivory/20 text-[10px] uppercase font-bold tracking-widest">Amount: ₹{item.amount.toLocaleString()}</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <span className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.status === 'Paid' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                                    {item.status}
                                                                </span>
                                                                <p className="mt-2 text-ivory/20 text-[10px] uppercase font-bold tracking-widest">{item.date}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'Circulars' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                            {(studentData?.circulars || []).map((notice) => (
                                                <div key={notice.id} className={`glass p-8 rounded-[2.5rem] border ${notice.highlight ? 'border-champagne/30 bg-champagne/[0.02]' : 'border-white/5'} hover:border-champagne transition-all group cursor-pointer`}>
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex gap-6 items-start">
                                                            <div className={`mt-1 w-2 h-2 rounded-full ${notice.highlight ? 'bg-champagne animate-ping' : 'bg-white/10'}`}></div>
                                                            <div>
                                                                <h4 className="text-ivory font-bold text-lg mb-2 group-hover:text-champagne transition-colors">{notice.title}</h4>
                                                                <p className="text-ivory/40 text-[10px] uppercase font-bold tracking-widest">{notice.date}</p>
                                                            </div>
                                                        </div>
                                                        <motion.div whileHover={{ x: 5 }} className="text-champagne opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <ChevronRight size={24} />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
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
