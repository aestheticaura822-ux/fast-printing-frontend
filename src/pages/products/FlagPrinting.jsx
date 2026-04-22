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
  Lock, CornerDownRight, Hash, Maximize, Wind, Sun, Grid, Home, Flag
} from 'lucide-react';

import flagPrintingImg from '../../assets/flag.jpg';
import bannersImg from '../../assets/rollup1.jpg';
import rollUpBannersImg from '../../assets/rollup.jpg';
import postersImg from '../../assets/banner.jpg';

import sample1 from '../../assets/flag.jpg';
import sample2 from '../../assets/flag2.jpg';
import sample3 from '../../assets/flag3.jpg';
import sample4 from '../../assets/banner.jpg';


const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const FlagPrinting = () => {
  const [selectedType, setSelectedType] = useState('outdoor-single-24');
  const [mainImage, setMainImage] = useState(flagPrintingImg);

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
  
  const getPrice = () => {
    const prices = {
      'outdoor-single-24': 'PKR 1,400 / Flag',
      'outdoor-single-28': 'PKR 1,900 / Flag',
      'outdoor-single-36': 'PKR 2,400 / Flag',
      'outdoor-single-48': 'PKR 3,400 / Flag',
      'outdoor-single-57': 'PKR 3,900 / Flag',
      'outdoor-double-24': 'PKR 2,000 / Flag',
      'outdoor-double-28': 'PKR 2,900 / Flag',
      'outdoor-double-36': 'PKR 3,900 / Flag',
      'outdoor-double-48': 'PKR 5,400 / Flag',
      'outdoor-double-57': 'PKR 6,400 / Flag',
      'indoor-single-stand': 'PKR 1,400',
      'indoor-single-l': 'PKR 1,900',
      'indoor-double-v': 'PKR 2,400',
      'indoor-double-cross': 'PKR 2,900',
      'indoor-triple': 'PKR 3,400'
    };
    return prices[selectedType] || 'PKR 1,400';
  };

  const getSelectedLabel = () => {
    const labels = {
      'outdoor-single-24': 'Outdoor Silk Single Side 24"x36"',
      'outdoor-single-28': 'Outdoor Silk Single Side 28"x42"',
      'outdoor-single-36': 'Outdoor Silk Single Side 36"x54"',
      'outdoor-single-48': 'Outdoor Silk Single Side 48"x72"',
      'outdoor-single-57': 'Outdoor Silk Single Side 57"x85"',
      'outdoor-double-24': 'Outdoor Silk Double Side 24"x36"',
      'outdoor-double-28': 'Outdoor Silk Double Side 28"x42"',
      'outdoor-double-36': 'Outdoor Silk Double Side 36"x54"',
      'outdoor-double-48': 'Outdoor Silk Double Side 48"x72"',
      'outdoor-double-57': 'Outdoor Silk Double Side 57"x85"',
      'indoor-single-stand': 'Indoor Single Flag w/ Standard Stand',
      'indoor-single-l': 'Indoor Single Flag w/ L Stand',
      'indoor-double-v': 'Indoor Double Flag w/ V Stand',
      'indoor-double-cross': 'Indoor Double Flag w/ Cross or T Stand',
      'indoor-triple': 'Indoor Triple Flag w/ Stand'
    };
    return labels[selectedType] || 'Outdoor Silk Single Side 24"x36"';
  };

  const relatedProducts = [
    { icon: Layout, title: 'Banners', price: 'From PKR 3,000', desc: 'Durable banners for events and advertising', image: bannersImg, path: '/products/banners' },
    { icon: Layout, title: 'Roll-Up Banners', price: 'From PKR 8,000', desc: 'Portable roll-up banners perfect for events', image: rollUpBannersImg, path: '/products/roll-up-banners' },
    { icon: Layout, title: 'Posters', price: 'From PKR 2,000', desc: 'Large format posters that make a big impact', image: postersImg, path: '/products/posters' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden bg-gray-50">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-4"><img src={mainImage} alt="Flag Printing" className="w-full h-auto object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></div>
              <div className="grid grid-cols-4 gap-3">{galleryImages.map((img, idx) => (<button key={idx} onClick={() => setMainImage(img)} className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${mainImage === img ? 'border-red-600 shadow-lg' : 'border-transparent hover:border-red-300'}`}><img src={img} alt={`Sample ${idx + 1}`} className="w-full h-24 object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></button>))}</div>
            </div>
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm font-semibold mb-4"><Star className="w-4 h-4 fill-red-600" /> Best Seller</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Flag <span className="text-red-600">Printing</span></h1>
              <p className="text-gray-600 mb-6 leading-relaxed">Display your brand proudly with custom printed flags. Whether you need durable outdoor silk flags or elegant indoor table flags with premium stands, we offer a wide range of sizes and configurations to meet your needs.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Durable outdoor silk material', 'Single or double-sided printing', 'Vibrant high-quality colors', 'Multiple stand options', 'Custom sizes available', 'Fast 3-5 day turnaround'].map((feature, idx) => (<div key={idx} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /><span className="text-sm text-gray-600">{feature}</span></div>))}
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Select Flag Type</h3>
                <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType} className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 mb-4">
                  <optgroup label="Outdoor Silk Flags - Single Side">
                    <option value="outdoor-single-24">24" x 36" - PKR 1,400/Flag</option>
                    <option value="outdoor-single-28">28" x 42" - PKR 1,900/Flag</option>
                    <option value="outdoor-single-36">36" x 54" - PKR 2,400/Flag</option>
                    <option value="outdoor-single-48">48" x 72" - PKR 3,400/Flag</option>
                    <option value="outdoor-single-57">57" x 85" - PKR 3,900/Flag</option>
                  </optgroup>
                  <optgroup label="Outdoor Silk Flags - Double Side">
                    <option value="outdoor-double-24">24" x 36" - PKR 2,000/Flag</option>
                    <option value="outdoor-double-28">28" x 42" - PKR 2,900/Flag</option>
                    <option value="outdoor-double-36">36" x 54" - PKR 3,900/Flag</option>
                    <option value="outdoor-double-48">48" x 72" - PKR 5,400/Flag</option>
                    <option value="outdoor-double-57">57" x 85" - PKR 6,400/Flag</option>
                  </optgroup>
                  <optgroup label="Indoor Table Flags with Stand">
                    <option value="indoor-single-stand">Single Flag w/ Standard Stand - PKR 1,400</option>
                    <option value="indoor-single-l">Single Flag w/ L Stand - PKR 1,900</option>
                    <option value="indoor-double-v">Double Flag w/ V Stand - PKR 2,400</option>
                    <option value="indoor-double-cross">Double Flag w/ Cross/T Stand - PKR 2,900</option>
                    <option value="indoor-triple">Triple Flag w/ Stand - PKR 3,400</option>
                  </optgroup>
                </select>
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500">Selected Item</div>
                  <div className="text-base font-semibold text-gray-800">{getSelectedLabel()}</div>
                  <div className="text-2xl font-bold text-red-600 mt-2">{getPrice()}</div>
                </div>
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
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Ruler className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Outdoor Flag Sizes</h3><ul className="space-y-1 text-gray-600 text-sm"><li>24"x36" / 28"x42"</li><li>36"x54" / 48"x72"</li><li>57"x85"</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Flag className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Outdoor Banner Sizes</h3><ul className="space-y-1 text-gray-600 text-sm"><li>2.5 x 6 / 2.5 x 9 Feet</li><li>5 x 12 / 5 x 15 Feet</li><li>Silk Sash: 4.5" x 60"</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Printer className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Printing Options</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Single Side Printing</li><li>Double Side Printing</li></ul></div>
        <div className="bg-gray-50 rounded-2xl p-6 reveal"><Layers className="w-6 h-6 text-red-600 mb-3" /><h3 className="text-xl font-bold mb-3">Stand Options</h3><ul className="space-y-1 text-gray-600 text-sm"><li>Standard / L / V / Cross / T Stand</li><li>Large Flag: With/Without Stand</li></ul></div>
      </div></div></section>

      <section className="py-12 bg-gray-50"><div className="container mx-auto px-4"><div className="text-center mb-10 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Pricing <span className="text-red-600">Options</span></h2></div><div className="grid md:grid-cols-4 gap-6">{[{ qty: 'Single Side 24"x36"', price: 'PKR 1,400' }, { qty: 'Double Side 24"x36"', price: 'PKR 2,000' }, { qty: 'Single Flag w/ Stand', price: 'PKR 1,400' }, { qty: 'Double Flag w/ V Stand', price: 'PKR 2,400' }].map((option, idx) => (<div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal"><div className="text-xl font-bold text-red-600 mb-2">{option.qty}</div><div className="text-xl font-bold text-gray-800">{option.price}</div></div>))}</div><p className="text-center text-sm text-gray-500 mt-6">* Prices may vary based on customization options</p></div></section>

      <section className="py-12 bg-white"><div className="container mx-auto px-4"><div className="text-center mb-10 reveal"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Related <span className="text-red-600">Products</span></h2></div><div className="grid md:grid-cols-3 gap-6">{relatedProducts.map((product, idx) => (<Link key={idx} to={product.path}><div className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"><div className="relative h-48 overflow-hidden"><img src={product.image} alt={product.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = fallbackImage; }} /></div><div className="p-5"><div className="flex items-center gap-2 mb-2"><product.icon className="w-5 h-5 text-red-600" /><h3 className="text-lg font-bold group-hover:text-red-600 transition">{product.title}</h3></div><p className="text-gray-600 text-sm mb-3">{product.desc}</p><div className="text-red-600 font-semibold">{product.price}</div></div></div></Link>))}</div></div></section>

      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-xl text-gray-200 mb-8">Request a custom quote for Flag Printing and we'll help you create something amazing.</p><div className="flex flex-wrap justify-center gap-4"><Link to="/contact"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">Get Custom Quote <ArrowRight className="w-5 h-5" /></button></Link><Link to="/contact"><button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">Contact Us</button></Link></div></div></section>
    </div>
  );
};

export default FlagPrinting;