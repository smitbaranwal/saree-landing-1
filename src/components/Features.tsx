
import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Direct from Bunkar',
      description: 'No middlemen, fair pricing for artisans',
      icon: 'weavers',
    },
    {
      id: 2,
      title: '100% Authentic Banarasi Weaves',
      description: 'Certified handloom sarees with traditional patterns',
      icon: 'certificate',
    },
    {
      id: 3,
      title: 'Limited Period Launch Offer',
      description: 'Lowest-ever price for first buyers',
      icon: 'offer',
    }
  ];

  return (
    <section className="section-spacing bg-ivory-light relative" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full silk-texture opacity-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Why Buy From Us?
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're committed to bringing you authentic Banarasi sarees while supporting the traditional artisans who create them.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="glass-card rounded-lg p-8 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="mb-5">
                {feature.icon === 'weavers' && (
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 22H20" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 10V18H6M21 10V18H18M6 10V18M18 10V18M6 14H18M6 10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                {feature.icon === 'certificate' && (
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 11L10 14L17 7" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                {feature.icon === 'offer' && (
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 15L15 9" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 9H15V14" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual storytelling element */}
      <div className="mt-20 relative">
        <div className="container mx-auto px-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
                  Every Thread Tells a Story
                </h3>
                <p className="text-gray-700 mb-6">
                  For centuries, the weavers of Varanasi have been creating Banarasi sarees with intricate designs that are admired worldwide. By purchasing directly from these artisans, you're not just getting an authentic piece of craft—you're supporting a rich heritage and sustainable livelihood.
                </p>
                <a href="#notify-me" className="text-maroon font-medium hover:text-gold transition-colors inline-flex items-center">
                  Join our journey
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1609588553740-91938be14f27?q=80&w=800&auto=format" 
                  alt="Saree weaving process"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
