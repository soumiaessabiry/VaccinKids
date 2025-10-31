import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const CentreDetails = () => {
  const { id } = useParams();

  const centre = {
    id,
    nom: 'Centre de Santé Al Massira',
    region: 'Casa-Settat',
    ville: 'Casablanca',
    adresse: '123 Rue Mohammed V',
    telephone: '+212 5XX XX XX XX',
    email: 'centre@health.gov.ma',
    statut: 'Actif',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{centre.nom}</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Détails du centre</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Région</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{centre.region}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ville</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{centre.ville}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Adresse</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{centre.adresse}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Téléphone</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{centre.telephone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{centre.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Statut</p>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-medium">{centre.statut}</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance</h2>
              <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300">Graphique</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CentreDetails;
