import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ParallaxSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.scrollY;
      const speed = 0.3; // Increased speed for more noticeable effect
      const yPos = -(scrolled * speed);
      parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Parallax Background - Starting from top of image */}
      <div 
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-[120vh] z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/roof.jpg"
            alt="rooftop dubai"
            fill
            sizes="100vw"
            style={{ 
              objectFit: "cover",
              objectPosition: "center top" // This ensures the top of the image is visible first
            }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif font-light mb-6"
        >
          ORA GOLD REAL ESTATE
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-3xl mb-10"
        >
          Exclusive luxury properties in Dubai's most prestigious locations
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 text-lg transition duration-300 ease-in-out uppercase tracking-wider"
        >
          DISCOVER PROPERTIES
        </motion.button>
      </div>
    </section>
  );
};

export default ParallaxSection;