import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__content container">
        <span className="not-found__code" aria-hidden>404</span>
        <h1 className="not-found__title">Página no encontrada</h1>
        <p className="not-found__text">
          La página que buscás no existe o fue movida. Podés volver al inicio o usar el menú para navegar.
        </p>
        <Link to="/" className="btn btn--primary btn--lg">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
