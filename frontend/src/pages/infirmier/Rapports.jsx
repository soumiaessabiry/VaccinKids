import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const Rapports = () => {
  const handleExport = (type, format) => {
    alert(`Export ${type} en format ${format}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Rapports & Exports</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Liste des Enfants', icon: '👶', desc: 'Export liste complète des enfants' },
              { title: 'Vaccinations', icon: '💉', desc: 'Historique des vaccinations' },
              { title: 'Rapport Mensuel', icon: '📊', desc: 'Rapport mensuel du centre' }
            ].map((rapport, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="text-4xl mb-4">{rapport.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{rapport.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{rapport.desc}</p>
                <div className="flex space-x-2">
                  <button onClick={() => handleExport(rapport.title, 'PDF')} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 text-sm font-medium">
                    PDF
                  </button>
                  <button onClick={() => handleExport(rapport.title, 'Excel')} className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 text-sm font-medium">
                    Excel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rapports;

