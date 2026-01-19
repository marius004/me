import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';
import ThemeContext from '../ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode">
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
    );
};

export default ThemeToggle;
