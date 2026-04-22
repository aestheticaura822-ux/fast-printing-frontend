import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Upload, Eye, 
  Scissors, Truck, Star,
  Calendar, Layers, FileText, Image, 
  Gift, CreditCard,
  ChevronRight,
  Layout, Newspaper, Briefcase, Package, Tag, ShoppingBag, Leaf,
  Palette, PenTool, Box, Megaphone, Sparkles
} from 'lucide-react';

// Import images from assets folder
import digitalPrintingImg from '../../assets/digialprinting.jpg';
import offsetPrintingImg from '../../assets/offsetprinting.jpg';
import largeFormatImg from '../../assets/largeformat.jpg';
import customBoxesImg from '../../assets/custombox.jpg';
import labelsStickersImg from '../../assets/holo-sticker.jpg';
import brandIdentityImg from '../../assets/shop2.jpg';
import businessPrintingImg from '../../assets/business-card1.jpg';

// Import application images
import businessCardImg from '../../assets/business-card1.jpg';
import flyersImg from '../../assets/digialprinting.jpg';
import postcardsImg from '../../assets/largeformat.jpg';
import marketingImg from '../../assets/promotional2.jpg';
import eventMaterialsImg from '../../assets/scroll-wedding-card.jpg';
import variableDataImg from '../../assets/retail-packaging.jpg';

const DigitalPrinting = () => {
  // Scroll reveal animation - FIXED
  useEffect(() => {
    // Add CSS for reveal animation
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
    revealElements(); // Trigger once on load
    
    return () => {
      window.removeEventListener('scroll', revealElements);
      document.head.removeChild(style);
    };
  }, []);

  const features = [
    { icon: Printer, title: 'Superior Quality', desc: 'State-of-the-art digital presses ensure exceptional results with sharp text and vibrant colors every time' },
    { icon: Zap, title: 'Fast Delivery', desc: 'No plate-making required means we can start printing immediately and deliver in as little as 24 hours' },
    { icon: DollarSign, title: 'Cost-Effective', desc: 'Perfect for short runs without the setup costs associated with traditional printing methods' },
  ];

  const processSteps = [
    { number: '01', icon: Upload, title: 'File Submission', desc: 'Upload your print-ready files or work with our design team to create them' },
    { number: '02', icon: Eye, title: 'Proof Approval', desc: 'Review and approve digital proofs to ensure everything looks perfect' },
    { number: '03', icon: Printer, title: 'Digital Printing', desc: 'Your project is printed using advanced digital press technology' },
    { number: '04', icon: Scissors, title: 'Finishing', desc: 'Cutting, folding, and any additional finishing touches are applied' },
    { number: '05', icon: Truck, title: 'Quality Check & Delivery', desc: 'Final inspection before secure packaging and fast delivery' },
  ];

  // Applications with images
  const applications = [
    { icon: CreditCard, title: 'Business Cards', desc: 'Professional business cards that leave lasting impressions', image: businessCardImg, color: 'from-blue-500 to-cyan-500' },
    { icon: FileText, title: 'Flyers & Brochures', desc: 'Eye-catching marketing materials for your business', image: flyersImg, color: 'from-purple-500 to-pink-500' },
    { icon: Image, title: 'Postcards', desc: 'Beautiful postcards for promotions and greetings', image: postcardsImg, color: 'from-green-500 to-emerald-500' },
    { icon: Gift, title: 'Marketing Materials', desc: 'Custom marketing collateral for any campaign', image: marketingImg, color: 'from-orange-500 to-red-500' },
    { icon: Calendar, title: 'Event Materials', desc: 'Invitations, programs, and event signage', image: eventMaterialsImg, color: 'from-teal-500 to-cyan-500' },
    { icon: Layers, title: 'Variable Data Printing', desc: 'Personalized prints with variable text and images', image: variableDataImg, color: 'from-pink-500 to-rose-500' },
  ];

  // Related Services
  const relatedServices = [
    { icon: Layout, title: 'Offset Printing', description: 'High-volume printing with exceptional quality and cost-effectiveness', path: '/services/offset-printing', image: offsetPrintingImg, color: 'from-purple-500 to-pink-500', features: ['Bulk Orders', 'Cost Effective', 'Consistent Quality'] },
    { icon: Newspaper, title: 'Large Format Printing', description: 'Banners, posters, and signage that make a big impact', path: '/services/large-format', image: largeFormatImg, color: 'from-green-500 to-emerald-500', features: ['Billboards', 'Banners', 'Exhibition Displays'] },
    { icon: Briefcase, title: 'Business Printing', description: 'Essential business stationery that makes a professional impression', path: '/services/business-printing', image: businessPrintingImg, color: 'from-gray-600 to-gray-800', features: ['Business Cards', 'Letterheads', 'Envelopes'] },
    { icon: Package, title: 'Custom Boxes', description: 'Tailored packaging boxes for any product, any size', path: '/services/custom-boxes', image: customBoxesImg, color: 'from-teal-500 to-cyan-500', features: ['Custom Sizes', 'Premium Materials', 'Bulk Orders'] },
    { icon: Tag, title: 'Labels & Stickers', description: 'Eye-catching labels and stickers for branding', path: '/services/labels-stickers', image: labelsStickersImg, color: 'from-pink-500 to-rose-500', features: ['Custom Shapes', 'Waterproof', 'Premium Quality'] },
    { icon: Palette, title: 'Brand Identity', description: 'Complete brand development from concept to implementation', path: '/services/brand-identity', image: brandIdentityImg, color: 'from-purple-500 to-indigo-500', features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'] },
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

  // Application Card Component (with images)
  const ApplicationCard = ({ app }) => (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
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
            src={digitalPrintingImg} 
            alt="Digital Printing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Printer className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Digital Printing Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Digital <span className="text-yellow-500">Printing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Fast, flexible printing perfect for short runs and quick turnarounds
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
                  <div className="text-3xl font-bold text-white">PKR 2,000</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Turnaround</div>
                  <div className="text-3xl font-bold text-white">1-3 days</div>
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

      {/* About Digital Printing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                About Digital Printing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">Digital Printing</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our digital printing service offers exceptional quality and flexibility for businesses that need 
                quick turnarounds without compromising on quality. Using state-of-the-art digital presses, we can 
                produce vibrant, high-resolution prints on a variety of materials.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Digital printing is ideal for projects that require variable data printing, short runs, or rapid 
                production times. Unlike traditional offset printing, digital printing doesn't require plates, 
                making it cost-effective for smaller quantities and allowing for easy customization of each printed piece.
              </p>
              <ul className="space-y-3">
                {[
                  'High-quality output with vibrant colors',
                  'Fast turnaround times (24-48 hours available)',
                  'No minimum order quantities',
                  'Variable data printing capabilities',
                  'Cost-effective for short runs',
                  'Wide range of paper stocks and finishes'
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
                src={digitalPrintingImg} 
                alt="Digital Printing Process"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Printer className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">500+</div>
                  <div className="text-sm text-gray-600">Projects Monthly</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">24h</div>
                  <div className="text-sm text-gray-600">Rush Delivery</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Digital Printing Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-yellow-500">Digital Printing</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our premium digital printing services
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

      {/* Applications Section - With Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover the various ways our <span className="text-red-600">Digital Printing</span> can be utilized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From business cards to marketing materials, we've got you covered
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Ready to Get Started with Digital Printing?
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

export default DigitalPrinting;