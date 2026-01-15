import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen as Book, Clock as Time, Award as Medal, CheckCircle as Check, ArrowRight as Arrow, Star as Rating } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CoursePage = ({ title, subtitle, duration, eligibility, description, content, tags }) => {
    return (
        <div className="min-h-screen bg-white">


            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center space-x-2 text-blue-200 text-sm mb-6 bg-white/5 w-fit mx-auto px-4 py-1.5 rounded-full"
                    >
                        <span>Courses</span>
                        <Arrow size={14} />
                        <span className="text-white">Nursing</span>
                        <Arrow size={14} />
                        <span className="text-secondary font-bold">{title}</span>
                    </motion.nav>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {tags.map((tag, i) => (
                            <span key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white font-medium flex items-center">
                                <Rating size={16} className="text-secondary mr-2" /> {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Left Content Column */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Overview */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-6">Course Overview</h2>
                                <div className="prose prose-lg text-gray-600 max-w-none">
                                    <p className="leading-relaxed">{description}</p>
                                </div>
                            </div>

                            {/* Syllabus/Modules */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-6">Academic Framework</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {content.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ y: -5 }}
                                            className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-4">
                                                <Check size={24} className="text-secondary" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Career Scope */}
                            <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Scope & Opportunities</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <h4 className="font-bold text-primary mb-3 text-lg">Nursing Officer</h4>
                                        <p className="text-gray-600">High-level administrative and clinical roles in tertiary care.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <h4 className="font-bold text-primary mb-3 text-lg">Health Researcher</h4>
                                        <p className="text-gray-600">Specialized research in clinical settings and universities.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <h4 className="font-bold text-primary mb-3 text-lg">Nursing Supervisor</h4>
                                        <p className="text-gray-600">Manage entire wards and nursing professional developments.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <h4 className="font-bold text-primary mb-3 text-lg">Special Nurse Agent</h4>
                                        <p className="text-gray-600">International nursing opportunities in UK, Canada, and USA.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar Column */}
                        <div className="space-y-8">
                            <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 sticky top-32">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Course Highlights</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mr-4 shrink-0">
                                            <Time size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Duration</p>
                                            <p className="text-gray-900 font-bold">{duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-orange-50 text-secondary rounded-xl flex items-center justify-center mr-4 shrink-0">
                                            <Medal size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Eligibility</p>
                                            <p className="text-gray-900 font-bold">{eligibility}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mr-4 shrink-0">
                                            <Book size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Level</p>
                                            <p className="text-gray-900 font-bold">Undergraduate Degree</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 space-y-4">
                                    <button className="w-full bg-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
                                        Apply for Admission
                                    </button>
                                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-900 transition-colors">
                                        Check Eligibility
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const BSCNursing = () => {
    return (
        <CoursePage
            title="B.Sc. Nursing"
            subtitle="Bachelor of Science in Nursing - Advanced university degree in professional healthcare."
            duration="4 Years"
            eligibility="10+2 with Science (PCB) with 45% marks"
            description="B.Sc. Nursing is a 4-year undergraduate degree program that prepares students for a career in nursing and healthcare. It covers a wide range of subjects, including anatomy, physiology, nutrition, and medical-surgical nursing."
            tags={["Degree Program", "Clinical Research", "Global Scope"]}
            content={[
                { title: "Advanced Anatomy", desc: "In-depth study of the human body and its biological functions." },
                { title: "Surgical Procedures", desc: "Understanding critical surgical care and patient management." },
                { title: "Pharmacology", desc: "Scientific study of medicine and its interaction with the body." },
                { title: "Public Health", desc: "Large scale healthcare management and policy understanding." }
            ]}
        />
    );
};

export default BSCNursing;
