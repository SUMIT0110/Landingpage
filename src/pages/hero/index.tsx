import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/footer';

const HeroPage: React.FC = () => {
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
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2 * custom + 0.5
      }
    })
  };

  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center py-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/6663359/pexels-photo-6663359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-transparent"></div>

        {/* Hero content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          {isMobile ? (
            // Mobile view with animations
            <>
              <motion.h1 
                className="text-4xl font-bold text-white mb-8"
                initial="hidden"
                animate="visible"
                variants={headingVariants}
              >
                Discover the Power of Ayurveda
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white mb-10 mx-auto"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                Ancient wisdom for modern well-being
              </motion.p>
              
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={cardVariants}
              >
                <motion.img 
                  src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ayurvedic Herbs" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  animate="float"
                  variants={floatVariants}
                />
                <h3 className="text-white text-xl font-semibold mb-2">Holistic Healing</h3>
                <p className="text-white/90">Healing that treats the whole person - body, mind, and spirit</p>
              </motion.div>
              
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl p-6"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={cardVariants}
              >
                <motion.img 
                  src="https://images.pexels.com/photos/3962674/pexels-photo-3962674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ayurvedic Treatment" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  animate="float"
                  variants={floatVariants}
                />
                <h3 className="text-white text-xl font-semibold mb-2">Natural Remedies</h3>
                <p className="text-white/90">Pure, natural treatments without side effects</p>
              </motion.div>
            </>
          ) : (
            // Desktop view without animations
            <>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Discover the Power of Ayurveda
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Ancient wisdom for modern well-being
              </p>
              <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-80">
                  <img 
                    src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Ayurvedic Herbs" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-white text-xl font-semibold mb-2">Holistic Healing</h3>
                  <p className="text-white/90">Healing that treats the whole person - body, mind, and spirit</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-80">
                  <img 
                    src="https://images.pexels.com/photos/3962674/pexels-photo-3962674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Ayurvedic Treatment" 
                    className="w-full h-48 object-cover rounded-lg mb-4" 
                  />
                  <h3 className="text-white text-xl font-semibold mb-2">Natural Remedies</h3>
                  <p className="text-white/90">Pure, natural treatments without side effects</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeroPage; 