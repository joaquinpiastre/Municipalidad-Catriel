import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop } from '../common';

export function MainLayout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
