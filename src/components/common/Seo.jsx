import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE } from '../../config/site';

export function Seo({ title, description, image }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const fullDescription = description || `Portal de la Municipalidad de Catriel. ${SITE.tagline}. Trámites, noticias y servicios.`;
  const ogImage = image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={SITE.keywords.join(', ')} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
    </Helmet>
  );
}
