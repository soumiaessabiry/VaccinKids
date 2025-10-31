import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const NouveauRendezVous = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const enfantId = searchParams.get('enfant');

  const [formData, setFormData] = useState({
    enfantId: enfantId || '',
    enfantNom: '',
    vaccin: '',
    dose: '',
    dateRdv: '',
    heureRdv: '',
    notes: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const vaccins = [
    { id: 1, nom: 'BCG', nbrDoses: 1 },
    { id: 2, nom: 'DTCP', nbrDoses: 3 },
    { id: 3, nom: 'Hépatite B', nbrDoses: 3 },
    { id: 4, nom: 'ROR', nbrDoses: 2 }
  ];

  const enfants = [
    { id: 1, nom: 'Ahmed', prenom: 'Alami', numeroDossier: 'VK-001' },
    { id: 2, nom: 'Fatima', prenom: 'Bensaid', numeroDossier: 'VK-002' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/infirmier/rendez-vous');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Créer un Rendez-vous</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enfant</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vaccin</label>
                  <select name="vaccin" value={formData.vaccin} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl">
                    <option value="">Sélectionner</option>
                    {vaccins.map(v => <option key={v.id} value={v.nom}>{v.nom}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dose</label>
                  <input type="text" name="dose" value={formData.dose} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="Ex: 1ere dose" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input type="date" name="dateRdv" value={formData.dateRdv} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Heure</label>
                  <input type="time" name="heureRdv" value={formData.heureRdv} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-xl"></textarea>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <button type="button" onClick={() => navigate('/infirmier/rendez-vous')} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300">Annuler</button>
                <button type="submit" disabled={isLoading} className={`px-6 py-3 rounded-xl text-white font-medium ${isLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-purple-600 to-blue-600'}`}>
                  {isLoading ? 'Création...' : 'Créer le rendez-vous'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NouveauRendezVous;

