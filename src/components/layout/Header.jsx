import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { SITE } from '../../config/site';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(ev) {
      if (navRef.current && !navRef.current.contains(ev.target) && !ev.target.closest('.header__menu-btn')) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header" ref={navRef}>
      <TopBar />
      <div className="header__main">
        <div className="container header__inner">
          <Link to="/" className="header__logo" aria-label={`${SITE.name} - Inicio`}>
            <span className="header__logo-text">{SITE.name}</span>
            <span className="header__logo-tagline">{SITE.tagline}</span>
          </Link>
          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="header__menu-icon" aria-hidden>
              {menuOpen ? '×' : '≡'}
            </span>
          </button>
          <div id="main-nav" className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className={`header__bar ${menuOpen ? 'header__bar--open' : ''}`}>
        <div className="container">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

