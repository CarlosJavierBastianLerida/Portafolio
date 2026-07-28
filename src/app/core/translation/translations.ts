export type Lang = 'es' | 'en';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  sections: LegalSection[];
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
];

const projects_en: Project[] = [
  {
    title: 'ConnectingDevs',
    description: 'Developer-focused social network. Angular SPA consuming a Laravel API with session-based authentication (Sanctum), cookies and CSRF protection, no tokens in localStorage. Includes a feed with posts, comments, likes and follows, editable public/own profiles, guard-protected routes, and an account management section covered by Cypress E2E tests.',
    tags: ['Angular', 'TypeScript', 'Laravel Sanctum', 'Cypress'],
    github: 'https://github.com/ConnectingDevs/ConnectingDevs-Frontend',
    demo: 'https://devconnect-free.vercel.app',
  },
];

const skillItems = {
  frontend: [
    { name: 'Angular',      icon: 'devicon-angular-plain colored' },
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
    description: 'Construyo interfaces modernas y reactivas con Angular, usando TypeScript y JavaScript para garantizar un código robusto y mantenible. Complemento con HTML, SCSS y Tailwind para lograr interfaces cuidadas y adaptadas a distintos dispositivos.',
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
    description: 'I build modern and reactive interfaces with Angular, using TypeScript and JavaScript to ensure robust and maintainable code. I complement with HTML, SCSS and Tailwind to achieve polished, responsive interfaces.',
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

const legal_es = {
  notice: {
    title: 'Aviso Legal',
    updated: 'Última actualización: julio de 2026',
    sections: [
      {
        heading: 'Identificación del titular',
        paragraphs: [
          'En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es Carlos Javier Bastian Lérida, con dirección de contacto carlosbastianlerida@gmail.com.',
          'Este sitio web tiene carácter personal y profesional, y no desarrolla actividad de comercio electrónico.',
        ],
      },
      {
        heading: 'Objeto',
        paragraphs: [
          'Este sitio web tiene como finalidad mostrar el perfil profesional, los proyectos y el trabajo del titular, así como facilitar un canal de contacto para propuestas laborales o profesionales.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        paragraphs: [
          'Los contenidos de este sitio web (textos, código fuente, diseño e imágenes), salvo que se indique lo contrario, son propiedad del titular o se utilizan con la debida autorización. Queda prohibida su reproducción total o parcial sin consentimiento expreso.',
        ],
      },
      {
        heading: 'Enlaces a terceros',
        paragraphs: [
          'Este sitio incluye enlaces a plataformas de terceros (GitHub, LinkedIn, demos de proyectos). El titular no se hace responsable del contenido ni de las políticas de privacidad de dichos sitios.',
        ],
      },
      {
        heading: 'Legislación aplicable',
        paragraphs: [
          'Para cualquier controversia derivada del uso de este sitio web será de aplicación la legislación española.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: julio de 2026',
    sections: [
      {
        heading: 'Responsable del tratamiento',
        paragraphs: ['Carlos Javier Bastian Lérida — carlosbastianlerida@gmail.com'],
      },
      {
        heading: '¿Qué datos se recogen?',
        paragraphs: [
          'Este sitio web no utiliza cookies de seguimiento ni identifica a los visitantes de forma individual. Los únicos datos personales que se tratan son los que el usuario facilita voluntariamente al rellenar el formulario de contacto: nombre, dirección de correo electrónico y el contenido del mensaje. Adicionalmente, se recogen estadísticas de visitas totalmente anónimas y agregadas a través de Vercel Analytics (ver más abajo).',
        ],
      },
      {
        heading: 'Finalidad',
        paragraphs: [
          'Los datos se utilizan exclusivamente para responder a la consulta o solicitud de contacto planteada por el usuario.',
        ],
      },
      {
        heading: 'Legitimación',
        paragraphs: [
          'La base legal del tratamiento es el consentimiento del usuario, otorgado libremente al enviar el formulario de contacto.',
        ],
      },
      {
        heading: 'Encargados del tratamiento y transferencias',
        paragraphs: [
          'Para gestionar el envío del formulario se utiliza el servicio EmailJS, un proveedor externo que actúa como encargado del tratamiento. Puede consultarse su política de privacidad en emailjs.com.',
          'Este sitio también carga tipografías desde los servidores de Google Fonts, lo que implica el envío de la dirección IP del visitante a Google LLC en el momento de cargar la página.',
          'Este sitio utiliza Vercel Analytics para obtener estadísticas de tráfico agregadas y anónimas. Este servicio no identifica a los visitantes ni utiliza cookies. Más información en vercel.com/legal/privacy-policy.',
        ],
      },
      {
        heading: 'Conservación de los datos',
        paragraphs: [
          'Los mensajes recibidos a través del formulario se gestionan directamente en la bandeja de correo del titular; este sitio web no almacena los datos en ninguna base de datos propia.',
        ],
      },
      {
        heading: 'Derechos del usuario',
        paragraphs: [
          'El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a carlosbastianlerida@gmail.com.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    updated: 'Última actualización: julio de 2026',
    sections: [
      {
        heading: '¿Qué son las cookies?',
        paragraphs: [
          'Las cookies son pequeños archivos que un sitio web puede instalar en el navegador del visitante para almacenar información.',
        ],
      },
      {
        heading: 'Cookies utilizadas en este sitio',
        paragraphs: [
          'Este sitio web no instala cookies propias ni de terceros con fines analíticos, publicitarios o de seguimiento.',
        ],
      },
      {
        heading: 'Analítica sin cookies',
        paragraphs: [
          'Se utiliza Vercel Analytics para obtener estadísticas agregadas y anónimas de visitas (por ejemplo, páginas más vistas o país de origen aproximado). Este servicio no instala cookies, no utiliza identificadores persistentes y no permite reconocer a un visitante concreto entre distintas visitas, por lo que no requiere solicitar consentimiento previo.',
        ],
      },
      {
        heading: 'Recursos externos',
        paragraphs: [
          'Para el correcto funcionamiento visual del sitio se cargan recursos de terceros (tipografías de Google Fonts e iconos desde jsDelivr). Estos servicios no instalan cookies desde este sitio, pero pueden registrar la dirección IP del visitante como parte del funcionamiento técnico de sus redes de distribución de contenido (CDN).',
        ],
      },
      {
        heading: 'Cambios en esta política',
        paragraphs: [
          'Si en el futuro se incorporase alguna cookie no esencial o de seguimiento, esta política se actualizará y se solicitará el consentimiento del usuario mediante el correspondiente aviso.',
        ],
      },
    ],
  },
};

const legal_en = {
  notice: {
    title: 'Legal Notice',
    updated: 'Last updated: July 2026',
    sections: [
      {
        heading: 'Site owner identification',
        paragraphs: [
          'In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is Carlos Javier Bastian Lérida, contact address carlosbastianlerida@gmail.com.',
          'This website is personal and professional in nature and does not carry out e-commerce activity.',
        ],
      },
      {
        heading: 'Purpose',
        paragraphs: [
          "This website's purpose is to showcase the owner's professional profile, projects and work, and to provide a contact channel for job or professional proposals.",
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'The content of this website (text, source code, design and images), unless stated otherwise, is owned by the site owner or used under proper authorization. Reproduction, in whole or in part, without express consent is prohibited.',
        ],
      },
      {
        heading: 'Third-party links',
        paragraphs: [
          'This site includes links to third-party platforms (GitHub, LinkedIn, project demos). The owner is not responsible for the content or privacy policies of those sites.',
        ],
      },
      {
        heading: 'Applicable law',
        paragraphs: ['Spanish law applies to any dispute arising from the use of this website.'],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: July 2026',
    sections: [
      {
        heading: 'Data controller',
        paragraphs: ['Carlos Javier Bastian Lérida — carlosbastianlerida@gmail.com'],
      },
      {
        heading: 'What data is collected?',
        paragraphs: [
          'This website does not use tracking cookies and does not identify visitors individually. The only personal data processed is what the user voluntarily provides through the contact form: name, email address and message content. Additionally, fully anonymous, aggregated visit statistics are collected through Vercel Analytics (see below).',
        ],
      },
      {
        heading: 'Purpose',
        paragraphs: ['The data is used solely to respond to the inquiry or contact request submitted by the user.'],
      },
      {
        heading: 'Legal basis',
        paragraphs: ['The legal basis for processing is the consent freely given by the user when submitting the contact form.'],
      },
      {
        heading: 'Processors and transfers',
        paragraphs: [
          "The EmailJS service is used to handle form submissions, acting as a data processor. Its privacy policy can be found at emailjs.com.",
          "This site also loads fonts from Google Fonts servers, which involves sending the visitor's IP address to Google LLC when the page loads.",
          'This site uses Vercel Analytics to collect aggregated, anonymous traffic statistics. This service does not identify visitors or use cookies. More information at vercel.com/legal/privacy-policy.',
        ],
      },
      {
        heading: 'Data retention',
        paragraphs: [
          "Messages received through the form are handled directly in the owner's mailbox; this website does not store the data in any database of its own.",
        ],
      },
      {
        heading: 'User rights',
        paragraphs: [
          'Users may exercise their rights of access, rectification, erasure, objection, restriction of processing and portability by writing to carlosbastianlerida@gmail.com.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: 'Last updated: July 2026',
    sections: [
      {
        heading: 'What are cookies?',
        paragraphs: ['Cookies are small files that a website can store on a visitor’s browser to save information.'],
      },
      {
        heading: 'Cookies used on this site',
        paragraphs: [
          'This website does not set first-party or third-party cookies for analytics, advertising or tracking purposes.',
        ],
      },
      {
        heading: 'Cookieless analytics',
        paragraphs: [
          'Vercel Analytics is used to collect aggregated, anonymous visit statistics (e.g. most viewed pages or approximate country of origin). This service does not set cookies, does not use persistent identifiers, and does not allow recognizing a specific visitor across different visits, so no prior consent is required.',
        ],
      },
      {
        heading: 'External resources',
        paragraphs: [
          "For the site's visual functionality, third-party resources are loaded (Google Fonts typefaces and jsDelivr-hosted icons). These services do not set cookies from this site, but may log the visitor's IP address as part of the technical operation of their content delivery networks (CDN).",
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'If any non-essential or tracking cookie is introduced in the future, this policy will be updated and user consent will be requested through the corresponding notice.',
        ],
      },
    ],
  },
};

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
      bio1: 'Desarrollador full-stack con Técnico Superior en Desarrollo de Aplicaciones Web (DAW), con experiencia construyendo aplicaciones completas, desde la interfaz hasta la base de datos.',
      bio2: 'En el front-end trabajo con Angular, combinando TypeScript y JavaScript para crear interfaces reactivas y mantenibles. En el back-end desarrollo APIs y lógica de negocio con PHP y Java, con bases de datos relacionales como MySQL, aplicando buenas prácticas de diseño de esquemas. Complemento el desarrollo con pruebas automatizadas (Cypress) para asegurar la calidad del código.',
      bio3: 'Actualmente estoy desarrollando FluyQo, una aplicación en producción que abarca todo el ciclo: diseño, desarrollo y despliegue. Además, sigo ampliando mi formación de forma continua: estoy profundizando en Angular y próximamente comenzaré con React, para tener una visión más completa del ecosistema frontend actual. Me interesa el código limpio y los patrones de diseño, y busco mi primera oportunidad profesional donde pueda aportar valor desde el primer día.',
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
      modal: {
        title: 'Enviar un mensaje',
        subtitle: 'Rellena el formulario y te responderé en cuanto lo lea.',
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@email.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntame en qué puedo ayudarte...',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado! Te responderé lo antes posible.',
        error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.',
        close: 'Cerrar',
        nameError: 'Introduce al menos 2 caracteres.',
        emailError: 'Introduce un email válido.',
        messageError: 'El mensaje debe tener al menos 10 caracteres.',
      },
    },
    footer: {
      built: 'Desarrollado con',
      rights: 'Todos los derechos reservados',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      legal: 'Aviso legal',
    },
    legal: {
      ...legal_es,
      close: 'Cerrar',
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
      bio1: 'Full-stack developer with a Higher Technical Degree in Web Application Development (DAW), with experience building complete applications, from the interface down to the database.',
      bio2: "On the front-end I work with Angular, combining TypeScript and JavaScript to build reactive, maintainable interfaces. On the back-end I build APIs and business logic with PHP and Java, with relational databases like MySQL, applying good schema design practices. I complement development with automated testing (Cypress) to ensure code quality.",
      bio3: "I'm currently developing FluyQo, a production application spanning the full cycle: design, development and deployment. I'm also continuously expanding my training, deepening my Angular skills and soon starting with React, to get a fuller picture of today's front-end ecosystem. I care about clean code and design patterns, and I'm looking for my first professional opportunity where I can add value from day one.",
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
      modal: {
        title: 'Send a message',
        subtitle: "Fill in the form and I'll get back to you as soon as I read it.",
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me how I can help...',
        send: 'Send message',
        sending: 'Sending...',
        success: "Message sent! I'll reply as soon as possible.",
        error: 'Could not send the message. Try again or email me directly.',
        close: 'Close',
        nameError: 'Enter at least 2 characters.',
        emailError: 'Enter a valid email address.',
        messageError: 'The message must be at least 10 characters long.',
      },
    },
    footer: {
      built: 'Built with',
      rights: 'All rights reserved',
      privacy: 'Privacy',
      cookies: 'Cookies',
      legal: 'Legal notice',
    },
    legal: {
      ...legal_en,
      close: 'Close',
    },
  },
};
