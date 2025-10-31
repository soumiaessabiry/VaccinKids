import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const ScanQR = () => {
  const navigate = useNavigate();
  const [scannedCode, setScannedCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (qrCode) => {
    setIsScanning(true);
    setTimeout(() => {
      setScannedCode(qrCode);
      setIsScanning(false);
    }, 1500);
  };

  const handleManualCode = (e) => {
    const code = e.target.value;
    setScannedCode(code);
    if (code.length === 20) {
      handleScan(code);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role="infirmier" />
      <Navbar userName="Dr. Sarah Alami" role="infirmier" />

      <main className="lg:ml-64 pt-16">
        <div className="p-6 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Scanner QR Code</h1>
            <p className="text-gray-600 mt-2">Scannez le QR code d'un enfant pour un accès rapide</p>
          </div>

          {/* Scanner Area */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Zone de Scan</h2>
            
            {!isScanning && !scannedCode && (
              <div className="space-y-6">
                {/* Camera Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden border-4 border-dashed border-purple-400">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                      <p className="mt-4 text-lg font-semibold text-gray-900">Positionnez le QR code</p>
                      <p className="text-sm text-gray-600">Centrez le code dans le cadre</p>
                    </div>
                  </div>
                  {/* Scan Frame */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-green-500 rounded-xl">
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-green-500 rounded-tl-xl"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-green-500 rounded-tr-xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-green-500 rounded-bl-xl"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-green-500 rounded-br-xl"></div>
                  </div>
                </div>

                {/* Manual Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ou saisir manuellement le QR code
                  </label>
                  <input
                    type="text"
                    value={scannedCode}
                    onChange={handleManualCode}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-mono"
                    placeholder="VACCINKIDS:VK-012345-ABC123:1672345678"
                  />
                </div>
              </div>
            )}

            {/* Loading */}
            {isScanning && (
              <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-lg font-semibold text-gray-900">Scannage en cours...</p>
                </div>
              </div>
            )}

            {/* Scanned Result */}
            {scannedCode && !isScanning && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Code scanné avec succès !</h3>
                    <p className="text-sm text-gray-600 font-mono">{scannedCode}</p>
                  </div>
                </div>

                {/* Child Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white">
                      AA
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">Ahmed Alami</h4>
                      <p className="text-sm text-gray-600">N° Dossier: VK-012345-ABC123</p>
                      <p className="text-sm text-gray-600">6 mois • Garçon</p>
                    </div>
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      À jour
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <button
                    onClick={() => navigate('/infirmier/enfants/1')}
                    className="p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 transition-colors text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Voir Profil</p>
                        <p className="text-xs text-gray-600">Détails complets</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate('/infirmier/vaccinations/nouvelle?enfant=1')}
                    className="p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Nouvelle Vaccination</p>
                        <p className="text-xs text-gray-600">Enregistrer vaccin</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => navigate('/infirmier/rendez-vous/nouveau?enfant=1')}
                    className="p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Créer RDV</p>
                        <p className="text-xs text-gray-600">Planifier visite</p>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Scan Another */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => {
                      setScannedCode('');
                    }}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                  >
                    Scanner un autre QR code
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Astuce</h3>
              <p className="text-sm text-gray-600">
                Placez le QR code dans le cadre de scan. Vous pouvez également saisir manuellement le code.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Format QR</h3>
              <p className="text-sm text-gray-600 font-mono">
                VACCINKIDS:VK-XXXXXXXX-XXXX:Timestamp
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScanQR;

