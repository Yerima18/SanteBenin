'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CentersSection from '@/components/sections/CentersSection'; // ← Cette ligne doit être présente
import DiseaseCard from '@/components/disease/DiseaseCard';
import DiseaseModal from '@/components/disease/DiseaseModal';
import { useLanguage } from '@/hooks/useLanguage';
import { diseases } from '@/data/diseases';
import { Disease } from '@/types';

export default function HomePage() {
  const { language, changeLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('accueil');
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    setNotifications([
      "🦟 Campagne de distribution de moustiquaires dans votre quartier demain",
      "💉 Vaccination gratuite contre la rougeole du 15-20 septembre"
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        selectedLanguage={language}
        onLanguageChange={changeLanguage}
        notifications={notifications}
      />
      
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'accueil' && (
          <div className="space-y-8">
            <HeroSection onExploreClick={() => setActiveTab('maladies')} />
            
            {/* Statistics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="stat-card">
                <div className="text-3xl mb-2">🦟</div>
                <div className="text-2xl font-bold text-red-600">20%</div>
                <div className="text-sm text-gray-600">Hospitalisations paludisme</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">🪱</div>
                <div className="text-2xl font-bold text-orange-600">1.6M</div>
                <div className="text-sm text-gray-600">Personnes MTN traitées</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">🎗️</div>
                <div className="text-2xl font-bold text-purple-600">Gratuit</div>
                <div className="text-sm text-gray-600">Dépistage VIH</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">🫁</div>
                <div className="text-2xl font-bold text-green-600">6 mois</div>
                <div className="text-sm text-gray-600">Traitement tuberculose</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">💧</div>
                <div className="text-2xl font-bold text-cyan-600">Urgent</div>
                <div className="text-sm text-gray-600">Réhydratation choléra</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">🤒</div>
                <div className="text-2xl font-bold text-pink-600">2024</div>
                <div className="text-sm text-gray-600">Campagne rougeole</div>
              </div>
            </div>
            
            {/* Notifications */}
            {notifications.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <span className="mr-2">🚨</span>
                  Alertes Santé Actuelles
                </h3>
                <div className="space-y-2">
                  {notifications.map((notification, index) => (
                    <p key={index} className="text-yellow-700 text-sm">
                      {notification}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'maladies' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Maladies Prioritaires au Bénin
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Source:</strong> Plan Stratégique National Intégré 2020-2024 - Ministère de la Santé du Bénin
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diseases.map((disease) => (
                <DiseaseCard
                  key={disease.id}
                  disease={disease}
                  language={language}
                  onClick={setSelectedDisease}
                />
              ))}
            </div>
            
            <div className="text-center text-gray-600 mt-4">
              Nombre total de maladies: {diseases.length} | Langue: {language}
            </div>
          </div>
        )}
        
        {/* Autres onglets temporaires */}
        {activeTab !== 'accueil' && activeTab !== 'maladies' && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-gray-600">Cette section sera bientôt disponible.</p>
          </div>
        )}
      </main>
      
      {/* Modal */}
      {selectedDisease && (
        <DiseaseModal
          disease={selectedDisease}
          language={language}
          onLanguageChange={changeLanguage}
          onClose={() => setSelectedDisease(null)}
        />
      )}
    </div>
  );
}