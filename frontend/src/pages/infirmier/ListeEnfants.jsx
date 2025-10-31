import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const ListeEnfants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSexe, setFilterSexe] = useState('tout');
  const [filterStatut, setFilterStatut] = useState('tout');

  const enfants = [
    { id: 1, nom: 'Ahmed', prenom: 'Alami', dateNaissance: '2023-01-15', sexe: 'garçon', parent: 'Ali Alami', statut: 'à jour', nbrVaccins: 5 },
    { id: 2, nom: 'Fatima', prenom: 'Bensaid', dateNaissance: '2023-05-20', sexe: 'fille', parent: 'Amine Bensaid', statut: 'en retard', nbrVaccins: 2 },
    { id: 3, nom: 'Hassan', prenom: 'Touil', dateNaissance: '2022-11-10', sexe: 'garçon', parent: 'Sara Touil', statut: 'à jour', nbrVaccins: 8 },
    { id: 4, nom: 'Salma', prenom: 'Idrissi', dateNaissance: '2023-03-08', sexe: 'fille', parent: 'Youssef Idrissi', statut: 'complet', nbrVaccins: 10 },
    { id: 5, nom: 'Mohamed', prenom: 'Alaoui', dateNaissance: '2022-08-12', sexe: 'garçon', parent: 'Leila Alaoui', statut: 'en retard', nbrVaccins: 3 },
  ];

  const filteredEnfants = enfants.filter(enfant => {
    const matchSearch = `${enfant.nom} ${enfant.prenom} ${enfant.parent}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSexe = filterSexe === 'tout' || enfant.sexe === filterSexe;
    const matchStatut = filterStatut === 'tout' || enfant.statut === filterStatut;
    return matchSearch && matchSexe && matchStatut;
  });

  const getStatutBadge = (statut) => {
    const badges = {
      'à jour': 'bg-green-100 text-green-800',
      'en retard': 'bg-orange-100 text-orange-800',
      'complet': 'bg-blue-100 text-blue-800'
    };
    return badges[statut] || 'bg-gray-100 text-gray-800';
  };

  const getAge = (dateNaissance) => {
    const today = new Date();
    const birth = new Date(dateNaissance);
    const months = (today - birth) / (1000 * 60 * 60 * 24 * 30);
    return months < 12 ? `${Math.floor(months)} mois` : `${Math.floor(months / 12)} ans`;
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
              <h1 className="text-3xl font-bold text-gray-900">Liste des Enfants</h1>
              <p className="text-gray-600 mt-1">{filteredEnfants.length} enfant(s) au total</p>
            </div>
            <Link
              to="/infirmier/enfants/ajouter"
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Ajouter un enfant</span>
            </Link>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Rechercher nom, prénom..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Filter Sexe */}
              <select
                value={filterSexe}
                onChange={(e) => setFilterSexe(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="tout">Tous les sexes</option>
                <option value="garçon">Garçons</option>
                <option value="fille">Filles</option>
              </select>

              {/* Filter Statut */}
              <select
                value={filterStatut}
                onChange={(e) => setFilterStatut(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="tout">Tous les statuts</option>
                <option value="à jour">À jour</option>
                <option value="en retard">En retard</option>
                <option value="complet">Complet</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Enfant</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Âge</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Parent</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Statut</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vaccins</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredEnfants.map(enfant => (
                    <tr key={enfant.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-semibold">
                            {enfant.prenom[0]}{enfant.nom[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{enfant.prenom} {enfant.nom}</div>
                            <div className="text-sm text-gray-500 capitalize">{enfant.sexe}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {getAge(enfant.dateNaissance)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {enfant.parent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatutBadge(enfant.statut)}`}>
                          {enfant.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${enfant.nbrVaccins * 10}%` }}></div>
                          </div>
                          <span className="text-xs font-medium text-gray-600">{enfant.nbrVaccins}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Link
                            to={`/infirmier/enfants/${enfant.id}`}
                            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                            title="Voir profil"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Link>
                          <Link
                            to={`/infirmier/enfants/${enfant.id}/modifier`}
                            className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                            title="Modifier"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Link>
                          <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors" title="Supprimer">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
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

export default ListeEnfants;


