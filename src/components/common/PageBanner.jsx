import React from 'react';

export function PageBanner({ title, subtitle, image, imageAlt }) {
  return (
    <header className="page-banner">
      {image && (
        <div className="page-banner__bg">
          <img src={image} alt="" aria-hidden className="page-banner__img" />
          <span className="page-banner__overlay" aria-hidden />
        </div>
      )}
      <div className="page-banner__content container">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
