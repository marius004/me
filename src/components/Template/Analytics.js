import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env;

const isProduction = NODE_ENV === 'production';
const hasValidId = typeof REACT_APP_GA_TRACKING_ID === 'string' && REACT_APP_GA_TRACKING_ID.length > 5;

if (isProduction && hasValidId) {
  ReactGA.initialize(REACT_APP_GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isProduction && hasValidId) {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
