import React, { useState, useEffect } from 'react';
import logoImage from '../asstes/footerlogo.png';

const Footer: React.FC = () => {
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

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logoImage} alt="Shree Siddhivinayak Ayurveda Logo" className="h-16 mr-3" />
              <span className="text-xl font-semibold">Shree Siddhivinayak Ayurveda</span>
            </div>
            <p className="mb-6 opacity-80">
              Authentic Ayurvedic treatments and Panchakarma therapies for holistic healing and wellness.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1XFNYqJcKy/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/shreesiddhivinayakayurveda?igsh=dTNjdHVhNzNscnpj" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@dr.bhairavkulkarni?si=OAV1qLSk8BcGrxTj" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links - Hidden on mobile */}
          {!isMobile && (
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Home</a></li>
                <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">About Us</a></li>
                <li><a href="#therapies" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Therapies</a></li>
                <li><a href="#why-us" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Why Choose Us</a></li>
                <li><a href="#appointment" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Book Appointment</a></li>
                <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">Contact</a></li>
              </ul>
            </div>
          )}
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>Shree Siddhivinayak Ayurveda Panchakarma Center, <br />Flat No. 1, Godavari Complex Shahnurwadi, Sahakar Nagar, <br />New Usmanpura, Chhatrapati Sambhaji Nagar, Maharashtra, 431005 <br />India</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <span>+91 9967282076</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>dr.bhairavkulkarni@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3"></i>
                <span>
                  Monday - Saturday: 9:00 AM - 9:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="opacity-80 text-sm">
            <p>&copy; {new Date().getFullYear()} Shree Siddhivinayak Ayurveda Panchakarma Center. All rights reserved.</p>
            <p className="mt-1">Created by <a href="https://www.giganxt.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-green-300 hover:text-white transition-all duration-300 border-b border-green-400 hover:border-white">GigaNXT Solutions</a></p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-sm opacity-80 hover:opacity-100 mr-6 cursor-pointer">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm opacity-80 hover:opacity-100 cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
