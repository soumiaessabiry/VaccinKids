import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme, language, changeLanguage } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {/* Langue */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
        <button
          onClick={() => changeLanguage('fr')}
          className={`px-3 py-1 rounded-lg transition-all text-sm font-medium ${
            language === 'fr'
              ? 'bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage('ar')}
          className={`px-3 py-1 rounded-lg transition-all text-sm font-medium ${
            language === 'ar'
              ? 'bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-400 shadow-sm'
              : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          AR
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        title={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
      >
        {theme === 'light' ? (
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

