import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Scarlat Marius</h2>
        <p><a href="mailto:scarlatmariusstefan2018@gmail.com">scarlatmariusstefan2018@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I&apos;m enthusiastic about software architecture, distributed systems,
        data structures, and algorithms. Beyond coding, I enjoy traveling,
        exploring new places, listening to music, working out, and trying
        out new things.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Scarlat Marius <Link to="/">marius004.github.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
