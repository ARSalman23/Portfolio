import React from "react";
import { education } from "../../constants"; 
import Tilt from "react-parallax-tilt";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider uppercase">EDUCATION</h2>
        <div className="w-24 h-1 bg-[#38e14e] mx-auto mt-4 rounded-full shadow-[0_0_10px_#38e14e]"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium">
          My academic foundation and educational journey.
        </p>
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {education.map((edu) => (
          <Tilt
            key={edu.id}
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
                {/* Logo and Title */}
                <div className="flex items-center space-x-5 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-[#1a1a1a]">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-200 leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-[#38e14e] font-semibold text-sm mt-1 uppercase tracking-wider">
                      {edu.school}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Grade  */}
                <div className="mb-6">
                   <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Result:</span>
                   <span className="text-white bg-[#111111] border border-gray-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
                      {edu.grade}
                   </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Education;