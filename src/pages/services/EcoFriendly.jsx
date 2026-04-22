import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Upload, Eye, 
  Scissors, Truck, Star, Shield, ShoppingBag,
  Calendar, Layers, FileText, Image, 
  Gift, CreditCard, Package, Tag, Box,
  ChevronRight, Layout, Briefcase, Palette, ShoppingCart,
  Droplet, Settings, Users, Award, Heart, Leaf, Sparkles,
  PenTool, Target, Globe, BarChart, Lightbulb, Compass,
  Rocket, RefreshCw, Building, Recycle
} from 'lucide-react';

// Import images from assets folder
import ecoFriendlyImg from '../../assets/ecofreindly.jpg';
import customBoxesImg from '../../assets/custombox.jpg';
import bagsPouchesImg from '../../assets/bagspouch.jpg';
import labelsStickersImg from '../../assets/holo-sticker.jpg';

// Import application images
import ecommerceShippingImg from '../../assets/industry.jpg';
import foodBeverageImg from '../../assets/ecofood.jpg';
import cosmeticsImg from '../../assets/ecoproduct.jpg';
import retailProductsImg from '../../assets/cosmetics.jpg';
import corporateGiftsImg from '../../assets/gift.jpg';
import eventMaterialsImg from '../../assets/scroll-wedding-card.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1530836369258-ef72a75b1233?w=600';

const EcoFriendly = () => {
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
    { icon: Recycle, title: 'Environmental Responsibility', desc: 'Demonstrate your commitment to sustainability and attract eco-conscious consumers' },
    { icon: Sparkles, title: 'Brand Differentiation', desc: 'Stand out in the market with genuinely sustainable packaging solutions' },
    { icon: Shield, title: 'Compliance Ready', desc: 'Meet environmental regulations and industry standards' },
  ];

  const processSteps = [
    { number: '01', icon: Leaf, title: 'Sustainability Assessment', desc: 'Evaluate your current packaging and identify improvement opportunities' },
    { number: '02', icon: Layers, title: 'Material Selection', desc: 'Choose from our range of eco-friendly materials' },
    { number: '03', icon: Palette, title: 'Design Optimization', desc: 'Design packaging that minimizes waste while maximizing protection' },
    { number: '04', icon: Printer, title: 'Sustainable Production', desc: 'Manufacture using environmentally responsible processes' },
    { number: '05', icon: Award, title: 'Certification & Delivery', desc: 'Provide sustainability certificates and deliver your eco-packaging' },
  ];

  // Applications with images
  const applications = [
    { icon: ShoppingCart, title: 'E-commerce Shipping', desc: 'Sustainable shipping boxes and mailers', image: ecommerceShippingImg || fallbackImage, color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, title: 'Food & Beverage', desc: 'Compostable food containers and wraps', image: foodBeverageImg || fallbackImage, color: 'from-purple-500 to-pink-500' },
    { icon: Sparkles, title: 'Cosmetics & Personal Care', desc: 'Eco-friendly beauty product packaging', image: cosmeticsImg || fallbackImage, color: 'from-green-500 to-emerald-500' },
    { icon: ShoppingBag, title: 'Retail Products', desc: 'Sustainable retail packaging solutions', image: retailProductsImg || fallbackImage, color: 'from-orange-500 to-red-500' },
    { icon: Gift, title: 'Corporate Gifts', desc: 'Eco-friendly gift packaging', image: corporateGiftsImg || fallbackImage, color: 'from-teal-500 to-cyan-500' },
    { icon: Calendar, title: 'Event Materials', desc: 'Sustainable event and conference materials', image: eventMaterialsImg || fallbackImage, color: 'from-pink-500 to-rose-500' },
  ];

  // Related Services
  const relatedServices = [
    { icon: Box, title: 'Custom Boxes', description: 'Tailored packaging boxes for any product, any size', path: '/services/custom-boxes', image: customBoxesImg, color: 'from-teal-500 to-cyan-500', features: ['Custom Sizes', 'Premium Materials', 'Bulk Orders'] },
    { icon: ShoppingBag, title: 'Bags & Pouches', description: 'Custom bags and pouches for retail and food products', path: '/services/bags-pouches', image: bagsPouchesImg, color: 'from-yellow-500 to-orange-500', features: ['Eco-Friendly', 'Custom Printing', 'Various Sizes'] },
    { icon: Tag, title: 'Labels & Stickers', description: 'Eye-catching labels and stickers for branding and information', path: '/services/labels-stickers', image: labelsStickersImg, color: 'from-pink-500 to-rose-500', features: ['Custom Shapes', 'Waterproof', 'Premium Quality'] },
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
            src={ecoFriendlyImg} 
            alt="Eco-Friendly Packaging"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Eco-Friendly Packaging Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Eco-Friendly <span className="text-yellow-500">Packaging</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Sustainable packaging solutions that care for the planet
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
                  <div className="text-3xl font-bold text-white">PKR 12,000</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Turnaround</div>
                  <div className="text-3xl font-bold text-white">10-15 days</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Sustainable</div>
                  <div className="text-3xl font-bold text-white">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Eco-Friendly Packaging Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                About Eco-Friendly Packaging
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">Eco-Friendly Packaging</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As environmental consciousness grows, businesses need packaging solutions that minimize environmental impact without compromising quality or functionality. Our eco-friendly packaging options include recycled cardboard, biodegradable plastics, plant-based materials, and compostable alternatives.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We help you reduce your carbon footprint while maintaining the protective and marketing functions of traditional packaging. All materials are sourced from sustainable suppliers and can be customized to meet your specific requirements.
              </p>
              <ul className="space-y-3">
                {[
                  '100% recycled and recyclable materials',
                  'Biodegradable and compostable options',
                  'Plant-based and renewable materials',
                  'Reduced carbon footprint',
                  'Certified sustainable sourcing',
                  'Custom printing with eco-friendly inks'
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
                src={ecoFriendlyImg} 
                alt="Eco-Friendly Packaging Process"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Recycle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">100%</div>
                  <div className="text-sm text-gray-600">Recyclable</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">10-15d</div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Leaf className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">Green</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Eco-Friendly Packaging Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-yellow-500">Eco-Friendly Packaging</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience sustainable packaging that doesn't compromise on quality
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
              Simple, transparent, and sustainable process from start to finish
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
              Discover the various ways our <span className="text-red-600">Eco-Friendly Packaging</span> can be utilized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From e-commerce shipping to event materials, we've got you covered
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
            Ready to Go Green with Eco-Friendly Packaging?
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

export default EcoFriendly;