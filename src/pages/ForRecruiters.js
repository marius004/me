import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const RESUME_URL = 'https://docs.google.com/document/d/1TMcHooyW2QqGxJeslZ8rZ5z3moOAxhywCnNfW209ogk';

const ForRecruiters = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        import('../data/recruiters.md')
            .then((res) => {
                fetch(res.default)
                    .then((r) => r.text())
                    .then(setMarkdown);
            });
    });

    return (
        <Main
            title="For Recruiters"
            description="Information for recruiters interested in working with Marius Scarlat"
        >
            <article className="post markdown" id="recruiters">
                <header>
                    <div className="title">
                        <h2><Link to="/recruiters">For Recruiters</Link></h2>
                    </div>
                    <div className="meta">
                        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="button accent-button">
                            Resume
                        </a>
                    </div>
                </header>
                <Markdown>
                    {markdown}
                </Markdown>
            </article>
        </Main>
    );
};

export default ForRecruiters;
