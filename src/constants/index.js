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
  carrent,
  jobit,
  tripguide,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
