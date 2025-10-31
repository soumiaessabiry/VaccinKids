import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const CarnetDigital = () => {
  const { id } = useParams();
  const [showExportMenu, setShowExportMenu] = useState(false);

  const enfant = {
    id: parseInt(id),
    nom: 'Amine Benali',
    dateNaissance: '2021-03-15',
    numeroDossier: 'DOS-2021-001234'
  };

  const vaccinations = [
    {
      id: 1,
      nom: 'BCG',
      date: '2021-03-20',
      age: '0 mois',
      dose: '1ère dose',
      lot: 'LOT-12345',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami',
      site: 'Bras gauche',
      signature: '✓'
    },
    {
      id: 2,
      nom: 'Hépatite B',
      date: '2021-04-15',
      age: '1 mois',
      dose: '1ère dose',
      lot: 'LOT-12346',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami',
      site: 'Cuisse droite',
      signature: '✓'
    },
    {
      id: 3,
      nom: 'Pentavalent',
      date: '2021-05-10',
      age: '2 mois',
      dose: '1ère dose',
      lot: 'LOT-12347',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami',
      site: 'Cuisse gauche',
      signature: '✓'
    },
    {
      id: 4,
      nom: 'Pentavalent',
      date: '2021-07-10',
      age: '4 mois',
      dose: '2ème dose',
      lot: 'LOT-12348',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami',
      site: 'Cuisse gauche',
      signature: '✓'
    },
    {
      id: 5,
      nom: 'Pentavalent',
      date: '2024-01-10',
      age: '34 mois',
      dose: '3ème dose',
      lot: 'LOT-12349',
      centre: 'Centre de Santé Al Massira',
      infirmier: 'Dr. Sarah Alami',
      site: 'Cuisse gauche',
      signature: '✓'
    }
  ];

  const calendrierVaccinal = {
    '0-2 mois': ['BCG', 'Hépatite B'],
    '2-4 mois': ['Pentavalent', 'Pneumocoque'],
    '4-6 mois': ['Pentavalent', 'Pneumocoque'],
    '6-9 mois': ['Hépatite B'],
    '12-18 mois': ['ROR', 'Pentavalent'],
    '18-24 mois': ['ROR']
  };

  const handleExport = (format) => {
    console.log(`Export ${format} pour enfant ${id}`);
    setShowExportMenu(false);
    // Ici vous ajouteriez la logique d'export
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
              <Link to={`/parent/enfants/${id}`} className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium mb-2 inline-block">
                ← Retour au profil
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Carnet Vaccinal Digital</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{enfant.nom}</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Exporter
              </button>
              {showExportMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                  <button
                    onClick={() => handleExport('PDF')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                  >
                    Export PDF
                  </button>
                  <button
                    onClick={() => handleExport('Excel')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
                  >
                    Export Excel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Enfant Info Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  {enfant.nom.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{enfant.nom}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Né le {new Date(enfant.dateNaissance).toLocaleDateString('fr-FR')} • N° {enfant.numeroDossier}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Carnet officiel</p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Valide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vaccinations Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Historique des vaccinations</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Vaccin</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Dose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Lot</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Site</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Centre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Signature</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {vaccinations.map((vaccination) => (
                    <tr key={vaccination.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">
                          {new Date(vaccination.date).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{vaccination.age}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{vaccination.nom}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">{vaccination.dose}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">{vaccination.lot}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white">{vaccination.site}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 dark:text-white">{vaccination.centre}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{vaccination.infirmier}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-center">
                          <span className="text-2xl text-green-600 dark:text-green-400">{vaccination.signature}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Calendrier Vaccinal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Calendrier vaccinal recommandé</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(calendrierVaccinal).map(([age, vaccins]) => (
                <div key={age} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{age}</h3>
                  <ul className="space-y-1">
                    {vaccins.map((vaccin, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300">
                        • {vaccin}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarnetDigital;


