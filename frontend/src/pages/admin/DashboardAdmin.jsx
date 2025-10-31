import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const DashboardAdmin = () => {
  const kpis = [
    { label: 'Centres actifs', value: 128, color: 'from-purple-500 to-purple-600' },
    { label: 'Vaccinations (30j)', value: 18452, color: 'from-blue-500 to-blue-600' },
    { label: 'Utilisateurs actifs', value: 7634, color: 'from-green-500 to-green-600' },
    { label: 'Alertes critiques', value: 12, color: 'from-red-500 to-red-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Vue stratégique</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Indicateurs clés nationaux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, idx) => (
              <div key={idx} className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br ${kpi.color}`}>
                <div className="text-3xl font-bold mb-1">{kpi.value.toLocaleString('fr-FR')}</div>
                <div className="text-white/80 text-sm">{kpi.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Taux de couverture par région</h2>
              <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300">Graphique</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stock national de vaccins</h2>
              <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300">Graphique</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;
