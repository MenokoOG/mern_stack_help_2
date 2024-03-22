import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage 
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Store new theme in localStorage
    document.body.className = newTheme; // Apply the theme as a class to the body
  };

  useEffect(() => {
    document.body.className = theme; // Apply initial theme class
    localStorage.setItem('theme', theme); // Store initial theme in localStorage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
