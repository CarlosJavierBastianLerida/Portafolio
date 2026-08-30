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

export interface EducationItem {
  institution: string;
  title: string;
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
    title: 'FluyQo',
    description: 'SaaS multi-tenant para la gestión integral de academias de artes marciales, yoga, pilates y centros de bienestar. Backend en Laravel 12 con autenticación Sanctum y multi-tenancy real (base de datos independiente por academia), frontend con Vue 3 e Inertia.js. Gestiona alumnos, pagos, programas y progresión por cinturones. Cubierto por una suite de tests completa: 251 tests con PHPUnit, 41 con Vitest y 24 end-to-end con Playwright.',
    tags: ['Laravel', 'Vue', 'Inertia.js', 'PHP', 'Playwright'],
    github: '',
    demo: '',
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
    title: 'FluyQo',
    description: 'Multi-tenant SaaS for managing martial arts academies, yoga, pilates and wellness centers end-to-end. Laravel 12 backend with Sanctum authentication and real multi-tenancy (a separate database per academy), Vue 3 + Inertia.js frontend. Manages students, payments, programs and belt/rank progression. Covered by a full test suite: 251 PHPUnit tests, 41 with Vitest, and 24 end-to-end with Playwright.',
    tags: ['Laravel', 'Vue', 'Inertia.js', 'PHP', 'Playwright'],
    github: '',
    demo: '',
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
    { name: 'PHP',     icon: 'devicon-php-plain colored' },
    { name: 'MySQL',   icon: 'devicon-mysql-plain colored' },
    { name: 'SQL' },
    { name: 'Cypress', icon: 'devicon-cypressio-plain colored' },
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
    description: 'Desarrollo el lado del servidor con PHP, gestionando bases de datos relacionales con MySQL y aplicando buenas prácticas en el diseño de esquemas. Complemento con Cypress para pruebas automatizadas que garanticen la calidad del código.',
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
    description: 'I develop the server side with PHP, managing relational databases with MySQL and applying best practices in schema design. I complement this with Cypress for automated testing to ensure code quality.',
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
    company: 'Libnamic · Contrato de prácticas',
    role: 'Desarrollador de Aplicaciones Web Junior',
    from: 'feb. 2026',
    to: 'may. 2026',
    description: 'Prácticas como Desarrollador Frontend Junior dentro del equipo técnico de Libnamic, centradas en la creación y el mantenimiento de componentes de interfaz con Vue.js, la identificación y corrección de bugs para optimizar la experiencia de usuario, y la integración en el flujo de trabajo del equipo, colaborando en la estimación y el despliegue de tareas. Me aportó una alta capacidad de adaptación, resolución de problemas bajo supervisión y autonomía técnica.',
  },
  {
    company: 'Pike Bike · Decathlon · Herba Ricemills',
    role: 'Otras experiencias profesionales',
    from: '2020',
    to: '2025',
    description: 'Distintos trabajos compatibilizados con mi etapa de formación: taller de bicicletas propio como autónomo, mecánico de bicicletas en Decathlon y operario de producción en Herba Ricemills. Me aportaron adaptabilidad, trato directo con clientes y capacidad de trabajo en entornos operativos exigentes.',
  },
  {
    company: 'Elimco Aerospace · Sevilla, Hamburgo (DE), Hermosillo (MX)',
    role: 'Fabricador Eléctrico Aeronáutico',
    from: '2013',
    to: '2017',
    description: 'Más de 6 años de experiencia profesional en un sector de tolerancia cero a errores, incluyendo formación y liderazgo de un equipo de producción en México, y trabajo en Alemania bajo estándares aeronáuticos estrictos. Esta experiencia me aportó disciplina, rigor documental, adaptabilidad a equipos y culturas distintas, y capacidad de trabajo bajo presión — cualidades que aplico directamente al desarrollo de software: pruebas exhaustivas, documentación clara y responsabilidad sobre el resultado final.',
  },
];

const education_es: EducationItem[] = [
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
    institution: 'FOC Granada',
    from: '2024',
    to: '2026',
    description: 'Formación en HTML, CSS, JavaScript, PHP, Angular, MySQL y Cypress. Certificación en JavaScript Essentials 1.',
  },
  {
    title: 'Curso de Mecánico de Bicicletas',
    institution: 'Bici con Alas, Madrid',
    from: '',
    to: '2019',
    description: 'Formación como mecánico de bicicletas, incluyendo prácticas, que sentó las bases técnicas para mi posterior etapa como responsable de taller propio y en Decathlon.',
  },
  {
    title: 'Homologación en Fabricación Eléctrica Aeronáutica',
    institution: 'Airbus Group · CTI',
    from: '',
    to: '2016',
    description: 'Homologación oficial por CTI y Airbus Group en fabricación eléctrica en la industria aeronáutica, obtenida durante mi etapa en Elimco Aerospace.',
  },
  {
    title: 'Fabricación Eléctrica en la Industria Aeronáutica (710 h)',
    institution: 'UGT Andalucía Sevilla · Prácticas en Airbus Military (480 h)',
    from: '',
    to: '2012',
    description: 'Curso que me aportó los conocimientos y la experiencia necesarios para el montaje de mazos eléctricos y de centrales, el manejo de normativas, tablas y esquemas eléctricos aeronáuticos, y el uso de herramientas especializadas (tenazas de contactos para conectores de pin y socket, tenazas de terminales, tenazas para empalmes Raychem y soldador para soldadura eléctrica). Incluyó prácticas de empresa en Airbus Military de 480 horas de duración.',
  },
  {
    title: 'Grado Medio — Técnico en Equipos e Instalaciones Electrotécnicas',
    institution: 'I.E.S. Atenea, Mairena del Aljarafe (Sevilla)',
    from: '2001',
    to: '2004',
    description: 'Formación técnica de base en electricidad e instalaciones electrotécnicas, punto de partida de mi posterior especialización en fabricación eléctrica aeronáutica.',
  },
];

const experience_en: ExperienceItem[] = [
  {
    company: 'Libnamic · Internship contract',
    role: 'Junior Web Application Developer',
    from: 'Feb 2026',
    to: 'May 2026',
    description: "Internship as a Junior Frontend Developer within Libnamic's technical team, focused on creating and maintaining UI components with Vue.js, identifying and fixing bugs to improve the user experience, and integrating into the team's workflow by collaborating on task estimation and deployment. It gave me strong adaptability, problem-solving under supervision, and technical autonomy.",
  },
  {
    company: 'Pike Bike · Decathlon · Herba Ricemills',
    role: 'Other professional experience',
    from: '2020',
    to: '2025',
    description: "Various jobs combined with my training period: my own bike repair shop as a freelancer, bike mechanic at Decathlon, and production operator at Herba Ricemills. These roles gave me adaptability, direct customer interaction, and the ability to work in demanding operational environments.",
  },
  {
    company: 'Elimco Aerospace · Seville, Hamburg (DE), Hermosillo (MX)',
    role: 'Aeronautical Electrical Wire Harness Technician',
    from: '2013',
    to: '2017',
    description: 'Over 6 years of professional experience in a zero-tolerance-for-error industry, including training and leading a production team in Mexico, and working in Germany under strict aeronautical standards. This experience gave me discipline, rigorous documentation habits, adaptability across teams and cultures, and the ability to perform under pressure — qualities I apply directly to software development: thorough testing, clear documentation, and ownership of the final result.',
  },
];

const education_en: EducationItem[] = [
  {
    title: 'Higher Technician in Web Application Development (DAW)',
    institution: 'FOC Granada',
    from: '2024',
    to: '2026',
    description: 'Training in HTML, CSS, JavaScript, PHP, Angular, MySQL and Cypress. JavaScript Essentials 1 certification.',
  },
  {
    title: 'Bicycle Mechanic Course',
    institution: 'Bici con Alas, Madrid',
    from: '',
    to: '2019',
    description: 'Training as a bicycle mechanic, including a work placement, which laid the technical groundwork for my later work running my own repair shop and at Decathlon.',
  },
  {
    title: 'Aeronautical Electrical Manufacturing Certification',
    institution: 'Airbus Group · CTI',
    from: '',
    to: '2016',
    description: 'Official certification from CTI and Airbus Group in aeronautical electrical manufacturing, obtained during my time at Elimco Aerospace.',
  },
  {
    title: 'Aeronautical Electrical Manufacturing Course (710 h)',
    institution: 'UGT Andalucía Sevilla · Work placement at Airbus Military (480 h)',
    from: '',
    to: '2012',
    description: 'Course that gave me the knowledge and hands-on experience needed to assemble electrical wiring harnesses and control units, to work with aeronautical regulations, tables and wiring diagrams, and to use specialized tools (pin/socket contact crimping pliers, terminal pliers, Raychem splicing pliers and an electrical soldering iron). It included a 480-hour work placement at Airbus Military.',
  },
  {
    title: 'Technical Degree — Electrical Systems and Installations Technician',
    institution: 'I.E.S. Atenea, Mairena del Aljarafe (Sevilla)',
    from: '2001',
    to: '2004',
    description: 'Foundational technical training in electrical systems and installations, the starting point for my later specialization in aeronautical electrical manufacturing.',
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
      bio1: 'Desarrollador full-stack con Técnico Superior en Desarrollo de Aplicaciones Web (DAW). Construyo aplicaciones completas, desde la interfaz hasta la base de datos.',
      bio2: 'En el front-end trabajo con Angular, combinando TypeScript y JavaScript para crear interfaces reactivas y mantenibles. En el back-end desarrollo APIs y lógica de negocio con PHP, con bases de datos relacionales como MySQL, aplicando buenas prácticas de diseño de esquemas. Complemento el desarrollo con pruebas automatizadas (Cypress) para asegurar la calidad del código.',
      bio3: 'Actualmente desarrollo FluyQo, una aplicación en producción que abarco de principio a fin: diseño, desarrollo y despliegue. Sigo ampliando mi formación de forma continua, profundizando en Angular y explorando el ecosistema frontend más amplio. Me interesa el código limpio y los patrones de diseño, y aporto además una base de 6 años de experiencia profesional certificada en fabricación electrónica de precisión (sector aeronáutico), lo que me da disciplina, rigor y capacidad de trabajo en entornos exigentes.',
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
    education: {
      title: 'Formación',
      items: education_es,
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
      bio1: 'Full-stack developer with a Higher Technical Degree in Web Application Development (DAW). I build complete applications, from the interface down to the database.',
      bio2: "On the front-end I work with Angular, combining TypeScript and JavaScript to build reactive, maintainable interfaces. On the back-end I build APIs and business logic with PHP, with relational databases like MySQL, applying good schema design practices. I complement development with automated testing (Cypress) to ensure code quality.",
      bio3: "I'm currently developing FluyQo, a production application I cover end to end: design, development and deployment. I keep continuously expanding my training, deepening my Angular skills and exploring the broader front-end ecosystem. I care about clean code and design patterns, and I also bring 6 years of certified professional experience in precision electronic manufacturing (aerospace sector), which gives me discipline, rigor, and the ability to work in demanding environments.",
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
    education: {
      title: 'Education',
      items: education_en,
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
