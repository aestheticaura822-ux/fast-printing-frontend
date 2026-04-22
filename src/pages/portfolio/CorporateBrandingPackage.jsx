import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Tag, TrendingUp, Instagram, Book, CreditCard, Quote, Award, Box, Printer, Layers, Gift, ShoppingBag, Package, DollarSign, Users, Percent } from 'lucide-react';

import mainImg from '../../assets/business-card1.jpg';
import galleryImg1 from '../../assets/business-card1.jpg';
import galleryImg2 from '../../assets/rollup.jpg';
import galleryImg3 from '../../assets/rollup1.jpg';
import galleryImg4 from '../../assets/shop2.jpg';
import galleryImg5 from '../../assets/shop3.jpg';
import galleryImg6 from '../../assets/specialhigh.jpg';
import techStartupImg from '../../assets/banner.jpg';
import restaurantBrandingImg from '../../assets/letter.jpg';
import schoolProspectusImg from '../../assets/notebook.jpg';

const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const CorporateBrandingPackage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const style = document.createElement('style');
    style.textContent = `.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }.reveal.active { opacity: 1; transform: translateY(0); }`;
    document.head.appendChild(style);
    const revealElements = () => { document.querySelectorAll('.reveal').forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add('active'); }); };
    window.addEventListener('scroll', revealElements);
    revealElements();
    return () => { window.removeEventListener('scroll', revealElements); document.head.removeChild(style); };
  }, []);

  const galleryImages = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6];
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const results = [
    { icon: Users, value: '95%', label: 'Client feedback improvement' },
    { icon: DollarSign, value: '$2M+', label: 'New contracts won' },
    { icon: TrendingUp, value: '150%', label: 'Brand recognition increase' },
    { icon: Award, value: 'Featured', label: 'Business spotlight' }
  ];

  const expertServices = [
    { icon: Box, title: 'Brand Identity Design', desc: 'Corporate branding' },
    { icon: Printer, title: 'Product Customization', desc: 'Custom products' },
    { icon: Layers, title: 'Screen Printing', desc: 'Logo application' },
    { icon: Award, title: 'Embossing & Foil', desc: 'Premium finishes' }
  ];

  const premiumProducts = [
    { icon: Book, title: 'Notebooks', desc: 'Branded notebooks' },
    { icon: Package, title: 'Water Bottles', desc: 'Promotional bottles' },
    { icon: ShoppingBag, title: 'Tote Bags', desc: 'Eco-friendly bags' },
    { icon: CreditCard, title: 'Business Cards', desc: 'Premium cards' }
  ];

  const relatedProjects = [
    { title: 'Tech Startup Branding', category: 'Branding', image: techStartupImg, path: '/portfolio/tech-startup-brand-identity' },
    { title: 'Restaurant Brand Identity', category: 'Branding', image: restaurantBrandingImg, path: '/portfolio/restaurant-brand-identity' },
    { title: 'School Prospectus', category: 'Marketing', image: schoolProspectusImg, path: '/portfolio/school-prospectus' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0"><img src={mainImg} alt="Corporate Branding Package" className="w-full h-full object-cover" onError={(e) => { e.target.src = fallbackImage; }} /><div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div></div>
        <div className="container mx-auto px-4 relative z-10 py-20"><div className="max-w-3xl mx-auto text-center"><div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"><Star className="w-4 h-4 text-yellow-500" /><span className="text-yellow-500 text-sm font-semibold">Branding / Case Study</span></div><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Corporate <span className="text-yellow-500">Branding Package</span></h1><p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">Complete corporate branding suite for professional consulting firm</p><div className="flex flex-wrap justify-center gap-6 text-center"><div><p className="text-gray-400 text-sm">Client</p><p className="text-white font-semibold">Meridian Consulting</p></div><div><p className="text-gray-400 text-sm">Date</p><p className="text-white font-semibold">May 2024</p></div><div><p className="text-gray-400 text-sm">Category</p><p className="text-white font-semibold">Professional Services</p></div></div></div></div>
      </section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"><div className="reveal"><span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">The Challenge</span><h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What We Faced</h2><p className="text-gray-600 leading-relaxed">Meridian Consulting, a mid-size management consulting firm, needed a cohesive brand identity across all touchpoints to compete with larger international firms. Their existing materials were inconsistent and lacked a professional edge needed for high-value client pitches.</p></div><div className="reveal"><span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">Our Solution</span><h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">How We Helped</h2><p className="text-gray-600 leading-relaxed">We created a comprehensive corporate branding package including notebooks, water bottles, tote bags, business cards, letterheads, presentation folders, and promotional items. The design featured a sophisticated navy and cream color palette with the distinctive 'M' monogram applied consistently across all materials using various printing techniques including embossing, foil stamping, and screen printing.</p></div></div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Project <span className="text-red-600">Gallery</span></h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{galleryImages.map((img, idx) => (<div key={idx} className="cursor-pointer group" onClick={() => { setCurrentImage(idx); setIsModalOpen(true); }}><div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"><img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover transition duration-500 group-hover:scale-105" onError={(e) => { e.target.src = fallbackImage; }} /></div></div>))}</div></div></section>

      {isModalOpen && (<div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setIsModalOpen(false)}><div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}><button onClick={() => setIsModalOpen(false)} className="absolute -top-12 right-0 text-white text-3xl hover:text-yellow-500">&times;</button><button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30"><ChevronLeft className="w-6 h-6 text-white" /></button><img src={galleryImages[currentImage]} alt="Gallery" className="w-full h-auto rounded-2xl" onError={(e) => { e.target.src = fallbackImage; }} /><button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30"><ChevronRight className="w-6 h-6 text-white" /></button></div></div>)}

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Results & <span className="text-yellow-500">Impact</span></h2></div><div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">{results.map((result, idx) => (<div key={idx} className="text-center reveal"><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3"><result.icon className="w-8 h-8 text-yellow-500" /></div><div className="text-3xl md:text-4xl font-bold text-white mb-1">{result.value}</div><div className="text-sm text-gray-300">{result.label}</div></div>))}</div><div className="mt-8 text-center"><div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-md mx-auto"><p className="text-white text-sm">🏆 Materials featured in Business Recorder corporate spotlight</p></div></div></div></section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Project <span className="text-red-600">Components</span></h2><p className="text-gray-600 max-w-2xl mx-auto">The specialized services and premium products that brought this vision to life.</p></div><div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"><div className="reveal"><div className="flex items-center gap-3 mb-6"><div className="w-1 h-8 bg-red-600 rounded"></div><h3 className="text-xl font-bold text-gray-800">01 | Expert Services</h3></div><div className="space-y-4">{expertServices.map((service, idx) => (<div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><service.icon className="w-6 h-6 text-red-600" /><div><h4 className="font-semibold text-gray-800">{service.title}</h4><p className="text-sm text-gray-500">{service.desc}</p></div></div>))}</div></div><div className="reveal"><div className="flex items-center gap-3 mb-6"><div className="w-1 h-8 bg-red-600 rounded"></div><h3 className="text-xl font-bold text-gray-800">02 | Premium Products</h3></div><div className="space-y-4">{premiumProducts.map((product, idx) => (<div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><product.icon className="w-6 h-6 text-red-600" /><div><h4 className="font-semibold text-gray-800">{product.title}</h4><p className="text-sm text-gray-500">{product.desc}</p></div></div>))}</div></div></div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><div className="max-w-3xl mx-auto text-center"><Quote className="w-12 h-12 text-red-400 mx-auto mb-6" /><p className="text-xl md:text-2xl text-gray-700 italic mb-6 reveal">"The complete branding package Fast Printing delivered elevated our entire company image. Clients comment on the quality and consistency of our materials. It's given us confidence that we can compete with any firm, regardless of size."</p><div className="reveal"><h4 className="text-xl font-bold text-gray-800">Kamran Qureshi</h4><p className="text-red-600">Managing Partner, Meridian Consulting</p></div></div></div></section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Related <span className="text-red-600">Projects</span></h2></div><div className="grid md:grid-cols-3 gap-8">{relatedProjects.map((project, idx) => (<Link key={idx} to={project.path} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal"><div className="relative h-48 overflow-hidden"><img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" onError={(e) => { e.target.src = fallbackImage; }} /></div><div className="p-5"><p className="text-sm text-red-600 mb-1">{project.category}</p><h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition">{project.title}</h3></div></Link>))}</div></div></section>

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800"><div className="container mx-auto px-4 text-center"><div className="max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">Ready to Start Your <span className="text-yellow-500">Project?</span></h2><p className="text-xl text-gray-200 mb-8 reveal">Let's create something amazing together. Get in touch to discuss your printing and packaging needs.</p><div className="flex flex-wrap justify-center gap-4 reveal"><Link to="/contact"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></button></Link><Link to="/portfolio"><button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">View More Projects</button></Link></div></div></div></section>
    </div>
  );
};

export default CorporateBrandingPackage;