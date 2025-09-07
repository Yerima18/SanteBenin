'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function NotFound() {
  const [searchTerm, setSearchTerm] = useState('');

  const suggestions = [
    { name: 'Paludisme', path: '/#maladies', icon: '🦟' },
    { name: 'Centres de santé', path: '/#centres', icon: '🏥' },
    { name: 'Vaccination', path: '/#vaccination', icon: '💉' },
    { name: 'VIH/SIDA', path: '/#maladies', icon: '🎗️' },
  ];

  const filteredSuggestions = suggestions.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-8xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">404</h1>
          <p className="text-gray-600">
            Cette page n'existe pas, mais nous pouvons vous aider à trouver ce que vous cherchez.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une maladie, un centre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Suggestions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Suggestions populaires :</h3>
          <div className="grid gap-3">
            {(searchTerm ? filteredSuggestions : suggestions).map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="text-gray-700">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bouton retour */}
        <Link 
          href="/"
          className="block w-full text-center bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200"
        >
          Retourner à l'accueil
        </Link>

        {/* Urgence */}
        <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-700 text-sm">
            <strong>Urgence médicale :</strong> 166 (gratuit)
          </p>
        </div>
      </div>
    </div>
  );
}