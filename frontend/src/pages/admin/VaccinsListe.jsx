import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const VaccinsListe = () => {
  const vaccins = [
    { id: 1, nom: 'BCG', stock: 12450, seuil: 5000, statut: 'OK' },
    { id: 2, nom: 'Pentavalent', stock: 8450, seuil: 8000, statut: 'Alerte' },
    { id: 3, nom: 'ROR', stock: 22000, seuil: 10000, statut: 'OK' },
  ];

  const badge = (statut) => statut === 'OK'
    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
    : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Vaccins</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Gestion des vaccins et des stocks</p>
            </div>
            <Link to="/admin/vaccins/ajouter" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">Ajouter un vaccin</Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Seuil</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Statut</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {vaccins.map((v) => (
                    <tr key={v.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{v.nom}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{v.stock.toLocaleString('fr-FR')}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{v.seuil.toLocaleString('fr-FR')}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${badge(v.statut)}`}>{v.statut}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VaccinsListe;
