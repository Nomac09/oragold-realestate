import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Carousel from './Carousel';

const Hero: React.FC = () => {
  // Define your images array
  const dubaiImages = [
    "/images/dubai-skyline.jpg",
    "/images/dubai-marina.jpg",
    "/images/dubai-palm-jumeirah.jpg",
    "/images/dubai-burj-khalifa.jpg",
    "/images/dubai-beach.jpg",
    "/images/hero-background.jpg",
    "/images/about-image.jpg",
    "/images/luxury-properties.jpg",
    "/images/investment-opportunities.jpg",
    "/images/logo-gold.png"
  ];

  // Filter out any undefined or empty image paths
  const validImages = dubaiImages.filter(image => image && image.trim() !== '');

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel images={validImages} interval={5000} />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Minimalist Content Section */}
      <div className="relative z-10 w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex justify-center">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-serif text-xl">O</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-6 leading-tight text-white">
                REIMAGINING LUXURY LIVING IN DUBAI
              </h1>
              
              <p className="text-lg md:text-xl mb-8 font-light text-white max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;