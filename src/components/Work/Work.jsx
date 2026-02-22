import React, { useState } from "react";
import { projects } from "../../constants";
import Tilt from "react-parallax-tilt";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider uppercase">PROJECTS</h2>
        <div className="w-24 h-1 bg-[#38e14e] mx-auto mt-4 rounded-full shadow-[0_0_10px_#38e14e]"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium">
          A showcase of my technical projects and creative solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1500}
            className="w-full"
          >
            <div
              onClick={() => handleOpenModal(project)}
              className="bg-[#0a0a0a] backdrop-blur-md px-6 sm:px-10 py-10 h-full rounded-3xl border border-[#1a1a1a] 
              shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:border-[#38e14e]/40 hover:shadow-[0_0_30px_rgba(56,225,78,0.1)] 
              transition-all duration-500 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Project Image and Title */}
                <div className="flex items-center space-x-5 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-[#1a1a1a] group-hover:border-[#38e14e]/50 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-200 leading-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <h4 className="text-[#38e14e] font-semibold text-xs mt-1 uppercase tracking-widest">
                      Web Application
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div>
                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Tech Stack:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#111111] border border-gray-800 text-gray-400 px-3 py-1.5 text-xs rounded-xl
                      hover:border-[#38e14e] hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] lg:w-full w-full max-w-3xl overflow-hidden relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-6 text-gray-400 text-4xl font-light hover:text-[#38e14e] transition-colors z-10"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="w-full p-4 bg-[#050505]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[40vh] object-contain rounded-2xl border border-[#1a1a1a]"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">{selectedProject.description}</p>

                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-transparent border border-[#1a1a1a] hover:border-white text-white py-3 rounded-2xl font-bold text-center transition-all">
                    Source Code
                  </a>
                  {selectedProject.webapp && (
                    <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer"
                      className="flex-1 bg-[#38e14e] hover:bg-[#2eb93f] text-black py-3 rounded-2xl font-bold text-center shadow-[0_0_20px_rgba(56,225,78,0.2)] transition-all">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;