import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const UtilisateursListe = () => {
  const users = [
    { id: 1, nom: 'Dr. Sarah Alami', role: 'infirmier', centre: 'CS Al Massira', statut: 'Actif' },
    { id: 2, nom: 'Mohamed Benali', role: 'parent', centre: '-', statut: 'Actif' },
    { id: 3, nom: 'Admin National', role: 'admin', centre: 'MS', statut: 'Actif' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Utilisateurs</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Gestion des utilisateurs et rôles</p>
            </div>
            <Link to="/admin/utilisateurs/ajouter" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">Ajouter un utilisateur</Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rôle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Centre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Statut</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{u.nom}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300 capitalize">{u.role}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{u.centre}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">{u.statut}</span>
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

export default UtilisateursListe;
