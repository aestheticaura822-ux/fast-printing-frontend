import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Printer, ChevronDown, ChevronRight, Package, Box, Tag, ShoppingBag, Leaf, Layout, CreditCard, FileText, Mail, Book, Gift, Calendar, Award, Building, GraduationCap, Stethoscope, Utensils, ShoppingCart, Laptop, Shirt } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIsIndustriesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Industries', path: '/industries', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // Services Dropdown Items
  const servicesDropdown = [
    { name: 'Digital Printing', path: '/services/digital-printing', icon: '🖨️', description: 'Fast, flexible digital printing solutions', color: 'from-blue-500 to-cyan-500' },
    { name: 'Offset Printing', path: '/services/offset-printing', icon: '📄', description: 'High-volume commercial printing', color: 'from-purple-500 to-pink-500' },
    { name: 'Screen Printing', path: '/services/screen-printing', icon: '👕', description: 'Custom screen printing for apparel & more', color: 'from-orange-500 to-red-500' },
    { name: 'Large Format Printing', path: '/services/large-format', icon: '📐', description: 'Banners, posters & billboards', color: 'from-green-500 to-emerald-500' },
    { name: 'Custom Boxes', path: '/services/custom-boxes', icon: '📦', description: 'Premium custom packaging boxes', color: 'from-indigo-500 to-blue-500' },
    { name: 'Labels & Stickers', path: '/services/labels-stickers', icon: '🏷️', description: 'Custom labels in any shape & size', color: 'from-pink-500 to-rose-500' },
    { name: 'Bags & Pouching', path: '/services/bags-pouching', icon: '🛍️', description: 'Custom printed bags & pouches', color: 'from-teal-500 to-cyan-500' },
    { name: 'Brand Identity', path: '/services/brand-identity', icon: '✨', description: 'Complete branding solutions', color: 'from-yellow-500 to-orange-500' },
  ];

  // Products Dropdown Items
  const productsDropdown = [
    { name: 'Business Cards', path: '/products/business-cards', icon: <CreditCard className="w-5 h-5" />, description: 'Premium business cards', color: 'from-blue-500 to-cyan-500' },
    { name: 'Letterheads', path: '/products/letterheads', icon: <FileText className="w-5 h-5" />, description: 'Professional letterheads', color: 'from-purple-500 to-pink-500' },
    { name: 'Envelopes', path: '/products/envelopes', icon: <Mail className="w-5 h-5" />, description: 'Custom printed envelopes', color: 'from-orange-500 to-red-500' },
    { name: 'Brochures', path: '/products/brochures', icon: <Layout className="w-5 h-5" />, description: 'Eye-catching brochures', color: 'from-green-500 to-emerald-500' },
    { name: 'Flyers', path: '/products/flyers', icon: <FileText className="w-5 h-5" />, description: 'Attention-grabbing flyers', color: 'from-teal-500 to-cyan-500' },
    { name: 'Posters', path: '/products/posters', icon: <Layout className="w-5 h-5" />, description: 'High-impact posters', color: 'from-pink-500 to-rose-500' },
    { name: 'Banners', path: '/products/banners', icon: <Layout className="w-5 h-5" />, description: 'Durable vinyl banners', color: 'from-indigo-500 to-blue-500' },
    { name: 'Custom Boxes', path: '/products/custom-boxes', icon: <Box className="w-5 h-5" />, description: 'Tailored packaging boxes', color: 'from-yellow-500 to-orange-500' },
    { name: 'Labels & Stickers', path: '/products/labels-stickers', icon: <Tag className="w-5 h-5" />, description: 'Custom labels for products', color: 'from-purple-500 to-pink-500' },
    { name: 'Shopping Bags', path: '/products/shopping-bags', icon: <ShoppingBag className="w-5 h-5" />, description: 'Branded shopping bags', color: 'from-teal-500 to-cyan-500' },
    { name: 'Wedding Cards', path: '/products/wedding-cards', icon: <Gift className="w-5 h-5" />, description: 'Elegant wedding invitations', color: 'from-pink-500 to-rose-500' },
    { name: 'Calendars', path: '/products/calendars', icon: <Calendar className="w-5 h-5" />, description: 'Custom calendars', color: 'from-green-500 to-emerald-500' },
  ];

  // Industries Dropdown Items
  const industriesDropdown = [
    { name: 'Schools & Education', path: '/industries/education', icon: <GraduationCap className="w-5 h-5" />, description: 'Printing for educational institutions', color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare & Medical', path: '/industries/healthcare', icon: <Stethoscope className="w-5 h-5" />, description: 'Medical-grade printing solutions', color: 'from-green-500 to-emerald-500' },
    { name: 'Restaurants & Food', path: '/industries/restaurants', icon: <Utensils className="w-5 h-5" />, description: 'Food-safe menus and packaging', color: 'from-orange-500 to-red-500' },
    { name: 'Retail & E-commerce', path: '/industries/retail', icon: <ShoppingCart className="w-5 h-5" />, description: 'Packaging that sells and protects', color: 'from-purple-500 to-pink-500' },
    { name: 'Corporate & Business', path: '/industries/corporate', icon: <Building className="w-5 h-5" />, description: 'Professional corporate printing', color: 'from-gray-600 to-gray-800' },
    { name: 'Events & Hospitality', path: '/industries/events', icon: <Calendar className="w-5 h-5" />, description: 'Making every event memorable', color: 'from-pink-500 to-rose-500' },
    { name: 'Technology & Startups', path: '/industries/technology', icon: <Laptop className="w-5 h-5" />, description: 'Modern printing for tech companies', color: 'from-indigo-500 to-blue-500' },
    { name: 'Fashion & Apparel', path: '/industries/fashion', icon: <Shirt className="w-5 h-5" />, description: 'Packaging as stylish as your products', color: 'from-rose-500 to-red-500' },
  ];

  const isActive = (path) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith('/services');
  const isProductsActive = () => location.pathname.startsWith('/products');
  const isIndustriesActive = () => location.pathname.startsWith('/industries');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo with Image Only - Full Width */}
<Link to="/" className="flex items-center group cursor-pointer">
  <div className="w-40 h-12 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
    <img src={logo} alt="Fast Printing Logo" className="w-full h-full object-cover" />
  </div>
</Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => {
                        if (link.name === 'Services') {
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                          setIsProductsDropdownOpen(false);
                          setIsIndustriesDropdownOpen(false);
                        } else if (link.name === 'Products') {
                          setIsProductsDropdownOpen(!isProductsDropdownOpen);
                          setIsServicesDropdownOpen(false);
                          setIsIndustriesDropdownOpen(false);
                        } else if (link.name === 'Industries') {
                          setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
                          setIsServicesDropdownOpen(false);
                          setIsProductsDropdownOpen(false);
                        }
                      }}
                      className={`flex items-center gap-1 text-gray-700 hover:text-red-700 font-medium transition-all duration-300 relative group ${
                        (link.name === 'Services' && isServicesActive()) || 
                        (link.name === 'Products' && isProductsActive()) || 
                        (link.name === 'Industries' && isIndustriesActive()) ? 'text-red-700' : ''
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        (link.name === 'Services' && isServicesDropdownOpen) || 
                        (link.name === 'Products' && isProductsDropdownOpen) || 
                        (link.name === 'Industries' && isIndustriesDropdownOpen) ? 'rotate-180' : ''
                      }`} />
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-red-700 transition-all duration-300 ${
                        (link.name === 'Services' && isServicesActive()) || 
                        (link.name === 'Products' && isProductsActive()) || 
                        (link.name === 'Industries' && isIndustriesActive()) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                    
                    {/* Services Dropdown Menu */}
                    {link.name === 'Services' && isServicesDropdownOpen && (
                      <div ref={servicesDropdownRef} className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {servicesDropdown.map((service, idx) => (
                            <Link key={idx} to={service.path} onClick={() => setIsServicesDropdownOpen(false)} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-yellow-50 transition-all duration-300">
                              <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>{service.icon}</div>
                              <div className="flex-1"><div className="font-semibold text-gray-800 group-hover:text-red-700">{service.name}</div><div className="text-xs text-gray-500">{service.description}</div></div>
                              <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 p-3 bg-gradient-to-r from-red-50 to-yellow-50">
                          <Link to="/services" onClick={() => setIsServicesDropdownOpen(false)} className="flex items-center justify-between text-red-700 font-semibold group">
                            <span>View All Services</span><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Products Dropdown Menu */}
                    {link.name === 'Products' && isProductsDropdownOpen && (
                      <div ref={productsDropdownRef} className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {productsDropdown.map((product, idx) => (
                            <Link key={idx} to={product.path} onClick={() => setIsProductsDropdownOpen(false)} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-yellow-50 transition-all duration-300">
                              <div className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 text-white`}>{product.icon}</div>
                              <div className="flex-1"><div className="font-semibold text-gray-800 group-hover:text-red-700">{product.name}</div><div className="text-xs text-gray-500">{product.description}</div></div>
                              <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 p-3 bg-gradient-to-r from-red-50 to-yellow-50">
                          <Link to="/products" onClick={() => setIsProductsDropdownOpen(false)} className="flex items-center justify-between text-red-700 font-semibold group">
                            <span>View All Products</span><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Industries Dropdown Menu */}
                    {link.name === 'Industries' && isIndustriesDropdownOpen && (
                      <div ref={industriesDropdownRef} className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {industriesDropdown.map((industry, idx) => (
                            <Link key={idx} to={industry.path} onClick={() => setIsIndustriesDropdownOpen(false)} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-yellow-50 transition-all duration-300">
                              <div className={`w-10 h-10 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 text-white`}>{industry.icon}</div>
                              <div className="flex-1"><div className="font-semibold text-gray-800 group-hover:text-red-700">{industry.name}</div><div className="text-xs text-gray-500">{industry.description}</div></div>
                              <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 p-3 bg-gradient-to-r from-red-50 to-yellow-50">
                          <Link to="/industries" onClick={() => setIsIndustriesDropdownOpen(false)} className="flex items-center justify-between text-red-700 font-semibold group">
                            <span>View All Industries</span><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.path} className={`text-gray-700 hover:text-red-700 font-medium transition-all duration-300 relative group ${isActive(link.path) ? 'text-red-700' : ''}`}>
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-red-700 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with Dropdowns */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-xl shadow-lg py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => {
                        if (link.name === 'Services') {
                          setIsMobileServicesOpen(!isMobileServicesOpen);
                          setIsMobileProductsOpen(false);
                          setIsMobileIndustriesOpen(false);
                        } else if (link.name === 'Products') {
                          setIsMobileProductsOpen(!isMobileProductsOpen);
                          setIsMobileServicesOpen(false);
                          setIsMobileIndustriesOpen(false);
                        } else if (link.name === 'Industries') {
                          setIsMobileIndustriesOpen(!isMobileIndustriesOpen);
                          setIsMobileServicesOpen(false);
                          setIsMobileProductsOpen(false);
                        }
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-red-50 transition"
                    >
                      <span className={(link.name === 'Services' && isServicesActive()) || (link.name === 'Products' && isProductsActive()) || (link.name === 'Industries' && isIndustriesActive()) ? 'text-red-700 font-semibold' : ''}>
                        {link.name}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${(link.name === 'Services' && isMobileServicesOpen) || (link.name === 'Products' && isMobileProductsOpen) || (link.name === 'Industries' && isMobileIndustriesOpen) ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Services Submenu */}
                    {link.name === 'Services' && isMobileServicesOpen && (
                      <div className="bg-gray-50 mx-3 rounded-xl overflow-hidden mb-2">
                        {servicesDropdown.map((service, idx) => (
                          <Link key={idx} to={service.path} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-red-50 transition" onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}>
                            <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-lg`}>{service.icon}</div>
                            <div><div className="font-medium text-gray-800 text-sm">{service.name}</div><div className="text-xs text-gray-500">{service.description}</div></div>
                          </Link>
                        ))}
                        <Link to="/services" className="block px-4 py-3 text-center bg-gradient-to-r from-red-50 to-yellow-50 text-red-700 font-semibold" onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}>View All Services →</Link>
                      </div>
                    )}

                    {/* Mobile Products Submenu */}
                    {link.name === 'Products' && isMobileProductsOpen && (
                      <div className="bg-gray-50 mx-3 rounded-xl overflow-hidden mb-2 max-h-[400px] overflow-y-auto">
                        {productsDropdown.map((product, idx) => (
                          <Link key={idx} to={product.path} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-red-50 transition" onClick={() => { setIsOpen(false); setIsMobileProductsOpen(false); }}>
                            <div className={`w-8 h-8 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center text-white`}>{product.icon}</div>
                            <div><div className="font-medium text-gray-800 text-sm">{product.name}</div><div className="text-xs text-gray-500">{product.description}</div></div>
                          </Link>
                        ))}
                        <Link to="/products" className="block px-4 py-3 text-center bg-gradient-to-r from-red-50 to-yellow-50 text-red-700 font-semibold" onClick={() => { setIsOpen(false); setIsMobileProductsOpen(false); }}>View All Products →</Link>
                      </div>
                    )}

                    {/* Mobile Industries Submenu */}
                    {link.name === 'Industries' && isMobileIndustriesOpen && (
                      <div className="bg-gray-50 mx-3 rounded-xl overflow-hidden mb-2 max-h-[400px] overflow-y-auto">
                        {industriesDropdown.map((industry, idx) => (
                          <Link key={idx} to={industry.path} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-red-50 transition" onClick={() => { setIsOpen(false); setIsMobileIndustriesOpen(false); }}>
                            <div className={`w-8 h-8 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center text-white`}>{industry.icon}</div>
                            <div><div className="font-medium text-gray-800 text-sm">{industry.name}</div><div className="text-xs text-gray-500">{industry.description}</div></div>
                          </Link>
                        ))}
                        <Link to="/industries" className="block px-4 py-3 text-center bg-gradient-to-r from-red-50 to-yellow-50 text-red-700 font-semibold" onClick={() => { setIsOpen(false); setIsMobileIndustriesOpen(false); }}>View All Industries →</Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.path} className={`block px-4 py-3 transition ${isActive(link.path) ? 'bg-red-50 text-red-700 font-semibold' : 'text-gray-700 hover:bg-red-50'}`} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-lg font-semibold">Get Free Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;