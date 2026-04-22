import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, Layout, Shirt, Newspaper, Layers,
  Package, Tag, ShoppingBag, Leaf,
  Palette, PenTool, Box, Megaphone,
  Briefcase, Gift, Sparkles,
  Award, Truck, Clock, Users, DollarSign, Shield,
  ArrowRight, TrendingUp, Factory, Star,
  CheckCircle, Play, Pause, Phone, Mail, MapPin,
  Facebook, Twitter, Instagram, Linkedin, Youtube
} from 'lucide-react';

// Import images from assets folder
import digitalPrintingImg from '../assets/digialprinting.jpg';
import offsetPrintingImg from '../assets/offsetprinting.jpg';
import screenPrintingImg from '../assets/screenprinting.jpg';
import largeFormatImg from '../assets/largeformat.jpg';
import flexographyImg from '../assets/flex1.jpg';
import customBoxesImg from '../assets/custombox.jpg';
import labelsStickersImg from '../assets/holo-sticker.jpg';
import bagsPouchesImg from '../assets/bagspouch.jpg';
import ecoFriendlyImg from '../assets/ecofreindly.jpg';
import brandIdentityImg from '../assets/shop2.jpg';
import logoDesignImg from '../assets/logodesign.jpg';
import packagingDesignImg from '../assets/hero1.jpg';
import marketingMaterialsImg from '../assets/shop3.jpg';
import businessPrintingImg from '../assets/business-card1.jpg';
import promotionalProductsImg from '../assets/hero2.jpg';
import specialtyPrintingImg from '../assets/specialprinting.jpg';

const Services = () => {
  // Service Categories Data with local images
  const printingServices = [
    { icon: Printer, title: 'Digital Printing', description: 'Fast, flexible printing perfect for short runs and quick turnarounds', path: '/services/digital-printing', features: ['Quick Turnaround', 'No Minimum Order', 'Vibrant Colors'], image: digitalPrintingImg, color: 'from-blue-500 to-cyan-500' },
    { icon: Layout, title: 'Offset Printing', description: 'High-volume printing with exceptional quality and cost-effectiveness', path: '/services/offset-printing', features: ['Bulk Orders', 'Cost Effective', 'Consistent Quality'], image: offsetPrintingImg, color: 'from-purple-500 to-pink-500' },
    { icon: Shirt, title: 'Screen Printing', description: 'Vibrant, durable prints on various materials and surfaces', path: '/services/screen-printing', features: ['Bold Designs', 'Durable Results', 'Multiple Materials'], image: screenPrintingImg, color: 'from-orange-500 to-red-500' },
    { icon: Newspaper, title: 'Large Format Printing', description: 'Banners, posters, and signage that make a big impact', path: '/services/large-format', features: ['Billboards', 'Banners', 'Exhibition Displays'], image: largeFormatImg, color: 'from-green-500 to-emerald-500' },
    { icon: Layers, title: 'Flexography', description: 'High-speed rotary printing perfect for large-volume packaging and labels', path: '/services/flexography', features: ['High Speed', 'Large Volume', 'Packaging Focus'], image: flexographyImg, color: 'from-indigo-500 to-blue-500' },
  ];

  const packagingSolutions = [
    { icon: Package, title: 'Custom Boxes', description: 'Tailored packaging boxes for any product, any size', path: '/services/custom-boxes', features: ['Custom Sizes', 'Premium Materials', 'Bulk Orders'], image: customBoxesImg, color: 'from-teal-500 to-cyan-500' },
    { icon: Tag, title: 'Labels & Stickers', description: 'Eye-catching labels and stickers for branding and information', path: '/services/labels-stickers', features: ['Custom Shapes', 'Waterproof', 'Premium Quality'], image: labelsStickersImg, color: 'from-pink-500 to-rose-500' },
    { icon: ShoppingBag, title: 'Bags & Pouches', description: 'Custom bags and pouches for retail and food products', path: '/services/bags-pouching', features: ['Eco-Friendly', 'Custom Printing', 'Various Sizes'], image: bagsPouchesImg, color: 'from-yellow-500 to-orange-500' },
    { icon: Leaf, title: 'Eco-Friendly Packaging', description: 'Sustainable packaging solutions that care for the planet', path: '/services/eco-friendly', features: ['Recyclable', 'Biodegradable', 'Sustainable'], image: ecoFriendlyImg, color: 'from-green-500 to-emerald-500' },
  ];

  const designServices = [
    { icon: Palette, title: 'Brand Identity', description: 'Complete brand development from concept to implementation', path: '/services/brand-identity', features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'], image: brandIdentityImg, color: 'from-purple-500 to-indigo-500' },
    { icon: PenTool, title: 'Logo Design', description: 'Memorable logos that capture your brand essence', path: '/services/logo-design', features: ['Unique Designs', 'Multiple Concepts', 'Vector Files'], image: logoDesignImg, color: 'from-red-500 to-pink-500' },
    { icon: Box, title: 'Packaging Design', description: 'Stunning packaging designs that sell your products', path: '/services/packaging-design', features: ['3D Mockups', 'Print Ready', 'Market Research'], image: packagingDesignImg, color: 'from-blue-500 to-cyan-500' },
    { icon: Megaphone, title: 'Marketing Materials', description: 'Professional designs for all your marketing collateral', path: '/services/marketing-design', features: ['Brochures', 'Flyers', 'Social Media Graphics'], image: marketingMaterialsImg, color: 'from-orange-500 to-yellow-500' },
  ];

  const businessSolutions = [
    { icon: Briefcase, title: 'Business Printing', description: 'Essential business stationery that makes a professional impression', path: '/services/business-printing', features: ['Business Cards', 'Letterheads', 'Envelopes'], image: businessPrintingImg, color: 'from-gray-600 to-gray-800' },
    { icon: Gift, title: 'Promotional Products', description: 'Branded merchandise that keeps your brand in customers\' hands', path: '/services/promotional-products', features: ['Custom Merch', 'Bulk Orders', 'Unique Items'], image: promotionalProductsImg, color: 'from-yellow-500 to-amber-500' },
    { icon: Sparkles, title: 'Specialty Printing', description: 'Premium finishing techniques that make your prints extraordinary', path: '/services/specialty-printing', features: ['Foil Stamping', 'Embossing', 'UV Coating'], image: specialtyPrintingImg, color: 'from-purple-500 to-pink-500' },
  ];

  const whyChooseUs = [
    { icon: Layers, title: 'End-to-End Solutions', desc: 'From design to delivery, we handle every aspect of your project with expertise and care.', gradient: 'from-red-600 to-red-700' },
    { icon: Factory, title: 'State-of-the-Art Technology', desc: 'Latest printing equipment and techniques ensure superior quality and consistency.', gradient: 'from-blue-600 to-cyan-600' },
    { icon: Users, title: 'Expert Team', desc: 'Skilled professionals with years of experience in printing, packaging, and design.', gradient: 'from-green-600 to-emerald-600' },
    { icon: Clock, title: 'Fast Turnaround', desc: 'Quick production times without compromising on quality. Rush orders available.', gradient: 'from-orange-600 to-red-600' },
    { icon: DollarSign, title: 'Competitive Pricing', desc: 'Volume discounts and transparent pricing make quality affordable for all businesses.', gradient: 'from-purple-600 to-pink-600' },
    { icon: Shield, title: 'Quality Guaranteed', desc: '100% satisfaction guarantee. If you\'re not happy, we\'ll make it right.', gradient: 'from-teal-600 to-cyan-600' },
  ];

  const certifications = [
    { icon: Award, title: 'ISO Certification', desc: 'ISO Certified', detail: 'Quality management systems certified to international standards', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Star, title: 'Quality Awards', desc: 'Award Winning', detail: 'Recognized for excellence in printing and packaging services', gradient: 'from-yellow-500 to-amber-500' },
    { icon: Printer, title: 'State-of-the-art Equipment', desc: 'Modern Equipment', detail: 'Latest technology meeting industry standards and certifications', gradient: 'from-purple-500 to-pink-500' },
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
          {service.features.slice(0, 3).map((feature, idx) => (
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

  // Banner Component with Video Background
  const VideoBanner = ({ title, subtitle, videoSrc }) => (
    <div className="relative rounded-2xl overflow-hidden mb-12 h-64">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
        <div className="text-center px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=1920"
          >
            <source src="https://cdn.pixabay.com/video/2016/10/07/5807-186111314_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-semibold">Premium Quality Printing Since 2008</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Complete Printing & 
              <span className="text-yellow-500 block">Packaging Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              From concept to delivery, we provide comprehensive services to bring your vision to life. 
              Quality, speed, and reliability in every project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Printing Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <VideoBanner 
            title="Printing Services"
            subtitle="Professional printing solutions for all your business needs"
            videoSrc="https://cdn.pixabay.com/video/2016/10/07/5807-186111314_medium.mp4"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printingServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Solutions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <VideoBanner 
            title="Packaging Solutions"
            subtitle="Custom packaging that protects and promotes your products"
            videoSrc="https://cdn.pixabay.com/video/2020/03/30/34594-402634196_medium.mp4"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packagingSolutions.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <VideoBanner 
            title="Design Services"
            subtitle="Creative design solutions to elevate your brand"
            videoSrc="https://cdn.pixabay.com/video/2016/09/21/5398-183786939_medium.mp4"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <VideoBanner 
            title="Business Solutions"
            subtitle="Professional business printing and promotional products"
            videoSrc="https://cdn.pixabay.com/video/2022/11/06/137902-767780878_medium.mp4"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {businessSolutions.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-yellow-500">Our Services</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Excellence in every print, every package, every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 w-12 h-0.5 bg-yellow-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified & Trusted Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Certified & Trusted
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certified & <span className="text-red-600">Trusted</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our commitment to quality is backed by industry certifications and recognition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-24 h-24 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <cert.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-red-600 font-semibold mb-3">{cert.desc}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{cert.detail}</p>
                <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
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
          <div className="absolute inset-0 bg-yellow-500/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                Request Free Quote <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white hover:bg-gray-100 text-red-800 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;