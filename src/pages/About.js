import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';

const RESUME_URL = 'https://docs.google.com/document/d/1TMcHooyW2QqGxJeslZ8rZ5z3moOAxhywCnNfW209ogk';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="About"
      description="Learn about Marius Scarlat"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">About Me</Link></h2>
          </div>
          <div className="meta">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="button accent-button">
              Resume
            </a>
          </div>
        </header>
        <Personal />
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default About;
