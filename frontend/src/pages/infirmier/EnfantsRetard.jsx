import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const EnfantsRetard = () => {
  const enfantsRetard = [
    { id: 1, nom: 'Ahmed', prenom: 'Alami', age: '6 mois', vaccin: 'DTCP', retard: '5 jours', tel: '0666666666', parent: 'Ali Alami' },
    { id: 2, nom: 'Fatima', prenom: 'Bensaid', age: '4 mois', vaccin: 'BCG', retard: '10 jours', tel: '0712345678', parent: 'Amine Bensaid' },
    { id: 3, nom: 'Hassan', prenom: 'Touil', age: '8 mois', vaccin: 'Hépatite B', retard: '3 jours', tel: '0656789012', parent: 'Sara Touil' }
  ];

  const getRetardBadge = (jours) => {
    if (jours <= 7) return 'bg-yellow-100 text-yellow-800';
    if (jours <= 30) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Enfants en Retard de Vaccination</h1>
            <p className="text-gray-600 mt-2">{enfantsRetard.length} enfant(s) en retard - Action requise</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="font-semibold text-orange-900">Attention importante</h3>
                <p className="text-sm text-orange-700">Ces enfants ont dépassé la date recommandée pour leur vaccination. Un rappel urgent est nécessaire.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {enfantsRetard.map(enfant => (
                <div key={enfant.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                        {enfant.prenom[0]}{enfant.nom[0]}
                      </div>
                      <div>
                        <Link to={`/infirmier/enfants/${enfant.id}`} className="text-xl font-semibold text-purple-600 hover:text-purple-700">
                          {enfant.prenom} {enfant.nom}
                        </Link>
                        <p className="text-sm text-gray-600">{enfant.age} • {enfant.parent}</p>
                        <p className="text-sm font-medium text-gray-900 mt-1">💉 {enfant.vaccin}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div>
                        <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${getRetardBadge(enfant.retard.split(' ')[0])}`}>
                          {enfant.retard} de retard
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <a href={`tel:${enfant.tel}`} className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium inline-flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>Appeler</span>
                        </a>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                          Envoyer SMS
                        </button>
                      </div>
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

export default EnfantsRetard;

