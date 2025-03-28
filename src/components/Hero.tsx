
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        // Parallax effect
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.3}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center texture-bg relative overflow-hidden pt-24 pb-16"
      id="home"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/10 via-gold to-gold/10"></div>
      <div className="absolute bottom-0 right-0 w-3/4 h-[1px] bg-gradient-to-l from-gold/20 via-gold/40 to-transparent"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 z-10">
          <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-block bg-gold/10 text-maroon-dark px-4 py-1 rounded-full text-sm font-medium mb-4">
              Limited Collection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-gray-900">
              Authentic Banarasi Sarees, Direct from the Weavers.
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg">
              Experience the elegance of handcrafted Banarasi sarees at the lowest-ever launch price. 
              Straight from the loom to your wardrobe.
            </p>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <a 
              href="#notify-me" 
              className="cta-button inline-block"
            >
              Get Early Access
            </a>
            <p className="mt-3 text-sm text-gray-500">Sign-up for exclusive launch offers</p>
          </div>
        </div>
        
        {/* Image */}
        <div className="order-1 md:order-2 relative">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-xl overflow-hidden transform md:rotate-1 transition-all duration-700 hover:rotate-0 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="overflow-hidden rounded-md">
              <img 
                src="../../../istockphoto.jpg" 
                alt="Beautiful Banarasi Saree"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-md shadow-sm">
              <p className="text-xs text-maroon font-medium">
                Traditional Banarasi Craftsmanship
              </p>
            </div>
          </div>
          
          {/* Decorative pattern */}
          <div className="absolute -top-10 -right-10 w-32 h-32 silk-texture opacity-30 rounded-full"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 silk-texture opacity-20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
