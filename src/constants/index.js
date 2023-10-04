import {
  desktop,
  backend,
  tutor,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  django,
  freelance,
  avicenne,
  clevertech,
  isimmmooc,
  Avicenne,
  gmao,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Desktop Apps Developer",
    icon: desktop,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tutor",
    icon: tutor,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "django",
    icon: django,
  },
];

const experiences = [
  {
    title: "SALES AND MARKETING INTERN Avicenne Space",
    company_name: "Avicenne Space",
    icon: avicenne,
    iconBg: "#E6DEDD",
    date: "June 2021 - August 2021 (3 Months)",

    points: [
      "Understood customer needs to better recommend products and increase sales chances.",
      "Creating and Managing a Facebook Page .",
      "Landing Page for their e-commerce Website (HTML/CSS/JS/Bootstrap).",
    ],
  },
  {
    title: "FULL STACK WEB DEVELOPER INTERN CleverTech-France",
    company_name: "CleverTech-France",
    icon: clevertech,
    iconBg: "#383E56",
    date: "June 2022 - August 2022 (3 Months)",
    points: [
      "Built front-end of Interfaces through appealing visual design.(React, Material UI ,SCSS).",
      "Maintained the application's State(Redux ,RTK Query).",
      "Built back-end Application and RESTful APIs.(Django ,Django Rest Framework).",
      "Integrating Facebook/Instagram Graph API to the Platform.",
    ],
  },
  {
    title: "FULL STACK WEB DEVELOPER INTERN CleverTech-France",
    company_name: "CleverTech-France",
    icon: clevertech,
    iconBg: "#383E56",
    date: "June 2023 - August 2023 (3 Months)",
    points: [
      "Developed a Minimum Viable Product (MVP) and integrated various APIs using Bubble.io to gather customer feedback.",
      "Created and maintained the backend and RESTful API for the project using Django and Django Rest Framework (DRF).",
      "Designed and implemented the frontend using React.js and Redux Toolkit, incorporating the Material-Tailwind framework for a modern and responsive user interface.",
      "Collaborated closely with cross-functional teams, including designers and product managers, to ensure the successful development of high-quality products.",
      "Participated in code reviews, offering valuable feedback to fellow developers to improve code quality and maintainability.",
    ],
  },
  {
    title: "Freelancer & Tutor",
    company_name: "Self",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Providing freelance web development services to clients, including website design, development, and maintenance.",
      "Offering tutoring and mentoring in web development technologies, including React.js, Django, and RESTful API development.",
      "Collaborating with clients to understand their project requirements and deliver custom solutions that meet their needs.",
      "Managing multiple projects simultaneously and ensuring timely delivery of high-quality work.",
    ],
  },
];

const projects = [
  {
    name: "Isimmmooc",
    description:
      "A comprehensive online course platform created as part of an academic project in the first year of an engineering degree. This platform offers a seamless and interactive learning experience for students and formers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: isimmmooc,
    source_code_link: "https://github.com/ahmedhamila/Isimmmooc",
  },
  {
    name: "Avicenne",
    description:
      "Avicenne: Your path to natural wellness. Start your exploration and rejuvenation journey with our handpicked honey, herbal medicines, and essential oils.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-tailwind",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Avicenne,
    source_code_link: "https://github.com/avicennebusiness/avicenne",
  },
  {
    name: "GMAO",
    description:
      "The aim of this project is to provide a comprehensive solution for managing the maintenance of machines in a factory.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: gmao,
    source_code_link: "https://github.com/ahmedhamila/Gmao-Web",
  },
];

export { services, technologies, experiences, projects };
