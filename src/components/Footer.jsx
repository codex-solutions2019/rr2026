import React from 'react';
import { Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-3xl font-bold text-white mb-8 flex items-center">
                            <Globe className="mr-3 text-secondary" size={36} /> RR Institute
                        </Link>
                        <p className="text-lg leading-relaxed mb-8">
                            Empowering dreams through professional immigration and study abroad consultancy. Your success is our ultimate mission.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                                    <span className="sr-only">{social}</span>
                                    <Globe size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 border-b-2 border-secondary w-fit pb-2">Our Services</h4>
                        <ul className="space-y-4 text-lg">
                            <li><Link to="/services" className="hover:text-secondary transition-colors">Study Visa</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">PR & Immigration</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">IELTS/PTE Training</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">Tourist Visa</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors">Business Visa</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 border-b-2 border-secondary w-fit pb-2">Quick Links</h4>
                        <ul className="space-y-4 text-lg">
                            <li><Link to="/about" className="hover:text-secondary transition-colors">About RR Institute</Link></li>
                            <li><Link to="/" className="hover:text-secondary transition-colors">Success Stories</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">Latest News</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-8 border-b-2 border-secondary w-fit pb-2">Get in Touch</h4>
                        <ul className="space-y-6 text-lg">
                            <li className="flex items-start">
                                <MapPin size={24} className="mr-4 text-secondary shrink-0 mt-1" />
                                <span>Opp. Civil Hospital, Above Chawla Clinical Lab, 2nd Floor, Karnal, Haryana 132001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={24} className="mr-4 text-secondary shrink-0" />
                                <span>+91 83980 93616</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={24} className="mr-4 text-secondary shrink-0" />
                                <span className="break-all">info@rrinstitute.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-10 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} RR Institute Karnal. Designed with excellence for your future.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
