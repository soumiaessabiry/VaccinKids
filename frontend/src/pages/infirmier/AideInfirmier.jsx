import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const AideInfirmier = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqs = [
    {
      question: "Comment ajouter un enfant ?",
      answer: "Allez dans Enfants > Ajouter un enfant et remplissez le formulaire en 4 étapes."
    },
    {
      question: "Comment scanner un QR code ?",
      answer: "Utilisez l'option Scanner QR dans le menu pour identifier rapidement un enfant."
    },
    {
      question: "Comment modifier une vaccination ?",
      answer: "Cliquez sur la vaccination dans l'historique et sélectionnez Modifier."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Aide & Support</h1>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">FAQ</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenSection(openSection === index ? null : index)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <svg className={`w-5 h-5 text-gray-600 transition-transform ${openSection === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openSection === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Support</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Email: support@vaccinkids.com</p>
                <p className="text-gray-600">Téléphone: +212 6 00 00 00 00</p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg font-medium">
                  Ouvrir un ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AideInfirmier;

