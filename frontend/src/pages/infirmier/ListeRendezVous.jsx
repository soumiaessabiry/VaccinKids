import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ListeRendezVous = () => {
  const [viewMode, setViewMode] = useState('avenir'); // avenir, passes, tous

  const rendezVous = [
    {
      id: 1,
      date: '2024-01-15',
      heure: '08:00',
      enfant: 'Ahmed Alami',
      enfantId: 1,
      vaccin: 'DTCP',
      dose: '3e dose',
      statut: 'confirmé'
    },
    {
      id: 2,
      date: '2024-01-15',
      heure: '10:00',
      enfant: 'Fatima Bensaid',
      enfantId: 2,
      vaccin: 'BCG',
      dose: '1ere dose',
      statut: 'planifié'
    },
    {
      id: 3,
      date: '2024-01-16',
      heure: '09:00',
      enfant: 'Hassan Touil',
      enfantId: 3,
      vaccin: 'Hépatite B',
      dose: '2e dose',
      statut: 'confirmé'
    },
    {
      id: 4,
      date: '2024-01-10',
      heure: '14:00',
      enfant: 'Salma Idrissi',
      enfantId: 4,
      vaccin: 'ROR',
      dose: '1ere dose',
      statut: 'effectué'
    }
  ];

  const filteredRDV = rendezVous.filter(rdv => {
    if (viewMode === 'avenir') return new Date(rdv.date) >= new Date();
    if (viewMode === 'passes') return new Date(rdv.date) < new Date();
    return true;
  });

  const getStatutBadge = (statut) => {
    const badges = {
      'planifié': 'bg-yellow-100 text-yellow-800',
      'confirmé': 'bg-blue-100 text-blue-800',
      'effectué': 'bg-green-100 text-green-800',
      'annulé': 'bg-red-100 text-red-800'
    };
    return badges[statut] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Liste des Rendez-vous</h1>
              <p className="text-gray-600 mt-1">{filteredRDV.length} rendez-vous</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                to="/infirmier/calendrier"
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
              >
                Voir Calendrier
              </Link>
              <Link
                to="/infirmier/rendez-vous/nouveau"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Nouveau RDV</span>
              </Link>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 mb-6 inline-flex">
            {[
              { value: 'avenir', label: 'À venir' },
              { value: 'passes', label: 'Passés' },
              { value: 'tous', label: 'Tous' }
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setViewMode(tab.value)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  viewMode === tab.value
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* RDV List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredRDV.map((rdv) => (
                <div key={rdv.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex flex-col items-center justify-center text-white font-bold">
                        <span className="text-xs">15</span>
                        <span className="text-lg">JAN</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{rdv.heure}</h3>
                        <p className="text-gray-600">{rdv.date}</p>
                      </div>
                      <div className="border-l border-gray-200 pl-6">
                        <Link
                          to={`/infirmier/enfants/${rdv.enfantId}`}
                          className="text-lg font-semibold text-purple-600 hover:text-purple-700"
                        >
                          {rdv.enfant}
                        </Link>
                        <p className="text-sm text-gray-600">{rdv.vaccin} - {rdv.dose}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${getStatutBadge(rdv.statut)}`}>
                        {rdv.statut}
                      </span>
                      <Link to={`/infirmier/rendez-vous/${rdv.id}`} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredRDV.length === 0 && (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun rendez-vous</h3>
                <p className="mt-1 text-sm text-gray-500">Créez un nouveau rendez-vous pour commencer</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListeRendezVous;

