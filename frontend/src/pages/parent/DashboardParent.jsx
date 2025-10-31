import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const DashboardParent = () => {
  // Données de démonstration
  const stats = {
    totalEnfants: 2,
    vaccinationsProchaines: 3,
    rendezVousAujourdhui: 1,
    documentsDisponibles: 5
  };

  const mesEnfants = [
    {
      id: 1,
      nom: 'Amine Benali',
      age: 3,
      photo: null,
      prochaineVaccination: 'Pentavalent',
      dateProchaine: '2024-02-15',
      statutVaccination: 'À jour'
    },
    {
      id: 2,
      nom: 'Yasmine Benali',
      age: 1,
      photo: null,
      prochaineVaccination: 'BCG',
      dateProchaine: '2024-02-20',
      statutVaccination: 'En retard'
    }
  ];

  const rendezVousProchains = [
    {
      id: 1,
      enfant: 'Amine Benali',
      date: '2024-02-15',
      heure: '10:00',
      type: 'Pentavalent',
      statut: 'Confirmé'
    },
    {
      id: 2,
      enfant: 'Yasmine Benali',
      date: '2024-02-20',
      heure: '14:30',
      type: 'BCG',
      statut: 'Confirmé'
    }
  ];

  const notifications = [
    {
      id: 1,
      message: 'Rappel: Rendez-vous pour Amine le 15/02/2024',
      type: 'info',
      date: '2024-02-10'
    },
    {
      id: 2,
      message: 'Yasmine est en retard pour sa vaccination BCG',
      type: 'warning',
      date: '2024-02-08'
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tableau de bord</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Vue d'ensemble de vos enfants et rendez-vous</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stats.totalEnfants}</h3>
              <p className="text-blue-100">Enfants enregistrés</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stats.vaccinationsProchaines}</h3>
              <p className="text-green-100">Vaccinations prochaines</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stats.rendezVousAujourdhui}</h3>
              <p className="text-purple-100">RDV aujourd'hui</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stats.documentsDisponibles}</h3>
              <p className="text-orange-100">Documents disponibles</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Mes Enfants */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Mes Enfants</h2>
                <Link to="/parent/enfants" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium">
                  Voir tout →
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mesEnfants.map((enfant) => (
                    <Link
                      key={enfant.id}
                      to={`/parent/enfants/${enfant.id}`}
                      className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-semibold text-lg">
                          {enfant.nom.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{enfant.nom}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{enfant.age} ans • {enfant.prochaineVaccination}</p>
                          <p className="text-xs mt-1">
                            <span className={`inline-block px-2 py-1 rounded-full ${
                              enfant.statutVaccination === 'À jour' 
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                                : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                            }`}>
                              {enfant.statutVaccination}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Rendez-vous à venir */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Rendez-vous à venir</h2>
                <Link to="/parent/rendez-vous" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium">
                  Voir tout →
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {rendezVousProchains.map((rdv) => (
                    <div key={rdv.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{rdv.enfant}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-medium">
                          {rdv.statut}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{rdv.type}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(rdv.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {rdv.heure}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Notifications récentes */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Notifications récentes</h2>
              <Link to="/parent/notifications" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium">
                Voir tout →
              </Link>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`p-4 rounded-xl border-l-4 ${
                    notif.type === 'warning' 
                      ? 'bg-orange-50 dark:bg-orange-900 border-orange-500 dark:border-orange-600' 
                      : 'bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-600'
                  }`}>
                    <p className="text-sm text-gray-900 dark:text-white">{notif.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(notif.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardParent;


