import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const HistoriqueVaccinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterVaccin, setFilterVaccin] = useState('tout');
  const [filterPeriode, setFilterPeriode] = useState('30j');

  const vaccinations = [
    {
      id: 1,
      date: '2024-01-15',
      enfant: 'Ahmed Alami',
      enfantId: 1,
      vaccin: 'BCG',
      dose: '1ere dose',
      lot: 'ABC123',
      infirmier: 'Dr. Sarah Alami',
      centre: 'Centre Sidi Bernoussi',
      site: 'bras gauche',
      reactions: 'Aucune'
    },
    {
      id: 2,
      date: '2024-01-10',
      enfant: 'Fatima Bensaid',
      enfantId: 2,
      vaccin: 'DTCP',
      dose: '2e dose',
      lot: 'DEF456',
      infirmier: 'Dr. Sarah Alami',
      centre: 'Centre Sidi Bernoussi',
      site: 'cuisse gauche',
      reactions: 'Fièvre légère (37.5°C)'
    },
    {
      id: 3,
      date: '2024-01-08',
      enfant: 'Hassan Touil',
      enfantId: 3,
      vaccin: 'Hépatite B',
      dose: '1ere dose',
      lot: 'GHI789',
      infirmier: 'Dr. Sarah Alami',
      centre: 'Centre Sidi Bernoussi',
      site: 'bras gauche',
      reactions: 'Aucune'
    },
    {
      id: 4,
      date: '2023-12-28',
      enfant: 'Salma Idrissi',
      enfantId: 4,
      vaccin: 'ROR',
      dose: '1ere dose',
      lot: 'JKL012',
      infirmier: 'Dr. Sarah Alami',
      centre: 'Centre Sidi Bernoussi',
      site: 'bras gauche',
      reactions: 'Aucune'
    },
    {
      id: 5,
      date: '2023-12-20',
      enfant: 'Mohamed Alaoui',
      enfantId: 5,
      vaccin: 'DTCP',
      dose: '3e dose',
      lot: 'MNO345',
      infirmier: 'Dr. Sarah Alami',
      centre: 'Centre Sidi Bernoussi',
      site: 'cuisse gauche',
      reactions: 'Légère douleur au site d injection'
    }
  ];

  const vaccins = ['tout', ...['BCG', 'DTCP', 'Hépatite B', 'ROR', 'Varicelle']];

  const filteredVaccinations = vaccinations.filter(vac => {
    const matchSearch = `${vac.enfant} ${vac.vaccin} ${vac.lot}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchVaccin = filterVaccin === 'tout' || vac.vaccin === filterVaccin;
    return matchSearch && matchVaccin;
  });

  const handleExport = (format) => {
    console.log(`Export ${format} des vaccinations`);
    // Simuler export
    alert(`Export ${format} en cours...`);
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
              <h1 className="text-3xl font-bold text-gray-900">Historique des Vaccinations</h1>
              <p className="text-gray-600 mt-1">{filteredVaccinations.length} vaccination(s) trouvée(s)</p>
            </div>
            <Link
              to="/infirmier/vaccinations/nouvelle"
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Nouvelle Vaccination</span>
            </Link>
          </div>

          {/* Filters */}
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
                  placeholder="Rechercher enfant, vaccin, lot..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Filter Vaccin */}
              <select
                value={filterVaccin}
                onChange={(e) => setFilterVaccin(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {vaccins.map(v => (
                  <option key={v} value={v}>{v === 'tout' ? 'Tous les vaccins' : v}</option>
                ))}
              </select>

              {/* Filter Periode */}
              <select
                value={filterPeriode}
                onChange={(e) => setFilterPeriode(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="30j">30 derniers jours</option>
                <option value="90j">90 derniers jours</option>
                <option value="6m">6 derniers mois</option>
                <option value="1a">Dernière année</option>
                <option value="tout">Tout</option>
              </select>
            </div>

            {/* Export Buttons */}
            <div className="flex items-center justify-end space-x-4 mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => handleExport('PDF')}
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Export PDF</span>
              </button>
              <button
                onClick={() => handleExport('Excel')}
                className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Export Excel</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Enfant</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vaccin</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Dose</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Lot</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Site</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Réactions</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredVaccinations.map(vac => (
                    <tr key={vac.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{vac.date}</div>
                        <div className="text-xs text-gray-500">10:00</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to={`/infirmier/enfants/${vac.enfantId}`}
                          className="font-semibold text-purple-600 hover:text-purple-700"
                        >
                          {vac.enfant}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                          {vac.vaccin}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vac.dose}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{vac.lot}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vac.site}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm ${vac.reactions === 'Aucune' ? 'text-green-600' : 'text-orange-600'}`}>
                          {vac.reactions}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <Link
                            to={`/infirmier/vaccinations/${vac.id}/modifier`}
                            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                            title="Voir détails"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Link>
                          <button
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            title="Supprimer"
                          >
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

            {/* Empty State */}
            {filteredVaccinations.length === 0 && (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucune vaccination trouvée</h3>
                <p className="mt-1 text-sm text-gray-500">Essayez de modifier vos filtres de recherche</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoriqueVaccinations;

