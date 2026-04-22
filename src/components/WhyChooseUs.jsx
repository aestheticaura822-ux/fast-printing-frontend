import React, { useEffect, useRef } from 'react';
import { Sparkles, CreditCard, HeadphonesIcon, ShieldCheck, DollarSign, Users, Zap, Award } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'HIGH QUALITY', desc: 'Best Digital Printing with premium materials', color: 'from-maroon-600 to-maroon-700', delay: 0 },
  { icon: CreditCard, title: 'ONLINE PAYMENT', desc: 'Secure multiple payment methods', color: 'from-gold-600 to-gold-700', delay: 0.1 },
  { icon: HeadphonesIcon, title: '24/7 SUPPORT', desc: 'Dedicated help desk assistance', color: 'from-maroon-600 to-maroon-700', delay: 0.2 },
  { icon: ShieldCheck, title: '100% SAFE', desc: 'Secure & reliable service', color: 'from-silver-500 to-silver-600', delay: 0.3 },
  { icon: DollarSign, title: 'BEST PRICING', desc: 'Competitive price guarantee', color: 'from-gold-600 to-gold-700', delay: 0.4 },
  { icon: Users, title: '1000+ CLIENTS', desc: 'Trusted by businesses', color: 'from-maroon-600 to-maroon-700', delay: 0.5 },
];

const WhyChooseUs = () => {
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
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll('.reveal-card');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center reveal">
          <span className="inline-block px-4 py-1 bg-maroon-100 text-maroon-700 rounded-full text-sm font-semibold mb-4 animate-pulse-slow">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-700 to-gold-500">XFast Group?</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            We combine premium quality, reliability, and innovation to deliver exceptional printing solutions tailored for your brand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal-card bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
              style={{ transitionDelay: `${feature.delay}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 animate-float`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
              <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-maroon-700 to-gold-500 group-hover:w-full transition-all duration-300 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;