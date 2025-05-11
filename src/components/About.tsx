import React from 'react';
import { FileCode, Server, Code, Palette } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      icon: <FileCode size={24} className="text-primary-500" />,
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications',
      icon: <Server size={24} className="text-secondary-500" />,
    },
    {
      title: 'Full-Stack Integration',
      description: 'Connecting frontend and backend seamlessly',
      icon: <Code size={24} className="text-primary-500" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive interfaces',
      icon: <Palette size={24} className="text-secondary-500" />,
    },
  ];

  return (
    <section id="about" className="bg-dark-800 py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading mx-auto">About Me</h2>
          <p className="text-gray-300 mt-6 initially-hidden">
            I'm a passionate Full-Stack Developer with a strong foundation in both frontend and backend technologies. 
            I love creating elegant solutions to complex problems and have a keen eye for design and user experience.
          </p>
          <p className="text-gray-300 mt-4 initially-hidden">
            With a background in computer science and years of hands-on experience, I approach each project with creativity and attention to detail. 
            I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card p-6 hover:bg-dark-500 transition-all duration-300 initially-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-700 rounded-lg">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-300">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center initially-hidden">
          <a href="#projects" className="btn btn-primary">
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;