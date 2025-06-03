import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white py-4 px-20 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex items-center justify-center mr-4">
          <img 
            src="/images/img_whatsapp_image_20250315_at_2055571b95477a_3.png" 
            alt="INUKA Foundation Logo" 
            className="w-12 h-12 object-cover transform -translate-x-1"  // Added translation and reduced size
          />
        </div>
        <img 
          src="/images/img_mask_group.png" 
          alt="INUKA Text Logo" 
          className="h-10 object-contain"
        />
      </div>
      
      <nav className="flex items-center space-x-8">
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
      
      <Button variant="secondary" className="bg-[#f9f9fb] text-[#030d28] px-10 py-4 rounded-lg font-medium capitalize">
        Donate Now
      </Button>
    </header>
  );
};

export default Header;