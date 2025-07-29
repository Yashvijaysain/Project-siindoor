import React from 'react';
import { SkillCategory } from '../types';
import skillsData from '../data/skills';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-12 sm:py-16 md:py-20 bg-dark-800">
      <div className="container-custom">
        <h2 className="section-heading mx-auto text-center">Tech Stack</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-8 sm:mb-12 initially-hidden text-sm sm:text-base">
          These are the technologies, tools, and languages I work with to build modern web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 initially-hidden">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="card p-4 sm:p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-dark-600 hover:to-dark-500"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 gradient-text">
                {category.name}
              </h3>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center min-w-0">
                    <div className="bg-dark-700 p-2 sm:p-3 rounded-lg mb-1 sm:mb-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 text-center truncate w-full">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;