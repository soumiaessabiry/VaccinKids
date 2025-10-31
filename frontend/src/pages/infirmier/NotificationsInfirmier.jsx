import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const NotificationsInfirmier = () => {
  const [notifications] = useState([
    { id: 1, type: 'warning', message: '3 enfants en retard de vaccination', date: 'Il y a 10 min', lu: false },
    { id: 2, type: 'info', message: 'Nouveau rendez-vous demain à 10h', date: 'Il y a 1h', lu: false },
    { id: 3, type: 'success', message: 'Vaccination effectuée avec succès', date: 'Il y a 2h', lu: true },
    { id: 4, type: 'error', message: 'Erreur lors de l\'enregistrement', date: 'Il y a 3h', lu: true }
  ]);

  const getIcon = (type) => {
    const icons = {
      warning: '⚠️',
      info: 'ℹ️',
      success: '✅',
      error: '❌'
    };
    return icons[type] || '📬';
  };

  const getColor = (type) => {
    const colors = {
      warning: 'bg-yellow-100 text-yellow-800',
      info: 'bg-blue-100 text-blue-800',
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <button className="px-6 py-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 font-medium">
              Tout marquer comme lu
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {notifications.map(notif => (
                <div key={notif.id} className={`p-6 ${!notif.lu ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl">
                      {getIcon(notif.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="font-medium text-gray-900">{notif.message}</p>
                        {!notif.lu && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                      </div>
                      <p className="text-sm text-gray-600">{notif.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationsInfirmier;


