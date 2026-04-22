import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Upload, Eye, 
  Scissors, Truck, Star, Shield, ShoppingBag,
  Calendar, Layers, FileText, Image, 
  Gift, CreditCard, Package, Tag, Box,
  ChevronRight, Layout, Briefcase, Palette,
  Droplet, Settings, Zap as Lightning, Home, ShoppingCart, Users,
  Award, Heart, Leaf, Sparkles
} from 'lucide-react';

// Import images from assets folder
import labelsStickersImg from '../../assets/holo-sticker.jpg';
import customBoxesImg from '../../assets/custombox.jpg';
import bagsPouchesImg from '../../assets/bagspouch.jpg';
import packagingDesignImg from '../../assets/hero1.jpg';

// Import application images
import productLabelsImg from '../../assets/product-label0.jpg';
import foodBeverageImg from '../../assets/gift.jpg';
import cosmeticLabelsImg from '../../assets/cosmetics.jpg';
import promotionalStickersImg from '../../assets/coupons.jpg';
import warningLabelsImg from '../../assets/card2.jpg';
import brandingStickersImg from '../../assets/holo-sticker.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1530836369258-ef72a75b1233?w=600';

const LabelsStickers = () => {
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
    { icon: Tag, title: 'Professional Appearance', desc: 'High-quality labels enhance your product\'s perceived value' },
    { icon: Shield, title: 'Durable & Versatile', desc: 'Choose materials suited to your specific application and environment' },
    { icon: DollarSign, title: 'Cost-Effective Branding', desc: 'Transform plain packaging into branded experiences affordably' },
  ];

  const processSteps = [
    { number: '01', icon: Eye, title: 'Specification Review', desc: 'Determine size, quantity, material, and application needs' },
    { number: '02', icon: Palette, title: 'Design & Dieline', desc: 'Create artwork and cutting template for your labels' },
    { number: '03', icon: Eye, title: 'Proof Approval', desc: 'Review digital or physical proof before production' },
    { number: '04', icon: Printer, title: 'Printing', desc: 'High-quality printing on selected material' },
    { number: '05', icon: Scissors, title: 'Die-Cutting & Delivery', desc: 'Precision cutting and delivery in your preferred format' },
  ];

  // Applications with images
  const applications = [
    { icon: Package, title: 'Product Labels', desc: 'Custom labels for all your products', image: productLabelsImg || fallbackImage, color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, title: 'Food & Beverage Labels', desc: 'Labels for food and drink packaging', image: foodBeverageImg || fallbackImage, color: 'from-purple-500 to-pink-500' },
    { icon: Sparkles, title: 'Cosmetic Labels', desc: 'Premium labels for beauty products', image: cosmeticLabelsImg || fallbackImage, color: 'from-green-500 to-emerald-500' },
    { icon: Gift, title: 'Promotional Stickers', desc: 'Stickers for marketing campaigns', image: promotionalStickersImg || fallbackImage, color: 'from-orange-500 to-red-500' },
    { icon: Shield, title: 'Warning & Safety Labels', desc: 'Durable labels for safety information', image: warningLabelsImg || fallbackImage, color: 'from-teal-500 to-cyan-500' },
    { icon: Award, title: 'Branding Stickers', desc: 'Stickers for brand promotion', image: brandingStickersImg || fallbackImage, color: 'from-pink-500 to-rose-500' },
  ];

  // Related Services
  const relatedServices = [
    { icon: Box, title: 'Custom Boxes', description: 'Tailored packaging boxes for any product, any size', path: '/services/custom-boxes', image: customBoxesImg, color: 'from-teal-500 to-cyan-500', features: ['Custom Sizes', 'Premium Materials', 'Bulk Orders'] },
    { icon: ShoppingBag, title: 'Bags & Pouches', description: 'Custom bags and pouches for retail and food products', path: '/services/bags-pouches', image: bagsPouchesImg, color: 'from-yellow-500 to-orange-500', features: ['Eco-Friendly', 'Custom Printing', 'Various Sizes'] },
    { icon: Palette, title: 'Packaging Design', description: 'Stunning packaging designs that sell your products', path: '/services/packaging-design', image: packagingDesignImg, color: 'from-blue-500 to-cyan-500', features: ['3D Mockups', 'Print Ready', 'Market Research'] },
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
            src={labelsStickersImg} 
            alt="Labels & Stickers"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Tag className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Labels & Stickers Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Labels & <span className="text-yellow-500">Stickers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Eye-catching labels and stickers for branding and information
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
                  <div className="text-3xl font-bold text-white">PKR 4,000</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Turnaround</div>
                  <div className="text-3xl font-bold text-white">3-7 days</div>
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

      {/* About Labels & Stickers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                About Labels & Stickers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">Labels & Stickers</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our label and sticker printing services provide high-quality solutions for product labeling, branding, and promotional applications. We can print on a wide variety of materials including paper, vinyl, polyester, and specialty films, with options for various adhesives to suit your application.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From simple black and white labels to full-color stickers with specialty finishes, we have the capabilities to bring your vision to life. All labels can be die-cut to any shape, and we offer both roll and sheet formats to suit your application method.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom shapes and sizes',
                  'Multiple material options (paper, vinyl, polyester)',
                  'Various adhesive types',
                  'Weather-resistant options',
                  'Specialty finishes (metallic, holographic, matte)',
                  'Roll or sheet format available'
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
                src={labelsStickersImg} 
                alt="Labels & Stickers Process"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Tag className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">Any Shape</div>
                  <div className="text-sm text-gray-600">Die-Cut Available</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">3-7d</div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">1000+</div>
                  <div className="text-sm text-gray-600">Design Options</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Labels & Stickers Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-yellow-500">Labels & Stickers</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our premium label and sticker printing
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
              Simple, transparent, and efficient process from start to finish
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
              Discover the various ways our <span className="text-red-600">Labels & Stickers</span> can be utilized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From product labels to branding stickers, we've got you covered
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
              Explore our other printing and packaging solutions
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
            Ready to Get Started with Labels & Stickers?
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

export default LabelsStickers;