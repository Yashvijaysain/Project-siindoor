import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark-800 py-6 sm:py-8 md:py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-lg sm:text-xl font-bold">
              <span className="font-mono">&lt;</span>
              <span className="gradient-text">YVS</span>
              <span className="font-mono">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Yash Vijay Sain. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-8">
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                Contact
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 sm:p-3 bg-dark-600 rounded-full hover:bg-dark-500 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="sm:w-5 sm:h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;