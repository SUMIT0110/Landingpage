import React, { useState, useEffect } from 'react';
import { FaAward, FaUserMd, FaBookMedical, FaLinkedin, FaFileAlt, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import doc1Image from '../asstes/doc1.jpg';
import doc2Image from '../asstes/doc2.jpg';
import cv1 from '../asstes/cv/cv1.pdf';
import cv2 from '../asstes/cv/cv2.pdf';

const Doctors: React.FC = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3 * custom,
        ease: "easeOut"
      }
    })
  };
  
  // Horizontal slide variants for desktop cards
  const slideCardVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      x: custom % 2 === 0 ? -30 : 30 // Even indices slide from left, odd from right (reduced distance)
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({ 
      opacity: 1,
      transition: { 
        delay: 0.2 * custom,
        duration: 0.4
      }
    })
  };

  const doctors = [
    {
      name: 'Dr. Bhairav Kulkarni',
      specialization: 'Ayurvedic Physician & Panchakarma Specialist',
      image: doc1Image,
      cv: cv1,
      description: 'Director of Shree Siddhivinayak Ayurveda with 15+ years experience. Specializes in chronic diseases like Diabetes, Osteoarthritis, and Spine disorders. International speaker with 200+ conferences.',
      qualifications: 'BAMS, MD (Kayachikitsa), Ph.D (Scholar)',
      achievements: '33+ research papers, 14 National & 24 International Awards',
      patents: '2 patents in herbal formulations'
    },
    {
      name: 'Dr. Yashashree Kulkarni',
      specialization: 'Ayurvedic Consultant & Research Specialist',
      image: doc2Image,
      cv: cv2,
      description: 'Expert in Rognidan with extensive research experience. Published multiple papers on Ayurvedic treatments for osteoporosis and diabetes management.',
      qualifications: 'BAMS, MD (Rognidan)',
      achievements: 'Recipient of Health Excellence Awards',
      research: '5+ published research papers in international journals'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-6">
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
              className="text-4xl font-extrabold text-green-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Meet Our Experts
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-green-600 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.p 
              className="text-gray-600 text-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Leaders in Ayurvedic medicine, committed to your holistic wellness journey.
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
              className="text-5xl font-extrabold text-green-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Meet Our Experts
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-green-600 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.p 
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Leaders in Ayurvedic medicine, committed to your holistic wellness journey.
            </motion.p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {doctors.map((doctor, index) => (
            isMobile ? (
              // Mobile view with animations
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-green-300 transition-all duration-500 border border-green-100 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={cardVariants}
              >
                <div className="flex flex-col md:flex-row">
                  <motion.div 
                    className="relative h-64 overflow-hidden bg-gradient-to-br from-green-50 to-green-100"
                    variants={imageVariants}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </motion.div>
                  <div className="bg-gradient-to-r from-green-800 to-green-700 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{doctor.name}</h3>
                    <p className="text-green-200 text-lg mb-4">{doctor.specialization}</p>
                    <div className="flex space-x-3 mt-2">
                      <a href="https://www.linkedin.com/in/dr-bhairav-kulkarni-tawshikar-a7635420?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="p-8 space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.p 
                    className="text-gray-700 text-md leading-relaxed"
                    custom={0}
                    variants={sectionVariants}
                  >
                    {doctor.description}
                  </motion.p>

                  <motion.div
                    custom={1}
                    variants={sectionVariants}
                  >
                    <div className="flex items-center gap-3 text-green-700 font-semibold">
                      <div className="bg-green-100 p-2 rounded-full">
                        <FaUserMd size={18} />
                      </div>
                      <span>Qualifications</span>
                    </div>
                    <p className="text-gray-800 ml-10 border-l-2 border-green-200 pl-4">{doctor.qualifications}</p>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-sm space-y-4"
                    custom={2}
                    variants={sectionVariants}
                  >
                    <div className="flex items-center gap-3 text-green-700 font-semibold">
                      <div className="bg-green-100 p-2 rounded-full">
                        <FaAward size={18} />
                      </div>
                      <span>Achievements</span>
                    </div>
                    <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">{doctor.achievements}</p>

                    {doctor.patents && (
                      <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">• {doctor.patents}</p>
                    )}
                    {doctor.research && (
                      <div className="flex items-center gap-3 text-green-700 font-semibold mt-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <FaBookMedical size={18} />
                        </div>
                        <span>Research</span>
                      </div>
                    )}
                    {doctor.research && (
                      <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">{doctor.research}</p>
                    )}
                  </motion.div>
                  
                  {/* CV Download Button */}
                  <motion.div 
                    className="mt-6 flex justify-center"
                    custom={3}
                    variants={sectionVariants}
                  >
                    <a 
                      href={doctor.cv} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 shadow-md"
                    >
                      <FaFileAlt />
                      <span>View CV</span>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              // Desktop view with animations - slide from opposite directions
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-green-300 transition-all duration-500 border border-green-100 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={slideCardVariants}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-80 md:h-auto overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: 'center', objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                  <div className="md:w-2/3 bg-gradient-to-r from-green-800 to-green-700 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-2">{doctor.name}</h3>
                    <p className="text-green-200 text-lg mb-4">{doctor.specialization}</p>
                    <div className="flex space-x-3 mt-2">
                      <a href="https://www.linkedin.com/in/dr-bhairav-kulkarni-tawshikar-a7635420?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors duration-300">
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <p className="text-gray-700 text-md leading-relaxed">{doctor.description}</p>

                  <div className="flex items-center gap-3 text-green-700 font-semibold">
                    <div className="bg-green-100 p-2 rounded-full">
                      <FaUserMd size={18} />
                    </div>
                    <span>Qualifications</span>
                  </div>
                  <p className="text-gray-800 ml-10 border-l-2 border-green-200 pl-4">{doctor.qualifications}</p>

                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center gap-3 text-green-700 font-semibold">
                      <div className="bg-green-100 p-2 rounded-full">
                        <FaAward size={18} />
                      </div>
                      <span>Achievements</span>
                    </div>
                    <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">{doctor.achievements}</p>

                    {doctor.patents && (
                      <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">• {doctor.patents}</p>
                    )}
                    {doctor.research && (
                      <div className="flex items-center gap-3 text-green-700 font-semibold mt-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <FaBookMedical size={18} />
                        </div>
                        <span>Research</span>
                      </div>
                    )}
                    {doctor.research && (
                      <p className="text-gray-700 ml-10 border-l-2 border-green-200 pl-4 text-sm">{doctor.research}</p>
                    )}
                  </div>
                  
                  {/* CV Download Button */}
                  <div className="mt-6 flex justify-center pb-6">
                    <a 
                      href={doctor.cv} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 shadow-md"
                    >
                      <FaFileAlt />
                      <span>View CV</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
