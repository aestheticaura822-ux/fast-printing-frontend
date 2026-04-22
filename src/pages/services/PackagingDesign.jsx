import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Upload, Eye,
  Scissors, Truck, Star, Shield, ShoppingBag,
  Calendar, Layers, FileText, Image, 
  Gift, CreditCard, Package, Tag, Box,
  ChevronRight, Layout, Briefcase, Palette,
  Droplet, Settings, Users, Award, Heart, Leaf, Sparkles,
  PenTool, Target, Globe, BarChart, Lightbulb, Compass,
  Rocket, RefreshCw, Building, Gem, Feather
} from 'lucide-react';

// Import images from assets folder
import packagingDesignImg from '../../assets/hero1.jpg';
import customBoxesImg from '../../assets/custombox.jpg';
import labelsStickersImg from '../../assets/holo-sticker.jpg';
import brandIdentityImg from '../../assets/shop2.jpg';

// Import application images
import productPackagingImg from '../../assets/cosmetics.jpg';
import foodBeverageImg from '../../assets/packfood.jpg';
import cosmeticsBeautyImg from '../../assets/packcosmetics.jpg';
import ecommerceBoxesImg from '../../assets/packbox.jpg';
import giftPackagingImg from '../../assets/gift.jpg';
import retailProductsImg from '../../assets/packproducts.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1530836369258-ef72a75b1233?w=600';

const PackagingDesign = () => {
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

  const features = [
    { icon: Target, title: 'Shelf Appeal', desc: 'Designs that grab attention and drive purchase decisions' },
    { icon: Globe, title: 'Brand Consistency', desc: 'Packaging that perfectly aligns with your brand identity' },
    { icon: Printer, title: 'Production Ready', desc: 'Files prepared for flawless printing and manufacturing' },
  ];

  const processSteps = [
    { number: '01', icon: BarChart, title: 'Product & Market Analysis', desc: 'Study your product, target audience, and competitive landscape' },
    { number: '02', icon: Lightbulb, title: 'Concept Development', desc: 'Create multiple design directions with 3D mockups' },
    { number: '03', icon: PenTool, title: 'Design Refinement', desc: 'Perfect chosen concept based on feedback' },
    { number: '04', icon: Settings, title: 'Technical Preparation', desc: 'Create dielines and prepare print-ready files' },
    { number: '05', icon: Truck, title: 'Production Support', desc: 'Assist with sample approval and production setup' },
  ];

  // Applications with images
  const applications = [
    { icon: Package, title: 'Product Packaging', desc: 'Custom packaging for any product', image: productPackagingImg || fallbackImage, color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, title: 'Food & Beverage', desc: 'Appetizing packaging for food products', image: foodBeverageImg || fallbackImage, color: 'from-purple-500 to-pink-500' },
    { icon: Sparkles, title: 'Cosmetics & Beauty', desc: 'Luxury packaging for beauty products', image: cosmeticsBeautyImg || fallbackImage, color: 'from-green-500 to-emerald-500' },
    { icon: Box, title: 'E-commerce Boxes', desc: 'Shipping boxes that impress customers', image: ecommerceBoxesImg || fallbackImage, color: 'from-orange-500 to-red-500' },
    { icon: Gift, title: 'Gift Packaging', desc: 'Beautiful gift boxes and wraps', image: giftPackagingImg || fallbackImage, color: 'from-teal-500 to-cyan-500' },
    { icon: ShoppingBag, title: 'Retail Products', desc: 'Shelf-ready retail packaging', image: retailProductsImg || fallbackImage, color: 'from-pink-500 to-rose-500' },
  ];

  // Related Services
  const relatedServices = [
    { icon: Box, title: 'Custom Boxes', description: 'Tailored packaging boxes for any product, any size', path: '/services/custom-boxes', image: customBoxesImg, color: 'from-teal-500 to-cyan-500', features: ['Custom Sizes', 'Premium Materials', 'Bulk Orders'] },
    { icon: Tag, title: 'Labels & Stickers', description: 'Eye-catching labels and stickers for branding and information', path: '/services/labels-stickers', image: labelsStickersImg, color: 'from-pink-500 to-rose-500', features: ['Custom Shapes', 'Waterproof', 'Premium Quality'] },
    { icon: Target, title: 'Brand Identity', description: 'Complete brand development from concept to implementation', path: '/services/brand-identity', image: brandIdentityImg, color: 'from-red-500 to-pink-500', features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'] },
  ];

  // Service Card Component
  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-60 transition duration-300`}></div>
        <div className="absolute bottom-4 left-4">
          <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
            <service.icon className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features && service.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>
        <Link to={service.path}>
          <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );

  // Application Card Component
  const ApplicationCard = ({ app }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={app.image} 
          alt={app.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${app.color} opacity-0 group-hover:opacity-60 transition duration-300`}></div>
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <app.icon className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
          {app.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{app.desc}</p>
      </div>
    </div>
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={packagingDesignImg} 
            alt="Packaging Design"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Package className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Packaging Design Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Packaging <span className="text-yellow-500">Design</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Stunning packaging designs that sell your products
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                    Contact Us
                  </button>
                </Link>
              </div>
              
              {/* Pricing Info */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Starting from</div>
                  <div className="text-3xl font-bold text-white">PKR 35,000</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Turnaround</div>
                  <div className="text-3xl font-bold text-white">10-15 days</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Rush</div>
                  <div className="text-3xl font-bold text-white">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Packaging Design Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                About Packaging Design
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">Packaging Design</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Packaging design is where aesthetics meet functionality. Our packaging designers create visually stunning designs that not only look beautiful but also protect your products and comply with regulations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We consider every aspect including structure, materials, printing techniques, and user experience. The design process includes market research, competitor analysis, concept development, 3D mockups, and print-ready file preparation. We ensure your packaging stands out on shelves and creates memorable unboxing experiences.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom structural design',
                  '3D mockups and visualization',
                  'Print-ready file preparation',
                  'Dieline creation',
                  'Material recommendations',
                  'Regulatory compliance guidance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <img 
                src={packagingDesignImg} 
                alt="Packaging Design Process"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Package className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">3D</div>
                  <div className="text-sm text-gray-600">Mockups</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">10-15d</div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">Print</div>
                  <div className="text-sm text-gray-600">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Packaging Design Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-yellow-500">Packaging Design</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience professional packaging design that drives sales
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 reveal"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic process to create stunning packaging designs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-red-700" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover the various ways our <span className="text-red-600">Packaging Design</span> can be utilized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From product packaging to gift boxes, we've got you covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <ApplicationCard key={index} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Related Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Related <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our other design and printing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 reveal">
            Ready to Get Started with Packaging Design?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto reveal">
            Contact us today to discuss your project requirements and get a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <Link to="/contact">
              <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-red-800 hover:bg-red-800 hover:text-white text-red-800 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagingDesign;