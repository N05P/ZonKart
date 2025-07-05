import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-14 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        {/* Left: Copyright */}
        <h1 className="text-sm sm:text-base text-gray-600">@2025 ZonKart. All rights reserved.</h1>

        {/* Right: Social links */}
        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-600 hover:text-black transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition"
            aria-label="Github"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
