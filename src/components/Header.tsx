import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../asstes/logoa.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full z-20 bg-white/70 backdrop-blur-md shadow-md">
      <div className="w-full py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center pl-4">
          <img src={logoImage} alt="Shree Siddhivinayak Ayurveda Logo" className="h-12 mr-2" />
          <span className="text-2xl font-bold text-green-800 tracking-wide">Shree Siddhivinayak Ayurveda </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 pr-4">
          {isHomePage ? (
            // Links for home page - anchor tags for smooth scrolling
            <>
              <a href="#" className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300">
                Home
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </a>
              
              <Link to="/hero" className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300">
                Hero
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
              
              <a href="#therapies" className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300">
                Therapies
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </a>
              
              <a href="#why-us" className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300">
                Why Choose Us
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </a>
              
              <a href="#appointment" className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300">
                Appointment
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </a>
              
              <a href="#about" className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300">
                About
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </a>
              
              <Link to="/contact" className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300">
                Contact
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
            </>
          ) : (
            // Links for therapy pages - React Router Links
            <>
              <Link 
                to="/" 
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                Home
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
              
              <Link 
                to="/hero" 
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                Hero
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#therapies"
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                Therapies
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#why-us"
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                Why Choose Us
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#appointment"
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                Appointment
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/#about"
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                About
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
              
              <Link
                to="/contact"
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                Contact
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-800 hover:text-green-600 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md">
          <div className="flex flex-col items-center py-4 space-y-6">
            {isHomePage ? (
              // Links for home page - anchor tags for smooth scrolling
              <>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Home
                </a>
                
                <Link
                  to="/hero"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Hero
                </Link>
                
                <a
                  href="#therapies"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Therapies
                </a>
                
                <a
                  href="#why-us"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Why Choose Us
                </a>
                
                <a
                  href="#appointment"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Appointment
                </a>
                
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  About
                </a>
                
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Contact
                </Link>
              </>
            ) : (
              // Links for therapy pages - React Router Links
              <>
                <Link 
                  to="/" 
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Home
                </Link>
                
                <Link 
                  to="/hero" 
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Hero
                </Link>
                
                <Link
                  to="/#therapies"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Therapies
                </Link>
                
                <Link
                  to="/#why-us"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Why Choose Us
                </Link>
                
                <Link
                  to="/#appointment"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Appointment
                </Link>
                
                <Link
                  to="/#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  About
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
