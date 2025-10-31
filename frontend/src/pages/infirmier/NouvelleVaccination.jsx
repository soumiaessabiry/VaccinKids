import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const NouvelleVaccination = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const enfantId = searchParams.get('enfant');

  const [formData, setFormData] = useState({
    enfantId: enfantId || '',
    enfantNom: '',
    vaccin: '',
    doseNumero: '',
    dateInjection: new Date().toISOString().split('T')[0],
    heureInjection: new Date().toTimeString().slice(0, 5),
    lot: '',
    siteInjection: 'bras',
    reactions: '',
    remarques: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [enfantsSearchResults, setEnfantsSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Liste des vaccins disponibles
  const vaccins = [
    { id: 1, nom: 'BCG', nbrDoses: 1, intervalle: 0 },
    { id: 2, nom: 'DTCP', nbrDoses: 3, intervalle: 45 },
    { id: 3, nom: 'Hépatite B', nbrDoses: 3, intervalle: 60 },
    { id: 4, nom: 'ROR', nbrDoses: 2, intervalle: 180 },
    { id: 5, nom: 'Varicelle', nbrDoses: 2, intervalle: 180 }
  ];

  // Enfants pour recherche
  const enfants = [
    { id: 1, nom: 'Ahmed', prenom: 'Alami', numeroDossier: 'VK-001-ABC', age: '6 mois' },
    { id: 2, nom: 'Fatima', prenom: 'Bensaid', numeroDossier: 'VK-002-DEF', age: '4 mois' },
    { id: 3, nom: 'Hassan', prenom: 'Touil', numeroDossier: 'VK-003-GHI', age: '8 mois' }
  ];

  const sitesInjection = [
    { value: 'bras', label: 'Bras gauche' },
    { value: 'cuisse', label: 'Cuisse gauche' },
    { value: 'fessier', label: 'Fesse gauche' },
    { value: 'oral', label: 'Voie orale' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Calculer prochaine dose automatiquement
    if (name === 'vaccin' || name === 'doseNumero' || name === 'dateInjection') {
      calculateProchaineDose();
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const calculateProchaineDose = () => {
    if (formData.vaccin && formData.doseNumero && formData.dateInjection) {
      const selectedVaccin = vaccins.find(v => v.nom === formData.vaccin);
      if (selectedVaccin && parseInt(formData.doseNumero) < selectedVaccin.nbrDoses) {
        const dateInjection = new Date(formData.dateInjection);
        dateInjection.setDate(dateInjection.getDate() + selectedVaccin.intervalle);
        return dateInjection.toISOString().split('T')[0];
      }
    }
    return null;
  };

  const handleSearchEnfant = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = enfants.filter(enfant =>
      `${enfant.nom} ${enfant.prenom} ${enfant.numeroDossier}`.toLowerCase().includes(searchTerm)
    );
    setEnfantsSearchResults(results);
    setShowSearchResults(searchTerm.length > 0);
  };

  const handleSelectEnfant = (enfant) => {
    setFormData(prev => ({
      ...prev,
      enfantId: enfant.id,
      enfantNom: `${enfant.prenom} ${enfant.nom} - ${enfant.numeroDossier}`
    }));
    setShowSearchResults(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.enfantId) {
      newErrors.enfantId = 'Veuillez sélectionner un enfant';
    }

    if (!formData.vaccin) {
      newErrors.vaccin = 'Le vaccin est requis';
    }

    if (!formData.doseNumero) {
      newErrors.doseNumero = 'Le numéro de dose est requis';
    }

    if (!formData.lot) {
      newErrors.lot = 'Le numéro de lot est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const prochaineDose = calculateProchaineDose();

    const vaccinationData = {
      ...formData,
      prochaineDoseDate: prochaineDose
    };

    // Simuler appel API
    setTimeout(() => {
      setIsLoading(false);
      console.log('Vaccination enregistrée:', vaccinationData);
      navigate('/infirmier/enfants');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/infirmier/enfants')}
              className="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Enregistrer une Vaccination</h1>
            <p className="text-gray-600 mt-2">Renseignez les informations de la vaccination effectuée</p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Étape 1: Sélection Enfant */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Sélection de l'enfant</h3>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rechercher un enfant <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                        errors.enfantId ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Nom, prénom ou numéro de dossier..."
                      onChange={handleSearchEnfant}
                      value={formData.enfantNom}
                    />
                    {errors.enfantId && <p className="mt-1 text-sm text-red-600">{errors.enfantId}</p>}
                  </div>

                  {/* Search Results */}
                  {showSearchResults && enfantsSearchResults.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                      {enfantsSearchResults.map(enfant => (
                        <button
                          key={enfant.id}
                          type="button"
                          onClick={() => handleSelectEnfant(enfant)}
                          className="w-full px-4 py-3 hover:bg-gray-50 text-left flex items-center space-x-3 transition-colors"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-semibold">
                            {enfant.prenom[0]}{enfant.nom[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{enfant.prenom} {enfant.nom}</p>
                            <p className="text-sm text-gray-600">{enfant.numeroDossier} • {enfant.age}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Scan QR Button */}
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => navigate('/infirmier/scan-qr')}
                      className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium inline-flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                      <span>Scanner QR Code</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Étape 2: Informations Vaccination */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Informations de vaccination</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vaccin <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="vaccin"
                      value={formData.vaccin}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                        errors.vaccin ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Sélectionner un vaccin</option>
                      {vaccins.map(vaccin => (
                        <option key={vaccin.id} value={vaccin.nom}>{vaccin.nom} ({vaccin.nbrDoses} doses)</option>
                      ))}
                    </select>
                    {errors.vaccin && <p className="mt-1 text-sm text-red-600">{errors.vaccin}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de dose <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="doseNumero"
                      value={formData.doseNumero}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                        errors.doseNumero ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Sélectionner</option>
                      {formData.vaccin && [...Array(vaccins.find(v => v.nom === formData.vaccin)?.nbrDoses || 0)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1 === 1 ? '1ère dose' : `${i + 1}e dose`}</option>
                      ))}
                    </select>
                    {errors.doseNumero && <p className="mt-1 text-sm text-red-600">{errors.doseNumero}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date d'injection <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateInjection"
                      value={formData.dateInjection}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Heure d'injection
                    </label>
                    <input
                      type="time"
                      name="heureInjection"
                      value={formData.heureInjection}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de lot <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lot"
                      value={formData.lot}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                        errors.lot ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Ex: ABC123"
                    />
                    {errors.lot && <p className="mt-1 text-sm text-red-600">{errors.lot}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site d'injection
                    </label>
                    <select
                      name="siteInjection"
                      value={formData.siteInjection}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      {sitesInjection.map(site => (
                        <option key={site.value} value={site.value}>{site.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Réactions observées
                    </label>
                    <textarea
                      name="reactions"
                      value={formData.reactions}
                      onChange={handleChange}
                      rows="2"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Décrire les réactions éventuelles (fièvre, rougeur, etc.)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Remarques
                    </label>
                    <textarea
                      name="remarques"
                      value={formData.remarques}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Observations supplémentaires"
                    />
                  </div>
                </div>

                {/* Affichage Prochaine Dose */}
                {calculateProchaineDose() && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-blue-900">Prochaine dose recommandée</p>
                        <p className="text-sm text-blue-700">
                          {vaccins.find(v => v.nom === formData.vaccin)?.nom} - {parseInt(formData.doseNumero) + 1}{parseInt(formData.doseNumero) + 1 === 1 ? 'ère' : 'e'} dose le {calculateProchaineDose()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => navigate('/infirmier/enfants')}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-3 rounded-xl font-medium ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg'
                  } text-white transition-all`}
                >
                  {isLoading ? 'Enregistrement...' : 'Enregistrer la vaccination'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NouvelleVaccination;

