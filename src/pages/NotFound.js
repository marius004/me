import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const PageNotFound = () => (
  <Main title="404 Not Found">
    <article className="post" id="not-found">
      <header>
        <div className="title">
          <h2>Page Not Found</h2>
        </div>
      </header>
      <p>Return <Link to="/">home</Link>.</p>
    </article>
  </Main>
);

export default PageNotFound;
