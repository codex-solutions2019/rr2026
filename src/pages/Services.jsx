import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    BookOpen, Globe, Award, Shield,
    MapPin, Clock, Headphones, CheckCircle, ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
    const services = [
        {
            title: 'ANM Nursing',
            link: '/anm',
            description: 'Foundation course in clinical nursing and midwifery for aspiring healthcare professionals.',
            icon: <Award className="text-secondary" size={32} />,
            features: ['Practical Clinical Training', 'Hospital Internships', 'State Certification']
        },
        {
            title: 'GNM Nursing',
            link: '/gnm',
            description: 'Comprehensive diploma in general nursing and midwifery with advanced clinical focus.',
            icon: <Award className="text-primary" size={32} />,
            features: ['3.5 Years Program', 'ICU & Emergency Care', 'Nursing Council Recognized']
        },
        {
            title: 'B.Sc. Nursing',
            link: '/bsc-nursing',
            description: 'Professional undergraduate degree for global careers in nursing and healthcare research.',
            icon: <Award className="text-blue-500" size={32} />,
            features: ['University Degree', 'Global Career Scope', 'Research Opportunities']
        },
        {
            title: 'Paramedical Courses',
            link: '/paramedical',
            description: 'Specialized lab technology, radiology, and emergency care programs for quick employment.',
            icon: <Shield className="text-green-600" size={32} />,
            features: ['Job-Oriented Training', 'Modern Lab Access', 'Emergency Response Skills']
        },
        {
            title: 'Study Visa',
            link: '/services',
            description: 'Complete guidance for top universities in Canada, UK, USA, Australia, and Europe.',
            icon: <BookOpen className="text-secondary" size={32} />,
            features: ['University Selection', 'Offer Letter Processing', 'SOP Assistance', 'Visa Documentation']
        },
        {
            title: 'PR & Immigration',
            link: '/services',
            description: 'Expert pathway planning for Permanent Residency and skilled immigration programs.',
            icon: <Globe className="text-primary" size={32} />,
            features: ['Express Entry', 'PNP Programs', 'Skilled Worker Visa', 'Family Sponsorship']
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Our Services | RR Institute Karnal - Visa & Immigration Experts</title>
                <meta name="description" content="Explore our wide range of services including Study Visas, PR, IELTS/PTE coaching, and Tourist Visas. RR Institute Karnal - Your global gateway." />
            </Helmet>

            <Navbar />

            {/* Page Hero */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Our Comprehensive Services
                    </motion.h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Tailored solutions for every international aspiration. Professional, ethical, and result-oriented.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
                        >
                            <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center text-sm font-medium text-gray-700">
                                        <CheckCircle size={16} className="text-secondary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to={service.link}
                                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors"
                            >
                                View Details <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-secondary py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">Ready to start your journey?</h2>
                    <a href="/#consultation" className="bg-white text-secondary px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-xl inline-block">
                        Book Your Free Consultation Today
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
