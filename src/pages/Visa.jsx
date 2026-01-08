import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Globe, Plane, Shield, Award, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Visa = () => {
    const visaCategories = [
        {
            country: 'Moldova',
            title: 'Europe Entry & PR',
            flag: '🇲🇩',
            details: 'Moldova is becoming a preferred gateway to Europe. We provide end-to-end assistance for work permits, residency, and study visas for Moldova.',
            image: 'https://images.unsplash.com/photo-1533923055331-482434fa5f86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'Canada',
            title: 'Study & PR Pathways',
            flag: '🇨🇦',
            details: 'Canada offers the most flexible PR pathways for international students. Our experts help you choose the right DLI and program.',
            image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'United Kingdom',
            title: 'Graduate Route Visa',
            flag: '🇬🇧',
            details: 'Study in world-class institutions and benefit from the 2-year post-study work permit. Fast-track your global career.',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'Australia',
            title: 'Subclass 500 & 485',
            flag: '🇦🇺',
            details: 'Australia is known for its high quality of life and vibrant cities. We guide you through the GTE and visa submission process.',
            image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            country: 'USA',
            title: 'F1 Student Visa',
            flag: '🇺🇸',
            details: 'The ultimate destination for tech and business studies. We specialized in interview preparation for F1 visas.',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Visa Guidance | RR Institute Karnal - Study Abroad Specialists</title>
                <meta name="description" content="Expert visa guidance for Canada, UK, Australia, USA, and Europe. RR Institute Karnal ensures 99% success rate for your visa application." />
            </Helmet>

            <Navbar />

            {/* Page Hero */}
            <section className="bg-primary text-white py-24 relative">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-md"
                    >
                        <Plane className="text-secondary animate-pulse" size={40} />
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Expert Visa Guidance</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto italic font-light">
                        "Your dreams don't have borders, neither should your future."
                    </p>
                </div>
            </section>

            {/* Visa Categories */}
            <section className="py-24 container mx-auto px-4">
                <div className="space-y-20">
                    {visaCategories.map((visa, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            <div className="lg:w-1/2">
                                <div className="relative">
                                    <img src={visa.image} alt={visa.country} className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
                                    <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-xl text-3xl shadow-xl">{visa.flag}</div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-4xl font-bold text-gray-900">{visa.country} - <span className="text-secondary">{visa.title}</span></h2>
                                <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6">
                                    {visa.details}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                                        <Shield size={16} className="mr-2 text-green-600" /> Secure Processing
                                    </span>
                                    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                                        <Award size={16} className="mr-2 text-yellow-500" /> High Success Rate
                                    </span>
                                </div>
                                <button className="flex items-center text-primary font-bold text-xl hover:text-secondary transition-colors group">
                                    Get Started with {visa.country} <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Visa;
