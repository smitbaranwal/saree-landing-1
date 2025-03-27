
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white relative">
      {/* Final CTA */}
      <div className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 silk-texture opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
              Be the first to own an exquisite Banarasi saree at an unbelievable price!
            </h2>
            <a 
              href="#notify-me" 
              className="cta-button inline-block mt-6"
            >
              Claim Your Early Bird Discount
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer content */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <a href="#" className="font-serif text-2xl text-maroon font-semibold tracking-wider inline-block mb-4">
                बनारसी
              </a>
              <p className="text-sm text-gray-600 max-w-xs">
                Every saree you buy supports a local weaver and keeps the tradition alive.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">
                Navigate
              </h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Contact', 'Notify Me'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-600 hover:text-gold transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4 mb-6">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold/20 hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gold/20 hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Email: contact@banarasi-sarees.com
                </p>
                <p className="text-sm text-gray-600">
                  WhatsApp: +91 98765 43210
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Banarasi Sarees. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
