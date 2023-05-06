import React from 'react';
import Main from '../layouts/Main';

const RESUME_URL = 'https://github.com/marius004/me/blob/master/public/resume.pdf?raw=true';

const Resume = () => (
  <Main
    title="Resume"
    description="Scarlat Marius's Resume. Computer Science student at University of Bucharest"
  >
    <article className="post" id="resume">
      <div className="title">
        <a className="download-button" id="download-resume-button" href={RESUME_URL} download>Download</a>
      </div>
      <iframe
        title="resume"
        src={`https://docs.google.com/gview?url=${RESUME_URL}&embedded=true`}
      />
    </article>
  </Main>
);

export default Resume;
