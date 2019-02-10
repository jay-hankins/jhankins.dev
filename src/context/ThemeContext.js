import React from 'react';

const defaultState = {
  darkMode: false,
  toggleDarkMode: () => {},
};

const ThemeContext = React.createContext(defaultState);

export default ThemeContext;
