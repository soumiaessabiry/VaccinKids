import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ProfilEnfant = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('informations');

  // Données de démonstration - en lecture seule
  const enfant = {
    id: parseInt(id),
    nom: 'Amine Benali',
    prenom: 'Amine',
    dateNaissance: '2021-03-15',
    age: 3,
    sexe: 'M',
    poidsNaissance: 3.2,
    tailleNaissance: 50,
    numeroDossier: 'DOS-2021-001234',
    qrCode: 'QR-CODE-12345',
    groupeSanguin: 'O+',
    allergies: 'Aucune allergie connue',
    maladiesChroniques: 'Aucune',
    contactUrgence: '+212 6XX XXX XXX',
    medecinTraitant: 'Dr. Sarah Alami'
  };

  const vaccinations = [
    {
      id: 1,
      nom: 'BCG',
      date: '2021-03-20',
      dose: '1ère dose',
      lot: 'LOT-12345',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami'
    },
    {
      id: 2,
      nom: 'Hépatite B',
      date: '2021-04-15',
      dose: '1ère dose',
      lot: 'LOT-12346',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami'
    },
    {
      id: 3,
      nom: 'Pentavalent',
      date: '2024-01-10',
      dose: '3ème dose',
      lot: 'LOT-12347',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami'
    }
  ];

  const rendezVous = [
    {
      id: 1,
      date: '2024-02-15',
      heure: '10:00',
      type: 'ROR',
      statut: 'Confirmé',
      centre: 'Centre de Santé Al Massira'
    }
  ];

  const ageEnMois = () => {
    const naissance = new Date(enfant.dateNaissance);
    const aujourdhui = new Date();
    const mois = (aujourdhui.getFullYear() - naissance.getFullYear()) * 12 + (aujourdhui.getMonth() - naissance.getMonth());
    return mois;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="parent" />
      <Navbar userName="Mohamed Benali" role="parent" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <Link to="/parent/enfants" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium mb-2 inline-block">
                ← Retour à la liste
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{enfant.nom}</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Profil de l'enfant (lecture seule)</p>
            </div>
            <Link
              to={`/parent/enfants/${id}/carnet`}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Voir le carnet
            </Link>
          </div>

          {/* Profile Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
                {enfant.nom.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{enfant.nom}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{enfant.age} ans • {enfant.sexe === 'M' ? 'Garçon' : 'Fille'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">N° Dossier</p>
                    <p className="font-mono text-sm font-semibold text-gray-900 dark:text-white">{enfant.numeroDossier}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Date de naissance</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {new Date(enfant.dateNaissance).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Groupe sanguin</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{enfant.groupeSanguin}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Poids à la naissance</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{enfant.poidsNaissance} kg</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Taille à la naissance</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{enfant.tailleNaissance} cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex space-x-1 p-2">
                <button
                  onClick={() => setActiveTab('informations')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'informations'
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Informations
                </button>
                <button
                  onClick={() => setActiveTab('vaccinations')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'vaccinations'
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Carnet Vaccinal ({vaccinations.length})
                </button>
                <button
                  onClick={() => setActiveTab('rendez-vous')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'rendez-vous'
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Rendez-vous
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Tab: Informations */}
              {activeTab === 'informations' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Informations médicales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Allergies</p>
                        <p className="font-medium text-gray-900 dark:text-white">{enfant.allergies}</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Maladies chroniques</p>
                        <p className="font-medium text-gray-900 dark:text-white">{enfant.maladiesChroniques}</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Contact d'urgence</p>
                        <p className="font-medium text-gray-900 dark:text-white">{enfant.contactUrgence}</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Médecin traitant</p>
                        <p className="font-medium text-gray-900 dark:text-white">{enfant.medecinTraitant}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">QR Code</h3>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg inline-block">
                      <div className="w-32 h-32 bg-white dark:bg-gray-800 p-2 rounded-lg">
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">QR Code</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-2">{enfant.qrCode}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Vaccinations */}
              {activeTab === 'vaccinations' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Historique des vaccinations</h3>
                    <Link
                      to={`/parent/enfants/${id}/carnet`}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
                    >
                      Voir le carnet complet →
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {vaccinations.map((vaccination) => (
                      <div key={vaccination.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{vaccination.nom}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{vaccination.dose}</p>
                            <div className="grid grid-cols-2 gap-4 mt-2 text-xs">
                              <div>
                                <span className="text-gray-500 dark:text-gray-400">Date:</span>{' '}
                                <span className="text-gray-900 dark:text-white">
                                  {new Date(vaccination.date).toLocaleDateString('fr-FR')}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-500 dark:text-gray-400">Lot:</span>{' '}
                                <span className="text-gray-900 dark:text-white">{vaccination.lot}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 dark:text-gray-400">Centre:</span>{' '}
                                <span className="text-gray-900 dark:text-white">{vaccination.centre}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 dark:text-gray-400">Infirmier:</span>{' '}
                                <span className="text-gray-900 dark:text-white">{vaccination.infirmier}</span>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-medium">
                              ✓ Effectué
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Rendez-vous */}
              {activeTab === 'rendez-vous' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Rendez-vous</h3>
                  <div className="space-y-3">
                    {rendezVous.map((rdv) => (
                      <div key={rdv.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{rdv.type}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              {new Date(rdv.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {rdv.heure}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{rdv.centre}</p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-medium">
                            {rdv.statut}
                          </span>
                        </div>
                      </div>
                    ))}
                    {rendezVous.length === 0 && (
                      <p className="text-center text-gray-500 dark:text-gray-400 py-8">Aucun rendez-vous programmé</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilEnfant;
