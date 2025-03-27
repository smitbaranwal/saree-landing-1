
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LaunchCountdown from '@/components/LaunchCountdown';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll handling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add event listener
    window.addEventListener('click', handleAnchorClick);
    
    // Clean up
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div ref={mainRef} className="antialiased scroll-container">
      <Header />
      <main>
        <Hero />
        <Features />
        <LaunchCountdown />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
