import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
  const contactHeadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.1 * custom,
        duration: 0.5
      }
    })
  };

  const iconWrapperVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="container mx-auto px-6">
        {isMobile ? (
          // Mobile view with animations
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contactHeadingVariants}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
            <p className="text-lg mx-auto">
              We're here to answer your questions and provide more information about our services.
            </p>
          </motion.div>
        ) : (
          // Desktop view with animations
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contactHeadingVariants}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We're here to answer your questions and provide more information about our services.
            </p>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-6">Get in Touch</h3>

            <div className="space-y-6">
              {isMobile ? (
                // Mobile view with animations
                <>
                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <MapPin className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p>Shree Siddhivinayak Ayurveda Panchakarma Center,<br />Godavari Complex, Flat No. 4, New SBH Colony, Sahakar Nagar <br /> Shahnoorwadi, Chhatrapati Sambhajinagar(Aurangabad)-431005<br />Maharashtra,, India</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <Phone className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p>+91 240-7968743</p>
                      <p>+91 9967282076</p>
                      <p>+91 9420249387</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <Mail className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p>dr.bhairavkulkarni@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={4}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <Clock className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div 
                    className="pt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={5}
                    variants={contactItemVariants}
                  >
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <motion.a 
                        href="https://www.facebook.com/share/1XFNYqJcKy/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </motion.a>
                      <motion.a 
                        href="https://www.instagram.com/shreesiddhivinayakayurveda?igsh=dTNjdHVhNzNscnpj" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </motion.a>
                      <motion.a 
                        href="https://youtube.com/@dr.bhairavkulkarni?si=OAV1qLSk8BcGrxTj" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </>
              ) : (
                // Desktop view with animations
                <>
                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <MapPin className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p>Shree Siddhivinayak Ayurveda Panchakarma Center,<br /> Flat No. 1, Godavari Complex Shahnurwadi, Sahakar Nagar,<br /> New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra, 431005<br /> India</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <Phone className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p>+91 9967282076</p>
                      <p>+91 9420249387</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <Mail className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p>dr.bhairavkulkarni@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={4}
                    variants={contactItemVariants}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4"
                      animate="pulse"
                    >
                      <Clock className="text-green-700" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div 
                    className="pt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={5}
                    variants={contactItemVariants}
                  >
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <motion.a 
                        href="https://www.facebook.com/share/1XFNYqJcKy/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </motion.a>
                      <motion.a 
                        href="https://www.instagram.com/shreesiddhivinayakayurveda?igsh=dTNjdHVhNzNscnpj" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </motion.a>
                      <motion.a 
                        href="https://youtube.com/@dr.bhairavkulkarni?si=OAV1qLSk8BcGrxTj" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Google Map */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
            {isMobile ? (
              <motion.iframe
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                src="https://www.google.com/maps?q=19.864266432338034,75.33609137897652&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></motion.iframe>
            ) : (
              <motion.iframe
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                src="https://www.google.com/maps?q=19.864266432338034,75.33609137897652&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></motion.iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
