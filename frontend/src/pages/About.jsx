import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-end mb-4"><ThemeToggle /></div>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">À propos de VaccinKids</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">VaccinKids aide les parents et les centres de santé à suivre les vaccinations des enfants, avec rappels, carnets digitaux et statistiques.</p>
          <p className="text-gray-600 dark:text-gray-300">Notre mission: améliorer la couverture vaccinale nationale par la technologie.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
