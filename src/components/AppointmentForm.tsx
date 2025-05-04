import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when input changes
    if (name === 'date') setDateError('');
    if (name === 'time') setTimeError('');
  };
  
  // Validate date and time when they change
  useEffect(() => {
    validateDateTime();
  }, [formData.date, formData.time]);
  
  const validateDateTime = () => {
    // Reset errors
    setDateError('');
    setTimeError('');
    
    // Validate date (check if it's not Sunday)
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const dayOfWeek = selectedDate.getDay(); // 0 is Sunday, 1-6 is Monday-Saturday
      
      if (dayOfWeek === 0) { // Sunday
        setDateError('We are closed on Sundays. Please select another day.');
      }
    }
    
    // Validate time (9:00 AM - 9:00 PM)
    if (formData.time) {
      const timeValue = formData.time;
      const [hours] = timeValue.split(':').map(Number);
      
      if (hours < 9 || hours >= 21) {
        setTimeError('Our hours are 9:00 AM - 9:00 PM. Please select a time within this range.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate before submission
    validateDateTime();
    
    // Only proceed if there are no errors
    if (!dateError && !timeError) {
      // Format date for better readability
      const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '';

      // Format time for better readability
      const formattedTime = formData.time ? new Date(`2000-01-01T${formData.time}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }) : '';

      // Prepare WhatsApp message with appointment details
      const message = `New Appointment Request:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formattedDate}\nTime: ${formattedTime}`;
      
      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create a hidden link element to trigger direct WhatsApp message
      const link = document.createElement('a');
      link.href = `https://api.whatsapp.com/send?phone=919967282076&text=${encodedMessage}`;
      link.setAttribute('data-action', 'share/whatsapp/share');
      link.setAttribute('target', '_blank');
      link.style.display = 'none';
      document.body.appendChild(link);
      
      // Trigger click and remove the element
      link.click();
      document.body.removeChild(link);
      
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: ''
        });
      }, 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4
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
        delay: 0.3 
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#166534",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const thankYouVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {isMobile ? (
          // Mobile view with animations
          <motion.div 
            className="max-w-2xl mx-auto bg-beige-50 rounded-lg shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="p-8 md:p-12">
              <motion.h2 
                className="text-3xl font-bold text-green-800 mb-6 text-center"
                variants={headingVariants}
              >
                Book an Appointment
              </motion.h2>
              <motion.p 
                className="text-center mb-8"
                variants={headingVariants}
              >
                Fill out the form below and our team will contact you to confirm your appointment.
              </motion.p>
              
              {showThankYou ? (
                <motion.div 
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded relative text-center"
                  initial="hidden"
                  animate="visible"
                  variants={thankYouVariants}
                >
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your appointment request has been received. We will contact you shortly to confirm.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={formItemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={formItemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      placeholder="Enter your phone number"
                      required
                    />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div variants={formItemVariants}>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${dateError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm`}
                        required
                      />
                      {dateError && <p className="text-red-500 text-xs mt-1">{dateError}</p>}
                      <p className="text-xs text-gray-500 mt-1">Monday-Saturday only (We're closed on Sundays)</p>
                    </motion.div>
                    
                    <motion.div variants={formItemVariants}>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${timeError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm`}
                        required
                      />
                      {timeError && <p className="text-red-500 text-xs mt-1">{timeError}</p>}
                      <p className="text-xs text-gray-500 mt-1">9:00 AM - 9:00 PM</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="text-center"
                    variants={buttonVariants}
                  >
                    <motion.button
                      type="submit"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md text-lg font-medium"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Book My Appointment
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        ) : (
          // Desktop view with animations
          <motion.div 
            className="max-w-2xl mx-auto bg-beige-50 rounded-lg shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="p-8 md:p-12">
              <motion.h2 
                className="text-3xl font-bold text-green-800 mb-6 text-center"
                variants={headingVariants}
              >
                Book an Appointment
              </motion.h2>
              <motion.p 
                className="text-center mb-8"
                variants={headingVariants}
              >
                Fill out the form below and our team will contact you to confirm your appointment.
              </motion.p>
              
              {showThankYou ? (
                <motion.div 
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded relative text-center"
                  initial="hidden"
                  animate="visible"
                  variants={thankYouVariants}
                >
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your appointment request has been received. We will contact you shortly to confirm.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={formItemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={formItemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      placeholder="Enter your phone number"
                      required
                    />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div variants={formItemVariants}>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${dateError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm`}
                        required
                      />
                      {dateError && <p className="text-red-500 text-xs mt-1">{dateError}</p>}
                      <p className="text-xs text-gray-500 mt-1">Monday-Saturday only (We're closed on Sundays)</p>
                    </motion.div>
                    
                    <motion.div variants={formItemVariants}>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${timeError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm`}
                        required
                      />
                      {timeError && <p className="text-red-500 text-xs mt-1">{timeError}</p>}
                      <p className="text-xs text-gray-500 mt-1">9:00 AM - 9:00 PM</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="text-center"
                    variants={buttonVariants}
                  >
                    <motion.button
                      type="submit"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 text-lg font-medium"
                      whileTap="tap"
                    >
                      Book My Appointment
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default AppointmentForm;