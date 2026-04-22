import React from 'react';
import { Plane, Building2, ShoppingCart, Home, Hotel, Laptop, Globe, TrendingUp, Star, Users, Award, Clock, CheckCircle, CreditCard, Wifi, Coffee, Shield, Zap, Mail, Phone, MapPin } from 'lucide-react';

const companies = [
  { 
    icon: Plane, 
    name: 'Fast Travel Agency & Ticketing', 
    type: 'Services', 
    desc: 'Premium travel and ticketing services worldwide',
    fullDesc: 'Book flights, hotels, and holiday packages at unbeatable prices. 24/7 customer support and exclusive deals for frequent travelers.',
    color: 'from-blue-500 to-cyan-500', 
    delay: 0,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
    features: ['Flight Booking', 'Hotel Reservation', 'Visa Assistance', 'Travel Insurance', 'Holiday Packages', '24/7 Support'],
    stats: { customers: '50,000+', experience: '15+ Years', rating: '4.9' }
  },
  { 
    icon: Building2, 
    name: 'Fast Consultant & Travel Agency', 
    type: 'Services', 
    desc: 'Expert consulting and travel solutions',
    fullDesc: 'Professional business consulting, career guidance, and travel management services for corporate clients worldwide.',
    color: 'from-green-500 to-emerald-500', 
    delay: 0.1,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    features: ['Business Consulting', 'Career Counseling', 'Corporate Travel', 'Event Management', 'Market Research', 'Strategic Planning'],
    stats: { customers: '10,000+', experience: '12+ Years', rating: '4.8' }
  },
  { 
    icon: ShoppingCart, 
    name: 'Fast Online Stores Dacor Dice', 
    type: 'Products', 
    desc: 'Curated e-commerce for decor & electronics',
    fullDesc: 'Premium online marketplace for home decor, electronics, and lifestyle products. Fast delivery and secure payments.',
    color: 'from-purple-500 to-pink-500', 
    delay: 0.2,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
    features: ['Home Decor', 'Electronics', 'Fashion Accessories', 'Gift Items', 'Cash on Delivery', 'Free Shipping'],
    stats: { customers: '100,000+', experience: '8+ Years', rating: '4.7' }
  },
  { 
    icon: Home, 
    name: 'Fast Real Estate & Builders', 
    type: 'Services', 
    desc: 'Modern architecture & luxury construction',
    fullDesc: 'Luxury residential and commercial properties. Modern architecture, quality construction, and prime locations.',
    color: 'from-orange-500 to-red-500', 
    delay: 0.3,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    features: ['Luxury Homes', 'Commercial Plazas', 'Property Management', 'Real Estate Investment', 'Interior Design', 'Construction'],
    stats: { customers: '5,000+', experience: '20+ Years', rating: '4.9' }
  },
  { 
    icon: Hotel, 
    name: 'Fast Hospitality & Tourism', 
    type: 'Services', 
    desc: 'Premium hospitality & booking platform',
    fullDesc: 'Luxury hotel bookings, restaurant reservations, and tourism packages. Exclusive deals and VIP experiences.',
    color: 'from-red-500 to-rose-500', 
    delay: 0.4,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    features: ['Hotel Booking', 'Restaurant Reservations', 'Tour Packages', 'Event Planning', 'VIP Services', 'Travel Guides'],
    stats: { customers: '30,000+', experience: '10+ Years', rating: '4.8' }
  },
  { 
    icon: Laptop, 
    name: 'Fast IT Solutions & Digital Tech', 
    type: 'Services', 
    desc: 'Innovative digital & IT solutions',
    fullDesc: 'Cutting-edge IT solutions including web development, mobile apps, cloud services, and digital marketing.',
    color: 'from-indigo-500 to-blue-500', 
    delay: 0.5,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    features: ['Web Development', 'Mobile Apps', 'Cloud Services', 'Digital Marketing', 'AI Solutions', 'IT Consulting'],
    stats: { customers: '500+', experience: '10+ Years', rating: '4.9' }
  }
];

const FastGroupCompanies = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-700 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Our Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fast <span className="text-yellow-500">Group of Companies</span>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
            A diverse ecosystem of excellence, delivering premium services and products across multiple industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/10"
            >
              {/* Company Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-yellow-500 bg-yellow-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {company.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${company.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                    <company.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition line-clamp-2">
                      {company.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-gray-400">{company.stats.rating} ★</span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {company.fullDesc}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {company.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-yellow-500" />
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-white/10 mb-4">
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-yellow-500" />
                      <span className="text-white text-sm font-semibold">{company.stats.customers}</span>
                    </div>
                    <p className="text-gray-500 text-xs">Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-yellow-500" />
                      <span className="text-white text-sm font-semibold">{company.stats.experience}</span>
                    </div>
                    <p className="text-gray-500 text-xs">Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-yellow-500" />
                      <span className="text-white text-sm font-semibold">24/7</span>
                    </div>
                    <p className="text-gray-500 text-xs">Support</p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Learn More <Globe className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Group Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-500" />
              <span className="text-white">6+ Companies</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-500" />
              <span className="text-white">500+ Employees</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-white">10,000+ Customers</span>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-lg mb-4">Get in Touch with Fast Group</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">0325 2467463</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">xfastgroup001@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastGroupCompanies;