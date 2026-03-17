import React from 'react';
import { SITE } from '../../config/site';

const MAP_PLACEHOLDER = `https://www.google.com/maps?q=San+Martín+59,+Catriel,+Río+Negro`;

export function MapBlock() {
  return (
    <section className="map-block section" aria-label="Ubicación">
      <div className="container">
        <h2 className="section__heading">Dónde estamos</h2>
        <div className="map-block__wrap">
          <div className="map-block__info">
            <p className="map-block__address">
              <strong>Municipalidad de Catriel</strong><br />
              {SITE.address.street}<br />
              {SITE.address.city}, {SITE.address.province}
            </p>
            <a
              href={MAP_PLACEHOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
            >
              Ver en mapa
            </a>
          </div>
          <div className="map-block__embed">
            <iframe
              title="Ubicación Municipalidad de Catriel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.218884763789!2d-67.795!3d-37.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUxJzAwLjAiUyA2N8KwNDcnNDIuMCJX!5e0!3m2!1ses!2sar!4v1!5m2!1ses!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
