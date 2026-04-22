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
  Lock, CornerDownRight, Hash, FolderOpen
} from 'lucide-react';

// Import images from assets folder
import presentationFoldersImg from '../../assets/book.jpg';
import businessCardImg from '../../assets/specialcards.jpg';
import letterheadsImg from '../../assets/marksales.jpg';
import brochuresImg from '../../assets/letter.jpg';

// Import gallery images
import sample1 from '../../assets/book.jpg';
import sample2 from '../../assets/notebook.jpg';
import sample3 from '../../assets/marksales.jpg';
import sample4 from '../../assets/bill2.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const PresentationFolders = () => {
  const [quantity, setQuantity] = useState(100);
  const [selectedPocket, setSelectedPocket] = useState('two');
  const [mainImage, setMainImage] = useState(presentationFoldersImg);

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

  const getPriceRange = () => {
    switch(quantity) {
      case 50: return 'PKR 5,000 - 8,000';
      case 100: return 'PKR 8,000 - 14,000';
      case 250: return 'PKR 18,000 - 30,000';
      case 500: return 'PKR 32,000 - 55,000';
      default: return 'PKR 5,000 - 8,000';
    }
  };

  // Related Products
  const relatedProducts = [
    { icon: CreditCard, title: 'Business Cards', price: 'From PKR 3,000', desc: 'Make a lasting first impression with premium business cards', image: businessCardImg, path: '/products/business-cards' },
    { icon: FileText, title: 'Letterheads', price: 'From PKR 5,000', desc: 'Professional letterheads for official correspondence', image: letterheadsImg, path: '/products/letterheads' },
    { icon: Book, title: 'Brochures', price: 'From PKR 8,000', desc: 'Showcase your business with professionally designed brochures', image: brochuresImg, path: '/products/brochures' }
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
                  alt="Presentation Folders"
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
                Professional Choice
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Presentation <span className="text-red-600">Folders</span>
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-quality presentation folders designed to organize and showcase your documents professionally. 
                Perfect for proposals, presentations, marketing materials, and corporate documents. 
                Available with various pocket configurations and finishing options.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  'Various pocket configurations',
                  'Business card slits available',
                  'Gloss or matte lamination',
                  'Spot UV coating options',
                  'Embossing and foil stamping',
                  'Fast 5-7 day turnaround'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Select Quantity</h3>
                <div className="flex flex-wrap gap-3">
                  {[50, 100, 250, 500].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setQuantity(qty)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        quantity === qty 
                          ? 'bg-red-600 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-500">Price Range</div>
                  <div className="text-2xl font-bold text-red-600">{getPriceRange()}</div>
                  <div className="text-xs text-gray-400">* Prices may vary based on customization options</div>
                </div>
              </div>

              {/* Pocket Options */}
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Pocket Options</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'two', label: 'Two Pockets' },
                    { id: 'left', label: 'Left Pocket Only' },
                    { id: 'right', label: 'Right Pocket Only' },
                    { id: 'none', label: 'No Pockets' }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedPocket(option.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        selectedPocket === option.id 
                          ? 'bg-red-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
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
            <p className="text-gray-600 max-w-2xl mx-auto">Detailed specifications for your presentation folders</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sizes */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sizes</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• A4 (9" x 12" when open)</li>
                <li>• Letter size (9" x 12")</li>
                <li>• Legal size (9" x 14.5")</li>
                <li>• Custom sizes available</li>
              </ul>
            </div>

            {/* Paper Stock */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Paper Stock</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 14pt Cardstock</li>
                <li>• 16pt Cardstock</li>
                <li>• 18pt Cardstock (Premium)</li>
                <li>• Textured Stock</li>
              </ul>
            </div>

            {/* Pocket Options */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <FolderOpen className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pocket Options</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Two pockets</li>
                <li>• Left pocket only</li>
                <li>• Right pocket only</li>
                <li>• No pockets</li>
                <li>• Business card slits</li>
                <li>• CD/DVD slits</li>
              </ul>
            </div>

            {/* Finishing */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Gem className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Finishing</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Gloss lamination</li>
                <li>• Matte lamination</li>
                <li>• Spot UV</li>
                <li>• Foil stamping</li>
                <li>• Embossing/Debossing</li>
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
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the quantity that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { qty: 50, price: 'PKR 5,000 - 8,000' },
              { qty: 100, price: 'PKR 8,000 - 14,000' },
              { qty: 250, price: 'PKR 18,000 - 30,000' },
              { qty: 500, price: 'PKR 32,000 - 55,000' }
            ].map((option, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal">
                <div className="text-3xl font-bold text-red-600 mb-2">{option.qty}</div>
                <div className="text-sm text-gray-500 mb-2">Folders</div>
                <div className="text-xl font-bold text-gray-800">{option.price}</div>
                <div className="text-xs text-gray-400 mt-2">* Prices may vary</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">* Prices may vary based on customization options</p>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Related <span className="text-red-600">Products</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Complete your professional stationery set</p>
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
              Request a custom quote for Presentation Folders and we'll help you create something amazing.
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

export default PresentationFolders;