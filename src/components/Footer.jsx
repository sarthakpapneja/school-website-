import { motion } from 'framer-motion';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Footer = ({ onPortalClick, onRequestProspectus }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            toast.success('Joined the inner circle!');
            setEmail('');
            setLoading(false);
        }, 1500);
    };


    return (
        <footer className="bg-midnight pt-32 pb-16 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center text-midnight overflow-hidden">
                                <img src={logo} alt="Athenia High Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-serif text-3xl font-bold text-ivory">Athenia</span>
                        </div>
                        <p className="text-ivory/40 leading-relaxed font-light text-lg mb-10">
                            A boutique learning sanctuary where artisanal mentorship meets global innovation.
                        </p>
                        <div className="flex gap-6">
                            <a href="https://www.facebook.com/share/1DcStV7kKP" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ivory/40 hover:text-champagne hover:border-champagne transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/atheniaschool" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ivory/40 hover:text-champagne hover:border-champagne transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="https://youtube.com/@atheniasaharanpur3962" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ivory/40 hover:text-champagne hover:border-champagne transition-all">
                                <span className="sr-only">YouTube</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl font-bold text-ivory mb-10">Quick Links</h4>
                        <ul className="flex flex-col gap-5">
                            {['About Athenia', 'Academic Life', 'Admissions', 'Student Portal', 'Careers'].map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={link === 'Student Portal' ? onPortalClick : undefined}
                                        className="text-ivory/40 hover:text-champagne transition-colors text-lg font-light"
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl font-bold text-ivory mb-10">Contact Detail</h4>
                        <ul className="flex flex-col gap-6 text-ivory/40 font-light text-lg">
                            <li>
                                <a href="https://maps.app.goo.gl/n8SEY7G5UrYd28Gd7?g_st=ic" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">
                                    Athenia High School, <br />
                                    6km Milestone, Chunheti, <br />
                                    Delhi Road, Saharanpur - 247001
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919897545421" className="hover:text-champagne transition-colors">
                                    +91 9897545421
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@athenia.in" className="hover:text-champagne transition-colors">
                                    contact@athenia.in
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl font-bold text-ivory mb-10">Newsletter</h4>
                        <p className="text-ivory/40 font-light mb-8 text-lg">Join the inner circle for exclusive updates and academic insights.</p>
                        <form onSubmit={handleSubscribe} className="relative">
                            <input
                                type="email"
                                placeholder="Gentle Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-midnight-light border border-white/10 rounded-2xl px-6 py-5 text-ivory focus:outline-none focus:border-champagne transition-all"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="absolute right-3 top-3 bottom-3 w-12 rounded-xl bg-champagne text-midnight flex items-center justify-center hover:bg-white transition-all disabled:opacity-50"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-ivory/20 text-sm font-light tracking-widest uppercase">
                    <p>&copy; 2026 Athenia High School. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-champagne transition-colors">Privacy Policy</a>
                        <li><button onClick={onRequestProspectus} className="hover:text-champagne transition-colors text-left">Request Prospectus</button></li>
                        <a href="#" className="hover:text-champagne transition-colors">Terms of Heritage</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
