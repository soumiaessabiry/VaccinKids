import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const Calendrier = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [viewMode, setViewMode] = useState('mois'); // mois, semaine, jour

  // Données de démonstration
  const rdv = [
    { id: 1, date: '2024-01-15', heure: '08:00', enfant: 'Ahmed Alami', vaccin: 'DTCP', statut: 'confirmé' },
    { id: 2, date: '2024-01-15', heure: '10:00', enfant: 'Fatima Bensaid', vaccin: 'BCG', statut: 'planifié' },
    { id: 3, date: '2024-01-16', heure: '09:00', enfant: 'Hassan Touil', vaccin: 'Hépatite B', statut: 'confirmé' },
    { id: 4, date: '2024-01-18', heure: '14:00', enfant: 'Salma Idrissi', vaccin: 'ROR', statut: 'planifié' },
  ];

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const days = getDaysInMonth();
  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const getRDVForDate = (day) => {
    if (!day) return [];
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return rdv.filter(r => r.date === dateStr);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Calendrier Rendez-vous</h1>
              <p className="text-gray-600 mt-1">Gérez vos rendez-vous de vaccination</p>
            </div>
            <Link
              to="/infirmier/rendez-vous/nouveau"
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-medium inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Nouveau Rendez-vous</span>
            </Link>
          </div>

          {/* View Mode Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 mb-6 inline-flex">
            {['mois', 'semaine', 'jour'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-6 py-2 rounded-xl font-medium transition-all capitalize ${
                  viewMode === mode
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Calendar Navigation */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={goToPreviousMonth}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <button
                onClick={goToNextMonth}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Today Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={goToToday}
                className="px-6 py-2 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors font-medium"
              >
                Aujourd'hui
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Day Headers */}
              {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map((day) => (
                <div key={day} className="p-3 text-center font-semibold text-gray-600 text-sm">
                  {day}
                </div>
              ))}

              {/* Days */}
              {days.map((day, index) => {
                const rdvForDay = getRDVForDate(day);
                const isToday = day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={index}
                    className={`min-h-24 p-2 border rounded-xl transition-colors ${
                      isToday
                        ? 'border-purple-500 bg-purple-50'
                        : day
                        ? 'border-gray-200 hover:border-purple-300'
                        : 'border-transparent'
                    }`}
                  >
                    {day && (
                      <>
                        <div className={`text-sm font-semibold mb-2 ${isToday ? 'text-purple-700' : 'text-gray-900'}`}>
                          {day}
                        </div>
                        {rdvForDay.slice(0, 2).map((r) => (
                          <div
                            key={r.id}
                            className={`text-xs p-1 rounded mb-1 ${
                              r.statut === 'confirmé' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {r.heure} - {r.enfant}
                          </div>
                        ))}
                        {rdvForDay.length > 2 && (
                          <div className="text-xs text-purple-600 font-medium">
                            +{rdvForDay.length - 2} autre(s)
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Légende</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Confirmé</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-sm text-gray-600">Planifié</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Effectué</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendrier;

