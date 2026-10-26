export const profile = {
  name: 'Giovani Ramírez Méndez',
  location: 'Monterrey, N.L.',
  email: 'kevingiovaniramirez@gmail.com',
  github: 'https://github.com/GiovaniRaymundo',
  linkedin: 'https://www.linkedin.com/in/giovaniraym/',
};

export type Role = {
  title: string;
  type: string;
  period: string;
  location: string;
  summary?: string;
  bullets?: string[];
};

export type Company = {
  name: string;
  icon: 'retalio' | 'usafety' | 'hilton-cancun' | 'hilton-mty' | 'lisar';
  roles: Role[];
};

export const experience: Company[] = [
  {
    name: 'Retalio',
    icon: 'retalio',
    roles: [
      {
        title: 'Ingeniero de Software',
        type: 'Tiempo completo',
        period: 'Ago 2026 — Actualidad',
        location: 'San Pedro Garza García, N.L.',
        summary:
          'Desarrollo de una plataforma multi-tenant escalable para automatizar la operación retail de tiendas de conveniencia y gasolineras.',
        bullets: [
          'RAG con Azure Foundry para agentes de IA integrados en el producto',
          'Sistema de backup y rollback, y pipeline DevOps CI/CD',
          'Integración de APIs (scraping, tiempo real) sobre PostgreSQL y Redis',
        ],
      },
    ],
  },
  {
    name: 'uSafety',
    icon: 'usafety',
    roles: [
      {
        title: 'Fundador y Desarrollador',
        type: 'Proyecto propio',
        period: 'Ene 2026 — Actualidad',
        location: 'Monterrey, México',
        summary:
          'Plataforma SaaS multi-tenant en producción con un cliente real (Hilton Monterrey), llevada de MVP a producción.',
        bullets: [
          'Aislamiento de datos por cliente, autenticación y control de roles',
          'Búsqueda semántica con IA de objetos perdidos e inspecciones digitales con QR',
          'Control de ingresos y botón de pánico con alertas al equipo en tiempo real',
          'Esquema de datos para auditoría histórica y trazabilidad de cumplimiento',
        ],
      },
    ],
  },
  {
    name: 'Hilton',
    icon: 'hilton-cancun',
    roles: [
      {
        title: 'Sistemas (Fun & Growth)',
        type: 'Hilton Cancún Mar Caribe',
        period: 'Ene 2026 · 10 días',
        location: 'Cancún, México',
        bullets: [
          'Gestión de usuarios, permisos y roles en Active Directory',
          'Detección y resolución de vulnerabilidades con Splunk',
          'Administración del sistema POS Symphony',
        ],
      },
    ],
  },
  {
    name: 'Hilton',
    icon: 'hilton-mty',
    roles: [
      {
        title: 'IT Assistant',
        type: 'Hilton Monterrey Valle · Prácticas',
        period: 'Jun 2025 — Dic 2025',
        location: 'Monterrey, México',
        summary:
          'Participé en la migración del PMS de OnQ a PEP y apoyé la auditoría IT de Hilton a nivel CALA.',
        bullets: [
          'Resolución de fallas en infraestructura de redes y CCTV',
          'Administración de inventarios IT, usuarios, respaldos y contratos',
        ],
      },
    ],
  },
  {
    name: 'Lisar Inmobiliaria y Reformas',
    icon: 'lisar',
    roles: [
      {
        title: 'Desarrollador Web',
        type: 'Remoto',
        period: 'May 2023 — Jun 2024',
        location: 'Madrid, España',
        summary:
          'Desarrollo completo de un portal inmobiliario conectado por webhooks a un CRM, con Express.js, Pug.js y MariaDB.',
        bullets: [
          'Instalación y administración de la base de datos con técnico en sitio',
          'Diseño UX de la interfaz junto al diseñador',
        ],
      },
    ],
  },
];
