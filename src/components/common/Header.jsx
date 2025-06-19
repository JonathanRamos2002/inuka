import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white overflow-hidden flex items-center justify-center mr-4">
            <img 
              src="/images/img_whatsapp_image_20250315_at_2055571b95477a_3.png" 
              alt="INUKA Foundation Logo" 
              className="w-8 h-8 md:w-12 md:h-12 object-cover transform -translate-x-1"
            />
          </div>
          <img 
            src="/images/img_mask_group.png" 
            alt="INUKA Text Logo" 
            className="h-8 md:h-10 object-contain"
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img 
            src={isMenuOpen ? "/images/img_close.svg" : "/images/img_menu.svg"} 
            alt={isMenuOpen ? "Close menu" : "Open menu"} 
            className="w-6 h-6"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <Link to="/" className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors">
              Home
            </Link>
            {location.pathname === '/' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e7e7ee] rounded-full"></span>}
          </div>
          <div className="relative">
            <Link to="/services" className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors">
              Services
            </Link>
            {location.pathname === '/services' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e7e7ee] rounded-full"></span>}
          </div>
          <div className="relative">
            <Link to="/events" className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors">
              Our Events
            </Link>
            {location.pathname === '/events' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e7e7ee] rounded-full"></span>}
          </div>
          <div className="relative">
            <Link to="/contact" className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors">
              Contact Us
            </Link>
            {location.pathname === '/contact' && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e7e7ee] rounded-full"></span>}
          </div>
        </nav>
        
        <Link to="/donate">
          <Button variant="secondary" className="hidden md:flex bg-[#f9f9fb] text-[#030d28] px-10 py-4 rounded-lg font-medium capitalize">
            Donate Now
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-t border-[#e7e7ee] py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/events" 
              className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Events
            </Link>
            <Link 
              to="/contact" 
              className="text-[#030d28] text-base font-normal capitalize hover:text-[#f36a34] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/donate" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="secondary" className="bg-[#f9f9fb] text-[#030d28] px-10 py-4 rounded-lg font-medium capitalize w-full">
                Donate Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;