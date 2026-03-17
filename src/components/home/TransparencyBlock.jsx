import React from 'react';
import { Link } from 'react-router-dom';

export function TransparencyBlock({ title, description, linkText, path }) {
  return (
    <section className="transparency-block section" aria-label="Transparencia">
      <div className="container">
        <div className="transparency-block__inner">
          <div className="transparency-block__content">
            <h2 className="transparency-block__title">{title}</h2>
            <p className="transparency-block__desc">{description}</p>
            <Link to={path} className="btn btn--primary btn--md">
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
