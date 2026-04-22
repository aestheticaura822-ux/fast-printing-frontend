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
  Lock, CornerDownRight, Hash, 
} from 'lucide-react';

// Import images from assets folder
import envelopesImg from '../../assets/envelope.jpg';
import letterheadsImg from '../../assets/marksales.jpg';
import businessCardImg from '../../assets/specialcards.jpg';
import presentationFoldersImg from '../../assets/book.jpg';

// Import category images
import byFinishCatImg from '../../assets/byfinish.jpg';
import byPaperImg from '../../assets/bypaper.jpg';
import byColourImg from '../../assets/bycolor.jpg';
import byShapeImg from '../../assets/byshape.jpg';
import guideImg from '../../assets/byguide.jpg';

// Import gallery images
import sample1 from '../../assets/bagspouch.jpg';
import sample2 from '../../assets/envelop2.jpg';
import sample3 from '../../assets/envelop3.jpg';
import sample4 from '../../assets/envelope.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const Envelopes = () => {
  const [quantity, setQuantity] = useState(250);
  const [selectedOption, setSelectedOption] = useState('window');
  const [mainImage, setMainImage] = useState(envelopesImg);

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
      case 100: return 'PKR 2,000 - 3,500';
      case 250: return 'PKR 4,000 - 7,000';
      case 500: return 'PKR 7,000 - 12,000';
      case 1000: return 'PKR 12,000 - 20,000';
      default: return 'PKR 2,000 - 3,500';
    }
  };

  // Product Categories (same as Products page)
  const productCategories = [
    { title: 'BY FINISH', items: ['Matte', 'Gloss', 'Spot UV'], price: 'From PKR 4,000', icon: Layers, image: byFinishCatImg },
    { title: 'BY PAPER', items: ['Kraft', 'Art Card', 'Premium'], price: 'From PKR 3,500', icon: FileText, image: byPaperImg },
    { title: 'BY COLOUR', items: ['Full Color', 'Black & White', 'Pantone'], price: 'From PKR 3,800', icon: Palette, image: byColourImg },
    { title: 'BY SHAPE', items: ['Standard', 'Custom', 'Die-Cut'], price: 'From PKR 4,200', icon: Ruler, image: byShapeImg },
    { title: 'GUIDE', items: ['Design Guide', 'Specs Guide', 'Sample Guide'], price: 'From PKR 3,000', icon: Book, image: guideImg },
  ];

  // Related Products (same as Products page)
  const relatedProducts = [
    { icon: FileText, title: 'Letterheads', price: 'From PKR 5,000', desc: 'Professional letterheads for official correspondence', image: letterheadsImg, path: '/products/letterheads' },
    { icon: CreditCard, title: 'Business Cards', price: 'From PKR 3,000', desc: 'Make a lasting first impression with premium business cards', image: businessCardImg, path: '/products/business-cards' },
    { icon: Briefcase, title: 'Presentation Folders', price: 'From PKR 8,000', desc: 'Professional folders for documents and proposals', image: presentationFoldersImg, path: '/products/presentation-folders' }
  ];

  // Category Card Component (with images)
  const CategoryCard = ({ category }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
            <category.icon className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg">{category.title}</h3>
          <p className="text-yellow-400 text-sm font-semibold">{category.price}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {category.items.map((item, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

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
                  alt="Envelopes"
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
                <span className="text-red-600">Envelopes</span>
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional custom printed envelopes that complement your business stationery. 
                Available in various sizes and paper stocks with full-color printing options. 
                Perfect for official correspondence, marketing campaigns, and special events.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  'Multiple sizes available',
                  'Window or non-window options',
                  'Self-seal or gummed flap',
                  'Full-color printing',
                  'Various paper stocks',
                  'Fast 3-4 day turnaround'
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
                  {[100, 250, 500, 1000].map((qty) => (
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

              {/* Envelope Options */}
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Envelope Options</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'window', label: 'Window Envelope' },
                    { id: 'nonwindow', label: 'Non-Window' },
                    { id: 'selfseal', label: 'Self-Seal' },
                    { id: 'gummed', label: 'Gummed Flap' }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        selectedOption === option.id 
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
            <p className="text-gray-600 max-w-2xl mx-auto">Detailed specifications for your envelopes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sizes */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sizes</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• DL (220mm x 110mm)</li>
                <li>• C5 (229mm x 162mm)</li>
                <li>• C4 (324mm x 229mm)</li>
                <li>• #10 (9.5" x 4.125")</li>
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
                <li>• 80gsm Bond Paper</li>
                <li>• 100gsm Bond Paper</li>
                <li>• 120gsm Textured</li>
                <li>• Kraft Paper</li>
                <li>• Linen Finish</li>
              </ul>
            </div>

            {/* Options */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
<Mail className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Options</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Window envelope</li>
                <li>• Non-window</li>
                <li>• Self-seal closure</li>
                <li>• Gummed flap</li>
                <li>• Peel & seal</li>
              </ul>
            </div>

            {/* Printing */}
            <div className="bg-gray-50 rounded-2xl p-6 reveal">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Printer className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Printing</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Full color exterior</li>
                <li>• Interior printing</li>
                <li>• Return address printing</li>
                <li>• Security tint inside</li>
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
              { qty: 100, price: 'PKR 2,000 - 3,500' },
              { qty: 250, price: 'PKR 4,000 - 7,000' },
              { qty: 500, price: 'PKR 7,000 - 12,000' },
              { qty: 1000, price: 'PKR 12,000 - 20,000' }
            ].map((option, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal">
                <div className="text-3xl font-bold text-red-600 mb-2">{option.qty}</div>
                <div className="text-sm text-gray-500 mb-2">Envelopes</div>
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

      {/* Product Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Product <span className="text-red-600">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from various options to customize your printing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {productCategories.map((category, index) => (
              <CategoryCard key={index} category={category} />
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
              Request a custom quote for Envelopes and we'll help you create something amazing.
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

export default Envelopes;