
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="animate-fade-in">
          <a href="#" className="font-serif text-2xl text-maroon font-semibold tracking-wider">
            WEVAMA
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 animate-fade-in">
          {['Home', 'About', 'Contact', 'Notify Me'].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium text-sm tracking-wide hover:text-gold transition-colors py-2
                ${item === 'Notify Me' ? 'text-maroon border border-maroon rounded-md px-4 hover:bg-maroon hover:text-white' : 'text-gray-700'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {['Home', 'About', 'Contact', 'Notify Me'].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium text-sm tracking-wide py-2 px-4 ${item === 'Notify Me' ? 'text-maroon' : 'text-gray-700'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
