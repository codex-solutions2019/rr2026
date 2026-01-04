import React from 'react';
import { Phone, Mail, MapPin, Menu, X, Globe, ChevronRight } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone size={14} className="mr-2" /> +91 98765 43210</span>
            <span className="flex items-center"><Mail size={14} className="mr-2" /> info@rrinstitutekarnal.com</span>
          </div>
          <div className="flex space-x-4">
             <span className="flex items-center"><MapPin size={14} className="mr-2" /> Karnal, Haryana, India</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo Placeholder */}
            <div className="text-2xl font-bold text-primary flex items-center">
               <Globe className="mr-2" size={32}/>
               <span>RR Institute</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <a href="#" className="hover:text-primary transition">Home</a>
            <a href="#" className="hover:text-primary transition">About Us</a>
            <a href="#" className="hover:text-primary transition">Services</a>
            <a href="#" className="hover:text-primary transition">Visa</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
              Book Consultation
            </button>
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
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
            <a href="#" className="block hover:text-primary font-medium">Home</a>
            <a href="#" className="block hover:text-primary font-medium">About Us</a>
            <a href="#" className="block hover:text-primary font-medium">Services</a>
            <a href="#" className="block hover:text-primary font-medium">Visa</a>
            <a href="#" className="block hover:text-primary font-medium">Contact</a>
            <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-red-600 transition w-full">
              Book Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
           {/* Placeholder for Hero Image */}
           <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Gateway to a <span className="text-secondary">Global Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl text-blue-100">
            Expert guidance for Study Visas, Immigration, and Career Counseling. We make your dreams of going abroad a reality.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-secondary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition">
              Start Your Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">What We Offer</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <Globe size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Study Visa</h4>
              <p className="text-gray-600 mb-6">Comprehensive guidance for university selection, application, and visa processing for top study destinations.</p>
              <a href="#" className="text-primary font-semibold flex items-center hover:text-secondary">Read More <ChevronRight size={16} className="ml-1"/></a>
            </div>

             {/* Service 2 */}
             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-primary">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Immigration</h4>
              <p className="text-gray-600 mb-6">Expert assistance for PR applications, work permits, and family sponsorship programs.</p>
              <a href="#" className="text-primary font-semibold flex items-center hover:text-secondary">Read More <ChevronRight size={16} className="ml-1"/></a>
            </div>

             {/* Service 3 */}
             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-secondary">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <Phone size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">IELTS/PTE Coaching</h4>
              <p className="text-gray-600 mb-6">Top-notch language training to help you achieve your desired score for visa applications.</p>
              <a href="#" className="text-primary font-semibold flex items-center hover:text-secondary">Read More <ChevronRight size={16} className="ml-1"/></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4 flex items-center">
                 <Globe className="mr-2" size={24}/> RR Institute
              </div>
              <p className="text-sm leading-relaxed">
                We are committed to providing the best immigration and study abroad consultancy services. Your success is our mission.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-secondary transition">About Us</a></li>
                <li><a href="#" className="hover:text-secondary transition">Our Services</a></li>
                <li><a href="#" className="hover:text-secondary transition">Success Stories</a></li>
                <li><a href="#" className="hover:text-secondary transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><MapPin size={16} className="mr-2 mt-1 shrink-0 text-secondary"/> Karnal, Haryana, India</li>
                <li className="flex items-center"><Phone size={16} className="mr-2 text-secondary"/> +91 98765 43210</li>
                <li className="flex items-center"><Mail size={16} className="mr-2 text-secondary"/> info@rrinstitutekarnal.com</li>
              </ul>
            </div>
            <div>
               <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
               <p className="text-sm mb-4">Subscribe to get latest updates.</p>
               <div className="flex">
                 <input type="email" placeholder="Your Email" className="bg-gray-800 border-none rounded-l px-4 py-2 w-full focus:ring-1 focus:ring-secondary outline-none"/>
                 <button className="bg-secondary text-white px-4 py-2 rounded-r hover:bg-red-600 transition">Go</button>
               </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} RR Institute Karnal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
