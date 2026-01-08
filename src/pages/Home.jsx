import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Globe, Send, Users, Award, BookOpen, CheckCircle, Star, Phone, Mail, MapPin, Plane } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', service: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Helmet>
        <title>RR Institute Karnal | Expert Immigration & Visa Consultants</title>
        <meta name="description" content="RR Institute Karnal - Your trusted partner for Study Visas, Immigration, PR, and IELTS/PTE coaching in Karnal. 99% success rate in visa approvals." />
        <meta name="keywords" content="Immigration consultants Karnal, Study Visa Canada, Best IELTS coaching Karnal, PTE coaching Haryana, PR Australia, RR Institute Karnal contact number" />
        <meta property="og:title" content="RR Institute Karnal | Expert Immigration & Visa Consultants" />
        <meta property="og:description" content="Karnal's most trusted visa and immigration experts. Start your global journey with us today." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Elements */}
        {/* Hero Section Background - Dark Theme */}
        <div className="absolute inset-0 z-0">
          {/* Base Image with Animation */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 0.25 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544654803-b69110bb8151?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
          />

          {/* Layered Deep Gradients & Skewed Accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/90 to-primary/20 z-10"></div>

          <motion.div
            initial={{ x: '100%', skewX: -12 }}
            animate={{ x: '40%', skewX: -12 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[60%] h-full bg-secondary/5 transform origin-right z-20"
          ></motion.div>

          <motion.div
            initial={{ x: '100%', skewX: -24 }}
            animate={{ x: '50%', skewX: -24 }}
            transition={{ duration: 1.7, ease: "easeOut", delay: 0.2 }}
            className="absolute top-0 right-0 w-full h-full bg-primary/10 backdrop-blur-md transform origin-right z-20 border-l border-white/5"
          ></motion.div>

          {/* Enhanced Glowing Blobs */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] z-10"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] z-10"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"
              >
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-sm font-bold tracking-widest uppercase">Karnal's Most Trusted Institute</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1]">
                Your Gateway to a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-red-400 to-yellow-400">Global Future</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed font-light max-w-2xl">
                Expert guidance for Study Visas, Immigration, and Career Counseling. We transform your aspirations into international success stories with 99% visa approval rate.
              </p>
              <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(239 68 68 / 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl shadow-red-500/30 hover:bg-red-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#1E3A8A" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300"
                >
                  Explore Services
                </motion.button>
              </div>
            </motion.div>

            {/* Right Animation Column */}
            <div className="hidden lg:flex justify-center relative h-[700px] lg:h-[800px] w-full">
              {/* Circular Orbit Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central Circle with Image */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative z-20 w-80 h-80 rounded-full border-8 border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Travel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent"></div>
                </motion.div>

                {/* Single Orbit (Dashed Line) */}
                <div
                  className="absolute border border-dashed border-white/20 rounded-full"
                  style={{
                    width: `${400 * 1.5}px`,
                    height: `${400 * 1.5}px`
                  }}
                />

                {/* Orbiting Items (Flags & Planes) */}
                {[
                  { type: 'flag', content: '🇬🇧', angle: 0 },
                  { type: 'plane', angle: 45 },
                  { type: 'flag', content: '🇩🇪', angle: 90 },
                  { type: 'plane', angle: 135 },
                  { type: 'flag', content: '🇺🇸', angle: 180 },
                  { type: 'plane', angle: 225 },
                  { type: 'flag', content: '🇲🇹', angle: 270 },
                  { type: 'plane', angle: 315 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ rotate: [item.angle, item.angle + 360] }}
                    transition={{
                      duration: 35,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute pointer-events-none"
                    style={{
                      width: `${400 * 1.5}px`,
                      height: `${400 * 1.5}px`,
                    }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      {item.type === 'flag' ? (
                        <motion.div
                          animate={{ rotate: [-(item.angle), -(item.angle + 360)] }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                          className="bg-white p-2 rounded-full shadow-xl border border-white/10 flex items-center justify-center w-12 h-12 text-2xl"
                        >
                          {item.content}
                        </motion.div>
                      ) : (
                        <motion.div
                          animate={{ rotate: [-(item.angle), -(item.angle + 360)] }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                          className="bg-primary/20 backdrop-blur-sm p-3 rounded-full border border-white/10"
                        >
                          <Plane size={24} className="text-secondary -rotate-45" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-10 relative z-20 container mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x border border-gray-100 overflow-hidden">
          {[
            { icon: <Globe className="text-secondary" />, label: 'Countries Covered', value: '15+' },
            { icon: <Users className="text-primary" />, label: 'Happy Students', value: '2500+' },
            { icon: <Award className="text-yellow-500" />, label: 'Success Rate', value: '99%' },
            { icon: <BookOpen className="text-blue-500" />, label: 'Years Experience', value: '12+' },
          ].map((stat, idx) => (
            <div key={idx} className="p-8 text-center flex flex-col items-center justify-center">
              <div className="mb-3 p-3 bg-gray-50 rounded-full">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Consultation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>

              <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 max-w-xs">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-tight text-lg">ISO Certified</div>
                  <div className="text-sm text-gray-500">Quality Management System</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">About RR Institute</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Your Dreams with <span className="text-primary">Trusted Guidance</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Since our inception, RR Institute Karnal has been dedicated to helping students and professionals navigate the complex landscape of international education and immigration.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Personalized Career Counseling',
                  'Expert Visa Documentation Support',
                  'High Success Rate in IELTS/PTE Coaching',
                  'End-to-End Post-Landing Support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <div className="text-secondary"><CheckCircle size={20} /></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center space-x-2 text-primary font-bold group">
                <span className="border-b-2 border-primary group-hover:border-secondary transition-colors">Discover Our Full Story</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Services</h3>
            <p className="text-gray-500 text-lg">We provide specialized consultancy for all your international needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Study Visa', icon: <Globe size={32} />, desc: 'Comprehensive guidance for university selection and visa processing for top destinations.', color: 'border-secondary' },
              { title: 'Immigration', icon: <MapPin size={32} />, desc: 'Expert assistance for PR applications, work permits, and family sponsorship.', color: 'border-primary' },
              { title: 'IELTS/PTE Coaching', icon: <BookOpen size={32} />, desc: 'Result-oriented language training with specialized study material and mock tests.', color: 'border-secondary' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`bg-white p-10 rounded-2xl shadow-lg border-t-8 ${service.color} transition-all duration-300`}
              >
                <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-primary shadow-inner">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-primary font-bold hover:text-secondary group">
                  Read More <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Cards Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Choose Your Destination</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Explore Top Countries</h3>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-primary font-bold group">
              <span>View All Countries</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Canada', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', students: '1200+' },
              { name: 'Australia', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', students: '850+' },
              { name: 'United Kingdom', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', students: '650+' },
              { name: 'USA', img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', students: '450+' },
            ].map((country, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl"
              >
                <img src={country.img} alt={country.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-2xl font-bold text-white mb-2">{country.name}</h4>
                  <div className="flex justify-between items-center text-gray-300 text-sm">
                    <span>{country.students} Students</span>
                    <span className="bg-secondary/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Popular</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 transform origin-right"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Success Stories</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Students Say</h3>
              <p className="text-gray-400 text-lg mb-8">Real stories from people who achieved their global dreams with RR Institute.</p>
              <div className="flex space-x-4">
                <div className="bg-white/10 p-4 rounded-full border border-white/20"><Users size={32} className="text-secondary" /></div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-gray-500 text-sm">Verified Reviews</div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 relative">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {[
                  { name: 'Amit Sharma', role: 'Student, Canada', text: 'RR Institute made my Canada study visa process incredibly smooth. Their guidance on university selection was spot on!', rating: 5 },
                  { name: 'Priya Verma', role: 'PR, Australia', text: 'Highly professional team. They handled my complex PR case with ease and kept me updated at every step.', rating: 5 }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 relative">
                    <div className="absolute top-8 right-8 text-secondary/30"><BookOpen size={48} /></div>
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-gray-300 text-lg italic mb-8 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-bold text-xl">{testimonial.name}</div>
                      <div className="text-secondary text-sm font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-24 bg-white" id="consultation">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Book a free 15-minute consultation with our expert counselors and get all your doubts cleared today.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl"><Phone className="text-secondary" /></div>
                  <div>
                    <div className="text-sm text-blue-200">Call Us Today</div>
                    <div className="text-xl font-bold">+91 83980 93616</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl"><Mail className="text-secondary" /></div>
                  <div>
                    <div className="text-sm text-blue-200">Email Us</div>
                    <div className="text-xl font-bold">info@rrinstitute.in</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-gray-50 p-12 lg:p-20">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="bg-green-100 p-6 rounded-full mb-6">
                      <CheckCircle className="text-green-600" size={64} />
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h4>
                    <p className="text-gray-600 text-lg">Our experts will contact you within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-primary font-bold border-b-2 border-primary"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Name</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                          placeholder="+91 XXXXX XXXXX"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Interested Service</label>
                      <select
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        <option value="study-visa">Study Visa</option>
                        <option value="immigration">Immigration</option>
                        <option value="ielts-pte">IELTS/PTE Coaching</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-white font-bold py-5 rounded-xl shadow-xl shadow-red-500/20 flex items-center justify-center space-x-3 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Processing...' : (
                        <>
                          <span>Book My Free Consultation</span>
                          <Send size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
