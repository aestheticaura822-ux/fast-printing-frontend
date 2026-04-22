import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Eye, Truck, Star, Shield,
  Layers, Gift, CreditCard, Package, Box,
  ChevronRight, Layout, Briefcase, Palette,
  Award, Heart, Leaf, Sparkles,
  Phone, Mail, MapPin, Ruler, Gem, Droplet, Scissors,
  Minus, Plus, ShoppingCart, FileText, Book, Tag, ShoppingBag,
  Lock, CornerDownRight, Hash, Maximize, Wind, Sun, Grid, Home
} from 'lucide-react';

import wallGraphicsImg from '../../assets/wall.jpg';
import windowGraphicsImg from '../../assets/window.jpg';
import bannersImg from '../../assets/rollup1.jpg';
import postersImg from '../../assets/banner.jpg';

import sample1 from '../../assets/wall.jpg';
import sample2 from '../../assets/window.jpg';
import sample3 from '../../assets/banner.jpg';
import sample4 from '../../assets/vehicle.jpg';

const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const WallGraphics = () => {
  const [size, setSize] = useState('small');
  const [mainImage, setMainImage] = useState(wallGraphicsImg);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }.reveal.active { opacity: 1; transform: translateY(0); }`;
    document.head.appendChild(style);
    const revealElements = () => { document.querySelectorAll('.reveal').forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add('active'); }); };
    window.addEventListener('scroll', revealElements);
    revealElements();
    return () => { window.removeEventListener('scroll', revealElements); document.head.removeChild(style); };
  }, []);

  const galleryImages = [sample1, sample2, sample3, sample4];
  const getPriceRange = () => {
    switch(size) {
      case 'small': return 'PKR 8,000 - 15,000';
      case 'medium': return 'PKR 15,000 - 30,000';
      case 'large': return 'PKR 30,000 - 60,000';
      default: return 'Contact for quote';
    }
  };

  const relatedProducts = [
    { icon: Layout, title: 'Window Graphics', price: 'From PKR 3,000', desc: 'Promotional graphics for storefronts', image: windowGraphicsImg, path: '/products/window-graphics' },
    { icon: Layout, title: 'Banners', price: 'From PKR 3,000', desc: 'Durable banners for events and advertising', image: bannersImg, path: '/products/banners' },
    { icon: Layout, title: 'Posters', price: 'From PKR 2,000', desc: 'Large format posters that make a big impact', image: postersImg, path: '/products/posters' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden bg-gray-50">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-4"><img src={mainImage} alt="Wall Graphics" className="w-full h-auto object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></div>
              <div className="grid grid-cols-4 gap-3">{galleryImages.map((img, idx) => (<button key={idx} onClick={() => setMainImage(img)} className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${mainImage === img ? 'border-red-600 shadow-lg' : 'border-transparent hover:border-red-300'}`}><img src={img} alt={`Sample ${idx + 1}`} className="w-full h-24 object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></button>))}</div>
            </div>
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm font-semibold mb-4"><Star className="w-4 h-4 fill-red-600" /> Premium</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Wall <span className="text-red-600">Graphics</span></h1>
              <p className="text-gray-600 mb-6 leading-relaxed">Transform your space with stunning wall graphics and murals. Perfect for offices, retail stores, trade show booths, and events. High-quality printing on removable or permanent adhesive vinyl.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Custom sizes up to full wall', 'Removable without damage', 'Easy installation', 'High-resolution printing', 'Matte or gloss finish', 'Fast 5-7 day turnaround'].map((feature, idx) => (<div key={idx} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /><span className="text-sm text-gray-600">{feature}</span></div>))}
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-3">{[{ id: 'small', label: 'Small (up to 4ft x 6ft)' }, { id: 'medium', label: 'Medium (6ft x 8ft - 8ft x 10ft)' }, { id: 'large', label: 'Large (8ft x 12ft+)' }].map((option) => (<button key={option.id} onClick={() => setSize(option.id)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${size === option.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{option.label}</button>))}</div>
                <div className="mt-4 p-4 bg-gray-50 rounded-xl"><div className="text-sm text-gray-500">Price Range</div><div className="text-2xl font-bold text-red-600">{getPriceRange()}</div><div className="text-xs text-gray-400">* Prices may vary based on customization options</div></div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">Get Custom Quote <ArrowRight className="w-5 h-5" /></button></Link>
                <Link to="/contact"><button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">Request Samples <Heart className="w-5 h-5" /></button></Link>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500"><div className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500" /> Free Design Support</div><div className="flex items-center gap-1"><Printer className="w-4 h-4 text-yellow-500" /> Custom Printing Options</div><div className="flex items-center gap-1"><Ruler className="w-4 h-4 text-yellow-500" /> Multiple Sizes Available</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-10 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Product <span className="text-red-600">Specifications</span></h2></div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Layers className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Materials</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Wall vinyl (removable/permanent)</li><li>Fabric wall covering / Canvas</li><li>Textured vinyl</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Gem className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Finish</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Matte / Gloss / Satin</li><li>Textured finish</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Ruler className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Sizes</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Small / Medium / Large</li><li>Full wall coverage</li><li>Custom sizes available</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Home className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Applications</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Office branding / Retail</li><li>Trade show graphics</li><li>Restaurant decor / Events</li></ul></div>
      </div></div></section>

      <section className="py-12 bg-gray-50"><div className="container mx-auto px-4"><div className="text-center mb-10 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Pricing <span className="text-red-600">Options</span></h2></div><div className="grid md:grid-cols-4 gap-6">{[{ qty: 'Small', price: 'PKR 8,000 - 15,000' }, { qty: 'Medium', price: 'PKR 15,000 - 30,000' }, { qty: 'Large', price: 'PKR 30,000 - 60,000' }, { qty: 'Custom', price: 'Contact for quote' }].map((option, idx) => (<div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal"><div className="text-3xl font-bold text-red-600 mb-2">{option.qty}</div><div className="text-sm text-gray-500 mb-2">Size</div><div className="text-xl font-bold text-gray-800">{option.price}</div></div>))}</div><p className="text-center text-sm text-gray-500 mt-6">* Prices may vary based on customization options</p></div></section>

      <section className="py-12 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-10 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Related <span className="text-red-600">Products</span></h2></div><div className="grid md:grid-cols-3 gap-6">{relatedProducts.map((product, idx) => (<Link key={idx} to={product.path}><div className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"><div className="relative h-48 overflow-hidden"><img src={product.image} alt={product.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></div><div className="p-5"><div className="flex items-center gap-2 mb-2"><product.icon className="w-5 h-5 text-red-600" /><h3 className="text-lg font-bold group-hover:text-red-600 transition">{product.title}</h3></div><p className="text-gray-600 text-sm mb-3">{product.desc}</p><div className="text-red-600 font-semibold">{product.price}</div></div></div></Link>))}</div></div></section>

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-xl text-gray-200 mb-8">Request a custom quote for Wall Graphics and we'll help you create something amazing.</p><div className="flex flex-wrap justify-center gap-4"><Link to="/contact"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">Get Custom Quote <ArrowRight className="w-5 h-5" /></button></Link><Link to="/contact"><button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">Contact Us</button></Link></div></div></section>
    </div>
  );
};

export default WallGraphics;