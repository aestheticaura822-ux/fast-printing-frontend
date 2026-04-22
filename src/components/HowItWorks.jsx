import React, { useEffect, useRef } from 'react';
import { MessageSquare, Paintbrush, Printer as PrinterIcon, CheckCircle, Truck, Rocket, Clock, Award, Star, Zap, Shield, ThumbsUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const steps = [
  { 
    number: '01', 
    icon: MessageSquare, 
    title: 'Consultation', 
    desc: 'Share your vision and requirements with our expert team', 
    details: ['Free consultation', '24-hour response', 'No obligation'], 
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    delay: 0 
  },
  { 
    number: '02', 
    icon: Paintbrush, 
    title: 'Design & Approval', 
    desc: 'Review digital mockups and approve every detail', 
    details: ['Unlimited revisions', 'Professional design support', '3D mockups'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    delay: 0.1 
  },
  { 
    number: '03', 
    icon: PrinterIcon, 
    title: 'Production', 
    desc: 'State-of-the-art printing with rigorous quality checks', 
    details: ['Premium materials', 'Expert craftsmanship', 'Eco-friendly'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    delay: 0.2 
  },
  { 
    number: '04', 
    icon: CheckCircle, 
    title: 'Quality Check', 
    desc: 'Every detail inspected to ensure perfection', 
    details: ['100% satisfaction', 'Multi-point inspection', 'Color accuracy'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    delay: 0.3 
  },
  { 
    number: '05', 
    icon: Truck, 
    title: 'Delivery', 
    desc: 'Fast and secure shipping nationwide', 
    details: ['Track your order', 'Secure packaging', 'Free shipping'],
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    delay: 0.4 
  },
];

const HowItWorks = () => {
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

    const elements = document.querySelectorAll('.reveal-step');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-step">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Simple & Transparent</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From concept to delivery, we make the entire printing process structured, 
            transparent, and completely stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal-step group relative opacity-0 transition-all duration-700 hover:transform hover:-translate-y-2"
              style={{ transitionDelay: `${step.delay}s` }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>
              </div>

              {/* Card Content */}
              <div className={`${step.bgColor} rounded-2xl p-6 pt-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                {/* Icon */}
                <div className={`w-16 h-16 ${step.iconColor} bg-white rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.desc}</p>
                
                {/* Details List */}
                <div className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 ${step.iconColor}`} />
                      <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="reveal-step text-center">
          {/* Stats Bar */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 mb-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-white text-3xl font-bold">5-12</div>
                <div className="text-white/90 text-sm">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl font-bold">100%</div>
                <div className="text-white/90 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl font-bold">24/7</div>
                <div className="text-white/90 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl font-bold">Free</div>
                <div className="text-white/90 text-sm">Consultation</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
  <button className="bg-gradient-to-r from-red-600 to-red-700...">
    Start Your Project 
    <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>
            <Link to="/contact">
  <button className="bg-white hover:bg-gray-50...">
    Request Free Quote 
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>

          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-gray-600 text-sm">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-600 text-sm">5-Star Service</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600 text-sm">10,000+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal-step {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s ease-out;
        }
        .reveal-step.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;