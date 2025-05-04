import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/footer';

const ContactPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.15 * custom,
        duration: 0.5
      }
    })
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2 * custom,
        duration: 0.6
      }
    })
  };

  const iconPulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      backgroundColor: ["#dcfce7", "#bbf7d0", "#dcfce7"],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />

      {/* Contact Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          {isMobile ? (
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              animate="visible"
              variants={headingVariants}
            >
              <motion.h1 className="text-3xl font-bold text-green-800 mb-4">
                Get In Touch With Us
              </motion.h1>
              <motion.p className="text-lg">
                We're here to help and answer any question you might have
              </motion.p>
            </motion.div>
          ) : (
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-green-800 mb-4">
                Get In Touch With Us
              </h1>
              <p className="text-lg max-w-2xl mx-auto">
                We're here to help and answer any question you might have
              </p>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-green-800 mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {isMobile ? (
                  // Mobile view with animations
                  <>
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      custom={1}
                      variants={formItemVariants}
                    >
                      <label className="block mb-2 font-medium">Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="text-green-600" size={18} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      custom={2}
                      variants={formItemVariants}
                    >
                      <label className="block mb-2 font-medium">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="text-green-600" size={18} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      custom={3}
                      variants={formItemVariants}
                    >
                      <label className="block mb-2 font-medium">Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone className="text-green-600" size={18} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your phone number"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      custom={4}
                      variants={formItemVariants}
                    >
                      <label className="block mb-2 font-medium">Message</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageCircle className="text-green-600" size={18} />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your message"
                          required
                        ></textarea>
                      </div>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      className="bg-green-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 w-full"
                      initial="hidden"
                      animate="visible"
                      custom={5}
                      variants={formItemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={18} />
                      Send Message
                    </motion.button>
                  </>
                ) : (
                  // Desktop view without animations
                  <>
                    <div>
                      <label className="block mb-2 font-medium">Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="text-green-600" size={18} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-medium">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="text-green-600" size={18} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-medium">Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone className="text-green-600" size={18} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-2 font-medium">Message</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageCircle className="text-green-600" size={18} />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Your message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 w-full transition duration-300"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/2">
              {isMobile ? (
                // Mobile view with animations
                <div className="space-y-8">
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={contactInfoVariants}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"
                      animate="pulse"
                      variants={iconPulseVariants}
                    >
                      <MapPin className="text-green-700" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Our Location</h3>
                    <p>Shree Siddhivinayak Ayurveda Panchakarma Center,<br /> Flat No. 1, Godavari Complex Shahnurwadi, Sahakar Nagar,<br /> New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra, 431005<br /> India</p>
                  </motion.div>

                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={contactInfoVariants}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"
                      animate="pulse"
                      variants={iconPulseVariants}
                    >
                      <Phone className="text-green-700" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Phone Numbers</h3>
                    <p className="mb-2">+91 9967282076</p>
                    <p>+91 9420249387</p>
                  </motion.div>

                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    variants={contactInfoVariants}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"
                      animate="pulse"
                      variants={iconPulseVariants}
                    >
                      <Mail className="text-green-700" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Email Address</h3>
                    <p>contact@giganxt.com</p>
                  </motion.div>

                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom={4}
                    variants={contactInfoVariants}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"
                      animate="pulse"
                      variants={iconPulseVariants}
                    >
                      <Clock className="text-green-700" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Working Hours</h3>
                    <p className="mb-2">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                    <p>Sunday: Closed</p>
                  </motion.div>
                </div>
              ) : (
                // Desktop view without animations
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="text-green-700" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Our Location</h3>
                    <p>Shree Siddhivinayak Ayurveda Panchakarma Center,<br /> Flat No. 1, Godavari Complex Shahnurwadi, Sahakar Nagar,<br /> New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra, 431005<br /> India</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Phone className="text-green-700" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Phone Numbers</h3>
                    <p className="mb-2">+91 9967282076</p>
                    <p>+91 9420249387</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Mail className="text-green-700" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Email Address</h3>
                    <p>contact@giganxt.com</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Clock className="text-green-700" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Working Hours</h3>
                    <p className="mb-2">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-80 md:h-96">
            {isMobile ? (
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="https://www.google.com/maps?q=19.864266432338034,75.33609137897652&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></motion.iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps?q=19.864266432338034,75.33609137897652&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage; 