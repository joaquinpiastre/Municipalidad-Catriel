import React from 'react';

export function SectionTitle({ title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {title && <h2 className="section-title__heading">{title}</h2>}
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}
