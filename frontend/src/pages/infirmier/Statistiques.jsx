import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const Statistiques = () => {
  const stats = {
    totalVaccinations: 342,
    tauxCouverture: 85.5,
    enfantsVaccines: 280,
    enfantsEnRetard: 18
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Statistiques du Centre</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Vaccinations', value: stats.totalVaccinations, color: 'blue' },
              { label: 'Taux Couverture', value: `${stats.tauxCouverture}%`, color: 'green' },
              { label: 'Enfants Vaccinés', value: stats.enfantsVaccines, color: 'purple' },
              { label: 'En Retard', value: stats.enfantsEnRetard, color: 'orange' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Graphiques</h2>
            <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Graphiques à venir</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistiques;

