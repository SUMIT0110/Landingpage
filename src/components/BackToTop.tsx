import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      scale: 0.8,
      transition: { 
        duration: 0.2
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#166534",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button 
          key="back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-50"
          aria-label="Back to top"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isMobile ? (
            <motion.div
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            >
              <ArrowUp size={20} />
            </motion.div>
          ) : (
            <ArrowUp size={20} />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;