import React from 'react';
import { Icon } from '../common/Icons';

export function IndicatorsBlock({ items, title = 'Catriel en cifras' }) {
  return (
    <section className="indicators-block section" aria-label="Indicadores">
      <div className="container">
        <h2 className="section__heading section__heading--light">{title}</h2>
        <div className="indicators-block__grid">
          {items.map((item) => (
            <div key={item.label} className="indicators-block__item">
              <span className="indicators-block__icon" aria-hidden>
                <Icon name={item.icon} />
              </span>
              <span className="indicators-block__value">{item.value}</span>
              <span className="indicators-block__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
