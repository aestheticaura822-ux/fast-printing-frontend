import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Printer, Layout, Shirt, Newspaper, Tag, Leaf, ArrowRight, Zap, TrendingUp } from 'lucide-react';

const services = [
  { 
    icon: Printer, 
    title: 'Digital Printing', 
    desc: 'Fast, flexible, high-quality printing for short runs and quick turnarounds', 
    features: ['Quick Turnaround', 'Small Quantities', 'Vibrant Colors'],
    color: 'from-red-600 to-red-700',
    iconColor: 'text-red-700',
    path: '/services/digital-printing'
  },
  { 
    icon: Layout, 
    title: 'Offset Printing', 
    desc: 'Large volume printing with consistent quality and cost-effectiveness', 
    features: ['Bulk Orders', 'Cost Effective', 'Consistent Quality'],
    color: 'from-yellow-500 to-yellow-600',
    iconColor: 'text-yellow-600',
    path: '/services/offset-printing'
  },
  { 
    icon: Shirt, 
    title: 'Screen Printing', 
    desc: 'Perfect for t-shirts, promotional items, signage, and specialty applications', 
    features: ['Bold Designs', 'Unique Materials', 'Durable Results'],
    color: 'from-red-600 to-red-700',
    iconColor: 'text-red-700',
    path: '/services/screen-printing'
  },
  { 
    icon: Newspaper, 
    title: 'Large Format', 
    desc: 'Banners, posters, billboards, and exhibition displays that make an impact', 
    features: ['Billboards', 'Banners', 'Exhibition Displays'],
    color: 'from-gray-500 to-gray-700',
    iconColor: 'text-gray-600',
    path: '/services/large-format'
  },
  { 
    icon: Tag, 
    title: 'Labels & Stickers', 
    desc: 'Custom labels and stickers in any shape, size, or material', 
    features: ['Custom Shapes', 'Any Size', 'Premium Materials'],
    color: 'from-yellow-500 to-yellow-600',
    iconColor: 'text-yellow-600',
    path: '/services/labels-stickers'
  },
  { 
    icon: Leaf, 
    title: 'Eco-Friendly', 
    desc: 'Sustainable materials, recyclable packaging, and environmentally responsible printing', 
    features: ['Recyclable', 'Sustainable', 'Eco-Conscious'],
    color: 'from-red-600 to-red-700',
    iconColor: 'text-red-700',
    path: '/services/eco-friendly'
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-700 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="text-red-600">Printing & Packaging</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            From concept to delivery, we provide end-to-end solutions combining cutting-edge technology with artisanal precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative bg-white m-0.5 rounded-2xl p-8 transition-all duration-500 group-hover:bg-gray-50">
                {/* Icon with animation */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={service.path}>
                  <button className="text-red-600 font-semibold flex items-center gap-2 group/btn transition-all">
                    Explore Solutions 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link to="/services">
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              View All Services <TrendingUp className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;