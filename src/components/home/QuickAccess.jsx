import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../common/Icons';

export function QuickAccess({ items }) {
  return (
    <section className="quick-access section" aria-label="Accesos rápidos">
      <div className="container">
        <h2 className="section__heading">Servicios y accesos directos</h2>
        <div className="quick-access__grid">
          {items.map((item) => (
            <Link key={item.path} to={item.path} className="quick-access__card">
              <span className="quick-access__icon" aria-hidden>
                <Icon name={item.icon} />
              </span>
              <h3 className="quick-access__title">{item.label}</h3>
              {item.description && (
                <p className="quick-access__desc">{item.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
