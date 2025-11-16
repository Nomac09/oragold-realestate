import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-3 md:mb-4"
          >
            EXCEPTIONAL SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base"
          >
            Discover our comprehensive range of real estate services tailored to your unique needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
              <Image 
                src="/images/services1.jpg"
                alt="Luxury Properties"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={true}
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-serif mb-2 sm:mb-3">LUXURY PROPERTIES</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                A picturesque moment of the perfect blend of luxury and purposeful design.
              </p>
              <a href="#" className="text-[#E8D6A9] uppercase text-sm font-medium hover:underline">Explore Properties</a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
              <Image 
                src="/images/services2.jpg"
                alt="Investment Opportunities"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-serif mb-2 sm:mb-3">INVESTMENT OPPORTUNITIES</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Our developments are a symbol of prosperity and the realization of aspirations.
              </p>
              <a href="#" className="text-[#E8D6A9] uppercase text-sm font-medium hover:underline">Discover Investments</a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white shadow-lg rounded-lg overflow-hidden sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 sm:max-w-md lg:max-w-none"
          >
            <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
              <Image 
                src="/images/services3.jpg"
                alt="Bespoke Consultancy"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-serif mb-2 sm:mb-3">BESPOKE CONSULTANCY</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Tailored advice from our expert consultants to guide your real estate journey.
              </p>
              <a href="#" className="text-[#E8D6A9] uppercase text-sm font-medium hover:underline">Learn More</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;