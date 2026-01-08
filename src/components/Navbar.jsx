import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 text-sm hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <span className="flex items-center"><Phone size={14} className="mr-2" /> +91 83980 93616</span>
                        <span className="flex items-center"><Mail size={14} className="mr-2" /> info@rrinstitute.in</span>
                    </div>
                    <div className="flex space-x-4">
                        <span className="flex items-center"><MapPin size={14} className="mr-2" /> Opp. Civil Hospital, Karnal</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <div className="text-2xl font-bold text-primary flex items-center">
                            <Globe className="mr-2" size={32} />
                            <span>RR Institute</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-8 font-medium text-gray-700">
                        <Link to="/" className="hover:text-primary transition">Home</Link>
                        <Link to="/about" className="hover:text-primary transition">About Us</Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center hover:text-primary transition pb-2">
                                Services <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-50 z-[60]">
                                <div className="px-6 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-2">Nursing & Paramedic</div>
                                <Link to="/anm" className="block px-6 py-2 hover:bg-primary/5 hover:text-primary transition">ANM Nursing</Link>
                                <Link to="/gnm" className="block px-6 py-2 hover:bg-primary/5 hover:text-primary transition">GNM Nursing</Link>
                                <Link to="/bsc-nursing" className="block px-6 py-2 hover:bg-primary/5 hover:text-primary transition">B.Sc. Nursing</Link>
                                <Link to="/paramedical" className="block px-6 py-2 hover:bg-primary/5 hover:text-primary transition pb-4">Paramedical Courses</Link>

                                <div className="px-6 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-2 mt-2">Global Services</div>
                                <Link to="/services" className="block px-6 py-2 hover:bg-primary/5 hover:text-primary transition">All Services</Link>
                                <Link to="/visa" className="block px-6 py-2 hover:bg-primary/5 hover:text-primary transition">Visa Consulting</Link>
                            </div>
                        </div>

                        <Link to="/contact" className="hover:text-primary transition">Contact</Link>
                    </div>

                    <div className="hidden md:block">
                        <a href="/#consultation" className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-red-600 transition inline-block">
                            Book Consultation
                        </a>
                    </div>

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                        <Link to="/" className="block hover:text-primary font-bold text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="block hover:text-primary font-bold text-lg" onClick={() => setIsMenuOpen(false)}>About Us</Link>

                        <div className="py-2">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Nursing & Paramedic</div>
                            <div className="pl-4 space-y-4 border-l-2 border-primary/10">
                                <Link to="/anm" className="block hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>ANM Nursing</Link>
                                <Link to="/gnm" className="block hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>GNM Nursing</Link>
                                <Link to="/bsc-nursing" className="block hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>B.Sc. Nursing</Link>
                                <Link to="/paramedical" className="block hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Paramedical Courses</Link>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Other Services</div>
                            <div className="pl-4 space-y-4 border-l-2 border-primary/10">
                                <Link to="/services" className="block hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>All Services</Link>
                                <Link to="/visa" className="block hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Visa Consulting</Link>
                            </div>
                        </div>

                        <Link to="/contact" className="block hover:text-primary font-bold text-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link>

                        <a href="/#consultation" className="bg-secondary text-white px-4 py-3 rounded-xl hover:bg-red-600 transition w-full font-bold shadow-lg text-center" onClick={() => setIsMenuOpen(false)}>
                            Book Consultation
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
