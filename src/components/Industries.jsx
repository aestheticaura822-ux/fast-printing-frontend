import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Coffee, ShoppingBag, Briefcase, PartyPopper, Building, Film, Car, Package, Wine, Gift } from 'lucide-react';

const industries = [
  { icon: GraduationCap, title: 'Schools & Education', desc: 'Notebooks, ID cards, certificates, and educational materials', color: 'from-blue-500 to-blue-600', delay: 0, path: '/industries/education' },
  { icon: Heart, title: 'Healthcare & Medical', desc: 'Medical brochures, labels, packaging, and compliance materials', color: 'from-red-500 to-red-600', delay: 0.1, path: '/industries/healthcare' },
  { icon: Coffee, title: 'Restaurants & Food', desc: 'Menus, labels, takeout packaging, and food-safe materials', color: 'from-orange-500 to-orange-600', delay: 0.2, path: '/industries/restaurants' },
  { icon: ShoppingBag, title: 'Retail & E-commerce', desc: 'Product packaging, labels, shipping boxes, and branded materials', color: 'from-purple-500 to-purple-600', delay: 0.3, path: '/industries/retail' },
  { icon: Briefcase, title: 'Corporate & Business', desc: 'Business cards, stationery, folders, and corporate gifts', color: 'from-gray-500 to-gray-600', delay: 0.4, path: '/industries/corporate' },
  { icon: PartyPopper, title: 'Events & Hospitality', desc: 'Invitations, banners, badges, and event materials', color: 'from-pink-500 to-pink-600', delay: 0.5, path: '/industries/events' },
  { icon: Building, title: 'Real Estate', desc: 'Brochures, flyers, banners, and property marketing materials', color: 'from-teal-500 to-teal-600', delay: 0.6, path: '/industries/real-estate' },
  { icon: Film, title: 'Media & Entertainment', desc: 'Posters, banners, backdrops, and promotional items', color: 'from-indigo-500 to-indigo-600', delay: 0.7, path: '/industries/media-entertainment' },
];

const Industries = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Across <span className="text-red-600">Industries</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            Specialized printing and packaging solutions tailored to your industry's unique demands and compliance standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to={industry.path}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 reveal"
              style={{ transitionDelay: `${industry.delay}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-5 transform group-hover:scale-110 transition-all duration-300`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-red-600 transition">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{industry.desc}</p>
              <button className="text-red-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More →
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;