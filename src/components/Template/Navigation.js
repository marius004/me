import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>
              {l.label}
              {l.badge && <span className="nav-badge">{l.badge}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="header-toggle">
      <ThemeToggle />
    </div>
    <Hamburger />
  </header>
);

export default Navigation;
