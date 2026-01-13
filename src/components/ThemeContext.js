import React, {
    createContext, useState, useEffect, useLayoutEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    // Use system preference as default, or localStorage if set
    const [theme, setTheme] = useState(
        window.localStorage.getItem('theme')
        || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    );

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useLayoutEffect(() => {
        window.localStorage.setItem('theme', theme);
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // Listen for system changes if no override
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!window.localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContext;
