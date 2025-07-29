import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectsData from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h2 className="section-heading mx-auto text-center">Featured Projects</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12 initially-hidden">
          Here are some of my recent projects that showcase my skills and expertise in various technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="card-wrapper initially-hidden">
              <div className="card">
                <div className="content">
                  <div className="flex flex-col h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 rounded-full bg-dark-500 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 initially-hidden">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <span>More on GitHub</span>
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;