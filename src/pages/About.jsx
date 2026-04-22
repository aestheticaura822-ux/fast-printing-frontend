import React, { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Leaf,
  TrendingUp,
  Star,
  CheckCircle,
  Printer,
  Package,
  Palette,
  Briefcase,
  Zap,
  Target,
  Eye,
  Globe,
  ThumbsUp,
  Truck,
  Headphones,
  Camera,
  Building2,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Layers,
  Ruler,
  Droplet,
  Scissors,
  Box,
  Gem
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import only custom packaging image from assets
import customPackagingImg from '../assets/custom-packaging.jpg';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
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
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  const toggleHeroVideo = () => {
    if (heroVideoRef.current) {
      if (isVideoPlaying) {
        heroVideoRef.current.pause();
      } else {
        heroVideoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const stats = [
    { value: 15, suffix: '+', label: 'Years Experience', icon: Clock },
    { value: 500, suffix: '+', label: 'Happy Clients', icon: Users },
    { value: 10000, suffix: '+', label: 'Projects Completed', icon: Award },
    { value: 99, suffix: '%', label: 'Satisfaction Rate', icon: Star },
  ];

  const coreValues = [
    { icon: Award, title: 'Quality First', desc: 'Never compromise on quality. Every project gets meticulous attention.', color: 'from-red-600 to-red-700' },
    { icon: Zap, title: 'Speed & Reliability', desc: 'Fast turnaround times without sacrificing quality.', color: 'from-yellow-500 to-yellow-600' },
    { icon: Heart, title: 'Customer-Centric', desc: 'Your success is our success. We exceed your expectations.', color: 'from-rose-500 to-rose-600' },
    { icon: Leaf, title: 'Sustainability', desc: 'Eco-friendly practices using recycled materials.', color: 'from-green-500 to-green-600' },
  ];

  const services = [
    { 
      icon: Printer, 
      title: 'Commercial Printing', 
      subtitle: 'Premium Quality Prints',
      items: ['Business Cards', 'Brochures & Flyers', 'Catalogs & Booklets', 'Posters & Banners'],
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?w=800&h=500&fit=crop',
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50'
    },
    { 
      icon: Package, 
      title: 'Custom Packaging', 
      subtitle: 'Eco-Friendly Solutions',
      items: ['Product Boxes', 'Food Packaging', 'E-commerce Boxes', 'Labels & Stickers'],
      image: customPackagingImg,  // Local image from assets
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    { 
      icon: Palette, 
      title: 'Design Services', 
      subtitle: 'Creative Excellence',
      items: ['Brand Identity', 'Logo Design', 'Packaging Design', 'Creative Solutions'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=800&h=500&fit=crop',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
  ];

  const facilities = [
    { icon: Layers, title: 'Digital Printing', desc: 'High-speed digital presses for quick turnaround' },
    { icon: Ruler, title: 'Offset Printing', desc: 'Precision offset printing for bulk orders' },
    { icon: Scissors, title: 'Die-Cutting', desc: 'Custom shapes and intricate designs' },
    { icon: Droplet, title: 'UV Coating', desc: 'Premium finish and protection' },
    { icon: Box, title: 'Lamination', desc: 'Durable and professional finish' },
    { icon: Gem, title: 'Quality Control', desc: 'Rigorous quality checks at every stage' },
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/1569314/pexels-photo-1569314.jpeg?w=1920&h=1080&fit=crop"
          >
            <source src="https://cdn.pixabay.com/video/2023/03/01/152728-803732848_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>

        {/* Video Control Button */}
        <button
          onClick={toggleHeroVideo}
          className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          {isVideoPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </button>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold mb-4 animate-pulse">
              Pakistan's Leading Print Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Crafting Quality 
              <span className="text-yellow-500 block mt-2">Since 2008</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From a small local shop to Pakistan's trusted printing and packaging partner, 
              our journey is defined by excellence, innovation, and unwavering commitment to quality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all">
                  View Our Work
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}{stat.suffix}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-red-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="font-bold text-red-600">Fast Printing & Packaging</span> was founded in 2008 with a simple mission: 
                  to provide businesses across Pakistan with high-quality, affordable printing solutions.
                </p>
                <p>
                  What started as a small print shop in Lahore has grown into a comprehensive printing and packaging 
                  company serving clients nationwide. We've helped over 500 businesses elevate their brand presence.
                </p>
                <p>
                  Today, we operate state-of-the-art equipment, offer custom packaging design, and provide complete 
                  brand identity services.
                </p>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Link to="/contact">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                    Get Free Quote
                  </button>
                </Link>
                <Link to="/portfolio">
                  <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all">
                    View Our Work
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 reveal">
              <img 
                src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?w=600&h=400&fit=crop"
                alt="Printing press"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?w=600&h=400&fit=crop"
                alt="Printing facility"
                className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/669607/pexels-photo-669607.jpeg?w=600&h=400&fit=crop"
                alt="Printing machine"
                className="rounded-2xl shadow-xl w-full h-48 object-cover"
              />
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white h-48 flex flex-col justify-center">
                <Building2 className="w-10 h-10 text-yellow-400 mb-2" />
                <p className="font-bold text-lg">Modern Facility</p>
                <p className="text-sm text-white/80">State-of-the-art equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Redesigned with Images */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What <span className="text-red-600">We Do</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive printing and packaging solutions under one roof
            </p>
          </div>
          
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center reveal ${index === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${index === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-96 object-cover transform hover:scale-105 transition duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`}></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-10 h-10 text-white" />
                      <div>
                        <p className="text-white/80 text-sm">{service.subtitle}</p>
                        <p className="text-white font-bold text-xl">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={`${index === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`inline-block p-3 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We provide top-quality {service.title.toLowerCase()} solutions tailored to your business needs. 
                    Using the latest technology and premium materials, we ensure every project exceeds expectations.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/services">
                    <button className="text-red-600 font-semibold flex items-center gap-2 group hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Facilities Section with Background Image */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?w=1920&h=800&fit=crop"
            alt="Modern Printing Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 to-red-800/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold mb-4">
              State of the Art
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Modern <span className="text-yellow-500">Facilities</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Equipped with the latest printing technology for superior quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2 reveal border border-white/20"
              >
                <facility.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-gray-300 text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-flex items-center gap-2">
                Schedule a Facility Tour <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              These principles guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 reveal text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Get a free quote within 24 hours
          </p>
          <Link to="/contact">
            <button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-flex items-center gap-2">
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;