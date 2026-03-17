import React from 'react';
import { Link } from 'react-router-dom';

export function AreasBlock({ areas, title = 'Áreas de gobierno' }) {
  return (
    <section className="areas-block section" aria-label="Áreas municipales">
      <div className="container">
        <h2 className="section__heading">{title}</h2>
        <div className="areas-block__grid">
          {areas.map((area) => (
            <Link key={area.id} to={area.path} className="areas-block__card">
              <h3 className="areas-block__name">{area.name}</h3>
              <p className="areas-block__desc">{area.shortDescription}</p>
              <span className="areas-block__link">Ver área →</span>
            </Link>
          ))}
        </div>
        <div className="areas-block__more">
          <Link to="/gestion" className="btn btn--outline btn--sm">
            Todas las áreas
          </Link>
        </div>
      </div>
    </section>
  );
}
