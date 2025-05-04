import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../asstes/logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full z-20 bg-gradient-to-r from-white/90 via-white/80 to-green-50/80 backdrop-blur-md shadow-md px-6 md:px-12 border-b border-green-100">
      <div className="w-full py-2 flex justify-between items-center transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div className="flex items-center pl-4 transition-transform duration-300 hover:scale-105">
          <img src={logoImage} alt="Shree Siddhivinayak Ayurveda Logo" className="h-[4.5rem] w-auto drop-shadow-sm" />
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
              
              <Link to="/hero" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
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
              
              <Link to="/contact" className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50">
                Contact
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
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
                to="/contact"
                className="text-green-800 hover:text-orange-500 relative group transition-all duration-300 px-2 py-1 rounded-md hover:bg-green-50"
              >
                Contact
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-orange-500 transition-all duration-500"></span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-800 hover:text-orange-500 focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white/90 to-green-50/90 backdrop-blur-md shadow-md rounded-b-lg border-x border-b border-green-100">
          <div className="flex flex-col items-center py-6 space-y-4">
            {isHomePage ? (
              // Links for home page - anchor tags for smooth scrolling
              <>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Home
                </a>
                
                <a
                  href="#therapies"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Therapies
                </a>
                
                <Link
                  to="/hero"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Our Clinic
                </Link>
                
                <a
                  href="#why-us"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Why Choose Us
                </a>
                
                <a
                  href="#appointment"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Appointment
                </a>
                
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  About
                </a>
                
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
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
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Home
                </Link>
                
                <Link
                  to="/#therapies"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Therapies
                </Link>
                
                <Link 
                  to="/hero" 
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Our Clinic
                </Link>
                
                <Link
                  to="/#why-us"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Why Choose Us
                </Link>
                
                <Link
                  to="/#appointment"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  Appointment
                </Link>
                
                <Link
                  to="/#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
                >
                  About
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-orange-500 text-lg px-4 py-2 rounded-md hover:bg-green-50 transition-all duration-300"
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
