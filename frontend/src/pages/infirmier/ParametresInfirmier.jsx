import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ParametresInfirmier = () => {
  const [settings, setSettings] = useState({
    notificationsEmail: true,
    notificationsSMS: false,
    notificationsPush: true,
    langue: 'français',
    theme: 'clair'
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Paramètres</h1>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Notifications par Email</p>
                    <p className="text-sm text-gray-600">Recevoir des alertes par email</p>
                  </div>
                  <button onClick={() => handleToggle('notificationsEmail')} className={`relative w-12 h-6 rounded-full transition-colors ${settings.notificationsEmail ? 'bg-purple-600' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.notificationsEmail ? 'translate-x-6' : ''}`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Notifications SMS</p>
                    <p className="text-sm text-gray-600">Recevoir des alertes par SMS</p>
                  </div>
                  <button onClick={() => handleToggle('notificationsSMS')} className={`relative w-12 h-6 rounded-full transition-colors ${settings.notificationsSMS ? 'bg-purple-600' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.notificationsSMS ? 'translate-x-6' : ''}`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Préférences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
                  <select name="langue" value={settings.langue} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl">
                    <option value="français">Français</option>
                    <option value="arabe">Arabe</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg font-medium">
                Enregistrer les paramètres
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParametresInfirmier;


