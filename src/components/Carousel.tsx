import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const properties = [
  {
    id: 1,
    title: 'Luxury Penthouse',
    location: 'Downtown Dubai',
    price: 'AED 15,000,000',
    image: '/images/property1.jpg',
    features: ['5 Bedrooms', '6 Bathrooms', 'Private Pool', 'Panoramic Views'],
  },
  {
    id: 2,
    title: 'Waterfront Villa',
    location: 'Palm Jumeirah',
    price: 'AED 25,000,000',
    image: '/images/property2.jpg',
    features: ['6 Bedrooms', '7 Bathrooms', 'Private Beach Access', 'Smart Home System'],
  },
  {
    id: 3,
    title: 'Modern Apartment',
    location: 'Dubai Marina',
    price: 'AED 5,500,000',
    image: '/images/property3.jpg',
    features: ['3 Bedrooms', '3.5 Bathrooms', 'Marina View', 'Premium Finishes'],
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + properties.length) % properties.length);
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };
  
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  
  const property = properties[currentIndex];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">FEATURED PROPERTIES</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our collection of exceptional properties in Dubai's most prestigious locations.
          </p>
        </div>
        
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Property Image - Replaced with a colored box */}
                <div className="bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                  <h3 className="text-xl font-serif text-center">PROPERTY IMAGE</h3>
                </div>
                
                {/* Property Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <p className="text-gold-500 text-xl font-medium mb-6">{property.price}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-800 font-medium mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {property.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-black text-white hover:bg-gold-500 transition duration-300 px-6 py-3 uppercase text-sm tracking-wider">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition duration-300"
            onClick={handlePrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition duration-300"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;