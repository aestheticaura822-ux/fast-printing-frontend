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
  Lock, CornerDownRight, Hash, Receipt
} from 'lucide-react';

// Import images from assets folder
import billBooksImg from '../../assets/bill2.jpg';
import letterheadsImg from '../../assets/marksales.jpg';
import envelopesImg from '../../assets/envelope.jpg';
import notepadsImg from '../../assets/notebook.jpg';

// Import gallery images
import sample1 from '../../assets/bill2.jpg';
import sample2 from '../../assets/bill3.jpg';
import sample3 from '../../assets/notebook.jpg';
import sample4 from '../../assets/book.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const BillBooks = () => {
  const [selectedVariant, setSelectedVariant] = useState('a5-1c');
  const [mainImage, setMainImage] = useState(billBooksImg);

  // Scroll reveal animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();
    return () => {
      window.removeEventListener('scroll', revealElements);
      document.head.removeChild(style);
    };
  }, []);

  const galleryImages = [sample1, sample2, sample3, sample4];

  const getPrice = () => {
    switch(selectedVariant) {
      case 'a5-1c': return 'PKR 3,499';
      case 'a5-4c': return 'PKR 4,500';
      case 'a4-4c': return 'PKR 9,500';
      default: return 'PKR 3,499';
    }
  };

  const getVariantDescription = () => {
    switch(selectedVariant) {
      case 'a5-1c': return '10 Bill Book A5 (68gm Paper) 1 Color';
      case 'a5-4c': return '10 Bill Book A5, 4C (80gm Paper)';
      case 'a4-4c': return '10 Bill Book A4, 4C (80gm Paper)';
      default: return '10 Bill Book A5 (68gm Paper) 1 Color';
    }
  };

  // Related Products
  const relatedProducts = [
    { icon: FileText, title: 'Letterheads', price: 'From PKR 5,000', desc: 'Professional letterheads for official correspondence', image: letterheadsImg, path: '/products/letterheads' },
    { icon: Mail, title: 'Envelopes', price: 'From PKR 4,000', desc: 'Custom printed envelopes in various sizes', image: envelopesImg, path: '/products/envelopes' },
    { icon: FileText, title: 'Notepads', price: 'From PKR 6,000', desc: 'Branded notepads and writing pads', image: notepadsImg, path: '/products/notepads' }
  ];

  return (
    <div className="pt-20 overflow-x-hidden bg-gray-50">
      
      {/* Product Detail Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Images */}
            <div className="reveal">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-4">
                <img 
                  src={mainImage} 
                  alt="Bill Books"
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.target.src = fallbackImage; }}
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      mainImage === img ? 'border-red-600 shadow-lg' : 'border-transparent hover:border-red-300'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Sample ${idx + 1}`}
                      className="w-full h-24 object-cover"
                      onError={(e) => { e.target.src = fallbackImage; }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                <Star className="w-4 h-4 fill-red-600" />
                Best Seller
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Bill / <span className="text-red-600">Invoice Book</span>
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Keep your business transactions organized and professional with our custom-printed bill and invoice books. 
                Available in A4 and A5 sizes, featuring high-quality printing by professional designers with 100 pages each book 
                and simple card binding. A perfect solution for office and shop records.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  '80 Gram One Side 4 Color Printed',
                  'One Plan News Paper for Office Record',
                  '100 Pages Each Book',
                  'Simple Card Binding',
                  'Unique & Standout Designs',
                  'Fast 3-5 day turnaround'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Variant Selector */}
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Select Variant</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'a5-1c', label: 'A5 (68gm) 1 Color', price: 'PKR 3,499' },
                    { id: 'a5-4c', label: 'A5 (80gm) 4 Color', price: 'PKR 4,500' },
                    { id: 'a4-4c', label: 'A4 (80gm) 4 Color', price: 'PKR 9,500' }
                  ].map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        selectedVariant === variant.id 
                          ? 'bg-red-600 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500">Selected Variant</div>
                  <div className="text-base font-semibold text-gray-800">{getVariantDescription()}</div>
                  <div className="text-2xl font-bold text-red-600 mt-2">{getPrice()}</div>
                  <div className="text-xs text-gray-400 mt-1">* For 10 books</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                    Get Custom Quote <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    Request Samples <Heart className="w-5 h-5" />
                  </button>
                </Link>
              </div>

              {/* Free Support Badge */}
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Free Design Support
                </div>
                <div className="flex items-center gap-1">
                  <Printer className="w-4 h-4 text-yellow-500" />
                  Custom Printing Options
                </div>
                <div className="flex items-center gap-1">
                  <Ruler className="w-4 h-4 text-yellow-500" />
                  Multiple Sizes Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Product <span className="text-red-600">Specifications</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Detailed specifications for your bill books</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sizes */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sizes</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Size A5 (5.75 x 9 inches)</li>
                <li>• Size A4</li>
                <li>• Custom sizes available</li>
              </ul>
            </div>

            {/* Paper Options */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Paper Options</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 68gsm Paper</li>
                <li>• 80gsm Paper</li>
              </ul>
            </div>

            {/* Printing */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Printer className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Printing</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 1 Color Printed</li>
                <li>• 4 Color Printed (One Side)</li>
              </ul>
            </div>

            {/* Additional Features */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Features</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 100 Pages Each Book</li>
                <li>• Simple Card Binding</li>
                <li>• Professional Designs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options Table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Pricing <span className="text-red-600">Options</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the variant that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { variant: 'A5 (68gm) 1 Color', price: 'PKR 3,499', desc: '10 Bill Book A5, 68gm Paper, 1 Color' },
              { variant: 'A5 (80gm) 4 Color', price: 'PKR 4,500', desc: '10 Bill Book A5, 80gm Paper, 4 Color' },
              { variant: 'A4 (80gm) 4 Color', price: 'PKR 9,500', desc: '10 Bill Book A4, 80gm Paper, 4 Color' }
            ].map((option, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal">
                <div className="text-xl font-bold text-red-600 mb-2">{option.variant}</div>
                <div className="text-sm text-gray-500 mb-2">{option.desc}</div>
                <div className="text-2xl font-bold text-gray-800">{option.price}</div>
                <div className="text-xs text-gray-400 mt-2">* For 10 books</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">* For custom orders, contact us at <span className="text-red-600">fastprinting@fastgroup.com</span></p>
            <p className="text-xs text-gray-400 mt-2">* Prices may vary based on customization options</p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Related <span className="text-red-600">Products</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Complete your business stationery set</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product, idx) => (
              <Link key={idx} to={product.path}>
                <div className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.src = fallbackImage; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <product.icon className="w-5 h-5 text-red-600" />
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                    <div className="text-red-600 font-semibold">{product.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 reveal">
              Request a custom quote for Bill / Invoice Book and we'll help you create something amazing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                  Get Custom Quote <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillBooks;