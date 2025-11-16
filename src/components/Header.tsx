import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - (window.innerWidth < 768 ? 80 : 100), // Smaller offset on mobile
        behavior: 'smooth'
      });
    }
  };

  // Exact champagne gold color from the image
  const exactGoldColor = "#E8D6A9";
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 md:py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Text Logo with responsive sizing */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }} 
            className="cursor-pointer"
            aria-label="Go to homepage"
          >
            <div className="flex flex-col items-center">
              <span 
                className="font-serif text-xl sm:text-2xl md:text-3xl font-light"
                style={{ color: exactGoldColor }}
              >
                ORA
              </span>
              <span 
                className="font-serif text-xl sm:text-2xl md:text-3xl font-light"
                style={{ color: exactGoldColor }}
              >
                GOLD
              </span>
              <span 
                className="font-serif tracking-widest"
                style={{ 
                  color: exactGoldColor,
                  fontSize: "0.55rem",
                  lineHeight: "1"
                }}
              >
                REAL ESTATE
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`font-serif text-sm tracking-wider transition-colors py-2 px-1 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#E8D6A9]`}
                  aria-label="Go to About section"
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className={`font-serif text-sm tracking-wider transition-colors py-2 px-1 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#E8D6A9]`}
                  aria-label="Go to Services section"
                >
                  SERVICES
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`font-serif text-sm tracking-wider transition-colors py-2 px-1 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#E8D6A9]`}
                  aria-label="Go to Contact section"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button with larger touch target */}
          <button 
            className="md:hidden p-2 -mr-2" // Added padding for larger touch target
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu with improved touch targets */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <ul className="flex flex-col">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`font-serif text-sm tracking-wider transition-colors w-full text-left py-4 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#E8D6A9]`}
                  aria-label="Go to About section"
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className={`font-serif text-sm tracking-wider transition-colors w-full text-left py-4 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#E8D6A9]`}
                  aria-label="Go to Services section"
                >
                  SERVICES
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`font-serif text-sm tracking-wider transition-colors w-full text-left py-4 ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#E8D6A9]`}
                  aria-label="Go to Contact section"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;