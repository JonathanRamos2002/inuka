import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#00000014] py-6 px-20">
      <div className="flex justify-between items-center">
        <p className="text-[#0000007f] text-sm font-normal capitalize">
          © 2025, all rights reserved
        </p>
        <div className="flex space-x-8">
          <a href="/privacy" className="text-[#000000b2] text-sm font-normal capitalize hover:text-[#f36a34] transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-[#000000b2] text-sm font-normal capitalize hover:text-[#f36a34] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;