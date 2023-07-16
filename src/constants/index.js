import {
  mobile,
  backend,
  creator,
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
  docker,
  meta,
  c360,
  sportsIt,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  upcric,
  cricct,
  playbig,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "C360 softwares (Hyderabad)",
    icon: c360,
    iconBg: "#383E56",
    date: "May 2021 - Sept 2021",
    points: [
      "Creating and maintaining web applications with React.js and Node.js",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "collaborating to produce high-quality products with cross-functional teams that include designers, product managers, and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Sports It (Hyderabad)",
    icon: sportsIt,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Creating and maintaining web applications with React.js and associated technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "collaborating to produce high-quality products with cross-functional teams that include designers, product managers, and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Upcric",
    description:
      "It's a NFT platform, where we can buy sell NFTs, India’s 1st NFT Sports trading platform where you can invest in NFT’s across different Sporting events, and earn a potential payout, which is credited to your account, and available for withdrawal immediately after the event.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: upcric,
    source_code_link: "https://github.com/",
  },
  {
    name: "CriCTT",
    description:
      "It's a React web application, where we can play games and earn coins, and also can get Exciting prizes",
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
    image: cricct,
    source_code_link: "https://github.com/",
  },
  {
    name: "PlayBig Games",
    description:
      "It's a React Native App, Which is free to play soccer games which is free to play  and can also win exciting gifts",
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
    image: playbig,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };