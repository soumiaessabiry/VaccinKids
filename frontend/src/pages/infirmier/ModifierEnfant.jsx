import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import { groupesSanguins } from '../../models/enfantModel';

const ModifierEnfant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmSaveModal, setShowConfirmSaveModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Données simulées (normalement récupérées via API)
  const [formData, setFormData] = useState({
    nom: 'Alami',
    prenom: 'Ahmed',
    dateNaissance: '2023-01-15',
    sexe: 'garçon',
    lieuNaissance: 'Casablanca',
    poidsNaissance: '3.5',
    tailleNaissance: '50',
    groupeSanguin: 'A+',
    allergies: 'Aucune allergie connue',
    contreIndications: 'Aucune contre-indication',
    autresInfos: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowConfirmSaveModal(false);
      console.log('Enfant modifié:', formData);
      navigate(`/infirmier/enfants/${id}`);
    }, 1500);
  };

  const handleDelete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDeleteModal(false);
      navigate('/infirmier/enfants');
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Sidebar role="infirmier" />
        <Navbar userName="Dr. Sarah Alami" role="infirmier" />

        <main className="lg:ml-64 pt-16">
          <div className="p-6 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <button
                onClick={() => navigate(`/infirmier/enfants/${id}`)}
                className="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Retour au profil</span>
              </button>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Modifier les Informations</h1>
                  <p className="text-gray-600 mt-2">Mettez à jour les informations de l'enfant</p>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
              <div className="space-y-6">
                {/* Section 1: Informations Personnelles */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations Personnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date de naissance
                      </label>
                      <input
                        type="date"
                        name="dateNaissance"
                        value={formData.dateNaissance}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sexe
                      </label>
                      <select
                        name="sexe"
                        value={formData.sexe}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Sélectionner</option>
                        <option value="garçon">Garçon</option>
                        <option value="fille">Fille</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lieu de naissance
                      </label>
                      <input
                        type="text"
                        name="lieuNaissance"
                        value={formData.lieuNaissance}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Groupe sanguin
                      </label>
                      <select
                        name="groupeSanguin"
                        value={formData.groupeSanguin}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="">Sélectionner</option>
                        {groupesSanguins.map(groupe => (
                          <option key={groupe} value={groupe}>{groupe}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Informations Médicales */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations Médicales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Poids de naissance (kg)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="poidsNaissance"
                        value={formData.poidsNaissance}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Taille de naissance (cm)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="tailleNaissance"
                        value={formData.tailleNaissance}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Allergies connues
                      </label>
                      <textarea
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Listez les allergies connues"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contre-indications
                      </label>
                      <textarea
                        name="contreIndications"
                        value={formData.contreIndications}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Listez les contre-indications"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Autres informations
                      </label>
                      <textarea
                        name="autresInfos"
                        value={formData.autresInfos}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Informations complémentaires"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowDeleteModal(true)}
                className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Supprimer</span>
              </button>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate(`/infirmier/enfants/${id}`)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={() => setShowConfirmSaveModal(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Confirmation Save */}
      <Modal isOpen={showConfirmSaveModal} onClose={() => setShowConfirmSaveModal(false)} title="Confirmer les modifications" size="md">
        <div className="space-y-4">
          <p className="text-gray-600">
            Êtes-vous sûr de vouloir enregistrer ces modifications ?
          </p>
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={() => setShowConfirmSaveModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={isLoading}
              className={`px-6 py-2 rounded-xl font-medium ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg'
              } text-white transition-all`}
            >
              {isLoading ? 'Enregistrement...' : 'Confirmer'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Confirmation Delete */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Supprimer l'enfant" size="md">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Attention !</h4>
              <p className="text-sm text-gray-600">
                Cette action est irréversible. Toutes les données de {formData.prenom} {formData.nom} seront définitivement supprimées.
              </p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-800">
              <span className="font-semibold">⚠️ Attention:</span> La suppression inclura toutes les vaccinations, rendez-vous et historique associés.
            </p>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
            >
              Annuler
            </button>
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className={`px-6 py-2 rounded-xl font-medium ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              } text-white transition-all`}
            >
              {isLoading ? 'Suppression...' : 'Supprimer définitivement'}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModifierEnfant;

