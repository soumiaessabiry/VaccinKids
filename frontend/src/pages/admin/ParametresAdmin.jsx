import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ParametresAdmin = () => {
  const [config, setConfig] = useState({ maintenance: false, seuilAlerteGlobal: 5000 });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Paramètres système</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Configuration globale de la plateforme</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Mode maintenance</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Désactive l'accès public pendant la maintenance</p>
              </div>
              <button onClick={() => setConfig(s => ({ ...s, maintenance: !s.maintenance }))} className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${config.maintenance ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'}`}>
                <span className={`inline-block h-5 w-5 transform bg-white rounded-full transition ${config.maintenance ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Seuil d'alerte global (doses)</label>
              <input type="number" min="0" value={config.seuilAlerteGlobal} onChange={(e) => setConfig(s => ({ ...s, seuilAlerteGlobal: Number(e.target.value) }))} className="w-60 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParametresAdmin;
