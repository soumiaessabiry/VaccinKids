import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const DashboardInfirmier = () => {
  const navigate = useNavigate();
  
  // Données de démonstration
  const stats = {
    totalEnfants: 342,
    vaccinationsMois: 128,
    enfantsRetard: 18,
    rdvAujourdhui: 12
  };

  const enfantsRetard = [
    { nom: 'Ahmed Alami', age: '6 mois', retard: '5 jours', vaccin: 'BCG', tel: '0666666666' },
    { nom: 'Fatima Bensaid', age: '4 mois', retard: '10 jours', vaccin: 'DTCP', tel: '0712345678' },
    { nom: 'Hassan Touil', age: '8 mois', retard: '3 jours', vaccin: 'Hépatite B', tel: '0656789012' }
  ];

  const prochainsRDV = [
    { heure: '08:00', enfant: 'Amine Benali', vaccin: 'DTCP', dose: '3e dose', centre: 'Centre Sidi Bernoussi' },
    { heure: '09:30', enfant: 'Salma Idrissi', vaccin: 'BCG', dose: '1ere dose', centre: 'Centre Hay Riad' },
    { heure: '11:00', enfant: 'Youssef Alaoui', vaccin: 'ROR', dose: '1ere dose', centre: 'Centre Al Fida' }
  ];

  const activiteRecent = [
    { action: 'Vaccination effectuée', enfant: 'Mohamed Benslimane', vaccin: 'DTCP', date: 'Il y a 30 min' },
    { action: 'Nouvel enfant inscrit', enfant: 'Aya El Amrani', date: 'Il y a 2h' },
    { action: 'Vaccination effectuée', enfant: 'Zineb Bennani', vaccin: 'BCG', date: 'Il y a 3h' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Vue d'ensemble de votre activité</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👶</span>
                </div>
                <span className="text-sm opacity-90">Total</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stats.totalEnfants}</h3>
              <p className="text-sm opacity-90">Enfants suivis</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💉</span>
                </div>
                <span className="text-sm opacity-90">Ce mois</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stats.vaccinationsMois}</h3>
              <p className="text-sm opacity-90">Vaccinations</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <span className="text-sm opacity-90">Attention</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stats.enfantsRetard}</h3>
              <p className="text-sm opacity-90">En retard</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
                <span className="text-sm opacity-90">Aujourd'hui</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stats.rdvAujourdhui}</h3>
              <p className="text-sm opacity-90">Rendez-vous</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Enfants en Retard */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">Enfants en Retard</h2>
                      <p className="text-sm text-gray-500">Action requise</p>
                    </div>
                  </div>
                  <Link to="/infirmier/enfants-retard" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium inline-block">
                    Voir tout
                  </Link>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {enfantsRetard.map((enfant, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-semibold">
                            {enfant.nom.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{enfant.nom}</h3>
                            <p className="text-sm text-gray-600">{enfant.age} • Retard: {enfant.retard}</p>
                            <p className="text-xs text-gray-500">{enfant.vaccin}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm">
                          Appeler
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Prochains Rendez-vous */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Rendez-vous</h2>
                    <p className="text-sm text-gray-500">Prochains</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {prochainsRDV.map((rdv, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold">{rdv.heure}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{rdv.enfant}</h3>
                          <p className="text-sm text-gray-600">{rdv.vaccin}</p>
                          <p className="text-xs text-gray-500">{rdv.dose}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activité Récente */}
          <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Activité Récente</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {activiteRecent.map((activite, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">✓</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activite.action}</p>
                      <p className="text-xs text-gray-600">{activite.enfant} • {activite.vaccin} • {activite.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button onClick={() => navigate('/infirmier/enfants/ajouter')} className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl text-white hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">➕</div>
                <h3 className="font-semibold">Ajouter Enfant</h3>
              </button>
              <button onClick={() => navigate('/infirmier/scan-qr')} className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-semibold">Scanner QR</h3>
              </button>
              <button onClick={() => navigate('/infirmier/vaccinations/nouvelle')} className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">💉</div>
                <h3 className="font-semibold">Nouvelle Vaccination</h3>
              </button>
              <button onClick={() => navigate('/infirmier/rendez-vous/nouveau')} className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">📋</div>
                <h3 className="font-semibold">Créer RDV</h3>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardInfirmier;

