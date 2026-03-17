/**
 * Datos mock para la sección Turismo / Catriel.
 */
export const tourismIntro = {
  title: 'Catriel - Conocé nuestra ciudad',
  subtitle: 'Identidad, cultura y energía',
  description: 'Catriel es mucho más que una ciudad petrolera: es comunidad, cultura, naturaleza y trabajo. Conocé sus puntos de interés, eventos y la calidez de su gente.',
};

export const pointsOfInterest = [
  {
    id: '1',
    name: '[Placeholder - Punto de interés 1]',
    description: '[Descripción breve. Completar con datos reales: museos, plazas, miradores, etc.]',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    imageAlt: 'Punto de interés Catriel',
  },
  {
    id: '2',
    name: '[Placeholder - Punto de interés 2]',
    description: '[Descripción breve.]',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
    imageAlt: 'Atractivo local',
  },
];

export const identityBlock = {
  title: 'Identidad local',
  items: [
    { title: 'Capital Provincial del Petróleo', description: 'La actividad hidrocarburífera marca la historia y el presente productivo de Catriel.' },
    { title: 'Comunidad', description: 'Una ciudad con fuerte sentido de pertenencia y trabajo en conjunto.' },
    { title: 'Cultura y deporte', description: 'Eventos, festivales y actividades que reúnen a vecinos y visitantes.' },
    { title: 'Ambiente', description: 'Compromiso con el cuidado del entorno y el desarrollo sostenible.' },
  ],
};

export const eventsBlock = {
  title: 'Eventos y actividades',
  description: '[Placeholder - Agenda de fiestas, ferias y eventos. En producción se alimentará desde CMS o agenda pública.]',
  items: [],
};
