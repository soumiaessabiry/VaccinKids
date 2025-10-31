import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // light ou dark
  const [language, setLanguage] = useState('fr'); // fr ou ar

  useEffect(() => {
    // Charger le thème depuis localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'fr';
    setTheme(savedTheme);
    setLanguage(savedLang);
    
    // Appliquer le thème au body
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }, [theme]);

  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  const value = useMemo(() => ({
    theme,
    language,
    toggleTheme,
    changeLanguage,
    isDark: theme === 'dark'
  }), [theme, language, toggleTheme, changeLanguage]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;

