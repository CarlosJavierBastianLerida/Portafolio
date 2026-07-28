export type Lang = 'es' | 'en';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  from: string;
  to: string;
  description: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

const projects_es: Project[] = [
  {
    title: 'ConnectingDevs',
    description: 'Red social para desarrolladores. SPA en Angular que consume una API de Laravel con autenticación por sesión (Sanctum), cookies y protección CSRF, sin tokens en localStorage. Incluye feed con posts, comentarios, likes y follows, perfiles públicos y editables, rutas protegidas con guards, y una sección de administración de cuentas cubierta con tests E2E en Cypress.',
    tags: ['Angular', 'TypeScript', 'Laravel Sanctum', 'Cypress'],
    github: 'https://github.com/ConnectingDevs/ConnectingDevs-Frontend',
    demo: 'https://devconnect-free.vercel.app',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto. Explica qué problema resuelve y las decisiones técnicas más importantes que tomaste.',
    tags: ['Angular', 'Node.js', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto. Explica qué problema resuelve y las decisiones técnicas más importantes que tomaste.',
    tags: ['TypeScript', 'REST API', 'SQL'],
    github: '#',
    demo: '#',
  },
];

const projects_en: Project[] = [
  {
    title: 'ConnectingDevs',
    description: 'Developer-focused social network. Angular SPA consuming a Laravel API with session-based authentication (Sanctum), cookies and CSRF protection, no tokens in localStorage. Includes a feed with posts, comments, likes and follows, editable public/own profiles, guard-protected routes, and an account management section covered by Cypress E2E tests.',
    tags: ['Angular', 'TypeScript', 'Laravel Sanctum', 'Cypress'],
    github: 'https://github.com/ConnectingDevs/ConnectingDevs-Frontend',
    demo: 'https://devconnect-free.vercel.app',
  },
  {
    title: 'Project 2',
    description: 'Project description. Explain what problem it solves and the most important technical decisions you made.',
    tags: ['Angular', 'Node.js', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project 3',
    description: 'Project description. Explain what problem it solves and the most important technical decisions you made.',
    tags: ['TypeScript', 'REST API', 'SQL'],
    github: '#',
    demo: '#',
  },
];

const skillItems = {
  frontend: [
    { name: 'Angular',      icon: 'devicon-angular-plain colored' },
    { name: 'Vue',          icon: 'devicon-vuejs-plain colored' },
    { name: 'TypeScript',   icon: 'devicon-typescript-plain colored' },
    { name: 'JavaScript',   icon: 'devicon-javascript-plain colored' },
    { name: 'HTML5',        icon: 'devicon-html5-plain colored' },
    { name: 'SCSS',         icon: 'devicon-sass-original colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  ],
  backend: [
    { name: 'PHP',        icon: 'devicon-php-plain colored' },
    { name: 'MySQL',      icon: 'devicon-mysql-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'SQL' },
  ],
  tools: [
    { name: 'Git',     icon: 'devicon-git-plain colored' },
    { name: 'GitHub',  icon: 'devicon-github-original' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Figma',   icon: 'devicon-figma-plain colored' },
    { name: 'npm',     icon: 'devicon-npm-original-wordmark colored' },
    { name: 'pnpm' },
  ],
};

const skills_es: SkillCategory[] = [
  {
    name: 'Frontend',
    description: 'Construyo interfaces modernas y reactivas con Angular y Vue, usando TypeScript y JavaScript para garantizar un código robusto y mantenible. Complemento con HTML, SCSS y Tailwind para lograr interfaces cuidadas y adaptadas a distintos dispositivos.',
    skills: skillItems.frontend,
  },
  {
    name: 'Back-end',
    description: 'Desarrollo el lado del servidor con PHP y gestiono bases de datos relacionales con MySQL y PostgreSQL, aplicando buenas prácticas en el diseño de esquemas y la gestión de datos.',
    skills: skillItems.backend,
  },
  {
    name: 'Herramientas',
    description: 'Trabajo habitualmente con Git y GitHub para el control de versiones y la gestión de repositorios. Como entorno de desarrollo utilizo VS Code, y para la gestión de dependencias empleo tanto npm como pnpm. También manejo Figma para la consulta y análisis de diseños.',
    skills: skillItems.tools,
  },
];

const skills_en: SkillCategory[] = [
  {
    name: 'Frontend',
    description: 'I build modern and reactive interfaces with Angular and Vue, using TypeScript and JavaScript to ensure robust and maintainable code. I complement with HTML, SCSS and Tailwind to achieve polished, responsive interfaces.',
    skills: skillItems.frontend,
  },
  {
    name: 'Back-end',
    description: 'I develop the server side with PHP and manage relational databases with MySQL and PostgreSQL, applying best practices in schema design and data management.',
    skills: skillItems.backend,
  },
  {
    name: 'Tools',
    description: 'I regularly use Git and GitHub for version control and repository management. VS Code is my development environment, and I use npm and pnpm for dependency management. I also work with Figma to consult and analyse designs and prototypes.',
    skills: skillItems.tools,
  },
];

const experience_es: ExperienceItem[] = [
  {
    company: 'Empresa',
    role: 'Desarrollador de Aplicaciones Web',
    from: 'Mes Año',
    to: 'Presente',
    description: 'Descripción de tus responsabilidades y logros. Reemplaza este texto con tu experiencia real.',
  },
];

const experience_en: ExperienceItem[] = [
  {
    company: 'Company',
    role: 'Web Application Developer',
    from: 'Month Year',
    to: 'Present',
    description: 'Description of your responsibilities and achievements. Replace this text with your real experience.',
  },
];

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      badge: 'Disponible para nuevos proyectos',
      role: 'Desarrollador de Aplicaciones Web',
      description:
        'Construyo aplicaciones web robustas y escalables, con foco en la arquitectura limpia, la experiencia del usuario y la calidad del código.',
      cta: 'Ver proyectos',
      ctaContact: 'Contactarme',
    },
    about: {
      title: 'Sobre mí',
      bio1: 'Soy desarrollador web en formación, especializado en el desarrollo de aplicaciones tanto en el lado del cliente como del servidor. Trabajo con Angular y Vue para la construcción de interfaces modernas y reactivas, combinando TypeScript y JavaScript para garantizar un código robusto y mantenible.',
      bio2: 'En el ámbito del back-end, tengo experiencia con PHP y bases de datos relacionales como MySQL, aplicando buenas prácticas en el diseño de esquemas y la gestión de datos. Me interesa el código limpio, los patrones de diseño y seguir creciendo como profesional dentro del sector.',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una selección de mis trabajos',
      viewCode: 'Código',
      viewDemo: 'Demo',
      items: projects_es,
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías con las que trabajo',
      categories: skills_es,
    },
    experience: {
      title: 'Experiencia',
      items: experience_es,
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto o quieres charlar? Escríbeme.',
      emailLabel: 'Enviar email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      built: 'Desarrollado con',
      rights: 'Todos los derechos reservados',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      legal: 'Aviso legal',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      badge: 'Available for new projects',
      role: 'Web Application Developer',
      description:
        'I build robust and scalable web applications, focused on clean architecture, user experience, and code quality.',
      cta: 'View projects',
      ctaContact: 'Contact me',
    },
    about: {
      title: 'About me',
      bio1: "I'm a web developer in training, specialized in both client-side and server-side application development. I work with Angular and Vue to build modern and reactive interfaces, combining TypeScript and JavaScript to ensure robust and maintainable code.",
      bio2: 'On the back-end side, I have experience with PHP and relational databases like MySQL, applying best practices in schema design and data management. I care about clean code, design patterns, and continuing to grow as a professional in the web development field.',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of my work',
      viewCode: 'Code',
      viewDemo: 'Demo',
      items: projects_en,
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies I work with',
      categories: skills_en,
    },
    experience: {
      title: 'Experience',
      items: experience_en,
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project or want to chat? Write to me.',
      emailLabel: 'Send email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      built: 'Built with',
      rights: 'All rights reserved',
      privacy: 'Privacy',
      cookies: 'Cookies',
      legal: 'Legal notice',
    },
  },
};
