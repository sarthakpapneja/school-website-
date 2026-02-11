import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative" id="contact">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-royal-blue via-gold to-royal-blue"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-royal-blue rounded-full flex items-center justify-center text-white border border-white/20">
                                <span className="font-serif font-bold text-xl">A</span>
                            </div>
                            <div className="font-serif font-bold text-2xl tracking-tight">
                                Athenia <span className="text-gold">High</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering the next generation of leaders through holistic education and unwavering values.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-royal-blue flex items-center justify-center transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-gold font-serif">Quick Links</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            {['About Us', 'Admissions', 'Academics', 'Infrastructure', 'Careers'].map((link) => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors"> {link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-gold font-serif">Contact Us</h4>
                        <ul className="space-y-6 text-slate-300 text-sm">
                            <li className="flex gap-4">
                                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                                <span>123 Knowledge Park, <br /> Education City, State 560001</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                                <span>admissions@athenia.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-gold font-serif">Stay Updated</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex bg-white/5 rounded-lg border border-white/10 p-1">
                            <input
                                type="email"
                                placeholder="Your email..."
                                className="bg-transparent border-none outline-none text-white text-sm px-4 flex-1 placeholder:text-slate-500"
                            />
                            <button className="bg-gold text-royal-blue px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; 2026 Athenia High School. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <span>Designed by Sarthak Papneja</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
