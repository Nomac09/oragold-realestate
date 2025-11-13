import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact', label: 'Contact' },
  ];

  if (!isClient) {
    return <header className="fixed w-full bg-white z-50 py-6 border-b border-gray-100 shadow-sm"></header>;
  }

  return (
    <header className="fixed w-full bg-white z-50 py-6 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <span className="text-white font-serif text-xl">O</span>
          </div>
          <span className="text-2xl font-serif font-light tracking-wider text-black">ORAGOLD</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="font-light text-gray-800 hover:text-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed inset-0 bg-white z-40 pt-20"
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-xl font-light text-gray-800 hover:text-gold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;