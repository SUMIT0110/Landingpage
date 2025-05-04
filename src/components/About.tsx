import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2 * custom + 0.6,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-6">
        {isMobile ? (
          // Mobile view with image on top
          <div className="flex flex-col gap-16">
            {/* Image first in mobile view */}
            <motion.div 
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={imageVariants}
            >
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ayurvedic treatment center" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover object-center"
              />
            </motion.div>
            
            {/* Text Content below image */}
            <motion.div 
              className="w-full bg-white/80 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-4xl font-extrabold text-green-800 mb-6"
                variants={titleVariants}
              >
                About Us
              </motion.h2>
              
              <motion.p 
                className="text-md text-gray-700 mb-6 leading-relaxed"
                variants={textVariants}
              >
                Shree Siddhivinayak Ayurveda Panchakarma Center, Aurangabad, has been practicing pure Ayurveda consultation and treatments for over 15 years. Thousands of patients have been successfully treated through authentic Ayurvedic methods, achieving remarkable results in chronic conditions such as Diabetes, Osteoarthritis, Obesity, Infertility, and major spine and joint disorders.
              </motion.p>
              
              <motion.p 
                className="text-md text-gray-700 mb-6 leading-relaxed"
                variants={textVariants}
              >
                Our mission is to restore balance and encourage natural healing through personalized Ayurvedic practices rooted in sustainability, purity, and care.
              </motion.p>
              
              <motion.p 
                className="text-md text-gray-700 mb-10 leading-relaxed"
                variants={textVariants}
              >
                We are proud to announce that we have expanded our services to include online consultations, which have been receiving excellent feedback from patients worldwide. This allows us to extend our authentic Ayurvedic care beyond geographical boundaries.
              </motion.p>

              {/* Features */}
              <div className="space-y-6">
                {[
                  'Certified Ayurvedic doctors with 15+ years of experience',
                  'Authentic therapies using organic, sustainably sourced herbs',
                  'Customized treatment plans for long-term wellness and healing',
                  'Online consultations available with highly positive patient feedback',
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx}
                    variants={featureVariants}
                  >
                    <motion.div 
                      className="bg-green-100 text-green-700 p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle2 size={24} />
                    </motion.div>
                    <p className="text-gray-800 text-md">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          // Desktop view with animations
          <div className="flex flex-row items-center gap-16">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={imageVariants}
            >
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ayurvedic treatment center" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover object-center"
              />
            </motion.div>
                  
            <motion.div 
              className="md:w-1/2 bg-white/80 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                className="text-5xl font-extrabold text-green-800 mb-6"
                variants={titleVariants}
              >
                About Us
              </motion.h2>
              <motion.p 
                className="text-md text-gray-700 mb-6 leading-relaxed"
                variants={textVariants}
              >
                Shree Siddhivinayak Ayurveda Panchakarma Center, Aurangabad, has been practicing pure Ayurveda consultation and treatments for over 15 years. Thousands of patients have been successfully treated through authentic Ayurvedic methods, achieving remarkable results in chronic conditions such as Diabetes, Osteoarthritis, Obesity, Infertility, and major spine and joint disorders.
              </motion.p>
              <motion.p 
                className="text-md text-gray-700 mb-6 leading-relaxed"
                variants={textVariants}
              >
                Our mission is to restore balance and encourage natural healing through personalized Ayurvedic practices rooted in sustainability, purity, and care.
              </motion.p>
              
              <motion.p 
                className="text-md text-gray-700 mb-10 leading-relaxed"
                variants={textVariants}
              >
                We are proud to announce that we have expanded our services to include online consultations, which have been receiving excellent feedback from patients worldwide. This allows us to extend our authentic Ayurvedic care beyond geographical boundaries.
              </motion.p>

              {/* Features */}
              <div className="space-y-6">
                {[
                  'Certified Ayurvedic doctors with 15+ years of experience',
                  'Authentic therapies using organic, sustainably sourced herbs',
                  'Customized treatment plans for long-term wellness and healing',
                  'Online consultations available with highly positive patient feedback',
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx}
                    variants={featureVariants}
                  >
                    <motion.div 
                      className="bg-green-100 text-green-700 p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle2 size={24} />
                    </motion.div>
                    <p className="text-gray-800 text-md">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
