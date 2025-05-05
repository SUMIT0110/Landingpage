import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/footer';

// Import clinic images
import image1 from '../../asstes/clinik/1.jpg';
import image2 from '../../asstes/clinik/2.JPG';
import image3 from '../../asstes/clinik/3.JPG';
import image4 from '../../asstes/clinik/4.JPG';
import image5 from '../../asstes/clinik/5.JPG';
import image6 from '../../asstes/clinik/6.JPG';
import image7 from '../../asstes/clinik/7.JPG';
import image8 from '../../asstes/clinik/8.JPG';

const HeroPage: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };
  
  const imageHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-12 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Our Clinic Gallery
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Modern Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[image1, image2, image3, image4].map((img, index) => (
              <motion.div 
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                variants={fadeInUp}
              >
                <motion.div 
                  className="aspect-square overflow-hidden"
                  variants={imageHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <img 
                    src={img} 
                    alt={`Clinic Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Gallery View */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[image5, image6, image7, image8].map((img, index) => (
              <motion.div 
                key={index}
                className={`rounded-lg overflow-hidden shadow-md ${index === 0 ? 'col-span-2' : ''}`}
                variants={fadeInUp}
              >
                <motion.div 
                  variants={imageHover}
                  initial="rest"
                  whileHover="hover"
                  className="w-full h-full"
                >
                  <img 
                    src={img} 
                    alt={`Clinic Detail ${index + 5}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeroPage;