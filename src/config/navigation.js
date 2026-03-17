/**
 * Estructura de navegación del portal municipal.
 * Centralizada para mantener menú, footer y breadcrumbs coherentes.
 */
export const NAV = {
  home: { path: '/', label: 'Inicio' },

  municipalidad: {
    path: '/municipalidad',
    label: 'Municipalidad',
    children: [
      { path: '/municipalidad', label: 'Presentación' },
      { path: '/municipalidad/intendenta', label: 'Mensaje de la Intendenta' },
      { path: '/municipalidad/organigrama', label: 'Organigrama' },
      { path: '/municipalidad/secretarias', label: 'Secretarías' },
      { path: '/municipalidad/historia', label: 'Historia de Catriel' },
      { path: '/municipalidad/carta-organica', label: 'Carta Orgánica' },
    ],
  },

  gestion: {
    path: '/gestion',
    label: 'Gestión',
    children: [
      { path: '/gestion', label: 'Áreas de gobierno' },
      { path: '/gestion/medio-ambiente', label: 'Medio Ambiente' },
      { path: '/gestion/turismo', label: 'Turismo' },
      { path: '/gestion/deportes', label: 'Deportes' },
      { path: '/gestion/cultura', label: 'Cultura' },
    ],
  },

  tramites: {
    path: '/tramites-servicios',
    label: 'Trámites y Servicios',
    children: [
      { path: '/tramites-servicios', label: 'Todos los trámites' },
      { path: '/tramites-servicios/autogestion', label: 'Autogestión' },
      { path: '/tramites-servicios/boletin-oficial', label: 'Boletín Oficial' },
    ],
  },

  noticias: {
    path: '/noticias',
    label: 'Noticias',
  },

  transparencia: {
    path: '/boletin-transparencia',
    label: 'Boletín y Transparencia',
    children: [
      { path: '/boletin-transparencia', label: 'Boletín Oficial' },
      { path: '/boletin-transparencia/ordenanzas', label: 'Ordenanzas' },
      { path: '/boletin-transparencia/transparencia-activa', label: 'Transparencia activa' },
    ],
  },

  turismo: {
    path: '/turismo',
    label: 'Turismo / Catriel',
  },

  desarrollo: {
    path: '/desarrollo-local',
    label: 'Desarrollo Local',
  },

  contacto: {
    path: '/contacto',
    label: 'Contacto',
  },
};

/** Rutas principales para el menú (con submenús) */
export const MAIN_MENU_ITEMS = [
  NAV.home,
  NAV.municipalidad,
  NAV.gestion,
  NAV.tramites,
  NAV.noticias,
  NAV.transparencia,
  NAV.turismo,
  NAV.desarrollo,
  NAV.contacto,
];

/** Enlaces rápidos del hero / home */
export const HERO_CTAS = [
  { path: '/tramites-servicios', label: 'Trámites', icon: 'document' },
  { path: '/noticias', label: 'Noticias', icon: 'news' },
  { path: '/boletin-transparencia', label: 'Boletín Oficial', icon: 'official' },
  { path: '/tramites-servicios/autogestion', label: 'Autogestión', icon: 'self-service' },
  { path: '/contacto', label: 'Contacto', icon: 'contact' },
];
