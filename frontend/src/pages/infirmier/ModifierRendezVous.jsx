import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ModifierRendezVous = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    dateRdv: '2024-01-20',
    heureRdv: '09:30',
    vaccin: 'DTCP',
    dose: '3e dose',
    notes: 'Rappeler au parent de venir 15 min avant'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
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
            <button onClick={() => navigate(`/infirmier/rendez-vous/${id}`)} className="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Modifier Rendez-vous</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Vaccin</label>
                <input type="text" name="vaccin" value={formData.vaccin} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dose</label>
                <input type="text" name="dose" value={formData.dose} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-xl"></textarea>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <button type="button" onClick={() => navigate(`/infirmier/rendez-vous/${id}`)} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-medium">
                  Annuler
                </button>
                <button type="submit" disabled={isLoading} className={`px-6 py-3 rounded-xl text-white font-medium ${isLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg'}`}>
                  {isLoading ? 'Enregistrement...' : 'Enregistrer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModifierRendezVous;

