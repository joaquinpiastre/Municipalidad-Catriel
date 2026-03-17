import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, PageBanner, SectionTitle } from '../components/common';
import { desarrolloIntro, desarrolloBlocks } from '../data/desarrolloLocal';

export function DesarrolloLocalPage() {
  return (
    <>
      <PageBanner
        title="Desarrollo Local"
        subtitle="Producción, empleo e inversión"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
      />
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/desarrollo-local', label: 'Desarrollo Local' }]} />
        <SectionTitle title={desarrolloIntro.title} subtitle={desarrolloIntro.subtitle} />
        <p className="lead">{desarrolloIntro.description}</p>

        <div className="desarrollo-grid">
          {desarrolloBlocks.map((block, i) => (
            <div key={i} className="desarrollo-card">
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </div>
          ))}
        </div>

        <p className="page-note">
          <Link to="/tramites-servicios/parque-industrial">Ver trámites relacionados al Parque Industrial</Link>.
        </p>
      </div>
    </>
  );
}
