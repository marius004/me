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
        <h2>Marius Scarlat</h2>
        <p style={{ marginBottom: '0.25em' }}><a href="mailto:scarlatmariusstefan2018@gmail.com">scarlatmariusstefan2018@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m <strong>Marius</strong> — Software Engineer at <strong>Google</strong> {' '}
        in <i>Warsaw</i>, bringing the vision of the datacenter as a single, massive computer
        one step closer to reality. Because
        <strong><i>&quot;Hope is not a strategy&quot;</i></strong>,
        I break things at scale and rebuild them stronger.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; {new Date().getFullYear()} Marius Scarlat</p>
    </section>
  </section>
);

export default SideBar;
