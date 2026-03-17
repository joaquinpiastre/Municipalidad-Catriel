import React from 'react';
import { Link } from 'react-router-dom';

export function Card({ title, description, link, linkText, image, imageAlt, children, className = '' }) {
  const content = (
    <>
      {image && (
        <div className="card__image-wrap">
          <img src={image} alt={imageAlt || ''} className="card__image" loading="lazy" />
        </div>
      )}
      <div className="card__body">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {children}
        {link && linkText && (
          <span className="card__link-text">
            {linkText}
            <span className="card__arrow" aria-hidden> →</span>
          </span>
        )}
      </div>
    </>
  );

  const base = 'card';
  const classes = [base, className].filter(Boolean).join(' ');

  if (link && (link.startsWith('http') || link.startsWith('#'))) {
    return (
      <a href={link} className={classes}>
        {content}
      </a>
    );
  }

  if (link) {
    return (
      <Link to={link} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
