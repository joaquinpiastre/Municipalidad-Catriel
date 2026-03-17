/**
 * Datos mock para Boletín Oficial y Transparencia.
 * Preparado para integración con sistema de documentos.
 */
export const documentTypes = [
  { id: 'ordenanza', label: 'Ordenanzas' },
  { id: 'resolucion', label: 'Resoluciones' },
  { id: 'decreto', label: 'Decretos' },
  { id: 'comunicacion', label: 'Comunicaciones' },
];

export const transparencyDocuments = [
  {
    id: '1',
    type: 'ordenanza',
    number: '[Placeholder - Nº]',
    title: '[Placeholder - Título de ordenanza de ejemplo]',
    date: '2025-01-15',
    summary: '[Placeholder - Descripción breve para búsqueda]',
    area: '[Área emisora placeholder]',
    fileUrl: null,
    year: 2025,
  },
  {
    id: '2',
    type: 'resolucion',
    number: '[Placeholder - Nº]',
    title: '[Placeholder - Título de resolución]',
    date: '2025-02-01',
    summary: '[Placeholder]',
    area: '[Área placeholder]',
    fileUrl: null,
    year: 2025,
  },
  {
    id: '3',
    type: 'decreto',
    number: '[Placeholder - Nº]',
    title: '[Placeholder - Título de decreto]',
    date: '2025-02-10',
    summary: '[Placeholder]',
    area: '[Área placeholder]',
    fileUrl: null,
    year: 2025,
  },
];

export const transparencySections = [
  {
    id: 'boletin',
    title: 'Boletín Oficial',
    description: 'Ediciones del Boletín Oficial Municipal. Consultá las publicaciones oficiales.',
    path: '/boletin-transparencia',
  },
  {
    id: 'ordenanzas',
    title: 'Ordenanzas',
    description: 'Normas sancionadas por el Honorable Concejo Deliberante.',
    path: '/boletin-transparencia/ordenanzas',
  },
  {
    id: 'resoluciones',
    title: 'Resoluciones',
    description: 'Resoluciones dictadas por el Departamento Ejecutivo.',
    path: '/boletin-transparencia/resoluciones',
  },
  {
    id: 'decretos',
    title: 'Decretos',
    description: 'Decretos municipales.',
    path: '/boletin-transparencia/decretos',
  },
  {
    id: 'activa',
    title: 'Transparencia activa',
    description: 'Datos públicos, estructura, presupuesto. [Placeholder: se completará con datos reales.]',
    path: '/boletin-transparencia/transparencia-activa',
  },
];
