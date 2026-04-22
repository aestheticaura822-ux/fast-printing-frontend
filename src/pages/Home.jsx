import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/Services';
import Stats from '../components/Stats';
import PortfolioSection from '../components/Portfolio';
import IndustriesSection from '../components/Industries';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <Stats />
      <PortfolioSection />
      <IndustriesSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;