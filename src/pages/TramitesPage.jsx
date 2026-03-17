import React, { useState, useMemo } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Breadcrumbs, PageBanner, SectionTitle } from '../components/common';
import { tramitesList, tramiteCategories, getTramiteBySlug } from '../data/tramites';

function TramitesList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = useMemo(() => {
    let list = tramitesList.filter((t) => t.active);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          (t.shortDescription && t.shortDescription.toLowerCase().includes(q))
      );
    }
    if (category) {
      list = list.filter((t) => t.category === category);
    }
    return list;
  }, [search, category]);

  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/tramites-servicios', label: 'Trámites y Servicios' }]} />
        <SectionTitle
          title="Trámites y servicios"
          subtitle="Encontrá el trámite que necesitás. Filtros y búsqueda para acceder rápido."
        />
        <div className="tramites-filters">
          <input
            type="search"
            placeholder="Buscar trámite..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="tramites-search"
            aria-label="Buscar trámites"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="tramites-select"
            aria-label="Filtrar por categoría"
          >
            <option value="">Todas las categorías</option>
            {tramiteCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>
        <div className="tramites-grid">
          {filtered.map((t) => (
            <article key={t.id} className="tramite-card">
              <h3 className="tramite-card__title">{t.title}</h3>
              <p className="tramite-card__desc">{t.shortDescription}</p>
              <Link to={`/tramites-servicios/${t.slug}`} className="btn btn--primary btn--sm">
                Ver trámite
              </Link>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="state-empty">No se encontraron trámites con los filtros aplicados.</p>
        )}
      </div>
    </>
  );
}

function TramiteDetailPage() {
  const { slug } = useParams();
  const tramite = getTramiteBySlug(slug);

  if (!tramite) {
    return (
      <div className="container page-content">
        <p>Trámite no encontrado.</p>
        <Link to="/tramites-servicios">Volver a Trámites</Link>
      </div>
    );
  }

  const breadcrumbs = [
    { path: '/', label: 'Inicio' },
    { path: '/tramites-servicios', label: 'Trámites y Servicios' },
    { path: `/tramites-servicios/${tramite.slug}`, label: tramite.title },
  ];

  const requirements = Array.isArray(tramite.requirements)
    ? tramite.requirements
    : [tramite.requirements];
  const steps = Array.isArray(tramite.steps) ? tramite.steps : [tramite.steps];

  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={breadcrumbs} />
        <h1>{tramite.title}</h1>
        <p className="lead">{tramite.description}</p>
        <dl className="tramite-meta">
          <dt>Modalidad</dt>
          <dd>{tramite.modality}</dd>
          <dt>Tiempo estimado</dt>
          <dd>{tramite.estimatedTime}</dd>
          <dt>Área</dt>
          <dd>{tramite.area}</dd>
          <dt>Contacto</dt>
          <dd>
            <a href={`mailto:${tramite.contact}`}>{tramite.contact}</a>
          </dd>
        </dl>
        <section>
          <h2>Requisitos</h2>
          <ul>
            {requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Pasos</h2>
          <ol>
            {steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </section>
        {tramite.link && (
          <p>
            <Link to={tramite.link} className="btn btn--primary">
              Acceder al trámite
            </Link>
          </p>
        )}
      </div>
    </>
  );
}

export function TramitesPage() {
  return (
    <>
      <PageBanner
        title="Trámites y Servicios"
        subtitle="Accedé a los trámites municipales"
        image="https://images.unsplash.com/photo-1450101499163-c884538c9f8e?w=1920&q=80"
      />
      <Routes>
        <Route index element={<TramitesList />} />
        <Route path=":slug" element={<TramiteDetailPage />} />
      </Routes>
    </>
  );
}
