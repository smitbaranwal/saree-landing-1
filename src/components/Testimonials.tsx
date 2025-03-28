
import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Priyanka Sharma",
      location: "Delhi",
      quote: "The quality and craftsmanship of the Banarasi saree I received was exceptional. You can feel the heritage in every thread.",
      image: "../../../instagram3.jpg"
    },
    {
      id: 2,
      name: "Anjali Patel",
      location: "Mumbai",
      quote: "Knowing that my purchase directly supports the artisans makes it even more special. The saree became the highlight of my sister's wedding.",
      image: "../../../instagram4.jpg"
    },
    {
      id: 3,
      name: "Rekha Menon",
      location: "Bangalore",
      quote: "The intricate zari work and the rich color of my Banarasi saree exceeded my expectations. It's an heirloom piece I'll cherish forever.",
      image: "../../../instagram3.jpg"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-spacing bg-maroon-light/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Customer Love
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Join 1000+ saree lovers who trust our craftsmanship
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div>
                  <svg className="w-10 h-10 text-gold/30 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  
                  <blockquote className="text-xl md:text-2xl font-serif text-gray-800 mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-medium text-gray-900">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="w-10 h-10 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-gold w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="w-10 h-10 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Instagram Grid */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-serif font-semibold text-gray-900">
              Follow Our Journey
            </h3>
            <p className="text-gray-600 mt-2">
              @banarasi_sarees
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <a 
                key={item}
                href="#"
                className="block overflow-hidden rounded-lg shadow-sm transform transition-transform hover:scale-105 hover:shadow-md"
              >
                <img 
                  src={`../../../instagram${item}.jpg`} 
                  alt={`Instagram post ${item}`}
                  className="w-full h-auto aspect-square object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
