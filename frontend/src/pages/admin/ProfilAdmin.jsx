import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ProfilAdmin = () => {
  const admin = { nom: 'Admin National', email: 'admin@health.gov.ma', role: 'admin' };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="admin" />
      <Navbar userName="Admin" role="admin" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mon profil</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Informations du compte administrateur</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">A</div>
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{admin.nom}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{admin.email}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">Rôle: {admin.role}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilAdmin;
