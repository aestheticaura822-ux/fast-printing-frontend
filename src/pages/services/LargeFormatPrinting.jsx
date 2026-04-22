import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Upload, Eye, Users,
  Scissors, Truck, Star, Shield,
  Calendar, Layers, FileText, Image, 
  Gift, CreditCard, MapPin, Maximize,
  Sun, Building, Car, Home, ShoppingBag,
  ChevronRight, Layout, Briefcase, Shirt
} from 'lucide-react';

// Import images from assets folder
import largeFormatImg from '../../assets/largeformat.jpg';
import digitalPrintingImg from '../../assets/digialprinting.jpg';
import promotionalProductsImg from '../../assets/hero2.jpg';
import screenPrintingImg from '../../assets/screenprinting.jpg';

// Import application images
import outdoorBannersImg from '../../assets/banner.jpg';
import tradeShowImg from '../../assets/trade.jpg';
import retailSignageImg from '../../assets/retail.jpg';
import vehicleWrapsImg from '../../assets/vehicle.jpg';
import wallGraphicsImg from '../../assets/wall.jpg';
import windowGraphicsImg from '../../assets/window.jpg';

const LargeFormatPrinting = () => {
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
    { icon: Maximize, title: 'Maximum Impact', desc: 'Large-scale graphics that grab attention and make your message impossible to miss' },
    { icon: Layers, title: 'Versatile Applications', desc: 'Perfect for indoor displays, outdoor advertising, events, and more' },
    { icon: Shield, title: 'Weather Resistant', desc: 'UV-resistant inks and durable materials ensure your graphics last' },
  ];

  const processSteps = [
    { number: '01', icon: Users, title: 'Consultation', desc: 'Discuss size, material, and application requirements' },
    { number: '02', icon: Upload, title: 'File Preparation', desc: 'Prepare high-resolution files optimized for large format' },
    { number: '03', icon: Eye, title: 'Proof Approval', desc: 'Review scaled digital proof before production' },
    { number: '04', icon: Printer, title: 'Production', desc: 'Print using professional wide-format equipment' },
    { number: '05', icon: Scissors, title: 'Finishing & Installation', desc: 'Apply finishing and optional installation services' },
  ];

  // Applications with images
  const applications = [
    { icon: MapPin, title: 'Outdoor Banners', desc: 'Weather-resistant banners for outdoor advertising', image: outdoorBannersImg, color: 'from-blue-500 to-cyan-500' },
    { icon: Building, title: 'Trade Show Displays', desc: 'Eye-catching displays for exhibitions and events', image: tradeShowImg, color: 'from-purple-500 to-pink-500' },
    { icon: ShoppingBag, title: 'Retail Signage', desc: 'In-store graphics that drive sales', image: retailSignageImg, color: 'from-green-500 to-emerald-500' },
    { icon: Car, title: 'Vehicle Wraps', desc: 'Mobile advertising with full vehicle wraps', image: vehicleWrapsImg, color: 'from-orange-500 to-red-500' },
    { icon: Home, title: 'Wall Graphics', desc: 'Transform any wall into a statement piece', image: wallGraphicsImg, color: 'from-teal-500 to-cyan-500' },
    { icon: Sun, title: 'Window Graphics', desc: 'Privacy and branding for glass surfaces', image: windowGraphicsImg, color: 'from-pink-500 to-rose-500' },
  ];

  // Related Services
  const relatedServices = [
    { icon: Printer, title: 'Digital Printing', description: 'Fast, flexible printing perfect for short runs and quick turnarounds', path: '/services/digital-printing', image: digitalPrintingImg, color: 'from-blue-500 to-cyan-500', features: ['Quick Turnaround', 'No Minimum Order', 'Vibrant Colors'] },
    { icon: Gift, title: 'Promotional Products', description: 'Branded merchandise that keeps your brand in customers\' hands', path: '/services/promotional-products', image: promotionalProductsImg, color: 'from-yellow-500 to-amber-500', features: ['Custom Merch', 'Bulk Orders', 'Unique Items'] },
    { icon: Shirt, title: 'Screen Printing', description: 'Vibrant, durable prints on various materials and surfaces', path: '/services/screen-printing', image: screenPrintingImg, color: 'from-orange-500 to-red-500', features: ['Bold Designs', 'Durable Results', 'Multiple Materials'] },
  ];

  // Service Card Component
  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
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
            src={largeFormatImg} 
            alt="Large Format Printing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Maximize className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Large Format Printing Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Large Format <span className="text-yellow-500">Printing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Banners, posters, and signage that make a big impact
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
                  <div className="text-3xl font-bold text-white">PKR 3,000</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Turnaround</div>
                  <div className="text-3xl font-bold text-white">2-5 days</div>
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

      {/* About Large Format Printing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                About Large Format Printing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">Large Format Printing</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our large format printing services deliver stunning visual impact for projects of any size. 
                Using advanced wide-format printers, we can produce high-resolution graphics up to 16 feet 
                wide and any length.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you need outdoor banners, indoor posters, trade show displays, or vehicle wraps, 
                our large format printing delivers vibrant colors and sharp details. We offer a variety of 
                materials including vinyl, fabric, canvas, and specialty substrates.
              </p>
              <ul className="space-y-3">
                {[
                  'Sizes up to 16 feet wide, unlimited length',
                  'UV-resistant inks for outdoor durability',
                  'Multiple material options',
                  'High-resolution output (up to 1440 dpi)',
                  'Various finishing options available',
                  'Fast turnaround on most projects'
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
                src={largeFormatImg} 
                alt="Large Format Printing Process"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Maximize className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">16ft</div>
                  <div className="text-sm text-gray-600">Max Width</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">2-5d</div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">1440</div>
                  <div className="text-sm text-gray-600">DPI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Large Format Printing Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-yellow-500">Large Format Printing</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional large format printing that delivers exceptional results
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
              Discover the various ways our <span className="text-red-600">Large Format Printing</span> can be utilized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From outdoor banners to vehicle wraps, we've got you covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <ApplicationCard key={index} app={app} index={index} />
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
            Ready to Get Started with Large Format Printing?
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

export default LargeFormatPrinting;