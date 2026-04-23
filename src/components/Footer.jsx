import React from 'react';
import { Printer, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Animated Border Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-red-800 to-yellow-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  Fast <span className="text-yellow-500">Printing</span>
                </span>
                <p className="text-xs text-gray-400 -mt-1">& Packaging</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Leading printing and packaging company in Pakistan. We deliver quality, speed, and sustainability in every project.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
                { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
                { icon: Youtube, href: '#', color: 'hover:bg-red-600' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} group`}
                >
                  <social.icon className="w-4 h-4 group-hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services Column */}
          <div style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-white font-bold text-lg mb-5 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {['Digital Printing', 'Offset Printing', 'Custom Packaging', 'Design Services', 'Screen Printing', 'Large Format Printing'].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {service}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-yellow-500 hover:text-yellow-400 transition flex items-center gap-1">View All Services →</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Contact Us', 'FAQ', 'Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-white font-bold text-lg mb-5">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 group">
                <MapPin className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition" />
                <span className="text-gray-400 group-hover:text-white transition">101A, J1 Block, Valencia Town<br />Main Defence Road, Lahore, Pakistan</span>
              </li>
              <li className="flex gap-3 group">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-400 group-hover:text-white transition">0325 2467463 (WhatsApp)<br />03317924742</span>
              </li>
              <li className="flex gap-3 group">
                <Mail className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition" />
                <a href="mailto:fastmediaagencyofficial@gmail.com" className="text-gray-400 group-hover:text-white transition">fastmediaagencyofficial@gmail.com</a>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 flex-1 text-sm"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-r-lg transition">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Business Hours & Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Mon-Sat: 10:00 AM - 8:00 PM
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Sunday: Closed
            </span>
          </div>
          
          <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} Fast Printing & Packaging. All rights reserved. 
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;