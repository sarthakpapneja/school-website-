import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, ShieldCheck, ExternalLink, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const DISCLOSURE_DOCS = [
    { title: 'Affiliation Letter (2023-28)', file: 'Aff 23-28 CBSE.pdf', category: 'Affiliation' },
    { title: 'DIOS Certificate', file: 'DIOS Certificate for Affiliation', category: 'Affiliation' },
    { title: 'NOC from JDE', file: 'NOC From JDE', category: 'Affiliation' },
    { title: 'Recognition Certificate (RTE)', file: 'BSA\u00A0Recognitions RTE.pdf', category: 'Affiliation' },
    { title: 'Fire Safety Certificate', file: 'fire NOC 23-26.pdf', category: 'Infrastructure' },
    { title: 'Infrastructure Details', file: 'Infrastructure\u00A0Details\u00A0.pdf', category: 'Infrastructure' },
    { title: 'Water & Sanitation Proforma', file: 'Proforma regarding safe drinking water and sanitary condition.pdf', category: 'Infrastructure' },
    { title: 'NBCC Certificate', file: 'NBCC 2023.pdf', category: 'Infrastructure' },
    { title: 'Building Safety Certificate', file: 'NO 505 ANAND INDULGENCE, 15123 RAJPUR ROAD JAKHAN.pdf', category: 'Infrastructure' },
    { title: 'SMC Members List', file: 'SMC 10-5-22.pdf', category: 'Governance' },
    { title: 'PTA List', file: 'PTA\u00A0Athenia.pdf', category: 'Governance' },
    { title: 'Important Policies', file: 'Important Policy.pdf', category: 'Governance' },
    { title: 'Academic Calendar 2025-26', file: 'CALENDAR 2025-26 (1).pdf', category: 'Academics' },
    { title: 'Booklist 2025-26', file: 'AH Booklist 2025-26 ALL CLASSES.pdf', category: 'Academics' },
    { title: 'Mentors Handbook 2025-26', file: "Mentors' Handbook 2025-26 (2).pdf", category: 'Academics' },
    { title: 'Mandatory Disclosure Data', file: 'Mandatory disclosure for upload 10-7-25.pdf', category: 'Governance' }
];

const DisclosureModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const categories = [...new Set(DISCLOSURE_DOCS.map(doc => doc.category))];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[1200] flex items-center justify-center p-6 bg-midnight/90 backdrop-blur-2xl overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    className="bg-midnight-light border border-white/10 rounded-[3rem] w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="p-10 lg:p-14 border-b border-white/5 flex justify-between items-center bg-black/20">
                        <div>
                            <span className="text-champagne font-bold text-[10px] tracking-[0.5em] uppercase mb-3 block opacity-60">Transparency & Compliance</span>
                            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-ivory">
                                Mandatory Public <span className="text-champagne italic">Disclosure</span>
                            </h2>
                        </div>
                        <button onClick={onClose} className="p-4 glass rounded-full text-ivory/50 hover:text-champagne transition-all">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-10 lg:p-14 scrollbar-hide">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {categories.map((cat) => (
                                <div key={cat} className="space-y-8">
                                    <h3 className="text-champagne font-bold text-xs tracking-[0.3em] uppercase flex items-center gap-4">
                                        <div className="w-8 h-[1px] bg-champagne/30"></div>
                                        {cat}
                                    </h3>
                                    <div className="space-y-4">
                                        {DISCLOSURE_DOCS.filter(d => d.category === cat).map((doc) => (
                                            <a
                                                key={doc.title}
                                                href={`/schooldocs/${doc.file}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-champagne/30 hover:bg-white/[0.08] transition-all"
                                            >
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 rounded-xl bg-champagne/5 flex items-center justify-center text-champagne group-hover:scale-110 transition-transform">
                                                        <FileText size={20} />
                                                    </div>
                                                    <span className="text-ivory font-serif text-lg lg:text-xl font-medium tracking-tight group-hover:text-champagne transition-colors">{doc.title}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-ivory/20 group-hover:text-champagne transition-colors">
                                                    <ExternalLink size={18} />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Legal Note */}
                        <div className="mt-16 p-8 rounded-3xl bg-champagne/5 border border-champagne/10 flex items-start gap-6">
                            <ShieldCheck className="text-champagne flex-shrink-0" size={24} />
                            <div>
                                <p className="text-champagne font-bold text-[10px] tracking-widest uppercase mb-2">Institutional Verification</p>
                                <p className="text-ivory/60 text-sm leading-relaxed">
                                    In compliance with the CBSE directives for mandatory public disclosure, Athenia High School maintains these records for institutional transparency. All documents are digitally verified and updated as per circular requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DisclosureModal;
