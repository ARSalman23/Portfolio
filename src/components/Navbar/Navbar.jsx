import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[15vw] ${isScrolled ? "bg-[#041408] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="text-white py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <span className="text-[#11df2c]">Salman</span>
          <span className="text-[#f6f6f6]">.</span>
        </div>

        {/* PC Menu */}
        <ul className="hidden md:flex space-x-5 text-white">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#00f821] ${activeSection === item.id ? "text-[#11df2c]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>

            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/ARSalman23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#11df2c]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abdur-rahman-salman-02a105275/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#11df2c]"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://codeforces.com/profile/ARSalman23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#11df2c]"
          >
            <SiCodeforces size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#11df2c] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#11df2c] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-500 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#11df2c] ${activeSection === item.id ? "text-[#11df2c]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/ARSalman23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#11df2c]"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-abdur-rahman-salman-02a105275/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#11df2c]"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://codeforces.com/profile/ARSalman23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#11df2c]"
              >
                <SiCodeforces size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
