import React, { useState, useEffect } from 'react';
import ServiceCard, { serviceData } from './ServiceCard';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * custom,
        ease: "easeOut"
      }
    })
  };

  const decorationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <section id="therapies" className="py-24 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      {isMobile ? (
        <>
          <motion.div 
            className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
            initial="hidden"
            animate="visible"
            variants={decorationVariants}
          >
            <motion.div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200 blur-3xl"></motion.div>
            <motion.div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-green-300 blur-3xl"></motion.div>
          </motion.div>
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-green-300 blur-3xl"></div>
        </div>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        {isMobile ? (
          // Mobile view with animations
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center bg-green-100/50 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Leaf className="w-4 h-4 mr-2" />
              <span>Holistic Healing</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-bold text-green-800 mb-6 leading-tight"
              variants={titleVariants}
            >
              Our <span className="text-green-600">Therapies</span>
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-gray-700 mx-auto leading-relaxed"
              variants={subtitleVariants}
            >
              We offer a comprehensive range of authentic Ayurvedic treatments and therapies to promote healing, balance, and overall wellbeing.
            </motion.p>
          </motion.div>
        ) : (
          // Desktop view without animations
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center bg-green-100/50 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4 mr-2" />
              <span>Holistic Healing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
              Our <span className="text-green-600">Therapies</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of authentic Ayurvedic treatments and therapies to promote healing, balance, and overall wellbeing.
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isMobile ? (
            // Mobile view with animations for each service card
            serviceData.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              </motion.div>
            ))
          ) : (
            // Desktop view without animations
            serviceData.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;