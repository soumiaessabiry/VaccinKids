import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 8) return setError('8 caractères minimum');
    if (form.password !== form.confirm) return setError('Les mots de passe ne correspondent pas');
    setSuccess(true);
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors">
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      <div className="container mx-auto min-h-screen flex items-center px-4 py-12">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Réinitialiser le mot de passe</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Token: <span className="font-mono text-xs">{token}</span></p>
            {success ? (
              <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg text-green-700 dark:text-green-300">Mot de passe mis à jour. Redirection...</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="p-3 bg-red-50 dark:bg-red-900 rounded text-red-700 dark:text-red-300 text-sm">{error}</div>}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nouveau mot de passe</label>
                  <input type="password" required value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirmer</label>
                  <input type="password" required value={form.confirm} onChange={(e)=>setForm({...form, confirm: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">Valider</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
