import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Globe, Phone, Mail, MapPin, Award } from 'lucide-react';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import toast from 'react-hot-toast';
import logo from '../assets/logo.jpeg';

const ProspectusModal = ({ isOpen, onClose }) => {
    const prospectusRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        if (!prospectusRef.current) return;

        setIsDownloading(true);
        const toastId = toast.loading('Generating Prospectus PDF...');

        try {
            const canvas = await html2canvas(prospectusRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#02040a',
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('Athenia_High_Prospectus_2026.pdf');

            toast.success('Prospectus Downloaded!', { id: toastId });
        } catch (error) {
            console.error('PDF Generation Error:', error);
            toast.error(`PDF Error: ${error.message || 'Unknown'}`, { id: toastId });
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-midnight/90 backdrop-blur-xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-midnight border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header Toolbar */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-midnight/50 backdrop-blur-md z-20">
                            <div className="flex items-center gap-3">
                                <FileText className="text-champagne" size={20} />
                                <span className="text-ivory font-serif text-lg">Digital Prospectus 2026-27</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleDownload}
                                    disabled={isDownloading}
                                    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-champagne/10 text-champagne rounded-full hover:bg-champagne hover:text-midnight transition-colors text-xs font-bold tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Download size={14} />
                                    {isDownloading ? 'Generating...' : 'Download PDF'}
                                </button>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-ivory/50 hover:text-ivory hover:bg-white/5 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar relative bg-midnight p-8 md:p-12">
                            {/* Printable Content Wrapper */}
                            <div ref={prospectusRef} className="max-w-3xl mx-auto text-center md:text-left relative p-8 rounded-xl" style={{ backgroundColor: '#02040a', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '4rem', color: '#EAEAEA' }}>

                                {/* 1. Cover Page */}
                                <section className="text-center py-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center overflow-hidden mb-6" style={{ backgroundColor: '#D4AF37', borderColor: 'transparent' }}>
                                        <img src={logo} alt="Athenia High Logo" className="w-full h-full object-cover" style={{ borderColor: 'transparent' }} />
                                    </div>
                                    <h1 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: '#EAEAEA', borderColor: 'transparent' }}>ATHENIA HIGH</h1>
                                    <p className="font-display italic text-2xl md:text-3xl mb-8" style={{ color: '#D4AF37', borderColor: 'transparent' }}>Seek Wisdom</p>
                                    <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] uppercase" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(234,234,234,0.6)' }}>
                                        Prospectus 2026-27
                                    </div>
                                </section>

                                {/* 2. Vision */}
                                <section className="grid md:grid-cols-2 gap-12 items-center" style={{ borderColor: 'transparent' }}>
                                    <div style={{ borderColor: 'transparent' }}>
                                        <h2 className="font-serif text-3xl mb-6" style={{ color: '#EAEAEA', borderColor: 'transparent' }}>Architecting <span className="italic" style={{ color: '#D4AF37', borderColor: 'transparent' }}>Legends</span></h2>
                                        <p className="leading-relaxed font-light" style={{ color: 'rgba(234,234,234,0.7)', borderColor: 'transparent' }}>
                                            Athenia High is not merely a school; it is a sanctuary for the intellect and a forge for character. We blend classical rigor with avant-garde innovation to cultivate leaders who will shape the 22nd century.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <ul className="space-y-4 text-left" style={{ borderColor: 'transparent' }}>
                                            {['Global Curriculum', 'Elite Mentorship', 'Holistic Mastery', 'Heritage Campus'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(234,234,234,0.8)', borderColor: 'transparent' }}>
                                                    <Award size={16} style={{ color: '#D4AF37', borderColor: 'transparent' }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* 3. Academics Grid */}
                                <section style={{ borderColor: 'transparent' }}>
                                    <h2 className="font-serif text-3xl mb-8 text-center md:text-left" style={{ color: '#EAEAEA', borderColor: 'transparent' }}>Academic <span className="italic" style={{ color: '#D4AF37', borderColor: 'transparent' }}>Wings</span></h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ borderColor: 'transparent' }}>
                                        {[
                                            { title: "S.T.E.M. Institute", desc: "Quantum Computing & Biotech" },
                                            { title: "Global Humanities", desc: "History, Philosophy & Law" },
                                            { title: "Conservatory of Arts", desc: "Visual, Sonic & Dramatic Arts" },
                                            { title: "The Classics", desc: "Latin, Greek & Ancient Wisdom" }
                                        ].map((wing, i) => (
                                            <div key={i} className="p-6 rounded-xl text-left" style={{ backgroundColor: '#0f1115', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                <h3 className="font-serif text-lg mb-1" style={{ color: '#EAEAEA', borderColor: 'transparent' }}>{wing.title}</h3>
                                                <p className="text-xs font-light" style={{ color: 'rgba(234,234,234,0.5)', borderColor: 'transparent' }}>{wing.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* 4. Admissions Info */}
                                <section className="p-8 rounded-2xl text-center" style={{ backgroundColor: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
                                    <h2 className="font-serif text-2xl mb-4" style={{ color: '#EAEAEA', borderColor: 'transparent' }}>Admissions Open</h2>
                                    <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: 'rgba(234,234,234,0.7)', borderColor: 'transparent' }}>
                                        Limited seats available for the upcoming academic session. Selection is based on merit and aptitude.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold tracking-widest uppercase" style={{ color: '#D4AF37', borderColor: 'transparent' }}>
                                        <div className="p-3 rounded-lg" style={{ backgroundColor: '#02040a', border: '1px solid rgba(255,255,255,0.1)' }}>Early Years</div>
                                        <div className="p-3 rounded-lg" style={{ backgroundColor: '#02040a', border: '1px solid rgba(255,255,255,0.1)' }}>Primary Years</div>
                                        <div className="p-3 rounded-lg" style={{ backgroundColor: '#02040a', border: '1px solid rgba(255,255,255,0.1)' }}>Senior High</div>
                                    </div>
                                </section>

                                {/* 5. Contact Footer */}
                                <section className="pt-12 flex flex-col md:flex-row justify-between items-start gap-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <div className="text-left" style={{ borderColor: 'transparent' }}>
                                        <h3 className="font-serif text-xl mb-4" style={{ color: '#EAEAEA', borderColor: 'transparent' }}>Contact Us</h3>
                                        <div className="space-y-3 text-sm" style={{ color: 'rgba(234,234,234,0.6)', borderColor: 'transparent' }}>
                                            <p className="flex items-center gap-3" style={{ borderColor: 'transparent' }}><MapPin size={14} style={{ color: '#D4AF37', borderColor: 'transparent' }} /> 123 Heritage Lane, Athenia Estate</p>
                                            <p className="flex items-center gap-3" style={{ borderColor: 'transparent' }}><Phone size={14} style={{ color: '#D4AF37', borderColor: 'transparent' }} /> +1 (555) 123-4567</p>
                                            <p className="flex items-center gap-3" style={{ borderColor: 'transparent' }}><Mail size={14} style={{ color: '#D4AF37', borderColor: 'transparent' }} /> admissions@athenia.edu</p>
                                            <p className="flex items-center gap-3" style={{ borderColor: 'transparent' }}><Globe size={14} style={{ color: '#D4AF37', borderColor: 'transparent' }} /> www.atheniahigh.edu</p>
                                        </div>
                                    </div>
                                    <div className="text-left md:text-right" style={{ borderColor: 'transparent' }}>
                                        <div className="font-bold text-xs tracking-[0.2em] uppercase mb-2" style={{ color: '#D4AF37', borderColor: 'transparent' }}>Est. 1996</div>
                                        <p className="text-xs max-w-xs" style={{ color: 'rgba(234,234,234,0.4)', borderColor: 'transparent' }}>
                                            © 2026 Athenia High School. All rights reserved. <br /> Excellence in every endeavor.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Mobile Download Fab */}
                        <button
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className="sm:hidden absolute bottom-6 right-6 w-14 h-14 bg-champagne text-midnight rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform"
                        >
                            {isDownloading ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-midnight border-t-transparent" /> : <Download size={24} />}
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProspectusModal;
