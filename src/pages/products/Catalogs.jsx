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
  Lock, CornerDownRight, Hash
} from 'lucide-react';

import catalogsImg from '../../assets/magine-cover.jpg';
import brochuresImg from '../../assets/letter.jpg';
import flyersImg from '../../assets/flyer.jpg';
import presentationFoldersImg from '../../assets/book.jpg';

import sample1 from '../../assets/magine-cover.jpg';
import sample2 from '../../assets/catalog.jpg';
import sample3 from '../../assets/screenprinting.jpg';
import sample4 from '../../assets/promarket.jpg';

const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const Catalogs = () => {
  const [quantity, setQuantity] = useState(100);
  const [selectedBinding, setSelectedBinding] = useState('saddle');
  const [mainImage, setMainImage] = useState(catalogsImg);

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
    switch(quantity) {
      case 50: return 'PKR 12,000 - 20,000';
      case 100: return 'PKR 20,000 - 35,000';
      case 250: return 'PKR 45,000 - 75,000';
      case 500: return 'PKR 80,000 - 135,000';
      default: return 'PKR 12,000 - 20,000';
    }
  };

  const relatedProducts = [
    { icon: Book, title: 'Brochures', price: 'From PKR 8,000', desc: 'Showcase your business with professionally designed brochures', image: brochuresImg, path: '/products/brochures' },
    { icon: FileText, title: 'Flyers', price: 'From PKR 2,000', desc: 'Eye-catching flyers that grab attention and drive action', image: flyersImg, path: '/products/flyers' },
    { icon: Briefcase, title: 'Presentation Folders', price: 'From PKR 8,000', desc: 'Professional folders for documents and proposals', image: presentationFoldersImg, path: '/products/presentation-folders' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden bg-gray-50">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-4"><img src={mainImage} alt="Catalogs" className="w-full h-auto object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></div>
              <div className="grid grid-cols-4 gap-3">{galleryImages.map((img, idx) => (<button key={idx} onClick={() => setMainImage(img)} className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${mainImage === img ? 'border-red-600 shadow-lg' : 'border-transparent hover:border-red-300'}`}><img src={img} alt={`Sample ${idx + 1}`} className="w-full h-24 object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></button>))}</div>
            </div>
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm font-semibold mb-4"><Star className="w-4 h-4 fill-red-600" /> Professional</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Product <span className="text-red-600">Catalogs</span></h1>
              <p className="text-gray-600 mb-6 leading-relaxed">Professional product catalogs that showcase your offerings in style. Perfect for retail, wholesale, and B2B businesses. Available in various sizes and binding options with full-color printing throughout.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Multiple binding options', 'Full-color printing', 'Various page counts', 'Custom sizes available', 'Premium paper stocks', 'Fast 7-10 day turnaround'].map((feature, idx) => (<div key={idx} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /><span className="text-sm text-gray-600">{feature}</span></div>))}
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Select Quantity</h3>
                <div className="flex flex-wrap gap-3">{[50, 100, 250, 500].map((qty) => (<button key={qty} onClick={() => setQuantity(qty)} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${quantity === qty ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{qty}</button>))}</div>
                <div className="mt-4 p-4 bg-gray-50 rounded-xl"><div className="text-sm text-gray-500">Price Range</div><div className="text-2xl font-bold text-red-600">{getPriceRange()}</div><div className="text-xs text-gray-400">* Prices may vary based on customization options</div></div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Binding Options</h3>
                <div className="flex flex-wrap gap-3">{[{ id: 'saddle', label: 'Saddle Stitch' }, { id: 'perfect', label: 'Perfect Bound' }, { id: 'wire', label: 'Wire-O' }, { id: 'spiral', label: 'Spiral' }].map((option) => (<button key={option.id} onClick={() => setSelectedBinding(option.id)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${selectedBinding === option.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{option.label}</button>))}</div>
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
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Ruler className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Sizes</h3><ul className="space-y-1 text-gray-600 text-sm"><li>A4 / A5 / Letter</li><li>8.5" x 11"</li><li>Custom sizes</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Book className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Binding</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Saddle stitch / Perfect bound</li><li>Wire-O / Spiral / Case bound</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Layers className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Paper Stock</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Cover: 250-350gsm</li><li>Inside: 128-170gsm Art Paper</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Book className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Page Count</h3><ul className="space-y-1 text-gray-600 text-sm"><li>8-16 / 20-32 pages</li><li>36-48 / 52+ pages</li></ul></div>
      </div></div></section>

      <section className="py-12 bg-gray-50"><div className="container mx-auto px-4"><div className="text-center mb-10 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Pricing <span className="text-red-600">Options</span></h2></div><div className="grid md:grid-cols-4 gap-6">{[{ qty: 50, price: 'PKR 12,000 - 20,000' }, { qty: 100, price: 'PKR 20,000 - 35,000' }, { qty: 250, price: 'PKR 45,000 - 75,000' }, { qty: 500, price: 'PKR 80,000 - 135,000' }].map((option, idx) => (<div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal"><div className="text-3xl font-bold text-red-600 mb-2">{option.qty}</div><div className="text-sm text-gray-500 mb-2">Catalogs</div><div className="text-xl font-bold text-gray-800">{option.price}</div></div>))}</div><p className="text-center text-sm text-gray-500 mt-6">* Prices may vary based on customization options</p></div></section>

      <section className="py-12 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-10 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Related <span className="text-red-600">Products</span></h2></div><div className="grid md:grid-cols-3 gap-6">{relatedProducts.map((product, idx) => (<Link key={idx} to={product.path}><div className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"><div className="relative h-48 overflow-hidden"><img src={product.image} alt={product.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></div><div className="p-5"><div className="flex items-center gap-2 mb-2"><product.icon className="w-5 h-5 text-red-600" /><h3 className="text-lg font-bold group-hover:text-red-600 transition">{product.title}</h3></div><p className="text-gray-600 text-sm mb-3">{product.desc}</p><div className="text-red-600 font-semibold">{product.price}</div></div></div></Link>))}</div></div></section>

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-xl text-gray-200 mb-8">Request a custom quote for Catalogs and we'll help you create something amazing.</p><div className="flex flex-wrap justify-center gap-4"><Link to="/contact"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">Get Custom Quote <ArrowRight className="w-5 h-5" /></button></Link><Link to="/contact"><button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">Contact Us</button></Link></div></div></section>
    </div>
  );
};

export default Catalogs;