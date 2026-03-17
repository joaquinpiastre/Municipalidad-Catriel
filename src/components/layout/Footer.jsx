import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';
import { MAIN_MENU_ITEMS } from '../../config/navigation';

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="footer__link">
      {children}
    </Link>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="footer__col">
      <h3 className="footer__col-title">{title}</h3>
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <FooterColumn title="Municipalidad de Catriel">
          <p className="footer__about">
            {SITE.address.street}, {SITE.address.city}<br />
            {SITE.address.province}, {SITE.country}
          </p>
          <p className="footer__contact">
            <a href={`tel:${SITE.contact.phoneRaw}`}>{SITE.contact.phone}</a>
            <br />
            <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          </p>
          <p className="footer__hours">{SITE.contact.officeHours}</p>
        </FooterColumn>

        <FooterColumn title="Navegación">
          <nav aria-label="Enlaces del pie">
            <ul className="footer__list">
              <li><FooterLink to="/">Inicio</FooterLink></li>
              <li><FooterLink to="/municipalidad">Municipalidad</FooterLink></li>
              <li><FooterLink to="/gestion">Gestión</FooterLink></li>
              <li><FooterLink to="/tramites-servicios">Trámites y Servicios</FooterLink></li>
              <li><FooterLink to="/noticias">Noticias</FooterLink></li>
              <li><FooterLink to="/boletin-transparencia">Boletín y Transparencia</FooterLink></li>
              <li><FooterLink to="/turismo">Turismo</FooterLink></li>
              <li><FooterLink to="/desarrollo-local">Desarrollo Local</FooterLink></li>
              <li><FooterLink to="/contacto">Contacto</FooterLink></li>
            </ul>
          </nav>
        </FooterColumn>

        <FooterColumn title="Atención al vecino">
          <p className="footer__cta">
            <Link to="/contacto" className="footer__cta-link">Formulario de contacto</Link>
          </p>
          <p className="footer__cta">
            <Link to="/tramites-servicios" className="footer__cta-link">Trámites en línea</Link>
          </p>
        </FooterColumn>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} {SITE.name}. {SITE.province}, {SITE.country}.
          </p>
          <p className="footer__legal">
            Sitio oficial. [Placeholder: enlace a aviso legal o datos legales si corresponde.]
          </p>
        </div>
      </div>
    </footer>
  );
}
