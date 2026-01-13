import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const RESUME_URL = 'https://docs.google.com/document/d/1TMcHooyW2QqGxJeslZ8rZ5z3moOAxhywCnNfW209ogk/preview';

const Resume = () => (
  <Main
    title="Resume"
    description="Marius Scarlat's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Resume</Link></h2>
        </div>
      </header>
      <div className="resume-container">
        <div className="resume-actions">
          <a className="download-button" id="download-resume-button" href={RESUME_URL} target="_blank" rel="noreferrer">
            OPEN IN GOOGLE DOCS
          </a>
        </div>
        <div className="iframe-wrapper">
          <iframe
            title="resume"
            src={RESUME_URL}
            frameBorder="0"
          />
        </div>
      </div>
    </article>
  </Main>
);

export default Resume;
