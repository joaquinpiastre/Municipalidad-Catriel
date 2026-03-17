import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_CTAS } from '../../config/navigation';

export function Hero({ title, subtitle, description, image, imageAlt }) {
  return (
    <section className="hero" aria-label="Bienvenida">
      <div className="hero__bg">
        <img src={image} alt="" className="hero__img" aria-hidden />
        <span className="hero__overlay" aria-hidden />
      </div>
      <div className="hero__content container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <p className="hero__description">{description}</p>
        <div className="hero__ctas">
          {HERO_CTAS.map((cta) => (
            <Link key={cta.path} to={cta.path} className="hero__cta">
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
