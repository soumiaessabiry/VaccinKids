import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ExportEnfant = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleExport = (format) => {
    alert(`Export en format ${format} pour l'enfant ${id}`);
    // Simulation export
    setTimeout(() => {
      alert(`${format} généré avec succès !`);
      navigate(`/infirmier/enfants/${id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <button onClick={() => navigate(`/infirmier/enfants/${id}`)} className="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour au profil</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Exporter le Carnet</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Choisissez le format d'export</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button onClick={() => handleExport('PDF')} className="p-6 border-2 border-gray-200 rounded-xl hover:border-red-500 transition-colors text-left">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="font-semibold text-gray-900 mb-2">Export PDF</h3>
                <p className="text-sm text-gray-600">Carnet de vaccination complet en format PDF</p>
              </button>
              
              <button onClick={() => handleExport('Excel')} className="p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors text-left">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Export Excel</h3>
                <p className="text-sm text-gray-600">Données complètes en format Excel</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExportEnfant;

