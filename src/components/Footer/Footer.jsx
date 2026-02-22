import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-20 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Name */}
        <h2 className="text-2xl font-bold text-[#38e14e] mb-6 tracking-wide uppercase">
          Md. Abdur Rahman Salman
        </h2>

        <nav className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400 font-medium">
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#38e14e] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-6 mb-8">
          {[
            { Icon: FaFacebook, link: "https://www.facebook.com/abdurrahman.salman.355/" },
            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/md-abdur-rahman-salman-02a105275/" },
            { Icon: FaInstagram, link: "https://www.instagram.com/_mr_dot._2.5_/" },
            { Icon: FaYoutube, link: "https://www.youtube.com/channel/UCuAWtuP7UYFdzi5uWKZYOFw" },
            { Icon: FaWhatsapp, link: "https://wa.me/qr/KQI6WWVT77ONL1" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-[#38e14e] hover:scale-125 transition-all duration-300"
            >
              <social.Icon />
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Md. Abdur Rahman Salman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;