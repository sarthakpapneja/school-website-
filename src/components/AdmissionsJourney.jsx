import { motion } from 'framer-motion';
import { Search, FileText, UserCheck, GraduationCap } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, idx, isLast }) => (
    <div className="flex gap-8 group">
        <div className="flex flex-col items-center">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-royal-blue/5 border border-slate-100 flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-500 z-10"
            >
                <Icon size={30} />
            </motion.div>
            {!isLast && (
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100px' }}
                    transition={{ duration: 1, delay: idx * 0.3 }}
                    viewport={{ once: true }}
                    className="w-1 bg-gradient-to-b from-royal-blue to-gold/20"
                />
            )}
        </div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="pb-20"
        >
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 max-w-md leading-relaxed">
                {desc}
            </p>
            <div className="mt-4 w-12 h-1 bg-gold rounded-full group-hover:w-24 transition-all duration-500" />
        </motion.div>
    </div>
);

const AdmissionsJourney = () => {
    const steps = [
        {
            icon: Search,
            title: "Inquiry & Discovery",
            desc: "Explore our campus and values through a scheduled tour or virtual session with our admissions team."
        },
        {
            icon: FileText,
            title: "Application Submission",
            desc: "Apply online through our secure portal with academic transcripts and required documentation."
        },
        {
            icon: UserCheck,
            title: "Assessment & Interview",
            desc: "A friendly evaluation of the student's aptitude followed by a conversation with the Principal."
        },
        {
            icon: GraduationCap,
            title: "Enrollment & Onboarding",
            desc: "Once selected, complete the fee formalities to secure your seat and begin the journey of wisdom."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden" id="admissions">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">

                    <div className="w-full lg:w-2/5">
                        <div className="sticky top-32">
                            <span className="text-gold font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Enrollment 2026-27</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue leading-tight mb-8">
                                Your Path to <br /> <span className="text-gold">Athenia Wisdom</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                Joining Athenia High School is the first step toward a transformative educational experience. We've simplified our admissions process to be transparent and merit-based.
                            </p>
                            <button className="bg-gold text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl shadow-gold/20 transform hover:-translate-y-1">
                                Start Application
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5 py-10">
                        {steps.map((step, idx) => (
                            <Step
                                key={idx}
                                idx={idx}
                                icon={step.icon}
                                title={step.title}
                                desc={step.desc}
                                isLast={idx === steps.length - 1}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdmissionsJourney;
