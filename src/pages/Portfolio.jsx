import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Eye, Truck, Star, Shield,
  Layers, Gift, CreditCard, Package, Box,
  ChevronRight, Layout, Briefcase, Palette,
  Award, Heart, Leaf, Sparkles, TrendingUp, Users,
  Phone, Mail, MapPin, Building, Calendar,
  Book, FileText, IdCard, Lightbulb, Filter, Search, X,
  Grid, List, Play
} from 'lucide-react';

// Import images from assets folder
import cosmeticPackagingImg from '../assets/packcosmetics.jpg';
import restaurantBrandingImg from '../assets/letter.jpg';
import ecommerceBoxesImg from '../assets/custombox.jpg';
import techStartupImg from '../assets/banner.jpg';
import schoolProspectusImg from '../assets/notebook.jpg';
import foodLabelsImg from '../assets/holo-sticker.jpg';
import corporateBrandingImg from '../assets/business-card1.jpg';
import retailDisplayImg from '../assets/shopping.jpg';

const fallbackImage = 'https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=600';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

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

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'packaging', name: 'Packaging'},
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Marketing'},
    { id: 'design', name: 'Design' }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Luxury Cosmetic Packaging',
      client: 'Glow Beauty',
      category: 'packaging',
      description: 'Premium packaging design that elevated brand perception and increased product value',
      image: cosmeticPackagingImg,
      path: '/portfolio/luxury-cosmetic-packaging',
      featured: true,
      date: 'November 2024',
      tags: ['Packaging', 'Luxury', 'Beauty']
    },
    {
      id: 2,
      title: 'Restaurant Brand Identity',
      client: 'Spice Route Bistro',
      category: 'branding',
      description: 'Complete brand identity from logo to menu cards, creating a cohesive dining experience',
      image: restaurantBrandingImg,
      path: '/portfolio/restaurant-brand-identity',
      featured: true,
      date: 'October 2024',
      tags: ['Branding', 'Restaurant', 'Identity']
    },
    {
      id: 3,
      title: 'E-commerce Shipping Boxes',
      client: 'StyleBox Fashion',
      category: 'packaging',
      description: 'Creating an unboxing experience that drives customer loyalty and social sharing',
      image: ecommerceBoxesImg,
      path: '/portfolio/ecommerce-shipping-boxes',
      featured: true,
      date: 'September 2024',
      tags: ['Packaging', 'E-commerce', 'Unboxing']
    }
  ];

  const allProjects = [
    { id: 4, title: 'Tech Startup Brand Identity', client: 'CloudSync Solutions', category: 'branding', description: 'Modern brand identity for innovative tech company', image: techStartupImg, path: '/portfolio/tech-startup-brand-identity', date: 'August 2024', tags: ['Branding', 'Tech'] },
    { id: 5, title: 'School Prospectus & Marketing', client: 'Bright Minds Academy', category: 'marketing', description: 'Engaging prospectus design that increased admissions by 40%', image: schoolProspectusImg, path: '/portfolio/school-prospectus', date: 'July 2024', tags: ['Marketing', 'Education'] },
    { id: 6, title: 'Food Product Labels', client: 'Fresh Harvest Foods', category: 'design', description: 'Eye-catching product labels that increased shelf visibility', image: foodLabelsImg, path: '/portfolio/food-product-labels', date: 'June 2024', tags: ['Design', 'Labels'] },
    { id: 7, title: 'Corporate Branding Package', client: 'Meridian Consulting', category: 'branding', description: 'Complete corporate branding suite for consulting firm', image: corporateBrandingImg, path: '/portfolio/corporate-branding-package', date: 'May 2024', tags: ['Branding', 'Corporate'] },
    { id: 8, title: 'Retail Display Packaging', client: 'GiftCraft Pakistan', category: 'packaging', description: 'Custom retail packaging that maximized shelf impact', image: retailDisplayImg, path: '/portfolio/retail-display-packaging', date: 'April 2024', tags: ['Packaging', 'Retail'] }
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const PortfolioCard = ({ project, isFeatured = false }) => (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 reveal ${isFeatured ? 'lg:col-span-1' : ''}`}>
      <div className="relative h-56 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" onError={(e) => { e.target.src = fallbackImage; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        {isFeatured && <div className="absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">Featured</div>}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
          <Link to={project.path} className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition">
            <ArrowRight className="w-5 h-5 text-gray-900" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition">{project.title}</h3>
          <span className="text-xs text-gray-400">{project.date}</span>
        </div>
        <p className="text-gray-500 text-sm mb-2">{project.client}</p>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (<span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>))}
        </div>
        <Link to={project.path}>
          <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition">View Case Study <ArrowRight className="w-4 h-4" /></button>
        </Link>
      </div>
    </div>
  );

  const CategoryFilter = ({ category, isActive, onClick }) => (
    <button onClick={onClick} className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>
      {category.name} ({category.count})
    </button>
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover"><source src="https://cdn.pixabay.com/video/2016/10/07/5807-186111314_medium.mp4" type="video/mp4" /></video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"><Award className="w-4 h-4 text-yellow-500" /><span className="text-yellow-500 text-sm font-semibold">Our Masterpieces</span></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Real Projects, <span className="text-yellow-500 block">Exceptional Results</span></h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Discover how we elevate brands across Pakistan through premium printing and packaging.</p>
          <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/20 max-w-2xl mx-auto">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-500">8+</div><div className="text-sm text-gray-300">Featured</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-500">500+</div><div className="text-sm text-gray-300">Completed</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-500">99%</div><div className="text-sm text-gray-300">Satisfaction</div></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">Featured Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Showcasing Our Most <span className="text-red-600">Impactful Work</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our success stories and how we've helped businesses grow</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (<PortfolioCard key={project.id} project={project} isFeatured={true} />))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">More <span className="text-red-600">Projects</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our complete portfolio of successful projects</p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (<CategoryFilter key={category.id} category={category} isActive={activeFilter === category.id} onClick={() => setActiveFilter(category.id)} />))}
            </div>
            <div className="flex gap-3">
              <div className="relative"><input type="text" placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 w-64" /><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{searchTerm && (<button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 transform -translate-y-1/2"><X className="w-4 h-4 text-gray-400" /></button>)}</div>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden"><button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}><Grid className="w-4 h-4" /></button><button onClick={() => setViewMode('list')} className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-600'}`}><List className="w-4 h-4" /></button></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-4'}>
            {filteredProjects.map((project) => (<PortfolioCard key={project.id} project={project} />))}
          </div>

          {filteredProjects.length === 0 && (<div className="text-center py-12"><p className="text-gray-500">No projects found matching your criteria.</p></div>)}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">Ready to Create Your <span className="text-yellow-500">Success Story?</span></h2>
            <p className="text-xl text-gray-200 mb-8 reveal">Let's discuss how we can help elevate your brand with exceptional printing and packaging</p>
            <div className="flex flex-wrap justify-center gap-4 reveal">
              <Link to="/contact"><button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">Start Your Project <ArrowRight className="w-5 h-5" /></button></Link>
              <Link to="/portfolio"><button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">View More Work</button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;