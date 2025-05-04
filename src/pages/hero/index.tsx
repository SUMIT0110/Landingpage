import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/footer';

// Import clinic images
import panchakarmaImg from '../../asstes/Panchakarma.jpeg';
import shirodaraImg from '../../asstes/Shirodhara.jpeg';
import massageImg from '../../asstes/massage.jpeg';
import herbalImg from '../../asstes/herbal.jpeg';
import yogaImg from '../../asstes/yoga.jpeg';
import consultationImg from '../../asstes/Consultation.png';

const HeroPage: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const imageHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" }
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
              Our Ayurvedic Clinic
            </h1>
            <p className="text-lg text-green-700 mb-8">
              Experience authentic healing in our tranquil and rejuvenating environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">

          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Panchakarma Treatment Room */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                variants={imageHover}
                initial="rest"
                whileHover="hover"
              >
                <img 
                  src={panchakarmaImg} 
                  alt="Panchakarma Treatment Room" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Panchakarma Treatment Room</h3>
                <p className="text-gray-600">Our specialized rooms for authentic Panchakarma detoxification therapies</p>
              </div>
            </motion.div>

            {/* Shirodhara Room */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                variants={imageHover}
                initial="rest"
                whileHover="hover"
              >
                <img 
                  src={shirodaraImg} 
                  alt="Shirodhara Treatment Room" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Shirodhara Treatment Room</h3>
                <p className="text-gray-600">Experience deep relaxation with our specialized Shirodhara therapy</p>
              </div>
            </motion.div>

            {/* Massage Room */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                variants={imageHover}
                initial="rest"
                whileHover="hover"
              >
                <img 
                  src={massageImg} 
                  alt="Ayurvedic Massage Room" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Ayurvedic Massage Room</h3>
                <p className="text-gray-600">Rejuvenate with our therapeutic Ayurvedic massage treatments</p>
              </div>
            </motion.div>

            {/* Herbal Preparation Area */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                variants={imageHover}
                initial="rest"
                whileHover="hover"
              >
                <img 
                  src={herbalImg} 
                  alt="Herbal Preparation Area" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Herbal Preparation Area</h3>
                <p className="text-gray-600">Where we prepare authentic Ayurvedic herbal remedies and medicines</p>
              </div>
            </motion.div>

            {/* Yoga Studio */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                variants={imageHover}
                initial="rest"
                whileHover="hover"
              >
                <img 
                  src={yogaImg} 
                  alt="Yoga Studio" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Yoga Studio</h3>
                <p className="text-gray-600">Our peaceful studio for yoga and meditation practices</p>
              </div>
            </motion.div>

            {/* Consultation Room */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <motion.div 
                className="h-64 overflow-hidden"
                variants={imageHover}
                initial="rest"
                whileHover="hover"
              >
                <img 
                  src={consultationImg} 
                  alt="Consultation Room" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Consultation Room</h3>
                <p className="text-gray-600">Where our experienced Ayurvedic doctors provide personalized consultations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="md:flex">
              <div className="md:shrink-0 md:w-1/3 bg-green-800 text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Visit Our Clinic</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p>Shree Siddhivinayak Ayurveda Panchakarma Center, Flat No. 1, Godavari Complex Shahnurwadi, Sahakar Nagar, New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra, 431005</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: Closed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Contact</h4>
                    <p>Phone: +91 9967282076<br />Email: dr.bhairavkulkarni@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 md:w-2/3">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Commitment to Authentic Ayurveda</h3>
                <p className="text-gray-600 mb-6">
                  At Shree Siddhivinayak Ayurveda, we are dedicated to providing authentic Ayurvedic treatments in a serene and healing environment. Our clinic is designed according to traditional principles to create a space that promotes balance and well-being.
                </p>
                <p className="text-gray-600">
                  All our treatments are performed by experienced practitioners using traditional methods and pure, natural ingredients. We invite you to experience the transformative power of Ayurveda in our thoughtfully designed healing spaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeroPage;