import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaShieldAlt, FaChartLine, FaNetworkWired } from 'react-icons/fa';

const Philosophy: React.FC = () => {
  const philosophyItems = [
    {
      title: "Bespoke Consultancy",
      description: "Your vision is unique. Our approach is tailored exclusively to you, ensuring personalized service that exceeds expectations.",
      icon: <FaUserTie className="text-3xl" />
    },
    {
      title: "Discretion & Trust",
      description: "We operate with the utmost confidentiality and integrity, building lasting relationships based on trust and reliability.",
      icon: <FaShieldAlt className="text-3xl" />
    },
    {
      title: "Market Mastery",
      description: "Deep, insightful knowledge of Dubai's premium real estate sectors ensures you make informed, strategic decisions.",
      icon: <FaChartLine className="text-3xl" />
    },
    {
      title: "Golden Network",
      description: "Access to an exclusive portfolio of off-market and premier listings through our extensive industry connections.",
      icon: <FaNetworkWired className="text-3xl" />
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-light mb-4"
          >
            Our Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-600 font-light"
          >
            With passion we build, with commitment we develop, and with heart we deliver.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-gold mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-light mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;