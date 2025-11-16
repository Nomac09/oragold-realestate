import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white" style={{ marginTop: 0 }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-light mb-4"
          >
            DEFINING LUXURY, DELIVERING EXCELLENCE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            We are committed to bringing luxury living closer to our clients by reimagining real estate in Dubai.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[500px] relative rounded-lg overflow-hidden shadow-xl"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image 
                src="/images/oragold-building.jpg" 
                alt="ORA GOLD Building"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-6">
              Founded on principles of exceptional quality and meticulous attention to detail, Oragold Realestate stands as a beacon of sophistication in Dubai's dynamic property landscape.
            </p>
            <p className="text-gray-700 mb-6">
              We don't just find properties; we uncover golden possibilities tailored to your vision of luxury. Our team of seasoned professionals brings deep market knowledge and a commitment to excellence in every transaction.
            </p>
            <p className="text-gray-700">
              Located in the heart of Jumeirah Village Circle, we are perfectly positioned to serve Dubai's most discerning clients in their pursuit of exceptional properties and investment opportunities across the emirate's most prestigious locations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;