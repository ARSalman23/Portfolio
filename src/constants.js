// Skills Logo's
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Logo's
import progsityLogo from "./assets/company_logo/progsity_logo.png"; 
import cseLogo from './assets/company_logo/cse_logo.png';

// Education Logo's
import maLogo from './assets/education_logo/ma_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import glaLogo from './assets/education_logo/gla_logo.png';

// Project Logo's
import githubdetLogo from './assets/work_logo/github_det.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JS', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { 
        name: "Sublime Text", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Breezeicons-apps-48-sublime-text.svg"
      },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: progsityLogo,
      role: "Junior Support Instructor",
      company: "Progsity",
      date: "March 2025 - Present",
      desc: "As a Support Instructor at Progsity, I help students learn Data Structures and Algorithms and solve tricky problems. My main role is to explain difficult coding topics simply and help students fix errors in their code.",
      skills: [
        "C++",
        "DSA",
        "Problem Solving",
      ],
    },
    {
      id: 1,
      img: cseLogo,
      role: "Trainer",
      company: "Metropolitan University CSE Society",
      date: "July 2024 - Present",
      desc: "As a Competitive Programming Trainer for the MU CSE Society, I facilitate intensive workshops and training sessions for aspiring programmers. I am responsible for curating algorithmic problem sets, delivering technical lectures, and mentoring students to enhance their problem-solving efficiency and logical reasoning.",
      skills: [
        "C++",
        "DSA",
        "Problem Solving",
        "Technical Mentorship",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bsaLogo,
      school: "Metropolitan University",
      date: "Jan 2023 - Present",
      desc: "Currently pursuing a B.Sc. in Computer Science and Engineering at Metropolitan University (Batch 58), I have built a robust technical foundation with a focus on Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP). My academic journey is driven by a fascination with the core mechanics of computing, particularly in Database Management Systems (DBMS), Structured Programming (SP), and the logical complexities of Theory of Computation (TOC) and Discrete Mathematics (DM). These subjects form the backbone of my work as a Competitive Programmer and my role as a Trainer for the MU CSE Society, where I mentor peers in solving intricate algorithmic challenges.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 1,
      img: glaLogo,
      school: "Sylhet Science & Technology College",
      date: "Mar 2019 - Mar 2021",

      desc: "I completed my Higher Secondary Certificate (HSC) from Sylhet Science & Technology College in the Science stream. During this time, I developed a strong interest in Mathematics, ICT, and Physics, which built the foundation for my further studies in Computer Science and Engineering.",
      degree: "HSC",
    },
    {
      id: 2,
      img: maLogo,
      school: "Monir Ahmed Academy (Pvt.) Cadet College",
      date: "Jan 2014 - Dec 2018",
      desc: "I completed my Secondary School Certificate (SSC) from Monir Ahmed Academy, a prestigious cadet college. During my time there, I focused on Science subjects, particularly Physics, Chemistry, and Mathematics. The rigorous academic environment and disciplined lifestyle at the cadet college helped me develop strong problem-solving skills and a solid foundation in scientific principles.",
      degree: "High School",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Sell-It-Marketplace",
      description:
        "The goal of this project is to create a marketplace for buying and selling second-hand and new products, allowing users to browse available items, view details, and connect with sellers.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/ARSalman23/Sell-It-Marketplace",
    },
    
  ];  