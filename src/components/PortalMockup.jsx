import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck, Mail, Key } from 'lucide-react';
import toast from 'react-hot-toast';

const PortalMockup = ({ isOpen, onClose }) => {
    const handleLogin = (e) => {
        e.preventDefault();
        toast.error('Access Denied. Biometric authentication required.', {
            icon: '🚫',
            style: {
                borderRadius: '1rem',
                background: '#161B22',
                color: '#F8F9FA',
            },
        });
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-3xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="bg-midnight-light border border-white/10 rounded-[3.5rem] w-full max-w-lg overflow-hidden shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-12">
                        <div className="flex justify-between items-start mb-12">
                            <div className="w-16 h-16 bg-champagne rounded-2xl flex items-center justify-center text-midnight">
                                <Lock size={32} />
                            </div>
                            <button onClick={onClose} className="text-ivory/50 hover:text-champagne transition-colors">
                                <X size={28} />
                            </button>
                        </div>

                        <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-4 block">Authorized Entry</span>
                        <h2 className="font-serif text-4xl font-bold text-ivory mb-12 leading-tight">
                            Athenia <br /><span className="text-champagne italic">Unified Portal</span>
                        </h2>

                        <form onSubmit={handleLogin} className="space-y-8">
                            <div className="relative">
                                <label className="block text-ivory/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Scholastic ID</label>
                                <div className="relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/20" size={20} />
                                    <input
                                        type="text"
                                        placeholder="ID_XXXXX"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-ivory/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Encryption Key</label>
                                <div className="relative">
                                    <Key className="absolute left-6 top-1/2 -translate-y-1/2 text-ivory/20" size={20} />
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-champagne text-midnight py-6 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white transition-all shadow-2xl shadow-champagne/20 flex items-center justify-center gap-4 group"
                            >
                                Authenticate Entry <ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-12 pt-8 border-t border-white/5 text-center">
                            <p className="text-ivory/20 text-xs tracking-widest uppercase">Forgotten credentials? Contact the Registrar.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PortalMockup;
