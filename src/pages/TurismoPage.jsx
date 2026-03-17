import React from 'react';
import { Breadcrumbs, PageBanner, SectionTitle } from '../components/common';
import { tourismIntro, pointsOfInterest, identityBlock } from '../data/tourism';

export function TurismoPage() {
  return (
    <>
      <PageBanner
        title="Turismo / Catriel"
        subtitle="Conocé nuestra ciudad"
        image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
      />
      <div className="container page-content">
        <Breadcrumbs items={[{ path: '/', label: 'Inicio' }, { path: '/turismo', label: 'Turismo' }]} />
        <SectionTitle title={tourismIntro.title} subtitle={tourismIntro.subtitle} />
        <p className="lead">{tourismIntro.description}</p>

        <section className="section">
          <h2>Identidad local</h2>
          <div className="identity-grid">
            {identityBlock.items.map((item, i) => (
              <div key={i} className="identity-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Puntos de interés</h2>
          <div className="poi-grid">
            {pointsOfInterest.map((poi) => (
              <article key={poi.id} className="poi-card">
                <div className="poi-card__image-wrap">
                  <img src={poi.image} alt={poi.imageAlt || poi.name} loading="lazy" />
                </div>
                <div className="poi-card__body">
                  <h3>{poi.name}</h3>
                  <p>{poi.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Eventos y actividades</h2>
          <p>{identityBlock.title}. [Placeholder: agenda de fiestas, ferias y circuitos.]</p>
        </section>
      </div>
    </>
  );
}
