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
    <footer className="bg-dark-800 py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="font-mono">&lt;</span>
              <span className="gradient-text">YVS</span>
              <span className="font-mono">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Yash Vijay Sain. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-dark-600 rounded-full hover:bg-dark-500 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;