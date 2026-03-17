import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';

export function ContactBlock() {
  return (
    <section className="contact-block section" aria-label="Contacto">
      <div className="container">
        <div className="contact-block__inner">
          <h2 className="contact-block__title">Atención al vecino</h2>
          <p className="contact-block__desc">
            Estamos para escucharte. Consultas, trámites y sugerencias.
          </p>
          <div className="contact-block__data">
            <p>
              <strong>{SITE.address.street}</strong>, {SITE.address.city}, {SITE.address.province}
            </p>
            <p>
              <a href={`tel:${SITE.contact.phoneRaw}`}>{SITE.contact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </p>
          </div>
          <Link to="/contacto" className="btn btn--primary btn--lg">
            Ir a Contacto
          </Link>
        </div>
      </div>
    </section>
  );
}
