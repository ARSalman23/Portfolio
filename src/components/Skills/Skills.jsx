import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative py-20 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">SKILLS</h2>
      <div className="w-24 h-1 bg-[#38e14e] mx-auto mt-4 rounded-full shadow-[0_0_10px_#38e14e]"></div>
      <p className="text-gray-400 mt-6 text-lg font-medium">
        My technical toolkit, honed through practical experience.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1500}
          gyroscope={true}
          className="w-full"
        >
          <div
            className="bg-[#0a0a0a] backdrop-blur-md px-6 sm:px-10 py-10 h-full rounded-3xl border border-[#1a1a1a] 
            shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] hover:border-[#38e14e]/40 hover:shadow-[0_0_30px_rgba(56,225,78,0.1)] 
            transition-all duration-500 flex flex-col"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-gray-200 mb-8 text-center tracking-wide group-hover:text-white">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-start space-x-3 bg-[#111111] border border-gray-800 rounded-xl py-2.5 px-4 sm:px-5 
                   hover:border-[#38e14e] hover:bg-[#38e14e]/10 hover:shadow-[0_0_15px_rgba(56,225,78,0.2)] 
                    transition-all duration-300 cursor-default group w-full"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm sm:text-base font-medium text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;