'use client'; 
// This file is a Next.js Client Component (can use hooks like useState, useEffect)

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CentersSection from '@/components/sections/CentersSection';
import DiseaseCard from '@/components/disease/DiseaseCard';
import DiseaseModal from '@/components/disease/DiseaseModal';
import { useLanguage } from '@/hooks/useLanguage';
import { diseases } from '@/data/diseases';
import { Disease } from '@/types';
import VaccinationSection from '@/components/sections/VaccinationSection';
import NewsSection from '@/components/sections/NewsSection';

export default function HomePage() {
  // Get selected language and handler from custom hook
  const { language, changeLanguage } = useLanguage();

  // Track active navigation tab ("accueil", "maladies", etc.)
  const [activeTab, setActiveTab] = useState('accueil');

  // Track which disease card is currently selected (for modal)
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  // Notifications (alerts shown to users)
  const [notifications, setNotifications] = useState<string[]>([]);

  // Load sample notifications on first render
  useEffect(() => {
    setNotifications([
      "🦟 Campagne de distribution de moustiquaires dans votre quartier demain",
      "💉 Vaccination gratuite contre la rougeole du 15-20 septembre"
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER with language selector + notifications */}
      <Header 
        selectedLanguage={language}
        onLanguageChange={changeLanguage}
        notifications={notifications}
      />
      
      {/* MAIN NAVIGATION (tabs) */}
      <Navigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {/* MAIN CONTENT */}
      <main className="container mx-auto px-4 py-8">

        {/* ----------------------------- */}
        {/* HOME PAGE ("accueil" tab)     */}
        {/* ----------------------------- */}
        {activeTab === 'accueil' && (
          <div className="space-y-8">
            {/* Hero section with CTA */}
            <HeroSection onExploreClick={() => setActiveTab('maladies')} />
            
            {/* Statistics grid (diseases, hospitals, vaccines, etc.) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="stat-card">
                <div className="text-3xl mb-2">🦠</div>
                <div className="text-2xl font-bold text-red-600">12</div>
                <div className="text-sm text-gray-600">Maladies prioritaires</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">🦟</div>
                <div className="text-2xl font-bold text-red-600">20%</div>
                <div className="text-sm text-gray-600">Hospitalisations paludisme</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">💉</div>
                <div className="text-2xl font-bold text-green-600">Gratuit</div>
                <div className="text-sm text-gray-600">Vaccination PEV</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl mb-2">🏥</div>
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Centres de santé</div>
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
                <div className="text-3xl mb-2">🧠</div>
                <div className="text-2xl font-bold text-indigo-600">Saisonnier</div>
                <div className="text-sm text-gray-600">Épidémies méningite</div>
              </div>
            </div>
            
            {/* Notifications / Alerts */}
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

        {/* ----------------------------- */}
        {/* DISEASES PAGE ("maladies" tab) */}
        {/* ----------------------------- */}
        {activeTab === 'maladies' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Maladies Prioritaires au Bénin
            </h2>
            
            {/* Info banner (source reference) */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Source:</strong> Plan Stratégique National Intégré 2020-2024 - Ministère de la Santé du Bénin
              </p>
            </div>
            
            {/* Disease cards grid */}
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
            
            {/* Footer text */}
            <div className="text-center text-gray-600 mt-4">
              Nombre total de maladies: {diseases.length} | Langue: {language}
            </div>
          </div>
        )}

        {/* ----------------------------- */}
        {/* CENTERS PAGE ("centres" tab)  */}
        {/* ----------------------------- */}
        {activeTab === 'centres' && <CentersSection />}
        
        {/* ----------------------------- */}
        {/* VACCINATION PAGE               */}
        {/* ----------------------------- */}
        {activeTab === 'vaccination' && <VaccinationSection />}    
        
        {/* ----------------------------- */}
        {/* NEWS PAGE ("actualites" tab)  */}
        {/* ----------------------------- */}
        {activeTab === 'actualites' && <NewsSection />}       
      </main>
      
      {/* ----------------------------- */}
      {/* DISEASE MODAL (on card click) */}
      {/* ----------------------------- */}
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
