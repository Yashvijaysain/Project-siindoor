import React from 'react';
import { SkillCategory } from '../types';
import skillsData from '../data/skills';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-dark-800">
      <div className="container-custom">
        <h2 className="section-heading mx-auto text-center">Tech Stack</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12 initially-hidden">
          These are the technologies, tools, and languages I work with to build modern web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 initially-hidden">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="card p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-dark-600 hover:to-dark-500"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <div className="bg-dark-700 p-3 rounded-lg mb-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-300">{skill.name}</span>
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