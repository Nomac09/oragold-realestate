import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.scrollY;
      const speed = 0.2;
      const yPos = -(scrolled * speed);
      parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-[150%] z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/dubai.jpg"
            alt="Dubai Luxury"
            fill
            sizes="100vw"
            style={{ 
              objectFit: "cover",
              objectPosition: "center center" 
            }}
          />
          {/* Reduced opacity overlay to show more of the image */}
          <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-light mb-4 text-black"
          >
            UNPARALLELED LUXURY IN EVERY DETAIL
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700"
          >
            Experience the pinnacle of Dubai's real estate market with properties that transcend the ordinary.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-gold-500 text-4xl">★</span>
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">BESPOKE CONSULTANCY</h3>
              <p className="text-gray-700 text-sm">
                Your vision is unique. Our approach is tailored exclusively to you, ensuring personalized service that exceeds expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-gold-500 text-4xl">⟡</span>
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">DISCRETION & TRUST</h3>
              <p className="text-gray-700 text-sm">
                We operate with the utmost confidentiality and integrity, building lasting relationships based on trust and reliability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-gold-500 text-4xl">◈</span>
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">MARKET MASTERY</h3>
              <p className="text-gray-700 text-sm">
                Deep, insightful knowledge of Dubai's premium real estate sectors ensures you make informed, strategic decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-gold-500 text-4xl">✧</span>
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">GOLDEN NETWORK</h3>
              <p className="text-gray-700 text-sm">
                Access to an exclusive portfolio of off-market and premier listings through our extensive industry connections.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 italic text-gray-700"
          >
            <p className="text-lg">
              "At ORA GOLD, we believe that luxury is not just about opulence, but about creating meaningful spaces that enrich lives and stand the test of time."
            </p>
            <p className="mt-2 text-sm text-gold-500">— ORA GOLD Real Estate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;