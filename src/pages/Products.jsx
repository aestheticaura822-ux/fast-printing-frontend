import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, CheckCircle, ArrowRight, Star, 
  Filter, Search, X, TrendingUp, Clock,
  Zap, DollarSign, Leaf, Eye,
  Briefcase, FileText, Mail, Phone,
  Printer, Layout, Shirt, Newspaper,
  Layers, Tag, ShoppingBag, Gift,
  Calendar, Image, CreditCard, Award,
  ChevronRight, Menu, Grid, List, Truck,
  Heart, Book, Box, PenTool, Sparkles, Shield, Palette
} from 'lucide-react';

// Import images from assets folder
import businessCardImg from '../assets/specialcards.jpg';
import letterheadsImg from '../assets/marksales.jpg';
import envelopesImg from '../assets/envelope.jpg';
import presentationFoldersImg from '../assets/book.jpg';
import billBooksImg from '../assets/bill2.jpg';

import brochuresImg from '../assets/letter.jpg';
import flyersImg from '../assets/flyer.jpg';
import postersImg from '../assets/banner.jpg';
import catalogsImg from '../assets/magine-cover.jpg';

import bannersImg from '../assets/rollup1.jpg';
import rollUpBannersImg from '../assets/rollup.jpg';
import windowGraphicsImg from '../assets/window.jpg';
import wallGraphicsImg from '../assets/wall.jpg';
import flagPrintingImg from '../assets/flag.jpg';


import customBoxesImg from '../assets/packproducts.jpg';
import labelsStickersImg from '../assets/packcosmetics.jpg';
import shoppingBagsImg from '../assets/shopping.jpg';
import foodPackagingImg from '../assets/foodproduct.jpg';



import weddingCardsImg from '../assets/bluecard.jpg';
import calendarsImg from '../assets/calender.jpg';
import notepadsImg from '../assets/notebook.jpg';
import certificatesImg from '../assets/specialcerti.jpg';


import businessEssentialsBannerImg from '../assets/business-card1.jpg';
import marketingBannerImg from '../assets/shop3.jpg';
import largeFormatBannerImg from '../assets/largeformat.jpg';
import packagingBannerImg from '../assets/custombox.jpg';
import specialtyBannerImg from '../assets/specialevents.jpg';

// Import frame images for categories
import paperBasedImg from '../assets/poster.jpg';
import vinylBasedImg from '../assets/wash.jpg';
import byFinishImg from '../assets/cosmetics.jpg';
import productLabelImg from '../assets/product-label0.jpg';
import luxuryTexturedImg from '../assets/ecoproduct.jpg';


import styleImg from '../assets/style.jpg';
import weddingStationeryImg from '../assets/dholki.jpg';
import onYourWeddingDayImg from '../assets/maroon.jpg';


import byFinishCatImg from '../assets/byfinish.jpg';
import byPaperImg from '../assets/bypaper.jpg';
import byColourImg from '../assets/bycolor.jpg';
import byShapeImg from '../assets/byshape.jpg';
import guideImg from '../assets/byguide.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

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

  // Product Categories
  const categories = [
    { id: 'all', name: 'All Products', icon: Package, count: 22 },
    { id: 'business', name: 'Business Essentials', icon: Briefcase, count: 5 },
    { id: 'marketing', name: 'Marketing Materials', icon: FileText, count: 4 },
    { id: 'large', name: 'Large Format', icon: Newspaper, count: 5 },
    { id: 'packaging', name: 'Packaging', icon: Package, count: 4 },
    { id: 'specialty', name: 'Specialty Items', icon: Gift, count: 4 },
  ];

  // Product Categories Data with images
  const productCategories = [
    { title: 'BY FINISH', items: ['Matte', 'Gloss', 'Spot UV'], price: 'From PKR 4,000', image: byFinishCatImg, icon: Layers },
    { title: 'BY PAPER', items: ['Kraft', 'Art Card', 'Premium'], price: 'From PKR 3,500', image: byPaperImg, icon: FileText },
    { title: 'BY COLOUR', items: ['Full Color', 'Black & White', 'Pantone'], price: 'From PKR 3,800', image: byColourImg, icon: Palette },
    { title: 'BY SHAPE', items: ['Standard', 'Custom', 'Die-Cut'], price: 'From PKR 4,200', image: byShapeImg, icon: Layers },
    { title: 'GUIDE', items: ['Design Guide', 'Specs Guide', 'Sample Guide'], price: 'From PKR 3,000', image: guideImg, icon: Book },
  ];

  // Sticker Types Data with images
  const stickerTypes = [
    { title: 'PAPER BASED', items: ['Premium Paper', 'Matte Finish'], price: 'From PKR 2,500', image: paperBasedImg, icon: FileText },
    { title: 'VINYL BASED', items: ['Waterproof', 'Durable'], price: 'From PKR 3,500', image: vinylBasedImg, icon: Shield },
    { title: 'BY FINISH', items: ['Matte', 'Gloss', 'Holographic'], price: 'From PKR 3,000', image: byFinishImg, icon: Layers },
    { title: 'PRODUCT LABEL', items: ['Custom Shape', 'Full Color'], price: 'From PKR 4,000', image: productLabelImg, icon: Tag },
    { title: 'LUXURY TEXTURED', items: ['Embossed', 'Premium Feel'], price: 'From PKR 5,000', image: luxuryTexturedImg, icon: Sparkles },
  ];

  // Invitation Categories Data with images
  const invitationCategories = [
    { title: 'STYLE', items: ['Classic', 'Modern', 'Luxury'], price: 'From PKR 150', image: styleImg, icon: Gift },
    { title: 'WEDDING STATIONERY', items: ['Invitations', 'Save the Date', 'Thank You'], price: 'From PKR 120', image: weddingStationeryImg, icon: Heart },
    { title: 'ON YOUR WEDDING DAY', items: ['Programs', 'Menus', 'Place Cards'], price: 'From PKR 200', image: onYourWeddingDayImg, icon: Calendar },
  ];

  // Products Data with local images
  const products = [
    // Business Essentials
    { id: 1, name: 'Business Cards', price: '3,000', category: 'business', image: businessCardImg, description: 'Premium business cards that make lasting impressions', features: ['Premium paper', 'Glossy/Matte finish', 'Custom shapes'], icon: CreditCard, path: '/products/business-cards' },
    { id: 2, name: 'Letterheads', price: '5,000', category: 'business', image: letterheadsImg, description: 'Professional letterheads for official correspondence', features: ['Watermarked paper', 'Custom designs', 'Matching envelopes'], icon: FileText, path: '/products/letterheads' },
    { id: 3, name: 'Envelopes', price: '4,000', category: 'business', image: envelopesImg, description: 'Custom printed envelopes in various sizes', features: ['Window options', 'Security tint', 'Bulk pricing'], icon: Mail, path: '/products/envelopes' },
    { id: 4, name: 'Presentation Folders', price: '8,000', category: 'business', image: presentationFoldersImg, description: 'Professional folders for documents and proposals', features: ['Pocket options', 'Custom printing', 'Business card slots'], icon: Briefcase, path: '/products/presentation-folders' },
    { id: 5, name: 'Bill Books', price: '1,500', category: 'business', image: billBooksImg, description: 'Custom printed carbonless bill books and receipt pads', features: ['Carbonless copies', 'Numbered pages', 'Custom layouts'], icon: Book, path: '/products/bill-books' },
    
    // Marketing Materials
    { id: 6, name: 'Brochures', price: '8,000', category: 'marketing', image: brochuresImg, description: 'Eye-catching brochures to showcase your business', features: ['Tri-fold', 'Bi-fold', 'Gate fold'], icon: FileText, path: '/products/brochures' },
    { id: 7, name: 'Flyers', price: '5,000', category: 'marketing', image: flyersImg, description: 'Attention-grabbing flyers for promotions', features: ['Full color', 'Various sizes', 'Bulk discounts'], icon: Image, path: '/products/flyers' },
    { id: 8, name: 'Posters', price: '2,000', category: 'marketing', image: postersImg, description: 'High-impact posters in various sizes', features: ['Matte/Glossy', 'Laminated', 'Custom sizes'], icon: Image, path: '/products/posters' },
    { id: 9, name: 'Catalogs', price: '15,000', category: 'marketing', image: catalogsImg, description: 'Comprehensive product catalogs', features: ['Saddle stitch', 'Perfect bound', 'Wire-o binding'], icon: Book, path: '/products/catalogs' },
    
    // Large Format
    { id: 10, name: 'Banners', price: '2,500', category: 'large', image: bannersImg, description: 'Durable vinyl banners for indoor and outdoor use', features: ['Weather resistant', 'Grommets included', 'Custom sizes'], icon: Newspaper, path: '/products/banners' },
    { id: 11, name: 'Roll-Up Banners', price: '8,000', category: 'large', image: rollUpBannersImg, description: 'Portable roll-up banners perfect for events', features: ['Portable stand', 'Easy setup', 'Carrying case'], icon: Layers, path: '/products/roll-up-banners' },
    { id: 12, name: 'Window Graphics', price: '5,000', category: 'large', image: windowGraphicsImg, description: 'Promotional graphics for storefronts', features: ['Perforated vinyl', 'Clear view', 'Custom designs'], icon: Image, path: '/products/window-graphics' },
    { id: 13, name: 'Wall Graphics', price: '10,000', category: 'large', image: wallGraphicsImg, description: 'Large-scale wall murals and graphics', features: ['Removable', 'Custom sizes', 'High resolution'], icon: Layout, path: '/products/wall-graphics' },
    { id: 14, name: 'Flag Printing', price: '1,400', category: 'large', image: flagPrintingImg, description: 'High-quality custom indoor and outdoor flags', features: ['Durable fabric', 'Wind resistant', 'Double sided'], icon: Award, path: '/products/flag-printing' },
    
    // Packaging Products
    { id: 15, name: 'Custom Boxes', price: '15,000', category: 'packaging', image: customBoxesImg, description: 'Tailored packaging boxes for any product', features: ['Custom sizes', 'Printing included', 'Structural design'], icon: Box, path: '/products/custom-boxes' },
    { id: 16, name: 'Labels & Stickers', price: '4,000', category: 'packaging', image: labelsStickersImg, description: 'Custom labels for products and branding', features: ['Waterproof', 'Custom shapes', 'Kiss cut'], icon: Tag, path: '/products/labels-stickers' },
    { id: 17, name: 'Shopping Bags', price: '12,000', category: 'packaging', image: shoppingBagsImg, description: 'Branded shopping bags for retail', features: ['Paper or plastic', 'Custom handles', 'Full color'], icon: ShoppingBag, path: '/products/shopping-bags' },
    { id: 18, name: 'Food Packaging', price: '10,000', category: 'packaging', image: foodPackagingImg, description: 'Food-safe packaging solutions', features: ['FDA approved', 'Custom printing', 'Eco-friendly options'], icon: Package, path: '/products/food-packaging' },
    
    // Specialty Items
    { id: 19, name: 'Wedding Cards', price: '8,000', category: 'specialty', image: weddingCardsImg, description: 'Elegant wedding invitations and cards', features: ['Foil stamping', 'Embossing', 'Custom envelopes'], icon: Gift, path: '/products/wedding-cards' },
    { id: 20, name: 'Calendars', price: '12,000', category: 'specialty', image: calendarsImg, description: 'Custom calendars for promotional use', features: ['Wall or desk', 'Custom photos', 'Spiral bound'], icon: Calendar, path: '/products/calendars' },
    { id: 21, name: 'Notepads', price: '6,000', category: 'specialty', image: notepadsImg, description: 'Branded notepads and writing pads', features: ['Custom printing', 'Various sizes', 'Padded or glued'], icon: FileText, path: '/products/notepads' },
    { id: 22, name: 'Certificates', price: '5,000', category: 'specialty', image: certificatesImg, description: 'Professional certificates and awards', features: ['Security features', 'Gold foil', 'Custom designs'], icon: Award, path: '/products/certificates' },
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            From PKR {product.price}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <product.icon className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>
        <Link to={product.path}>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
            View Details <Eye className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );

  // Category Banner Component with image
  const CategoryBanner = ({ title, subtitle, bgImage }) => (
    <div className="relative rounded-2xl overflow-hidden mb-8 reveal group">
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>
      <div className="relative z-10 py-12 px-8 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h3>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );

  // Section Component for each product category
  const ProductSection = ({ title, subtitle, bgImage, products, categoryId }) => {
    const sectionProducts = products.filter(p => p.category === categoryId);
    if (sectionProducts.length === 0) return null;
    
    return (
      <div className="mb-16">
        <CategoryBanner title={title} subtitle={subtitle} bgImage={bgImage} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/portfolio">
            <button className="text-red-600 font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition">
              See More Examples <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    );
  };

  // Category Card Component with image frame
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
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2016/10/07/5807-186111314_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Package className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-semibold">24+ Products Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-yellow-500">Products</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Browse our extensive range of 24+ customizable printing and packaging products. 
              From business essentials to specialty items, we've got everything you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Zap, text: 'FREE Design' },
                { icon: Truck, text: 'Fast Delivery' },
                { icon: Star, text: 'Premium Quality' },
                { icon: DollarSign, text: 'Best Price' },
                { icon: Leaf, text: 'Eco-Friendly' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <item.icon className="w-4 h-4 text-yellow-500" />
                  <span className="text-white text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 mx-auto">
                  Get Custom Quote <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* Header with Filter and Search */}
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Showing <span className="text-red-600">{filteredProducts.length}</span> Products
              </h2>
            </div>
            <div className="flex gap-3">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
              
              {/* Filter Button */}
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>
              
              {/* View Toggle */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Business Essentials Section */}
          <ProductSection 
            title="Business Essentials"
            subtitle="Professional business stationery that makes a lasting impression"
            bgImage={businessEssentialsBannerImg}
            products={products}
            categoryId="business"
            seeMoreLink="/portfolio"
          />

          {/* Product Categories Section with Heading */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Product Categories</h2>
              <p className="text-gray-600">Choose from various options to customize your printing</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {productCategories.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
          </div>

          {/* Marketing Materials Section */}
          <ProductSection 
            title="Marketing Materials"
            subtitle="Eye-catching promotional materials to amplify your brand message"
            bgImage={marketingBannerImg}
            products={products}
            categoryId="marketing"
            seeMoreLink="/portfolio"
          />

          {/* Large Format Section */}
          <ProductSection 
            title="Large Format"
            subtitle="Bold, impactful prints for maximum visibility and brand presence"
            bgImage={largeFormatBannerImg}
            products={products}
            categoryId="large"
            seeMoreLink="/portfolio"
          />

          {/* Packaging Products Section */}
          <ProductSection 
            title="Packaging Products"
            subtitle="Custom packaging solutions that protect and promote your products"
            bgImage={packagingBannerImg}
            products={products}
            categoryId="packaging"
            seeMoreLink="/portfolio"
          />

          {/* Sticker Types Section with Heading */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Sticker Types</h2>
              <p className="text-gray-600">Choose from our wide range of sticker options</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {stickerTypes.map((sticker, index) => (
                <CategoryCard key={index} category={sticker} />
              ))}
            </div>
          </div>

          {/* Specialty Items Section */}
          <ProductSection 
            title="Specialty Items"
            subtitle="Unique printing solutions for special occasions and events"
            bgImage={specialtyBannerImg}
            products={products}
            categoryId="specialty"
            seeMoreLink="/portfolio"
          />

          {/* Invitation Categories Section with Heading */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Invitation Categories</h2>
              <p className="text-gray-600">Elegant invitations for your special moments</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {invitationCategories.map((invitation, index) => (
                <CategoryCard key={index} category={invitation} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-200 mb-8 reveal">
              We offer custom solutions for unique requirements. Contact us to discuss your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                  Contact Us <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  Request Samples
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;