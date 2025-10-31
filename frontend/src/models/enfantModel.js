// Modèle de données pour les enfants
export const enfantInitialData = {
  // Informations de base
  nom: '',
  prenom: '',
  dateNaissance: '',
  sexe: '', // 'garçon' ou 'fille'
  lieuNaissance: '',
  poidsNaissance: '',
  tailleNaissance: '',
  groupeSanguin: '',
  
  // Informations parentales
  parentId: null,
  parentNom: '',
  parentPrenom: '',
  parentEmail: '',
  parentTelephone: '',
  
  // Informations médicales
  allergies: '',
  contreIndications: '',
  autresInfos: '',
  
  // Centre de santé
  centreSanteId: null,
  centreSanteNom: '',
  
  // Dossier médical
  numeroDossier: '',
  qrCode: '',
  photo: null,
  statutVaccinal: 'non_vaccine', // non_vaccine, en_cours, complet, retard
  isActive: true,
  
  // Timestamps
  createdAt: '',
  updatedAt: ''
};

// Liste des groupes sanguins
export const groupesSanguins = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
];

// Liste des statuts vaccinaux
export const statutsVaccinaux = [
  { value: 'non_vaccine', label: 'Non vacciné', color: 'gray' },
  { value: 'en_cours', label: 'En cours', color: 'blue' },
  { value: 'complet', label: 'Complet', color: 'green' },
  { value: 'retard', label: 'En retard', color: 'orange' }
];

// Configuration de validation
export const enfantValidation = {
  nom: {
    required: true,
    minLength: 2,
    message: 'Le nom est requis et doit contenir au moins 2 caractères'
  },
  prenom: {
    required: true,
    minLength: 2,
    message: 'Le prénom est requis et doit contenir au moins 2 caractères'
  },
  dateNaissance: {
    required: true,
    message: 'La date de naissance est requise'
  },
  sexe: {
    required: true,
    message: 'Le sexe est requis'
  },
  parentTelephone: {
    required: true,
    pattern: /^[0-9+\-\s()]+$/,
    message: 'Le téléphone du parent est requis'
  }
};

// Validation d'un enfant
export const validateEnfant = (enfant) => {
  const errors = {};
  
  if (!enfant.nom || enfant.nom.length < 2) {
    errors.nom = enfantValidation.nom.message;
  }
  
  if (!enfant.prenom || enfant.prenom.length < 2) {
    errors.prenom = enfantValidation.prenom.message;
  }
  
  if (!enfant.dateNaissance) {
    errors.dateNaissance = enfantValidation.dateNaissance.message;
  }
  
  if (!enfant.sexe) {
    errors.sexe = enfantValidation.sexe.message;
  }
  
  if (!enfant.parentTelephone) {
    errors.parentTelephone = enfantValidation.parentTelephone.message;
  }
  
  return errors;
};

// Générer un numéro de dossier unique
export const generateNumeroDossier = () => {
  const prefix = 'VK';
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};

// Générer un QR Code (simulation)
export const generateQRCode = (numeroDossier) => {
  return `VACCINKIDS:${numeroDossier}:${Date.now()}`;
};

// Calculer l'âge en mois
export const calculateAge = (dateNaissance) => {
  const today = new Date();
  const birth = new Date(dateNaissance);
  const months = (today - birth) / (1000 * 60 * 60 * 24 * 30);
  return {
    months: Math.floor(months),
    years: Math.floor(months / 12),
    display: months < 12 ? `${Math.floor(months)} mois` : `${Math.floor(months / 12)} ans`
  };
};

export default {
  enfantInitialData,
  groupesSanguins,
  statutsVaccinaux,
  enfantValidation,
  validateEnfant,
  generateNumeroDossier,
  generateQRCode,
  calculateAge
};

