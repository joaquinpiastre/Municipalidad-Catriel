import React from 'react';
import { Link } from 'react-router-dom';

export function TourismBlock({ title, description, linkText, path }) {
  return (
    <section className="tourism-block section" aria-label="Turismo">
      <div className="container">
        <div className="tourism-block__inner">
          <div className="tourism-block__content">
            <h2 className="tourism-block__title">{title}</h2>
            <p className="tourism-block__desc">{description}</p>
            <Link to={path} className="btn btn--outline btn--md">
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
