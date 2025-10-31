import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'infirmier'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors">
      {/* Floating spheres */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-40 right-1/3 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>

      <div className="container mx-auto min-h-screen flex items-center px-4 py-12">
        {/* Theme Toggle - Top Right */}
        <div className="absolute top-6 right-6 z-20">
          <ThemeToggle />
        </div>
        
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

          {/* Left Side - Branding & Visual */}
          <div className="hidden lg:block relative h-full">
            {/* Abstract Shape Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg">
                {/* Large abstract shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-[3rem] rotate-12 opacity-10 blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-[3rem] -rotate-12 opacity-10 blur-3xl"></div>

                {/* Illustration container */}
                <div className="relative z-10 p-12 h-full flex items-center">
                  <div className="w-full space-y-8">
                    {/* Brand */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-8">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">VaccinKids</h1>
                      </div>
{/* 
                      <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                        Simplifiez la gestion vaccinale de vos enfants
                      </h2> */}
                      <p className="text-lg font-semibold text-gray-600 leading-relaxed  text-justify">
                        Une plateforme sécurisée et intuitive pour suivre, organiser et planifier les vaccinations de toute la famille.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-5 pt-2">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">Suivi automatique</h3>
                          <p className="text-gray-600">Calendrier vaccinal intelligent avec rappels personnalisés</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">Notifications intelligentes</h3>
                          <p className="text-gray-600">Rappels par email et SMS pour ne manquer aucun rendez-vous</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">Documents sécurisés</h3>
                          <p className="text-gray-600">Conservez vos certificats vaccinaux en toute sécurité</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 border border-gray-100 dark:border-gray-700 transition-colors">
              {/* Mobile Logo */}
              <div className="lg:hidden flex justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">VaccinKids</h1>
                </div>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  Bienvenue sur VaccinKids
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Veuillez sélectionner votre profil et saisir vos identifiants pour accéder.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Role Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Je suis un(e)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'infirmier', label: 'Infirmier', icon: '👩‍⚕️' },
                      { value: 'parent', label: 'Parent', icon: '👨‍👩‍👧‍👦' },
                      { value: 'admin', label: 'Admin', icon: '👨‍💼' }
                    ].map((role) => (
                      <label
                        key={role.value}
                        className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.role === role.value
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/30'
                          }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role.value}
                          checked={formData.role === role.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-3xl mb-2">{role.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{role.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse e-mail ou nom d'utilisateur
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all ${errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                      placeholder="entrez votre adresse e-mail ou nom d'utilisateur"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => {/* TODO: Toggle password visibility */ }}
                    >
                      <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-12 py-3.5 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all ${errors.password ? 'border-red-300' : 'border-gray-300'
                        }`}
                      placeholder="entrez votre mot de passe"
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                    />
                    <span className="ml-2 text-sm text-gray-600 cursor-pointer">Se souvenir de moi</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-semibold text-white text-base transition-all transform ${isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 active:scale-[0.98] shadow-lg hover:shadow-xl'
                    }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connexion en cours...
                    </div>
                  ) : (
                    'Se connecter'
                  )}
                </button>
              </form>

              {/* Social Login */}
              {/* <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-4">Se connecter avec</p>
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-sm font-medium">Google</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                </div>
              </div> */}

              {/* Register Link */}
              {formData.role === 'parent' && (
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Vous n'avez pas de compte ? Cliquez ici pour{' '}
                    <Link
                      to="/register"
                      className="text-purple-600 hover:text-purple-700 font-semibold underline transition-colors"
                    >
                      S'inscrire maintenant
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;