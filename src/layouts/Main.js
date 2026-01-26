import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../components/ThemeContext';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';
import ContactIcons from '../components/Contact/ContactIcons';

const Main = ({
  children = null,
  fullPage = false,
  title = null,
  description = "Marius Scarlat's personal website.",
}) => (
  <ThemeProvider>
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate="Marius / %s" defaultTitle="Marius Scarlat" defer={false}>
        {title && <title>{title}</title>}
        <meta name="description" content={description} />
        <meta property="og:title" content={title ? `Marius / ${title}` : 'Marius Scarlat'} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title ? `Marius / ${title}` : 'Marius Scarlat'} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Marius Scarlat',
            url: 'https://mariusscarlat.com',
            sameAs: [
              'https://github.com/marius004',
              'https://www.linkedin.com/in/marius-scarlat-194464356/',
            ],
            jobTitle: 'Software Engineer',
          })}
        </script>
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {children}
        </div>
        {!fullPage && <SideBar />}
        {!fullPage && (
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

export default Main;
