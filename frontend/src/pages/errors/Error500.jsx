import React from 'react';
import { Link } from 'react-router-dom';

const Error500 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-red-600">500</div>
        <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">Erreur serveur</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Un problème est survenu. Réessayez plus tard.</p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Retour</Link>
      </div>
    </div>
  );
};

export default Error500;
