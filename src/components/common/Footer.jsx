import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#00000014] py-6 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[#0000007f] text-sm font-normal capitalize text-center md:text-left">
          © 2025, all rights reserved
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
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