import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Tag, TrendingUp, Instagram, Quote, Award, Box, Printer, Layers, Gift, ShoppingBag, Package, Eye } from 'lucide-react';

import mainImg from '../../assets/custombox.jpg';
import galleryImg1 from '../../assets/custombox.jpg';
import galleryImg2 from '../../assets/ecofood.jpg';
import galleryImg3 from '../../assets/ecoproduct.jpg';
import galleryImg4 from '../../assets/envelop2.jpg';
import galleryImg5 from '../../assets/envelop3.jpg';
import galleryImg6 from '../../assets/gift.jpg';
import schoolProspectusImg from '../../assets/notebook.jpg';
import techStartupImg from '../../assets/banner.jpg';
import restaurantBrandingImg from '../../assets/letter.jpg';

const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const EcommerceShippingBoxes = () => {
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
    { icon: Eye, value: '2.5M+', label: 'Social media impressions' },
    { icon: TrendingUp, value: '45%', label: 'Repeat purchase increase' },
    { icon: Award, value: '30%', label: 'Customer acquisition cost reduction' },
    { icon: Star, value: '95%', label: 'Excellent packaging rating' }
  ];

  const expertServices = [
    { icon: Box, title: 'Custom Box Design', desc: 'Mailer box design' },
    { icon: Printer, title: 'Digital Printing', desc: 'Full-color printing' },
    { icon: Layers, title: 'Offset Printing', desc: 'High-quality offset' },
    { icon: Award, title: 'Structural Design', desc: 'Box engineering' }
  ];

  const premiumProducts = [
    { icon: Package, title: 'Mailer Boxes', desc: 'Custom shipping boxes' },
    { icon: Layers, title: 'Tissue Paper', desc: 'Branded tissue' },
    { icon: Tag, title: 'Stickers', desc: 'Custom stickers' },
    { icon: Gift, title: 'Thank You Cards', desc: 'Customer appreciation' }
  ];

  const relatedProjects = [
    { title: 'School Prospectus Design', category: 'Marketing', image: schoolProspectusImg, path: '/portfolio/school-prospectus' },
    { title: 'Tech Startup Branding', category: 'Branding', image: techStartupImg, path: '/portfolio/tech-startup-brand-identity' },
    { title: 'Restaurant Brand Identity', category: 'Branding', image: restaurantBrandingImg, path: '/portfolio/restaurant-brand-identity' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0"><img src={mainImg} alt="E-commerce Shipping Boxes" className="w-full h-full object-cover" onError={(e) => { e.target.src = fallbackImage; }} /><div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div></div>
        <div className="container mx-auto px-4 relative z-10 py-20"><div className="max-w-3xl mx-auto text-center"><div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"><Package className="w-4 h-4 text-yellow-500" /><span className="text-yellow-500 text-sm font-semibold">Packaging / Case Study</span></div><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">E-commerce <span className="text-yellow-500">Shipping Boxes</span></h1><p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">Creating an unboxing experience that drives customer loyalty and social sharing</p><div className="flex flex-wrap justify-center gap-6 text-center"><div><p className="text-gray-400 text-sm">Client</p><p className="text-white font-semibold">StyleBox Fashion</p></div><div><p className="text-gray-400 text-sm">Date</p><p className="text-white font-semibold">September 2024</p></div><div><p className="text-gray-400 text-sm">Category</p><p className="text-white font-semibold">Fashion & Apparel</p></div></div></div></div>
      </section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"><div className="reveal"><span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">The Challenge</span><h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What We Faced</h2><p className="text-gray-600 leading-relaxed">StyleBox, an online fashion retailer, was struggling with generic brown shipping boxes that didn't reflect their premium brand. They were losing opportunities for brand reinforcement and customer engagement during the crucial unboxing moment.</p></div><div className="reveal"><span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">Our Solution</span><h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">How We Helped</h2><p className="text-gray-600 leading-relaxed">We designed custom mailer boxes with full-color printing inside and out. The exterior featured their minimalist logo and brand colors, while the interior included an inspiring message and care instructions. We also created custom tissue paper, thank you cards, and branded stickers to complete the unboxing experience.</p></div></div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Project <span className="text-red-600">Gallery</span></h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{galleryImages.map((img, idx) => (<div key={idx} className="cursor-pointer group" onClick={() => { setCurrentImage(idx); setIsModalOpen(true); }}><div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"><img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover transition duration-500 group-hover:scale-105" onError={(e) => { e.target.src = fallbackImage; }} /></div></div>))}</div></div></section>

      {isModalOpen && (<div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setIsModalOpen(false)}><div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}><button onClick={() => setIsModalOpen(false)} className="absolute -top-12 right-0 text-white text-3xl hover:text-yellow-500">&times;</button><button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30"><ChevronLeft className="w-6 h-6 text-white" /></button><img src={galleryImages[currentImage]} alt="Gallery" className="w-full h-auto rounded-2xl" onError={(e) => { e.target.src = fallbackImage; }} /><button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30"><ChevronRight className="w-6 h-6 text-white" /></button></div></div>)}

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Results & <span className="text-yellow-500">Impact</span></h2></div><div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">{results.map((result, idx) => (<div key={idx} className="text-center reveal"><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3"><result.icon className="w-8 h-8 text-yellow-500" /></div><div className="text-3xl md:text-4xl font-bold text-white mb-1">{result.value}</div><div className="text-sm text-gray-300">{result.label}</div></div>))}</div><div className="mt-8 text-center"><div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-md mx-auto"><p className="text-white text-sm">🏆 Featured in 3 fashion blogs as 'best unboxing experience'</p></div></div></div></section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Project <span className="text-red-600">Components</span></h2><p className="text-gray-600 max-w-2xl mx-auto">The specialized services and premium products that brought this vision to life.</p></div><div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"><div className="reveal"><div className="flex items-center gap-3 mb-6"><div className="w-1 h-8 bg-red-600 rounded"></div><h3 className="text-xl font-bold text-gray-800">01 | Expert Services</h3></div><div className="space-y-4">{expertServices.map((service, idx) => (<div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><service.icon className="w-6 h-6 text-red-600" /><div><h4 className="font-semibold text-gray-800">{service.title}</h4><p className="text-sm text-gray-500">{service.desc}</p></div></div>))}</div></div><div className="reveal"><div className="flex items-center gap-3 mb-6"><div className="w-1 h-8 bg-red-600 rounded"></div><h3 className="text-xl font-bold text-gray-800">02 | Premium Products</h3></div><div className="space-y-4">{premiumProducts.map((product, idx) => (<div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"><product.icon className="w-6 h-6 text-red-600" /><div><h4 className="font-semibold text-gray-800">{product.title}</h4><p className="text-sm text-gray-500">{product.desc}</p></div></div>))}</div></div></div></div></section>

      <section className="py-20 bg-gray-50"><div className="container mx-auto px-4"><div className="max-w-3xl mx-auto text-center"><Quote className="w-12 h-12 text-red-400 mx-auto mb-6" /><p className="text-xl md:text-2xl text-gray-700 italic mb-6 reveal">"Our packaging has become a powerful marketing tool. Customers share their unboxing experiences without us even asking. The investment in custom packaging has paid for itself many times over through increased customer loyalty and free social media exposure."</p><div className="reveal"><h4 className="text-xl font-bold text-gray-800">Sara Ahmed</h4><p className="text-red-600">Founder, StyleBox Fashion</p></div></div></div></section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-12 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Related <span className="text-red-600">Projects</span></h2></div><div className="grid md:grid-cols-3 gap-8">{relatedProjects.map((project, idx) => (<Link key={idx} to={project.path} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal"><div className="relative h-48 overflow-hidden"><img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" onError={(e) => { e.target.src = fallbackImage; }} /></div><div className="p-5"><p className="text-sm text-red-600 mb-1">{project.category}</p><h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition">{project.title}</h3></div></Link>))}</div></div></section>

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800"><div className="container mx-auto px-4 text-center"><div className="max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">Ready to Start Your <span className="text-yellow-500">Project?</span></h2><p className="text-xl text-gray-200 mb-8 reveal">Let's create something amazing together. Get in touch to discuss your printing and packaging needs.</p><div className="flex flex-wrap justify-center gap-4 reveal"><Link to="/contact"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">Get Free Quote <ArrowRight className="w-5 h-5" /></button></Link><Link to="/portfolio"><button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">View More Projects</button></Link></div></div></div></section>
    </div>
  );
};

export default EcommerceShippingBoxes;