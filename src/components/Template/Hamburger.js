import React, {
  Suspense, lazy, useState, useContext,
} from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';

import routes from '../../data/routes';
import ThemeContext from '../ThemeContext';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                {l.index ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link
                      to={l.path}
                      onClick={() => setOpen(!open)}
                      style={{
                        border: 0, flexGrow: 0, display: 'flex', alignItems: 'center',
                      }}
                    >
                      <h3 className="index-li" style={{ margin: 0 }}>{l.label}</h3>
                    </Link>
                    <button
                      type="button"
                      onClick={toggleTheme}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none',
                        cursor: 'pointer',
                        marginLeft: '15px',
                        padding: 0,
                        height: 'auto',
                        width: 'auto',
                        lineHeight: '1',
                        fontSize: '1em',
                        color: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      aria-label="Toggle Dark Mode"
                    >
                      <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                    </button>
                  </div>
                ) : (
                  <Link to={l.path} onClick={() => setOpen(!open)}>
                    <h3>
                      {l.label}
                      {l.badge && <span className="nav-badge mobile">{l.badge}</span>}
                    </h3>
                  </Link>
                )}
              </li>
            ))}

          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
