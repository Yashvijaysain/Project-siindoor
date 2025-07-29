import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-dark-700/95 backdrop-blur-sm shadow-md shadow-dark-800/50' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-3 sm:py-4 flex justify-between items-center">
        <a href="#home" className="text-lg sm:text-xl font-bold">
          <span className="font-mono">&lt;</span>
          <span className="gradient-text">YVS</span>
          <span className="font-mono">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-sm lg:text-base">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white focus:outline-none p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-30 bg-dark-700/95 backdrop-blur-sm transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-16 sm:pt-20`}
      >
        <div className="container-custom flex flex-col space-y-4 sm:space-y-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base sm:text-lg py-2 hover:text-primary-400 transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;