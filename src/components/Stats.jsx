import React, { useEffect, useRef, useState } from 'react';
import { Users, FolderCheck, Calendar, Smile, TrendingUp, Award } from 'lucide-react';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="text-5xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', delay: 0 },
    { icon: FolderCheck, value: 10000, suffix: '+', label: 'Projects Completed', delay: 0.1 },
    { icon: Calendar, value: 15, suffix: '+', label: 'Years Experience', delay: 0.2 },
    { icon: Smile, value: 99, suffix: '%', label: 'Satisfaction Rate', delay: 0.3 },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
          animation: 'slideIn 20s linear infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-500 reveal"
              style={{ transitionDelay: `${stat.delay}s` }}
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm animate-float">
                <stat.icon className="w-10 h-10 text-gold-500" />
              </div>
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
              <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-4 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;