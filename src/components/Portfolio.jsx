import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ZoomIn, ArrowRight, Filter } from 'lucide-react';

// Import images from assets folder
import schoolProspectusImg from '../assets/notebook.jpg';
import luxuryPackagingImg from '../assets/packcosmetics.jpg';
import corporateBrandingImg from '../assets/business-card1.jpg';
import creativeBrochureImg from '../assets/letter.jpg';
import ecoFriendlyImg from '../assets/ecofreindly.jpg';
import businessCardCollectionImg from '../assets/specialcards.jpg';

const portfolioItems = [
  { 
    id: 1, 
    category: 'Marketing Materials', 
    title: 'School Prospectus & Marketing Materials', 
    image: schoolProspectusImg, 
    path: '/portfolio/school-prospectus',
    delay: 0 
  },
  { 
    id: 2, 
    category: 'Packaging', 
    title: 'Luxury Cosmetic Packaging Design', 
    image: luxuryPackagingImg, 
    path: '/portfolio/luxury-cosmetic-packaging',
    delay: 0.1 
  },
  { 
    id: 3, 
    category: 'Branding', 
    title: 'Corporate Branding Package', 
    image: corporateBrandingImg, 
    path: '/portfolio/corporate-branding-package',
    delay: 0.2 
  },
  { 
    id: 4, 
    category: 'Design', 
    title: 'Creative Brochure Design', 
    image: creativeBrochureImg, 
    path: '/products/brochures',
    delay: 0.3 
  },
  { 
    id: 5, 
    category: 'Packaging', 
    title: 'Eco-Friendly Packaging', 
    image: ecoFriendlyImg, 
    path: '/services/eco-friendly',
    delay: 0.4 
  },
  { 
    id: 6, 
    category: 'Marketing Materials', 
    title: 'Premium Business Cards', 
    image: businessCardCollectionImg, 
    path: '/products/business-cards',
    delay: 0.5 
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const filters = ['All', 'Packaging', 'Branding', 'Design', 'Marketing Materials'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Work <span className="text-red-600">Speaks For Itself</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our featured portfolio of successful design and print projects across various industries.
          </p>
        </div>
        
        {/* Animated Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {filters.map((filter, idx) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer reveal"
              style={{ transitionDelay: `${item.delay}s` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-yellow-400 text-sm font-semibold mb-1">{item.category}</p>
                    <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                    <Link to={item.path}>
                      <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-yellow-600 transition">
                        View Project <ZoomIn className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Search Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link to="/portfolio">
            <button className="border-2 border-red-600 text-red-600 px-10 py-4 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Explore Full Portfolio <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <img src={selectedImage} alt="Portfolio" className="w-full rounded-2xl" />
            <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;