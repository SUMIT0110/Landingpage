import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
26import bgImage from '../asstes/bg1.avif';

const Hero: React.FC = () => {
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

  // Animation variants for text elements
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 1.0,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/40"></div>

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {isMobile ? (
          // Mobile view with animations
          <>
            <motion.h1 
              className="text-4xl font-bold text-white mb-6"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              Shree Siddhivinayak Ayurveda Panchakarma Center
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 mx-auto"
              initial="hidden"
              animate="visible"
              variants={descriptionVariants}
            >
              Ayurveda is an ancient healing science that nurtures body, mind, and spirit, promoting balance, vitality, and lifelong wellness.
            </motion.p>
            
            <motion.a 
              href="#appointment"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="inline-block"
            >
              <motion.button className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full focus:outline-none">
                Book My Appointment
              </motion.button>
            </motion.a>
          </>
        ) : (
          // Desktop view with animations
          <>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              Shree Siddhivinayak Ayurveda Panchakarma Center
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 max-w-2xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={descriptionVariants}
            >
              Ayurveda is an ancient healing science that nurtures body, mind, and spirit, promoting balance, vitality, and lifelong wellness.
            </motion.p>
            
            <motion.a 
              href="#appointment"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="inline-block"
            >
              <button className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full focus:outline-none">
                Book My Appointment
              </button>
            </motion.a>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
