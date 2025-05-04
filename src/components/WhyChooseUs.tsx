import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { UserRound, Leaf, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 * custom,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    },
    hover: { 
      scale: 1.1,
      backgroundColor: "#16a34a",
      color: "#ffffff",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        {isMobile ? (
          // Mobile view with animations
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            <motion.h2 
              className="text-4xl font-bold text-green-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="text-gray-600 mx-auto leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience holistic healing with our authentic Ayurvedic treatments, tailored by experts who truly care about your wellbeing. We now offer online consultations that have received excellent feedback from patients worldwide.
            </motion.p>
          </motion.div>
        ) : (
          // Desktop view with animations
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            <motion.h2 
              className="text-4xl font-bold text-green-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience holistic healing with our authentic Ayurvedic treatments, tailored by experts who truly care about your wellbeing. We now offer online consultations that have received excellent feedback from patients worldwide.
            </motion.p>
          </motion.div>
        )}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {isMobile ? (
            // Mobile view with animations
            <>
              {/* Card 1 */}
              <motion.div 
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={0}
                variants={cardVariants}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <UserRound className="text-green-700 group-hover:text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Experienced Doctors</h3>
                <p className="text-center text-gray-600">
                  Our senior Ayurvedic practitioners bring decades of deep clinical experience and compassion to every consultation.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={1}
                variants={cardVariants}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Leaf className="text-green-700 group-hover:text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Authentic Treatments</h3>
                <p className="text-center text-gray-600">
                  Every therapy follows true classical Ayurveda using organic herbs, ensuring purity and lasting wellness.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={2}
                variants={cardVariants}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Heart className="text-green-700 group-hover:text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Personalized Care</h3>
                <p className="text-center text-gray-600">
                  Each healing plan is customized to suit your individual body type, lifestyle, and wellness goals. Our online consultations provide the same personalized attention with the convenience of remote access.
                </p>
              </motion.div>
            </>
          ) : (
            // Desktop view with animations
            <>
              {/* Card 1 */}
              <motion.div 
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={0}
                variants={cardVariants}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <UserRound className="text-green-700 group-hover:text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Experienced Doctors</h3>
                <p className="text-center text-gray-600">
                  Our senior Ayurvedic practitioners bring decades of deep clinical experience and compassion to every consultation.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={1}
                variants={cardVariants}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Leaf className="text-green-700 group-hover:text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Authentic Treatments</h3>
                <p className="text-center text-gray-600">
                  Every therapy follows true classical Ayurveda using organic herbs, ensuring purity and lasting wellness.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={2}
                variants={cardVariants}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full mx-auto group-hover:bg-green-600 transition"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Heart className="text-green-700 group-hover:text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold text-center text-green-800 mb-4">Personalized Care</h3>
                <p className="text-center text-gray-600">
                  Each healing plan is customized to suit your individual body type, lifestyle, and wellness goals. Our online consultations provide the same personalized attention with the convenience of remote access.
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
