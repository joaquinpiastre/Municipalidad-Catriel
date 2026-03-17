import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_MENU_ITEMS } from '../../config/navigation';

/**
 * Solo un submenú abierto a la vez. Al abrir otro, se cierra el anterior.
 */
function NavItem({ item, openDropdownKey, setOpenDropdownKey }) {
  const location = useLocation();
  const isActive = location.pathname === item.path || (item.children && item.children.some(c => c.path === location.pathname));
  const hasChildren = item.children && item.children.length > 0;
  const itemKey = item.path || item.label;
  const isOpen = hasChildren && openDropdownKey === itemKey;

  const handleToggle = () => {
    setOpenDropdownKey(isOpen ? null : itemKey);
  };

  const handleClose = () => {
    setOpenDropdownKey(null);
  };

  if (item.path === '/') {
    return (
      <li className="nav__item">
        <Link to="/" className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`} onClick={handleClose}>
          Inicio
        </Link>
      </li>
    );
  }

  if (!hasChildren) {
    return (
      <li className="nav__item">
        <Link to={item.path} className={`nav__link ${isActive ? 'nav__link--active' : ''}`} onClick={handleClose}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className={`nav__item nav__item--dropdown ${isOpen ? 'nav__item--open' : ''}`}
      onMouseEnter={() => setOpenDropdownKey(itemKey)}
      onMouseLeave={() => setOpenDropdownKey(null)}
    >
      <button
        type="button"
        className={`nav__link nav__link--dropdown ${isActive ? 'nav__link--active' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {item.label}
        <span className="nav__chevron" aria-hidden>▼</span>
      </button>
      <ul className="nav__dropdown" role="menu">
        {item.children.map((child) => (
          <li key={child.path} role="none">
            <Link
              to={child.path}
              className={`nav__dropdown-link ${location.pathname === child.path ? 'nav__dropdown-link--active' : ''}`}
              role="menuitem"
              onClick={handleClose}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Navbar() {
  const [openDropdownKey, setOpenDropdownKey] = useState(null);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <ul className="nav">
        {MAIN_MENU_ITEMS.map((item) => (
          <NavItem
            key={item.path || item.label}
            item={item}
            openDropdownKey={openDropdownKey}
            setOpenDropdownKey={setOpenDropdownKey}
          />
        ))}
      </ul>
    </nav>
  );
}
