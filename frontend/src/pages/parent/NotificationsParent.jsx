import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const NotificationsParent = () => {
  const [filter, setFilter] = useState('tous'); // tous, nonLues

  const notifications = [
    {
      id: 1,
      titre: 'Rappel de rendez-vous',
      message: 'Rappel: Rendez-vous pour Amine Benali le 15/02/2024 à 10:00',
      type: 'info',
      date: '2024-02-10T08:00:00',
      lue: false,
      lien: '/parent/rendez-vous'
    },
    {
      id: 2,
      titre: 'Vaccination en retard',
      message: 'Yasmine Benali est en retard pour sa vaccination BCG prévue le 20/02/2024',
      type: 'warning',
      date: '2024-02-08T14:30:00',
      lue: false,
      lien: '/parent/enfants/2'
    },
    {
      id: 3,
      titre: 'Vaccination effectuée',
      message: 'La vaccination Pentavalent a été effectuée avec succès pour Amine Benali',
      type: 'success',
      date: '2024-01-10T16:00:00',
      lue: true,
      lien: '/parent/enfants/1/carnet'
    },
    {
      id: 4,
      titre: 'Document disponible',
      message: 'Nouveau document disponible: Carnet de vaccination pour Yasmine Benali',
      type: 'info',
      date: '2024-01-08T10:00:00',
      lue: true,
      lien: '/parent/documents'
    },
    {
      id: 5,
      titre: 'Rendez-vous confirmé',
      message: 'Votre rendez-vous du 15/02/2024 a été confirmé',
      type: 'success',
      date: '2024-01-05T09:00:00',
      lue: true,
      lien: '/parent/rendez-vous'
    }
  ];

  const getFilteredNotifications = () => {
    if (filter === 'nonLues') {
      return notifications.filter(notif => !notif.lue);
    }
    return notifications;
  };

  const filteredNotifications = getFilteredNotifications();
  const nonLuesCount = notifications.filter(n => !n.lue).length;

  const getTypeIcon = (type) => {
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      default:
        return 'ℹ️';
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      'info': 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700',
      'warning': 'bg-orange-50 dark:bg-orange-900 border-orange-200 dark:border-orange-700',
      'success': 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700',
      'error': 'bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700'
    };
    return colors[type] || colors['info'];
  };

  const marquerCommeLue = (id) => {
    // Ici vous ajouteriez la logique pour marquer comme lue
    console.log(`Marquer notification ${id} comme lue`);
  };

  const marquerToutesCommeLues = () => {
    // Ici vous ajouteriez la logique pour marquer toutes comme lues
    console.log('Marquer toutes les notifications comme lues');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar role="parent" />
      <Navbar userName="Mohamed Benali" role="parent" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {nonLuesCount > 0 ? `${nonLuesCount} notification${nonLuesCount > 1 ? 's' : ''} non lue${nonLuesCount > 1 ? 's' : ''}` : 'Toutes vos notifications'}
              </p>
            </div>
            {nonLuesCount > 0 && (
              <button
                onClick={marquerToutesCommeLues}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Tout marquer comme lu
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filtrer:</span>
              <button
                onClick={() => setFilter('tous')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'tous'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Toutes
              </button>
              <button
                onClick={() => setFilter('nonLues')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                  filter === 'nonLues'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Non lues
                {nonLuesCount > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                    {nonLuesCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-3">
            {filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border-2 ${getTypeColor(notif.type)} p-6 ${
                  !notif.lue ? 'ring-2 ring-purple-500 dark:ring-purple-400' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{getTypeIcon(notif.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{notif.titre}</h3>
                        {!notif.lue && (
                          <span className="inline-block ml-2 px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full">
                            Nouvelle
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => marquerCommeLue(notif.id)}
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                      >
                        {notif.lue ? 'Marquée comme lue' : 'Marquer comme lue'}
                      </button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{notif.message}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(notif.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                      {notif.lien && (
                        <a
                          href={notif.lien}
                          className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                        >
                          Voir les détails →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredNotifications.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Aucune notification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {filter === 'nonLues' ? 'Toutes les notifications ont été lues' : 'Vous n\'avez aucune notification'}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NotificationsParent;

