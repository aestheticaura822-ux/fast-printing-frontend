import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Eye, Truck, Star, Shield,
  Layers, Gift, CreditCard, Package, Box,
  ChevronRight, Layout, Briefcase, Palette,
  Award, Heart, Leaf, Sparkles, TrendingUp, Users,
  Phone, Mail, MapPin, Building, GraduationCap, Stethoscope,
  Utensils, ShoppingCart, Calendar, Laptop, Shirt, Activity,
  BarChart, Target, Globe, ThumbsUp, Headphones, Crown
} from 'lucide-react';

// Import images from assets folder
import schoolsImg from '../assets/notebook.jpg';
import healthcareImg from '../assets/packcosmetics.jpg';
import restaurantsImg from '../assets/foodproduct.jpg';
import retailImg from '../assets/custombox.jpg';
import corporateImg from '../assets/business-card1.jpg';
import eventsImg from '../assets/bluecard.jpg';
import technologyImg from '../assets/banner.jpg';
import fashionImg from '../assets/shopping.jpg';
import beforeStateImg from '../assets/before.jpg';
import afterStateImg from '../assets/specialcerti.jpg';

const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const Industries = () => {
  const [ setActiveIndustry] = useState(null);

  // Scroll reveal animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
      .reveal.active { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);

    const revealElements = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
          el.classList.add('active');
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

  const industries = [
    { 
      id: 'education',
      icon: GraduationCap, 
      title: 'Schools & Education', 
      subtitle: 'Empowering education through quality printing',
      description: 'Complete printing solutions for educational institutions - from notebooks to certificates',
      projects: '45 projects completed',
      path: '/industries/education',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      image: schoolsImg
    },
    { 
      id: 'healthcare',
      icon: Stethoscope, 
      title: 'Healthcare & Medical', 
      subtitle: 'Compliant, professional healthcare printing',
      description: 'Medical-grade printing and packaging that meets healthcare standards',
      projects: '32 projects completed',
      path: '/industries/healthcare',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      image: healthcareImg
    },
    { 
      id: 'restaurants',
      icon: Utensils, 
      title: 'Restaurants & Food', 
      subtitle: 'Appetizing menus and food-safe packaging',
      description: 'Food-safe materials and mouth-watering designs for the F&B industry',
      projects: '78 projects completed',
      path: '/industries/restaurants',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      image: restaurantsImg
    },
    { 
      id: 'retail',
      icon: ShoppingCart, 
      title: 'Retail & E-commerce', 
      subtitle: 'Packaging that sells and protects',
      description: 'Eye-catching retail packaging and shipping solutions that enhance brand value',
      projects: '120 projects completed',
      path: '/industries/retail',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      image: retailImg
    },
    { 
      id: 'corporate',
      icon: Building, 
      title: 'Corporate & Business', 
      subtitle: 'Professional printing for professional businesses',
      description: 'Corporate stationery, marketing materials, and branded items for businesses',
      projects: '156 projects completed',
      path: '/industries/corporate',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50',
      image: corporateImg
    },
    { 
      id: 'events',
      icon: Calendar, 
      title: 'Events & Hospitality', 
      subtitle: 'Making every event memorable',
      description: 'Event materials, banners, and hospitality printing solutions',
      projects: '89 projects completed',
      path: '/industries/events',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      image: eventsImg
    },
    { 
      id: 'technology',
      icon: Laptop, 
      title: 'Technology & Startups', 
      subtitle: 'Modern printing for innovative companies',
      description: 'Fast, flexible printing solutions that keep pace with tech companies',
      projects: '67 projects completed',
      path: '/industries/technology',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      image: technologyImg
    },
    { 
      id: 'fashion',
      icon: Shirt, 
      title: 'Fashion & Apparel', 
      subtitle: 'Packaging as stylish as your products',
      description: 'Premium packaging and labels that complement fashion brands',
      projects: '54 projects completed',
      path: '/industries/fashion',
      color: 'from-rose-500 to-red-500',
      bgColor: 'bg-rose-50',
      image: fashionImg
    }
  ];

  const whyIndustryExpertise = [
    { icon: Shield, title: 'Compliance Knowledge', desc: 'We understand industry-specific regulations and standards, from food-safe materials to medical compliance requirements.' },
    { icon: Award, title: 'Proven Solutions', desc: 'Years of experience in each industry means we know what works and can recommend the best solutions for your needs.' },
    { icon: TrendingUp, title: 'Industry Trends', desc: 'We stay updated on trends and innovations in your industry, ensuring your materials are modern and effective.' },
    { icon: Layers, title: 'Specialized Materials', desc: 'Access to industry-specific materials and finishes that meet your sector\'s unique requirements.' }
  ];

  // Industry Card Component
  const IndustryCard = ({ industry, index }) => (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal"
      style={{ transitionDelay: `${index * 0.05}s` }}
      onMouseEnter={() => setActiveIndustry(industry.id)}
      onMouseLeave={() => setActiveIndustry(null)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={industry.image} 
          alt={industry.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-70 transition duration-300`}></div>
        <div className="absolute bottom-4 left-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center shadow-lg`}>
            <industry.icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
          {industry.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{industry.subtitle}</p>
        <p className="text-gray-500 text-xs mb-3">{industry.description}</p>
        <div className="text-red-600 text-xs font-semibold mb-4">{industry.projects}</div>
        <Link to={industry.path}>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
            Explore <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );

  // Stats Counter Component
  const StatCard = ({ value, label }) => (
    <div className="text-center reveal">
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
        <Icon className="w-8 h-8 text-yellow-400" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2023/01/12/146300-788789702_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-semibold">Industries We Serve</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Specialized Solutions for 
              <span className="text-yellow-500 block">Every Industry</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Specialized printing and packaging solutions tailored to your industry's unique needs. 
              We understand the challenges and opportunities in your sector.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500">8+</div>
                <div className="text-sm text-gray-300">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500">500+</div>
                <div className="text-sm text-gray-300">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500">15+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500">2000+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Industries We <span className="text-red-600">Serve</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored printing and packaging solutions for your specific industry needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={index} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              <span className="text-red-600">Results</span> That Speak
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses across industries achieve their goals with our printing and packaging solutions
            </p>
          </div>

          {/* Before/After Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 reveal">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">Retail Brand Transformation</div>
              <h3 className="text-2xl font-bold text-gray-800">From Generic to Premium</h3>
              <p className="text-gray-600">Upgraded from generic packaging to custom-designed boxes with premium finishes, resulting in 45% increase in customer satisfaction.</p>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-green-600 font-semibold">45% satisfaction increase</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <p className="text-sm text-gray-500 mb-2">Before state</p>
                  <img src={beforeStateImg} alt="Before" className="rounded-xl w-full h-32 object-cover" onError={(e) => { e.target.src = fallbackImage; }} />
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <p className="text-sm text-gray-500 mb-2">After state</p>
                  <img src={afterStateImg} alt="After" className="rounded-xl w-full h-32 object-cover" onError={(e) => { e.target.src = fallbackImage; }} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center reveal">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <p className="text-sm text-gray-500 mb-2">Before implementation</p>
                  <img src={beforeStateImg} alt="Before" className="rounded-xl w-full h-32 object-cover" onError={(e) => { e.target.src = fallbackImage; }} />
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <p className="text-sm text-gray-500 mb-2">After implementation</p>
                  <img src={afterStateImg} alt="After" className="rounded-xl w-full h-32 object-cover" onError={(e) => { e.target.src = fallbackImage; }} />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">Educational Institution Rebrand</div>
              <h3 className="text-2xl font-bold text-gray-800">Consistent Branding Across Campuses</h3>
              <p className="text-gray-600">Streamlined printing process across 15 campuses with consistent branding, saving 30% on costs while improving quality.</p>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <span className="text-green-600 font-semibold">30% cost reduction</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200">
            <div className="text-center reveal">
              <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">500+</div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>
            <div className="text-center reveal">
              <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">99%</div>
              <div className="text-sm text-gray-500">Quality Rate</div>
            </div>
            <div className="text-center reveal">
              <CheckCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">2000+</div>
              <div className="text-sm text-gray-500">Projects Done</div>
            </div>
            <div className="text-center reveal">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">24h</div>
              <div className="text-sm text-gray-500">Rush Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Why Industry <span className="text-yellow-500">Expertise Matters</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our deep understanding of your industry ensures the best results for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyIndustryExpertise.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 reveal">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 reveal">
              Let's Discuss Your <span className="text-red-600">Industry Needs</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 reveal">
              Get expert advice on the best printing and packaging solutions for your specific industry
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                  Request Free Quote <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
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

export default Industries;