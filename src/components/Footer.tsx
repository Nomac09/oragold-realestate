import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-serif font-light mb-6 flex items-center">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-serif text-xl">O</span>
              </div>
              ORAGOLD
            </div>
            <p className="text-gray-400 mb-6">
              Oragold Realestate stands as a beacon of sophistication and trust in Dubai's dynamic property landscape, offering bespoke real estate solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold uppercase tracking-[2px] mb-6">SERVICES</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-gold transition-colors">Luxury Properties</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold transition-colors">Investment Opportunities</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold transition-colors">Consultancy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold transition-colors">Property Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold uppercase tracking-[2px] mb-6">COMPANY</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="#philosophy" className="text-gray-400 hover:text-gold transition-colors">Our Philosophy</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Oragold Realestate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;