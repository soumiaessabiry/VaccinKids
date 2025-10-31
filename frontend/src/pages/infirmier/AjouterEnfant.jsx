import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { enfantInitialData, groupesSanguins, validateEnfant, generateNumeroDossier, generateQRCode } from '../../models/enfantModel';

const AjouterEnfant = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(enfantInitialData);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    { number: 1, title: 'Informations Enfant', icon: '👶' },
    { number: 2, title: 'Informations Parent', icon: '👨‍👩‍👧‍👦' },
    { number: 3, title: 'Informations Médicales', icon: '🏥' },
    { number: 4, title: 'Validation', icon: '✅' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.nom) newErrors.nom = 'Le nom est requis';
      if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
      if (!formData.dateNaissance) newErrors.dateNaissance = 'La date de naissance est requise';
      if (!formData.sexe) newErrors.sexe = 'Le sexe est requis';
      if (!formData.lieuNaissance) newErrors.lieuNaissance = 'Le lieu de naissance est requis';
    }
    
    if (step === 2) {
      if (!formData.parentNom) newErrors.parentNom = 'Le nom du parent est requis';
      if (!formData.parentPrenom) newErrors.parentPrenom = 'Le prénom du parent est requis';
      if (!formData.parentTelephone) newErrors.parentTelephone = 'Le téléphone est requis';
      if (!formData.parentEmail) newErrors.parentEmail = 'L\'email est requis';
    }
    
    if (step === 3) {
      // Informations médicales optionnelles
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateEnfant(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      // Générer numéro de dossier et QR code
      const numeroDossier = generateNumeroDossier();
      const qrCode = generateQRCode(numeroDossier);

      const enfantData = {
        ...formData,
        numeroDossier,
        qrCode,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Simuler appel API
      setTimeout(() => {
        setIsLoading(false);
        console.log('Enfant ajouté:', enfantData);
        navigate('/infirmier/enfants');
      }, 2000);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Informations de base</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.prenom ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Prénom de l'enfant"
                />
                {errors.prenom && <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.nom ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Nom de famille"
                />
                {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de naissance <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.dateNaissance ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.dateNaissance && <p className="mt-1 text-sm text-red-600">{errors.dateNaissance}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sexe <span className="text-red-500">*</span>
                </label>
                <select
                  name="sexe"
                  value={formData.sexe}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.sexe ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Sélectionner</option>
                  <option value="garçon">Garçon</option>
                  <option value="fille">Fille</option>
                </select>
                {errors.sexe && <p className="mt-1 text-sm text-red-600">{errors.sexe}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lieu de naissance <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.lieuNaissance ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Ex: Casablanca"
                />
                {errors.lieuNaissance && <p className="mt-1 text-sm text-red-600">{errors.lieuNaissance}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Groupe sanguin</label>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Poids de naissance (kg)</label>
                <input
                  type="number"
                  step="0.01"
                  name="poidsNaissance"
                  value={formData.poidsNaissance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Ex: 3.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Taille de naissance (cm)</label>
                <input
                  type="number"
                  step="0.01"
                  name="tailleNaissance"
                  value={formData.tailleNaissance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Ex: 50"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Informations du parent</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom du parent <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentPrenom"
                  value={formData.parentPrenom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.parentPrenom ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.parentPrenom && <p className="mt-1 text-sm text-red-600">{errors.parentPrenom}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du parent <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentNom"
                  value={formData.parentNom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.parentNom ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {errors.parentNom && <p className="mt-1 text-sm text-red-600">{errors.parentNom}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="parentTelephone"
                  value={formData.parentTelephone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.parentTelephone ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="06 12 34 56 78"
                />
                {errors.parentTelephone && <p className="mt-1 text-sm text-red-600">{errors.parentTelephone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.parentEmail ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="parent@email.com"
                />
                {errors.parentEmail && <p className="mt-1 text-sm text-red-600">{errors.parentEmail}</p>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Informations médicales</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Allergies connues</label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Lister les allergies (si aucune, laisser vide)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contre-indications</label>
                <textarea
                  name="contreIndications"
                  value={formData.contreIndications}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Lister les contre-indications (si aucune, laisser vide)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Autres informations</label>
                <textarea
                  name="autresInfos"
                  value={formData.autresInfos}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Informations complémentaires"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Photo (optionnelle)</label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Validation des informations</h3>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h4 className="font-semibold text-purple-900 mb-4">Récapitulatif</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Enfant:</span>
                  <span className="font-medium text-gray-900">{formData.prenom} {formData.nom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date de naissance:</span>
                  <span className="font-medium text-gray-900">{formData.dateNaissance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sexe:</span>
                  <span className="font-medium text-gray-900 capitalize">{formData.sexe}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Parent:</span>
                  <span className="font-medium text-gray-900">{formData.parentPrenom} {formData.parentNom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Téléphone:</span>
                  <span className="font-medium text-gray-900">{formData.parentTelephone}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">⚠️ Attention:</span> Vérifiez attentivement toutes les informations avant de finaliser l'inscription.
                Un numéro de dossier unique et un QR code seront générés automatiquement après validation.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Ajouter un Enfant</h1>
            <p className="text-gray-600 mt-2">Remplissez les informations ci-dessous</p>
          </div>

          {/* Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${
                      currentStep >= step.number
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.number}
                    </div>
                    <div className="ml-3 hidden md:block">
                      <p className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      currentStep > step.number ? 'bg-purple-600' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            {renderStepContent()}

            {/* Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Précédent
              </button>
              <button
                onClick={handleNext}
                disabled={isLoading}
                className={`px-8 py-3 rounded-xl font-medium text-white transition-all ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg'
                }`}
              >
                {isLoading ? 'Enregistrement...' : currentStep === 4 ? 'Finaliser' : 'Suivant'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AjouterEnfant;

