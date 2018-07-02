import React from 'react';

export const themes = {
    light: {
        background: '#000',
        color: '#fff',
    },
    dark: {
        background: '#fff',
        color: '#000',
    },
};

export const ThemeContext = React.createContext(
    themes.dark, // default value
);
