import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  swift,
  python,
  c,
  java,
  nodejs,
  git,
  docker,
  postgresql,
  website,
  ios,
  cnn,
  library,
  os,
  cathay,
  ncku,
  tsmc,
  highpoint,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Data Analysis',
    icon: ux,
  },
  {
    title: 'Software Engineering',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'Python',
    icon: python,
  },  
  {
    name: 'C++',
    icon: c,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer Intern',
    company_name: 'Cathay Financial Holdings',
    icon: cathay,
    iconBg: '#333333',
    date: 'Jul 2021 - Nov 2021',
  },
  {
    title: 'Research Assistant',
    company_name: 'National Cheng Kung University',
    icon: ncku,
    iconBg: '#333333',
    date: 'Mar 2021 - Dec 2021',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'TSMC',
    icon: tsmc,
    iconBg: '#333333',
    date: 'Jul 2023 - Aug 2023',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'HighPoint Technologies',
    icon: highpoint,
    iconBg: '#333333',
    date: 'May 2024 - Aug 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'YELP Website',
    description: 'A responsive YELP business search website using Angular and Node.js, deployed on GCP for seamless functionality.',
    tags: [],
    image: website,
    repo: 'https://github.com/borsheng/Responsive-YELP-Business-Search-Website',
    demo: 'https://github.com/borsheng/Responsive-YELP-Business-Search-Website',
  },
  {
    id: 'project-2',
    name: 'YELP IOS App',
    description:
      'The YELP Business Search iOS App uses Swift/SwiftUI for the front-end and Node.js for the back-end integration.',
    tags: [],
    image: ios,
    repo: 'https://github.com/borsheng/YELP-Business-Search-IOS-App',
    demo: 'https://github.com/borsheng/YELP-Business-Search-IOS-App',
  },
  {
    id: 'project-3',
    name: 'CNN Classifier',
    description: 'This project builds a CNN classifier using transfer learning to detect frost in Martian HiRISE images.',
    tags: [],
    image: cnn,
    repo: 'https://github.com/borsheng/Identification-of-Frost-in-Martian-HiRISE-Images/tree/main',
    demo: 'https://github.com/borsheng/Identification-of-Frost-in-Martian-HiRISE-Images/tree/main',
  },
  {
    id: 'project-4',
    name: 'Library System',
    description: 'This Library Management System project uses TCP and UDP sockets for book availability and inventory management.',
    tags: [],
    image: library,
    repo: 'https://github.com/borsheng/Socket-Programming-Project-Library-Management-System',
    demo: 'https://github.com/borsheng/Socket-Programming-Project-Library-Management-System',
  },
  {
    id: 'project-5',
    name: 'OS Kernel',
    description: 'This Weenix OS Project involved implementing process/thread management, virtual file systems, and virtual memory subsystems.',
    tags: [],
    image: os,
    repo: 'https://github.com/borsheng/Weenix-Kernel-Project',
    demo: 'https://github.com/borsheng/Weenix-Kernel-Project',
  },
];

export { services, technologies, experiences, projects };
