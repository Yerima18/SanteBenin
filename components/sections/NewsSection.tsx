'use client';

import { Newspaper, TrendingUp, Users, MapPin, Phone, Calendar } from 'lucide-react';
import { newsItems, currentAlerts, healthStats } from '@/data/news';
import NewsCard from '@/components/news/NewsCard';
import AlertCard from '@/components/news/AlertCard';

export default function NewsSection() {
  // Separate news into two groups: high priority and others
  const priorityNews = newsItems.filter(news => news.priority === 'Haute');
  const otherNews = newsItems.filter(news => news.priority !== 'Haute');

  return (
    <div className="space-y-8">
      {/* ===== Header section ===== */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">📰 Actualités Santé Bénin</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Restez informés des dernières actualités sanitaires, campagnes de prévention 
          et initiatives de santé publique au Bénin.
        </p>
      </div>

      {/* ===== Quick health statistics cards ===== */}
      {/* Each card shows a key health indicator for Benin */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{healthStats.vaccination_coverage}</div>
          <div className="text-sm text-green-700">Couverture vaccinale</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">-{healthStats.malaria_reduction}</div>
          <div className="text-sm text-red-700">Réduction paludisme</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{healthStats.child_mortality}</div>
          <div className="text-sm text-blue-700">Mortalité infantile</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">{healthStats.health_centers}</div>
          <div className="text-sm text-purple-700">Centres de santé</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">{healthStats.campaigns_2024}</div>
          <div className="text-sm text-orange-700">Campagnes 2024</div>
        </div>
      </div>

      {/* ===== Current health alerts ===== */}
      {/* Uses AlertCard component to display urgent health alerts */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <TrendingUp className="text-red-600 mr-3" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">
            🚨 Alertes Santé Actuelles
          </h3>
        </div>
        
        <div className="grid gap-4">
          {currentAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>

      {/* ===== High priority news ===== */}
      {/* News flagged as "Haute" priority gets special emphasis */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Newspaper className="text-blue-600 mr-3" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">
            📈 Actualités Prioritaires
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {priorityNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>

      {/* ===== Other news ===== */}
      {/* All remaining news articles are shown here */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Users className="text-green-600 mr-3" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">
            📄 Autres Actualités
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>

      {/* ===== Health contact information ===== */}
      {/* Provides official contact details for Ministry of Health and citizen platform */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
            <Phone className="mr-3 text-blue-600" size={32} />
            Contacts Information Santé
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ministry of Health press contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-blue-800 mb-3">📞 Communication Ministère Santé</h4>
            <p className="text-blue-600 text-lg font-bold mb-2">+229 21 33 35 87</p>
            <p className="text-blue-700 text-sm mb-3">Service communication et presse</p>
            <div className="text-xs text-blue-600">
              <p>📧 communication@sante.gouv.bj</p>
            </div>
          </div>
          
          {/* Citizen reporting platform */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-800 mb-3">📱 Plateforme Citoyenne</h4>
            <p className="text-green-600 text-lg font-bold mb-2">166</p>
            <p className="text-green-700 text-sm mb-3">Signalements et informations</p>
            <div className="text-xs text-green-600">
              <p>📧 alerte@sante-benin.net</p>
            </div>
          </div>
        </div>

        {/* Footer with last update info */}
        <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center">
          <p className="text-blue-800">
            <Calendar className="inline mr-2" size={16} />
            <strong>Dernière mise à jour:</strong> Septembre 2024 | 
            <strong> Source officielle:</strong> Ministère de la Santé du Bénin
          </p>
        </div>
      </div>
    </div>
  );
}
