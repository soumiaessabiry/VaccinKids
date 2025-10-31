import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';

const ModifierVaccination = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    enfant: 'Ahmed Alami',
    vaccin: 'DTCP',
    dose: '3e dose',
    dateInjection: '2024-01-15',
    heureInjection: '10:00',
    lot: 'ABC123',
    siteInjection: 'bras',
    reactions: 'Aucune',
    remarques: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/infirmier/vaccinations');
    }, 1500);
  };

  const handleDelete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDeleteModal(false);
      navigate('/infirmier/vaccinations');
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Sidebar role="infirmier" />
        <Navbar userName="Dr. Sarah Alami" role="infirmier" />

        <main className="lg:ml-64 pt-16">
          <div className="p-6 max-w-4xl mx-auto">
            <div className="mb-8">
              <button onClick={() => navigate('/infirmier/vaccinations')} className="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Retour</span>
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Modifier Vaccination</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enfant</label>
                  <input type="text" value={formData.enfant} className="w-full px-4 py-3 border border-gray-300 rounded-xl" disabled />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vaccin</label>
                    <input type="text" value={formData.vaccin} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dose</label>
                    <input type="text" value={formData.dose} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input type="date" name="dateInjection" value={formData.dateInjection} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Heure</label>
                    <input type="time" name="heureInjection" value={formData.heureInjection} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de lot</label>
                  <input type="text" name="lot" value={formData.lot} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Réactions</label>
                  <textarea name="reactions" value={formData.reactions} onChange={handleChange} rows="2" className="w-full px-4 py-3 border border-gray-300 rounded-xl"></textarea>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button onClick={() => setShowDeleteModal(true)} className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 font-medium">
                Supprimer
              </button>
              <div className="flex space-x-4">
                <button onClick={() => navigate('/infirmier/vaccinations')} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-medium">
                  Annuler
                </button>
                <button onClick={handleSave} disabled={isLoading} className={`px-6 py-3 rounded-xl text-white font-medium ${isLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-purple-600 to-blue-600'}`}>
                  {isLoading ? 'Enregistrement...' : 'Enregistrer'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Supprimer la vaccination" size="md">
        <div className="space-y-4">
          <p className="text-gray-600">Voulez-vous vraiment supprimer cette vaccination ?</p>
          <div className="flex justify-end space-x-4">
            <button onClick={() => setShowDeleteModal(false)} className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 font-medium">Annuler</button>
            <button onClick={handleDelete} disabled={isLoading} className={`px-6 py-2 rounded-xl text-white font-medium ${isLoading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}>
              {isLoading ? 'Suppression...' : 'Supprimer'}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModifierVaccination;


