import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ParametresParent = () => {
  const { theme, toggleTheme, language, changeLanguage } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    rappelsRDV: true,
    nouveautes: false
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="parent" />
      <Navbar userName="Mohamed Benali" role="parent" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Paramètres</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Gérez vos préférences et paramètres de compte</p>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Notifications par email</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Recevoir les notifications importantes par email</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('email')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    notifications.email ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      notifications.email ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Notifications par SMS</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Recevoir les rappels importants par SMS</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('sms')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    notifications.sms ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      notifications.sms ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Notifications push</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Recevoir des notifications dans l'application</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('push')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    notifications.push ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      notifications.push ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Rappels de rendez-vous</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Recevoir des rappels avant les rendez-vous</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('rappelsRDV')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    notifications.rappelsRDV ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      notifications.rappelsRDV ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Nouvelles fonctionnalités</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Être informé des nouvelles fonctionnalités</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('nouveautes')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    notifications.nouveautes ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      notifications.nouveautes ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Langue et Thème */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Préférences</h3>
            <div className="space-y-6">
              {/* Langue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Langue
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => changeLanguage('fr')}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      language === 'fr'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      language === 'ar'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>

              {/* Thème */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Thème
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleTheme}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      theme === 'light'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    ☀️ Mode clair
                  </button>
                  <button
                    onClick={toggleTheme}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      theme === 'dark'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🌙 Mode sombre
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Compte */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Compte</h3>
            <div className="space-y-4">
              <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <p className="font-medium text-gray-900 dark:text-white">Changer le mot de passe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mettez à jour votre mot de passe régulièrement</p>
              </button>
              <button className="w-full text-left px-4 py-3 bg-red-50 dark:bg-red-900 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 transition-colors">
                <p className="font-medium text-red-700 dark:text-red-300">Supprimer le compte</p>
                <p className="text-sm text-red-600 dark:text-red-400">Cette action est irréversible</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParametresParent;

