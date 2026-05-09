import React, { useEffect, useRef } from 'react';
import { Phone, ArrowRight, Zap, Clock, Shield, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
const CTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-block mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-gray-900 font-semibold">✨ Limited Time Offer ✨</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Make Your Brand
            <span className="text-white relative inline-block mx-2">
              Unforgettable?
            </span>
          </h2>
          
          <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-10">
            Get a free quote in 24 hours. From premium packaging to high-speed digital prints, 
            we deliver excellence. No commitment required.
          </p>
          
          {/* Feature List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: Zap, text: 'Free Consultation' },
              { icon: Clock, text: 'Fast Response' },
              { icon: Shield, text: 'No Hidden Fees' },
              { icon: Gift, text: 'Free Design Draft' }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <feature.icon className="w-4 h-4 text-gray-900" />
                <span className="text-gray-900 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/contact">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl group">
              Get Your Free Quote Now 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <a href="tel:16042396141">
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl group">
              <Phone className="w-5 h-5" /> 
              Call: +1 (604) 239-6141
            </button>
            </a>

          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 text-sm">1000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 text-sm">5-Star Rated Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 text-sm">ISO 9001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;