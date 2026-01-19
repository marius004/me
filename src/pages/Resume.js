import React, { useEffect } from 'react';

const Resume = () => {
    useEffect(() => {
        window.location.href = 'https://docs.google.com/document/d/1TMcHooyW2QqGxJeslZ8rZ5z3moOAxhywCnNfW209ogk/edit?tab=t.0';
    }, []);

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h2>Redirecting to Resume...</h2>
            <p>If you are not redirected automatically, <a href="https://docs.google.com/document/d/1TMcHooyW2QqGxJeslZ8rZ5z3moOAxhywCnNfW209ogk/edit?tab=t.0">click here</a>.</p>
        </div>
    );
};

export default Resume;
