import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const MesRendezVous = () => {
  const [filter, setFilter] = useState('tous'); // tous, prochains, passes

  const rendezVous = [
    {
      id: 1,
      enfant: 'Amine Benali',
      enfantId: 1,
      date: '2024-02-15',
      heure: '10:00',
      type: 'ROR',
      statut: 'Confirmé',
      centre: 'Centre de Santé Al Massira',
      notes: 'Apporter le carnet de vaccination'
    },
    {
      id: 2,
      enfant: 'Yasmine Benali',
      enfantId: 2,
      date: '2024-02-20',
      heure: '14:30',
      type: 'BCG',
      statut: 'Confirmé',
      centre: 'Centre de Santé Al Massira',
      notes: ''
    },
    {
      id: 3,
      enfant: 'Amine Benali',
      enfantId: 1,
      date: '2024-01-10',
      heure: '09:00',
      type: 'Pentavalent',
      statut: 'Terminé',
      centre: 'Centre de Santé Al Massira',
      notes: ''
    }
  ];

  const getFilteredRendezVous = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (filter) {
      case 'prochains':
        return rendezVous.filter(rdv => {
          const rdvDate = new Date(rdv.date);
          rdvDate.setHours(0, 0, 0, 0);
          return rdvDate >= today && rdv.statut !== 'Terminé';
        });
      case 'passes':
        return rendezVous.filter(rdv => {
          const rdvDate = new Date(rdv.date);
          rdvDate.setHours(0, 0, 0, 0);
          return rdvDate < today || rdv.statut === 'Terminé';
        });
      default:
        return rendezVous;
    }
  };

  const filteredRDV = getFilteredRendezVous();

  const getStatutBadge = (statut) => {
    const badges = {
      'Confirmé': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'En attente': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      'Annulé': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      'Terminé': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
    };
    return badges[statut] || badges['En attente'];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="parent" />
      <Navbar userName="Mohamed Benali" role="parent" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Rendez-vous</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Consultez et gérez vos rendez-vous de vaccination</p>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filtrer:</span>
              <button
                onClick={() => setFilter('tous')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'tous'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilter('prochains')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'prochains'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                À venir
              </button>
              <button
                onClick={() => setFilter('passes')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'passes'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Passés
              </button>
            </div>
          </div>

          {/* Rendez-vous List */}
          <div className="space-y-4">
            {filteredRDV.map((rdv) => (
              <div
                key={rdv.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <Link
                        to={`/parent/enfants/${rdv.enfantId}`}
                        className="text-xl font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                      >
                        {rdv.enfant}
                      </Link>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatutBadge(rdv.statut)}`}>
                        {rdv.statut}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Date</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {new Date(rdv.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Heure</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{rdv.heure}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Type de vaccination</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{rdv.type}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Centre de santé</p>
                      <p className="text-sm text-gray-900 dark:text-white">{rdv.centre}</p>
                    </div>
                    {rdv.notes && (
                      <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Notes</p>
                        <p className="text-sm text-gray-900 dark:text-white">{rdv.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredRDV.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Aucun rendez-vous</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {filter === 'prochains' ? 'Aucun rendez-vous à venir' : filter === 'passes' ? 'Aucun rendez-vous passé' : 'Aucun rendez-vous enregistré'}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MesRendezVous;

