/**
 * Datos de contacto y preguntas frecuentes.
 */
import { SITE } from '../config/site';

export const contactData = {
  address: SITE.address,
  phone: SITE.contact.phone,
  phoneRaw: SITE.contact.phoneRaw,
  email: SITE.contact.email,
  officeHours: SITE.contact.officeHours,
  social: SITE.social,
};

export const faqList = [
  {
    id: '1',
    question: '¿Cuál es el horario de atención al público?',
    answer: '[Placeholder - Confirmar horarios oficiales. Por ejemplo: Lunes a Viernes de 8:00 a 14:00 hs.]',
  },
  {
    id: '2',
    question: '¿Dónde queda la Municipalidad?',
    answer: `La sede municipal está en ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.province}.`,
  },
  {
    id: '3',
    question: '¿Cómo puedo hacer un trámite?',
    answer: 'Podés acercarte a Mesa de Entradas en San Martín 59 con la documentación requerida. Algunos trámites tendrán modalidad en línea cuando esté disponible la autogestión.',
  },
  {
    id: '4',
    question: '¿Dónde consulto el Boletín Oficial?',
    answer: 'En la sección "Boletín y Transparencia" de esta web podés acceder a las publicaciones oficiales del municipio.',
  },
];

export const usefulPhones = [
  { label: 'Municipalidad (recepción)', number: SITE.contact.phone },
  { label: '[Placeholder - Otro sector]', number: '[Placeholder]' },
];
