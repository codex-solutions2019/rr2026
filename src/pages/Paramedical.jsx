import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, CheckCircle, ArrowRight, Star, HeartPulse, Activity, Zap, Shield } from 'lucide-react';
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
                        <ArrowRight size={14} />
                        <span className="text-white">Paramedical</span>
                        <ArrowRight size={14} />
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
                                <Star size={16} className="text-secondary mr-2" /> {tag}
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-6">What is Paramedical?</h2>
                                <div className="prose prose-lg text-gray-600 max-w-none">
                                    <p className="leading-relaxed">{description}</p>
                                </div>
                            </div>

                            {/* Specializations */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-6">Key Specializations</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {content.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.02 }}
                                            className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
                                        >
                                            <div className="w-14 h-14 bg-blue-50 group-hover:bg-primary transition-colors rounded-2xl flex items-center justify-center mb-6">
                                                {item.icon}
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3 text-xl">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Lab & Clinical Focus */}
                            <div className="bg-gray-950 p-12 rounded-3xl text-white">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="max-w-md">
                                        <h2 className="text-3xl font-bold mb-6">Practical Training Focus</h2>
                                        <p className="text-gray-400 leading-relaxed mb-6">
                                            Our paramedical students spend 70% of their time in modern laboratories and partner hospitals, ensuring they are job-ready from day one.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center text-sm"><CheckCircle size={16} className="text-secondary mr-3" /> State-of-the-art Labs</li>
                                            <li className="flex items-center text-sm"><CheckCircle size={16} className="text-secondary mr-3" /> Industry Standard Equipment</li>
                                            <li className="flex items-center text-sm"><CheckCircle size={16} className="text-secondary mr-3" /> Professional Internship</li>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/3 aspect-square bg-white/5 rounded-2xl flex items-center justify-center">
                                        <HeartPulse size={80} className="text-secondary animate-pulse" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar Column */}
                        <div className="space-y-8">
                            <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 sticky top-32">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Quick Admission</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mr-4 shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Duration</p>
                                            <p className="text-gray-900 font-bold">{duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-orange-50 text-secondary rounded-xl flex items-center justify-center mr-4 shrink-0">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Eligibility</p>
                                            <p className="text-gray-900 font-bold">{eligibility}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 space-y-4">
                                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-900 transition-colors">
                                        Request Info
                                    </button>
                                    <button className="w-full border-2 border-primary text-primary font-bold py-4 rounded-xl hover:bg-primary/5 transition-colors">
                                        Get Fee Details
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

const Paramedical = () => {
    return (
        <CoursePage
            title="Paramedical Courses"
            subtitle="Critical medical support roles that drive the healthcare industry."
            duration="Various (1-3 Years)"
            eligibility="10+2 with Science (PCB)"
            description="Paramedical courses are job-oriented medical programs that train professionals to support doctors in medical diagnosis, treatment, and patient care. These professionals are the backbone of any medical facility."
            tags={["Quick Employment", "Specialized Skills", "Medical Support"]}
            content={[
                {
                    title: "Lab Technology (DMLT)",
                    desc: "Expertise in clinical tests, biochemistry, and pathological investigations.",
                    icon: <Activity size={28} className="text-primary group-hover:text-white" />
                },
                {
                    title: "X-Ray Technology",
                    desc: "Training in medical imaging, scans, and radiation safety protocols.",
                    icon: <Zap size={28} className="text-primary group-hover:text-white" />
                },
                {
                    title: "OT Technician",
                    desc: "Assisting in surgical procedures and maintaining sterile environments.",
                    icon: <Shield size={28} className="text-primary group-hover:text-white" />
                },
                {
                    title: "Emergency Tech",
                    desc: "First response, ambulance care, and critical life support systems.",
                    icon: <HeartPulse size={28} className="text-primary group-hover:text-white" />
                }
            ]}
        />
    );
};

export default Paramedical;
