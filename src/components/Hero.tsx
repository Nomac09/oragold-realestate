import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Carousel from './Carousel';

const Hero: React.FC = () => {
  const dubaiImages = [
    "/images/dubai-skyline.jpg",
    "/images/dubai-marina.jpg",
    "/images/dubai-palm-jumeirah.jpg",
    "/images/dubai-burj-khalifa.jpg",
    "/images/dubai-beach.jpg"
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel images={dubaiImages} interval={7000} />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold uppercase tracking-[6px] mb-4 text-sm md:text-base">
            LUXURY REAL ESTATE
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight">
            REIMAGINING LUXURY LIVING IN DUBAI
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 font-light">
            Oragold Realestate stands as a beacon of sophistication and trust in Dubai's dynamic property landscape, offering bespoke real estate solutions with unparalleled attention to detail.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white text-white px-8 py-3 text-sm uppercase tracking-[2px] transition-all duration-300 hover:bg-white hover:text-black"
          >
            DISCOVER OUR VISION
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;