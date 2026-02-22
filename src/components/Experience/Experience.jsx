import React from "react";
import { experiences } from "../../constants";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider uppercase">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-[#38e14e] mx-auto mt-4 rounded-full shadow-[0_0_10px_#38e14e]"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium">
          My professional journey and leadership roles in the tech community.
        </p>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {experiences.map((experience) => (
          <Tilt
            key={experience.id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1500}
            className="w-full"
          >
            <div
              className="bg-[#0a0a0a] backdrop-blur-md px-6 sm:px-10 py-10 h-full rounded-3xl border border-[#1a1a1a] 
              shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:border-[#38e14e]/40 hover:shadow-[0_0_30px_rgba(56,225,78,0.1)] 
              transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Header: Logo and Title */}
                <div className="flex items-center space-x-5 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-[#1a1a1a] group-hover:border-[#38e14e]/50 transition-colors">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-200 leading-tight">
                      {experience.role}
                    </h3>
                    <h4 className="text-[#38e14e] font-semibold text-sm mt-1 uppercase tracking-wider">
                      {experience.company}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {experience.desc}
                </p>
              </div>

              {/* Skills Tags */}
              <div>
                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Technologies & Competencies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#111111] border border-gray-800 text-gray-400 px-3 py-1.5 text-xs rounded-xl
                      hover:border-[#38e14e] hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Experience;