import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../components/ThemeContext';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';
import ContactIcons from '../components/Contact/ContactIcons';

const Main = (props) => (
  <ThemeProvider>
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate="Marius / %s" defaultTitle="Marius Scarlat" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
        {!props.fullPage && <SideBar />}
        {!props.fullPage && (
          <div id="footer-mobile">
            <ContactIcons />
            <p className="copyright">&copy; {new Date().getFullYear()} Marius Scarlat</p>
          </div>
        )}
      </div>
    </HelmetProvider>
  </ThemeProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Marius Scarlat's personal website.",
};

export default Main;
