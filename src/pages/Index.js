import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Marius Scarlat's personal website. University of Bucharest graduate."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">
              Software Engineer <strong>@</strong> Google Warsaw
            </Link>
          </h2>
        </div>
      </header>
      <p>
        Architecting the next-generation data centers that run the world.
      </p>
    </article>
  </Main>
);

export default Index;
