import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User, Play, Pause } from 'lucide-react';

const testimonials = [
  { 
    name: 'Ahmed Hassan', 
    role: 'Owner, Sunrise Restaurants', 
    text: 'Fast Printing transformed our restaurant branding. The custom menus and packaging are exceptional quality, and the turnaround time was incredibly fast. Our customers constantly compliment the professional presentation.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  { 
    name: 'Dr. Fatima Khan', 
    role: 'Medical Director, MediCare Clinic', 
    text: 'We needed compliant medical labels and brochures urgently. Fast Printing delivered beyond expectations - premium quality materials, perfect color matching, and they understood our regulatory requirements perfectly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  { 
    name: 'Sarah Malik', 
    role: 'Principal, BrightMinds School', 
    text: 'Working with Fast Printing for our school materials has been wonderful. They created custom notebooks, ID cards, and certificates that the students love. The bulk pricing and quality are unbeatable.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  { 
    name: 'Hamza Ali', 
    role: 'Founder & CEO, TechVenture Startup', 
    text: 'As a startup, we needed professional branding on a budget. Fast Printing provided excellent design support and delivered premium business cards and packaging that made us look established. Highly recommended!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  { 
    name: 'Ayesha Raza', 
    role: 'Brand Manager, Luxe Cosmetics', 
    text: 'The custom packaging for our cosmetic line exceeded all expectations. The attention to detail, eco-friendly materials, and stunning finishes have significantly elevated our brand perception.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  { 
    name: 'Bilal Ahmed', 
    role: 'Secretary, Pakistan Traders Association', 
    text: 'Fast Printing has been our go-to for all corporate events and promotional materials. Reliable, professional, and always deliver on time. The quality consistency across thousands of prints is remarkable.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(234,179,8,0.3) 0%, transparent 50%)`,
          animation: 'pulseSlow 4s ease-in-out infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-500 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-gold-500">Clients Say</span>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
            Trusted by hundreds of businesses across Pakistan for quality, reliability, and exceptional print service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Animated Quote Icon */}
          <Quote className="absolute top-0 left-0 w-20 h-20 text-white/10 animate-float" style={{ left: '-30px', top: '-30px' }} />
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-fade-in">
            {/* User Image */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-24 h-24 rounded-full border-4 border-gold-500 object-cover animate-scale-in"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-900" />
                </div>
              </div>
            </div>
            
            {/* Rating Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500 animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-center text-white leading-relaxed mb-6 animate-fade-in-up">
              "{testimonials[current].text}"
            </p>
            
            {/* Author Info */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="font-bold text-2xl text-white mb-1">{testimonials[current].name}</p>
              <p className="text-gold-400">{testimonials[current].role}</p>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              {isAutoPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrent(idx); resetTimer(); }}
                className={`transition-all duration-300 rounded-full ${
                  idx === current ? 'w-8 h-2 bg-gold-500' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;