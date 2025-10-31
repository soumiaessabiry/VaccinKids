import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const LogsAudit = () => {
  const logs = [
    { id: 1, date: '2024-02-10 10:12', user: 'Admin', action: 'Connexion', level: 'info' },
    { id: 2, date: '2024-02-10 10:30', user: 'Dr. Sarah', action: 'Ajout vaccination', level: 'success' },
    { id: 3, date: '2024-02-10 11:00', user: 'System', action: 'Seuil stock Pentavalent atteint', level: 'warning' },
  ];

  const badge = (level) => ({
    info: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    warning: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    error: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  }[level] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Logs & Audit</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Événements système et actions des utilisateurs</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Utilisateur</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Niveau</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {logs.map((l) => (
                    <tr key={l.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{l.date}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{l.user}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{l.action}</td>
                      <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${badge(l.level)}`}>{l.level}</span></td>
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

export default LogsAudit;
