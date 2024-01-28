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
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  bahria,
  miu,
  csharp,
  angular,
  dotnet,
  flow,
  blockchain,
  sqlserver
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
    id: 'work',
    title: 'Experiance',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: ux,
  },
  {
    title: 'Blockchain Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'csharp',
    icon: csharp,
  },
  {
    name: 'dotnet',
    icon: dotnet,
  },
  {
    name: 'angular',
    icon: angular,
  },
  {
    name: 'reactjs',
    icon: reactjs,
  },
  {
    name: 'flow',
    icon: flow,
  },
  {
    name: 'blockchain',
    icon: blockchain,
  },
  {
    name: 'sqlserver',
    icon: sqlserver,
  },
  {
    name: 'css',
    icon: css,
  },
  {
    name: 'javascript',
    icon: javascript,
  },
  {
    name: 'typescript',
    icon: typescript,
  },
 
  {
    name: 'reduxtoolkit',
    icon: redux,
  },
  {
    name: 'tailwindcss',
    icon: tailwind,
  },
 
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git ',
    icon: git,
  },
 
  {
    name: 'docker ',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'QPac Syatems Inc',
    location: 'St Augustine Florida United States',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Bopayments Inc',
    location: 'Newyork United States',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2022 - Dec 2024',
  },
  {
    title: 'Software Engineer',
    company_name: 'Troon Technologies',
    location: 'Islamabad Pakistan',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Apr 2021 - Apr 2022',
  },
  {
    title: 'Software Engineer',
    company_name: 'MTBC',
    location: 'Rawalpindi Pakistan',
    icon: dcc,
    iconBg: '#333333',
    date: 'Dec 2019 - Apr 2021',
  },
  {
    title: 'Software Engineer',
    company_name: 'Harfsol Technologies Pvt Ltd ',
    location: 'Rawalpindi Pakistan',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jul 2017 - Dec 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];
const education = [
  {
    title: 'Bahria University Islamabad',
    desc:  '2013-2017', 
    edu:'BS Software Engineering', 
    icon: bahria,
  },
  {
    title: 'Maharishi International University',
    desc:  '2022-Present',  
    edu:'Master in Computer Science', 
    icon: miu,
  },
  
];

export { services, technologies, experiences, projects,education };
