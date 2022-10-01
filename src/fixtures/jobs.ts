import { FaMobileAlt, FaServer } from 'react-icons/fa';
import { ImStack } from 'react-icons/im';
import { RiComputerLine } from 'react-icons/ri';

export const jobs = [
  
  {
    id: 1,
    title: 'Computational biology',
    icon: ImStack,
    description:
      'I am focus on single cell omics data analysis, especially spatial omics. Besides, I have skill on population genetics',
    techStack: ['Python', 'R'],
  },
  {
    id: 2,
    title: 'Machine learning/Deep learning',
    icon: FaMobileAlt,
    description: 'Mostly working on tabular data with machine learning and deep learning.',
    techStack: ['Python'],
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
