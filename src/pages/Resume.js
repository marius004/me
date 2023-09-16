import React from 'react';
import Main from '../layouts/Main';

const RESUME_URL = 'https://docs.google.com/document/d/1TMcHooyW2QqGxJeslZ8rZ5z3moOAxhywCnNfW209ogk/view?rm=minimal';

const Resume = () => (
  <Main
    title="Resume"
    description="Scarlat Marius's Resume. Computer Science student at University of Bucharest"
  >
    <article className="post" id="resume">
      <div className="title">
        <a className="download-button" id="download-resume-button" href={RESUME_URL}>OPEN</a>
      </div>
      <iframe
        title="resume"
        src={RESUME_URL}
      />
    </article>
  </Main>
);

export default Resume;
