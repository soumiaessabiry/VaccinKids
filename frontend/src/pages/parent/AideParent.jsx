import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const AideParent = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="parent" />
      <Navbar userName="Mohamed Benali" role="parent" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Aide & support</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">FAQ, support et contact</p>
          </div>

          {/* FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Questions fréquentes</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Comment ajouter un enfant ?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">L'ajout d'un enfant se fait au centre de santé par un infirmier. Vos enfants apparaîtront automatiquement dans votre espace.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Comment recevoir les rappels de rendez-vous ?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Activez les rappels depuis Paramètres &gt; Notifications. Vous pouvez choisir Email, SMS et Push.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Comment télécharger le carnet de vaccination ?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Allez dans Documents, puis cliquez sur Télécharger à côté du carnet souhaité.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li>Support Email: support@vaccinkids.com</li>
                <li>Téléphone: +212 5XX XX XX XX</li>
                <li>Horaires: Lun - Ven, 9h - 17h</li>
              </ul>
              <div className="mt-6">
                <a href="mailto:support@vaccinkids.com" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">Écrire au support</a>
              </div>
            </div>
          </div>

          {/* Guides */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Guides rapides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Comprendre le calendrier vaccinal</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Les étapes clés et les âges importants</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Préparer un rendez-vous</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Documents à apporter et recommandations</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Carnet digital</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Comment lire et exporter le carnet</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AideParent;
