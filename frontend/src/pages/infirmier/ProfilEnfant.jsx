import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { calculateAge } from '../../models/enfantModel';

const ProfilEnfant = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('informations');

  // Données simulées
  const enfant = {
    id: id,
    nom: 'Alami',
    prenom: 'Ahmed',
    dateNaissance: '2023-01-15',
    sexe: 'garçon',
    lieuNaissance: 'Casablanca',
    poidsNaissance: '3.5 kg',
    tailleNaissance: '50 cm',
    groupeSanguin: 'A+',
    numeroDossier: 'VK-012345-ABC123',
    qrCode: 'VACCINKIDS:VK-012345-ABC123:1672345678',
    allergies: 'Aucune allergie connue',
    contreIndications: 'Aucune contre-indication',
    parentNom: 'Alami',
    parentPrenom: 'Ali',
    parentTelephone: '0666666666',
    parentEmail: 'ali.alami@email.com',
    statutVaccinal: 'en_cours',
    createdAt: '2023-02-10',
    centreSanteNom: 'Centre de Santé Sidi Bernoussi'
  };

  const age = calculateAge(enfant.dateNaissance);

  const vaccinations = [
    { id: 1, vaccin: 'BCG', date: '2023-02-15', dose: '1ere dose', lot: 'ABC123', infirmier: 'Dr. Sarah Alami', centre: 'Centre Sidi Bernoussi' },
    { id: 2, vaccin: 'DTCP', date: '2023-04-15', dose: '1ere dose', lot: 'DEF456', infirmier: 'Dr. Sarah Alami', centre: 'Centre Sidi Bernoussi' },
    { id: 3, vaccin: 'Hépatite B', date: '2023-05-15', dose: '1ere dose', lot: 'GHI789', infirmier: 'Dr. Sarah Alami', centre: 'Centre Sidi Bernoussi' }
  ];

  const prochainesVaccinations = [
    { id: 1, vaccin: 'DTCP', date: '2024-06-15', dose: '2e dose' },
    { id: 2, vaccin: 'Hépatite B', date: '2024-07-15', dose: '2e dose' }
  ];

  const rendezVous = [
    { id: 1, date: '2024-06-15', heure: '10:00', vaccin: 'DTCP', dose: '2e dose', statut: 'planifié' },
    { id: 2, date: '2024-07-15', heure: '14:00', vaccin: 'Hépatite B', dose: '2e dose', statut: 'planifié' }
  ];

  const tabs = [
    { id: 'informations', label: 'Informations', icon: '📋' },
    { id: 'carnet', label: 'Carnet Vaccinal', icon: '💉' },
    { id: 'rendez-vous', label: 'Rendez-vous', icon: '📅' },
    { id: 'historique', label: 'Historique', icon: '📜' }
  ];

  const getStatutBadge = (statut) => {
    const badges = {
      'non_vaccine': 'bg-gray-100 text-gray-800',
      'en_cours': 'bg-blue-100 text-blue-800',
      'complet': 'bg-green-100 text-green-800',
      'retard': 'bg-orange-100 text-orange-800'
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
          <div className="mb-6">
            <Link to="/infirmier/enfants" className="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour à la liste</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Profil Enfant</h1>
          </div>

          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-8 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-4xl font-bold text-purple-600 shadow-lg">
                    {enfant.prenom[0]}{enfant.nom[0]}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{enfant.prenom} {enfant.nom}</h2>
                    <div className="flex flex-wrap gap-4 text-sm opacity-90">
                      <span>📅 {age.display}</span>
                      <span>🌍 {enfant.lieuNaissance}</span>
                      <span>🎂 {enfant.dateNaissance}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex px-4 py-2 bg-white bg-opacity-20 rounded-xl mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wide">N° Dossier</span>
                  </div>
                  <p className="text-xl font-bold">{enfant.numeroDossier}</p>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Parents</p>
                <p className="font-semibold text-gray-900">{enfant.parentPrenom} {enfant.parentNom}</p>
                <p className="text-sm text-gray-600">{enfant.parentTelephone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Centre de Santé</p>
                <p className="font-semibold text-gray-900">{enfant.centreSanteNom}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Statut Vaccinal</p>
                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${getStatutBadge(enfant.statutVaccinal)}`}>
                  {enfant.statutVaccinal}
                </span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex space-x-1 p-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'informations' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Informations Personnelles</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Nom</p>
                        <p className="font-medium text-gray-900">{enfant.nom}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Prénom</p>
                        <p className="font-medium text-gray-900">{enfant.prenom}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date de Naissance</p>
                        <p className="font-medium text-gray-900">{enfant.dateNaissance}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Lieu de Naissance</p>
                        <p className="font-medium text-gray-900">{enfant.lieuNaissance}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Groupe Sanguin</p>
                        <p className="font-medium text-gray-900">{enfant.groupeSanguin}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Informations Médicales</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Poids de Naissance</p>
                        <p className="font-medium text-gray-900">{enfant.poidsNaissance}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Taille de Naissance</p>
                        <p className="font-medium text-gray-900">{enfant.tailleNaissance}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Allergies</p>
                        <p className="font-medium text-gray-900">{enfant.allergies}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Contre-indications</p>
                        <p className="font-medium text-gray-900">{enfant.contreIndications}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'carnet' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vaccinations Effectuées</h3>
                    <div className="space-y-3">
                      {vaccinations.map(vac => (
                        <div key={vac.id} className="p-4 bg-green-50 border border-green-200 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{vac.vaccin}</h4>
                              <p className="text-sm text-gray-600">{vac.dose} • Lot: {vac.lot}</p>
                              <p className="text-xs text-gray-500">Le {vac.date} par {vac.infirmier}</p>
                            </div>
                            <span className="text-green-600 text-2xl">✓</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Prochaines Vaccinations</h3>
                    <div className="space-y-3">
                      {prochainesVaccinations.map(vac => (
                        <div key={vac.id} className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{vac.vaccin}</h4>
                              <p className="text-sm text-gray-600">{vac.dose}</p>
                              <p className="text-xs text-gray-500">Prévu le {vac.date}</p>
                            </div>
                            <span className="text-blue-600 text-2xl">📅</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'rendez-vous' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Rendez-vous Planifiés</h3>
                  <div className="space-y-3">
                    {rendezVous.map(rdv => (
                      <div key={rdv.id} className="p-4 border border-gray-200 rounded-xl hover:border-purple-500 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex flex-col items-center justify-center text-white">
                              <span className="text-xs">JUN</span>
                              <span className="text-xl font-bold">15</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{rdv.vaccin}</h4>
                              <p className="text-sm text-gray-600">{rdv.dose}</p>
                              <p className="text-xs text-gray-500">À {rdv.heure}</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                            {rdv.statut}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'historique' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Historique des Actions</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-xl flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <span className="text-green-600 text-2xl">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Enfant inscrit</h4>
                        <p className="text-sm text-gray-600">Inscription initiale</p>
                        <p className="text-xs text-gray-500">{enfant.createdAt} par Dr. Sarah Alami</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4">
            <Link
              to={`/infirmier/enfants/${id}/modifier`}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Modifier</span>
            </Link>
            <Link
              to={`/infirmier/vaccinations/nouvelle?enfant=${id}`}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:shadow-lg transition-all font-medium inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Nouvelle Vaccination</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilEnfant;

