import { motion } from 'framer-motion';
import { Search, FileText, ClipboardCheck, GraduationCap } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, step, isLast }) => (
    <div className="flex gap-10 items-start relative pb-20">
        {!isLast && (
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-[39px] top-20 w-[1px] bg-gradient-to-b from-champagne via-champagne/20 to-transparent"
            />
        )}
        <div className="relative z-10 w-20 h-20 bg-midnight-light rounded-3xl border border-white/10 flex items-center justify-center shrink-0 group hover:border-champagne/50 hover:shadow-2xl hover:shadow-champagne/10 transition-all duration-700">
            <Icon size={32} className="text-champagne transition-transform group-hover:scale-110" />
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-midnight border border-champagne rounded-full flex items-center justify-center text-champagne font-serif font-bold text-sm shadow-2xl">
                0{step}
            </div>
        </div>
        <div className="pt-3">
            <h4 className="font-serif text-3xl font-bold text-ivory mb-4 tracking-tight">{title}</h4>
            <p className="text-ivory/40 leading-relaxed max-w-lg text-lg font-light">{desc}</p>
        </div>
    </div>
);

const AdmissionsJourney = ({ onApply }) => {
    const steps = [
        {
            icon: Search,
            title: "Private Inquiry",
            desc: "Begin your journey with a curated campus walkthrough and principal's session to understand our artisanal philosophy."
        },
        {
            icon: FileText,
            title: "Digital Portfolio",
            desc: "Submit your academic portfolio and personal statement through our secure admissions portal for review."
        },
        {
            icon: ClipboardCheck,
            title: "Holistic Assessment",
            desc: "A personalized interaction designed to uncover the student's unique potential, interests, and leadership traits."
        },
        {
            icon: GraduationCap,
            title: "Secure Enrollment",
            desc: "Welcome to the Athenia heritage. Secure your seat and begin your transformation into a global visionary."
        }
    ];

    return (
        <section className="py-32 px-6 bg-midnight overflow-hidden relative" id="admissions">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2 flex flex-col justify-center"
                    >
                        <span className="text-champagne font-bold text-xs tracking-[0.5em] uppercase mb-8 block">The Gateway</span>
                        <h2 className="font-serif text-5xl md:text-7xl font-bold text-ivory leading-tight mb-10">
                            Secure Your child's <br /><span className="text-champagne italic">Future Legacy</span>
                        </h2>
                        <p className="text-ivory/50 text-xl mb-12 leading-relaxed font-light max-w-xl">
                            Admissions at Athenia are a journey of mutual discovery. We seek curious minds ready to embrace a curriculum beyond standard boundaries.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onApply}
                            className="w-fit bg-champagne text-midnight px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-2xl shadow-champagne/20"
                        >
                            Start Application Portal
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="absolute inset-0 bg-champagne/10 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
                        <div className="relative space-y-4">
                            {steps.map((step, idx) => (
                                <Step
                                    key={idx}
                                    step={idx + 1}
                                    {...step}
                                    isLast={idx === steps.length - 1}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Visual Anchor */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 rounded-[4rem] overflow-hidden aspect-[21/9] border border-white/10 relative"
                >
                    <img src="/assets/admissions_sanctuary_1770840427423.png" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-12 left-12">
                        <h4 className="font-serif text-3xl font-bold text-ivory mb-2">The Admissions Sanctuary</h4>
                        <p className="text-champagne/60 text-sm font-bold tracking-widest uppercase">Palo Alto • Main Campus</p>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default AdmissionsJourney;
