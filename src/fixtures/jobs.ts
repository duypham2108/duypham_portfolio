import { FaMobileAlt, FaServer } from 'react-icons/fa';
import { ImStack } from 'react-icons/im';
import { RiComputerLine } from 'react-icons/ri';

export const jobs = [
  
  {
    id: 1,
    title: 'Computational biology',
    icon: ImStack,
    description:
      'I like working with JamStack architecture for better performance, faster development & SEO Optimization',
    techStack: ['Next js', 'Gatsby'],
  },
  {
    id: 2,
    title: 'Machine leanring/Deep learning',
    icon: FaMobileAlt,
    description: 'Cross platform mobile development for iOS and Android phones',
    techStack: ['Flutter'],
  },
  {
    id: 3,
    title: 'Frontend Development',
    icon: RiComputerLine,
    description:
      "I like building modern UI's and scalable SPA with HTML, CSS and JavaScript",
    techStack: ['JavaScript', 'Vue', 'React'],
  },
  {
    id: 4,
    title: 'Backend Development',
    icon: FaServer,
    description:
      'I also like working in the server side, with technologies like Node.js and Django',
    techStack: ['Node', 'Django', 'SQL', 'NoSQL'],
  },
];
