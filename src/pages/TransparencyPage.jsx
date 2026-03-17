import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Breadcrumbs, PageBanner, SectionTitle } from '../components/common';
import { transparencySections, transparencyDocuments, documentTypes } from '../data/transparency';

function TransparencyIndex() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/boletin-transparencia', label: 'Boletín y Transparencia' }]} />
        <SectionTitle
          title="Boletín Oficial y Transparencia"
          subtitle="Acceso a la información pública y documentación oficial."
        />
        <div className="transparency-sections">
          {transparencySections.map((sec) => (
            <Link key={sec.id} to={sec.path} className="transparency-section-card">
              <h3>{sec.title}</h3>
              <p>{sec.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function DocumentList({ typeLabel, typeId }) {
  const docs = typeId
    ? transparencyDocuments.filter((d) => d.type === typeId)
    : transparencyDocuments;

  return (
    <div className="container page-content">
      <h2>{typeLabel || 'Documentos'}</h2>
      <div className="doc-list">
        {docs.map((doc) => (
          <article key={doc.id} className="doc-item">
            <div className="doc-item__content">
              <span className="doc-item__type">{doc.type}</span>
              <h3 className="doc-item__title">{doc.title}</h3>
              <p className="doc-item__meta">
                {doc.number} · {new Date(doc.date).toLocaleDateString('es-AR')} · {doc.area}
              </p>
              {doc.summary && <p className="doc-item__summary">{doc.summary}</p>}
            </div>
            {doc.fileUrl ? (
              <a href={doc.fileUrl} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">
                Descargar PDF
              </a>
            ) : (
              <span className="doc-item__placeholder">[PDF no disponible - placeholder]</span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function OrdenanzasPage() {
  return (
    <>
      <Breadcrumbs items={[
        { path: '/', label: 'Inicio' },
        { path: '/boletin-transparencia', label: 'Boletín y Transparencia' },
        { path: '/boletin-transparencia/ordenanzas', label: 'Ordenanzas' },
      ]} />
      <DocumentList typeLabel="Ordenanzas" typeId="ordenanza" />
    </>
  );
}

function ResolucionesPage() {
  return (
    <>
      <Breadcrumbs items={[
        { path: '/', label: 'Inicio' },
        { path: '/boletin-transparencia', label: 'Boletín y Transparencia' },
        { path: '/boletin-transparencia/resoluciones', label: 'Resoluciones' },
      ]} />
      <DocumentList typeLabel="Resoluciones" typeId="resolucion" />
    </>
  );
}

function DecretosPage() {
  return (
    <>
      <Breadcrumbs items={[
        { path: '/', label: 'Inicio' },
        { path: '/boletin-transparencia', label: 'Boletín y Transparencia' },
        { path: '/boletin-transparencia/decretos', label: 'Decretos' },
      ]} />
      <DocumentList typeLabel="Decretos" typeId="decreto" />
    </>
  );
}

function TransparenciaActivaPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[
          { path: '/', label: 'Inicio' },
          { path: '/boletin-transparencia', label: 'Boletín y Transparencia' },
          { path: '/boletin-transparencia/transparencia-activa', label: 'Transparencia activa' },
        ]} />
        <h1>Transparencia activa</h1>
        <p>En esta sección se publicarán datos públicos, estructura, presupuesto, licitaciones y compras. [Placeholder para integración futura.]</p>
      </div>
    </>
  );
}

export function TransparencyPage() {
  return (
    <>
      <PageBanner
        title="Boletín y Transparencia"
        subtitle="Documentación oficial y acceso a la información"
        image="https://images.unsplash.com/photo-1450101499163-c884538c9f8e?w=1920&q=80"
      />
      <Routes>
        <Route index element={<TransparencyIndex />} />
        <Route path="ordenanzas" element={<OrdenanzasPage />} />
        <Route path="resoluciones" element={<ResolucionesPage />} />
        <Route path="decretos" element={<DecretosPage />} />
        <Route path="transparencia-activa" element={<TransparenciaActivaPage />} />
      </Routes>
    </>
  );
}
