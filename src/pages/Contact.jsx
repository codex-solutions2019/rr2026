import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone, Mail, MapPin, Send, MessageSquare,
    Map as MapIcon, Clock, CheckCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white">


            <Navbar />

            {/* Page Hero */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Contact Us
                    </motion.h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Have questions? We're here to help you navigate your global future. Reach out to us today.
                    </p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info Column */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-secondary pl-6">Get in Touch</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
                                Our team of expert consultants is ready to answer your queries and provide 1-on-1 counseling.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: <Phone className="text-secondary" />, title: 'Call Us', detail: '+91 83980 93616' },
                                { icon: <Mail className="text-primary" />, title: 'Email Us', detail: 'info@rrinstitute.in' },
                                { icon: <MapPin className="text-secondary" />, title: 'Visit Us', detail: 'Opp. Civil Hospital, Karnal' },
                                { icon: <Clock className="text-primary" />, title: 'Working Hours', detail: 'Mon - Sat: 9:00 AM - 6:00 PM' },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="mb-4">{item.icon}</div>
                                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 font-medium">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Google Map */}
                        <div className="bg-gray-100 rounded-3xl h-[400px] overflow-hidden shadow-inner border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.8431999473682!2d76.9913355761169!3d29.695325375101316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddba2040b9991%3A0xb28af4713f494283!2sRR%20Institute%20-%20ANM%20%2C%20GNM%20%2C%20BSC%20Nursing%20%2C%20paramedical%20Courses%20Admission!5e0!3m2!1sen!2sin!4v1767857447878!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="RR Institute Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16 border border-gray-100">
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle className="text-green-600" size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                                    <p className="text-gray-600 text-lg">Thank you for reaching out. Our experts will contact you shortly.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-primary font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="flex items-center space-x-3 mb-10">
                                        <MessageSquare className="text-secondary" />
                                        <h3 className="text-3xl font-bold text-gray-900">Send us a Message</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <input
                                                type="text" required placeholder="Full Name"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                            />
                                            <input
                                                type="email" required placeholder="Email Address"
                                                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <input
                                            type="tel" required placeholder="Phone Number"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        />
                                        <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-gray-500">
                                            <option>Inquiry Topic</option>
                                            <option>Study Visa</option>
                                            <option>PR & Immigration</option>
                                            <option>Training Programs</option>
                                            <option>Other</option>
                                        </select>
                                        <textarea
                                            rows="5" placeholder="Your Message"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        ></textarea>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={isSubmitting}
                                            className="w-full bg-primary text-white font-bold py-5 rounded-xl shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center space-x-3"
                                        >
                                            {isSubmitting ? 'Sending...' : (
                                                <>
                                                    <span>Send My Message</span>
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
