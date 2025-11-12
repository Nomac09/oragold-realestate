import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services: React.FC = () => {
  const services = [
    {
      title: "LUXURY PROPERTIES",
      description: "A picturesque moment of the perfect blend of luxury and purposeful design, Oragold Properties is the epitome of intricate detail that forms the most beautiful and harmoniously designed properties.",
      image: "/images/luxury-properties.jpg"
    },
    {
      title: "INVESTMENT OPPORTUNITIES",
      description: "Our developments are a symbol of prosperity and the realization of aspirations. We are committed to availing an exceptional lifestyle that is second to none.",
      image: "/images/investment-opportunities.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-light mb-4 text-black"
          >
            OUR SERVICES
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-600 font-light"
          >
            We pursue the perfect balance between the environment and human needs, delivering meaningful impact for society.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-light mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-gold font-light uppercase tracking-[2px] group"
                >
                  View Properties
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;