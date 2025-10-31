import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const StatistiquesAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Statistiques globales</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Analyses par régions, tranches d'âge et périodes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-80 flex items-center justify-center text-gray-500 dark:text-gray-300">Graphique 1</div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-80 flex items-center justify-center text-gray-500 dark:text-gray-300">Graphique 2</div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-80 flex items-center justify-center text-gray-500 dark:text-gray-300">Graphique 3</div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-80 flex items-center justify-center text-gray-500 dark:text-gray-300">Carte</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatistiquesAdmin;
