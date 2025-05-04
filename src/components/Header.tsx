import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../asstes/logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // Handle clicks outside of navbar to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef} className="fixed w-full z-20 bg-gradient-to-r from-white/90 via-white/80 to-green-50/80 backdrop-blur-md shadow-md px-4 md:px-12 border-b border-green-100">
      <div className="w-full py-2 flex justify-between items-center transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div className="flex items-center pl-0 md:pl-4 transition-transform duration-300 hover:scale-105">
          <img src={logoImage} alt="Shree Siddhivinayak Ayurveda Logo" className="h-[3.5rem] md:h-[4.5rem] w-auto drop-shadow-sm" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 pr-4 font-medium">
          {isHomePage ? (
            // Links for home page - anchor tags for smooth scrolling
            <>
              <a href="#" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
                Home
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </a>
              
              <a href="#therapies" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
                Therapies
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </a>
              
              <Link 
                to="/hero" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Our Clinic
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
              
              <a href="#why-us" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
                Why Choose Us
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </a>
              
              <a href="#appointment" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
                Appointment
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </a>
              
              <a href="#about" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
                About
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </a>
              
              <a href="#contact" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
                Contact
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </a>
            </>
          ) : (
            // Links for therapy pages - React Router Links
            <>
              <Link 
                to="/" 
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Home
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#therapies"
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Therapies
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
              
              <Link 
                to="/hero" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Our Clinic
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#why-us"
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Why Choose Us
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#appointment"
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Appointment
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#about"
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                About
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#contact"
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Contact
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pr-1">
          <button
            onClick={toggleMenu}
            className="text-green-800 hover:text-orange-500 focus:outline-none transition-all duration-300 hover:scale-110 p-1.5 rounded-full hover:bg-green-50/80"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 w-full bg-gradient-to-b from-white/95 to-green-50/95 backdrop-blur-md shadow-md rounded-b-lg border-x border-b border-green-100 transform transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center py-4 space-y-2.5">
            {isHomePage ? (
              // Links for home page - anchor tags for smooth scrolling
              <>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: '' }}
                >
                  <span>Home</span>
                </a>
                
                <a
                  href="#therapies"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.hash === '#therapies' ? '#f97316' : '' }}
                >
                  <span>Therapies</span>
                </a>
                
                <Link
                  to="/hero"
                  onClick={() => {
                    setMenuOpen(false);
                    // Force scroll to top when navigating to hero page
                    window.scrollTo(0, 0);
                  }}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.pathname === '/hero' ? '#f97316' : '' }}
                >
                  <span>Our Clinic</span>
                </Link>
                
                <a
                  href="#why-us"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.hash === '#why-us' ? '#f97316' : '' }}
                >
                  <span>Why Choose Us</span>
                </a>
                
                <a
                  href="#appointment"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.hash === '#appointment' ? '#f97316' : '' }}
                >
                  <span>Appointment</span>
                </a>
                
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.hash === '#about' ? '#f97316' : '' }}
                >
                  <span>About</span>
                </a>
                
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.hash === '#contact' ? '#f97316' : '' }}
                >
                  <span>Contact</span>
                </a>
              </>
            ) : (
              // Links for therapy pages - React Router Links
              <>
                <Link 
                  to="/" 
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Home</span>
                </Link>
                
                <Link
                  to="/#therapies"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Therapies</span>
                </Link>
                
                <Link 
                  to="/hero" 
                  onClick={() => {
                    setMenuOpen(false);
                    // Force scroll to top when navigating to hero page
                    window.scrollTo(0, 0);
                  }}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.pathname === '/hero' ? '#f97316' : '' }}
                >
                  <span>Our Clinic</span>
                </Link>
                
                <Link
                  to="/#why-us"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Why Choose Us</span>
                </Link>
                
                <Link
                  to="/#appointment"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Appointment</span>
                </Link>
                
                <Link
                  to="/#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ color: location.hash === '#about' ? '#f97316' : '' }}
                >
                  <span>About</span>
                </Link>
                
                <Link
                  to="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-medium hover:text-orange-500 text-base w-full text-center px-6 py-2.5 rounded-md hover:bg-green-50/70 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact</span>
                </Link>
              </>
            )}
          </div>
        </div>
    </nav>
  );
};

export default Header;
