import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Breadcrumbs, SectionTitle, PageBanner, Card } from '../components/common';
import { areasList, getAreaBySlug } from '../data/areas';

function GestionIndex() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/gestion', label: 'Gestión' }]} />
        <SectionTitle
          title="Áreas de gobierno"
          subtitle="Secretarías y direcciones que llevan adelante las políticas municipales."
        />
        <div className="cards-grid">
          {areasList.map((area) => (
            <Card
              key={area.id}
              title={area.name}
              description={area.shortDescription}
              link={area.path}
              linkText="Ver área"
            />
          ))}
        </div>
        <p className="page-note">
          Se podrán sumar más áreas según la estructura municipal. Cada ficha incluirá funciones, programas, responsables y trámites relacionados.
        </p>
      </div>
    </>
  );
}

function AreaDetailPage() {
  const { slug } = useParams();
  const area = getAreaBySlug(slug);

  if (!area) {
    return (
      <div className="container page-content">
        <p>Área no encontrada.</p>
        <Link to="/gestion">Volver a Gestión</Link>
      </div>
    );
  }

  const breadcrumbs = [
    { path: '/', label: 'Inicio' },
    { path: '/gestion', label: 'Gestión' },
    { path: area.path, label: area.name },
  ];

  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={breadcrumbs} />
        <h1>{area.name}</h1>
        <p className="lead">{area.description}</p>
        <section>
          <h2>Funciones</h2>
          <ul>
            {area.functions.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
        {area.programs && area.programs.length > 0 && (
          <section>
            <h2>Programas</h2>
            <ul>
              {area.programs.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        )}
        {area.responsable && (
          <p><strong>Responsable:</strong> {area.responsable}</p>
        )}
        {area.tramites && area.tramites.length > 0 && (
          <section>
            <h2>Trámites relacionados</h2>
            <ul>
              {area.tramites.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}

export function GestionPage() {
  return (
    <>
      <PageBanner
        title="Gestión"
        subtitle="Áreas de gobierno municipal"
        image="https://images.unsplash.com/photo-1450101499163-c884538c9f8e?w=1920&q=80"
      />
      <Routes>
        <Route index element={<GestionIndex />} />
        <Route path=":slug" element={<AreaDetailPage />} />
      </Routes>
    </>
  );
}
