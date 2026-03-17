/**
 * Datos mock para la página de Inicio.
 * Fácilmente editables; preparado para CMS/API.
 */
export const homeHero = {
  title: 'Municipalidad de Catriel',
  subtitle: 'Gestión cercana, ciudad en crecimiento',
  description: 'Bienvenido al portal de la Municipalidad de Catriel. Accedé a trámites, noticias, transparencia y servicios para el vecino. Capital Provincial del Petróleo, Río Negro.',
  image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
  imageAlt: 'Vista de ciudad y gestión municipal',
};

export const quickAccessItems = [
  { path: '/tramites-servicios', label: 'Trámites', icon: 'document', description: 'Iniciá tus trámites municipales' },
  { path: '/noticias', label: 'Noticias', icon: 'news', description: 'Últimas novedades de la gestión' },
  { path: '/boletin-transparencia', label: 'Boletín Oficial', icon: 'official', description: 'Normativa y publicaciones' },
  { path: '/contacto', label: 'Contacto', icon: 'contact', description: 'Atención al vecino' },
  { path: '/gestion', label: 'Áreas', icon: 'building', description: 'Secretarías y direcciones' },
  { path: '/turismo', label: 'Turismo', icon: 'map', description: 'Conocé Catriel' },
];

export const institutionalIndicators = [
  { value: '[Placeholder]', label: 'Habitantes', icon: 'people' },
  { value: '[Placeholder]', label: 'Trámites online', icon: 'document' },
  { value: '[Placeholder]', label: 'Áreas municipales', icon: 'building' },
];

export const transparencyBlock = {
  title: 'Transparencia y acceso a la información',
  description: 'Consultá ordenanzas, resoluciones, decretos y documentación pública. La Municipalidad de Catriel promueve el acceso a la información y la rendición de cuentas.',
  linkText: 'Ver Boletín y Transparencia',
  path: '/boletin-transparencia',
};

export const tourismBlock = {
  title: 'Conocé Catriel',
  description: 'Identidad local, cultura, eventos y puntos de interés. Una ciudad con historia, energía y comunidad.',
  linkText: 'Turismo y ciudad',
  path: '/turismo',
};
