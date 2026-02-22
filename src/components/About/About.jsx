import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative pt-32 pb-12 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Md Abdur Rahman Salman
          </h2>
          {/* Typing Effect */}
          <h3 className="text-xl sm:text-3xl md:text-3xl font-semibold mb-4 text-[#11df2c] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Competitive Programmer',
                'Web Developer',
                'Data Scientist',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#11df2c]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me */}
          <p className="text-base text-balance sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed">
            Currently pursuing a CSE degree at Metropolitan University, I also serve as a Support Instructor at Progsity.
            My deep understanding of Data Structures and Algorithms (DSA) is demonstrated by solving over 1,500 problems on competitive platforms like Codeforces, CodeChef, LeetCode etc.
            Additionally, I actively contribute to my university community as a problem setter for programming contests.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1cF75Mx5tgH1w7XuaslaTJ3XE_1PHurYK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#11df2c] py-3 px-6 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #000000, #000000)',
              boxShadow: '0 0 2px #11df2c, 0 0 2px #11df2c, 0 0 35px #11df2c',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-[#10de2c] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Md Abdur Rahman Salman"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
          
        </div>
      </div>
    </section>
  );
};

export default About;
