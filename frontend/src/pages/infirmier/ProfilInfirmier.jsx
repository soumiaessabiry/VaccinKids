import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ProfilInfirmier = () => {
  const [formData, setFormData] = useState({
    nom: 'Sarah',
    prenom: 'Alami',
    email: 'sarah.alami@vaccinkids.com',
    telephone: '0666666666',
    centre: 'Centre de Santé Sidi Bernoussi',
    numeroOrdre: 'INF-12345'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profil mis à jour !');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Profil</h1>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4">
                  SA
                </div>
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  Changer la photo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Centre de Santé</label>
                  <input type="text" name="centre" value={formData.centre} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">N° Ordre</label>
                  <input type="text" name="numeroOrdre" value={formData.numeroOrdre} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" disabled />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button type="button" className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300">Annuler</button>
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilInfirmier;

