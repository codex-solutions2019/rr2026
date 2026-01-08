import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>About Us | RR Institute Karnal - Our Mission & Vision</title>
                <meta name="description" content="Learn about RR Institute Karnal, the most trusted immigration and visa consultancy in Haryana. Our mission is to provide expert guidance for your global journey." />
            </Helmet>

            <Navbar />

            {/* Page Hero */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        About RR Institute
                    </motion.h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Karnal's leading consultancy with a legacy of excellence in immigration and global education.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At RR Institute, our mission is to simplify the complex journey of international migration. We believe every aspiring student and professional deserves a fair chance at global success.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            We provide transparent, ethical, and highly personalized guidance to ensure your dreams aren't just met, but exceeded with the highest approval rates in the industry.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Ethical Guidance', icon: <CheckCircle className="text-secondary" /> },
                                { label: 'Expert Counselors', icon: <Users className="text-secondary" /> },
                                { label: '99% Success Rate', icon: <Award className="text-secondary" /> },
                                { label: 'Global Network', icon: <Globe className="text-secondary" /> },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                                    {item.icon}
                                    <span className="font-bold text-gray-800">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Our Team"
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                            <span className="text-4xl font-bold block">12+</span>
                            <span className="text-sm uppercase tracking-widest font-bold">Years of Trust</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
