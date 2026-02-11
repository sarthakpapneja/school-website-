import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ApplicationModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        studentName: '',
        grade: '',
        parentName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Success state
        toast.success('Legacy request submitted!');
        setStep(4);
        setLoading(false);
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
                    className="bg-midnight-light border border-white/10 rounded-[3.5rem] w-full max-w-2xl overflow-hidden shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="p-12 pb-0 flex justify-between items-start">
                        <div>
                            <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-4 block">Process Of Selection</span>
                            <h2 className="font-serif text-4xl font-bold text-ivory">Portal of <span className="text-champagne italic">Aspiration</span></h2>
                        </div>
                        <button onClick={onClose} className="text-ivory/50 hover:text-champagne transition-colors">
                            <X size={28} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-12 pt-10">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-ivory/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Aspirant Name</label>
                                        <input
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            placeholder="Full Legal Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-ivory/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Intellectual Level</label>
                                        <select
                                            name="grade"
                                            value={formData.grade}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light appearance-none"
                                            required
                                        >
                                            <option value="" className="bg-midnight">Select Placement</option>
                                            <optgroup label="Early Years" className="bg-midnight text-champagne font-bold">
                                                <option value="play_school" className="bg-midnight text-ivory font-sans">Play School</option>
                                                <option value="nursery" className="bg-midnight text-ivory font-sans">Nursery</option>
                                                <option value="lkg" className="bg-midnight text-ivory font-sans">Junior Kindergarten</option>
                                                <option value="ukg" className="bg-midnight text-ivory font-sans">Senior Kindergarten</option>
                                            </optgroup>
                                            <optgroup label="Primary Years" className="bg-midnight text-champagne font-bold">
                                                <option value="grade_1" className="bg-midnight text-ivory font-sans">Grade 1</option>
                                                <option value="grade_2" className="bg-midnight text-ivory font-sans">Grade 2</option>
                                                <option value="grade_3" className="bg-midnight text-ivory font-sans">Grade 3</option>
                                                <option value="grade_4" className="bg-midnight text-ivory font-sans">Grade 4</option>
                                                <option value="grade_5" className="bg-midnight text-ivory font-sans">Grade 5</option>
                                            </optgroup>
                                            <optgroup label="Middle Years" className="bg-midnight text-champagne font-bold">
                                                <option value="grade_6" className="bg-midnight text-ivory font-sans">Grade 6</option>
                                                <option value="grade_7" className="bg-midnight text-ivory font-sans">Grade 7</option>
                                                <option value="grade_8" className="bg-midnight text-ivory font-sans">Grade 8</option>
                                            </optgroup>
                                            <optgroup label="Senior Years" className="bg-midnight text-champagne font-bold">
                                                <option value="grade_9" className="bg-midnight text-ivory font-sans">Grade 9</option>
                                                <option value="grade_10" className="bg-midnight text-ivory font-sans">Grade 10</option>
                                                <option value="grade_11" className="bg-midnight text-ivory font-sans">Grade 11</option>
                                                <option value="grade_12" className="bg-midnight text-ivory font-sans">Grade 12</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={nextStep} type="button" className="mt-12 w-full bg-champagne text-midnight py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white transition-all shadow-xl shadow-champagne/10 flex items-center justify-center gap-3">
                                    Verification Next <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-ivory/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Guardian Name</label>
                                        <input name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Guardian Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light" required />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-ivory/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Private Email</label>
                                            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@address.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light" required />
                                        </div>
                                        <div>
                                            <label className="block text-ivory/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Direct Channel</label>
                                            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6 mt-12">
                                    <button onClick={prevStep} type="button" className="w-1/3 border border-white/10 text-ivory py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white/5 transition-all">Back</button>
                                    <button onClick={nextStep} type="button" className="w-2/3 bg-champagne text-midnight py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white transition-all shadow-xl shadow-champagne/10">Proceed Further</button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div>
                                    <label className="block text-ivory/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Personal Statement / Inquiry</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe the aspirant's unique vision..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-ivory focus:border-champagne focus:outline-none transition-all font-light h-40" />
                                </div>
                                <div className="flex gap-6 mt-12">
                                    <button onClick={prevStep} type="button" className="w-1/3 border border-white/10 text-ivory py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white/5 transition-all">Back</button>
                                    <button type="submit" disabled={loading} className="w-2/3 bg-champagne text-midnight py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white transition-all shadow-xl shadow-champagne/10 flex items-center justify-center gap-3">
                                        {loading ? <Loader2 className="animate-spin" size={20} /> : 'Final Submission'}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 size={48} className="text-champagne" />
                                </div>
                                <h3 className="font-serif text-4xl font-bold text-ivory mb-4">Aspiration <span className="text-champagne">Received</span></h3>
                                <p className="text-ivory/50 text-lg font-light mb-12">Our admissions concierge will review your portfolio and reach out within 48 hours for a private session.</p>
                                <button onClick={onClose} className="bg-ivory text-midnight px-12 py-5 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-champagne transition-all">Close Portal</button>
                            </motion.div>
                        )}
                    </form>

                    {/* Progress Bar */}
                    {step < 4 && (
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5">
                            <motion.div
                                animate={{ width: `${(step / 3) * 100}%` }}
                                className="h-full bg-champagne shadow-[0_0_15px_rgba(212,175,55,1)]"
                            />
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ApplicationModal;
