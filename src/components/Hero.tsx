import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto initially-hidden animate-fade-in opacity-100 flex flex-col gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-3">
            <p className="text-primary-400 font-medium text-sm sm:text-base">Hello, I'm</p>
            <h1 className="leading-tight">
              Yash Vijay Sain
              <span className="block gradient-text">Full-Stack Developer</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-2 max-w-2xl mx-auto sm:mx-0">
              I craft responsive websites and web applications that deliver exceptional user experiences. 
              Turning complex problems into elegant solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2 items-center sm:items-start">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
            <a 
              href="/resume.pdf" 
              download="Yash_Vijay_Sain_Resume.pdf"
              className="btn btn-outline flex items-center gap-2 text-sm sm:text-base"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-6 mt-4">
            <a
              href="https://github.com/Yashvijaysain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-vijay-sain-3a9a6526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:yashsain684@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={20} className="sm:w-6 sm:h-6 text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;