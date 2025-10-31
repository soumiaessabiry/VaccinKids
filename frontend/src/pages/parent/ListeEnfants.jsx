import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ListeEnfants = () => {
  const enfants = [
    {
      id: 1,
      nom: 'Amine Benali',
      prenom: 'Amine',
      dateNaissance: '2021-03-15',
      age: 3,
      sexe: 'M',
      statutVaccination: 'À jour',
      dernierVaccin: 'Pentavalent',
      dateDernierVaccin: '2024-01-10',
      prochaineVaccination: 'ROR',
      dateProchaine: '2024-04-15'
    },
    {
      id: 2,
      nom: 'Yasmine Benali',
      prenom: 'Yasmine',
      dateNaissance: '2023-01-20',
      age: 1,
      sexe: 'F',
      statutVaccination: 'En retard',
      dernierVaccin: 'BCG',
      dateDernierVaccin: '2023-02-01',
      prochaineVaccination: 'BCG',
      dateProchaine: '2024-02-20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="parent" />
      <Navbar userName="Mohamed Benali" role="parent" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Enfants</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Liste de tous vos enfants enregistrés</p>
          </div>

          {/* Enfants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enfants.map((enfant) => (
              <div
                key={enfant.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  {/* Avatar et nom */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {enfant.nom.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <Link to={`/parent/enfants/${enfant.id}`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          {enfant.nom}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{enfant.age} ans • {enfant.sexe === 'M' ? 'Garçon' : 'Fille'}</p>
                    </div>
                  </div>

                  {/* Statut */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      enfant.statutVaccination === 'À jour'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                    }`}>
                      {enfant.statutVaccination}
                    </span>
                  </div>

                  {/* Informations vaccinations */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Dernier vaccin:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{enfant.dernierVaccin}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Date:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {new Date(enfant.dateDernierVaccin).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Prochaine vaccination:</span>
                        <span className="font-medium text-purple-600 dark:text-purple-400">{enfant.prochaineVaccination}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-gray-500 dark:text-gray-400">Date prévue:</span>
                        <span className="text-gray-900 dark:text-white">
                          {new Date(enfant.dateProchaine).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Link
                      to={`/parent/enfants/${enfant.id}`}
                      className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center text-sm font-medium"
                    >
                      Voir profil
                    </Link>
                    <Link
                      to={`/parent/enfants/${enfant.id}/carnet`}
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-center text-sm font-medium"
                    >
                      Carnet
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si aucun enfant */}
          {enfants.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Aucun enfant enregistré</h3>
              <p className="text-gray-600 dark:text-gray-300">Contactez votre centre de santé pour enregistrer vos enfants.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ListeEnfants;


