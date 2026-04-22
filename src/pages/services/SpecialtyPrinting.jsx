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
  Rocket, RefreshCw, Building, Gem, Feather, Megaphone, Newspaper,
  Phone, Mail, MapPin, Coffee, Shirt, Watch, Pen, Stamp, Trophy, Crown,
  Fingerprint
} from 'lucide-react';

// Import images from assets folder
import specialtyPrintingImg from '../../assets/specialprinting.jpg';
import offsetPrintingImg from '../../assets/offsetprinting.jpg';
import businessPrintingImg from '../../assets/business-card1.jpg';
import packagingDesignImg from '../../assets/hero1.jpg';

// Import application images
import premiumBusinessCardsImg from '../../assets/specialcards.jpg';
import luxuryInvitationsImg from '../../assets/specialevents.jpg';
import highEndPackagingImg from '../../assets/custombox.jpg';
import certificatesAwardsImg from '../../assets/specialcerti.jpg';
import specialEventMaterialsImg from '../../assets/specialhigh.jpg';
import executiveStationeryImg from '../../assets/marksales.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const SpecialtyPrinting = () => {
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
    { icon: Crown, title: 'Premium Perception', desc: 'Special finishes signal quality and attention to detail' },
    { icon: Fingerprint, title: 'Tactile Experience', desc: 'Engage multiple senses for memorable impressions' },
    { icon: Target, title: 'Differentiation', desc: 'Stand out from standard printed materials' },
  ];

  const processSteps = [
    { number: '01', icon: Palette, title: 'Technique Selection', desc: 'Discuss desired effects and recommend techniques' },
    { number: '02', icon: PenTool, title: 'Design Preparation', desc: 'Prepare artwork with special finish specifications' },
    { number: '03', icon: Eye, title: 'Sample Production', desc: 'Create samples showing the special finishes' },
    { number: '04', icon: CheckCircle, title: 'Approval', desc: 'Review and approve samples before full production' },
    { number: '05', icon: Printer, title: 'Specialty Production', desc: 'Apply special finishes with precision' },
  ];

  // Specialty Techniques
  const specialtyTechniques = [
    { icon: Scissors, title: 'Die-Cutting', desc: 'Custom shapes and intricate cutouts', color: 'from-blue-500 to-cyan-500' },
    { icon: Layers, title: 'Embossing & Debossing', desc: 'Raised or recessed dimensional effects', color: 'from-purple-500 to-pink-500' },
    { icon: Gem, title: 'Foil Stamping', desc: 'Metallic accents in gold, silver, and colors', color: 'from-yellow-500 to-orange-500' },
    { icon: Droplet, title: 'Spot UV Coating', desc: 'Selective glossy highlights', color: 'from-green-500 to-emerald-500' },
    { icon: Printer, title: 'Letterpress', desc: 'Deep impression printing for tactile quality', color: 'from-teal-500 to-cyan-500' },
    { icon: Sparkles, title: 'Combination Finishes', desc: 'Multiple techniques for unique effects', color: 'from-pink-500 to-rose-500' },
  ];

  // Applications with images
  const applications = [
    { icon: CreditCard, title: 'Premium Business Cards', desc: 'Luxury business cards that impress', image: premiumBusinessCardsImg || fallbackImage, color: 'from-blue-500 to-cyan-500' },
    { icon: Gift, title: 'Luxury Invitations', desc: 'Elegant invitations for special events', image: luxuryInvitationsImg || fallbackImage, color: 'from-purple-500 to-pink-500' },
    { icon: Package, title: 'High-End Packaging', desc: 'Premium packaging that elevates products', image: highEndPackagingImg || fallbackImage, color: 'from-green-500 to-emerald-500' },
    { icon: Trophy, title: 'Certificates & Awards', desc: 'Distinctive certificates and plaques', image: certificatesAwardsImg || fallbackImage, color: 'from-orange-500 to-red-500' },
    { icon: Calendar, title: 'Special Event Materials', desc: 'Memorable event programs and materials', image: specialEventMaterialsImg || fallbackImage, color: 'from-teal-500 to-cyan-500' },
    { icon: Briefcase, title: 'Executive Stationery', desc: 'Premium letterheads and envelopes', image: executiveStationeryImg || fallbackImage, color: 'from-pink-500 to-rose-500' },
  ];

  // Related Services
  const relatedServices = [
    { icon: Layout, title: 'Offset Printing', description: 'High-volume printing with exceptional quality and cost-effectiveness', path: '/services/offset-printing', image: offsetPrintingImg, color: 'from-purple-500 to-pink-500', features: ['Bulk Orders', 'Cost Effective', 'Consistent Quality'] },
    { icon: Briefcase, title: 'Business Printing', description: 'Essential business stationery that makes a professional impression', path: '/services/business-printing', image: businessPrintingImg, color: 'from-gray-600 to-gray-800', features: ['Business Cards', 'Letterheads', 'Envelopes'] },
    { icon: Box, title: 'Packaging Design', description: 'Stunning packaging designs that sell your products', path: '/services/packaging-design', image: packagingDesignImg, color: 'from-blue-500 to-cyan-500', features: ['3D Mockups', 'Print Ready', 'Market Research'] },
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

  // Technique Card Component
  const TechniqueCard = ({ technique }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center reveal">
      <div className={`w-16 h-16 bg-gradient-to-r ${technique.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
        <technique.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{technique.title}</h3>
      <p className="text-gray-600 text-sm">{technique.desc}</p>
    </div>
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={specialtyPrintingImg} 
            alt="Specialty Printing"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Specialty Printing Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Specialty <span className="text-yellow-500">Printing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Premium finishing techniques that make your prints extraordinary
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
                  <div className="text-3xl font-bold text-white">PKR 20,000</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Turnaround</div>
                  <div className="text-3xl font-bold text-white">7-14 days</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-400">Premium</div>
                  <div className="text-3xl font-bold text-white">Finishes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Specialty Printing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                About Specialty Printing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">Specialty Printing</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Specialty printing techniques add tactile and visual elements that transform ordinary printed materials into memorable experiences. Our specialty finishing services include die-cutting for custom shapes, embossing and debossing for dimensional effects, foil stamping for metallic accents, spot UV for selective glossy highlights, and more.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These techniques can be combined to create truly unique pieces that command attention and convey quality. Perfect for business cards, invitations, packaging, and high-end marketing materials.
              </p>
              <ul className="space-y-3">
                {[
                  'Die-cutting for custom shapes',
                  'Embossing and debossing',
                  'Foil stamping (gold, silver, colors)',
                  'Spot UV coating',
                  'Letterpress printing',
                  'Combination finishes'
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
                src={specialtyPrintingImg} 
                alt="Specialty Printing Process"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Sparkles className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">Premium</div>
                  <div className="text-sm text-gray-600">Finishes</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">7-14d</div>
                  <div className="text-sm text-gray-600">Turnaround</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700">Luxury</div>
                  <div className="text-sm text-gray-600">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Techniques Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Specialty Techniques
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Specialty Finishes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium finishing techniques to elevate your printed materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyTechniques.map((technique, index) => (
              <TechniqueCard key={index} technique={technique} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Specialty Printing Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="text-yellow-500">Specialty Printing</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience premium finishes that make your materials stand out
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple process to add premium finishes to your prints
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover the various ways our <span className="text-red-600">Specialty Printing</span> can be utilized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From premium business cards to executive stationery, we've got you covered
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Related Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Related <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our other printing and design solutions
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
            Ready to Get Started with Specialty Printing?
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

export default SpecialtyPrinting;