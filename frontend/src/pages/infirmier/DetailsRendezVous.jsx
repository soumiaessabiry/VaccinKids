import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const DetailsRendezVous = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const rdv = {
    id: id,
    date: '2024-01-20',
    heure: '09:30',
    enfant: 'Ahmed Alami',
    enfantId: 1,
    vaccin: 'DTCP',
    dose: '3e dose',
    parent: 'Ali Alami',
    parentTel: '0666666666',
    parentEmail: 'ali.alami@email.com',
    statut: 'planifié',
    notes: 'Rappeler au parent de venir 15 min avant'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <button onClick={() => navigate('/infirmier/rendez-vous')} className="text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Détails du Rendez-vous</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex flex-col items-center justify-center text-white font-bold">
                  <span className="text-xs">JAN</span>
                  <span className="text-3xl">20</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{rdv.heure}</h2>
                  <p className="text-gray-600">{rdv.date}</p>
                  <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mt-2">{rdv.statut}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Informations Enfant</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Enfant</p>
                      <p className="font-medium text-gray-900">{rdv.enfant}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Vaccin</p>
                      <p className="font-medium text-gray-900">{rdv.vaccin} - {rdv.dose}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Parent</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Parent</p>
                      <p className="font-medium text-gray-900">{rdv.parent}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Téléphone</p>
                      <a href={`tel:${rdv.parentTel}`} className="font-medium text-purple-600 hover:text-purple-700">{rdv.parentTel}</a>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{rdv.parentEmail}</p>
                    </div>
                  </div>
                </div>
              </div>

              {rdv.notes && (
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
                  <p className="text-sm text-gray-700">{rdv.notes}</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end space-x-4">
              <button onClick={() => navigate('/infirmier/rendez-vous')} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-medium">
                Retour
              </button>
              <button onClick={() => navigate(`/infirmier/rendez-vous/${id}/modifier`)} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg font-medium">
                Modifier RDV
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsRendezVous;


