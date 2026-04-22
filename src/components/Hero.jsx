import React, { useEffect, useRef } from 'react';
import { Play, ChevronRight, Star, Clock, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://placehold.co/1920x1080/1a1a1a/white?text=Printing"
        >
          <source src="https://cdn.pixabay.com/video/2020/03/30/34594-402634196_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'slideIn 20s linear infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content with animations */}
          <div className="animate-fade-in-left">
            <div className="flex items-center space-x-2 mb-6 animate-slide-in">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500 animate-pulse-slow" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              <span className="text-white font-medium bg-gold-500/20 px-3 py-1 rounded-full backdrop-blur-sm">5-Star Rated Service</span>
            </div>
            
            <h1 className="text-white md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              Pakistan's Fastest
              <span className="text-gold-500 block relative">
                Custom Printing
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 animate-shimmer"></span>
              </span>
              <span className="text-white">& Packaging</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Premium quality guaranteed with 24-hour quotation and fast nationwide delivery. 
              Experience printing excellence without the wait.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
  <button className="bg-gold-500 hover:bg-gold-600...">
    Get Instant Quote <ArrowRight className="w-5 h-5..." />
  </button>
</Link>
              <Link to="/portfolio">
  <button className="bg-transparent border-2 border-white...">
    View Our Work
  </button>
</Link>
            </div>
            
            {/* Animated Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {[
                { label: 'FREE Design Draft', value: 'FREE', delay: 0 },
                { label: 'Fast Delivery', value: '24-48h', delay: 0.1 },
                { label: '24/7 Support', value: '24/7', delay: 0.2 }
              ].map((stat, idx) => (
                <div key={idx} className="text-center transform hover:scale-105 transition duration-300">
                  <p className="text-3xl font-bold text-gold-500 animate-pulse-slow">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Animated Cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
            {[
              { value: '1000+', label: 'Happy Clients', color: 'from-maroon-600 to-maroon-700', delay: 0 },
              { value: '5', label: '5-Star Rated', color: 'from-gold-600 to-gold-700', delay: 0.1 },
              { value: '2020', label: 'Trusted Since', color: 'from-silver-500 to-silver-600', delay: 0.2 },
              { value: 'Premium', label: 'Quality Guaranteed', color: 'from-maroon-700 to-maroon-800', delay: 0.3 }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${card.color} rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in`}
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="text-3xl font-bold text-white">{card.value}</div>
                <div className="text-sm text-white/80">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;