// DarkThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <DarkThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};
