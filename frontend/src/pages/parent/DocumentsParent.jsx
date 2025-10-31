import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const DocumentsParent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEnfant, setFilterEnfant] = useState('tous');

  const documents = [
    {
      id: 1,
      nom: 'Carnet de vaccination - Amine Benali',
      type: 'Carnet',
      format: 'PDF',
      taille: '2.4 MB',
      date: '2024-01-15',
      enfant: 'Amine Benali',
      enfantId: 1,
      description: 'Carnet vaccinal complet jusqu\'à ce jour'
    },
    {
      id: 2,
      nom: 'Certificat de vaccination - Amine Benali',
      type: 'Certificat',
      format: 'PDF',
      taille: '856 KB',
      date: '2024-01-10',
      enfant: 'Amine Benali',
      enfantId: 1,
      description: 'Certificat de vaccination Pentavalent'
    },
    {
      id: 3,
      nom: 'Carnet de vaccination - Yasmine Benali',
      type: 'Carnet',
      format: 'PDF',
      taille: '1.8 MB',
      date: '2024-01-08',
      enfant: 'Yasmine Benali',
      enfantId: 2,
      description: 'Carnet vaccinal complet jusqu\'à ce jour'
    },
    {
      id: 4,
      nom: 'Attestation de vaccination - Amine Benali',
      type: 'Attestation',
      format: 'PDF',
      taille: '342 KB',
      date: '2023-12-20',
      enfant: 'Amine Benali',
      enfantId: 1,
      description: 'Attestation pour l\'école'
    },
    {
      id: 5,
      nom: 'Rapport médical - Yasmine Benali',
      type: 'Rapport',
      format: 'PDF',
      taille: '1.2 MB',
      date: '2023-11-15',
      enfant: 'Yasmine Benali',
      enfantId: 2,
      description: 'Rapport de suivi médical'
    }
  ];

  const enfants = [
    { id: 1, nom: 'Amine Benali' },
    { id: 2, nom: 'Yasmine Benali' }
  ];

  const getFilteredDocuments = () => {
    let filtered = documents;

    // Filtrer par enfant
    if (filterEnfant !== 'tous') {
      filtered = filtered.filter(doc => doc.enfantId === parseInt(filterEnfant));
    }

    // Filtrer par recherche
    if (searchTerm) {
      filtered = filtered.filter(doc =>
        doc.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredDocuments = getFilteredDocuments();

  const handleDownload = (docId) => {
    console.log(`Télécharger le document ${docId}`);
    // Ici vous ajouteriez la logique de téléchargement
  };

  const handlePreview = (docId) => {
    console.log(`Prévisualiser le document ${docId}`);
    // Ici vous ajouteriez la logique de prévisualisation
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Carnet':
        return '📋';
      case 'Certificat':
        return '📜';
      case 'Attestation':
        return '📄';
      case 'Rapport':
        return '📊';
      default:
        return '📁';
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      'Carnet': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      'Certificat': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'Attestation': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      'Rapport': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[type] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="parent" />
      <Navbar userName="Mohamed Benali" role="parent" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Documents</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Tous vos documents PDF et certificats de vaccination</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un document..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>
              <select
                value={filterEnfant}
                onChange={(e) => setFilterEnfant(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              >
                <option value="tous">Tous les enfants</option>
                {enfants.map((enfant) => (
                  <option key={enfant.id} value={enfant.id}>{enfant.nom}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Documents List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{getTypeIcon(doc.type)}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(doc.type)}`}>
                    {doc.type}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{doc.nom}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{doc.description}</p>
                <div className="space-y-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center justify-between">
                    <span>Enfant:</span>
                    <Link
                      to={`/parent/enfants/${doc.enfantId}`}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                    >
                      {doc.enfant}
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Date:</span>
                    <span>{new Date(doc.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Taille:</span>
                    <span>{doc.taille}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Format:</span>
                    <span className="font-mono">{doc.format}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handlePreview(doc.id)}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    Voir
                  </button>
                  <button
                    onClick={() => handleDownload(doc.id)}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDocuments.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Aucun document trouvé</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {searchTerm || filterEnfant !== 'tous' ? 'Essayez de modifier vos critères de recherche' : 'Aucun document disponible'}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DocumentsParent;

