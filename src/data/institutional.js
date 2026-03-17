/**
 * Datos institucionales: presentación, intendenta, historia, carta orgánica.
 */
import { SITE } from '../config/site';

export const institutionalIntro = {
  title: 'Municipalidad de Catriel',
  subtitle: 'Gobierno local al servicio de la comunidad',
  body: `La Municipalidad de Catriel es el gobierno local que administra los intereses de la ciudad y de sus vecinos. Con sede en San Martín 59, trabaja día a día en servicios públicos, desarrollo urbano, cultura, deporte, ambiente y producción.

Catriel, Capital Provincial del Petróleo en Río Negro, tiene una identidad marcada por la energía, el trabajo y la comunidad. Nuestra gestión apuesta a la cercanía con el vecino, la transparencia y el desarrollo sostenible.`,
};

export const intendentaMessage = {
  name: SITE.authorities.intendenta.name,
  title: SITE.authorities.intendenta.title,
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  imageAlt: 'Intendenta Municipal',
  message: `[Placeholder - Mensaje de la Intendenta Daniela Salzotto. En producción se cargará el texto oficial.]

Como Intendenta de Catriel, los invito a conocer este portal y a utilizarlo para acceder a trámites, noticias y servicios. Nuestro objetivo es una gestión cercana, transparente y orientada al desarrollo de la ciudad.

Catriel tiene un gran potencial: nuestra identidad como Capital Provincial del Petróleo, la fuerza de la comunidad y el trabajo conjunto con el sector productivo son pilares para seguir creciendo. Desde el municipio trabajamos para mejorar la calidad de vida de todos los vecinos.`,
};

export const organigrama = {
  description: 'El Departamento Ejecutivo está a cargo de la Intendenta. Las secretarías y direcciones dependen del Ejecutivo y desarrollan las políticas en cada área. [Placeholder: en producción se puede incluir un organigrama visual o lista detallada.]',
  items: [
    { role: 'Intendenta', name: SITE.authorities.intendenta.name },
    { role: 'Secretaría de Gobierno', name: '[Placeholder]' },
    { role: 'Secretaría de Obras y Servicios Públicos', name: '[Placeholder]' },
    { role: 'Secretaría de Hacienda', name: '[Placeholder]' },
    { role: 'Secretaría de Medio Ambiente', name: '[Placeholder]' },
    { role: 'Dirección de Turismo', name: '[Placeholder]' },
    { role: 'Dirección de Deportes', name: '[Placeholder]' },
    { role: 'Dirección de Cultura', name: '[Placeholder]' },
    { role: 'Otras áreas', name: '[Placeholder - ampliar según estructura real]' },
  ],
};

export const historyBlock = {
  title: 'Historia de Catriel',
  body: `[Placeholder - Texto histórico de Catriel para completar con fuentes oficiales.]

Catriel es una ciudad del departamento Avellaneda, en la provincia de Río Negro. Su desarrollo está ligado a la actividad petrolera y a la llegada del ferrocarril. Con el tiempo se consolidó como centro urbano y productivo, siendo reconocida como Capital Provincial del Petróleo.

La identidad local combina la tradición petrolera, la vida comunitaria y el vínculo con el territorio. El municipio trabaja para preservar la memoria y proyectar el futuro de la ciudad.`,
};

export const cartaOrganica = {
  title: 'Carta Orgánica',
  description: 'La Carta Orgánica es la norma fundamental del municipio. [Placeholder: en producción se enlazará el documento oficial o sección dedicada.]',
  linkText: 'Consultar Carta Orgánica',
  fileUrl: null,
};
