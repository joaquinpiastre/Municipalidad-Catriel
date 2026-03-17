import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';

export function TopBar() {
  return (
    <div className="topbar" role="complementary">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <a href={`tel:${SITE.contact.phoneRaw}`} className="topbar__link">
            {SITE.contact.phone}
          </a>
          <a href={`mailto:${SITE.contact.email}`} className="topbar__link">
            {SITE.contact.email}
          </a>
        </div>
        <div className="topbar__right">
          <Link to="/tramites-servicios" className="topbar__link">Trámites</Link>
          <Link to="/contacto" className="topbar__link">Contacto</Link>
        </div>
      </div>
    </div>
  );
}
