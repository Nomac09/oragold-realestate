import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-light mb-4 text-black"
          >
            DEFINING LUXURY, DELIVERING EXCELLENCE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-600 font-light"
          >
            We are committed to bring happiness one step closer to our communities by rethinking the way we live.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              Founded on the same principles of bespoke quality and unparalleled attention to detail as our sister brand, La Donna Di Ferro, Oragold Realestate offers a discreet and personalized gateway to Dubai's most exclusive real estate opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We don't just find properties; we uncover golden possibilities tailored to your vision of luxury. Our team of seasoned professionals brings deep market knowledge and a commitment to excellence in every transaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Located in the heart of Jumeirah Village Circle, we are perfectly positioned to serve Dubai's most discerning clients in their pursuit of exceptional properties and investment opportunities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/about-image.jpg" 
              alt="Luxury Property in Dubai"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;