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
            [
              { name: 'Home', href: '#' },
              { name: 'Therapies', href: '#therapies' },
              { name: 'Why Choose Us', href: '#why-us' },
              // { name: 'Gallery', href: '#gallery' },
              { name: 'Appointment', href: '#appointment' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
              >
                {item.name}
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
              </a>
            ))
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
              {
                [
                  { name: 'Therapies', href: '#therapies' },
                  { name: 'Why Choose Us', href: '#why-us' },
                  // { name: 'Gallery', href: '#gallery' },
                  { name: 'Appointment', href: '#appointment' },
                  { name: 'About', href: '#about' },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                <Link
                  key={item.name}
                  to={`/#${item.href.substring(1)}`}
                  className="text-green-800 font-medium hover:text-green-600 relative group transition duration-300"
                >
                  {item.name}
                  <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-600 transition-all duration-500"></span>
                </Link>
              ))}
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
              [
                { name: 'Home', href: '#' },
                { name: 'Therapies', href: '#therapies' },
                { name: 'Why Choose Us', href: '#why-us' },
                // { name: 'Gallery', href: '#gallery' },
                { name: 'Appointment', href: '#appointment' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))
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
                {
                  [
                    { name: 'Therapies', href: '#therapies' },
                    { name: 'Why Choose Us', href: '#why-us' },
                    // { name: 'Gallery', href: '#gallery' },
                    { name: 'Appointment', href: '#appointment' },
                    { name: 'About', href: '#about' },
                    { name: 'Contact', href: '#contact' }
                  ].map((item) => (
                  <Link
                    key={item.name}
                    to={`/#${item.href.substring(1)}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-green-800 font-semibold hover:text-green-600 text-lg transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
