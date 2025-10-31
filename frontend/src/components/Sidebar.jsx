import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ role = 'infirmier' }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = {
    infirmier: [
      { path: '/infirmier/dashboard', icon: '📊', label: 'Dashboard', active: location.pathname === '/infirmier/dashboard' },
      { path: '/infirmier/enfants', icon: '👶', label: 'Enfants', active: location.pathname.includes('/infirmier/enfants') && !location.pathname.includes('ajouter') && !location.pathname.includes('modifier') },
      { path: '/infirmier/enfants/ajouter', icon: '➕', label: 'Ajouter Enfant', active: location.pathname === '/infirmier/enfants/ajouter' },
      { path: '/infirmier/scan-qr', icon: '📱', label: 'Scanner QR', active: location.pathname === '/infirmier/scan-qr' },
      { path: '/infirmier/vaccinations/nouvelle', icon: '💉', label: 'Nouvelle Vaccination', active: location.pathname === '/infirmier/vaccinations/nouvelle' },
      { path: '/infirmier/calendrier', icon: '📅', label: 'Calendrier', active: location.pathname === '/infirmier/calendrier' },
      { path: '/infirmier/enfants-retard', icon: '⚠️', label: 'Enfants en Retard', active: location.pathname === '/infirmier/enfants-retard' },
      { path: '/infirmier/statistiques', icon: '📈', label: 'Statistiques', active: location.pathname === '/infirmier/statistiques' },
      { path: '/infirmier/profil', icon: '👤', label: 'Mon Profil', active: location.pathname === '/infirmier/profil' },
    ],
    parent: [
      { path: '/parent/dashboard', icon: '📊', label: 'Dashboard', active: location.pathname === '/parent/dashboard' },
      { path: '/parent/enfants', icon: '👶', label: 'Mes Enfants', active: location.pathname.includes('/parent/enfants') && !location.pathname.includes('carnet') },
      { path: '/parent/rendez-vous', icon: '📅', label: 'Mes Rendez-vous', active: location.pathname === '/parent/rendez-vous' },
      { path: '/parent/notifications', icon: '🔔', label: 'Notifications', active: location.pathname === '/parent/notifications' },
      { path: '/parent/documents', icon: '📄', label: 'Documents', active: location.pathname === '/parent/documents' },
      { path: '/parent/profil', icon: '👤', label: 'Mon Profil', active: location.pathname === '/parent/profil' },
    ],
    admin: [
      { path: '/admin/dashboard', icon: '📊', label: 'Dashboard', active: location.pathname === '/admin/dashboard' },
      { path: '/admin/centres', icon: '🏥', label: 'Centres', active: location.pathname.includes('/admin/centres') && !location.pathname.includes('ajouter') },
      { path: '/admin/utilisateurs', icon: '👥', label: 'Utilisateurs', active: location.pathname.includes('/admin/utilisateurs') && !location.pathname.includes('ajouter') },
      { path: '/admin/vaccins', icon: '💉', label: 'Vaccins', active: location.pathname.includes('/admin/vaccins') && !location.pathname.includes('ajouter') },
      { path: '/admin/statistiques', icon: '📈', label: 'Statistiques', active: location.pathname === '/admin/statistiques' },
      { path: '/admin/logs', icon: '📋', label: 'Logs & Audit', active: location.pathname === '/admin/logs' },
      { path: '/admin/parametres', icon: '⚙️', label: 'Paramètres', active: location.pathname === '/admin/parametres' },
    ]
  };

  const items = menuItems[role] || [];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                VaccinKids
              </h1>
            </div>
            <p className="text-xs text-gray-500 mt-1 capitalize">{role}</p>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  item.active
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all">
              <span className="text-xl">👤</span>
              <span className="font-medium">Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

