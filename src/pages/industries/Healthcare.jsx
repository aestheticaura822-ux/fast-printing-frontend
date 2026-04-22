import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, CheckCircle, ArrowRight, Clock, 
  Zap, DollarSign, Eye, Truck, Star, Shield,
  Layers, Gift, CreditCard, Package, Box,
  ChevronRight, Layout, Briefcase, Palette,
  Award, Heart, Leaf, Sparkles, TrendingUp, Users,
  Phone, Mail, MapPin, Building, Stethoscope,
  Book, FileText, IdCard, Lightbulb, Syringe,
  Pill, Activity, Clipboard, Lock, Microscope, Tag
} from 'lucide-react';

// Import images from assets folder
import medicalBrochuresImg from '../../assets/letter.jpg';
import prescriptionPadsImg from '../../assets/business-card1.jpg';
import medicalPackagingImg from '../../assets/custombox.jpg';
import labelsImg from '../../assets/holo-sticker.jpg';
import challengesImg from '../../assets/specialcards.jpg';
import solutionsImg from '../../assets/markcovers.jpg';
import successStoryImg from '../../assets/health.jpg';
import testimonialImg from '../../assets/business-card1.jpg';
import performanceBgImg from '../../assets/largeformat.jpg';

// Fallback image
const fallbackImage = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600';

const Healthcare = () => {

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

  const expertiseAreas = [
    { icon: Lightbulb, title: 'Deep Understanding', desc: 'We know your industry inside and out' },
    { icon: Award, title: 'Proven Results', desc: 'Track record of successful projects' },
    { icon: TrendingUp, title: 'Continuous Innovation', desc: 'Staying ahead of industry trends' }
  ];

  const tailoredPoints = [
    { title: 'Compliant Materials', desc: 'FDA-approved and medical-grade materials that meet all healthcare regulations' },
    { title: 'Sterile Solutions', desc: 'Clean-room packaging and sterilization-compatible materials for medical products' },
    { title: 'Secure Printing', desc: 'Confidential handling and secure printing processes for sensitive documents' },
    { title: 'Quality Assurance', desc: 'Rigorous quality checks to ensure compliance with medical standards' }
  ];

  const popularProducts = [
    { icon: FileText, title: 'Medical Brochures', desc: 'Patient information and healthcare brochures', price: 'From PKR 8,000', image: medicalBrochuresImg, path: '/products/brochures' },
    { icon: Clipboard, title: 'Prescription Pads', desc: 'Secure prescription pads with anti-fraud features', price: 'From PKR 5,000', image: prescriptionPadsImg, path: '/products/bill-books' },
    { icon: Package, title: 'Medical Packaging', desc: 'Sterile packaging for medical devices and supplies', price: 'From PKR 15,000', image: medicalPackagingImg, path: '/products/custom-boxes' },
    { icon: Tag, title: 'Labels', desc: 'Medical-grade labels for prescriptions and samples', price: 'From PKR 4,000', image: labelsImg, path: '/products/labels-stickers' }
  ];

  const ProductCard = ({ product }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = fallbackImage; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
        <div className="absolute bottom-4 left-4 bg-yellow-500 text-gray-900 px-2 py-1 rounded-lg text-xs font-bold">
          {product.price}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <product.icon className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition">
            {product.title}
          </h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
        <Link to={product.path}>
          <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section - Centered */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2020/09/13/49808-458438856_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Stethoscope className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 text-sm font-semibold">Healthcare & Medical</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Compliant, Professional 
            <span className="text-yellow-500 block">Healthcare Printing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Medical-grade printing and packaging solutions that meet healthcare industry standards.
          </p>
          
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 mx-auto">
              Get Industry-Specific Quote <ArrowRight className="w-5 h-5" />
            </button>
          </Link>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-white/20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">80+</div>
              <div className="text-sm text-gray-300">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">350+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">98%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Expertise Section - Cards only */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Industry-Specific Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Specialized Solutions for <span className="text-red-600">Healthcare & Medical</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Medical-grade printing and packaging solutions that meet healthcare industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {expertiseAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-500 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Challenges Section - Left Image, Right Points */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src={challengesImg} 
                alt="Healthcare Challenges"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
            </div>
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Industry Challenges
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your <span className="text-red-600">Challenges</span>
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Regulatory Compliance</h3>
                    <p className="text-gray-600 text-sm">Healthcare materials must meet strict regulatory standards and safety requirements</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Sterile Packaging</h3>
                    <p className="text-gray-600 text-sm">Medical products often require specialized sterile packaging solutions</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Patient Confidentiality</h3>
                    <p className="text-gray-600 text-sm">Forms and documents must maintain patient privacy and security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tailored Solutions Section - Left Points, Right Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 lg:order-1">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Our Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-red-600">Tailored Solutions</span>
              </h2>
              <div className="space-y-4">
                {tailoredPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">{point.title}</h3>
                      <p className="text-gray-600 text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <img 
                src={solutionsImg} 
                alt="Our Solutions"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Popular Products for <span className="text-red-600">Healthcare & Medical</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential printing products tailored for healthcare institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products">
              <button className="text-red-600 font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition">
                View All Products <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Left Image, Right Both Institutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src={successStoryImg} 
                alt="Success Stories"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
            </div>
            <div className="reveal">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                Proven Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Impact for <span className="text-red-600">Healthcare Institutions</span>
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-gray-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Aga Khan University Hospital</h3>
                  <p className="text-gray-600 text-sm mb-3">Medical packaging and prescription pad printing</p>
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    100% compliance with regulatory standards and improved efficiency
                  </div>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Shaukat Khanum Hospital</h3>
                  <p className="text-gray-600 text-sm mb-3">Complete medical stationery and patient information materials</p>
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    40% faster processing and enhanced patient communication
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Banner Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={performanceBgImg} 
            alt="Performance Metrics"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Performance <span className="text-yellow-500">Metrics</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Our commitment to excellence in numbers</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center reveal">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">80+</div>
              <div className="text-sm text-gray-300">Clients Served</div>
            </div>
            <div className="text-center reveal">
              <CheckCircle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">350+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center reveal">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src={testimonialImg} alt="Testimonial" className="w-14 h-14 rounded-full object-cover" onError={(e) => { e.target.src = fallbackImage; }} />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6 reveal">
              "The attention to detail and regulatory compliance that Fast Printing brings is exactly what we need in the healthcare sector."
            </p>
            <div className="reveal">
              <h4 className="text-xl font-bold text-gray-800">Dr. Sara Malik</h4>
              <p className="text-red-600">Chief Administrator, City Hospital</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal">
              Ready to <span className="text-yellow-500">Partner With Us?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 reveal">
              Let's create printing and packaging solutions perfectly suited to your healthcare needs
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
                  Request Industry Quote <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;